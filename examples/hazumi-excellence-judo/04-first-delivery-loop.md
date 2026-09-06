# 04 — First Delivery Loop

> Part of the [Excellence Judo LMS worked example](00-overview.md) — a fictionalized case. Applies [Intent-Based Development](../../03-delivery/intent-based-development.md#delivery-loop).

This is the practical heart of the example: one loop of Intent-Based Development. Implementation detail is kept deliberately light — the purpose is to show the reflex, not to design the software.

## The thin slice

> A practitioner selects their learner level, accesses a structured learning path, and opens one validated pedagogical content item.

## The loop

```
Intent → Thin Slice → Build → Demo → Feedback → Knowledge Capture → Specification Update → Human Validation → Next Iteration
```

## What the team builds first

The smallest increment that tests the acceptance scenario end to end:

- a **learner level selector**;
- a **simple learning path** (one path);
- **one content category**;
- **one validated technical card** (the single content item);
- **minimal navigation** between path and card.

Everything else from the [Intent's Out of Scope](01-intent.md) stays out. Auth and the content viewer are **reused**, not built (decision D4).

## Demo

The increment is demoed to a practitioner and a content owner, running the acceptance scenario:

```
Given I am a practitioner
When I select my learner level
Then I can access a structured learning path
And open one validated pedagogical content item.
```

The scenario passes. But the demo is not a sign-off event — it is a **specification instrument**. The interesting output is the feedback.

## Feedback (fictional demo session)

> "Content should not be organized only by grade/level. Users also need to navigate by **pedagogical objective**."

This is new product knowledge that no amount of upfront analysis had settled — it was open question **Q1**, and the working prototype answered it.

## How knowledge appears

| | |
|---|---|
| **Before demo (assumption)** | Learning content is primarily structured by grade/level. |
| **After demo (learning)** | Grade alone is insufficient. Pedagogical objective must become a first-class navigation dimension. |
| **Decision** | Future learning paths must support **both** learner level **and** pedagogical objective. |

## Knowledge capture → specification update

The feedback is not left in a meeting note. It becomes structured knowledge and updates the [Living Specification](05-living-specification.md):

- a decision is recorded, with rationale (see the [decision log](../../templates/decision-log.md));
- "pedagogical objective" is added as a navigation dimension in the spec;
- the acceptance criteria are updated (shown in [05](05-living-specification.md));
- Q1 moves from *open* to *decided*; Q2 (taxonomy of objectives) becomes the next open question.

## Human validation

A named human validates both the slice and the specification update before the next iteration ([Human Validation](../../03-delivery/human-validation.md)). AI drafted the structured knowledge; the human confirmed it and owns the decision. AI did not invent the pedagogical rule — it captured a human one.

## Why this matters

The prototype was used as a **specification instrument**: cheaper to build a thin slice and learn from it than to argue the navigation model in the abstract. This is the core claim of the practice:

> **AI does not eliminate uncertainty. AI reduces the cost of resolving uncertainty.**

Both were true here: the loop did not remove the question of how to structure content — it made answering it fast and concrete. This is [Continuous Design](../../03-delivery/continuous-design.md) applied to the specification itself.

## Next iteration (not built here)

The loop would repeat: sharpen the objective taxonomy (Q2), add objective-based navigation, demo again. This example **stops after the first loop** by design.

➡️ Next: [Living Specification](05-living-specification.md).
