# WF-02 — Canonical Product & Core Domain Specification

Version: 0.1.0  
Status: `BASELINE_READY_FOR_REVIEW`  
Date: 2026-09-09

## 0. Normative scope

This document defines the product/domain baseline for EXECUTAR. Statements tagged `PROPOSED` are non-binding until approved. `GAP` items are explicit blockers to final closure, not permission to invent behavior.

## PROD-001 — Product vision

### Vision and problem

`CORPUS_DIRECT` EXECUTAR is a work-execution operating system for knowledge, tasks, processes and projects. It transfers avoidable executive load from the operator to the system while preserving user agency.

The problem is not lack of task storage. Conventional tools still require the person to remember, decompose, prioritize, rebuild context, estimate capacity and repeatedly decide what to do next.

### ICP and market

- `CORPUS_DIRECT` Primary ICP: Brazilian solo professionals performing knowledge work and managing projects.
- `CORPUS_DIRECT` Design priority: people who benefit from reduced operational decision load, including adults with executive-function difficulties; no difficulty is assumed universal and no feature is presented as clinical treatment.
- `CORPUS_DIRECT` Expansion: prosumer SaaS via product-led growth, followed by teams/workspaces and B2B.
- `CORPUS_DIRECT` Proposed category: Adaptive Work Execution OS / AI-native Work Execution SaaS.
- `PROPOSED` Pricing, plan packaging and unit-economics benchmarks remain commercial hypotheses and are not domain truth.

### Value proposition

EXECUTAR converts capacity into decision, decision into action, and action into evidence. The user should receive a viable next action, not an infinite list, while execution continuously updates state, governance and replanning.

### Product principles

1. Preserve autonomy and authority.
2. Keep structural complexity in the system and decisional simplicity at the interface.
3. Plan from real capacity.
4. Persist context across interruptions.
5. Maintain one cognitively primary active action (`WIP 1:1`).
6. Treat evidence as a consequence of execution.
7. Do not optimize for time on screen.
8. Keep every channel on one canonical domain state.

### Success measures

Time from intention to start; number of operational decisions; context switches; action completion; resumption after interruption; blocked work; planned-versus-real capacity; manual replans; management time; evidence produced; deliverables completed.

## PROD-002 — Product structure

### Canonical hierarchy

`Projeto → Value Stream → Entregável → Tarefa → Ação → Evidência`

| Entity | Responsibility | Required parent |
|---|---|---|
| Project | Owns an outcome-oriented body of work | Workspace |
| Value Stream | Groups delivery flow inside a project | Project |
| Deliverable | Defines a verifiable result | Value Stream |
| Task | Organizes work needed for a deliverable | Deliverable |
| Action | Smallest executable unit recommended by the dispatcher | Task |
| Evidence | Verifies execution or completion | Action, optionally Deliverable |

### Invariants

- `CORPUS_DIRECT` Execution occurs at Action level.
- `CORPUS_DERIVED` Progress rolls upward from evidence-backed completion; channel activity alone never advances domain progress.
- `CORPUS_DIRECT` A plan is a graph of activities, dependencies, restrictions and state, not merely a linear list.
- `CORPUS_DIRECT` App, mobile, MCP, email, WhatsApp, Scanner and agent are adapters over the same canonical state.

## PROD-003 — Core business rules

### Capacity and eligibility

An action is eligible only when all hard constraints are satisfied:

```text
dependency_state = READY
hard_constraints = SATISFIED
estimated_duration <= available_capacity
wip_rule = SATISFIED
```

After filtering, eligible actions may be ranked by flow priority, value and context fit. `PROPOSED` The definitive scoring formula is intentionally unset pending product tests.

### WIP, dependencies and blocking

- `CORPUS_DIRECT` WIP 1:1 means one active Action has clear cognitive precedence; it does not prohibit multiple projects.
- A blocked Action cannot be recommended as `NEXT_ACTION`.
- A dependency must reference a predecessor and its satisfaction condition.
- When planned work becomes unavailable, the dispatcher recalculates the eligible set while preserving the target deliverable when possible.
- Critical-path influence is applied only after hard constraints and must remain explainable.

### Evidence and completion

- An Action may become `DONE` only when its Definition of Done is satisfied.
- If its DoD requires evidence, at least one valid Evidence record is mandatory.
- Reports are projections of domain state and evidence, not a parallel manual source of truth.

### 72-hour cycle

`CORPUS_DIRECT` A 72-hour cycle is a required domain concept.  
`GAP` The corpus does not define its start trigger, timezone, pause behavior, renewal, exceptions or relation to deadlines. No implementation may assume those semantics before an ADR approves them.

## PROD-004 — States and state machines

### Canonical work states

`BACKLOG`, `READY`, `FOCUS`, `BLOCKED`, `DONE`

