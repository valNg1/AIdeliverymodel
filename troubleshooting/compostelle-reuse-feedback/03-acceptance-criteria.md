# 03 — Acceptance Criteria

> Applied case — Compostelle. Turns the validated [prototype](01-ai-prototype.md) into testable criteria.

## Minimum expected output

| Field | Required | Notes |
|---|---|---|
| `score` | optional | Secondary information, never the whole answer. |
| `assessment` | **required** | Clear verdict the learner understands. |
| `correctedSentence` | **required** | Minimal correction preserving intent. |
| `mainCorrections` | **required** | The most important change(s), explained. |
| `idiomaticAlternative` | target | Native-like reformulation; see engine limit in [gap analysis](04-gap-analysis.md). |
| `retrySuggested` | optional | Invite a second attempt when useful. |

## Behavioural criteria

**If the original sentence is already correct**
- say clearly that it is correct / good;
- do **not** invent errors;
- `correctedSentence` may equal the original;
- `idiomaticAlternative` may still propose a more natural formulation if useful.

**If the sentence contains errors**
- `correctedSentence` must preserve the intended meaning;
- `mainCorrections` must explain the most important changes;
- `idiomaticAlternative` must not silently replace the learner's intended meaning.

Explanations stay concise and mobile-appropriate.

## As scenarios

```
Given I submit a correct sentence
When the system evaluates it
Then it confirms the sentence is correct
And it does not invent corrections.

Given I submit an understandable but incorrect sentence
When the system evaluates it
Then I see a minimally corrected version that keeps my meaning
And I understand the main correction
And I can try again.
```

➡️ Next: [04-gap-analysis](04-gap-analysis.md).
