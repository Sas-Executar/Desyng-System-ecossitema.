# SOT Resolution Log

Registro das decisões de "fonte da verdade" (Source of Truth) tomadas durante este handoff, quando os documentos-fonte fornecidos se contradiziam. Cada entrada cita os documentos em conflito e a decisão validada com o owner do projeto (via `AskUserQuestion`, nesta sessão).

---

## 1. Paleta de cor / identidade visual — App e Blog

**Conflito:**

| Documento | Paleta proposta | Status declarado |
|---|---|---|
| `ADR-SYSTEM.md` | Green `#00BF63` + Azure `#1F93FF` + Dark Gray `#4B4A4A` + Light Gray `#F6F6F6` + White, IBM Plex Sans/Mono | **Accepted / SOT**, escopo explícito "UI, UX, conteúdo editorial, infográficos, imagens geradas e futuras interfaces EXECUTAR" |
| `astro-blog.md` | Terracota `#D97757` + fundo `#F5F4ED` + serif para títulos, inspirado no ecossistema `claude.com` | Handoff técnico específico do Blog, tokens marcados como **"estimados"**, pendentes de validação via Chrome |

**Decisão:** `ADR-SYSTEM.md` é a SOT de cor/tipografia para **todo** o ecossistema (App e Blog). `astro-blog.md` é arquivado como referência histórica apenas na parte de paleta/tipografia — nenhum token de cor ou fonte deste documento entra em `tokens/design-tokens.json`.

**Por quê:** `ADR-SYSTEM.md` está formalmente `Accepted/SOT` e cobre explicitamente o Blog em seu escopo; `astro-blog.md` é uma exploração posterior, com os próprios tokens marcados como estimativa não validada, e não faz nenhuma referência ao ADR já aceito (sugerindo que foi produzido sem conhecimento dele).

**O que permanece de `astro-blog.md`:** a parte **estrutural** (não-cor) do documento — grid, breakpoints, largura de coluna de leitura, anatomia de página, lista de componentes de blog — é tratada como referência de arquitetura válida, no mesmo nível que o `CARDS_DESIGN_REFERENCE_PACK_V1` (ver decisão 2 abaixo). Essas partes estão marcadas `NORMALIZED` em `TRACEABILITY.md` com a ressalva "estrutural, não paleta".

---

## 2. Stack técnico do Blog

**Conflito:**

| Documento | Stack proposto |
|---|---|
| `astro-blog.md` | Astro 5 + React (islands) + Tailwind CSS 4, hospedagem Vercel/Cloudflare Pages |
| `ADR/ADR-001_PROTOCOLO_NATIVO_CALLOUTS_MULTIPLATAFORMA.md` | Assume como contexto existente "Blog em Next.js + React + Payload CMS" |
| `ADR/EXECUTAR_ADR_CREATOR_OPERATIONS_OS_V1/` | Fixa Payload + PostgreSQL como SOT de conteúdo/admin, com Payload Admin Custom Views como UI operacional |

**Decisão:** Astro 5 + React islands + Tailwind CSS é a stack alvo para a camada de **renderização pública** do Blog. Payload CMS + PostgreSQL permanecem como SOT de conteúdo/admin (não há conflito real): Astro consome Payload como **headless CMS** via REST/GraphQL, e o Admin do Payload continua com sua própria interface (React/Next.js nativo do Payload, usado apenas internamente). O App mobile continua Expo + React Native + Tamagui, conforme o ADR de Callouts.

**Por quê:** a menção a "Next.js + React + Payload CMS" no ADR de Callouts descreve o contexto de *conteúdo/CMS* da época, não uma decisão de framework de renderização do Blog em si; ela é compatível com Astro consumindo Payload como fonte de dados. Nenhuma reescrita de ADR é necessária — apenas esclarecer, na implementação, que "Blog em Payload CMS" significa "Payload como backend de conteúdo", não "Payload/Next.js como framework de renderização pública".

**Consequência para o pacote de tokens:** `tokens.native.ts` (Tamagui/React Native) e `variables.css`/`theme.css` (Astro/Tailwind) devem permanecer sincronizados a partir da mesma fonte (`design-tokens.json`) — ver `TOK-012` em `DS-FORM-001_RESPONSES.csv` e `FILE_TREE.md`.

---

## 3. Escopo de preenchimento do `DS-FORM-001`

**Conflito:** o formulário tem 296 perguntas em 26 seções; grande parte são decisões de negócio/marca (owner, aprovadores, nome oficial, tagline, pesquisa de usuário, taxonomia legal) que nenhum documento-fonte responde, e que o próprio formulário instrui a nunca inventar (`agent_instruction`: "Ask the user when the answer cannot be derived safely").

**Decisão:** preencher com evidência (`ANSWERED_FROM_EVIDENCE`) as perguntas onde `ADR-SYSTEM.md`, `Desing-System-notes.md`, `astro-blog.md` (parte estrutural), `ADR-001` (Callouts) e o pack `CARDS_DESIGN_REFERENCE_PACK_V1` fornecem base suficiente — sinalizando cada resposta como `OBSERVED`, `INFERRED`, `NORMALIZED`, `RECOMMENDED` ou `ESTIMADO` dentro do próprio texto da resposta, com nível de confiança. Perguntas de estratégia de marca, governança organizacional e fatos de negócio ficam `PENDING_USER_INPUT`, listadas e priorizadas em `OPEN_QUESTIONS.md`.

**Resultado:** 128 de 296 perguntas respondidas com evidência; 168 pendentes de decisão humana. Ver `DS-FORM-001_RESPONSES.csv` e `OPEN_QUESTIONS.md`.

---

## 4. Tensão interna já existente nos documentos-fonte (não um conflito entre documentos, mas dentro de um mesmo raciocínio)

`ADR-SYSTEM.md` (SPEC-COLOR-002) mapeia `semantic.state.success = green` e `semantic.state.info = azure` — ou seja, reutiliza as cores de marca como cores de estado do sistema. `Desing-System-notes.md`, no mesmo pacote, argumenta o oposto: "Reserve Success, Warning, Error e Info exclusivamente para significado operacional, evitando reutilizá-las como decoração ou identidade de marca."

**Decisão:** seguir o ADR (SOT aceito) — `color.semantic.state.success` e `color.semantic.state.info` continuam mapeados para Green/Azure em `design-tokens.json`. A recomendação divergente de `Desing-System-notes.md` fica registrada como melhoria futura opcional em `OPEN_QUESTIONS.md`, não como uma mudança aplicada nesta entrega (que preservaria fielmente o sistema já aceito, por instrução do próprio `Prompt.md §19`: "Não redesenhe a interface arbitrariamente").
