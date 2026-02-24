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
   - If `wrangler.toml` is detected in your Pages build logs, ensure it includes `[build] command = "npm run build"` so Cloudflare does not skip the build step.
4. Ensure SPA fallback routing is enabled using `public/_redirects` with `/* /index.html 200`.
5. Deploy.


## Cloudflare Pages 404 troubleshooting

If your deployed site shows a 404, verify these settings first:

1. **Framework preset:** `Vite` (or `None` if manually setting commands).
2. **Build command:** `npm run build` (in Pages dashboard and/or `wrangler.toml` `[build]` block)
3. **Build output directory:** `dist`
4. **Node version:** use an LTS runtime (18+).
5. Ensure `public/_redirects` is present with:

   ```
   /* /index.html 200
   ```

6. Re-deploy after changing build settings (Pages does not always retro-apply to prior artifacts).

This repo also includes:
- `wrangler.toml` with `pages_build_output_dir = "dist"`
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
