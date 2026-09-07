# 03 — Remediation

> Part of the [Specification churn worked example](00-overview.md) — a fictionalized case. Applies the [Return-to-Intent branch](../../03-delivery/intent-based-development.md#the-return-to-intent-branch).

The recurring feedback triggers the remediation rule:

> **When delivery feedback repeatedly reopens the same behaviour, stop the delivery loop and return to Intent.**

## The remediation flow

1. **Stop** treating the four issues separately.
2. **Cluster** them under one capability: *Sentence production feedback*.
3. **Re-open the Capability Intent** (see [root cause](02-root-cause.md)).
4. **Define the expected user behaviour** — the five-part outcome.
5. **Update the acceptance criteria** (carried into the [Living Specification](04-updated-living-specification.md)).
6. **Reframe the next Delivery Intent** around that behaviour.
7. **Select the minimum technical implementation** that can validate it.
8. **Demo again** against the new acceptance criteria.
9. **Check whether the learner can actually improve** — the real acceptance signal.

## Capability Intent vs. Delivery Intent

Keeping the two levels distinct is what prevents the churn from restarting.

| | Content |
|---|---|
| **Capability Intent** (durable — what the learner must experience) | After submitting a sentence, the learner understands whether it is acceptable, sees the main correction and a natural corrected version, and can retry unaided. |
| **Delivery Intent** (this iteration — what we will validate) | *"Connect a correction engine and validate whether learners receive actionable feedback that enables a better second attempt."* |

The Delivery Intent serves the Capability Intent; it does not redefine it. Future iterations may swap the engine or deepen explanations — the Capability Intent stays put.

## Minimum implementation for the next loop

Enough to test the Capability Intent, no more:

- take the learner's submitted sentence;
- return: acceptable or not, the **single most important** correction, and **one** corrected natural version;
- offer a **retry**.

The correction engine is a **replaceable** implementation detail. LanguageTool is *one* possible option; an LLM or a rules service are others. The choice is made to satisfy the acceptance signal — not the other way around — and can change later without touching the Capability Intent. Selecting from proven options here is [Reference-Driven Delivery](../../03-delivery/reference-driven-delivery.md).

## Human validation

A human redefines the expected behaviour and owns that decision ([Human Validation](../../03-delivery/human-validation.md)); AI helps cluster the issues and draft the updated specification. AI does not invent the pedagogical outcome — a human sets it.

➡️ Next: [Updated Living Specification](04-updated-living-specification.md).
