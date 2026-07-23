# 05 — AI Capability Canvas

> Part of the [AI-native Discovery Workshop Kit](00-workshop-readme.md). **Workshop slot: 65–80 min.**
> Feeds the *AI Capabilities* dimension of the consolidated [AI Impact Canvas](../ai-impact-canvas.md).

**Use case:** ______________________  **Date:** ____________

## Purpose

Separate what genuinely needs AI from what is deterministic automation, a rules engine, or plain analytics — and, for anything that does need AI, define quality criteria, validation and fallback **before** committing.

## Facilitator questions

- For each step, what actually needs AI — and what is just automation or rules?
- What is the non-AI alternative, and why is it not enough?
- What makes an output acceptable? Who validates it?
- What happens when it is wrong?

## Capability classification

Classify **every** step of the target process. Most steps should not be AI.

| Step / need | Deterministic automation | Rules engine | Analytics | Machine learning | Generative AI | Agentic capability | Human review | Non-AI alternative exists? |
|---|---|---|---|---|---|---|---|---|
| Retrieve data from sources | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |  |
| Consolidate / copy into reporting | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |  |
| Apply formatting | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |  |
| Generate narrative / commentary | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |  |
| Produce final deliverable | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |  |
|  | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |  |

### Definitions

| Type | Means | Typical fit |
|---|---|---|
| **Deterministic automation** | Fixed, repeatable steps; same input → same output | Extraction, copying, scheduling, formatting |
| **Rules engine** | Explicit business rules, authored and owned by the business | Thresholds, classifications, eligibility |
| **Analytics** | Aggregation, statistics, comparison to reference | Variance, trends, KPIs |
| **Machine learning** | Learned patterns from data; probabilistic | Forecasting, anomaly detection, scoring |
| **Generative AI** | Produces text or content from context | Narratives, summaries, commentary |
| **Agentic capability** | Plans and executes multi-step actions with tools | Orchestration across systems — highest Run scrutiny |
| **Human review** | A person checks or decides | Validation gates, exception handling |

## Canvas

| Topic | Known | Assumed | Unknown | Decision Required | Owner | Evidence | Build Impact | Run Impact | Next Action |
|---|---|---|---|---|---|---|---|---|---|
| Deterministic automation |  |  |  |  |  |  |  |  |  |
| Rules engine |  |  |  |  |  |  |  |  |  |
| Analytics |  |  |  |  |  |  |  |  |  |
| Machine learning |  |  |  |  |  |  |  |  |  |
| Generative AI |  |  |  |  |  |  |  |  |  |
| Agentic capability |  |  |  |  |  |  |  |  |  |
| Human review |  |  |  |  |  |  |  |  |  |
| Non-AI alternative |  |  |  |  |  |  |  |  |  |

## Per-capability detail

Complete one block per capability that is **not** plain deterministic automation.

### Capability 1: ______________________

| Field | Value |
|---|---|
| Type (from classification above) |  |
| **Why AI is needed** (what fails without it) |  |
| **Expected input** (data, context, constraints) |  |
| **Expected output** (form, length, content) |  |
| **Quality criteria** (what makes it acceptable) |  |
| **Validation method** (who checks, how, on what sample) |  |
| **Failure mode** (how it goes wrong: wrong figure, hallucinated cause, tone, omission) |  |
| **Fallback** (what happens when it fails or is unavailable) |  |
| Owner (business) |  |
| Status | Known / Assumed / Unknown / Decision Required |

### Capability 2: ______________________

| Field | Value |
|---|---|
| Type |  |
| Why AI is needed |  |
| Expected input |  |
| Expected output |  |
| Quality criteria |  |
| Validation method |  |
| Failure mode |  |
| Fallback |  |
| Owner (business) |  |
| Status | Known / Assumed / Unknown / Decision Required |

### Capability 3: ______________________

| Field | Value |
|---|---|
| Type |  |
| Why AI is needed |  |
| Expected input |  |
| Expected output |  |
| Quality criteria |  |
| Validation method |  |
| Failure mode |  |
| Fallback |  |
| Owner (business) |  |
| Status | Known / Assumed / Unknown / Decision Required |

## Non-AI alternative

| Question | Answer |
|---|---|
| What is the simplest non-AI way to achieve the outcome? |  |
| Why is it insufficient? |  |
| What would it cost to build and run instead? |  |
| Have we agreed AI is justified? | ☐ Yes ☐ No ☐ `[to be confirmed]` |

## Decision to obtain

- [ ] Agreed split between deterministic automation and AI.
- [ ] For each AI capability: quality criteria, a named validator, and a fallback.
- [ ] Explicit agreement that the non-AI alternative was considered.

## Guardrails

- Default to the **simplest** capability that works. AI where rules suffice is Run cost you pay forever.
- Figures should come from deterministic computation; the narrative explains them, it does not calculate them.
- An AI output is never a decision — see [human validation](../../03-delivery/human-validation.md).
- No quality criterion means no way to know it broke. Do not leave it empty.
