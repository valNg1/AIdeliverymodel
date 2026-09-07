# 04 — Updated Living Specification

> Part of the [Specification churn worked example](00-overview.md) — a fictionalized case. Applies [Living Specification](../../03-delivery/intent-based-development.md#living-specification) and [Knowledge First](../../03-delivery/knowledge-first.md).

The state of product knowledge **after remediation** — once the four issues were clustered into one capability and the Capability Intent was defined. This is not a final specification; it is an honest snapshot that converges instead of churning.

## State of knowledge

### KNOWN
- Learners need explicit correction feedback.
- A score alone is insufficient.
- Users need to see a corrected version.
- Feedback must support a second attempt.

### DECIDED
- Correction feedback must include the main issue.
- A corrected, natural sentence must be shown.
- The learner must be able to retry.
- The technical correction engine remains replaceable.

### ASSUMED
- One primary correction may be enough initially.
- Video and text feedback can share the same content metadata model.
- Full pedagogical explanation may not be required in the first loop.

### OPEN
- How detailed explanations should be.
- Whether multiple valid corrections should be shown.
- Whether the learner's level changes feedback depth.
- How feedback should feed Recall / Memory later.

## Updated acceptance criteria

```
Given I submit a sentence
When the system evaluates it
Then I can:
- see whether it is acceptable,
- understand the main correction,
- see one corrected natural version,
- retry with an improved sentence.
```

This replaces the implicit, engine-defined behaviour with an explicit, learner-defined one. It is testable, and it maps directly to the five-part outcome in the [Capability Intent](02-root-cause.md).

## Traceability

The whole remediation is traceable from symptom to future test:

```
Repeated Issues  (four paraphrased enhancements on one moment)
   → Capability Gap  (behaviour after submission was undefined)
      → Capability Intent  (sentence production feedback, five-part outcome)
         → Delivery Intent  (connect an engine, validate actionable feedback)
            → Spec Change  (feedback must include main issue + corrected version + retry)
               → Acceptance Criteria  (the scenario above)
                  → Future Test  (learner makes a better second attempt unaided)
```

## Both product and knowledge improve

| Improved | How, this remediation |
|---|---|
| **The product** | Feedback becomes actionable: main correction, one natural corrected sentence, retry. |
| **The product knowledge base** | Four scattered issues became one defined capability, a decision with rationale, and testable acceptance criteria — a recurring failure turned into durable knowledge ([Continuous Learning](../../06-learning-system/continuous-learning.md)). |

## The principle, demonstrated

Cheap iteration is only an advantage when it converges. When it stops converging on the same behaviour, the fix is not another loop — it is to return to Intent.

> **Do not iterate locally on an undefined capability.**
> **Intent before Build. Specification through Delivery.**

⬅️ Back to the [overview](00-overview.md).
