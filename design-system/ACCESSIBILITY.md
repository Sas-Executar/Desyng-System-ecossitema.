# ACCESSIBILITY — Auditoria e regras

Segue `Prompt.md §12`. Baseline: **WCAG 2.2 AA** (OBSERVED, `ADR-SYSTEM.md SPEC-ACCESSIBILITY-001`).

## Requisitos obrigatórios (OBSERVED)

```
body_text:     contrast >= 4.5:1
large_text:    contrast >= 3:1
controls:      minimum_touch_target = 44px
information:   color_only = prohibited
focus:         visible = true (nunca suprimido — ver styles/reset.css)
```

## Auditoria de contraste — problema encontrado e correção

**Achado (confirmado por cálculo, não apenas citado):** as cores de marca em saturação plena falham o baseline quando usadas como texto sobre o canvas do sistema.

| Par | Contraste calculado | Veredito |
|---|---|---|
| `#00BF63` (green raw) sobre `#F6F6F6` (canvas) | **2.25:1** | ❌ Falha AA (mínimo 4.5:1) |
| `#1F93FF` (azure raw) sobre `#F6F6F6` (canvas) | **2.91:1** | ❌ Falha até o mínimo de 3:1 para texto grande |
| `#007A45` (green.11, texto) sobre `#F6F6F6` | **5.02:1** | ✅ Passa AA |
| `#0B6FD3` (azure.11, texto) sobre `#F6F6F6` | **4.60:1** | ✅ Passa AA |
| `#4B4A4A` (neutral.12, texto primário) sobre `#F6F6F6` | **8.17:1** | ✅ Passa AAA |
| `#8C4D0D` (warning.11) sobre branco | **6.60:1** | ✅ Passa AA |
| `#792020` (error.11) sobre branco | **10.29:1** | ✅ Passa AAA |

**Correção aplicada:** `color.semantic.text.*` e `color.semantic.state.*_text` **nunca** apontam para o passo 9 (solid/CTA) de nenhuma família — sempre para o passo 11 (calibrado para AA). O passo 9 é reservado a preenchimento sólido de botão/ícone, onde o contraste relevante é entre o texto **sobre** o botão (`text.on_brand` = branco) e o preenchimento, não entre o preenchimento e o canvas.

| Preenchimento sólido | Texto sobre ele | Contraste |
|---|---|---|
| `green.9` `#00BF63` | branco `#FFFFFF` | ~2.4:1 — **ainda insuficiente para texto pequeno**; usar apenas para labels ≥18px/bold (large text, limiar 3:1) ou reforçar com peso 600+ |
| `azure.9` `#1F93FF` | branco `#FFFFFF` | ~2.1:1 — mesma ressalva |

**Ação recomendada (RECOMMENDED, não aplicada automaticamente — decisão de UI):** para o texto do botão primário/secundário sólido, considerar usar `green.10`/`azure.10` (levemente mais escuros) como fundo em vez do passo 9 puro quando o label for menor que 18px, ou manter o peso 600 exigido por `SPEC-BUTTON-001` ("label: IBM Plex Sans Medium") e validar com ferramenta de contraste antes do lançamento — isto não foi testado neste handoff (ver `qa/implementation-checklist.md`).

## Correção adicional (Fase 2 — encontrada pelo teste automatizado, não pela auditoria manual)

Ao transformar esta auditoria num teste real (`packages/design-tokens/src/contrast.test.ts`), o teste pegou um segundo problema que a Fase 1 não tinha coberto: **`text.secondary` e `text.muted` também falhavam.**

