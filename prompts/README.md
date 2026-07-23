# Agent Prompts

These prompts define the specialized AI roles used in the [augmented Discovery workshop](../02-ai-discovery/augmented-workshop.md). Each role analyzes the **same shared corpus** from its own expert angle and produces a focused analysis. An orchestrator consolidates them; a human arbitrates and decides.

> **AI produces the analyses. Humans build consensus and make decisions.**

## The roles

| Role | Focus | Prompt |
|---|---|---|
| Orchestrator | Coordinate roles, consolidate outputs, flag conflicts | [orchestrator.md](orchestrator.md) |
| Business Analyst | Business value, process, users, business rules | [business-analyst.md](business-analyst.md) |
| Data Architect | Data sources, connectors, data quality | [data-architect.md](data-architect.md) |
| Solution Architect | Architecture, AI capabilities, integration | [solution-architect.md](solution-architect.md) |
| Security Reviewer | Security, compliance, risk | [security-reviewer.md](security-reviewer.md) |
| Product Operations Lead | Observability, maintenance, Run *(experimental)* | [product-operations-lead.md](product-operations-lead.md) |
| Delivery Lead | Delivery approach, sequencing, reuse | [delivery-lead.md](delivery-lead.md) |

## Prompt structure

Every role prompt contains the same nine sections:

1. **Purpose** — why this role exists.
2. **Role** — the persona and expertise.
3. **Inputs** — the shared corpus it consumes.
4. **Analysis Tasks** — what it analyzes.
5. **Expected Outputs** — what it produces (mapped to a template and the canvas).
6. **Quality Checks** — how to tell the output is good.
7. **Boundaries** — what it must not do.
8. **Handoffs to Other Roles** — what it passes to whom.
9. **Reusable Prompt** — a copy-paste prompt to run the role.

## How to use these prompts

1. Assemble the shared corpus (see [inputs-and-workflow](../02-ai-discovery/inputs-and-workflow.md)).
2. Run each role's **Reusable Prompt** on the identical corpus.
3. Direct each output into its template in [../templates/](../templates/).
4. Run the [orchestrator](orchestrator.md) to consolidate into the [AI Impact Canvas](../02-ai-discovery/ai-impact-canvas.md).
5. Hold human arbitration; record decisions in the [decision log](../templates/decision-log.md).

> ⭐ **Around a live workshop:** run these prompts on the pre-workshop corpus to **pre-fill** the canvases of the [Discovery Workshop Kit](../templates/discovery/00-workshop-readme.md), then use the session to challenge and correct them — or run them afterwards on the session transcript to deepen each analysis. Either way, the arbitration stays human.

## Ground rules for all roles

- Use the status vocabulary everywhere: `Known` · `Assumed` · `Unknown` · `Decision Required`.
- Link every claim to evidence in the corpus.
- Fill both **Build Impact** and **Run Impact**.
- Never invent metrics, results, or facts not present in the corpus.
- Keep confidential/identifying details out; use generic references.
- Recommend; never decide. Decisions are human.
