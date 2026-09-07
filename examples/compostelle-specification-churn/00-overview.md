# Specification churn in a language-learning product

> **Pedagogical example — fictionalized case.**
> This example is inspired by a language-learning product and is used solely to demonstrate the AI Delivery Model. It does not describe an actual production incident.

A worked example of a specific [Intent-Based Development](../../03-delivery/intent-based-development.md) failure mode: **local iteration on an undefined capability**, and the [Return-to-Intent](../../03-delivery/intent-based-development.md#the-return-to-intent-branch) remediation that resolves it.

## The situation

A learner practices producing sentences in a target language. After submitting a sentence, the product returns a **score** and some correction feedback.

Over several iterations, a stream of enhancement issues is opened — because learners still cannot tell:

- what was wrong,
- what to change,
- what a better sentence looks like.

Each issue was handled as a separate local improvement. The complaint kept coming back in new wording. This is **specification churn**: motion without convergence.

## What this example demonstrates

That the churn was **not** four independent feature requests. It was one symptom: an **undefined Capability Intent**. The remedy is not another local fix — it is to stop, cluster the issues, and return to Intent.

> **AI makes iteration cheaper, therefore it also makes bad iteration cheaper.**

## Reading path

| # | Document | What it shows |
|---|---|---|
| 00 | This overview | The situation and the failure mode |
| 01 | [Symptom](01-symptom.md) | Four recurring issues on the same behaviour |
| 02 | [Root cause](02-root-cause.md) | The missing Capability Intent |
| 03 | [Remediation](03-remediation.md) | Return-to-Intent, then the next Delivery Intent |
| 04 | [Updated Living Specification](04-updated-living-specification.md) | The state of knowledge after remediation |

## Framework practices demonstrated

- [Intent-Based Development](../../03-delivery/intent-based-development.md) — the failure mode and the Return-to-Intent branch.
- [Continuous Design](../../03-delivery/continuous-design.md) — the specification keeps adapting, but must converge.
- [Knowledge First](../../03-delivery/knowledge-first.md) — clustered issues become durable product knowledge.
- [Human Validation](../../03-delivery/human-validation.md) — a human redefines the behaviour and owns the decision.
- [Continuous Learning](../../06-learning-system/continuous-learning.md) — the recurring signal is fed back as a lesson.
