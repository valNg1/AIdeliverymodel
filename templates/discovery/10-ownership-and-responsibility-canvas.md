# 10 — Ownership and Responsibility Canvas

> Part of the [AI-native Discovery Workshop Kit](00-workshop-readme.md). **Workshop slot: 95–110 min.**
> Feeds the *Ownership* dimension of the consolidated [AI Impact Canvas](../ai-impact-canvas.md).
> Framework reference: [ownership model](../../05-product-operations/ownership-model.md) · Post-workshop detail: [templates/ownership-matrix.md](../ownership-matrix.md).

**Use case:** ______________________  **Date:** ____________

## Purpose

Assign every responsibility to a **named human**, and prevent the business from transferring its responsibilities to IT by default.

## Facilitator questions

- Who owns the business rules? The data quality? The prompts? The narrative templates?
- Who validates outputs before they reach end users?
- Who decides when a report changes?
- Who pays, and who controls the cost?

## Roles

| Code | Role | Named person |
|---|---|---|
| BO | Business Owner |  |
| PO | Product Owner |  |
| DO | Data Owner |  |
| DS | Data Steward |  |
| ITL | IT Delivery Lead |  |
| SA | Solution Architect |  |
| SEC | Security |  |
| PLT | Platform Team |  |
| POps | Product Operations |  |
| SUP | Support |  |
| EU | End Users |  |

## RACI matrix

**R** = Responsible (does the work) · **A** = Accountable (answerable — exactly one per row) · **C** = Consulted · **I** = Informed

| Responsibility | BO | PO | DO | DS | ITL | SA | SEC | PLT | POps | SUP | EU | **Accountable (named)** |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Business rules |  |  |  |  |  |  |  |  |  |  |  |  |
| Data quality |  |  |  |  |  |  |  |  |  |  |  |  |
| Data access |  |  |  |  |  |  |  |  |  |  |  |  |
| Prompts |  |  |  |  |  |  |  |  |  |  |  |  |
| Narrative templates |  |  |  |  |  |  |  |  |  |  |  |  |
| Validation |  |  |  |  |  |  |  |  |  |  |  |  |
| Model choice |  |  |  |  |  |  |  |  |  |  |  |  |
| Architecture |  |  |  |  |  |  |  |  |  |  |  |  |
| Security |  |  |  |  |  |  |  |  |  |  |  |  |
| Monitoring |  |  |  |  |  |  |  |  |  |  |  |  |
| Incident handling |  |  |  |  |  |  |  |  |  |  |  |  |
| Support |  |  |  |  |  |  |  |  |  |  |  |  |
| Cost control |  |  |  |  |  |  |  |  |  |  |  |  |
| Change requests |  |  |  |  |  |  |  |  |  |  |  |  |
| Product roadmap |  |  |  |  |  |  |  |  |  |  |  |  |
| Retirement |  |  |  |  |  |  |  |  |  |  |  |  |

## Canvas

| Topic | Known | Assumed | Unknown | Decision Required | Owner | Evidence | Build Impact | Run Impact | Next Action |
|---|---|---|---|---|---|---|---|---|---|
| Single Product Owner |  |  |  |  |  |  |  |  |  |
| Business-side responsibilities |  |  |  |  |  |  |  |  |  |
| IT-side responsibilities |  |  |  |  |  |  |  |  |  |
| Platform responsibilities |  |  |  |  |  |  |  |  |  |
| Run responsibilities |  |  |  |  |  |  |  |  |  |
| Gaps / unassigned |  |  |  |  |  |  |  |  |  |

## Business responsibilities — explicit acceptance

The business owner confirms acceptance of these responsibilities:

- ☐ **Business rules** — defining and maintaining them
- ☐ **Data quality** — expectations and remediation
- ☐ **Validation of results** — before distribution
- ☐ **Thresholds** — setting and reviewing them
- ☐ **Prompts** — intent and acceptance criteria
- ☐ **Narrative templates** — content, tone, and what must never be said
- ☐ **Supervision** — the business-side rows of the [supervision matrix](09-run-and-observability-canvas.md)
- ☐ **Functional evolution** — deciding what changes and when

**Business Owner (name):** ______________  **Date:** ____________

> **Facilitator:** read this list aloud. If the answer to any line is "IT will handle it", stop and resolve it. This is the single most common failure point of the workshop.

## Unassigned responsibilities

| Responsibility | Why unassigned | Who will decide | By when |
|---|---|---|---|
|  |  |  |  |

## Decision to obtain

- [ ] A single named **Product Owner**, accountable end to end.
- [ ] Exactly **one Accountable** per RACI row.
- [ ] Explicit business acceptance of the business-side list above.
- [ ] Every unassigned responsibility has a decision owner and a date.

## Guardrails

- One Accountable per row. Two means none.
- Job titles are not owners — use names.
- Responsibilities accepted verbally in the room still get written down here.
- See [Single Product Ownership](../../00-vision/principles.md).
