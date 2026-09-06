# 05 — Living Specification

> Part of the [Excellence Judo LMS worked example](00-overview.md) — a fictionalized case. Applies [Intent-Based Development](../../03-delivery/intent-based-development.md#living-specification) and [Knowledge First](../../03-delivery/knowledge-first.md).

The state of product knowledge **after one delivery loop**. This is not a final product specification — it is an honest snapshot that grows with the product. It maps to the canvas status vocabulary (`Open` = Unknown / open question; `Decided` = Decision Required now resolved).

## State of knowledge

### KNOWN
- Practitioners need structured learning paths.
- Content requires human validation.
- Learner level matters.

### DECIDED
- Learner level is captured.
- Pedagogical objective becomes a navigation dimension.
- Content ownership remains with France Judo.
- First release remains read-only for learners.

### ASSUMED
- Coaches may require additional navigation dimensions.
- Video and text can initially share the same content metadata model.

### OPEN
- Exact taxonomy of pedagogical objectives.
- Detailed authoring workflow.
- Certification requirements.
- Analytics needs.
- Content versioning policy.

## Updated acceptance criteria

The loop changed the acceptance criteria — new knowledge is written back as testable behavior:

```
Given I am a practitioner
When I select my level and pedagogical objective
Then I can see relevant validated learning content.
```

(The loop-1 scenario, level-only, still holds; this extends it. Objective-based navigation is now specified, to be built in the next iteration.)

## Traceability

Every significant change is traceable from feedback to future test:

```
Feedback  ("navigate by pedagogical objective, not only grade")
   → Decision  (paths support both level and objective)
      → Spec change  (objective added as a navigation dimension)
         → Acceptance criteria  (updated scenario above)
            → Future test  (objective-based navigation returns validated content)
```

This is what makes the repository the **durable memory of the product**: the rule, the decision, the rationale, and the criteria live together, not in someone's memory (see [Knowledge First](../../03-delivery/knowledge-first.md)).

## Every iteration improves two things

| Improved | How, this loop |
|---|---|
| **The product** | A working slice: level selector, one path, one validated content card, minimal navigation. |
| **The product knowledge base** | A resolved navigation question, a recorded decision with rationale, updated acceptance criteria, and a sharper next open question. |

That second column is what [Continuous Learning](../../06-learning-system/continuous-learning.md) compounds across iterations, and what distinguishes this practice from "just build a prototype."

## Where this connects in the framework

- [Intent-Based Development](../../03-delivery/intent-based-development.md) — the practice this whole example applies.
- [Continuous Design](../../03-delivery/continuous-design.md) — design and spec keep adapting.
- [Human Validation](../../03-delivery/human-validation.md) — a human owns every decision above.
- [Reference-Driven Delivery](../../03-delivery/reference-driven-delivery.md) — reused auth/viewer patterns; new proven slices can become references.

## The principle, demonstrated

The Intent was small but explicit. The specification grew through delivery. Uncertainty was not eliminated upfront — it was resolved cheaply, one loop at a time.

> **Intent before Build. Specification through Delivery.**

⬅️ Back to the [overview](00-overview.md).
