export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/health") {
      return new Response("ok", { status: 200 });
    }

    if (url.pathname === "/ws/signaling") {
      const room = url.searchParams.get("room") || "default";
      const pin = url.searchParams.get("pin") || "";

      const id = env.ROOM_DO.idFromName(room);
      const stub = env.ROOM_DO.get(id);

      return stub.fetch(request);
    }

    return new Response("Not found", { status: 404 });
  },
};

export class RoomDO {
  constructor(state, env) {
    this._state = state;
    this._env = env;
    this._peers = new Map();
    this._pin = null;
  }

  async fetch(request) {
    const url = new URL(request.url);
    const pin = url.searchParams.get("pin") || "";

    const pair = new WebSocketPair();
    const [client, server] = Object.values(pair);

    if (this._peers.size === 0) {
      this._pin = pin;
    } else if (this._pin && pin !== this._pin) {
      server.accept();
      server.send(JSON.stringify({ type: "error", message: "PIN incorrecto" }));
      server.close(4001, "PIN incorrecto");
      return new Response(null, { status: 101, webSocket: client });
    }

    server.accept();

    const peerId = crypto.randomUUID();
    this._peers.set(peerId, server);

    server.addEventListener("message", (event) => {
      for (const [pid, ws] of this._peers) {
        if (pid !== peerId && ws.readyState === 1) {
          try { ws.send(event.data); } catch (_) {}
        }
      }
    });

    const cleanup = () => {
      this._peers.delete(peerId);
      if (this._peers.size === 0) {
        this._state.blockConcurrencyWhile(async () => {
          await this._state.storage.deleteAll();
        });
      }
    };

    server.addEventListener("close", cleanup);
    server.addEventListener("error", cleanup);

    return new Response(null, { status: 101, webSocket: client });
  }
}
