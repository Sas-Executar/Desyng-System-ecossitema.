# @executar/blog

Astro + React islands + Tailwind, consuming `apps/admin` (Payload CMS) as a headless content source over plain REST.

## Editorial Hybrid v6 — this app's own design system

As of 2026-09-06, this app's visual system is **Editorial Hybrid v6** (NatGeo × Apple UX) — a design system approved specifically for this blog, replacing `@executar/design-tokens` + `@executar/ui`. This was a deliberate architectural decision, not a partial migration:

- **Identity**: yellow `#ffcc00` / black, never blue. SF Pro (UI) + New York serif (article body only). Rectilinear everywhere (`--radius-card: 0`), 8px chamfer on buttons only, no true pill shape.
- **Why not a 3rd theme in `@executar/design-tokens`?** That package's two themes (`executar-classic` / `modernismo-operacional`, see its own README) share one semantic contract consumed generically by `@executar/ui`'s components (`Button`/`Card`/`Badge`/...). Editorial Hybrid's components (`GlobalNav`/`Drawer`/`BottomBar`/`FeatureMedia`/`Selection`/`Carousel`/...) don't reuse `@executar/ui` at all — forcing this into that package would be a category error, not a simplification. Confirmed with the user before making this change (this app used to depend on both packages; it depends on neither now, except `@executar/callout-protocol` for the Callout schema/registry).
- **Tokens**: `src/styles/editorial-tokens.css` — ported byte-for-byte from the approved handoff's `tokens-hybrid.css`, same names.
- **Components**: `src/components/editorial/` — `GlobalNav`, `Drawer`, `BottomBar`, `Hero`, `FeatureMedia`, `Button`, `PromoGrid`, `Selection`, `Carousel`, `ArticleMeta`, `Footer`, plus `../Callout.tsx` and `../RichTextRenderer.tsx`.
- **Full spec**: see the handoff markdown supplied for this phase (tokens, components, states, responsive rules, accessibility, edge cases, "what NOT to do").

## Pages

- `/blog` — the editorial homepage: Hero → FeatureMedia (100vh, the first "Nossa Seleção" post) → PromoGrid (4 fixed editorial tiles) → Selection ("Nossa Seleção", real `featured` posts) → Carousel ("Explore mais", remaining recent posts). Accepts `?categoria=<slug>` to filter by the real category taxonomy (see below).
- `/blog/[slug]` — single post: FeatureMedia (100vh, the post's own `featuredImage` — a decision explicit in the v6 handoff: every article, not just the home, opens with a full-bleed vertical cover) → article meta → body via `RichTextRenderer`.

`output: 'server'` (not the default `static`) — content lives in the CMS and changes after this app is built; confirmed the hard way in an earlier phase (`GetStaticPathsRequired` on the default `static` output).

## Real category taxonomy, not the prototype's placeholder one

The Editorial Hybrid v6 prototype's nav uses placeholder editorial topics (Ciência/Viagem/Animais/História/Fotografia) that don't correspond to any real content in this repo — `Posts.category` is a product/dev-blog taxonomy (`announcements`/`coding`/`agents`/`work`/`productivity`). The nav, drawer, and category rail render THESE real categories (translated via `CATEGORY_LABELS` in `src/lib/payload-client.ts`), so every link actually resolves to real posts instead of a dead end.

## Accessibility fix implemented (was the handoff's one open item)

The handoff explicitly flagged the drawer's focus trap as a **pending, required-before-production** fix (Tab still reached content behind the backdrop). Implemented in `BaseLayout.astro`'s script: `<main>` gets `inert` while the drawer is open (removing it from the focus/accessibility tree, not just visually dimming it), and Tab/Shift+Tab cycle only within the drawer's own focusable elements. Verified with Playwright: focus stayed inside the drawer for 10 consecutive Tab presses, and `inert` toggles correctly with open/close.

## Local setup

```bash
# apps/admin must be running (pnpm --filter @executar/admin dev) and seeded
pnpm install
pnpm --filter @executar/admin seed    # seeds 5 posts incl. 3 `featured`, with generated placeholder covers
pnpm --filter @executar/blog dev      # http://localhost:4321/blog
pnpm --filter @executar/blog build    # astro check && astro build (verified)
pnpm --filter @executar/blog preview
```

`PAYLOAD_URL` (see `.env.example`) points at the admin app — defaults to `http://localhost:3000`.

## Real bugs found and fixed in this phase (not hypothetical)

1. **Payload media URLs are relative to the admin's own origin** (`/api/media/file/x.png`) — nothing consumed `featuredImage.url` before this phase (the old `PostCard` never rendered an image), so this was a real, silent bug: a browser resolves that path against the *blog's* origin (`localhost:4321`), not the admin's (`localhost:3000`) → 404 on every cover. Fixed once, centrally, in `payload-client.ts` (`absolutizeMedia`), so every consumer (FeatureMedia/Selection/Carousel) gets a working URL.
2. **Focus trap** (handoff's own flagged pending item) — see above.
3. Stale demo content: the original seed post's body text referenced `@executar/ui`, which this app no longer depends on. Caught while verifying the article page rendered correctly; fixed via the seed script's patch path.

## Not yet done / follow-ups

- **Inline images inside article body** (Payload's default Lexical `upload` node) aren't yet restyled to the handoff's `.inline-media`/`.media-box` full-bleed vertical treatment — no seeded post has an inline image to verify a custom converter against, so the default Payload rendering is left in place rather than shipping an unverified override.
- **Pullquote** (`.pullquote`, 0–1 per article per the handoff) has no Payload field/block yet — no seeded content demonstrates it.
- Search (`⌕` in the nav) has no view — same "pendência para o time de produto" the handoff itself calls out.
- `PromoGrid`'s 4 tiles use the handoff's fixed editorial copy verbatim (confirmed with the user: it doesn't map to any Payload data, so there's nothing to "pull" there).
- No real photography — `apps/admin/src/seed.ts` generates gradient placeholder covers via `sharp`; editors replace `featuredImage` with real, licensed images later.
