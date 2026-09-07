# 01 — Symptom

> Part of the [Specification churn worked example](00-overview.md) — a fictionalized case.

Over time, four enhancement issues were opened against the sentence-submission feature. The wording below is **paraphrased**, not copied.

## The four issues

| Issue | Paraphrased request | Looks like |
|---|---|---|
| A | Show the words that were used incorrectly. | A UI enhancement |
| B | Propose a corrected version of the sentence. | A feature request |
| C | Make the score actionable — users don't know what to do with it. | A UX tweak |
| D | Reuse the learner's sentence and show an improved version. | A refinement of B |

Each issue, read on its own, looks reasonable and small. Each was picked up as a separate local improvement.

## The pattern

Read together, they are the **same complaint** in four costumes. They all target one moment in the product:

> the instant *after* a learner submits a sentence — when the learner is asking "what now?"

A score was returned, but the learner could not act on it. Every issue is a different attempt to fix "the feedback is not explicit or usable enough."

## Signal

> **Repeated issues target the same learner moment.**

Four issues, one behaviour. That is the [diagnostic signal](../../03-delivery/intent-based-development.md#diagnosing-repeated-issues): a recurring issue is a possible specification gap.

## Diagnosis

This is probably **not four backlog items**. It is **one unresolved capability definition**. Continuing to ship local fixes would be [iterating locally on an undefined capability](../../03-delivery/intent-based-development.md#failure-mode--local-iteration-on-an-undefined-capability) — cheaper motion, no convergence.

➡️ Next: [Root cause](02-root-cause.md).
