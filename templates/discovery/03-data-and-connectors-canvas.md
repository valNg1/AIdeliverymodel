# 03 — Data and Connectors Canvas

> Part of the [AI-native Discovery Workshop Kit](00-workshop-readme.md). **Workshop slot: 45–65 min.**
> Feeds the *Data Sources*, *Connectors* and *Data Quality* dimensions of the consolidated [AI Impact Canvas](../ai-impact-canvas.md).

**Use case:** ______________________  **Date:** ____________

## Purpose

Identify every source system, how we would reach it, how good and how fresh its data is, and who owns it — with unconfirmed access explicitly marked.

## Facilitator questions

- Which source systems hold the data? Who owns each one?
- How would we access them — existing connector, API, export? Is that confirmed?
- How fresh must the data be? How good is its quality today?
- What do we do if a source is unavailable?

## Canvas

| Topic | Known | Assumed | Unknown | Decision Required | Owner | Evidence | Build Impact | Run Impact | Next Action |
|---|---|---|---|---|---|---|---|---|---|
| Source system |  |  |  |  |  |  |  |  |  |
| Data owner |  |  |  |  |  |  |  |  |  |
| Data type |  |  |  |  |  |  |  |  |  |
| Sensitivity |  |  |  |  |  |  |  |  |  |
| Access method |  |  |  |  |  |  |  |  |  |
| Connector or API |  |  |  |  |  |  |  |  |  |
| Authentication |  |  |  |  |  |  |  |  |  |
| Data quality |  |  |  |  |  |  |  |  |  |
| Refresh frequency |  |  |  |  |  |  |  |  |  |
| Volume |  |  |  |  |  |  |  |  |  |
| Retention |  |  |  |  |  |  |  |  |  |
| Transformation |  |  |  |  |  |  |  |  |  |
| Lineage |  |  |  |  |  |  |  |  |  |
| Fallback if source unavailable |  |  |  |  |  |  |  |  |  |

## Per-source inventory

Repeat one block per source system. Use `[to be confirmed]` freely.

### Source 1

| Field | Value |
|---|---|
| Source system (generic name) |  |
| Data owner (named person) |  |
| Data type (transactional / reference / aggregated / free text) |  |
| Sensitivity (public / internal / confidential / personal data) |  |
| Access method (API / database / file export / manual) |  |
| Connector or API available? | ☐ Exists ☐ To build ☐ `[to be confirmed]` |
| Authentication (service account / delegated / key-based) |  |
| Data quality today (completeness, accuracy, known issues) |  |
| Refresh frequency (source) |  |
| Refresh frequency (required by business) |  |
| Volume (rows / size / growth) |  |
| Retention requirement |  |
| Transformation needed |  |
| Lineage (can we trace a figure back to source?) |  |
| Fallback if unavailable |  |
| Status | Known / Assumed / Unknown / Decision Required |

### Source 2

| Field | Value |
|---|---|
| Source system (generic name) |  |
| Data owner (named person) |  |
| Data type |  |
| Sensitivity |  |
| Access method |  |
| Connector or API available? | ☐ Exists ☐ To build ☐ `[to be confirmed]` |
| Authentication |  |
| Data quality today |  |
| Refresh frequency (source) |  |
| Refresh frequency (required) |  |
| Volume |  |
| Retention requirement |  |
| Transformation needed |  |
| Lineage |  |
| Fallback if unavailable |  |
| Status | Known / Assumed / Unknown / Decision Required |

### Source 3

| Field | Value |
|---|---|
| Source system (generic name) |  |
| Data owner (named person) |  |
| Data type |  |
| Sensitivity |  |
| Access method |  |
| Connector or API available? | ☐ Exists ☐ To build ☐ `[to be confirmed]` |
| Authentication |  |
| Data quality today |  |
| Refresh frequency (source) |  |
| Refresh frequency (required) |  |
| Volume |  |
| Retention requirement |  |
| Transformation needed |  |
| Lineage |  |
| Fallback if unavailable |  |
| Status | Known / Assumed / Unknown / Decision Required |

## Data quality summary

| Source | Quality required | Quality today | Gap | Who owns closing the gap |
|---|---|---|---|---|
|  |  |  |  |  |

> Data quality is a **business** responsibility. If no business owner is named here, stop and name one.

## Decision to obtain

- [ ] Agreed in-scope source list.
- [ ] A named **Data Owner** per source.
- [ ] Every unconfirmed connector recorded as `[to be confirmed]` with an owner and a due date in [12 Open Questions](12-open-questions-and-decisions.md).

## Guardrails

- "We have an API for that" is `Assumed` until someone shows evidence.
- Refresh frequency required by the business drives Run cost — record both source and required frequency.
- Do not name internal tools or vendors; describe capabilities generically.
