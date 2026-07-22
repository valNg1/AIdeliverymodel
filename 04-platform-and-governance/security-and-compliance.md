# Security and Compliance

Security and compliance are considered from Discovery onward, not added at the end. This is a first version.

## Principle

Security and compliance obligations shape architecture, data, and Run choices. Surfacing them early — in the [AI Impact Canvas](../02-ai-discovery/ai-impact-canvas.md) — prevents expensive late rework and unmanaged risk.

## What to cover

- **Data protection** — sensitivity, residency, retention, minimization.
- **Access and identity** — who can see and do what.
- **AI-specific risk** — prompt and output handling, model behavior boundaries, human validation of AI outputs.
- **Regulatory obligations** — the constraints that apply to the domain.
- **Auditability** — evidence and logs for the Run (see [observability-matrix](../05-product-operations/observability-matrix.md)).

## In Discovery

The [Security Reviewer](../prompts/security-reviewer.md) role analyzes the corpus for security and compliance impact and fills the relevant canvas dimensions, marking Known / Assumed / Unknown / Decision Required.

## Guardrail

Do not place personal or sensitive data where it does not belong. Keep confidential details out of shared corpora and documents; use generic references.

*First version — to be expanded.*
