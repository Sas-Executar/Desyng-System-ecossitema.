# FILE_TREE — Estrutura alvo do monorepo

Árvore **alvo** (plano, não implementada nesta entrega — ver `Prompt.md`, adendo "TARGET IMPLEMENTATION"). Reflete a stack decidida em `00_GOVERNANCE/SOT_RESOLUTION.md`: Astro (Blog) + Payload/PostgreSQL (CMS/admin) + Expo/React Native/Tamagui (App) + um pacote de tokens único.

```
executar/                                  # monorepo (pnpm workspaces)
├── apps/
│   ├── blog/                              # Astro 5 + React islands + Tailwind
│   │   ├── src/
│   │   │   ├── content/
│   │   │   │   └── config.ts              # schema Zod (se conteudo local complementar ao Payload)
│   │   │   ├── components/
│   │   │   │   ├── PostCard.tsx
│   │   │   │   ├── CategoryPill.tsx
│   │   │   │   ├── MetaBar.tsx
│   │   │   │   ├── CopyLinkButton.tsx
│   │   │   │   ├── NewsletterForm.tsx
│   │   │   │   └── Callout.tsx            # consome @executar/callout-protocol
│   │   │   ├── layouts/
│   │   │   │   ├── BlogPostLayout.astro
│   │   │   │   └── BlogListLayout.astro
│   │   │   ├── lib/
│   │   │   │   └── payload-client.ts      # cliente headless do Payload CMS
│   │   │   ├── pages/
│   │   │   │   └── blog/
│   │   │   │       ├── index.astro
│   │   │   │       └── [slug].astro
│   │   │   └── styles/
│   │   │       └── tokens.css             # importa @executar/design-tokens
│   │   └── tailwind.config.mjs
│   │
│   ├── app/                                # Expo + React Native + Tamagui
│   │   ├── app/                            # expo-router
│   │   ├── components/
│   │   │   ├── ui/                         # Button, Card, Badge, Callout (RN)
│   │   │   └── layout/
│   │   └── tamagui.config.ts               # consome @executar/design-tokens/tokens.native
│   │
│   └── admin/                              # Payload Admin Custom Views (React/Next nativo do Payload)
│       ├── collections/
│       │   ├── Posts.ts
│       │   ├── Media.ts
│       │   └── Callouts.ts                 # bloco Lexical CalloutBlock
│       └── payload.config.ts
│
├── packages/
│   ├── design-tokens/                      # FONTE CANONICA UNICA (ver TOK-012)
│   │   ├── src/
│   │   │   └── design-tokens.json          # portado de design-system/tokens/
│   │   ├── dist/
│   │   │   ├── variables.css
│   │   │   ├── theme.css
│   │   │   ├── tokens.native.ts
│   │   │   └── design-tokens.yaml
│   │   └── package.json
│   │
│   └── callout-protocol/                   # schema + registry do ADR-001
│       ├── src/
│       │   ├── schema.ts                   # CalloutNode (Zod)
│       │   ├── registry.ts                 # CALLOUT_REGISTRY -> tokens semanticos
│       │   ├── renderers/
│       │   │   ├── web.tsx
│       │   │   ├── native.tsx
│       │   │   └── print.tsx
│       │   └── markdown-plugin.ts          # remarkCalloutPlugin
│       └── package.json
│
├── pnpm-workspace.yaml
└── package.json
```

## Origem de cada pasta

| Pasta alvo | Origem neste handoff |
|---|---|
| `packages/design-tokens/src/design-tokens.json` | `design-system/tokens/design-tokens.json` (copiar sem alterar valores) |
| `packages/design-tokens/dist/*` | `design-system/tokens/{variables.css,theme.css,tokens.native.ts,design-tokens.yaml}` (podem ser regenerados a partir do `src/design-tokens.json`, ver os scripts descritos em `IMPLEMENTATION_PLAN.md`) |
| `packages/callout-protocol/src/registry.ts` | `design-system/components/callout-protocol.md` (tabela de registry → tokens) |
| `apps/blog/src/components/*` | `design-system/COMPONENT-SPEC.md` (seção "PostCard, MetaBar, CopyLinkButton, NewsletterForm") |
| `apps/app/components/ui/*` | `design-system/COMPONENT-SPEC.md` (componentes compartilhados) |
| `apps/admin/collections/Callouts.ts` | `references/source-docs/ADR/ADR-001_PROTOCOLO_NATIVO_CALLOUTS_MULTIPLATAFORMA.md §9` |

Nenhum destes arquivos de código foi criado nesta entrega — este documento é o mapa para a implementação, não a implementação.
