Engenharia · OPS-VISION-FOLLOWUP-001

DOCUMENT READER · VALU-MODE V3

ID              OPS-VISION-FOLLOWUP-001  
Tipo            Engenharia · Desbloqueio de implementação  
Owner           Não determinado  
Versão          1.0  
Data            06/09/2026  
Fase            Follow-up de PR em andamento  
Projeto         EXECUTAR  
PARA            Agente de Engenharia · Continuação da implementação  
Referência      PR #115 · claude/prisma-tripade-features-q23qvi · DINOv2 · ONNX Runtime  
3#              #ONNX #GitHubRelease #Mobile

  

RESUMO EXECUTIVO

O quê            Desbloquear o agente para terminar o Scanner Visual real.  
Por quê          O código já existe; o bloqueio principal é o artefato binário do modelo ONNX, não falta de código.  
Quem             Agente que está trabalhando no PR #115.  
Como             Continuar na branch existente e fornecer o modelo por uma origem GitHub acessível ao ambiente.

  

3P+N · APLICAÇÃO

Problema         O ambiente do agente não consegue baixar os pesos/modelos das CDNs externas usadas para ML.  
Processo         Obter/exportar o modelo uma única vez fora desse sandbox e publicá-lo como artefato controlado do projeto.  
Progresso        PR #115 está aberto, draft, mergeable, com head claude/prisma-tripade-features-q23qvi no commit 90eaba6; o próprio PR registra que falta a implementação real do encoder ONNX e do mobile.  
Next 01          Publicar dinov2-vits14.onnx em GitHub Release ou Git LFS.  
Next 02          Mandar o agente continuar exatamente na branch atual.  
Next 03          Integrar e verificar o runtime real antes de avançar para redesign do Mapa-OS.

Resumo Executivo. Você não precisa mandar esse agente “baixar o código” novamente. O código do trabalho já está no seu próprio repositório e na branch correta: PR #115 → Sas-Executar/Sas-Executar → claude/prisma-tripade-features-q23qvi. O PR confirma que a implementação atual deliberadamente deixa o encoder real indisponível porque faltou obter o peso ONNX.  O agente deve continuar nesse branch, não recriar projeto, não clonar outra cópia e não começar outro PR. O único artefato que precisa ser colocado ao alcance dele é o modelo dinov2-vits14.onnx. Para esse tipo de binário, eu recomendo GitHub Release Asset em vez de commit Git normal: GitHub permite assets individuais de release de até 2 GiB, enquanto objetos normais do Git têm limite duro de 100 MB e o próprio GitHub recomenda LFS ou armazenamento externo para binários grandes.  Git LFS é a segunda opção e suporta arquivos de até 2 GB mesmo nos planos Free/Pro. 

Conclusão. A rota mais limpa é criar no próprio ecossistema algo como uma release ml-assets-v1 com o arquivo dinov2-vits14.onnx. Você — ou qualquer máquina/agente que tenha acesso normal à internet — obtém o DINOv2 oficial, exporta para ONNX, valida o SHA-256 e sobe uma vez nesse Release. O agente bloqueado deixa de depender de Hugging Face/CDNs e passa a receber uma URL GitHub que o ambiente dele já consegue acessar. O repositório DINOv2 oficial fornece o backbone dinov2_vits14 e é Apache 2.0.  O runtime alvo permanece onnxruntime-react-native, cuja instalação oficial é onnxruntime-react-native.  Eu evitaria colocar o ONNX diretamente em Git convencional mesmo que a versão exportada fique abaixo de 100 MB, porque isso faz o histórico do monorepo carregar o binário para sempre. Se quiser tudo versionado dentro do repo, então use Git LFS, não Git normal.

Próximos Passos. Depois de disponibilizar o arquivo, mande ao agente exatamente este follow-up em MD:

# FOLLOW-UP — VISUAL SYMBOL SCANNER V2

  

Continue a implementação existente do PR #115.

  

## Source of Truth

  

Repository:

`Sas-Executar/Sas-Executar`

  

Existing PR:

`#115`

  

Existing branch:

`claude/prisma-tripade-features-q23qvi`

  

Base:

`main`

  

Do NOT create a new implementation branch.

Do NOT recreate the Visual Symbol Scanner from scratch.

Do NOT restore QR or OCR.

  

Start from the current head of PR #115.

  

