# AI Impact Canvas

The AI Impact Canvas is the central deliverable of AI-native Discovery. It is a single, connected view that links a business need to its full Build and Run consequences.

This page explains the canvas. To **use** it, copy the operational template: [templates/ai-impact-canvas.md](../templates/ai-impact-canvas.md).

## Why a canvas

Requirements documents describe *what* is wanted. They rarely show how a choice ripples through data, architecture, security, cost, supervision, and ownership. The canvas exists to make those ripples visible **in one place**, so the business can see and accept the downstream impact of its choices.

## The dimensions

The canvas covers, at minimum, these dimensions:

1. **Business Value** — the outcome and why it matters.
2. **Process** — the business process the product supports or changes.
3. **Users and Roles** — who uses it and in what role.
4. **Data Sources** — where the data comes from.
5. **Connectors** — the integrations required to reach that data.
6. **Data Quality** — the quality the product depends on, and who owns it.
7. **Visualization** — what the business expects to see.
8. **AI Capabilities** — the AI behavior required, and its limits.
9. **Architecture** — the shape of the solution.
10. **Security and Compliance** — obligations and constraints.
11. **Delivery** — how it will be built.
12. **Product Operations** — how it will be run (experimental area).
13. **Observability** — what must be supervised, and how.
14. **Maintenance** — how it will be kept healthy and current.
15. **Ownership** — who is accountable, across Business / IT / Platform / Run.
16. **Cost** — Build cost and Run cost.
17. **Risks** — what could go wrong.
18. **Evolution** — how it is expected to change.
19. **Open Questions** — what remains unresolved.

## The status columns (what makes it operational)

The canvas is a *working document*, not a description. For every element, record:

| Column | Meaning |
|---|---|
| **Known** | Established fact, with evidence. |
| **Assumed** | A working assumption to be confirmed. |
| **Unknown** | Explicitly not yet known. |
| **Decision Required** | A choice that must be made, by whom and by when. |
| **Owner** | The named human accountable for this element. |
| **Evidence** | The source: document, transcript, data sample, measurement. |
| **Build Impact** | How this affects the Build (effort, complexity, dependencies). |
| **Run Impact** | How this affects the Run (supervision, cost, ownership). |

The discipline is simple and strict: **nothing is left blank, and nothing is silently assumed.** Every cell is Known, Assumed, Unknown, or Decision Required — with an owner and evidence, and its Build and Run impact.

## How the canvas is produced

1. The [augmented workshop](augmented-workshop.md) gathers the corpus.
2. Specialized [AI roles](agent-model.md) each analyze the corpus and fill their part of the canvas.
3. The [orchestrator](../prompts/orchestrator.md) consolidates the parts into one canvas and flags conflicts.
4. A human arbitrates conflicts, resolves *Decision Required* items where possible, and assigns owners.
5. Remaining *Unknown* and *Decision Required* items become the [open questions](discovery-deliverables.md) and feed the [decision log](../templates/decision-log.md).

## Reading the canvas

- If the **Run Impact** column is empty or vague, Discovery is not finished.
- If an element is **Assumed** with no owner, it is a risk, not a fact.
- **Decision Required** items are the agenda for the human arbitration.
- The balance of Known vs. Unknown is a signal of readiness to move to Design.

## Related

- Fill-in template: [templates/ai-impact-canvas.md](../templates/ai-impact-canvas.md)
- Observability detail: [../05-product-operations/observability-matrix.md](../05-product-operations/observability-matrix.md)
- Ownership detail: [../templates/ownership-matrix.md](../templates/ownership-matrix.md)
- Decisions: [../templates/decision-log.md](../templates/decision-log.md)
