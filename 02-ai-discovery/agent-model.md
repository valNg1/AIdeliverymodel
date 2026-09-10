# Agent Model

The agent model defines the specialized AI roles used in the augmented Discovery workshop and how they collaborate. This is a first version; the operational detail lives in the [prompts](../prompts/).

## The roles

| Role | Focus | Prompt |
|---|---|---|
| Orchestrator | Coordinates roles, consolidates outputs, flags conflicts | [orchestrator.md](../prompts/orchestrator.md) |
| Business Analyst | Business value, process, users, business rules | [business-analyst.md](../prompts/business-analyst.md) |
| Data Architect | Data sources, connectors, data quality | [data-architect.md](../prompts/data-architect.md) |
| Solution Architect | Architecture, AI capabilities, integration | [solution-architect.md](../prompts/solution-architect.md) |
| Security Reviewer | Security, compliance, risk | [security-reviewer.md](../prompts/security-reviewer.md) |
| Product Operations Lead | Observability, maintenance, Run (experimental) | [product-operations-lead.md](../prompts/product-operations-lead.md) |
| Delivery Lead | Delivery approach, sequencing, reuse | [delivery-lead.md](../prompts/delivery-lead.md) |

## How they collaborate

1. All specialized roles receive the **same corpus** (see [inputs-and-workflow.md](inputs-and-workflow.md)).
2. Each produces a focused analysis in its lane, filling its part of the [AI Impact Canvas](ai-impact-canvas.md).
3. The **orchestrator** merges the analyses, flags conflicts and gaps, and prepares the consolidated view.
4. A **human** arbitrates and decides.

## Design rules for the roles

- **Same corpus, different lens.** Roles differ by expertise, not by input.
- **Explicit uncertainty.** Every output uses Known / Assumed / Unknown / Decision Required.
- **Evidence-linked.** Every claim traces to a corpus item.
- **Bounded.** Each role declares what it must not do (see each prompt's *Boundaries*).
- **Handoffs.** Each role names what it passes to which other role (see each prompt's *Handoffs*).

> **AI produces the analyses. Humans build consensus and make decisions.**

## Orchestrator vs Agent 0

Two different broker roles, easily confused:

- The **Orchestrator** (above) is a *Discovery-time* role: it consolidates specialist **analyses** into the AI Impact Canvas and flags conflicts.
- **Agent 0** is a *delivery-time* **context** broker in the [AI-Ready Foundation](../04-platform-and-governance/ai-ready-foundation.md#agent-0--context--orchestration): it discovers and connects to authorised sources, builds the Context Pack, preserves provenance, enforces access boundaries, and orchestrates handoffs between delivery agents. It is **not** a data warehouse.

See also: [../01-operating-model/human-ai-team-model.md](../01-operating-model/human-ai-team-model.md).
