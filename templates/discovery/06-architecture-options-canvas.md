# 06 — Architecture Options Canvas

> Part of the [AI-native Discovery Workshop Kit](00-workshop-readme.md). **Workshop slot: 65–80 min.**
> Feeds the *Architecture* dimension of the consolidated [AI Impact Canvas](../ai-impact-canvas.md).
> Deeper post-workshop analysis: [templates/architecture-options.md](../architecture-options.md).

**Use case:** ______________________  **Date:** ____________

> ⚠️ **The workshop produces a shortlist and trade-offs — not a validated architecture.** Architecture validation happens afterwards, with a named Solution Architect. Use generic formulations and `[to be confirmed]`; do not name specific internal technologies or vendors.

## Purpose

Compare at least three architecture directions on the same criteria, so the trade-offs — especially Run impact — are visible to the business.

## Facilitator questions

- Which direction fits: platform / low-code, custom application, or hybrid?
- What can we reuse that already exists?
- Which option is fastest to deliver — and which is cheapest to run? Are they the same?
- What would make each option unacceptable?

## Canvas

| Topic | Known | Assumed | Unknown | Decision Required | Owner | Evidence | Build Impact | Run Impact | Next Action |
|---|---|---|---|---|---|---|---|---|---|
| Architecture direction |  |  |  |  |  |  |  |  |  |
| Reuse of existing assets |  |  |  |  |  |  |  |  |  |
| Integration approach |  |  |  |  |  |  |  |  |  |
| Hosting |  |  |  |  |  |  |  |  |  |
| Constraints |  |  |  |  |  |  |  |  |  |

## Option comparison

| Criterion | **Option A — Low-code / platform-first** | **Option B — Custom application** | **Option C — Hybrid** |
|---|---|---|---|
| **Components** |  |  |  |
| **Data flow** |  |  |  |
| **Connectors** |  |  |  |
| **Hosting** |  |  |  |
| **Integration** |  |  |  |
| **Security** |  |  |  |
| **Reuse of existing assets** |  |  |  |
| **Complexity** (low/med/high) |  |  |  |
| **Time to deliver** (relative) |  |  |  |
| **Maintainability** |  |  |  |
| **Run impact** (supervision, cost, skills) |  |  |  |
| **Key trade-offs** |  |  |  |
| **Status** | Known / Assumed / `[to be confirmed]` | Known / Assumed / `[to be confirmed]` | Known / Assumed / `[to be confirmed]` |

### Option profiles (generic)

- **Option A — Low-code / platform-first.** Assemble on an existing platform using its connectors and reporting capability. Typically fastest to deliver and lightest to run; constrained by what the platform supports, and dependent on the platform's roadmap.
- **Option B — Custom application.** Build the components. Maximum fit and control; highest Build effort, and the organization owns the whole Run.
- **Option C — Hybrid.** Use platform capability where it fits (for example ingestion and reporting) and build only the differentiating parts (for example the narrative generation and validation flow). Usually the pragmatic middle; the integration seam is where complexity concentrates.

## Elimination criteria

Which option is ruled out, and why?

| Option | Ruled out? | Reason | Decided by |
|---|---|---|---|
| A | ☐ |  |  |
| B | ☐ |  |  |
| C | ☐ |  |  |

## Shortlist for expert review

| Rank | Option | Why shortlisted | Open technical questions | Reviewer (named architect) | Review by |
|---|---|---|---|---|---|
| 1 |  |  |  |  |  |
| 2 |  |  |  |  |  |

## Decision to obtain

- [ ] A shortlist of at most two options to take into expert review.
- [ ] Agreed elimination reasons for the rest.
- [ ] A named Solution Architect and a date for the architecture review.
- [ ] **No final architecture decision taken in the workshop.**

## Guardrails

- Do not name specific internal tools, vendors or products; describe capabilities generically and mark specifics `[to be confirmed]`.
- Fastest to build is often not cheapest to run — force both rows to be filled.
- Reuse first: check [reusable building blocks](../../03-delivery/reusable-assets.md) and [reference-driven delivery](../../03-delivery/reference-driven-delivery.md).
- An option nobody can operate is not an option — cross-check with [09 Run and Observability](09-run-and-observability-canvas.md).
