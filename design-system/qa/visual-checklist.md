# Visual QA Checklist

Segue `Prompt.md §17`. Use para comparar qualquer implementação contra este handoff, item a item, sem reabrir os documentos originais.

- [ ] **Cores** — nenhum HEX cru no código; todo componente usa `color.semantic.*`. Green/Azure raw (`palette.*.9`) nunca aparecem como `color` de texto, apenas como `background`/`fill`.
- [ ] **Tipografia** — apenas IBM Plex Sans (UI/leitura) e IBM Plex Mono (IDs/dados/código); nenhum outro `font-family` no bundle.
- [ ] **Spacing** — todo `margin`/`padding`/`gap` é um valor de `space.*` (4, 8, 12, 16, 24, 32, 48, 64, 96, 128px) — nenhum valor arbitrário como `13px` ou `27px`.
- [ ] **Alinhamento** — container centralizado, coluna de leitura ≤75ch, grid respeitando `grid.columns-*` por breakpoint.
- [ ] **Grid** — 12/8/4 colunas em desktop/tablet/mobile; gutters `space.6`/`space.4`.
- [ ] **Radius** — `sm/md/lg/xl/pill` aplicados conforme `DESIGN-SPEC.md §4`; botão primário é `pill` ou `rounded-large`, nunca `radius.sm`.
- [ ] **Shadows** — apenas `shadow.sm/md/hover`; nenhuma sombra pesada decorativa (regra: separação por espaço/borda, não sombra).
- [ ] **Ícones** — biblioteca única (Lucide, `ICO-002`), stroke consistente, sempre com `aria-label` quando standalone.
- [ ] **Responsivo** — testar em 390px, 834px, 1440px (matriz de `QAT-001`); nenhuma quebra de layout, nenhum scroll horizontal indesejado.
- [ ] **Estados** — cada componente interativo implementa ao menos `default/hover/focus/active/disabled`; estados de sistema (`success/warning/error/info`) sempre com ícone + texto.
- [ ] **Acessibilidade** — contraste AA validado nos pares listados em `../ACCESSIBILITY.md`; foco sempre visível; alvo de toque ≥44px; `prefers-reduced-motion` respeitado.
- [ ] **Callouts** — todos os 12 tipos do `CalloutNode` renderizam com o registry de `../components/callout-protocol.md`, nunca com cor/estilo hardcoded no conteúdo.
- [ ] **Dark mode** — trocar `[data-theme]` não quebra contraste nem some com nenhum elemento (checar `theme.css`, marcado como não auditado — validar antes do lançamento).
- [ ] **Nenhuma cor do CARDS pack** — grep no bundle final pelos HEX conhecidos de terceiros (ex.: roxo Obsidian `#7C3AED`-like, verde-claro `#B8E5A0`-like) não deve retornar nada; apenas os HEX de `TRACEABILITY.md`.
