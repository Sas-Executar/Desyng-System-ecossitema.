# MOTION-SPEC — EXECUTAR / Desyng System

Segue `Prompt.md §11` + OBSERVED `ADR-SYSTEM.md SPEC-MOTION-001`.

## Duração e easing

| Token | Valor | Range original (OBSERVED) |
|---|---|---|
| `motion.duration.micro` | 150ms | 120–180ms |
| `motion.duration.default` | 200ms | 180–250ms |
| `motion.duration.large` | 300ms | 250–400ms |
| `motion.easing.out` | `cubic-bezier(0, 0, 0.2, 1)` | ease-out |

## Propriedades permitidas / proibidas (OBSERVED)

**Permitidas:** `opacity`, `transform: translate`, `transform: scale` sutil, mudança de camada/elevação (shadow).

**Proibidas:** bounce, parallax excessivo, spin decorativo. A animação deve sempre comunicar **estado, hierarquia ou deslocamento espacial** — nunca decoração pura.

## Aplicações por componente

| Componente | Gatilho | Animação | Duração |
|---|---|---|---|
| `PostCard` | hover | `translateY(-2px)` + `shadow.hover` | `micro` (150ms) |
| `CopyLinkButton` | click | fade ícone → check | `micro` (150ms) |
| `CategoryPill`/`Tabs` | troca | fade out/in do conteúdo | `default` (200ms) |
| Modal/Drawer | abrir/fechar | opacity + translate | `default` (200ms) |
| Callout collapsible | expandir | altura + opacity | `default` (200ms) |
| Page transition (Astro) | navegação | opacity | `large` (300ms), se houver |

## `prefers-reduced-motion`

Regra obrigatória (NORMALIZED — prática WCAG 2.2 padrão, o ADR não detalha o mecanismo técnico): quando o usuário define `prefers-reduced-motion: reduce`, todas as durações caem para `0.01ms`, `scroll-behavior: smooth` é desativado, e nenhuma transição de camada/parallax é executada. Implementado em `styles/reset.css`.

## Toque e gestos

Alvo mínimo 44px em qualquer plataforma (`SPEC-ACCESSIBILITY-001`). Todo gesto (swipe, long-press no App) precisa de um controle explícito equivalente por toque/teclado — item ainda `PENDING_USER_INPUT` para detalhamento por tela (`DS-FORM-001-MOT-007`).

## Estados mínimos por componente interativo

`default, hover, focus, active, selected, loading, success, warning, error, disabled` (ver `COMPONENT-SPEC.md`). `empty`/`offline` ficam a critério de cada componente que os precise (ex.: listagem de posts, sincronização do App).
