# 08 — Build Impact Canvas

> Part of the [AI-native Discovery Workshop Kit](00-workshop-readme.md). **Workshop slot: 80–95 min.**
> Feeds the *Delivery* dimension of the consolidated [AI Impact Canvas](../ai-impact-canvas.md).
> Deeper post-workshop analysis: [templates/delivery-recommendation.md](../delivery-recommendation.md).

**Use case:** ______________________  **Date:** ____________

## Purpose

Make the Build effort visible: what must be built, what can be reused, and — critically — **what the business itself must contribute**.

## Facilitator questions

- What must be built versus reused?
- Who writes the business rules, the prompt intent and the narrative templates? (Hint: not IT alone.)
- What does "done" include — testing, evaluation, security review, documentation?
- Which roles do we need, and are they available?

## Canvas

| Topic | Known | Assumed | Unknown | Decision Required | Owner | Evidence | Build Impact | Run Impact | Next Action |
|---|---|---|---|---|---|---|---|---|---|
| Components to build |  |  |  |  |  |  |  |  |  |
| Components to reuse |  |  |  |  |  |  |  |  |  |
| Data preparation |  |  |  |  |  |  |  |  |  |
| Integration work |  |  |  |  |  |  |  |  |  |
| UX work |  |  |  |  |  |  |  |  |  |
| Prompt design |  |  |  |  |  |  |  |  |  |
| Evaluation |  |  |  |  |  |  |  |  |  |
| Testing |  |  |  |  |  |  |  |  |  |
| Security review |  |  |  |  |  |  |  |  |  |
| Documentation |  |  |  |  |  |  |  |  |  |
| Environments |  |  |  |  |  |  |  |  |  |
| Deployment |  |  |  |  |  |  |  |  |  |
| Required roles |  |  |  |  |  |  |  |  |  |
| Business contribution |  |  |  |  |  |  |  |  |  |
| Technical contribution |  |  |  |  |  |  |  |  |  |

## Build vs. reuse

| Component | Build | Reuse | Source of reusable asset | Effort (S/M/L) | Notes |
|---|---|---|---|---|---|
| Data ingestion / connectors | ☐ | ☐ |  |  |  |
| Consolidation / transformation | ☐ | ☐ |  |  |  |
| Reporting / formatting layer | ☐ | ☐ |  |  |  |
| Narrative generation | ☐ | ☐ |  |  |  |
| Validation / approval flow | ☐ | ☐ |  |  |  |
| Distribution / export | ☐ | ☐ |  |  |  |
| Observability / logging | ☐ | ☐ |  |  |  |

> Check [reusable building blocks](../../03-delivery/reusable-assets.md) before marking anything "build".

## Business contribution (not delegable to IT)

| Contribution | Who (named) | Effort | When needed | Confirmed? |
|---|---|---|---|---|
| Business rules definition |  |  |  | ☐ |
| Data quality expectations and thresholds |  |  |  | ☐ |
| Narrative templates and tone |  |  |  | ☐ |
| Prompt intent and acceptance criteria |  |  |  | ☐ |
| Reference examples (good / bad outputs) |  |  |  | ☐ |
| Output validation during Build |  |  |  | ☐ |
| User acceptance testing |  |  |  | ☐ |

> **Facilitator:** if these lines are empty or all point to IT, the Build is not ready to start. Say so.

## Technical contribution

| Contribution | Who / role | Effort | Dependencies |
|---|---|---|---|
| Connector development / configuration |  |  |  |
| Data preparation and transformation |  |  |  |
| Application / reporting assembly |  |  |  |
| Prompt engineering and evaluation harness |  |  |  |
| Security implementation |  |  |  |
| Environments and deployment |  |  |  |
| Observability instrumentation |  |  |  |

## Evaluation and testing

| Field | Value |
|---|---|
| How generated narratives will be evaluated |  |
| Size and source of the evaluation set |  |
| Acceptance threshold | `[to be confirmed with business]` |
| Regression approach when prompts change |  |
| Who signs off (named) |  |

## Required roles and availability

| Role | Needed? | Named person | Available? | Notes |
|---|---|---|---|---|
| Business Owner | ☐ |  | ☐ |  |
| Product Owner | ☐ |  | ☐ |  |
| Data Owner / Steward | ☐ |  | ☐ |  |
| IT Delivery Lead | ☐ |  | ☐ |  |
| Solution Architect | ☐ |  | ☐ |  |
| Security | ☐ |  | ☐ |  |
| Platform Team | ☐ |  | ☐ |  |
| Product Operations | ☐ |  | ☐ |  |

## Environments and deployment

| Field | Value |
|---|---|
| Environments needed (dev / test / prod) |  |
| Environment provisioning owner |  |
| Deployment approach |  |
| Release approval |  |
| Documentation expected at handover |  |

## Decision to obtain

- [ ] Agreed build-vs-reuse split.
- [ ] **Named business contributors** with confirmed availability.
- [ ] Agreement on what "done" includes (evaluation, security review, documentation).

## Guardrails

- Reuse before build — every "build" line should have survived a reuse check.
- Prompt design and narrative templates are business-owned work, not an IT afterthought.
- An unstaffed role is a risk — record it in [11 Cost, Risk and Evolution](11-cost-risk-and-evolution-canvas.md).
