# Strataflow Website Implementation Task List (From Audit)

This task list converts the implementation audit into a delivery backlog focused on **SEO clarity, conversion readiness, trust, and measurement**.

## Priority legend

- **P0** = critical, do immediately (blocks growth/conversion)
- **P1** = high impact, do in the next sprint
- **P2** = medium impact, do after P0/P1 stabilization

---

## P0 - Critical fixes (Week 1)

### 1) Canonical hostname alignment (bare vs www)
- [ ] Choose canonical host (`https://strataflowsystems.com` recommended, since live redirects already favor bare domain)
- [ ] Update canonical URL in `index.html`
- [ ] Update SEO base URL in `src/content/site.ts`
- [ ] Update `public/robots.txt` sitemap reference
- [ ] Update `public/sitemap.xml` URLs
- [ ] Verify Open Graph/Twitter `og:url` / `twitter:url` values match canonical host
- [ ] Validate redirects: `www -> bare` is a single 301 hop

**Definition of done:** all declared canonicals and sitemap URLs match the final hostname and Search Console reports no duplicate host confusion.

### 2) Fix broken/placeholder conversion paths
- [ ] Replace placeholder Microsoft Forms iframe URL on contact page
- [ ] Replace placeholder Formspree endpoint with real endpoint (or remove fallback)
- [ ] Replace `Book a discovery call` placeholder `href="#"` with real scheduling URL
- [ ] Replace footer LinkedIn placeholder with real company profile URL
- [ ] Click-test every CTA in header, hero, footer, and contact page

**Definition of done:** every primary CTA resolves to a live destination and can be completed end-to-end.

### 3) Add valid social preview asset
- [ ] Create and add `public/og-image.png` (1200x630)
- [ ] Ensure `og:image` and `twitter:image` point to existing, publicly accessible file on canonical host
- [ ] Test preview rendering (LinkedIn/Twitter card validators or equivalent)

**Definition of done:** social shares show correct branded preview image, title, and description.

### 4) Reduce chatbot conversion friction
- [ ] Default chatbot to minimized on all devices
- [ ] Prevent auto-open behavior on first page load
- [ ] Disable or defer chatbot on high-intent `/contact` route
- [ ] Only create chat session after explicit user open/action

**Definition of done:** chatbot is available but does not compete with first-view CTA flow.

### 5) Remove internal/testing surfaces from public discovery
- [ ] Remove "AI Consultancy Session" and "StrataBot Testing" from primary nav (unless intentionally public products)
- [ ] If retained for internal use, add `noindex, nofollow` metadata
- [ ] Exclude test/internal URLs from sitemap

**Definition of done:** public navigation and indexing reflect only commercial/buyer-safe pages.

---

## P1 - High-impact structural improvements (Weeks 2–4)

### 6) Improve SEO delivery model for route-level pages
- [ ] Implement prerender or SSR for key routes (`/`, `/services`, `/case-studies`, `/about`, `/contact`)
- [ ] Ensure each route ships server-visible unique title/meta (not only client-injected)
- [ ] Add route-level OG/Twitter tags where practical

**Definition of done:** crawlers and social bots receive rich metadata without relying on client-side JS execution.

### 7) Add structured data (JSON-LD)
- [ ] Add `Organization` + `WebSite` schema on homepage
- [ ] Add `Service` schema to core service pages
- [ ] Add `FAQPage` schema where FAQ sections exist
- [ ] Validate in Rich Results Test

**Definition of done:** structured data validates cleanly and improves semantic eligibility in SERPs.

### 8) Correct 404 / soft-404 behavior
- [ ] Replace blanket unknown-route redirect to home with a true Not Found page in app
- [ ] Preserve valid 404 handling at hosting layer where possible
- [ ] Keep SPA routing without masking broken URLs as homepage

**Definition of done:** unknown URLs produce a user-visible 404 state and cleaner crawl diagnostics.

### 9) Install analytics and search instrumentation
- [ ] Add GA4 tracking
- [ ] Verify Google Search Console property and sitemap submission
- [ ] Track key events: CTA click, chat open, form start, form submit, deck click/download
- [ ] Build basic funnel dashboard for traffic → engagement → lead actions

**Definition of done:** baseline measurement exists for all core conversion events and SEO monitoring.

### 10) Trust/compliance hardening
- [ ] Expand privacy notice for chatbot processing, cookies/local storage, retention, lawful basis, contact details
- [ ] Ensure cookie/device identifiers are documented accurately
- [ ] Add visible trust assets: delivery method summary, sample outputs, stronger proof blocks

**Definition of done:** compliance narrative matches implementation and reinforces governance-forward positioning.

---

## P2 - Growth and content expansion backlog (Month 2+)

### 11) Build indexable service-page depth
- [ ] Launch at least 3 dedicated service pages:
  - Microsoft 365 workflow automation
  - Operations compliance & audit trails
  - Geospatial/field-ops workflow integration
- [ ] Assign unique intent-driven title, H1, meta description, internal links, and CTA per page

### 12) Strengthen conversion architecture
- [ ] Introduce clear offer ladder (discovery call, workflow audit, diagnostic, sample deliverable)
- [ ] Add route-specific CTA strategy (home vs services vs case studies)
- [ ] Add testimonials/logos/case proof near CTAs

### 13) Accessibility uplift
- [ ] Ensure one meaningful `h1` per page
- [ ] Add explicit labels to form controls (not placeholder-only)
- [ ] Run accessibility audit and fix key issues (contrast, keyboard focus, semantics)

### 14) Performance optimizations
- [ ] Introduce route-level lazy loading/code splitting
- [ ] Defer non-critical chat dependencies
- [ ] Optimize heavy image assets and verify Core Web Vitals improvements

### 15) SEO/content program execution (90–180 day plan)
- [ ] Publish core commercial pages first, then mid-funnel + proof cadence
- [ ] Build internal-link hub model between services, industries, and case studies
- [ ] Run backlink outreach to relevant Microsoft/industry sources
- [ ] Track query/ranking progress monthly and iterate titles/meta/CTAs

---

## Suggested sprint sequence

1. **Sprint 1 (P0):** canonical, conversion links/forms, OG image, chatbot default behavior, remove test pages from nav.
2. **Sprint 2 (P1):** prerender/SSR for key routes, JSON-LD, true 404 handling, GA4 + GSC events.
3. **Sprint 3 (P2):** service-page expansion, trust assets, accessibility/performance tuning, content and outreach cadence.

## Delivery checklist for the next release

- [ ] Canonical host and sitemap consistency verified
- [ ] All top-level CTAs tested and live
- [ ] Social preview image visible in link previews
- [ ] Chatbot minimized by default
- [ ] Internal test pages removed from public nav/indexing
- [ ] GA4 + Search Console installed and validated
