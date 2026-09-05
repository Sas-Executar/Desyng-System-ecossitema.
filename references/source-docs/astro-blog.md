# Blog Full-Stack — Handoff Técnico Completo

**Referência de identidade visual:** ecossistema `claude.com` (blog institucional Anthropic) **Destinatário:** Claude Code**Status:** Pronto para build — inclui plano de auto-validação visual

---

## Como usar este documento

Este é o documento único de referência para implementar o blog. Ele contém:

1. Decisão de stack (com justificativa de pesquisa)
2. Design tokens — **estimados** a partir do padrão visual do ecossistema claude.com
3. Specs completas de layout, componentes, estados e acessibilidade
4. Estrutura de arquivos Astro
5. **Plano de validação via Chrome** — instruções para o Claude Code medir os tokens reais direto no navegador e substituir as estimativas da seção 2 por valores computados

> **Nota de proveniência:** a seção 2 (tokens) foi reconstruída por análise textual da página de referência (fetch HTTP, sem acesso a CSS computado) e por conhecimento do padrão visual consistente do ecossistema Anthropic/Claude. A seção 6 existe justamente para fechar essa lacuna: ela é um roteiro para o Claude Code, com Chrome real conectado, abrir as páginas, ler `getComputedStyle` de verdade, e atualizar este documento com valores medidos em vez de estimados.

---

## 1. Stack recomendado

Pesquisa feita em setembro/2026 comparando Astro vs. Next.js para site de conteúdo (blog).

|Camada|Escolha|Justificativa|
|---|---|---|
|Framework|**Astro 5.x**|Blog é conteúdo-first: HTML estático por padrão, zero JS não solicitado, islands só onde há interatividade. Consenso 2026 para blogs/sites de conteúdo em Core Web Vitals e SEO frente a Next.js, que é otimizado para apps full-stack com autenticação/estado complexo.|
|Ilhas interativas|**React** via `@astrojs/react`|Mantém componentes React reaproveitáveis sem hidratar a página inteira.|
|Estilo|**Tailwind CSS 4**|Tokens da seção 2 mapeados 1:1 em `tailwind.config`.|
|Conteúdo|**Astro Content Collections + MDX**|Posts em Markdown com frontmatter tipado via Zod. Sem CMS externo no MVP; migração para headless CMS é direta se o volume crescer.|
|Hospedagem|**Vercel** ou **Cloudflare Pages**|Astro tem adapter de primeira classe para ambos. Cloudflare mais barato em escala; Vercel com preview deploys mais maduros.|
|Imagens|`astro:assets`|Otimização automática (`srcset`, AVIF/WebP) sem serviço externo.|

**Rota de evolução:** se o blog ganhar dashboard de autor, comentários com estado, etc., adicionar API routes do próprio Astro (`src/pages/api/`) antes de cogitar trocar de framework.

---

## 2. Design Tokens (estimados — ver seção 6 para validação)

### 2.1 Cores

|Token|Valor|Uso|
|---|---|---|
|`color-bg-primary`|`#FFFFFF`|Fundo geral da página|
|`color-bg-secondary`|`#F5F4ED`|Seções alternadas, footer, cards de newsletter|
|`color-text-primary`|`#1A1A18`|Corpo de texto, títulos|
|`color-text-secondary`|`#6B6B65`|Metadados (categoria, data, tempo de leitura)|
|`color-accent`|`#D97757`|Anthropic clay/terracota — links, CTAs, hover de categoria|
|`color-accent-hover`|`#C2643F`|Hover state do accent|
|`color-border`|`#E5E4DC`|Divisores, bordas de card|
|`color-code-bg`|`#F5F4ED`|Blocos de código inline/bloco|

### 2.2 Tipografia