```bash

git fetch origin

git checkout claude/prisma-tripade-features-q23qvi

git pull --ff-only origin claude/prisma-tripade-features-q23qvi

Primary Objective

Complete the REAL Visual Symbol Scanner implementation that is currently  
stubbed/unavailable.

Priority order:

1. real DINOv2 ONNX inference;
2. mobile Visual Symbol Scanner;
3. Chat command;
4. Selector command;
5. Done mutation + Undo;
6. physical-device verification;
7. only after these gates pass, continue Mapa-OS visual redesign.

Do not work on the Mapa-OS redesign before the Scanner runtime gate passes.

  

Model Artifact

The model MUST NOT be downloaded from Hugging Face or another blocked CDN  
during implementation.

Use the project-controlled model artifact:

<INSERT_GITHUB_RELEASE_ASSET_URL_HERE>

Expected filename:

dinov2-vits14.onnx

Expected destination:

apps/mobile/assets/models/dinov2-vits14.onnx

Also make the same model available to the web implementation through the  
asset strategy already defined in specs/visual-symbol-scanner/plan.md.

Expected SHA-256:

<INSERT_SHA256_HERE>

MUST verify SHA-256 after download.

If the file cannot be retrieved from the supplied GitHub source:

STOP.

Report:  
BLOCKED_MODEL_ARTIFACT

Do not substitute another model.  
Do not silently switch architecture.  
Do not fake recognition.

  

DINOv2 Source

The DINOv2 source repository is a build/export reference, not an application  
runtime dependency.

If source inspection/export tooling is required, clone OUTSIDE the monorepo:

git clone [https://github.com/facebookresearch/dinov2.git](https://github.com/facebookresearch/dinov2.git) ../dinov2

The application MUST NOT depend on ../dinov2 at runtime.

Runtime artifact:

dinov2-vits14.onnx

  

Existing Implementation

Read before modifying:

specs/visual-symbol-scanner/README.md  
specs/visual-symbol-scanner/ADR-001-visual-symbol-recognition.md  
specs/visual-symbol-scanner/PRD-001-visual-symbol-scanner.md  
specs/visual-symbol-scanner/spec.md  
specs/visual-symbol-scanner/plan.md  
specs/visual-symbol-scanner/tasks.md

Inspect the code already produced in PR #115.

Do not duplicate existing packages or abstractions.

Existing shared package:

packages/visual-symbol-engine

Existing target mobile area:

apps/mobile/src/features/scanner/

  

Required Runtime Gate

The following MUST work on a real mobile build before proceeding:

Chat

Physical Chat symbol  
→ recognition  
→ SYM-CHAT-001→ OPEN_CHAT  
→ Messages/Copilot opens.

Selector

Physical Selector symbol  
→ recognition  
→ SYM-SELECTOR-001→ OPEN_SELECTOR  
→ configurable Selector opens.

Done

Physical Done symbol  
→ recognition  
→ SYM-DONE-001→ COMPLETE_LATEST_OPEN_TASK  
→ current/latest open task becomes DONE  
→ Undo is emitted.

No confirmation step.

No QR.

No OCR.

  

Expo Requirement

ONNX Runtime React Native is a native dependency.

Do not validate this feature only in Expo Go.

Create/use the appropriate Expo Development Build / native build required by  
the current Expo configuration.

The final verification MUST exercise the actual native ONNX runtime.

  

Model Loading Requirements

MUST:

- load the ONNX session once;
- reuse the session;
- run inference on-device;
- reuse normalized registry embeddings;
- reject UNKNOWN matches;
- preserve the event latch;
- prevent parallel inference queues;
- keep recognition independent of command execution.

MUST NOT:

- call a cloud model for every frame;
- fetch model weights for every Scanner session;
- retrain DINOv2 during enrollment;
- restore QR;
- restore OCR.

  

Verification

Before declaring implementation complete, run:

- typecheck;
- lint/check;
- unit tests;
- visual-symbol-engine tests;
- mobile tests;
- production build where applicable;
- native mobile build;
- physical-device recognition test;
- offline recognition test;
- Chat E2E;
- Selector E2E;
- Done + Undo E2E.

Record:

- device;
- OS;
- model artifact SHA-256;
- p50 scan-to-command latency;
- p95 scan-to-command latency;
- positive recognition samples;
- negative/distractor samples;
- calibrated threshold.

Do NOT mark p95 <= 500 ms as verified unless measured.

  

Completion Report

Return only after the runtime gate:

IMPLEMENTED

Exact files changed.

VERIFIED

Tests/builds actually executed and their results.

NOT VERIFIED

Anything that could not be exercised.

BLOCKERS

Only remaining external blockers.

PR

Current head SHA and PR #115 status.

Do not stop merely because planning is complete.  
When execution mode is available, continue implementation through the  
runtime gate unless an actual external blocker remains.

O ponto-chave é: **não peça para o agente resolver a restrição de rede insistindo no mesmo download**. Transforme o ONNX em um artefato do seu próprio projeto, acessível pelo GitHub. Depois disso o bloqueio deixa de ser “internet de ML” e vira uma dependência versionada e reproduzível do build. O PR já está em estado adequado para esse follow-up: aberto, draft e mergeable.