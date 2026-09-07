# 02 — Root Cause

> Part of the [Specification churn worked example](00-overview.md) — a fictionalized case.

The four issues share one root cause: the **Capability Intent** for what happens after a learner submits a sentence was never defined. The team had a *score*; it had never agreed what the learner should *obtain*.

## The missing Capability Intent

The durable behaviour the product owes the user (see [Product / Capability Intent](../../03-delivery/intent-based-development.md#two-levels-of-intent)):

| Element | Content |
|---|---|
| **Capability** | Sentence production feedback |
| **User** | Language learner |
| **User intent** | I want to try producing a sentence and understand how to improve it. |
| **Expected product outcome** | After submission, the learner should: 1. understand whether the sentence is acceptable; 2. identify the main problem; 3. see what should change; 4. see a corrected, natural sentence; 5. be able to retry. |
| **Acceptance signal** | The learner can make a better second attempt **without external help**. |

With this stated, the four issues stop being separate: A, B, C, and D are each a fragment of this one outcome.

## The real question

The product question was never the one being debated:

| Debated (technical) | Actual (capability) |
|---|---|
| "Should we use LanguageTool?" | — |
| "Should we display a corrected sentence?" | — |
| | **"What should the learner obtain after submitting a sentence?"** |

Choosing a correction engine — LanguageTool, an LLM, a rules service — is a **technical decision**, downstream of the Capability Intent. Made first, it silently *becomes* the specification: the product does whatever the engine happens to return, and the learner outcome is left to chance. That is how the gap stayed hidden.

> The engine is an implementation option. The learner outcome is the intent. Deciding the engine does not decide the intent.

➡️ Next: [Remediation](03-remediation.md).