|Token|Fonte / peso / tamanho|Uso|
|---|---|---|
|`font-family-serif`|`Georgia, 'Times New Roman', serif` (fallback)|Títulos|
|`font-family-sans`|`-apple-system, 'Segoe UI', sans-serif` (fallback)|UI/corpo|
|`font-heading-xl`|48px / 600 / serif|Título do post (H1)|
|`font-heading-lg`|32px / 600 / serif|Título de card na listagem|
|`font-heading-md`|24px / 600 / serif|Subtítulos dentro do post (H2)|
|`font-body-lg`|18px / 400 / sans|Corpo do artigo|
|`font-body-md`|16px / 400 / sans|Corpo padrão (cards, UI)|
|`font-meta`|13px / 500 / sans, uppercase, letter-spacing 0.02em|Categoria, "Reading time", data|

### 2.3 Espaçamento (escala 8px)

|Token|Valor|
|---|---|
|`spacing-xs`|4px|
|`spacing-sm`|8px|
|`spacing-md`|16px|
|`spacing-lg`|24px|
|`spacing-xl`|40px|
|`spacing-2xl`|64px|
|`spacing-3xl`|96px|

### 2.4 Grid e Breakpoints

|Token|Valor|
|---|---|
|`container-max-width`|1200px (page shell) / 720px (coluna de leitura do artigo)|
|`grid-gutter`|`spacing-lg` (24px)|
|`breakpoint-mobile`|< 768px|
|`breakpoint-tablet`|768–1024px|
|`breakpoint-desktop`|> 1024px|

### 2.5 Raio e sombra

|Token|Valor|Uso|
|---|---|---|
|`radius-card`|8px|Cards de post relacionado|
|`radius-tag`|999px (pill)|Badge de categoria|
|`shadow-card-hover`|`0 4px 16px rgba(0,0,0,0.08)`|Hover de card|

---

## 3. Layout

### 3.1 Página de Post Individual (`/blog/[slug]`)

Estrutura vertical:

1. **Header global** (fixo, compartilhado com todo o site)
2. **Breadcrumb**: `Blog / [Título do post]`
3. **Título do post** (`font-heading-xl`), largura máx. 720px, centralizado
4. **Barra de metadados** (`font-meta`): categoria (pill, `color-accent`) · produto relacionado (link) · data · "X min read" · botão "Copy link"
5. **Imagem/ícone de destaque** (opcional, SVG do produto)
6. **Corpo do artigo** (MDX, `font-body-lg`, coluna 720px, `line-height: 1.6`)
    - H2/H3 com `scroll-margin-top` para âncoras
    - Blocos de código com fundo `color-code-bg`, fonte monoespaçada, syntax highlight
    - Blockquotes com borda esquerda `color-accent`
7. **CTA "Getting started"** (opcional, card de destaque)
8. **"Related posts"**: grid de 3 cards
9. **Newsletter signup**: bloco `color-bg-secondary` full-width
10. **Footer global**

Responsivo:

|Breakpoint|Comportamento|
|---|---|
|Desktop (>1024px)|Coluna de leitura 720px centralizada; metadados em linha horizontal única|
|Tablet (768–1024px)|Coluna ~90% da largura, padding lateral `spacing-lg`; metadados quebram em 2 linhas se necessário|
|Mobile (<768px)|Padding lateral `spacing-md`; título reduz para `font-heading-lg`; metadados empilhados; related posts em pilha vertical de 1 coluna|

### 3.2 Listagem `/blog`

1. Header global
2. Título "Blog" + tabs de filtro por categoria (All / Product announcements / Coding / Agents / Work / Productivity)
3. Grid de cards: **3 colunas desktop / 2 tablet / 1 mobile**
4. Paginação ou "load more"

**Componente `PostCard`** (reutilizado em "Related posts"):

|Elemento|Spec|
|---|---|
|Container|`radius-card`, `border: 1px solid color-border`, padding `spacing-lg`|
|Ícone/thumbnail do produto|40×40px, topo do card|
|Categoria|`font-meta`, `color-text-secondary`|
|Título|~20px, 2 linhas máx com `-webkit-line-clamp: 2`|
|Data|`font-meta`, abaixo do título|
|Hover|`shadow-card-hover` + `translateY(-2px)`, transição 150ms ease-out|

---

## 4. Componentes, estados e acessibilidade

### 4.1 Componentes

