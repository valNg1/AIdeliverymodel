# Product Operations — Overview

> ⚠️ **Experimental area.** Product Operations / Run is the least stabilized part of this framework. The structure below is a working model to adapt to your context, not settled doctrine. Treat everything here as a hypothesis to test and refine. See the [research backlog](research-backlog.md) for open questions.

Product Operations — the Run — is the set of activities that keep a product healthy in production: supervising it, validating its behavior, maintaining it, and evolving it. The central claim of this framework is that **the Run must be planned during Discovery, not discovered after Build.**

## Why the Run belongs in Discovery

A need is cheap to state and expensive to run. Many organizations commit to a product before anyone has answered:

- What must be supervised, how often, and by whom?
- What are the thresholds, and who acts when they are crossed?
- Who owns data quality, result validation, prompts, and evolution?
- What does the Run cost?

The AI Delivery Model brings these questions forward into the [AI Impact Canvas](../02-ai-discovery/ai-impact-canvas.md) via the **Run Impact** column, so the business accepts its downstream responsibilities *before* committing.

## What the business must accept

Expressing a need is the beginning of business responsibility, not the end. For the Run, business owners accept responsibility for:

- **business rules** and their upkeep;
- **data quality**;
- **validation of results**;
- **thresholds**;
- **prompts**;
- **narrative / reporting models**;
- **supervision**;
- **functional evolution**.

## The pillars of Product Operations

| Pillar | Question it answers | Where |
|---|---|---|
| Run principles | How do we approach the Run? | [run-principles.md](run-principles.md) |
| Observability | What do we supervise, how, and by whom? | [observability-matrix.md](observability-matrix.md) |
| Maintenance | How do we keep it healthy and current? | [maintenance-model.md](maintenance-model.md) |
| Ownership | Who is accountable across Business/IT/Platform/Run? | [ownership-model.md](ownership-model.md) |

## The supervision matrix

The core operational instrument of the Run is the **observability / supervision matrix**. For every object to observe, it records:

- **Object to Observe**
- **Metric or Event**
- **Frequency**
- **Threshold**
- **Responsible Owner**
- **Action**
- **Escalation Path**
- **Evidence or Log**
- **Review Date**

Full structure and examples: [observability-matrix.md](observability-matrix.md).

## How Product Operations connects to Discovery

- Discovery produces a **draft observability plan** — see [discovery-deliverables](../02-ai-discovery/discovery-deliverables.md).
- The [Product Operations Lead](../prompts/product-operations-lead.md) role analyzes the corpus for Run impact.
- Run realities feed back into future Discovery (the Operate → Discovery loop in the [lifecycle](../01-operating-model/lifecycle.md)).

## Honest status

Because this area is experimental:

- Present Run practices to stakeholders as evolving, not fixed.
- Do not claim metrics or outcomes that were not observed.
- Capture what you learn in the [research backlog](research-backlog.md) so the model improves.
