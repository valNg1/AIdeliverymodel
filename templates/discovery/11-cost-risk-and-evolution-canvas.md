# 11 — Cost, Risk and Evolution Canvas

> Part of the [AI-native Discovery Workshop Kit](00-workshop-readme.md). **Workshop slot: 95–110 min.**
> Feeds the *Cost*, *Risks* and *Evolution* dimensions of the consolidated [AI Impact Canvas](../ai-impact-canvas.md).

**Use case:** ______________________  **Date:** ____________

## Purpose

Expose what this costs to build **and** to run, what could make it fail, and how it is expected to grow — including how it would be retired.

## Facilitator questions

- What drives the cost — build once, or run every month?
- What happens to the cost if volumes double, or if we add three more reports?
- What is our dependency on a vendor or a platform?
- What would make us stop this product?

## Canvas

| Topic | Known | Assumed | Unknown | Decision Required | Owner | Evidence | Build Impact | Run Impact | Next Action |
|---|---|---|---|---|---|---|---|---|---|
| Build cost drivers |  |  |  |  |  |  |  |  |  |
| Run cost drivers |  |  |  |  |  |  |  |  |  |
| Inference cost |  |  |  |  |  |  |  |  |  |
| API cost |  |  |  |  |  |  |  |  |  |
| Support cost |  |  |  |  |  |  |  |  |  |
| Maintenance effort |  |  |  |  |  |  |  |  |  |
| Vendor dependency |  |  |  |  |  |  |  |  |  |
| Technical debt |  |  |  |  |  |  |  |  |  |
| Business dependency |  |  |  |  |  |  |  |  |  |
| Model obsolescence |  |  |  |  |  |  |  |  |  |
| Future data sources |  |  |  |  |  |  |  |  |  |
| New reports |  |  |  |  |  |  |  |  |  |
| New languages |  |  |  |  |  |  |  |  |  |
| Scale |  |  |  |  |  |  |  |  |  |
| Retirement scenario |  |  |  |  |  |  |  |  |  |

## Cost drivers

| Driver | Build or Run | What drives it up | Estimate | Confidence (L/M/H) | Owner |
|---|---|---|---|---|---|
| Development effort | Build |  | `[to be confirmed]` |  |  |
| Connector work | Build |  | `[to be confirmed]` |  |  |
| Data preparation | Build |  | `[to be confirmed]` |  |  |
| Inference (generated narratives) | Run | Volume × frequency × length |  |  |  |
| API / data access | Run | Call volume, refresh frequency |  |  |  |
| Platform / hosting | Run |  | `[to be confirmed]` |  |  |
| Support | Run | User volume, incident rate |  |  |  |
| Maintenance effort | Run | Prompt upkeep, source changes |  |  |  |
| Human validation time | Run | Outputs × review time |  |  |  |

> **Do not present an estimate without a confidence level.** Human validation time is a real recurring cost — include it.

## Risk register

| Risk | Category | Likelihood (L/M/H) | Impact (L/M/H) | Mitigation | Owner | Status |
|---|---|---|---|---|---|---|
| Source data quality insufficient | Data |  |  |  |  |  |
| Connector not available as assumed | Data |  |  |  |  |  |
| Generated narrative wrong but plausible | AI |  |  |  |  |  |
| Users over-rely on unreviewed output | AI |  |  |  |  |  |
| Vendor / platform dependency | Architecture |  |  |  |  |  |
| Model obsolescence or behavior change | AI |  |  |  |  |  |
| Business contributors unavailable | Delivery |  |  |  |  |  |
| Run effort not staffed | Run |  |  |  |  |  |
| Cost grows faster than value | Cost |  |  |  |  |  |
| Technical debt from a rushed first version | Architecture |  |  |  |  |  |
|  |  |  |  |  |  |  |

## Dependencies

| Dependency | Type | What breaks if it changes | Mitigation | Owner |
|---|---|---|---|---|
| Vendor / platform |  |  |  |  |
| Upstream source systems |  |  |  |  |
| Model provider / version |  |  |  |  |
| Business availability |  |  |  |  |

## Evolution

| Evolution scenario | Expected? | Impact on Build | Impact on Run | Owner |
|---|---|---|---|---|
| New data sources added |  |  |  |  |
| New reports / new perimeters |  |  |  |  |
| New languages |  |  |  |  |
| Scale: more users |  |  |  |  |
| Scale: more volume / frequency |  |  |  |  |
| New regulatory requirement |  |  |  |  |

## Retirement scenario

| Question | Answer |
|---|---|
| What would make us stop this product? |  |
| What replaces it? |  |
| What happens to historical outputs and data? |  |
| Who decides retirement? |  |
| Estimated notice / transition period |  |

## Decision to obtain

- [ ] Agreed main cost drivers, with confidence levels.
- [ ] Top 3 risks named, with owners.
- [ ] A named **cost owner**.
- [ ] Agreement on the most likely evolution scenarios.

## Guardrails

- Run cost is recurring; Build cost is once. Do not let the conversation stop at Build.
- Never present an invented figure as an estimate — use `[to be confirmed]` with an owner.
- A risk without an owner is a wish. Assign every one.
