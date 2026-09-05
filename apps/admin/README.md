# @executar/admin

Payload CMS 3 (on Next.js 16) + PostgreSQL — the content/admin SOT per `references/source-docs/ADR/EXECUTAR_ADR_CREATOR_OPERATIONS_OS_V1/` ("SOT = Payload + PostgreSQL"). `apps/blog` (Astro) consumes this as a headless CMS over REST — see `design-system/00_GOVERNANCE/SOT_RESOLUTION.md` #2 for why Astro + Payload aren't in conflict.

## Collections

- **Users** — auth-enabled, admin login.
- **Media** — uploads.
- **Posts** — blog content. Field shape mirrors `references/source-docs/astro-blog.md` §5's frontmatter schema (category/date/readingTime/title/description). `content` is a Lexical richText field with a `Callout` block registered via `BlocksFeature`.
- **Callout block** (`src/blocks/Callout.ts`) — implements ADR-001 §9 exactly: `type` (select), `title` (text), `body` (richText). `type` options come from `@executar/callout-protocol`'s `CALLOUT_TYPES`, so the CMS schema and the runtime registry can never drift apart.

## Local setup

```bash
# 1. Postgres must be running and DATABASE_URI set (see .env.example)
service postgresql start   # if not already running

# 2. Install (from repo root) and generate types/import map
pnpm install
pnpm --filter @executar/admin generate:types

# 3. Run
pnpm --filter @executar/admin dev     # http://localhost:3000/admin
pnpm --filter @executar/admin seed    # creates one sample post with a Callout block
pnpm --filter @executar/admin build   # production build (verified — compiles clean)
```

## Verified end-to-end (this session)

- Local Postgres 16 cluster started, `executar_dev` database created.
- `pnpm dev` creates the schema (`posts`, `media`, `users`, … tables) on first request.
- `pnpm seed` creates a real post with a `callout` block via the Payload Local API.
- `GET /api/posts?where[slug][equals]=...` returns the seeded post, Callout block included, over plain REST — this is exactly what `apps/blog` will call.
- `pnpm build` (production, Turbopack) compiles cleanly.

## Bug fixed here — real, not hypothetical

The official Payload blank template (fetched from `payloadcms/payload` `templates/blank` at the tag matching our `payload` version) hardcodes `next.config.ts`'s `turbopack.root` to its own folder — correct in Payload's single-app template repo, **wrong** in this monorepo, where the pnpm lockfile lives two levels up. That caused `next dev` to fail with "Could not find the Next.js package" the moment a route was hit. Fixed by removing the override and letting Next's own root-auto-detection (documented in `node_modules/next/dist/docs/.../turbopack.md`, "Root directory") find the real monorepo root via `pnpm-lock.yaml`.

A second, related issue: the template's internal collection imports use an explicit `.js` extension (`'./collections/Users.js'`) resolving to a `.ts` file — a pattern that needs `webpack.resolve.extensionAlias`, which only applies when Next actually uses webpack. Turbopack (the Next 16 dev/build default) has no direct equivalent for that specific `.js`→`.ts` remap. Fixed by switching all of this app's internal relative imports to extensionless specifiers, which both bundlers resolve natively.

## Not yet done

- No `access` control beyond `read: () => true` on `Media`/`Posts` — every collection needs a real auth/roles review before this goes anywhere near production (`GOV-001`, still `PENDING_USER_INPUT`).
- The seeded post is saved as a draft (`versions.drafts: true` default) — a publish workflow isn't wired up yet.
- Email adapter not configured (Payload logs "No email adapter provided" — fine for local dev, not for real password resets).
