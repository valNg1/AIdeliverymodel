# 01 — AI Prototype (before specification)

> Applied case — Compostelle. Demonstrates **Prototype before specification**: use AI to make the intended behaviour tangible before committing to implementation. See [Intent-Based Development](../../03-delivery/intent-based-development.md#prototype-before-specification).

Before changing any production code, AI generated a concrete prototype of the target Reuse result — a shape to react to, not an implementation.

## Target result shape

```
Original sentence:   <learner sentence>
Assessment:          "Good attempt — your sentence is understandable."
Corrected version:   <minimal correction preserving learner intent>
Main improvement:    <one or more short explanations>
More idiomatic:      <a natural, native-like alternative>
Score:               <optional / secondary>
Try again:           <optional action>
```

**Key distinction** (this is the whole point of the capability):

| Field | Meaning |
|---|---|
| `correctedSentence` | Minimal correction of *what the learner attempted to say*. |
| `idiomaticAlternative` | How a native speaker would naturally express the *same meaning*. |

They are different concepts. A sentence can be grammatically corrected yet still not idiomatic.

## Four prototype examples (Italian)

**1 — Fully correct**
```
Original:    Prendo sempre l'ultima corsa del tram.
Assessment:  Good — your sentence is correct.
Corrected:   Prendo sempre l'ultima corsa del tram.   (unchanged)
Main:        —
Idiomatic:   (optional) Prendo sempre l'ultimo tram.
Try again:   no
```

**2 — Understandable but grammatically incorrect**
```
Original:    io prendo l'ultima corsa
Assessment:  Good attempt — your sentence is understandable.
Corrected:   Prendo l'ultima corsa del tram.
Main:        drop the redundant subject "io"; complete the phrase.
Idiomatic:   Prendo l'ultimo tram.
Try again:   yes
```

**3 — Grammatically correct but not idiomatic**
```
Original:    Prendo la corsa finale del tram.
Assessment:  Good — your sentence is correct.
Corrected:   Prendo la corsa finale del tram.   (unchanged)
Main:        —
Idiomatic:   Prendo l'ultima corsa del tram.  ("finale" is understood but not what a native says)
Try again:   optional
```

**4 — Several errors**
```
Original:    ieri io andare al mercato e comprato pane
Assessment:  Good attempt — your sentence is understandable.
Corrected:   Ieri sono andato al mercato e ho comprato del pane.
Main:        past tense (andare → sono andato); auxiliary for "comprato"; partitive "del".
Idiomatic:   Ieri sono andato al mercato a comprare il pane.
Try again:   yes
```

The prototype is **not** the implementation. Its job is to align on intended behaviour cheaply, so the human can validate a direction before code is written.

## Human validation gate

The human-approved direction from this prototype: the Reuse result should provide **score, assessment, correctedSentence, mainCorrections, idiomaticAlternative**, with **retry optional**. No additional major UX concepts are introduced unless the codebase requires them.

➡️ Next: [02-capability-intent](02-capability-intent.md).
