# @executar/blog

Astro + React islands + Tailwind, consuming `apps/admin` (Payload CMS) as a headless content source over plain REST, and `@executar/ui` + `@executar/design-tokens` for everything visual. Stack decided in `design-system/00_GOVERNANCE/SOT_RESOLUTION.md` #2.

## Pages

- `/blog` — listing, fetches `getPosts()` from Payload.
- `/blog/[slug]` — single post, fetches `getPostBySlug()`, renders Lexical richText via `RichTextRenderer` (custom Callout block converter → `@executar/ui`'s `<Callout>`).

`output: 'server'` (not the default `static`) — content lives in the CMS and changes after this app is built; a dynamic route needs on-demand rendering, not a build-time path list. Confirmed the hard way: the default `static` output threw `GetStaticPathsRequired` on `/blog/[slug]` the first time this ran.

## Local setup

```bash
# apps/admin must be running (pnpm --filter @executar/admin dev) and seeded
pnpm install
pnpm --filter @executar/blog dev      # http://localhost:4321/blog
pnpm --filter @executar/blog build    # astro check && astro build (verified)
pnpm --filter @executar/blog preview
```

`PAYLOAD_URL` (see `.env.example`) points at the admin app — defaults to `http://localhost:3000`.

## Verified end-to-end (this session)

- `astro check` — 0 errors on 11 files.
- `astro build` — production build compiles; booted `dist/server/entry.mjs` directly and both `/blog` and `/blog/[slug]` returned 200.
- Screenshotted both pages with the pre-installed Chromium (`/opt/pw-browsers`), zero console errors.
- The rendered post page shows a real Payload-authored `callout` block going through `@executar/callout-protocol`'s registry and coming out as the exact same `<Callout>` visual as the Storybook screenshots in `packages/ui` — the whole point of the ADR-001 protocol, actually working, not just documented.

## Real bugs found and fixed here (not hypothetical)

1. **`GetStaticPathsRequired`** — default `output: 'static'` can't serve a dynamic route without a build-time path list. Fixed by switching to `output: 'server'` + `@astrojs/node`.
2. **PostCard grid collapsed to one narrow column** — `blog/index.astro` reused the design system's generic `.grid` utility (the 12/8/4-equal-column layout primitive from `RESPONSIVE-SPEC.md`'s general grid), but a card grid needs its own `repeat(N, 1fr)` breakpoints, not one track of a 12-column grid. Fixed with a dedicated `.post-grid` (1/2/3 columns per `RESPONSIVE-SPEC.md`'s stated rule for post listings).
3. **`Badge` stretched to the card's full width** — `PostCard`'s flex column defaulted to `align-items: stretch`, stretching the inline `Badge` span. Only visible once rendered with real sibling content in an actual page, not in an isolated Storybook story. Fixed at the source, in `packages/ui/src/styles.css` (`.ex-badge { align-self: flex-start; flex-shrink: 0; }`), so every future consumer is protected, not just this one call site.

## Not yet done

`CategoryPill` filter tabs on the listing, `CopyLinkButton`/`NewsletterForm` (specified in `COMPONENT-SPEC.md`, not built), pagination, image handling for `featuredImage`, and only draft posts exist right now (no publish workflow wired up in `apps/admin` yet).
