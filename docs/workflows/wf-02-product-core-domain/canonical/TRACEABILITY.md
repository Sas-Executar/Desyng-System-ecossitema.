# WF-02 — Traceability, conflicts and decisions

## Source set

| Source | Logical role |
|---|---|
| BENCH-01 / Blueprint | WF-02 task contract and system scope |
| BENCH-01 / Manifesto | Product thesis, hierarchy, execution principles and metrics |
| BENCH-01 / Onboarding | Engineering boundaries and cross-cutting requirements |
| BENCH-01 and BENCH-02 / Visao | Visual Symbol Scanner handoff; exact duplicate counted once |
| BENCH-02 / Objectives and Output Requirements | Final product capabilities and operational gates |
| BENCH-02 / Schema Methods and Evidence | Epistemic method, dispatcher, WIP and evidence semantics |
| BENCH-02 / Business Model | ICP, category, plans and go-to-market hypotheses |
| BENCH-02 / Finance | Unit-economics hypotheses and telemetry |
| BENCH-02 / Scanner | Earlier OCR/Tesseract proposal, retained as superseded history |

## Task mapping

| Task | Primary evidence | Result |
|---|---|---|
| PROD-001 | Manifesto; Business Model | Product, ICP and value proposition normalized |
| PROD-002 | Manifesto; Blueprint | Six-level hierarchy and invariants defined |
| PROD-003 | Blueprint; Schema Methods | Eligibility, WIP, blocking, evidence and explicit 72h gap |
| PROD-004 | Blueprint; Objectives | Canonical states plus proposed guarded transitions |
| PROD-005 | Blueprint; Objectives; Manifesto | Vertical slice, journeys and edge journeys |
| PROD-006 | Objectives; Onboarding | Capability map and dependencies |
| PROD-007 | Blueprint; Objectives | Functional entities, relations and offline contract |
| PROD-008 | Objectives; Onboarding | Functional/NFR requirements, AC and DoR |
| PROD-009 | Objectives; Onboarding; Business Model | Workspace boundary and proposed minimum RBAC |
| PROD-010 | Objectives; Visao | Commands, queries, events and Scanner contract |

## Conflict resolution

### Scanner implementation

- Older source: OCR/Tesseract proposal in `Scanner.md`.
- Newer source: Visual Symbol Scanner in `visao(1).md` / duplicate `visao(2).md`, specifying DINOv2/ONNX and explicitly excluding OCR/QR.
- Resolution: the newer explicit constraint governs. The Tesseract proposal is `SUPERSEDED`, not an active requirement.

### Historical repository references

Some benchmarks mention PR numbers, paths and implementation state from another working context. They are source statements, not proof that those artifacts exist in this repository. Only objects verified in this repository may be treated as repository evidence.

### Business and financial numbers

Plan prices, CAC, margins, churn, LTV and packaging are `PROPOSED_FROM_BENCHMARK`. They must be revalidated with observed product telemetry and approved commercially before release.

## Open decisions

| ID | Question | Current class |
|---|---|---|
| DEC-WF02-001 | Exact 72-hour-cycle semantics | GAP |
| DEC-WF02-002 | Final dispatcher ranking formula | PROPOSED |
| DEC-WF02-003 | Per-entity offline conflict resolution and retention | GAP |
| DEC-WF02-004 | Final role/permission matrix | PROPOSED |
| DEC-WF02-005 | Domain event envelope and schema-version policy | PROPOSED |
| DEC-WF02-006 | Scanner model artifact SHA-256 and release provenance | GAP |

## Status semantics

- `SPECIFIED` means the corpus directly supplies enough normative content.
- `SPECIFIED_WITH_PROPOSALS` means a reviewable default is present but is not yet accepted.
- `SPECIFIED_WITH_GAPS` means the missing decision is named and bounded.
- None of these statuses implies code, deployment, physical-device testing or production validation.
