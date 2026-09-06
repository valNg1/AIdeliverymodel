# Lifecycle

The AI Delivery Model runs a repeatable lifecycle from business need to running product. The stages are ordered but not strictly linear: design is continuous, and Operate and Learn feed back into Discovery.

```
        ┌──────────────────────────────────────────────┐
        │                                              ▼
   Discovery ──▶ Design ──▶ Build ──▶ Validate ──▶ Operate ──▶ Learn
        ▲                                                        │
        └────────────────────────────────────────────────────────┘
```

## Stage 1 — Discovery

**Goal:** understand the need *and its full Build and Run impact* before committing.

- Connect business need, process, users, data, connectors, visualization, AI capabilities, architecture, security, cost, delivery, and Run.
- Run the [augmented workshop](../02-ai-discovery/augmented-workshop.md) with specialized AI roles.
- Produce the [AI Impact Canvas](../02-ai-discovery/ai-impact-canvas.md) and a [decision log](../templates/decision-log.md).

**Exit criteria:** the business understands and accepts its future responsibilities; open questions and decisions required are explicit; a build-vs-buy stance is taken.

## Stage 2 — Design

**Goal:** shape a solution that fits value, constraints, and the Run plan.

- Choose architecture options and reusable building blocks.
- Apply [reference-driven delivery](../03-delivery/reference-driven-delivery.md).
- Design continues into and through Build — see [continuous-design](../03-delivery/continuous-design.md).

**Exit criteria:** an agreed design direction with named references, blocks, and a first observability plan.

## Stage 3 — Build

**Goal:** produce the product with the human + AI delivery team.

- Start from a ready **Intent** and deliver in short slices — see [intent-based development](../03-delivery/intent-based-development.md).
- Assemble from [reusable building blocks](../03-delivery/reusable-assets.md).
- Capture knowledge as you go into the Living Specification ([knowledge-first](../03-delivery/knowledge-first.md)).
- Keep the AI Impact Canvas current as facts change.

**Exit criteria:** a working increment ready for validation.

## Stage 4 — Validate

**Goal:** confirm the increment does what it should, with humans accountable.

- Apply [human validation](../03-delivery/human-validation.md): outputs, data quality, thresholds, business rules.
- Record decisions and residual risks.

**Exit criteria:** validated increment; owner accepts responsibility for what goes live.

## Stage 5 — Operate (Run)

**Goal:** keep the product healthy in production.

- Stand up the [observability matrix](../05-product-operations/observability-matrix.md).
- Apply the [maintenance model](../05-product-operations/maintenance-model.md) and [ownership model](../05-product-operations/ownership-model.md).

> **Note:** Product Operations / Run is presented in this framework as an area still under experimentation. Treat this stage as a working model to adapt, not settled practice. See [05-product-operations/overview.md](../05-product-operations/overview.md).

**Exit criteria (ongoing):** objects are supervised at defined frequencies, with owners, thresholds, and escalation paths.

## Stage 6 — Learn

**Goal:** turn the delivery into compounding capability.

- Run [retrospectives](../06-learning-system/retrospectives.md).
- Update [references](../06-learning-system/reference-model.md) and captured knowledge.
- Assess against the [maturity model](../06-learning-system/maturity-model.md).

**Exit criteria:** lessons captured; references and reusable blocks updated; inputs fed back into future Discovery.

## Feedback loops

- **Operate → Discovery:** what the Run reveals reshapes future needs and thresholds.
- **Learn → everything:** updated references and knowledge improve the next lifecycle.
- **Continuous Design** spans Design through Operate; the design never fully freezes.
