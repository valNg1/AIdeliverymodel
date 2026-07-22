# Inputs and Workflow

This page defines the shared corpus that feeds AI-native Discovery and the workflow that turns it into a consolidated [AI Impact Canvas](ai-impact-canvas.md).

## The shared corpus

Every specialized role analyzes the **same** inputs. Consistency of input is what makes the analyses comparable and the consolidation meaningful.

| Input | What it is | Notes |
|---|---|---|
| Workshop transcript | The recorded/transcribed business conversation | The richest source of intent and nuance |
| Business documents | Existing specs, process docs, reports, policies | Provide context and constraints |
| Notes | Facilitator and participant notes | Capture what the transcript misses |
| Diagrams and schemas | Process maps, data models, system sketches | Ground the analysis in current reality |
| Known constraints | Regulatory, technical, budget, timeline | Prevent unrealistic options |

### Corpus hygiene

- **Remove confidential or identifying details** before processing when the corpus will be handled outside a controlled environment. Use generic references.
- **Label sources.** Every claim in the canvas should trace to a corpus item (the *Evidence* column).
- **Note gaps.** If an input is missing, record it as an *Unknown* rather than guessing.

## The workflow

```
Corpus
  │
  ├─▶ Business Analyst  ─┐
  ├─▶ Data Architect    │
  ├─▶ Solution Architect│──▶ Orchestrator ──▶ Consolidated ──▶ Human ──▶ Decisions
  ├─▶ Security Reviewer  │      (merge +        AI Impact      arbitration   + open
  ├─▶ Product Ops Lead   │       flag conflicts)  Canvas                     questions
  └─▶ Delivery Lead     ─┘
```

**Step 1 — Distribute the corpus.**
Give the identical corpus to each specialized role. See [agent-model.md](agent-model.md) and the [prompts](../prompts/).

**Step 2 — Parallel analysis.**
Each role fills its part of the canvas using Known / Assumed / Unknown / Decision Required, with Owner, Evidence, Build Impact, and Run Impact.

**Step 3 — Consolidation.**
The [orchestrator](../prompts/orchestrator.md) merges the analyses into a single canvas and surfaces:

- conflicts (roles disagree);
- gaps (no role covered something);
- duplicated or unstated assumptions;
- items marked *Decision Required*.

**Step 4 — Human arbitration.**
The team resolves conflicts, confirms or rejects assumptions, assigns owners, and records outcomes in the [decision log](../templates/decision-log.md).

**Step 5 — Outputs.**
A consolidated AI Impact Canvas plus a list of open questions and decisions. See [discovery-deliverables.md](discovery-deliverables.md).

## Quality gates

Before Discovery is considered complete:

- Every canvas element has a status and an owner.
- Every major choice has a filled **Run Impact**.
- Conflicts are resolved or explicitly deferred with a named owner and date.
- The business has accepted its downstream responsibilities.

## Related

- Roles: [agent-model.md](agent-model.md)
- Workshop: [augmented-workshop.md](augmented-workshop.md)
- Canvas: [ai-impact-canvas.md](ai-impact-canvas.md)
