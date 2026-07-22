# Human + AI Team Model

The delivery team is designed as humans *and* AI working together, each in defined roles. This is a first version.

## The stance

AI is a team member, not a tool bolted on and not an oracle. It works within a defined role, on a defined corpus, producing defined outputs, with explicit boundaries. Humans retain validation and decision authority at all times.

> **AI produces the analyses. Humans build consensus and make decisions.**

## How work is divided

| Activity | AI does | Human does |
|---|---|---|
| Analysis | Produce specialized analyses from a shared corpus | Frame the question, provide the corpus |
| Options | Generate and compare options | Weigh trade-offs against context |
| Consolidation | Draft a consolidated view | Arbitrate conflicts, build consensus |
| Validation | Flag gaps, risks, inconsistencies | Validate outputs and accept responsibility |
| Decision | Recommend | Decide and record the decision |

## The specialized roles

During Discovery, several AI roles analyze the same corpus in parallel and hand their outputs to an orchestrator for consolidation:

- [Business Analyst](../prompts/business-analyst.md)
- [Data Architect](../prompts/data-architect.md)
- [Solution Architect](../prompts/solution-architect.md)
- [Security Reviewer](../prompts/security-reviewer.md)
- [Product Operations Lead](../prompts/product-operations-lead.md)
- [Delivery Lead](../prompts/delivery-lead.md)
- Coordinated by the [Orchestrator](../prompts/orchestrator.md)

## Boundaries

- AI outputs are inputs to human judgment, never final decisions.
- Every AI role declares what it must not do (see each prompt's *Boundaries* section).
- Accountability always maps to a named human — see [roles-and-responsibilities.md](roles-and-responsibilities.md).

See the agent model in Discovery: [../02-ai-discovery/agent-model.md](../02-ai-discovery/agent-model.md).
