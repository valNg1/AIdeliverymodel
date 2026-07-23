# 14 — Go / No-Go Recommendation

> Part of the [AI-native Discovery Workshop Kit](00-workshop-readme.md). **Completed after the workshop**, from the [Discovery Synthesis](13-discovery-synthesis.md).

**Use case:** ______________________  **Date:** ____________
**Prepared by:** ______________  **Decision owner (named):** ______________

## Purpose

Turn the Discovery into one clear, defensible recommendation — and make the reasoning behind it auditable.

> **AI produces analyses. Humans build consensus and make decisions.** This recommendation is prepared for a named human decision-maker; it is not the decision itself.

---

## The four possible outcomes

| Outcome | Meaning | Typical trigger |
|---|---|---|
| **Go to Prototype** | Build a limited, throwaway proof on real data to close specific unknowns | Value is credible but data or AI feasibility is unproven |
| **Go to MVP** | Build a production-intended first version with a Run plan | Value, data, architecture direction, ownership and Run are sufficiently clear |
| **Return to Discovery** | Insufficient clarity to commit; specific gaps must be closed first | Blocking questions remain, or ownership/Run is unassigned |
| **Stop** | Do not proceed | Value does not justify cost, or a blocking constraint cannot be resolved |

## Readiness assessment

Score each dimension. Be honest — an inflated score here becomes a failed delivery later.

| Dimension | Assessment | Evidence | Blocking gap? | Owner |
|---|---|---|---|---|
| **Business value** | ☐ Strong ☐ Adequate ☐ Weak ☐ Unclear |  | ☐ |  |
| **Data readiness** | ☐ Strong ☐ Adequate ☐ Weak ☐ Unclear |  | ☐ |  |
| **Architecture feasibility** | ☐ Strong ☐ Adequate ☐ Weak ☐ Unclear |  | ☐ |  |
| **Security readiness** | ☐ Strong ☐ Adequate ☐ Weak ☐ Unclear |  | ☐ |  |
| **Ownership** | ☐ Strong ☐ Adequate ☐ Weak ☐ Unclear |  | ☐ |  |
| **Run readiness** | ☐ Strong ☐ Adequate ☐ Weak ☐ Unclear |  | ☐ |  |
| **Cost** | ☐ Strong ☐ Adequate ☐ Weak ☐ Unclear |  | ☐ |  |
| **Risk** | ☐ Strong ☐ Adequate ☐ Weak ☐ Unclear |  | ☐ |  |
| **Business commitment** | ☐ Strong ☐ Adequate ☐ Weak ☐ Unclear |  | ☐ |  |

### Criteria per dimension

| Dimension | Strong | Adequate | Weak / Unclear |
|---|---|---|---|
| **Business value** | Problem, outcome and a measurable success criterion agreed | Value credible, measurement partial | No agreed outcome or no way to measure it |
| **Data readiness** | Sources identified, access confirmed, quality assessed, owners named | Sources identified, some access or quality `[to be confirmed]` | Sources or access unknown; no data owner |
| **Architecture feasibility** | Shortlist agreed, no blocking technical unknown | Shortlist agreed, unknowns identified and ownable | No viable option, or feasibility untested |
| **Security readiness** | Classification settled, obligations known, security owner named | Classification settled, review pending | Classification unknown or review may block |
| **Ownership** | One Accountable per responsibility, all named and accepted | Most assigned; a few gaps with decision owners | Key responsibilities unassigned or refused |
| **Run readiness** | Supervision matrix drafted with named owners; effort acknowledged | Matrix partial; effort acknowledged in principle | No supervision plan or nobody owns the Run |
| **Cost** | Build and Run drivers identified with confidence levels; cost owner named | Drivers identified, estimates low-confidence | Cost unexamined, or Run cost ignored |
| **Risk** | Top risks named with owners and mitigations | Risks named, mitigation partial | Material risk unmitigated or unowned |
| **Business commitment** | Named contributors with confirmed availability | Contributors named, availability `[to be confirmed]` | Business expects IT to do everything |

## Decision rules of thumb

- Any **blocking gap** in Ownership or Run readiness → **Return to Discovery**, not Go to MVP.
- Value strong but data or AI feasibility unproven → **Go to Prototype**.
- Value weak or cost clearly exceeds value → **Stop**.
- Everything Adequate or better, no blocking gaps → **Go to MVP**.

> These are heuristics to structure the conversation, not a scoring formula. The named decision owner decides.

## Recommendation

**Recommended outcome:** ☐ Go to Prototype ☐ Go to MVP ☐ Return to Discovery ☐ Stop

**Rationale (3–5 sentences):**

______________________________________________________________

**Conditions attached to this recommendation:**

| # | Condition | Owner | By when |
|---|---|---|---|
| 1 |  |  |  |
| 2 |  |  |  |
| 3 |  |  |  |

## If "Go to Prototype"

| Field | Value |
|---|---|
| Specific unknowns the prototype must close |  |
| Timebox |  |
| Data to be used (real / sample / synthetic) |  |
| Success criteria for the prototype |  |
| What happens if it fails |  |

## If "Go to MVP"

| Field | Value |
|---|---|
| First increment scope |  |
| Run plan in place? | ☐ Yes ☐ Partial |
| Business contributors confirmed? | ☐ Yes ☐ No |
| Architecture review completed by |  |
| Target date |  |

## If "Return to Discovery"

| # | Gap to close | Owner | By when | Evidence needed |
|---|---|---|---|---|
| 1 |  |  |  |  |
| 2 |  |  |  |  |

**Follow-up session scheduled for:** ____________

## If "Stop"

| Field | Value |
|---|---|
| Primary reason |  |
| What would change the answer |  |
| Alternative proposed to the business |  |
| Communicated to whom, by when |  |

---

## Sign-off

| Role | Name | Decision | Date |
|---|---|---|---|
| Business Owner |  |  |  |
| Product Owner |  |  |  |
| IT Delivery Lead |  |  |  |
| Security (if blocking) |  |  |  |

## Guardrails

- Record the recommendation **and** the decision — they may differ, and the difference is worth keeping.
- Do not upgrade a Weak to an Adequate to make a Go possible.
- "Return to Discovery" is a legitimate, valuable outcome, not a failure.
- Log the final decision in [12 Open Questions and Decisions](12-open-questions-and-decisions.md) and the product-level [decision log](../decision-log.md).