| From | To | Guard |
|---|---|---|
| BACKLOG | READY | minimum structure and dependencies are valid |
| READY | FOCUS | eligible and WIP slot available |
| READY | BLOCKED | blocking condition is registered |
| FOCUS | BLOCKED | active work can no longer proceed |
| FOCUS | DONE | DoD and evidence requirements satisfied |
| BLOCKED | READY | all blocking conditions resolved |
| FOCUS | READY | explicit replan releases focus without completion |
| DONE | READY | explicit reopen with reason and audit record |

`PROPOSED` Direct `BACKLOG → BLOCKED` and `DONE → BACKLOG` transitions are forbidden.  
`CORPUS_DERIVED` Every transition records actor, channel, timestamp, reason and correlation ID.

### Other state machines

- Evidence: `CAPTURED → VALIDATED`, with `REJECTED` as an alternative terminal review outcome (`PROPOSED`).
- Integration: `DISCONNECTED → CONNECTING → CONNECTED`, with `DEGRADED` and `REVOKED` (`PROPOSED`).
- Business telemetry: `OBSERVED_UNRECONCILED → OBSERVED_RECONCILED → DERIVED_OBSERVED` (`CORPUS_DIRECT`).

## PROD-005 — Journeys and use cases

### Primary vertical slice

Create project → create deliverable → decompose → generate Action → verify eligibility → show Agora → execute → register Evidence → update progress → recalculate route.

### Journeys

| Journey | Main outcome | Acceptance signal |
|---|---|---|
| Create project | A governed project exists | valid owner/workspace and audit record |
| Plan | Outcomes become a dependency-aware graph | at least one eligible or explicitly blocked path |
| Execute | User receives one viable next action | explanation, duration and constraints visible |
| Complete | Work changes state based on DoD | completion is idempotent and auditable |
| Evidence | Execution produces proof/context | Evidence is linked and retrievable |
| Replan | Interruption does not erase progress | next eligible path is recalculated |
| Resume | Prior context is restored | check-in/check-out state is available |
| Scan symbol | Physical cue invokes a permitted command | recognized symbol, feedback, audit and Undo |

### Edge journeys

No eligible action; insufficient capacity; dependency cycle; stale client; duplicate command; authorization lost mid-command; offline capture; evidence rejected; completed Action reopened.

## PROD-006 — Capability map

| Capability | Responsibility | Depends on |
|---|---|---|
| Understand | Ingest and normalize objectives/context | identity, content adapters |
| Structure | Build project hierarchy and graph | domain model |
| Plan | Apply capacity, dependencies and constraints | structure, calendar inputs |
| Dispatch / Agora | Select and explain Best Next Action | eligibility, WIP, ranking |
| Execute | Start, pause, complete and reconcile work | state machine, authority |
| Evidence | Capture and validate proof | storage, audit |
| Replan | Recompute valid route | dispatcher, current state |
| Mapa-OS | Visualize canonical operational state | projections, design system |
| Copilot | Orchestrate authorized operations | commands, queries, policy |
| Scanner | Map visual symbols to commands | model registry, dispatcher |
| Automations | Run governed triggers and actions | scheduler, idempotency |
| Integrations | Sync external context | adapters, consent, audit |
| Reports | Derive status from execution | events, evidence |
| Billing | Enforce plan entitlements | identity, usage ledger |
| Admin | Operate workspaces and incidents | RBAC, audit, observability |

## PROD-007 — Functional data model

### Core entities

`Workspace`, `Membership`, `Project`, `ValueStream`, `Deliverable`, `Task`, `Action`, `Dependency`, `Evidence`, `CapacityWindow`, `ExecutionSession`, `Blocker`, `DomainEvent`, `AuditEntry`, `IntegrationConnection`, `SymbolRegistryEntry`, `Automation`, `Subscription`, `UsageRecord`.

### Relationships

- Workspace owns memberships and all tenant data.
- Project belongs to one Workspace and contains Value Streams.
- Value Stream contains Deliverables; Deliverable contains Tasks; Task contains Actions.
- Dependency is a directed edge between compatible work nodes and cannot cross tenants.
- Evidence belongs to a Workspace and references its producing Action; optional Deliverable linkage supports outcome verification.
- ExecutionSession references at most one focused Action.
- Blocker references the affected work item and zero or more blocking dependencies.
- DomainEvent and AuditEntry carry tenant, actor, correlation and causation identifiers.

### Required identifiers and metadata

UUID/ULID-style stable ID (`PROPOSED` exact format), `workspace_id`, timestamps, version for optimistic concurrency, creator/updater, archival marker where applicable.

### Offline/sync contract

- Clients may queue explicitly offline-capable commands with a client operation ID.
- Server is authoritative for authorization, invariants and final ordering.
- Commands are idempotent; conflict responses include current version and recovery instruction.
- Scanner inference may run on-device; the resulting mutation still passes through domain authorization and reconciliation.
- `GAP` Conflict-resolution policy per entity and retention periods require dedicated ADRs.

## PROD-008 — Requirements and acceptance criteria

### Functional requirements

