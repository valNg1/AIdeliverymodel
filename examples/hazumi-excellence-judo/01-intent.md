# 01 — Intent

> Part of the [Excellence Judo LMS worked example](00-overview.md) — a fictionalized case. Applies [Intent-Based Development](../../03-delivery/intent-based-development.md).

The Intent is the **Minimum Viable Specification** needed to start the first delivery loop. It is small but explicit — not a detailed spec, and not a vague idea.

> **Intent before Build. Specification through Delivery.**

## The Intent

| Element | Content |
|---|---|
| **Problem** | Excellence Judo knowledge exists but is fragmented, difficult to maintain, and difficult for practitioners to consume as a coherent learning path. |
| **Users** | Practitioners; coaches; pedagogical content owners; France Judo program administrators. |
| **Expected Outcome** | A practitioner can access a structured learning journey based on curated Excellence Judo content. |
| **Scope** | Navigating a structured learning path and consuming **one** validated pedagogical content item. |
| **Out of Scope** | Full LMS administration; certification; advanced analytics; payment; social/community features; full content migration; AI-generated coaching; complete grade curriculum. |
| **Constraints** | Pedagogical content stays human-validated; France Judo remains content owner; access rights must be managed; source content may exist in multiple formats; AI must not invent official pedagogical rules; the first increment must be demonstrable quickly. |
| **Acceptance Signal** | A practitioner can select a learner level, access a learning path, and open one validated pedagogical content item. |
| **Decision Owner** | Product Owner representing France Judo. |

## How AI helped characterize the Intent

Consistent with [Intent-Based Development](../../03-delivery/intent-based-development.md#role-of-ai), AI was used to *challenge* the Intent, not to write it:

- It surfaced the ambiguity in "structured learning path" — structured *by what*? (level, objective, discipline?). Flagged as an open question, not resolved by guessing.
- It pushed the scope down to **one** content item, exposing that "consume content" hid several format assumptions.
- It flagged a missing decision: is the first release read-only for learners, or does it include authoring? (Left for the Decision Owner.)

The human Decision Owner kept every decision. AI narrowed the uncertainty; it did not remove it.

## Intent Readiness Gate

A lightweight human check that the Intent is ready to build against (see [the gate](../../03-delivery/intent-based-development.md#intent-readiness-gate)):

| Check | Status |
|---|---|
| Problem understood | ✓ |
| Users identified | ✓ |
| Expected outcome defined | ✓ |
| Scope boundary defined | ✓ |
| Critical constraints known | ✓ |
| Decision owner identified | ✓ |
| At least one acceptance scenario defined | ✓ |

**Acceptance scenario**

```
Given I am a practitioner
When I select my learner level
Then I can access a structured learning path
And open one validated pedagogical content item.
```

**Gate result: PASS.** The Intent is not a detailed specification — it is the minimum needed to start delivering. Everything left ambiguous (for example, whether level is the only navigation dimension) is resolved *through* the delivery loop, not before it.

➡️ Next: [AI-native Discovery](02-ai-native-discovery.md).
