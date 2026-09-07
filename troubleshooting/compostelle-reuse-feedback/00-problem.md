# 00 — Problem

> Applied case — real post-MVP fix on the Compostelle language-learning app, delivered with the AI Delivery Model. See the [troubleshooting index](../README.md).

## The observed problem

Compostelle teaches languages through reading, understanding, recall, and **reuse** (the learner writes a sentence using a learned expression). After the MVP, learner feedback on the Reuse step was: the result tells you *whether* you passed, but not *how to get better*.

Concretely, after submitting a sentence a learner could not reliably tell:

- whether the sentence is actually natural,
- whether the grammar could be improved,
- what the main mistake is,
- how a native speaker would say it,
- what to try next.

## The user problem

> **A score alone does not help the learner improve their language production.**

## One capability, several symptoms

Multiple issues had been opened over time around the *same learner moment* — the instant after submission (#10, #19, #21, and related). Each looked like a separate enhancement; together they are one signal: the **reuse-feedback capability** had never been fully specified. This is the [specification-churn pattern](../../03-delivery/intent-based-development.md#failure-mode--local-iteration-on-an-undefined-capability) the framework warns about.

We deliberately **do not** jump to a technical solution here. The next step is to make the intended behaviour tangible with a prototype, *before* touching production code — [01-ai-prototype](01-ai-prototype.md).
