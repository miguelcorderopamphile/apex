# Pipeline de Build y Deploy

## Build del Instalador Windows (GitHub Actions)

1. Workflow: `.github/workflows/build-windows.yml`
2. Trigger: push de tag `v*` o `workflow_dispatch`
3. Compila en `windows-latest` con `cargo tauri build --target x86_64-pc-windows-msvc`
4. Instalador en: `target/x86_64-pc-windows-msvc/release/bundle/nsis/*.exe`
5. Release automatico en GitHub con el tag

### Comandos
```bash
git add -A && git commit -m "msg"
git tag -a vX.Y.Z -m "Release vX.Y.Z"
git push origin main && git push origin vX.Y.Z
```

## Deploy Frontend (Cloudflare Pages)

```bash
cd ui && npm run build
cp descargas.html dist/
npx wrangler pages deploy dist --project-name=datiolabs-demo
```

### Verificacion
- Abrir https://datiolabs.com/descargas
- Link de descarga apunta a `https://github.com/miguelcorderopamphile/apex/releases/download/vX.Y.Z/...`
- Actualizar `href` en `ui/descargas.html` y `ui/public/descargas/index.html` si cambia el tag

## Compilacion Local
```bash
cargo check -p datiolabs-core    # debe compilar limpio
cargo check -p datiolabs-ui       # requiere GTK/webkit2gtk (solo Linux con deps)
cd ui && npx tsc --noEmit         # TypeScript debe compilar sin errores
```
