# EXECUTAR — ADR Creator Operations OS V1

Este pacote formaliza a decisão arquitetural para transformar o Payload em **entrypoint único operacional** da operação Creator-Led.

## Arquivos

| Arquivo | Finalidade |
|---|---|
| `ADR-001_EXECUTAR_CREATOR_OPERATIONS_OS.md` | ADR principal |
| `ARCHITECTURE_TARGET.mmd` | Diagrama Mermaid da arquitetura alvo |
| `DATA_MODEL_V1.yaml` | Collections, relações e estados |
| `IMPLEMENTATION_CHECKLIST.md` | Checklist sequencial de implementação |
| `MASTER_INDEX.csv` | Índice para handoff |
| `README.md` | Entrada do pacote |

## Decisão resumida

```text
UI = Payload Admin Custom Views
SOT = Payload + PostgreSQL
Files = Object Storage
CMS = Payload
Automation Core = Payload Hooks + Jobs
Orchestration = n8n/Make quando necessário
Social Distribution = Metricool
CRM = HubSpot
Visual Production = Canva
```

## Entry point

`/admin/executar`

## Ordem sugerida

1. Ler o ADR.
2. Validar Collections no YAML.
3. Implementar o Dashboard e navegação.
4. Implementar pipeline e estados.
5. Implementar Jobs.
6. Adicionar integrações uma por vez.
7. Executar checklist de aceite.
