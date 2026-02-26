# Strataflow Systems Marketing Site

Premium, static-deployable marketing website for **Strataflow Systems** built with Vite + React + TypeScript, Tailwind CSS, Framer Motion, React Router, and lucide-react.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Deploy to Cloudflare Pages

1. Push repository to GitHub/GitLab.
2. In Cloudflare Pages, create project from repo.
3. Configure build:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - If `wrangler.toml` is detected in your Pages build logs, keep it Pages-compatible (do **not** add a `[build]` block; Pages rejects it).
4. Set **Node version: `20`** in Cloudflare Pages environment settings (or commit `.nvmrc` with `20`).
5. Ensure SPA fallback routing is enabled using `public/_redirects` with `/* /index.html 200`.
6. Deploy.


## Cloudflare Pages 404 troubleshooting

If your deployed site shows a 404, verify these settings first:

1. **Framework preset:** `Vite` (or `None` if manually setting commands).
2. **Build command:** `npm run build` (set in Cloudflare Pages dashboard)
3. **Build output directory:** `dist`
4. **Node version:** use an LTS runtime (18+).
5. Ensure `public/_redirects` is present with:

   ```
   /* /index.html 200
   ```

6. Re-deploy after changing build settings (Pages does not always retro-apply to prior artifacts).

This repo also includes:
- `wrangler.toml` with `pages_build_output_dir = "dist"` (Pages-compatible schema)
- `public/404.html` fallback redirect guard

## SEO assets

- `public/sitemap.xml`
- `public/robots.txt`
- Canonical + OpenGraph + Twitter cards are handled globally and per page.

## Contact form wiring

- Primary option: Microsoft Form iframe (`/contact`). Replace the placeholder `src` with your form URL.
- Fallback option: native HTML form posting to Formspree endpoint (`https://formspree.io/f/your-form-id`). Replace with your real Formspree form id.

## Design tokens

### Color system

- Base background: `slate-50` (`#f8fafc`)
- Primary text: `slate-900`
- Accent primary: `accent-600` (`#1664ab`)
- Accent hover: `accent-500` (`#1f78c8`)
- Accent subtle surface: `accent-50` (`#edf8ff`)

### Typography scale

- Hero heading: `text-4xl` to `text-5xl`
- Section heading: `text-3xl` to `text-4xl`
- Body large: `text-lg`
- Body default: `text-base`
- Small/supporting text: `text-sm`

### Spacing

- Section vertical rhythm: `py-16` (mobile), `md:py-24` (desktop)
- Container width: `max-w-6xl`
- Card padding: `p-5`/`p-6`

### Motion rules

- Framer Motion reveal transitions: `duration 0.5s`, eased out.
- Animations trigger once with viewport intersection (`amount: 0.2`).
- Reduced-motion users receive near-instant transitions and no large movements.
- No parallax or heavy animation loops.

## Structure highlights

- `src/content/site.ts`: single source of truth for navigation and all page copy.
- `src/components/ui`: reusable primitive UI components.
- `src/components/sections`: reusable page sections.
- `src/components/layout`: shell components (header/footer/banner).

## OpenAI ChatKit integration (Cloudflare Pages)

This project uses a Cloudflare Pages Function to create a short-lived ChatKit session and return an ephemeral `client_secret` to the browser.

### Required Cloudflare Pages environment variables

Set these variables in **Pages > Settings > Environment variables** (for Preview and Production):

- `OPENAI_API_KEY`: your server-side OpenAI API key
- `OPENAI_WORKFLOW_ID`: ChatKit workflow id used for session creation
- `OPENAI_CHATKIT_ENCODED_WIDGET` *(optional)*: paste `encodedWidget` from ChatKit output if you want to pin a specific widget payload

### Security note

The OpenAI API key is intentionally used only inside the Pages Function (`/functions/api/chatkit/session.ts`) and is never shipped to client-side JavaScript. The frontend requests only an ephemeral `client_secret` from `/api/chatkit/session`, which limits exposure and follows least-privilege best practices.

### Local and preview testing

#### First-time setup (if you have not done anything yet)

1. In Cloudflare Dashboard, open **Workers & Pages** → your Pages project.
2. Go to **Settings** → **Environment variables**.
3. Add both variables in **Preview** and **Production**:
   - `OPENAI_API_KEY`
   - `OPENAI_WORKFLOW_ID`
4. Trigger a redeploy from **Deployments** (Retry/Redeploy).
5. Open your site homepage and scroll to **Chat with our team** to confirm widget render.
6. (Optional) If ChatKit gave you JSON with `encodedWidget`, copy that string into `OPENAI_CHATKIT_ENCODED_WIDGET` in both Preview + Production envs.
7. If it fails, check browser DevTools Network for `POST /api/chatkit/session` and verify status/body.

#### Local Pages Functions run

1. Create local env file from template and fill values:

   ```bash
   cp .dev.vars.example .dev.vars
   ```

2. Build then run Pages locally:

   ```bash
   npm run dev:pages
   ```

   (or run `npm run build` then `npm run preview:pages`)

3. Open the local URL and verify the widget mounts in the `#chatkit` container.
4. In preview deployments, configure the same env vars in the Preview environment and test `/api/chatkit/session` plus homepage widget rendering.
