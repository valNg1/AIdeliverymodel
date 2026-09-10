# Data Readiness Canvas

> Reusable ADM template. Copy it per use case and fill it in a workshop. It decides one thing: **can ADM agents safely and reliably use this information yet?** Concept: [AI-Ready Foundation](../04-platform-and-governance/ai-ready-foundation.md). Tech-agnostic — name capabilities, not vendors.

**Use case:** ______________  **Owner:** ______________  **Date:** ____________

## Business Need
*What are we trying to enable?*

______________________________________________

## Data required
*What information does this capability need?*

- …

## Sources
| Data / Context | Current source | Owner | Format | Authoritative? | Access |
|---|---|---|---|---|---|
|  |  |  |  | Y / N / ? |  |

## Governance
- Owner known? ______
- Sensitivity? ______
- Access restrictions? ______
- Quality concerns? ______

*(→ Data Governance Map — see [AI-Ready Foundation §Layer 1](../04-platform-and-governance/ai-ready-foundation.md#layer-1--data-governance).)*

## Data Crossing
*Which sources must be combined? What common keys / relationships exist?*

| Sources to cross | Common key / join | Conflict or duplication? |
|---|---|---|
|  |  |  |

## Shadow IT / Duplication
*Where are local Excel files, duplicated datasets, email attachments, or unofficial copies?*

- …

## Source of Truth
*For each critical information domain, which source should be authoritative?*

| Information domain | Authoritative source | Copies to eliminate / govern |
|---|---|---|
|  |  |  |

## AI Readiness
*Can an agent consume this information reliably?*

- [ ] YES
- [ ] PARTLY
- [ ] NO

**Why?** ______________________________________________

## Required adapters
*What must [Agent 0](../04-platform-and-governance/ai-ready-foundation.md#agent-0--context--orchestration) connect to (API / connector / MCP / view / file …)?*

- …

## Gaps
*What prevents agent activation today?*

- …

## Decision
- [ ] 🟢 READY FOR AGENT ACTIVATION
- [ ] 🟠 READY WITH GUARDRAILS — guardrails: ____________________
- [ ] 🔴 DATA REMEDIATION REQUIRED FIRST — remediation: ____________________

*(Maps to the [readiness gate](../04-platform-and-governance/ai-ready-foundation.md#readiness-is-a-gate-not-always-a-project): GREEN / AMBER / RED.)*

## Next Action
*One concrete next step, with an owner.*

______________________________________________
