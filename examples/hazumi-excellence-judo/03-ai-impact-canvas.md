# 03 — AI Impact Canvas

> Part of the [Excellence Judo LMS worked example](00-overview.md) — a fictionalized case. Applies the [AI Impact Canvas](../../02-ai-discovery/ai-impact-canvas.md).

A simplified but connected canvas for the Excellence Judo LMS at the end of Discovery. It uses the framework's dimensions and status vocabulary — nothing invented. The point is not completeness; it is to show that need, technology, and Run are **one connected view**, not separate topics.

**Status vocabulary** (from the [canvas](../../02-ai-discovery/ai-impact-canvas.md#the-status-columns-what-makes-it-operational)): `Known` · `Assumed` · `Unknown` · `Decision Required`.

## Canvas (simplified)

| Dimension | Status | Element | Owner | Build Impact | Run Impact |
|---|---|---|---|---|---|
| **Business Value** | Known | A coherent learning journey from fragmented knowledge | Product Owner | — | — |
| **Process / Users** | Known | Practitioner selects level → follows path → opens item | Product Owner | Navigation UI | Support for learners |
| **Data / Knowledge** | Assumed | Entities: `LearningPath`, `PathStep`, `ContentItem`, `LearnerLevel` | Data Architect | Minimal data model | Model evolves with content |
| **Content Sources** | Known | Mixed formats today (docs, video, expert notes); no single structured source | Content owner | Manual prep for slice | Ongoing curation |
| **Capabilities** | Known | Authenticated access · path view · content viewer (read-only) | Solution Architect | Small; reuse-first | Low for loop 1 |
| **Architecture** | Decision Required | Reuse auth + viewer pattern vs. build new → **D4: reuse** | Solution Architect | Lower via reuse | Fewer components to run |
| **Security** | Known | Role-gated access; protect proprietary content | Security Reviewer | Auth + roles | Access review cadence |
| **Delivery** | Known | Thin slice for loop 1 (see [loop](04-first-delivery-loop.md)) | Delivery Lead | One small increment | — |
| **Run / Product Ops** *(experimental)* | Assumed | Validation status + freshness review needed | Product Operations | Validation field | Editorial upkeep |
| **Ownership** | Known | France Judo owns content; Product Owner accountable end to end | Product Owner | — | Editorial ownership |
| **Risks** | Assumed | Navigation axis may be wrong (level-only); content prep effort underestimated | Product Owner | Rework risk | Curation load |
| **Open Questions** | Unknown | Q1 navigation axis · Q2 taxonomy · Q3 versioning/freshness | Product Owner | — | — |

## The connections

The canvas earns its name by showing how one choice ripples through the others. Example, starting from **content structure**:

```
Content structure (level? objective?)
   → learner navigation (what the practitioner browses by)
      → data model (LearningPath / ContentItem metadata)
         → editorial ownership (who curates against which axis)
            → validation (what "validated" means per axis)
               → future maintenance (freshness review per axis)
```

A second thread, from **security**:

```
Proprietary content
   → role-gated access (practitioner / owner / admin)
      → architecture (auth is a reused building block, D4)
         → run (access review becomes a supervised object)
```

These threads are why **Q1 (navigation axis)** is not a minor UI question: it touches the data model, ownership, validation, and Run. Rather than resolve it by debate, the team routes it into the [first delivery loop](04-first-delivery-loop.md) — the canvas makes the stakes visible, the loop resolves them cheaply.

## What is intentionally not here

Cost detail, full observability matrix, evolution roadmap, and certification are **out of scope** for this example (see the [Intent's Out of Scope](01-intent.md)). A real Discovery would fill the remaining canvas dimensions; this example stops at what the first loop needs.

➡️ Next: [First Delivery Loop](04-first-delivery-loop.md).
