# Kristine De Vera — Static SPA

Plain Vite + React 19 + React Router SPA. No SSR, no TanStack Start.

## Develop
```bash
bun install   # or: npm install
bun run dev
```

## Build
```bash
bun run build
```
Output goes to `dist/`.

## Deploy to Render (Static Site)

1. Push this repo to GitHub.
2. On Render, create a new **Static Site** → connect the repo.
3. Settings:
   - **Build command**: `npm install && npm run build`
   - **Publish directory**: `dist`
4. Add a **Rewrite rule** (Settings → Redirects/Rewrites) so client-side routes work on refresh:
   - Source: `/*`
   - Destination: `/index.html`
   - Action: **Rewrite**

A `render.yaml` is included so you can use Render's "Blueprint" deploy instead — it sets the build/publish dirs and the SPA rewrite automatically.
