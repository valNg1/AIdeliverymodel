# Intent-Based Development

**Principle:** start Build from a structured Intent, not from a frozen specification — and let the specification grow through delivery.

> **Intent before Build. Specification through Delivery.**

Intent-Based Development is *not* "start coding with no specification." It is the opposite reflex: because less upfront specification is now viable, the upfront **intent** has to be sharper.

> **Less upfront specification requires better upfront intent.**

## Why

Historically, developers needed relatively complete specifications before writing code, because the surrounding costs were high:

- misunderstandings were expensive to discover and fix;
- prototypes took time to produce;
- feedback loops were long;
- documentation was maintained by hand;
- requirements had to be stabilized before implementation could safely begin.

So teams paid for a large upfront specification to reduce the risk of building the wrong thing. That trade-off was rational when the specification was cheaper than the mistake.

AI changes the economics on both sides.

## What changes with AI

1. **AI helps characterize and challenge the initial Intent.** It surfaces gaps, ambiguities, and unstated assumptions early — before they become built-in mistakes.
2. **AI accelerates the first prototype / thin slice dramatically.** A working slice, not a document, becomes the fastest way to test understanding.
3. **Specifications can be documented and maintained continuously** as development progresses, instead of being written once and left to rot.
4. **Demo feedback can be turned into updated specifications, acceptance criteria, and decisions** with far less manual effort.
5. **AI reduces the cost of uncertainty** by shortening the loop between intent, implementation, demo, feedback, and correction.

The key difference versus traditional Agile is **not** that feedback updates specs — good Agile already did that. The difference is that **AI makes continuous specification economically viable** by automating much of the effort needed to capture, structure, and maintain product knowledge. What Agile aspired to and rarely sustained — living documentation — becomes affordable.

## What Intent means

The initial Intent is a **Minimum Viable Specification**, not a vague idea. It is small, but it is explicit. At minimum it defines:

| Element | Question it answers |
|---|---|
| **Problem** | What problem are we solving, and what happens if we do nothing? |
| **Users** | Who is this for, and in what role? |
| **Expected Outcome** | What changes for those users when this works? |
| **Scope / Out of Scope** | What is in, and — just as important — what is deliberately out? |
| **Constraints** | What technical, data, security, or business limits are known? |
| **Acceptance Signal** | How will we recognize that a slice is good enough? |
| **Decision Owner** | Which named human arbitrates and decides? |

