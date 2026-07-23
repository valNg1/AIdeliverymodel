# The Augmented Discovery Workshop

An augmented Discovery workshop is a facilitated session in which specialized AI roles analyze the same shared corpus and produce focused analyses, which a human then consolidates and arbitrates.

> ⭐ **To run one:** use the ready-made **[AI-native Discovery Workshop Kit](../templates/discovery/00-workshop-readme.md)** — timed agenda, 15 canvases, facilitator guidance, [single workbook](../templates/discovery/ai-discovery-workbook.md), and a [worked example](../examples/discovery/automated-reporting-example.md).

## Principle

> **AI produces the analyses. Humans build consensus and make decisions.**

The workshop is not automated. AI expands how much analysis you can do on the same material, in parallel, from multiple expert angles. Humans stay responsible for framing, arbitration, and decisions.

## The specialized roles

Each role analyzes the **same corpus** from its own expert angle:

| Role | Angle | Prompt |
|---|---|---|
| Business Analyst | Value, process, users, business rules | [business-analyst.md](../prompts/business-analyst.md) |
| Data Architect | Data sources, connectors, data quality | [data-architect.md](../prompts/data-architect.md) |
| Solution Architect | Architecture, AI capabilities, integration | [solution-architect.md](../prompts/solution-architect.md) |
| Security Reviewer | Security, compliance, risk | [security-reviewer.md](../prompts/security-reviewer.md) |
| Product Operations Lead | Observability, maintenance, Run (experimental) | [product-operations-lead.md](../prompts/product-operations-lead.md) |
| Delivery Lead | Delivery approach, sequencing, reuse | [delivery-lead.md](../prompts/delivery-lead.md) |
| Orchestrator | Consolidation and conflict-flagging | [orchestrator.md](../prompts/orchestrator.md) |

## The shared corpus

All roles analyze the same inputs:

- workshop transcript;
- business documents;
- notes;
- diagrams and schemas;
- known constraints.

Details and handling: [inputs-and-workflow.md](inputs-and-workflow.md).

## Workshop flow

**Before — prepare the corpus.**
Collect documents, constraints, and any prior material. Confirm scope and the business question. Use the [workshop kit agenda](../templates/discovery/00-workshop-readme.md) (or the [short generic agenda](../templates/discovery-workshop-agenda.md) for lighter sessions).

**During — capture, don't decide.**
Facilitate the business conversation and capture a good transcript and notes. The goal of the live session is a rich, accurate corpus — not premature conclusions.

**After (or in a second pass) — run the analyses.**
Give the corpus to each specialized role. Each produces its analysis into the relevant part of the [AI Impact Canvas](ai-impact-canvas.md), using the Known / Assumed / Unknown / Decision Required columns.

**Consolidate.**
The [orchestrator](../prompts/orchestrator.md) merges the analyses into one canvas and flags conflicts, gaps, and duplicated assumptions.

**Arbitrate — humans decide.**
The team reviews the consolidated canvas, resolves conflicts, assigns owners, and records decisions in the [decision log](../templates/decision-log.md). Unresolved items become open questions.

## Making Build and Run impact immediate

The workshop's distinctive job is to show the business the downstream cost of its choices *while it is choosing*. Two habits make this real:

- For every requested capability, ask the Product Operations Lead role: *what would this cost to run and supervise?*
- For every data or AI choice, fill the **Run Impact** column before moving on.

## Facilitator checklist

- [ ] Corpus collected and shared with all roles.
- [ ] Business question and scope written down.
- [ ] Each role has produced its analysis.
- [ ] Canvas consolidated; conflicts flagged.
- [ ] Owners assigned; decisions recorded.
- [ ] Run impact filled for every major choice.
- [ ] Business has explicitly accepted its downstream responsibilities.
- [ ] Open questions captured for follow-up.

## Related

- Inputs and workflow: [inputs-and-workflow.md](inputs-and-workflow.md)
- Agent model: [agent-model.md](agent-model.md)
- Deliverables: [discovery-deliverables.md](discovery-deliverables.md)
