# Traceability Ledger — Design Tokens

Ledger exigido por `Prompt.md §16`: toda decisão de token deste package é classificada como `OBSERVED` (valor literal de um documento aceito), `INFERRED` (deduzido de evidência indireta), `NORMALIZED` (derivado por interpolação/regra a partir de um ou mais valores OBSERVED), `RECOMMENDED` (boa prática de mercado, sem contradição com o SOT, mas não declarada explicitamente) ou `ESTIMATED` (estimativa sinalizada para uma lacuna real, ex.: famílias de cor Warning/Error que não existiam no ADR original). `ALIAS` marca um token semântico que apenas referencia um primitivo já classificado.

**Resumo:** 150 valores rastreados — NORMALIZED: 44, OBSERVED: 34, ALIAS: 26, ESTIMATED: 24, RECOMMENDED: 20, TRIVIAL: 2.

| Token | Valor | Classificação | Fonte |
|---|---|---|---|
| `color.palette.green.1` | `#FCFDFC` | NORMALIZED | NORMALIZED:interpolated-ramp(confidence:0.55) |
| `color.palette.green.2` | `#F3FAF6` | NORMALIZED | NORMALIZED:interpolated-ramp(confidence:0.55) |
| `color.palette.green.3` | `#E4F6ED` | NORMALIZED | NORMALIZED:interpolated-ramp(confidence:0.55) |
| `color.palette.green.4` | `#CFF4E2` | NORMALIZED | NORMALIZED:interpolated-ramp(confidence:0.55) |
| `color.palette.green.5` | `#B4F4D5` | NORMALIZED | NORMALIZED:interpolated-ramp(confidence:0.55) |
| `color.palette.green.6` | `#8BF6C2` | NORMALIZED | NORMALIZED:interpolated-ramp(confidence:0.55) |
| `color.palette.green.7` | `#58FBAD` | NORMALIZED | NORMALIZED:interpolated-ramp(confidence:0.55) |
| `color.palette.green.8` | `#1FFF93` | NORMALIZED | NORMALIZED:interpolated-ramp(confidence:0.55) |
| `color.palette.green.9` | `#00BF63` | OBSERVED | OBSERVED:ADR-SYSTEM.md |
| `color.palette.green.10` | `#008C49` | NORMALIZED | NORMALIZED:interpolated-ramp(confidence:0.55) |
| `color.palette.green.11` | `#007A45` | OBSERVED | OBSERVED:ADR-SYSTEM.md |
| `color.palette.green.12` | `#064727` | NORMALIZED | NORMALIZED:interpolated-ramp(confidence:0.55) |
| `color.palette.azure.1` | `#FCFCFD` | NORMALIZED | NORMALIZED:interpolated-ramp(confidence:0.55) |
| `color.palette.azure.2` | `#F3F6FA` | NORMALIZED | NORMALIZED:interpolated-ramp(confidence:0.55) |
| `color.palette.azure.3` | `#E4EDF6` | NORMALIZED | NORMALIZED:interpolated-ramp(confidence:0.55) |
| `color.palette.azure.4` | `#CFE2F4` | NORMALIZED | NORMALIZED:interpolated-ramp(confidence:0.55) |
| `color.palette.azure.5` | `#B4D5F4` | NORMALIZED | NORMALIZED:interpolated-ramp(confidence:0.55) |
| `color.palette.azure.6` | `#8BC2F6` | NORMALIZED | NORMALIZED:interpolated-ramp(confidence:0.55) |
| `color.palette.azure.7` | `#58ACFB` | NORMALIZED | NORMALIZED:interpolated-ramp(confidence:0.55) |
| `color.palette.azure.8` | `#1F93FF` | NORMALIZED | NORMALIZED:interpolated-ramp(confidence:0.55) |
| `color.palette.azure.9` | `#1F93FF` | OBSERVED | OBSERVED:ADR-SYSTEM.md |
| `color.palette.azure.10` | `#007AEB` | NORMALIZED | NORMALIZED:interpolated-ramp(confidence:0.55) |
| `color.palette.azure.11` | `#0B6FD3` | OBSERVED | OBSERVED:ADR-SYSTEM.md |
| `color.palette.azure.12` | `#062747` | NORMALIZED | NORMALIZED:interpolated-ramp(confidence:0.55) |
| `color.palette.neutral.1` | `#FFFFFF` | OBSERVED | OBSERVED:ADR-SYSTEM.md+Desing-System-notes.md |
| `color.palette.neutral.2` | `#F6F6F6` | OBSERVED | OBSERVED:ADR-SYSTEM.md+Desing-System-notes.md |
| `color.palette.neutral.3` | `#F0F0F0` | NORMALIZED | NORMALIZED:interpolated-ramp(confidence:0.55) |
| `color.palette.neutral.4` | `#EAEAEA` | NORMALIZED | NORMALIZED:interpolated-ramp(confidence:0.55) |
| `color.palette.neutral.5` | `#E4E4E4` | NORMALIZED | NORMALIZED:interpolated-ramp(confidence:0.55) |
| `color.palette.neutral.6` | `#DEDEDE` | OBSERVED | OBSERVED:ADR-SYSTEM.md+Desing-System-notes.md |
| `color.palette.neutral.7` | `#C5C5C5` | NORMALIZED | NORMALIZED:interpolated-ramp(confidence:0.55) |
| `color.palette.neutral.8` | `#ADADAD` | NORMALIZED | NORMALIZED:interpolated-ramp(confidence:0.55) |
| `color.palette.neutral.9` | `#959494` | NORMALIZED | NORMALIZED:interpolated-ramp(confidence:0.55) |
| `color.palette.neutral.10` | `#7C7B7B` | NORMALIZED | NORMALIZED:interpolated-ramp(confidence:0.55) |
| `color.palette.neutral.11` | `#646363` | NORMALIZED | NORMALIZED:interpolated-ramp(confidence:0.55) |
| `color.palette.neutral.12` | `#4B4A4A` | OBSERVED | OBSERVED:ADR-SYSTEM.md+Desing-System-notes.md |
| `color.palette.warning.1` | `#FDFCFC` | ESTIMATED | ESTIMATED:new-family-not-in-source(confidence:0.4) |
| `color.palette.warning.2` | `#F9F6F3` | ESTIMATED | ESTIMATED:new-family-not-in-source(confidence:0.4) |
| `color.palette.warning.3` | `#F5EDE5` | ESTIMATED | ESTIMATED:new-family-not-in-source(confidence:0.4) |
| `color.palette.warning.4` | `#F2E2D1` | ESTIMATED | ESTIMATED:new-family-not-in-source(confidence:0.4) |
| `color.palette.warning.5` | `#F1D4B7` | ESTIMATED | ESTIMATED:new-family-not-in-source(confidence:0.4) |
| `color.palette.warning.6` | `#F1C191` | ESTIMATED | ESTIMATED:new-family-not-in-source(confidence:0.4) |
| `color.palette.warning.7` | `#F3AA60` | ESTIMATED | ESTIMATED:new-family-not-in-source(confidence:0.4) |
| `color.palette.warning.8` | `#F48F29` | ESTIMATED | ESTIMATED:new-family-not-in-source(confidence:0.4) |
| `color.palette.warning.9` | `#B25E09` | ESTIMATED | ESTIMATED:new-family-not-in-source(confidence:0.4) |
| `color.palette.warning.10` | `#814407` | ESTIMATED | ESTIMATED:new-family-not-in-source(confidence:0.4) |
| `color.palette.warning.11` | `#8C4D0D` | ESTIMATED | ESTIMATED:new-family-not-in-source(confidence:0.4) |
| `color.palette.warning.12` | `#442609` | ESTIMATED | ESTIMATED:new-family-not-in-source(confidence:0.4) |
| `color.palette.error.1` | `#FDFCFC` | ESTIMATED | ESTIMATED:new-family-not-in-source(confidence:0.4) |
| `color.palette.error.2` | `#F8F4F4` | ESTIMATED | ESTIMATED:new-family-not-in-source(confidence:0.4) |
| `color.palette.error.3` | `#F3E8E8` | ESTIMATED | ESTIMATED:new-family-not-in-source(confidence:0.4) |
| `color.palette.error.4` | `#EDD6D6` | ESTIMATED | ESTIMATED:new-family-not-in-source(confidence:0.4) |
| `color.palette.error.5` | `#E8BFBF` | ESTIMATED | ESTIMATED:new-family-not-in-source(confidence:0.4) |
| `color.palette.error.6` | `#E29F9F` | ESTIMATED | ESTIMATED:new-family-not-in-source(confidence:0.4) |
| `color.palette.error.7` | `#DD7676` | ESTIMATED | ESTIMATED:new-family-not-in-source(confidence:0.4) |
| `color.palette.error.8` | `#D64848` | ESTIMATED | ESTIMATED:new-family-not-in-source(confidence:0.4) |
| `color.palette.error.9` | `#C22C2C` | ESTIMATED | ESTIMATED:new-family-not-in-source(confidence:0.4) |
| `color.palette.error.10` | `#982323` | ESTIMATED | ESTIMATED:new-family-not-in-source(confidence:0.4) |
| `color.palette.error.11` | `#792020` | ESTIMATED | ESTIMATED:new-family-not-in-source(confidence:0.4) |
| `color.palette.error.12` | `#3B1212` | ESTIMATED | ESTIMATED:new-family-not-in-source(confidence:0.4) |
| `color.semantic.background.canvas` | `{color.palette.neutral.2}` | ALIAS | aliases a primitive above |
| `color.semantic.background.surface` | `{color.palette.neutral.1}` | ALIAS | aliases a primitive above |
| `color.semantic.background.elevated` | `{color.palette.neutral.1}` | ALIAS | aliases a primitive above |
| `color.semantic.text.primary` | `{color.palette.neutral.12}` | ALIAS | aliases a primitive above |
| `color.semantic.text.secondary` | `{color.palette.neutral.11}` | ALIAS | aliases a primitive above |
| `color.semantic.text.muted` | `{color.palette.neutral.10}` | ALIAS | aliases a primitive above |
| `color.semantic.text.on_brand` | `{color.palette.neutral.1}` | ALIAS | aliases a primitive above |
| `color.semantic.text.link` | `{color.palette.azure.11}` | ALIAS | aliases a primitive above |
| `color.semantic.border.subtle` | `{color.palette.neutral.4}` | ALIAS | aliases a primitive above |
| `color.semantic.border.default` | `{color.palette.neutral.6}` | ALIAS | aliases a primitive above |
| `color.semantic.border.strong` | `{color.palette.neutral.8}` | ALIAS | aliases a primitive above |
| `color.semantic.border.focus` | `{color.palette.azure.8}` | ALIAS | aliases a primitive above |
| `color.semantic.action.primary` | `{color.palette.green.9}` | ALIAS | aliases a primitive above |
| `color.semantic.action.primary_hover` | `{color.palette.green.10}` | ALIAS | aliases a primitive above |
| `color.semantic.action.primary_text` | `{color.palette.neutral.1}` | ALIAS | aliases a primitive above |
| `color.semantic.action.secondary` | `{color.palette.azure.9}` | ALIAS | aliases a primitive above |
| `color.semantic.action.secondary_hover` | `{color.palette.azure.10}` | ALIAS | aliases a primitive above |
| `color.semantic.state.success` | `{color.palette.green.9}` | ALIAS | aliases a primitive above |
| `color.semantic.state.success_text` | `{color.palette.green.11}` | ALIAS | aliases a primitive above |
| `color.semantic.state.info` | `{color.palette.azure.9}` | ALIAS | aliases a primitive above |
| `color.semantic.state.info_text` | `{color.palette.azure.11}` | ALIAS | aliases a primitive above |
| `color.semantic.state.warning` | `{color.palette.warning.9}` | ALIAS | aliases a primitive above |
| `color.semantic.state.warning_text` | `{color.palette.warning.11}` | ALIAS | aliases a primitive above |
| `color.semantic.state.error` | `{color.palette.error.9}` | ALIAS | aliases a primitive above |
| `color.semantic.state.error_text` | `{color.palette.error.11}` | ALIAS | aliases a primitive above |
| `color.semantic.focus.ring` | `{color.palette.azure.8}` | ALIAS | aliases a primitive above |
| `fontSize.display` | `56px` | NORMALIZED | NORMALIZED(midpoint of OBSERVED 48-64px range) |
| `fontSize.h1` | `44px` | NORMALIZED | NORMALIZED(midpoint of OBSERVED 40-48px range) |
| `fontSize.h2` | `34px` | NORMALIZED | NORMALIZED(midpoint of OBSERVED 32-36px range) |
| `fontSize.h3` | `26px` | NORMALIZED | NORMALIZED(midpoint of OBSERVED 24-28px range) |
| `fontSize.title` | `20px` | RECOMMENDED | RECOMMENDED(fills gap between h3 and body-lg per Prompt.md role list) |
| `fontSize.subtitle` | `18px` | RECOMMENDED | RECOMMENDED |
| `fontSize.body-lg` | `18px` | OBSERVED | OBSERVED:ADR-SYSTEM.md(leitura longa 17-18px/1.6-1.7/400) |
| `fontSize.body` | `16px` | OBSERVED | OBSERVED:ADR-SYSTEM.md(Body 16px) |
| `fontSize.body-sm` | `14px` | OBSERVED | OBSERVED:ADR-SYSTEM.md(Small 14px) |
| `fontSize.caption` | `12px` | OBSERVED | OBSERVED:ADR-SYSTEM.md(Caption 12px) |
| `fontSize.label` | `13px` | RECOMMENDED | RECOMMENDED |
| `fontSize.button` | `15px` | NORMALIZED | NORMALIZED(ADR-SYSTEM.md: "label: IBM Plex Sans Medium") |
| `fontSize.overline` | `11px` | RECOMMENDED | RECOMMENDED |
| `fontSize.mono-data` | `14px` | OBSERVED | OBSERVED:ADR-SYSTEM.md(IBM Plex Mono para IDs/metricas/dados) |
| `space.0` | `0px` | OBSERVED | OBSERVED |
| `space.0.5` | `2px` | RECOMMENDED | RECOMMENDED(fills Tailwind-compatible scale) |
| `space.1` | `4px` | OBSERVED | OBSERVED:ADR-SYSTEM.md |
| `space.2` | `8px` | OBSERVED | OBSERVED:ADR-SYSTEM.md |
| `space.3` | `12px` | OBSERVED | OBSERVED:ADR-SYSTEM.md |
| `space.4` | `16px` | OBSERVED | OBSERVED:ADR-SYSTEM.md |
| `space.6` | `24px` | OBSERVED | OBSERVED:ADR-SYSTEM.md |
| `space.8` | `32px` | OBSERVED | OBSERVED:ADR-SYSTEM.md |
| `space.12` | `48px` | OBSERVED | OBSERVED:ADR-SYSTEM.md |
| `space.16` | `64px` | OBSERVED | OBSERVED:ADR-SYSTEM.md |
| `space.24` | `96px` | OBSERVED | OBSERVED:ADR-SYSTEM.md |
| `space.32` | `128px` | RECOMMENDED | RECOMMENDED(fills Tailwind-compatible scale) |
| `radius.none` | `0px` | OBSERVED | OBSERVED |
| `radius.sm` | `4px` | OBSERVED | OBSERVED:ADR-SYSTEM.md(SPEC-SURFACE-001 lower bound) |
| `radius.md` | `8px` | OBSERVED | OBSERVED:ADR-SYSTEM.md(SPEC-SURFACE-001 radius 8-16px) |
| `radius.lg` | `12px` | NORMALIZED | NORMALIZED(midpoint 8-16px) |
| `radius.xl` | `16px` | OBSERVED | OBSERVED:ADR-SYSTEM.md(SPEC-SURFACE-001 upper bound) |
| `radius.pill` | `999px` | OBSERVED | OBSERVED:ADR-SYSTEM.md(botao primario pill/rounded-large) |
| `radius.full` | `9999px` | RECOMMENDED | RECOMMENDED |
| `border.width.hairline` | `0.5px` | OBSERVED | OBSERVED:ADR-SYSTEM.md(SPEC-LINE-001 secondary/grid) |
| `border.width.thin` | `1px` | OBSERVED | OBSERVED:ADR-SYSTEM.md(SPEC-LINE-001 primary) |
| `shadow.none` | `none` | TRIVIAL | valor trivial (ausencia de sombra), nao requer fonte |
| `shadow.sm` | `0 1px 2px rgba(20,20,20,0.04)` | NORMALIZED | NORMALIZED(ADR-SYSTEM.md: "sombras minimas", exact value not specified) |
| `shadow.md` | `0 4px 12px rgba(20,20,20,0.06)` | RECOMMENDED | RECOMMENDED |
| `shadow.hover` | `0 4px 16px rgba(20,20,20,0.08)` | RECOMMENDED | RECOMMENDED(hover elevation for cards) |
| `opacity.line-primary` | `0.8` | NORMALIZED | NORMALIZED(ADR-SYSTEM.md SPEC-LINE-001 range 60-90%) |
| `opacity.line-secondary` | `0.3` | NORMALIZED | NORMALIZED(range 20-40%) |
| `opacity.line-grid` | `0.12` | NORMALIZED | NORMALIZED(range 8-15%) |
| `opacity.disabled` | `0.5` | RECOMMENDED | RECOMMENDED |
| `breakpoint.mobile` | `0px` | TRIVIAL | ponto de partida logico da escala (mobile-first), nao requer fonte |
| `breakpoint.tablet` | `768px` | NORMALIZED | NORMALIZED(astro-blog.md structural breakpoint; not a color decision) |
| `breakpoint.desktop` | `1024px` | NORMALIZED | NORMALIZED(astro-blog.md structural breakpoint) |
| `container.page` | `1200px` | NORMALIZED | NORMALIZED(astro-blog.md + CARDS pack wireframes, structural only) |
| `container.reading` | `720px` | NORMALIZED | NORMALIZED(astro-blog.md structural reading column) |
| `grid.columns-desktop` | `12` | RECOMMENDED | RECOMMENDED(industry-standard web grid) |
| `grid.columns-tablet` | `8` | RECOMMENDED | RECOMMENDED |
| `grid.columns-mobile` | `4` | RECOMMENDED | RECOMMENDED |
| `grid.gutter-desktop` | `24px` | NORMALIZED | NORMALIZED(space.6) |
| `grid.gutter-mobile` | `16px` | NORMALIZED | NORMALIZED(space.4) |
| `motion.duration.micro` | `150ms` | OBSERVED | OBSERVED:ADR-SYSTEM.md(SPEC-MOTION-001 range 120-180ms) |
| `motion.duration.default` | `200ms` | OBSERVED | OBSERVED:ADR-SYSTEM.md(range 180-250ms) |
| `motion.duration.large` | `300ms` | OBSERVED | OBSERVED:ADR-SYSTEM.md(range 250-400ms) |
| `motion.easing.out` | `[0, 0, 0.2, 1]` | OBSERVED | OBSERVED:ADR-SYSTEM.md(ease-out) |
| `zIndex.base` | `0` | RECOMMENDED | RECOMMENDED |
| `zIndex.dropdown` | `1000` | RECOMMENDED | RECOMMENDED |
| `zIndex.sticky` | `1100` | RECOMMENDED | RECOMMENDED |
| `zIndex.overlay` | `1200` | RECOMMENDED | RECOMMENDED |
| `zIndex.modal` | `1300` | RECOMMENDED | RECOMMENDED |
| `zIndex.toast` | `1400` | RECOMMENDED | RECOMMENDED |
| `zIndex.tooltip` | `1500` | RECOMMENDED | RECOMMENDED |

## Regra de leitura
- Qualquer PR que altere um valor `OBSERVED` deve citar o novo documento-fonte aceito (não pode ser uma preferência estética isolada).
- Valores `ESTIMATED` (famílias `warning` e `error`) são os únicos candidatos a mudança sem quebrar o SOT — eles não existiam em `ADR-SYSTEM.md` e foram criados neste handoff para fechar uma lacuna funcional (estados de sistema exigidos por `DS-FORM-001-COL-001`).
- Valores `NORMALIZED` de layout/breakpoint vêm de `astro-blog.md` **apenas na parte estrutural**, nunca de sua paleta (ver `SOT_RESOLUTION.md`, decisão 1).