|Componente|Variante|Props|Notas|
|---|---|---|---|
|`<PostCard>`|default|`title, category, date, href, icon?`|Listagem e "Related posts"|
|`<CategoryPill>`|default / active|`label, active?`|Tabs de filtro|
|`<MetaBar>`|post|`category, product?, date, readingTime`|Barra de metadados|
|`<CopyLinkButton>`|default|`url`|Copia URL, tooltip "Copied!" 2s|
|`<NewsletterForm>`|default / success / error|`onSubmit`|—|
|`<CodeBlock>`|default|`lang, code`|Shiki (nativo Astro)|

### 4.2 Estados e interações

|Elemento|Estado|Comportamento|
|---|---|---|
|`PostCard`|Hover|`shadow-card-hover`, `translateY(-2px)`, 150ms ease-out|
|`PostCard`|Focus (teclado)|Outline 2px `color-accent`, offset 2px|
|`CopyLinkButton`|Click|Copia link, ícone vira check, tooltip "Copied!" 2s|
|`NewsletterForm`|Submitting|Spinner, disabled|
|`NewsletterForm`|Success|Substitui form por "Thank you! You're subscribed."|
|`NewsletterForm`|Error|Mensagem inline vermelha abaixo do input|
|`CategoryPill`|Active|`background: color-accent`, texto branco|
|`CategoryPill`|Inactive hover|`border-color: color-accent`|

### 4.3 Edge cases

- **Post sem imagem de destaque**: header do post colapsa sem deixar espaço vazio.
- **Título muito longo**: até 3 linhas no H1; no card, trunca em 2 linhas + `title` attribute.
- **Menos de 3 posts relacionados**: grid ajusta para 1–2 colunas, sem placeholders vazios.
- **Categoria sem posts**: estado vazio "No posts in this category yet."
- **Conexão lenta**: `loading="lazy"` + dimensões explícitas (evita CLS); skeleton `color-bg-secondary`.
- **Texto internacional**: `line-height: 1.6` reservado para diacríticos/CJK; sem `white-space: nowrap` em metadados.

### 4.4 Animação / Motion

|Elemento|Gatilho|Animação|Duração|Easing|
|---|---|---|---|---|
|`PostCard`|Hover|`translateY(-2px)` + shadow|150ms|ease-out|
|`CopyLinkButton`|Click|Fade ícone → check|120ms|ease-in-out|
|`CategoryPill`|Troca de filtro|Fade out/in dos cards|200ms|ease-in-out|

### 4.5 Acessibilidade

- Ordem de foco: Header → Breadcrumb → Título → Metadados (categoria, copiar link) → Corpo → Related posts → Newsletter → Footer.
- `<CopyLinkButton>`: `aria-live="polite"` na região do tooltip.
- Cards inteiros clicáveis via `<a>` envolvendo o card; área de toque ≥ 44px em mobile.
- Contraste `color-text-secondary` sobre `color-bg-primary` deve ser validado ≥ 4.5:1 (WCAG AA).
- Blocos de código com `tabindex="0"` quando scrolláveis horizontalmente.

---

## 5. Estrutura de arquivos (Astro)

```
src/
  content/
    blog/
      *.mdx
    config.ts          # schema Zod do frontmatter
  components/
    PostCard.tsx
    CategoryPill.tsx
    MetaBar.tsx
    CopyLinkButton.tsx
    NewsletterForm.tsx
  layouts/
    BlogPostLayout.astro
    BlogListLayout.astro
  pages/
    blog/
      index.astro
      [slug].astro
  styles/
    tokens.css          # variáveis CSS mapeando a seção 2
tailwind.config.mjs
```

Frontmatter schema (`config.ts`):

```ts
category: 'announcements' | 'coding' | 'agents' | 'work' | 'productivity'
product?: string
date: date
readingTime: number   // minutos
title: string
description: string   // <meta> e card
```

---

## 6. Plano de validação visual via Claude Code + Chrome

A seção 2 usa tokens **estimados**. Este é o roteiro para o Claude Code medir os valores **reais** usando a integração oficial Claude Code + Chrome (`code.claude.com/docs/en/chrome`) e substituir as estimativas por dados computados do DOM.

### 6.1 Pré-requisitos (uma vez só)

