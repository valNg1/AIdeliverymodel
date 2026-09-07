# Glossary

Shared vocabulary for the AI Delivery Model. Terms are listed alphabetically. Keep this file consistent with usage across the repository.

- **AI Delivery Model** — The operating model described in this repository: a repeatable way to turn a business need into a maintainable digital product by combining human expertise, AI, a knowledge base, and reusable building blocks.

- **AI Impact Canvas** — The central Discovery deliverable. A single connected view that links a business need to its full Build and Run consequences across value, process, data, architecture, security, delivery, operations, ownership, cost, risks, and open questions. See [02-ai-discovery/ai-impact-canvas.md](02-ai-discovery/ai-impact-canvas.md).

- **AI-native Discovery** — A Discovery approach that, from the start, connects business need to data, connectors, visualization, architecture, security, cost, delivery, and Run, so the business understands the downstream impact of its choices.

- **Augmented workshop** — A Discovery workshop supported by specialized AI roles that analyze a shared corpus and produce specialized analyses for human consolidation.

- **Build** — The activities that produce the product: design, development, integration, and validation.

- **Building block** — A shared, reusable component (technical or knowledge-based) assembled into products.

- **Capability Intent** — The durable expected user behaviour for a capability: why, who, expected outcome, expected behaviour, critical constraints, and acceptance signal. Stable across many iterations. Distinct from Delivery Intent. See [03-delivery/intent-based-development.md](03-delivery/intent-based-development.md#two-levels-of-intent).

- **Connector** — A reusable integration to a data source or external system.

- **Continuous Design** — The principle that design is ongoing throughout the lifecycle, not a one-time upfront phase.

- **Delivery as an Organizational Capability** — Treating the organization's ability to produce, operate, maintain, and evolve products as a strategic asset to grow.

- **Delivery Intent** — What the current iteration is trying to learn, validate, or deliver. Lasts one iteration and serves — never replaces — the Capability Intent. See [03-delivery/intent-based-development.md](03-delivery/intent-based-development.md#two-levels-of-intent).

- **Discovery** — The first lifecycle stage: understanding the need and its full impact before committing to Build.

- **Human + AI Delivery Team** — A delivery team where AI participates in defined roles alongside humans, who retain validation and decision authority.

- **Human Validation** — The principle that humans validate outputs, arbitrate conflicts, and make final decisions.

- **Intent** — A Minimum Viable Specification that seeds development: problem, users, expected outcome, scope / out of scope, constraints, acceptance signal, and decision owner. Small but explicit, not a vague idea. See [03-delivery/intent-based-development.md](03-delivery/intent-based-development.md).

- **Intent-Based Development** — The delivery practice of starting Build from a structured Intent rather than a frozen specification, then growing a Living Specification through short delivery loops. *Intent before Build. Specification through Delivery.* See [03-delivery/intent-based-development.md](03-delivery/intent-based-development.md).

- **Intent Readiness Gate** — A lightweight human check, before development starts, that the Intent is ready to build against: problem understood, users identified, outcome defined, scope boundaries clear, critical constraints known, decision owner identified, and at least one concrete acceptance scenario expressible. See [03-delivery/intent-based-development.md](03-delivery/intent-based-development.md).

- **Knowledge First** — The principle that knowledge is captured and reused as a first-class asset.

- **Living Specification** — A specification that is maintained continuously alongside the product, capturing business intent, business rules, acceptance criteria, architecture decisions, test evidence, operational knowledge, and decision rationale — making the repository the durable memory of the product. See [03-delivery/intent-based-development.md](03-delivery/intent-based-development.md).

- **Observability matrix** — A supervision table that defines, for each object to observe, its metric or event, frequency, threshold, responsible owner, action, escalation path, evidence, and review date. See [05-product-operations/observability-matrix.md](05-product-operations/observability-matrix.md).

- **Operating model** — The way an organization is arranged to deliver value repeatably: roles, processes, capabilities, and governance.

- **Orchestrator** — The AI role that coordinates the specialized analysis roles and consolidates their outputs for human arbitration. See [prompts/orchestrator.md](prompts/orchestrator.md).

- **Ownership model** — Who is accountable for a product across Business, IT, Platform, and Run. See [05-product-operations/ownership-model.md](05-product-operations/ownership-model.md).

- **Product Operations / Run** — The activities that keep a product healthy in production: observability, maintenance, supervision, and evolution. Presented in this framework as still experimental.

- **Product over Project** — The principle of funding and managing durable products rather than temporary projects.

- **Reference-Driven Delivery** — Building from proven references, patterns, and examples rather than from scratch.

- **Return-to-Intent** — The remediation for specification churn: when delivery feedback repeatedly reopens the same behaviour, stop local iteration, cluster the recurring issues, and redefine the Capability Intent before resuming delivery. See [03-delivery/intent-based-development.md](03-delivery/intent-based-development.md#the-return-to-intent-branch).

- **Reusable Building Blocks** — See *Building block*.

- **Run** — See *Product Operations / Run*.

- **Single Product Ownership** — One accountable owner per product, end to end.

- **Specialized AI role** — An AI analysis role with a defined scope (for example Business Analyst, Data Architect, Solution Architect, Security Reviewer, Product Operations Lead, Delivery Lead).

- **Specification Churn** — Motion without convergence: repeatedly shipping local fixes for the same behaviour because the underlying Capability Intent is undefined. A signal to apply Return-to-Intent. See [03-delivery/intent-based-development.md](03-delivery/intent-based-development.md#failure-mode--local-iteration-on-an-undefined-capability).
