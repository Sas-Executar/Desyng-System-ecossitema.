# Análise de Repositório · Sas-Executar/Desyng-System-ecossitema.

> Gerado pelo workflow de governança "plugin engineer" sob as skills **testing-strategy** e **code-review**.
> Master Index consolidado: `Sas-Executar/Maestr-Docs` → `01-master-index/04-reports/`.
>
> **Correção (2026-09-07):** a primeira versão deste documento reproduziu a descrição do README ("não contém código de aplicação") sem verificar o conteúdo real das pastas `apps/*`. Investigando uma falha de deploy no Vercel neste mesmo PR, confirmou-se que o repositório **tem código de aplicação real e ativo**. O texto abaixo já reflete a correção.

## 1. Acesso e permissões
- Acesso confirmado (leitura + escrita) como `Sas-Executar`.
- Repositório **sem branch `main`**: as únicas branches existentes eram `claude/confirmar-acesso-validar-axi4ka` e `claude/design-handoff-specs-ulc1r1`. Esta análise foi ramificada a partir de `claude/design-handoff-specs-ulc1r1` (branch com o conteúdo mais recente).
- **Atenção de governança:** ausência de branch padrão/`main` é uma lacuna de higiene de repositório — recomenda-se promovê-la a `main` assim que o build for corrigido (ver seção 4).

## 2. Papel no ecossistema
O `package.json` raiz identifica o repositório como `executar-monorepo`: "*EXECUTAR ecosystem monorepo — Desyng System design tokens, component library, Callout protocol, Blog (Astro), Admin (Payload+Postgres), App (Expo/React Native/Tamagui)*". Ou seja, **este é (também) um monorepo de implementação ativo**, não apenas um pacote de especificação — o README na raiz descreve apenas a metade "spec" (`design-system/`, `references/`) e está desatualizado quanto à outra metade (`apps/`, `packages/`) que já contém código de produção.

## 3. Arquitetura
- pnpm workspaces (`pnpm@10.33.0`, Node `>=20.9.0`), scripts raiz `build`/`test`/`typecheck` via `pnpm -r --filter=./packages/*`.
- `apps/blog` (`@executar/blog`): Astro 7 + React 19 islands + Tailwind 4, consumindo `apps/admin` como CMS headless. Inclui um sistema visual próprio "Editorial Hybrid v6" com componentes dedicados (`GlobalNav`, `Drawer`, `BottomBar`, `FeatureMedia`, `Carousel`, etc.) e uma correção de acessibilidade real já implementada (focus trap no Drawer, verificado via Playwright segundo a mensagem do commit).
- `apps/admin` (`@executar/admin`): Next.js 16 + Payload 3 + Postgres, com coleções (`Posts`, `Media`, `Users`), bloco Lexical de Callout (`ADR-001`), scripts de seed e geração de tipos. Contém `AGENTS.md`/`CLAUDE.md` próprios — governança de agente já formalizada no nível do app.
- `packages/callout-protocol`, `packages/design-tokens`, `packages/ui`: pacotes de workspace reais compartilhados entre os apps.
- `design-system/` e `references/`: mantêm o papel original de especificação/handoff descrito no README (esse conteúdo *é* apenas spec — a imprecisão do README está em generalizar isso para o repositório inteiro).

## 4. Testing strategy (skill: testing-strategy) — achado crítico
- **Não há `.github/workflows`** nesta branch — nenhuma CI configurada. A única validação automatizada antes de produção é o build do Vercel, disparado por push.
- **O build de produção do projeto Vercel `blog` está quebrado agora**, achado ao investigar uma falha de deploy neste próprio PR:
  ```
  src/components/RichTextRenderer.tsx:3:34 - error ts(2307): Cannot find module '@executar/callout-protocol'
  src/components/editorial/Callout.tsx:2:52 - error ts(2307): Cannot find module '@executar/callout-protocol'
  ```
  `apps/blog/package.json` declara `@executar/callout-protocol: workspace:*` corretamente, então a causa mais provável é a configuração de Root Directory/Install Command do projeto Vercel `blog` não instalando o monorepo pnpm inteiro (necessário para o link do workspace) — não um erro de código deste PR (que não toca nenhum arquivo de app).
- O commit que introduziu a Editorial Hybrid v6 declara testes Playwright E2E rodados manualmente (nav, drawer, focus trap, scroll-sync) e `pnpm -w test`/`-w build`/`-r typecheck` limpos — mas **nada disso está automatizado em CI**, então essa cobertura não é reexecutada a cada PR.

**Recomendação prioritária:** (1) adicionar `.github/workflows` mínimo rodando `pnpm -w build`/`pnpm -w typecheck` em todo PR — teria pego a quebra atual antes do Vercel; (2) corrigir a configuração do projeto Vercel `blog` para instalar a partir da raiz do monorepo; (3) atualizar o README raiz para não generalizar "sem código de aplicação" para os diretórios `apps/`/`packages/`, que já têm implementação real.

## 5. Code review readiness (skill: code-review)
- Sem CI, qualquer revisão de PR hoje depende 100% de verificação manual/local pelo autor — o build quebrado atual mostra o custo disso (chegou até o Vercel de produção sem ser pego antes).
- `design-system/00_GOVERNANCE/OPEN_QUESTIONS.md` e `SOT_RESOLUTION.md` continuam sendo bons mecanismos de revisão assíncrona para a parte de especificação.
- Documentação desatualizada (README raiz) é, em si, um achado de code-review: um revisor ou agente que confia apenas no README chega a conclusões erradas sobre o escopo do repositório — como esta análise inicialmente fez.

## 6. Posição na hierarquia do ecossistema
**Nível 3 (revisado).** Tem escopo e complexidade de implementação comparáveis a `CustoCognitivoBlog` (Astro + Payload/Postgres + pacotes compartilhados, incluindo governança de agente por app), mas fica atrás dele por: zero CI configurada, build de produção atualmente quebrado, e documentação raiz que não reflete o código real. A camada `design-system/`/`references/` mantém alta maturidade de governança de especificação, mas não compensa os gaps operacionais dos apps.
