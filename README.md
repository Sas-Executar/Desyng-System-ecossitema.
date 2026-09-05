# Desyng System — Ecossistema EXECUTAR

Repositório de documentação de design system / developer handoff do ecossistema EXECUTAR (App + Blog), produzido pelo workflow **Design Handoff** a partir do material bruto anexado (ADRs, formulário mestre de decisão, pack de referências visuais e handoff pack já existente).

**➜ Comece por [`design-system/README.md`](./design-system/README.md).**

## O que tem aqui

| Pasta | Conteúdo |
|---|---|
| [`design-system/`](./design-system/) | O package de handoff: tokens, especificações de componente/responsividade/acessibilidade/motion, governança e plano de implementação. **Isto é a entrega.** |
| [`references/source-docs/`](./references/source-docs/) | Documentos-fonte originais (ADRs, formulário, notas de design) — preservados para auditoria/rastreabilidade. |
| [`references/CARDS_DESIGN_REFERENCE_PACK_V1/`](./references/CARDS_DESIGN_REFERENCE_PACK_V1/) | 21 imagens de referência de terceiros usadas **apenas por arquitetura/layout**, nunca por cor. |
| [`references/handoff_pack_visual_app_blog_2026-09-05/`](./references/handoff_pack_visual_app_blog_2026-09-05/) | Deck de 10 slides que corrobora a mesma paleta/tipografia já aceita. |

## Por onde a IA (ou a próxima pessoa) deve seguir

1. `design-system/00_GOVERNANCE/SOT_RESOLUTION.md` — entender as 3 decisões de fonte-da-verdade já tomadas.
2. `design-system/DESIGN-SPEC.md` — a especificação visual completa.
3. `design-system/IMPLEMENTATION_PLAN.md` — o plano de construção faseado.
4. `design-system/00_GOVERNANCE/OPEN_QUESTIONS.md` — o que ainda depende de uma decisão humana antes do lançamento.

Este repositório não contém código de aplicação — é o package de especificação que uma sessão de desenvolvimento (Claude Code ou equipe humana) deve consumir para implementar o Blog (Astro), o App (Expo/React Native/Tamagui) e o Admin (Payload CMS).