- FR-001 Create and manage the complete canonical hierarchy.
- FR-002 Represent dependencies and calculate Action eligibility.
- FR-003 Enforce WIP 1:1 for focused execution.
- FR-004 Recommend Best Next Action with a reason, expected duration, dependency state, completion evidence and fallback.
- FR-005 Capture evidence and derive progress/reports from state.
- FR-006 Replan when constraints, capacity or dependencies change.
- FR-007 Preserve one canonical state across all channels.
- FR-008 Support authorized Copilot commands: `/bomdia`, `/agora`, `/estado`, `/fechardia`, `/replanejamento`.
- FR-009 Support Mapa-OS versioning/history/print/export.
- FR-010 Support Visual Symbol Scanner commands and Undo.

### Non-functional requirements

Authorization server-side; tenant isolation; idempotency; optimistic concurrency; structured validation/errors; auditability; accessibility; offline/reconnect states; observability; privacy boundaries; API/schema versioning; no secrets in version control.

### Cross-cutting acceptance criteria

1. A domain mutation without authenticated actor, tenant and permission is rejected.
2. Repeated submission with the same idempotency key produces one effect.
3. No adapter creates an independent domain state.
4. Completion without required DoD/evidence is rejected.
5. A blocked or dependency-ineligible Action is never returned as Best Next Action.
6. Every accepted mutation emits an auditable event.
7. Offline conflicts never silently overwrite newer server state.
8. Empty, loading, error, offline and reconnect states are specified for web/mobile flows.

### Definition of Ready for a capability

A capability is ready for implementation only when owner, actor, input/output contract, invariants, permissions, failure modes, events, acceptance criteria, telemetry, dependencies, offline behavior and open ADRs are recorded.

## PROD-009 — Permissions and tenancy

### Boundary

Workspace is the tenant boundary. Every tenant-owned record carries `workspace_id`; reads and writes are scoped server-side and protected by database policies where applicable.

### Roles

`PROPOSED` Minimum role set:

- Owner: workspace lifecycle, billing, roles and all data.
- Admin: members, settings, integrations and operations; no ownership transfer.
- Member: create/update/execute within granted projects.
- Viewer: read-only projections and reports.

`GAP` Guest/external collaborator semantics and project-level custom roles are not defined.

### Authority rules

- AI, MCP, Scanner, WhatsApp and automation never bypass actor permissions or domain invariants.
- Destructive, financial, external-send and policy-changing operations require explicit authority appropriate to impact.
- Membership revocation invalidates future commands and active sessions according to the authentication boundary.
- Every privileged operation creates an AuditEntry.

## PROD-010 — Domain events and contracts

### Commands

`CreateProject`, `CreateValueStream`, `CreateDeliverable`, `CreateTask`, `CreateAction`, `AddDependency`, `SetCapacity`, `FocusAction`, `BlockAction`, `ResolveBlocker`, `CompleteAction`, `ReopenAction`, `AttachEvidence`, `Replan`, `ExecuteSymbolCommand`.

### Queries

`GetProjectGraph`, `GetCurrentState`, `GetEligibleActions`, `GetBestNextAction`, `GetExecutionHistory`, `GetEvidence`, `GetMapaOS`, `GetStatusReport`, `GetCapacity`, `GetAuditTrail`.

### Events

`ProjectCreated`, `DeliverableCreated`, `ActionCreated`, `DependencyAdded`, `CapacityChanged`, `ActionFocused`, `ActionBlocked`, `BlockerResolved`, `ActionCompleted`, `ActionReopened`, `EvidenceCreated`, `RouteReplanned`, `SymbolRecognized`, `SymbolCommandExecuted`, `IntegrationConnected`, `SubscriptionStarted`.

### Event envelope

`PROPOSED` Required fields: `event_id`, `event_type`, `schema_version`, `occurred_at`, `workspace_id`, `actor_id`, `aggregate_type`, `aggregate_id`, `aggregate_version`, `correlation_id`, `causation_id`, `channel`, `payload`.

### Scanner contract

The newer Visual Symbol Scanner specification supersedes the older Tesseract/OCR proposal:

| Symbol | VisualSymbolId | Command |
|---|---|---|
| Chat | `SYM-CHAT-001` | `OPEN_CHAT` |
| Selector | `SYM-SELECTOR-001` | `OPEN_SELECTOR` |
| Done | `SYM-DONE-001` | `COMPLETE_LATEST_OPEN_TASK`, with Undo |

`CORPUS_DIRECT` No QR and no OCR. Recognition uses a project-controlled DINOv2/ONNX artifact, on-device runtime where specified, normalized embeddings, unknown threshold, latch and no parallel inference. Recognition is decoupled from command execution.  
`GAP` The benchmark contains `<INSERT_SHA256_HERE>`; the model artifact hash must be supplied before implementation acceptance.

## Closure state

`WF02_PRODUCT_DOMAIN_BASELINE_READY = PASS`

Final WF-02 closure remains blocked by approval or resolution of the 72-hour-cycle semantics, definitive ranking, entity conflict policies, role matrix and event-envelope proposal. No runtime implementation or production test is asserted by this document.

