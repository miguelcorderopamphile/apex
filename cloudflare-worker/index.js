export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/health") {
      return new Response("ok", { status: 200 });
    }

    if (url.pathname === "/ws/signaling") {
      const pair = new WebSocketPair();
      const [client, server] = Object.values(pair);

      const room = url.searchParams.get("room") || "default";
      const pin = url.searchParams.get("pin") || "";

      await env.SIGNALING_ROOMS.put(
        `pin:${room}`,
        pin,
        { expirationTtl: 3600 }
      );

      const ctx = { webSocket: server };
      server.accept();

      const peerId = crypto.randomUUID();
      await addPeer(env, room, peerId, server);

      server.addEventListener("message", async (event) => {
        const peers = await getPeers(env, room);
        for (const [pid, ws] of peers) {
          if (pid !== peerId && ws.readyState === 1) {
            try { ws.send(event.data); } catch (_) {}
          }
        }
      });

      server.addEventListener("close", async () => {
        await removePeer(env, room, peerId);
      });

      server.addEventListener("error", async () => {
        await removePeer(env, room, peerId);
      });

      return new Response(null, { status: 101, webSocket: client });
    }

    return new Response("Not found", { status: 404 });
  },
};

async function addPeer(env, room, peerId, ws) {
  const key = `room:${room}`;
  const existing = await env.SIGNALING_ROOMS.get(key, { type: "json" }) || [];
  existing.push({ peerId, connectedAt: Date.now() });
  await env.SIGNALING_ROOMS.put(key, JSON.stringify(existing), { expirationTtl: 3600 });

  if (!globalThis._wsMap) globalThis._wsMap = {};
  globalThis._wsMap[`${room}:${peerId}`] = ws;
}

async function removePeer(env, room, peerId) {
  const key = `room:${room}`;
  const existing = await env.SIGNALING_ROOMS.get(key, { type: "json" }) || [];
  const filtered = existing.filter(p => p.peerId !== peerId);

  if (filtered.length === 0) {
    await env.SIGNALING_ROOMS.delete(key);
    await env.SIGNALING_ROOMS.delete(`pin:${room}`);
  } else {
    await env.SIGNALING_ROOMS.put(key, JSON.stringify(filtered), { expirationTtl: 3600 });
  }

  if (globalThis._wsMap) {
    delete globalThis._wsMap[`${room}:${peerId}`];
  }
}

async function getPeers(env, room) {
  if (!globalThis._wsMap) return [];
  const result = [];
  for (const [key, ws] of Object.entries(globalThis._wsMap)) {
    if (key.startsWith(`${room}:`) && ws.readyState === 1) {
      const peerId = key.split(":").slice(1).join(":");
      result.push([peerId, ws]);
    }
  }
  return result;
}
