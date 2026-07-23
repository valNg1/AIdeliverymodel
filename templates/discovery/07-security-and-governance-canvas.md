# 07 — Security and Governance Canvas

> Part of the [AI-native Discovery Workshop Kit](00-workshop-readme.md). **Workshop slot: 80–95 min.**
> Feeds the *Security and Compliance* dimension of the consolidated [AI Impact Canvas](../ai-impact-canvas.md).
> Deeper post-workshop analysis: [templates/security-analysis.md](../security-analysis.md).

**Use case:** ______________________  **Date:** ____________

## Purpose

Surface data-protection, privacy, access and AI-specific obligations early, so they shape the architecture instead of blocking it later.

## Facilitator questions

- How is this data classified? Does it contain personal data?
- Who may access what, and how is identity handled?
- What must we be able to prove afterwards (audit trail)?
- What are the risks specific to the model and the prompts — and who validates outputs?

## Canvas

| Topic | Known | Assumed | Unknown | Decision Required | Owner | Evidence | Build Impact | Run Impact | Next Action |
|---|---|---|---|---|---|---|---|---|---|
| Data classification |  |  |  |  |  |  |  |  |  |
| Access control |  |  |  |  |  |  |  |  |  |
| Identity |  |  |  |  |  |  |  |  |  |
| Secrets |  |  |  |  |  |  |  |  |  |
| Privacy |  |  |  |  |  |  |  |  |  |
| GDPR / RGPD |  |  |  |  |  |  |  |  |  |
| Audit trail |  |  |  |  |  |  |  |  |  |
| Model risk |  |  |  |  |  |  |  |  |  |
| Prompt risk |  |  |  |  |  |  |  |  |  |
| Output validation |  |  |  |  |  |  |  |  |  |
| Human oversight |  |  |  |  |  |  |  |  |  |
| Retention |  |  |  |  |  |  |  |  |  |
| Legal or compliance review |  |  |  |  |  |  |  |  |  |
| Security owner |  |  |  |  |  |  |  |  |  |

## Data protection detail

| Field | Value |
|---|---|
| Highest classification level in scope |  |
| Personal data involved? | ☐ Yes ☐ No ☐ `[to be confirmed]` |
| If yes: categories of data subjects |  |
| Lawful basis (RGPD) |  |
| Data minimization applied? |  |
| Residency constraints |  |
| Retention period (data) |  |
| Retention period (outputs and logs) |  |
| Deletion / right-to-erasure handling |  |

## Access and identity

| Field | Value |
|---|---|
| Who may access source data |  |
| Who may access the deliverable |  |
| Identity mechanism (delegated / service account) |  |
| Least-privilege applied? |  |
| Secrets management approach |  |
| Access review frequency and owner |  |

## AI-specific risk

| Risk | Applies? | Description | Mitigation | Owner |
|---|---|---|---|---|
| **Model risk** — output is wrong but plausible | ☐ |  |  |  |
| **Prompt risk** — sensitive data placed in prompts | ☐ |  |  |  |
| **Prompt injection** — untrusted content steering behavior | ☐ |  |  |  |
| **Hallucinated causality** — narrative invents explanations | ☐ |  |  |  |
| **Drift** — behavior changes over time | ☐ |  |  |  |
| **Over-reliance** — users stop checking outputs | ☐ |  |  |  |

## Output validation and human oversight

| Question | Answer |
|---|---|
| Who validates generated output before distribution (named)? |  |
| On what basis (full check / sample / exception-only)? |  |
| Is validation evidenced and retained? |  |
| Can output reach an end user without human review? | ☐ Yes ☐ No |
| If yes: what compensating control applies? |  |

> If generated content can reach a business user unreviewed, that is a decision — record it explicitly in [12 Open Questions and Decisions](12-open-questions-and-decisions.md).

## Audit trail

| What must be reproducible | Retained? | Where | Retention |
|---|---|---|---|
| Source data snapshot |  |  |  |
| Transformation applied |  |  |  |
| Prompt and model version used |  |  |  |
| Generated narrative (raw) |  |  |  |
| Human edits and approvals |  |  |  |
| Distributed deliverable |  |  |  |

## Review and ownership

| Field | Value |
|---|---|
| Security owner (named) |  |
| Legal / compliance review required? | ☐ Yes ☐ No ☐ `[to be confirmed]` |
| Review requested on |  |
| Blocking for Go/No-Go? | ☐ Yes ☐ No |

## Decision to obtain

- [ ] Agreed data classification and whether personal data is in scope.
- [ ] A named **Security owner**.
- [ ] A decision on whether generated output may reach users without human review.
- [ ] Whether legal/compliance review blocks the next step.

## Guardrails

- Classification drives architecture — settle it before comparing options in earnest.
- "We'll handle security later" is a decision to record, with an owner, not a way to move on.
- Do not put confidential or identifying details into shared workshop material.
- See [security and compliance](../../04-platform-and-governance/security-and-compliance.md).
