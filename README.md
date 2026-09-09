# DatioLabs Retail

Sistema de gestión retail local-first para Windows. Operable por personal de caja sin experiencia técnica.

## Arquitectura

```
Desktop Tauri (Rust + TypeScript) → Axum server :4000 → Sled DB
                                    ↑
Mobile browser → QR → P2P WebRTC DataChannel → proxy a Axum
```

- **datiolabs-core**: modelos, DB (Sled), capacidades (bitmasks), módulos (abasto, panadería, licorería)
- **datiolabs-ui**: backend Tauri + Axum embebido + panel mobile (panel.html)
- **ui/**: frontend desktop (TypeScript + Vite)

## Módulos

| Rubro | Capacidades |
|---|---|
| Abasto | Venta unitaria, por peso, caja/mayorista |
| Panadería | Lotes FEFO, merma perecedero, caducidad |
| Licorería | Grado alcohólico, interbloqueo +18, cuenta abierta, tasa bloqueada por línea |

## Build Local

```bash
# Compilar core (rápido)
cargo check -p datiolabs-core

# Build completo Windows (genera instalador NSIS)
cd datiolabs-ui
cargo tauri build --target x86_64-pc-windows-msvc
```

Requisitos: Rust stable + Node 20 + WebView2 Runtime.

## Deploy

Los builds se ejecutan en **local** durante el desarrollo. GitHub Actions solo se usa para generar el instalador NSIS y el Release cuando el producto está listo para shippear.

```bash
git tag -a vX.Y.Z -m "Release vX.Y.Z"
git push origin main && git push origin vX.Y.Z
```

## Estado actual

- Fases 1-3 completadas (scrapper BCV, núcleo vanilla, GUI dual)
- P2P desktop↔mobile funcional (WebRTC DataChannel + signaling WebSocket)
- 37+ comandos Tauri + 37 endpoints Axum
- Panel mobile completo (7 tabs, CRUD, SSE, gráficos)
- Build Windows compilando limpio en CI

## Licencia

Software comercial con licencia perpetua.