- Extensão "Claude in Chrome" instalada (v1.0.36+)
- Claude Code atualizado, logado com `/login` em plano Pro/Max/Team/Enterprise (não funciona com API key pura)
- Rodar `claude --chrome` ou `/chrome` → "Enabled by default"

### 6.2 Prompt para colar no Claude Code

```
Use o Chrome conectado para fazer engenharia reversa visual completa do design
system do claude.com, para servir de referência a um blog novo (stack: Astro +
React islands + Tailwind). O objetivo é o SISTEMA DE DESIGN (tokens, layout,
componentes reutilizáveis) — não copiar texto, copy editorial ou HTML literal
de nenhuma página.

Páginas a visitar, em ordem:

1. https://claude.com/blog/introducing-routines-in-claude-code
   → Template de POST INDIVIDUAL: H1, metadados (categoria/produto/data/
   reading time), corpo do artigo, code block, blockquote, "Related posts",
   newsletter signup.

2. https://claude.com/blog
   → Template de LISTAGEM: grid de cards, tabs de filtro por categoria,
   paginação/"load more", estado do card (hover se conseguir simular com
   dispatch de evento mouseover).

3. Uma segunda URL de post com layout distinto, ex:
   https://claude.com/blog/cowork-built-in-browser
   → Para confirmar quais tokens são fixos (cor, fonte, spacing) vs. variáveis
   por post (presença/ausência de imagem de destaque, comprimento do título).

4. https://claude.com (home)
   → HEADER GLOBAL: logo, nav principal, dropdown/mega-menu (estrutura
   "Products / Platform / Solutions / Pricing / Resources" — confirme se é o
   mesmo header do blog).

5. Role até o FOOTER em qualquer uma das páginas acima
   → FOOTER GLOBAL: colunas de links, newsletter form, ícones sociais,
   cookie banner (se aparecer), copyright.

Para cada página, nesta ordem:

a) Screenshot em 3 breakpoints: 1440px (desktop), 834px (tablet), 390px (mobile).
b) Leia CSS COMPUTADO (getComputedStyle via DOM, não o HTML bruto) dos
   elementos-chave listados acima: font-family, font-size, font-weight,
   line-height, letter-spacing, color, background-color, padding, margin,
   gap, border-radius, box-shadow, transition/duration.
c) Redimensione a viewport para localizar os breakpoints REAIS onde o layout
   muda (não assuma 768/1024 — confirme testando incrementalmente).
d) Liste os assets SVG/ícones usados (produto, social, chevrons) só pelo nome/
   propósito — não baixe nem reproduza logos ou marcas registradas.

Ao final, gere dois arquivos:

1. `tokens.css` — custom properties com os valores REAIS medidos (não estimados).
2. `design-tokens-audit.md` — tabela:
   | Token | Valor medido | Página/elemento onde foi encontrado | Fixo em todo o site? |

   Inclua uma seção "Divergências" comparando com a seção 2 deste documento
   (tokens estimados por padrão de mercado, não medidos) — assinale cada valor
   que mudou e por quê.

Regras:
- NÃO copie texto editorial, títulos de posts reais, ou copy de marketing
  para o design system — esses são conteúdo, não design token.
- NÃO baixe logo/wordmark da Anthropic para reuso — apenas anote "logo
  wordmark, ~XXpx altura" como referência de dimensão.
- Se encontrar um cookie banner ou modal, feche e ignore — não é parte do
  design system do blog.
- Se alguma página pedir login/CAPTCHA, pause e me avise.
```

### 6.3 Após a validação

Substituir os valores da seção 2 pelos medidos em `design-tokens-audit.md`, mantendo a estrutura de tabelas deste documento — isso garante que o `tailwind.config` final e o `tokens.css` reflitam a identidade visual real, não a estimativa.

---

## 7. Escopo e limites

- Este handoff cobre a identidade visual (design system) inspirada no claude.com — **não** é uma cópia literal de conteúdo, textos de posts reais, ou marca registrada da Anthropic.
- O objetivo é reaproveitar o padrão de UX editorial (tipografia, grid, hierarquia de metadados, cards) para um blog próprio, com conteúdo e marca próprios.