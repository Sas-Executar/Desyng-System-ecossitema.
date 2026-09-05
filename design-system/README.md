# Desyng System — EXECUTAR (App + Blog)

Design system e developer handoff package do ecossistema EXECUTAR, produzido pelo workflow `/design-handoff` (ver `references/source-docs/Prompt.md`) a partir do material fornecido em `references/`. Segue a estrutura de `Prompt.md §14` + o adendo "TARGET IMPLEMENTATION".

## 1. Identidade visual

Minimalismo funcional, alto espaço negativo, linhas finas, superfícies neutras, acentos cromáticos controlados (Green para ação/execução, Azure para informação/navegação), profundidade isométrica em ilustrações/diagramas. SOT: `references/source-docs/ADR-SYSTEM.md` (Accepted). Ver `DESIGN-SPEC.md` para a especificação completa.

## 2. Princípios do sistema

1. **Nenhum componente consome HEX/px cru quando existe um token equivalente** — regra crítica herdada do ADR aceito.
2. **O design já existente é a fonte da verdade** — este handoff formaliza e implementa, não redesenha (`Prompt.md §19`).
3. **Toda inferência é sinalizada** — `OBSERVED`/`INFERRED`/`NORMALIZED`/`RECOMMENDED`/`ESTIMATED`, nunca apresentada como fato aprovado (ver `00_GOVERNANCE/TRACEABILITY.md`).
4. **Referências visuais de terceiros (CARDS pack) só entram por arquitetura, nunca por cor.**
5. **Um sistema, múltiplas superfícies** — Web (Astro/Blog) e Native (Expo/App) consomem os mesmos tokens semânticos.

## 3. Como usar os tokens

Fonte canônica: `tokens/design-tokens.json`. Todos os outros formatos são derivados dela — **não editar `variables.css`/`theme.css`/`tokens.native.ts`/`design-tokens.yaml` manualmente**, editar o JSON e regenerar (ver `IMPLEMENTATION_PLAN.md` Fase 1).

```css
/* Web */
@import "./tokens/theme.css";
.button-primary { background: var(--semantic-action-primary); }
```

```ts
// Native (Tamagui/React Native)
import { semanticLight } from "@executar/design-tokens/tokens.native";
```

## 4. Estrutura dos arquivos

```
design-system/
├── README.md                  # este arquivo
├── DESIGN-SPEC.md              # paleta, tipografia, spacing, grid, linguagem visual
├── COMPONENT-SPEC.md           # inventário + anatomia + API + estados
├── RESPONSIVE-SPEC.md          # regras desktop/tablet/mobile
├── ACCESSIBILITY.md            # auditoria de contraste + correções
├── MOTION-SPEC.md              # duração, easing, prefers-reduced-motion
├── tokens/                     # fonte canônica (JSON) + derivados (CSS/YAML/TS)
├── styles/                     # reset, typography, layout, utilities
├── components/                 # inventário + protocolo de Callout (ADR-001)
├── layouts/                    # arquétipos extraídos do CARDS pack
├── assets/                     # manifesto das 31 imagens de referência
├── qa/                         # checklists visual e de implementação
├── 00_GOVERNANCE/              # DS-FORM-001 preenchido, decisões de SOT, pendências, ledger
├── IMPLEMENTATION_PLAN.md      # plano faseado de construção
├── FILE_TREE.md                # árvore alvo do monorepo (apps/blog, apps/app, packages/*)
├── DESIGN_TO_CODE_MAP.md       # elemento visual → componente → arquivo → tokens → estado → breakpoint
└── CHANGELOG.md
```

## 5. Componentes

Ver `COMPONENT-SPEC.md` e `components/component-inventory.md`. Nenhum componente foi implementado em código nesta entrega — apenas especificado.

## 6. Responsividade

Ver `RESPONSIVE-SPEC.md`. Regra-mestra: preservar a linguagem visual, não a mesma composição, entre desktop/tablet/mobile.

## 7. Assets

Ver `assets/assets-manifest.json`. As 21 imagens de `references/CARDS_DESIGN_REFERENCE_PACK_V1/` **não são fonte de cor** — apenas de arquitetura (ver `layouts/layout-archetypes.md`). Os 10 slides de `references/handoff_pack_visual_app_blog_2026-09-05/` corroboram a mesma paleta já aceita.

## 8. Acessibilidade

Baseline WCAG 2.2 AA. Ver `ACCESSIBILITY.md` — inclui a validação de contraste que confirma por que Green/Azure crus não podem ser usados como texto.

## 9. Como reproduzir novos layouts mantendo consistência

1. Verificar `DESIGN_TO_CODE_MAP.md` antes de estilizar qualquer elemento novo.
2. Se o elemento não existe lá, verificar `layouts/layout-archetypes.md` (padrões de composição) e `COMPONENT-SPEC.md` (componentes).
3. Se nenhum token existente serve, adicionar ao `tokens/design-tokens.json` com a classificação de proveniência (`00_GOVERNANCE/TRACEABILITY.md`) — nunca hardcode.
4. Rodar `qa/visual-checklist.md` antes de considerar a tela pronta.

## 10. Governança e pendências

`00_GOVERNANCE/` contém o formulário `DS-FORM-001` preenchido com evidência onde possível (128/296 perguntas), a lista de decisões de negócio ainda pendentes (`OPEN_QUESTIONS.md`, 168 itens priorizados), e o registro dos 3 conflitos entre documentos-fonte resolvidos nesta entrega (`SOT_RESOLUTION.md`). Nenhuma decisão de estratégia de marca, naming ou governança organizacional foi inventada.
