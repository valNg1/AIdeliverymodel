# Observability / Supervision Matrix

> ⚠️ **Experimental area.** Part of Product Operations / Run, which is not yet stabilized. Adapt this to your context.

The supervision matrix is the core operational instrument of the Run. It turns "we will keep an eye on it" into an explicit, owned, testable plan. Every object worth observing gets one row.

## Columns

| Column | Meaning |
|---|---|
| **Object to Observe** | What is being supervised (a data source, an AI output, a job, a business metric). |
| **Metric or Event** | The measurable signal or event that indicates health or trouble. |
| **Frequency** | How often it is checked (continuous, hourly, daily, weekly, on event…). |
| **Threshold** | The value or condition that triggers an action. |
| **Responsible Owner** | The named human accountable for this row. |
| **Action** | What is done when the threshold is crossed. |
| **Escalation Path** | Who is notified next if the action does not resolve it. |
| **Evidence or Log** | Where the proof/record lives. |
| **Review Date** | When this row is reviewed for relevance and correctness. |

## Illustrative template

Copy and adapt. The examples below are **generic and illustrative** — they are not measured values.

| Object to Observe | Metric or Event | Frequency | Threshold | Responsible Owner | Action | Escalation Path | Evidence or Log | Review Date |
|---|---|---|---|---|---|---|---|---|
| Source data feed | Freshness (age of latest record) | Daily | Older than expected refresh window | Data owner | Investigate feed; hold downstream use | Platform on-call → Product Owner | Ingestion log | Set per product |
| AI output quality | Human validation sample pass rate | Weekly | Below agreed acceptance level | Business owner | Review prompts / rules; re-validate | Product Owner | Validation records | Set per product |
| Key business metric | Value vs. expected range | Per reporting cycle | Outside agreed range | Business owner | Business review of cause | Product Owner → Sponsor | Report / dashboard | Set per product |
| Scheduled job | Success / failure event | Per run | Any failure | Run owner | Retry / fix; notify | Platform on-call | Job log | Set per product |
| Cost | Run cost vs. budget | Monthly | Over budget | Product Owner | Review usage; adjust | Portfolio governance | Cost report | Set per product |

*Do not treat the threshold cells above as recommended values. Set real thresholds with the business owner during Discovery and refine them in the Run.*

## How to build the matrix

1. Start it in Discovery as a **draft observability plan** (see [discovery-deliverables](../02-ai-discovery/discovery-deliverables.md)).
2. Have the [Product Operations Lead](../prompts/product-operations-lead.md) role propose rows from the corpus.
3. Assign a **named owner** to every row — no unowned supervision.
4. Set thresholds with the **business owner**, who accepts responsibility for them.
5. Review rows on their **Review Date**; retire stale ones.

## Quality checks

- Every object has an owner, an action, and an escalation path.
- No threshold is left as a placeholder in production.
- Evidence/log location is real and accessible.
- The matrix is reviewed on schedule.

See also: [overview.md](overview.md), [ownership-model.md](ownership-model.md), and the canvas [Observability dimension](../02-ai-discovery/ai-impact-canvas.md).
