# Troubleshooting — Applied Cases

**Real delivery problems solved using the AI Delivery Model.** These are not tutorials or generic documentation — they are the operational trace of applying the framework to fix an actual product, and they evolve with the fix.

## Cases

| Case | Product | Practice demonstrated |
|---|---|---|
| [Compostelle — Reuse feedback](compostelle-reuse-feedback/00-problem.md) | Language-learning app | Prototype before specification; Capability vs Delivery Intent; document a limitation before adding a dependency |

## The Compostelle Reuse-feedback case

A post-MVP fix: the Reuse step returned a pass/fail-style result but did not help the learner improve. Walk it in order:

1. [Problem](compostelle-reuse-feedback/00-problem.md)
2. [AI Prototype](compostelle-reuse-feedback/01-ai-prototype.md) — behaviour made tangible before code
3. [Capability Intent](compostelle-reuse-feedback/02-capability-intent.md)
4. [Acceptance Criteria](compostelle-reuse-feedback/03-acceptance-criteria.md)
5. [Gap Analysis](compostelle-reuse-feedback/04-gap-analysis.md) — verified against the real code
6. [Delivery Loop](compostelle-reuse-feedback/05-delivery-loop.md) — files, tests, results
7. [Learning & Living Specification](compostelle-reuse-feedback/06-learning-and-living-spec.md)

## Where AI contributed (and where humans stayed responsible)

This case shows concretely how AI changes delivery. AI was used to:

| | AI contribution |
|---|---|
| A | Convert raw learner feedback into a structured problem statement. |
| B | Cluster related issues (#10/#19/#21 + MVP feedback) into one capability problem. |
| C | Generate a **prototype before specification** (four worked examples). |
| D | Refine the Capability Intent. |
| E | Convert the validated prototype into acceptance criteria. |
| F | Inspect the real code and trace the flow to produce the gap analysis. |
| G | Propose the minimal implementation (no new dependency). |
| H | Generate and implement the test set. |
| I | Implement the product change. |
| J | Convert delivery results into the updated Living Specification. |

Humans stayed responsible for **product judgement, prototype validation, priority, acceptance, and the final decision** — including the decision *not* to add a generative engine this iteration.

> **AI produces analyses. Humans build consensus and make decisions.**