The Intent is the seed of the [Living Specification](#living-specification), not a throwaway. Everything the specification later becomes should trace back to it.

## Two levels of Intent

Not all Intent is the same size. Confusing the two levels is the root of the [failure mode below](#failure-mode--local-iteration-on-an-undefined-capability). Keep them explicit and separate.

| | **Product / Capability Intent** | **Delivery Intent** |
|---|---|---|
| **Purpose** | Define the *durable* expected user behaviour for a capability. | Define what the *current iteration* is trying to learn, validate, or deliver. |
| **Lifespan** | Stable across many iterations. | One iteration. |
| **Contains** | Why · Who · Expected outcome · Expected behaviour · Critical constraints · Success / acceptance signal. | The slice, the question it answers, and how success will be judged this loop. |
| **Example** | *Sentence production feedback:* after submitting a sentence, the learner understands whether it is acceptable, what to change, sees a corrected version, and can retry. | *"For this iteration, connect a correction engine and validate whether the returned feedback is usable by learners."* |

The relationship is a hierarchy, not a sequence of equals:

```
Product / Capability Intent   (durable — the behaviour we owe the user)
        │
        ▼
   Delivery Intent            (one iteration — what we validate now)
        │
        ▼
      Build ─▶ Demo ─▶ Feedback ─▶ Living Specification ─▶ Next Delivery Intent
                                          ▲                        │
                                          └────────────────────────┘
```

> **Delivery Intent must never replace Product / Capability Intent.** A stream of Delivery Intents that has lost sight of a stable Capability Intent is exactly how [specification churn](#failure-mode--local-iteration-on-an-undefined-capability) begins.

## Intent Readiness Gate

Before development starts, an **Intent Readiness Gate** confirms the Intent is ready to build against. It is a lightweight human check, not a phase. The gate passes when:

- [ ] the **problem** is understood;
- [ ] **users** are identified;
- [ ] the **expected outcome** is defined;
- [ ] **scope boundaries** are clear (in *and* out);
- [ ] **critical constraints** are known;
- [ ] a **decision owner** is identified;
- [ ] at least one **concrete acceptance scenario** can be expressed.

An acceptance scenario is concrete when it reads as behavior, for example:

```
Given I am a Service Owner
When I open the dashboard
Then I can identify the items requiring remediation.
```

If the gate cannot pass, the answer is not "specify everything." It is to sharpen the Intent until at least one acceptance scenario is expressible — then start. Missing detail beyond that is resolved *through* delivery, not before it.

## Prototype before specification

Once a problem is exposed, the fastest way to sharpen intent is often not to write more specification — it is to make the intended behaviour **tangible**.

> **After a problem is exposed, AI should rapidly make the intended behaviour tangible through a prototype. Human feedback on that prototype is then converted into refined intent, acceptance criteria, and implementation guidance.**

The prototype is a throwaway artifact whose only job is to give humans something concrete to react to. It sits between problem exposure and refined intent:

```
Problem exposed → AI prototype (tangible behaviour) → Human validation → Refined Intent → Acceptance criteria → Build
```

This does not weaken *Intent before Build*. The prototype **serves** the Intent: it is how the Capability Intent gets sharp enough to build against, faster than prose could. A worked case: [Compostelle — Reuse feedback](../troubleshooting/compostelle-reuse-feedback/01-ai-prototype.md).

## Delivery loop

Once the Intent is ready, delivery runs in short loops. Each loop improves **both** the product and the product knowledge base.

```
   Intent
     │
     ▼
  Thin Slice ──▶ Demo ──▶ Feedback ──▶ Knowledge Capture ──▶ Specification Update ──▶ Validation
     ▲                                                                                     │
     └─────────────────────────────── Next Iteration ◀────────────────────────────────────┘
```

| Step | What happens |
|---|---|
| **Thin Slice** | Build the smallest working slice that tests the current understanding. |
| **Demo** | Show the slice to real users / the decision owner. |
| **Feedback** | Capture reactions, gaps, and new constraints. |
| **Knowledge Capture** | Turn feedback into structured knowledge — rules, criteria, decisions. |
| **Specification Update** | Fold that knowledge into the Living Specification. |
| **Validation** | A named human validates the slice and the updated spec (see [human-validation](human-validation.md)). |
| **Next Iteration** | Refine the Intent's open edges and slice again. |

The loop is the same reflex as [Continuous Design](continuous-design.md), applied to the specification itself: the spec is never "done," it tracks the product.

### The Return-to-Intent branch

Not all feedback is equal. Most feedback is *normal learning* — refine the spec and continue. But some feedback keeps reopening the **same behaviour**: that is not progress, it is a signal that the Capability Intent underneath is undefined. The loop must branch on it.

```
        Product / Capability Intent
                    │
             Readiness Gate
                    │
             Delivery Intent
                    │
                  Build
                    │
                  Demo
                    │
                Feedback
                /        \
          normal          repeated ambiguity
         learning         (same behaviour reopens)
            │                     │
     update Living         RETURN TO INTENT
      Specification        (stop local iteration,
            │               consolidate issues,
            │               redefine behaviour,
            │               update Living Spec)
             \                   /
              ▼                 ▼
                  next loop
```

- **Normal learning** → capture knowledge, update the [Living Specification](#living-specification), continue to the next iteration.
- **Repeated ambiguity** → **stop local iteration and return to the Capability Intent**: consolidate the recurring issues, redefine the expected behaviour, update the Living Specification, then resume delivery with a fresh Delivery Intent.

The mechanics of when to take the branch are in [Failure mode](#failure-mode--local-iteration-on-an-undefined-capability).

## Failure mode — Local iteration on an undefined capability

Fast local iteration has a specific way of going wrong.

- AI makes iterations cheaper and faster.
- But cheaper iteration is not only cheaper *good* iteration.

> **AI makes iteration cheaper, therefore it also makes bad iteration cheaper.**

When a capability's expected behaviour was never defined, a team can keep shipping small enhancements that each look reasonable, while the underlying user behaviour stays undefined. The same complaint returns in new wording. Each fix treats a symptom; none closes the gap. The result is **specification churn**: motion without convergence.

Repeated issues on the *same behaviour* are therefore not a backlog — they are a signal of a specification gap at the **Capability Intent** level.

**Guardrail**

> **Do not iterate locally on an undefined capability.**

**Remediation rule**

> **When delivery feedback repeatedly reopens the same behaviour, stop the delivery loop and return to Intent.**

This is the [Return-to-Intent branch](#the-return-to-intent-branch): the fix is not another local iteration, it is to raise the question one level, to the Capability Intent.

### Diagnosing repeated issues

A practical signal, not a hard rule:

> **Repeated issue = possible specification gap.**

When roughly **2–3 issues** keep concerning the same user behaviour (the exact count is a prompt to look, not a threshold to obey):

1. stop treating them independently;
2. cluster them;
3. identify the underlying capability;
4. revisit the **Capability Intent** and clarify the expected behaviour;
5. update the [Living Specification](#living-specification) and its acceptance criteria;
6. only then create the *minimum* implementation work needed.

Worked through end to end: [Specification churn in a language-learning product](../examples/compostelle-specification-churn/00-overview.md).

## Living Specification

The specification becomes a **Living Specification** that evolves alongside the product. It is maintained continuously, not reconstructed at the end. Over time the repository progressively captures:

- business intent;
- living specifications;
- business rules;
- acceptance criteria;
- architecture decisions;
- test evidence;
- operational knowledge;
- decision rationale.

This is what makes the repository the **durable memory of the product** — the same asset [Knowledge First](knowledge-first.md) calls for, produced as a by-product of delivery rather than as separate documentation work.

Two rules keep a Living Specification honest:

- **Tests and acceptance criteria progressively become part of the specification.** A passing acceptance scenario is specification, not just a test.
- **Significant changes are traceable.** A change to a rule, a scope boundary, or a decision is recorded with its rationale (see the [decision log](../templates/decision-log.md)).

## Role of AI

AI is what makes continuous specification affordable. In this practice, AI:

- helps **characterize and challenge** the Intent, exposing gaps before they are built;
- **accelerates the thin slice** so understanding is tested in working software, fast;
- **drafts and maintains** the Living Specification — structuring feedback into rules, criteria, and decisions;
- keeps acceptance criteria, tests, and documentation **in sync** as the product changes.

## Role of humans

Humans own the Intent and every decision the specification records. In this practice, humans:

- author and sharpen the **Intent**;
- pass or hold the **Intent Readiness Gate**;
- make the **business decisions** the specification depends on;
- **validate** each slice and each specification update ([human-validation](human-validation.md));
- **arbitrate** conflicts and accept ownership as the **Decision Owner**.

> **AI produces the analyses. Humans build consensus and make decisions.**

## Guardrails

- **Intent must be structured and explicit.** A vague idea is not an Intent; it fails the readiness gate.
- **Do not iterate locally on an undefined capability.** If the [Capability Intent](#two-levels-of-intent) is unclear, no amount of local iteration will converge — define the behaviour first.
- **When feedback repeatedly reopens the same behaviour, return to Intent.** Recurring issues are a specification gap, not a backlog (see [Failure mode](#failure-mode--local-iteration-on-an-undefined-capability)).
- **AI must not invent missing business decisions.** When a decision is missing, AI flags it for the Decision Owner — it does not guess and proceed.
- **Humans remain responsible for validation and arbitration.** The loop never closes on an AI-only sign-off.
- **Significant changes must be traceable.** Changes to rules, scope, or decisions are recorded with rationale.
- **Tests and acceptance criteria progressively become part of the Living Specification.** They are treated as specification, kept current, and owned.
- **The repository is the durable memory of the product.** Knowledge lives in the repository, close to the work — not in people's heads or lost chat threads.

## Relationship with existing practices

Intent-Based Development is the **delivery-time reflex** that ties the existing delivery practices together. It does not replace them; it sequences them into a loop.

| Practice | Relationship |
|---|---|
| [Continuous Design](continuous-design.md) | Continuous Design keeps the *design* adapting; Intent-Based Development keeps the *specification* adapting in the same spirit. The delivery loop is Continuous Design applied to the spec. |
| [Knowledge First](knowledge-first.md) | The Living Specification is how Knowledge First happens during Build — knowledge is captured as a by-product of each iteration, making the repository the product's durable memory. |
| [Reference-Driven Delivery](reference-driven-delivery.md) | A ready Intent plus proven references is what lets AI produce a strong thin slice fast; new proven slices feed back as references. |
| [Human Validation](human-validation.md) | Validation is the gate inside every loop — humans validate both the slice and the updated specification before the next iteration. |
| [Continuous Learning](../06-learning-system/continuous-learning.md) | Each iteration's captured knowledge and acceptance evidence feed the learning system, improving the next Intent and the next delivery. |

## Practical example

**Intent (Minimum Viable Specification)**

- **Problem:** Service Owners cannot tell, at a glance, which requests need remediation; they scan several screens manually.
- **Users:** Service Owners.
- **Expected Outcome:** a Service Owner sees, in one place, the items requiring remediation.
- **Scope:** a single dashboard view listing items needing remediation. **Out of scope:** performing the remediation, historical trend analysis.
- **Constraints:** read-only access to the source; no personal data displayed.
- **Acceptance Signal:** a Service Owner can identify items requiring remediation without leaving the dashboard.
- **Decision Owner:** named product owner.

**Intent Readiness Gate:** passes — problem, users, outcome, scope, constraints, and owner are defined, and one acceptance scenario is expressible:

```
Given I am a Service Owner
When I open the dashboard
Then I can identify the items requiring remediation.
```

**Loop 1** — Thin slice: a dashboard listing items flagged for remediation from one source. Demo to a Service Owner. Feedback: "remediation" needs a clear rule; two states are actually needed. Knowledge captured: the remediation rule and the two states. Specification updated: the rule and states become acceptance criteria. Human validates the slice and the spec update.

**Loop 2** — Thin slice: apply the agreed remediation rule and show both states. Demo. Feedback: a filter by team is needed. The Intent's scope edge is sharpened (filter added, still no remediation action). Specification updated; validated; iterate.

At each loop the product improves **and** the Living Specification grows — the repository now holds the business rule, the acceptance scenarios, the decisions, and their rationale.

## Related

- [Continuous Design](continuous-design.md) · [Knowledge First](knowledge-first.md) · [Reference-Driven Delivery](reference-driven-delivery.md) · [Human Validation](human-validation.md) · [Continuous Learning](../06-learning-system/continuous-learning.md)
- [Lifecycle](../01-operating-model/lifecycle.md) — where Build and Validate sit.
- [Decision log](../templates/decision-log.md) — where traceable decisions are recorded.
- Applied case: [Compostelle — Reuse feedback](../troubleshooting/compostelle-reuse-feedback/00-problem.md) — this practice on a real product fix.

*First version — to be expanded with a Living Specification format and an Intent template.*
