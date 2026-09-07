# 06 — Learning & Living Specification

> Applied case — Compostelle. Applies [Living Specification](../../03-delivery/intent-based-development.md#living-specification) and [Knowledge First](../../03-delivery/knowledge-first.md). Only items the implementation actually validated are marked KNOWN.

> **Test evidence:** commit `bc32314` was read and exercised via a generated [test book](07-test-book.md) — **274/274 automated pass**, typecheck clean, **no defects**. Human acceptance (idiomatic quality, mobile conciseness, UI, acceptance signal) remains **HUMAN VALIDATION REQUIRED**.

## KNOWN (validated by implementation + tests)
- The Reuse result can be expressed as one structured contract (`assessment`, `correctedSentence`, `mainCorrections`, `retrySuggested`) derived purely from the existing evaluation — verified by `reuseFeedback.test.ts` and a clean type build.
- The mapping is **total**: blank input and a `needs-correction` with no issueType both yield a well-formed contract (edge tests E01/E02 in the [test book](07-test-book.md)).
- Error *nature* accuracy (spelling vs grammar vs tense vs preposition) is inherited from LanguageTool, **not** decided by the fix — so it is not covered by deterministic tests.
- A correct sentence yields "correct" with **no invented corrections** (test 1 + the idiomatic-limitation test).
- An understandable-but-incorrect sentence yields a minimally corrected version + explained corrections + retry (tests 2, 4).
- The current engine (LanguageTool) **cannot** produce an idiomatic alternative — the field stays `undefined` (locked by test).

## DECIDED (product decisions this loop)
- A score alone is insufficient; qualitative feedback is required.
- `correctedSentence` and `idiomaticAlternative` are **different concepts** and are named separately in the contract.
- Corrections prioritise pedagogical usefulness (the main change), not exhaustiveness.
- Retry is optional and offered when the sentence is not yet correct.
- The correction engine remains a **replaceable implementation detail** behind the `SentenceCorrector` port.
- No new dependency is added this iteration; the idiomatic alternative is deferred.

## ASSUMED (believed, not yet validated)
- One primary correction is enough for a first, mobile-friendly experience.
- A full pedagogical explanation per change is not required in this loop.
- Learners will use the retry affordance rather than skip ahead.

## OPEN (later iterations)
- How to produce the idiomatic alternative (generative model, cost, latency, offline behaviour).
- Whether `mainCorrections` should carry per-change `original → corrected → explanation`.
- Whether feedback depth should adapt to learner level.
- How reuse feedback should feed Recall / Memory later.

## Updated acceptance criteria

```
Given I submit a sentence
When the system evaluates it
Then I can:
- see whether it is acceptable (assessment),
- read one corrected natural version (correctedSentence),
- understand the main correction(s) (mainCorrections),
- retry with an improved sentence (optional).
```
(`idiomaticAlternative` remains a target for a future loop, pending a generative engine.)

## Traceability

```
Repeated issues (#10/#19/#21 + MVP feedback)
   → Capability gap (reuse feedback undefined)
      → Capability Intent (understand quality + how to improve)
         → Prototype (4 examples, human-validated)
            → Acceptance criteria
               → Delivery Intent (structure + surface, no new dependency)
                  → Code (reuseFeedback + UI + i18n) & tests (272 pass)
                     → Living Specification (this file)
```

Every iteration improved **both** the product (clearer Reuse result + retry) and the product knowledge base (this specification). See [Continuous Learning](../../06-learning-system/continuous-learning.md).
