# 04 — Gap Analysis

> Applied case — Compostelle. Verified against the real codebase (not assumed).

## Real current flow (traced)

```
Reuse UI (LearningSession.tsx)
   → textarea answer
   → evaluateUseAsync(answer, use, language, corrector)         [domain/learning.ts]
   → corrector = LanguageTool /v2/check (public API by default) [persistence/languageToolCorrector.ts]
      → deterministic surface corrector as fallback on network error
   → UseEvaluation: "expression-missing" | "needs-correction" | "valid"
   → UI renders per state (diff highlight + issue nature + sample)
```

## Verified facts

| Question | Finding |
|---|---|
| Where is the "score" produced? | The `reuse` value is a **progression signal** (fraction of key expressions reused), consumed by the model — **not** shown on the Reuse result screen. The visible result is qualitative, not a percentage. |
| Is qualitative feedback already returned? | **Yes.** `needs-correction` returns a `correction`, a word-level `diff`, and `issueTypes` (error natures). This was added by earlier work (#10 / #19 / #21). |
| Does the prompt only ask for a score? | **No LLM prompt exists.** The engine is LanguageTool (grammar rules) + a deterministic fallback. |
| Does parsing drop fields? | No — the adapter maps matches → `{ correct, correction, issueTypes }` faithfully. |
| Does the UI drop fields? | Partly — it showed the diff and issue nature, but **no single clear assessment line, no plain corrected sentence, and no retry.** |
| Fallback / error handling | On network/rate-limit error, falls back to the deterministic surface corrector and an honest "expression only" message (#19). |
| Model used | **None (no LLM).** LanguageTool public API. |
| Tests covering Reuse | `useEvaluation.test.ts`, `learning.test.ts`, `languageToolCorrector.test.ts` — solid on the 3-state contract. |

## Gaps vs. the acceptance criteria

| Criterion | Status | Verified gap |
|---|---|---|
| `assessment` | partial | Per-state messages existed, but no single clear verdict line. |
| `correctedSentence` | present | Existed as a colored diff; **not** as a plain readable sentence. |
| `mainCorrections` | partial | Issue *natures* existed; surfaced, but not as a structured list. |
| `idiomaticAlternative` | **missing** | **Not producible by the current engine** (see below). |
| `retrySuggested` | **missing** | No retry affordance. |

## The one genuine technical limitation

LanguageTool applies grammar-rule replacements. It **cannot** rewrite an already-correct sentence into a more natural, native-like one — that is generation, not correction. So `idiomaticAlternative` **cannot** be produced by the current engine.

Per the framework's constraint (*document a genuine limitation before introducing a new dependency*): producing the idiomatic alternative requires a **generative model (LLM)**, which the project does not currently have. We therefore **do not** add that dependency in this iteration. Everything else in the acceptance criteria is achievable now, purely from the existing LanguageTool output.

**Decision:** implement `assessment`, `correctedSentence`, `mainCorrections`, and `retry` now (no new dependency); keep `idiomaticAlternative` as a documented seam for a later iteration.

➡️ Next: [05-delivery-loop](05-delivery-loop.md).
