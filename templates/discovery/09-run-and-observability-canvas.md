# 09 — Run and Observability Canvas

> Part of the [AI-native Discovery Workshop Kit](00-workshop-readme.md). **Workshop slot: 80–95 min.**
> Feeds the *Product Operations*, *Observability* and *Maintenance* dimensions of the consolidated [AI Impact Canvas](../ai-impact-canvas.md).
> Framework reference: [observability matrix](../../05-product-operations/observability-matrix.md) · Deeper analysis: [templates/product-operations-analysis.md](../product-operations-analysis.md).

> ⚠️ **Experimental area.** Product Operations / Run practices are not yet stabilized in this framework. Treat this canvas as a working model to adapt — see [Product Operations overview](../../05-product-operations/overview.md).

**Use case:** ______________________  **Date:** ____________

## Purpose

Turn "we'll keep an eye on it" into an explicit, owned supervision plan — **before** the Build is committed.

## Facilitator questions

- Every month this runs: who checks what, and how often?
- How would we find out that a source went stale, or that a narrative was wrong?
- Who gets called when it breaks, and who is called next?
- What does it cost to run, and who watches the cost?

## Canvas

| Topic | Known | Assumed | Unknown | Decision Required | Owner | Evidence | Build Impact | Run Impact | Next Action |
|---|---|---|---|---|---|---|---|---|---|
| Supervision model |  |  |  |  |  |  |  |  |  |
| Maintenance model |  |  |  |  |  |  |  |  |  |
| Incident handling |  |  |  |  |  |  |  |  |  |
| Support model |  |  |  |  |  |  |  |  |  |
| Run cost tracking |  |  |  |  |  |  |  |  |  |

## Supervision matrix

Fill one row per object. Thresholds that have not been set with the business are `[to be confirmed]` — never invent a value.

| Object to Observe | Metric or Event | Frequency | Threshold | Responsible Owner | Action | Escalation Path | Evidence or Log | Review Date |
|---|---|---|---|---|---|---|---|---|
| **Data source** | Freshness / age of latest record |  | `[to be confirmed]` |  |  |  |  |  |
| **Connector** | Connection success / failure |  | `[to be confirmed]` |  |  |  |  |  |
| **API** | Availability, error rate, latency |  | `[to be confirmed]` |  |  |  |  |  |
| **Transformation job** | Run success / failure, duration |  | `[to be confirmed]` |  |  |  |  |  |
| **Application** | Availability, errors |  | `[to be confirmed]` |  |  |  |  |  |
| **Model** | Availability, version change, behavior drift |  | `[to be confirmed]` |  |  |  |  |  |
| **Prompt** | Version in use, change events |  | `[to be confirmed]` |  |  |  |  |  |
| **Knowledge base** | Content freshness, coverage gaps |  | `[to be confirmed]` |  |  |  |  |  |
| **Generated narrative** | Validation pass rate on sampled outputs |  | `[to be confirmed]` |  |  |  |  |  |
| **User feedback** | Volume and nature of reported issues |  | `[to be confirmed]` |  |  |  |  |  |
| **Cost** | Run cost vs. budget (inference, API, platform) |  | `[to be confirmed]` |  |  |  |  |  |
| **Security event** | Access anomalies, policy violations |  | `[to be confirmed]` |  |  |  |  |  |
| **Dependency** | Upstream system change or outage |  | `[to be confirmed]` |  |  |  |  |  |
| **SLA** | Delivery on time vs. committed schedule |  | `[to be confirmed]` |  |  |  |  |  |

### Column meanings

| Column | Meaning |
|---|---|
| Object to Observe | What is supervised |
| Metric or Event | The signal indicating health or trouble |
| Frequency | Continuous / hourly / daily / weekly / per cycle / on event |
| Threshold | The value or condition that triggers the action |
| Responsible Owner | The **named human** accountable for this row |
| Action | What is done when the threshold is crossed |
| Escalation Path | Who is notified next if the action does not resolve it |
| Evidence or Log | Where the proof lives |
| Review Date | When this row is reviewed for relevance |

## Maintenance model

| Type | What it covers here | Owner | Expected effort | Frequency |
|---|---|---|---|---|
| Corrective (defects, failures) |  |  |  |  |
| Adaptive (source/dependency changes) |  |  |  |  |
| Evolutive (new reports, new rules) |  |  |  |  |
| AI upkeep (prompts, templates, thresholds, model changes) |  |  |  |  |
| Data quality upkeep |  |  |  |  |

## Support and incident handling

| Field | Value |
|---|---|
| Who do users contact first |  |
| Support hours / expectations |  |
| Incident severity definitions | `[to be confirmed]` |
| Who investigates data issues |  |
| Who investigates narrative quality issues |  |
| Escalation to business owner when |  |

## Run readiness check

- [ ] Every matrix row has a **named** Responsible Owner.
- [ ] Every row has an Action and an Escalation Path.
- [ ] Thresholds are either set with the business or explicitly `[to be confirmed]` with an owner.
- [ ] Someone owns the Run cost.
- [ ] The business has acknowledged the recurring supervision effort.

## Decision to obtain

- [ ] A first supervision matrix with named owners.
- [ ] Explicit acknowledgment of the monthly Run effort by the business.
- [ ] A decision on who provides support.

## Guardrails

- Never invent a threshold to fill a cell. `[to be confirmed]` with an owner is the correct answer.
- Supervision of **generated narratives** is the row teams most often forget — do not skip it.
- No unowned rows. An object nobody watches is an incident waiting to be discovered by a user.
- Record open Run questions in the [research backlog](../../05-product-operations/research-backlog.md).