| Token | Valor original (Fase 1) | Contraste original | Valor corrigido (Fase 2) | Contraste corrigido |
|---|---|---|---|---|
| `text.secondary` | `neutral.10` `#7C7B7B` | 3.90:1 (canvas) / 4.22:1 (surface) — ❌ falha 4.5:1 | `neutral.11` `#646363` | **5.54:1 / 5.99:1** — ✅ passa AA normal |
| `text.muted` | `neutral.9` `#959494` | 2.80:1 (canvas) / 3.03:1 (surface) — ❌ falha até 3:1 no canvas | `neutral.10` `#7C7B7B` | **3.90:1 / 4.22:1** — ✅ passa AA *large-text* (≥3:1), ainda não passa AA normal (4.5:1) |

`text.secondary` agora é seguro para qualquer tamanho de texto. `text.muted` ficou restrito: só pode ser usado em texto ≥18px/peso 400 ou ≥14px/peso 600 (limiar de "large text" do WCAG), em divisores decorativos ou em ícones desabilitados — **nunca em corpo de texto ou `caption` (12-14px)**. Isso está documentado como `$description` no próprio token (`packages/design-tokens/src/design-tokens.json`) e coberto por teste (`contrast.test.ts`, describe `"color.semantic.text.* — every alias is intentional, not an accident"`).

## Nunca depender só da cor

Todo estado (`success/warning/error/info`) deve carregar ícone + texto, nunca cor isolada (OBSERVED, `SPEC-ACCESSIBILITY-001` + reforçado pelo registry de `components/callout-protocol.md`). Tabs ativas usam indicador de posição + cor, nunca cor isolada.

## Foco visível

`:focus-visible` com `focus.ring` (Azure passo 8) e `outline-offset: 2px` — implementado em `styles/reset.css`. Nunca usar `outline: none` sem substituto visível.

## Motion e `prefers-reduced-motion`

Ver `MOTION-SPEC.md`. Implementado em `styles/reset.css`: reduz todas as durações a `0.01ms` e desativa `scroll-behavior: smooth` quando o usuário pede movimento reduzido.

## Alvo de toque

Mínimo 44×44px em toda plataforma (Web e Native) — `.hit-target-min` em `styles/utilities.css`, `space`/`radius` de botões já calibrados para isso em telas mobile (52–60px de altura).

## Baseline normativo e presets cognitivos (DS-FORM-001, seção ACC)

`ACC-001` respondido: WCAG 2.2 AA é o baseline adotado. `ACC-003` a `ACC-012` (presets de apresentação cognitiva: low_noise, focus, reading, etc.) permanecem `PENDING_USER_INPUT` — nenhum preset foi desenhado neste handoff; a necessidade está identificada (`DS-FORM-001-AUD-010`) mas a implementação de UI para configurá-los é trabalho futuro. Ver `00_GOVERNANCE/OPEN_QUESTIONS.md`.

## Zoom e reflow

Não testado nesta entrega (nenhuma implementação de código existe ainda). Recomendação: usar unidades relativas (`rem`/`ch`) na tipografia de leitura para que o zoom do navegador a 200% não corte conteúdo, e validar `reflow` (sem scroll horizontal) em 320px de largura como parte do `qa/implementation-checklist.md`.

## Problemas encontrados e correções — resumo

| Problema | Onde | Correção |
|---|---|---|
| Green/Azure raw falham contraste como texto | Paleta base | Alias de texto aponta para passo 11, não 9 (ver DESIGN-SPEC.md) |
| `text.secondary`/`text.muted` também falhavam AA | `color.semantic.text.*` | Remapeados para `neutral.11`/`neutral.10` na Fase 2, `muted` restrito a large-text (ver acima) — pego por teste automatizado, não pela revisão manual da Fase 1 |
| Texto de botão sólido em telas pequenas | Button primary/secondary | Peso 600+ obrigatório; validar contraste antes do lançamento (RECOMMENDED, não testado) |
| Foco pode ser suprimido acidentalmente | Qualquer componente interativo | `reset.css` define `:focus-visible` global; nunca sobrescrever com `outline: none` isolado |
| Estado codificado só por cor | Badges, Tabs, Callouts | Ícone/indicador de posição obrigatório (ver callout-protocol.md) |
