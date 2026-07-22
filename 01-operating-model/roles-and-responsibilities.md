# Roles and Responsibilities

This is a first version. It names the human roles in the model and points to the ownership detail in Product Operations.

## Human roles

- **Product Owner** — single accountable owner of the product, end to end: value, trade-offs, and health in production. See [Single Product Ownership](../00-vision/principles.md).
- **Business Owner / Domain expert** — owns business rules, data quality expectations, validation, thresholds, and functional evolution. Accepts downstream responsibilities surfaced in Discovery.
- **Delivery Lead** — orchestrates the delivery, sequencing, and the human + AI team. See [delivery-lead prompt](../prompts/delivery-lead.md).
- **Solution / Data Architect** — shape architecture, data, and integration choices. See [solution-architect](../prompts/solution-architect.md) and [data-architect](../prompts/data-architect.md) prompts.
- **Security & Compliance** — owns security and compliance review. See [security-reviewer prompt](../prompts/security-reviewer.md).
- **Product Operations Lead** — owns the Run model, observability, and maintenance. See [product-operations-lead prompt](../prompts/product-operations-lead.md).
- **Platform team** — provides shared foundations and guardrails. See [platform-foundations](../04-platform-and-governance/platform-foundations.md).

## AI roles

Specialized AI roles support Discovery and delivery as team members with defined inputs, outputs, and boundaries. They are defined in [prompts/](../prompts/) and orchestrated per [human-ai-team-model.md](human-ai-team-model.md).

## Responsibility domains

Four domains recur throughout the model: **Business, IT, Platform, and Run**. Each product's responsibilities across these domains are made explicit in the [ownership matrix template](../templates/ownership-matrix.md) and the [ownership model](../05-product-operations/ownership-model.md).

> Principle: AI produces analyses; humans hold every accountability listed above.
