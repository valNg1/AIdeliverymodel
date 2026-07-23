# Discovery Deliverables

AI-native Discovery produces a small, connected set of deliverables. Together they let a team move to Design with the full Build and Run picture visible and ownership accepted.

> ⭐ **Producing them in a workshop:** the [Discovery Workshop Kit](../templates/discovery/00-workshop-readme.md) generates every deliverable below in a single 90–120 minute session, using the [workbook](../templates/discovery/ai-discovery-workbook.md) as the working support.

## Primary deliverable

### 1. AI Impact Canvas (consolidated)

The single connected view of the need and its Build and Run consequences, with every element marked Known / Assumed / Unknown / Decision Required and carrying Owner, Evidence, Build Impact, and Run Impact.

- Concept: [ai-impact-canvas.md](ai-impact-canvas.md)
- Template to fill: [../templates/ai-impact-canvas.md](../templates/ai-impact-canvas.md)

## Supporting deliverables

### 2. Specialized analyses

The per-role analyses that fed the canvas. Keep them; they carry the reasoning behind the consolidated view.

- [Business analysis](../templates/business-analysis.md)
- [Data analysis](../templates/data-analysis.md)
- [Architecture options](../templates/architecture-options.md)
- [Security analysis](../templates/security-analysis.md)
- [Product operations analysis](../templates/product-operations-analysis.md)
- [Delivery recommendation](../templates/delivery-recommendation.md)

### 3. Ownership matrix

Who is accountable across Business / IT / Platform / Run for each part of the product.

- Template: [../templates/ownership-matrix.md](../templates/ownership-matrix.md)
- Model: [../05-product-operations/ownership-model.md](../05-product-operations/ownership-model.md)

### 4. Decision log

Every decision made during Discovery, with rationale and owner — including deferred decisions.

- Template: [../templates/decision-log.md](../templates/decision-log.md)

### 5. Open questions

The explicit list of unresolved *Unknown* and *Decision Required* items, each with an owner and a target date. Open questions are a first-class output, not a failure.

### 6. Draft observability plan

A first version of the supervision matrix: what will be observed, how often, and by whom.

- Workshop canvas: [../templates/discovery/09-run-and-observability-canvas.md](../templates/discovery/09-run-and-observability-canvas.md)
- Template and model: [../05-product-operations/observability-matrix.md](../05-product-operations/observability-matrix.md)

### 7. Go / No-Go recommendation

A single, defensible recommendation — Go to Prototype, Go to MVP, Return to Discovery, or Stop — prepared for a named human decision-maker.

- Template: [../templates/discovery/14-go-no-go-recommendation.md](../templates/discovery/14-go-no-go-recommendation.md)

## Definition of done for Discovery

Discovery is done when:

- [ ] The AI Impact Canvas is consolidated, with no blank cells.
- [ ] Every element has an owner and evidence.
- [ ] Run Impact is filled for every major choice.
- [ ] A build-vs-buy stance is taken and recorded.
- [ ] The business has accepted its downstream responsibilities (business rules, data quality, validation, thresholds, prompts, narrative models, supervision, evolution).
- [ ] Open questions and deferred decisions have owners and dates.
- [ ] A draft observability plan exists.

## What Discovery hands to Design

A connected, honest picture — not a frozen specification. Design continues the work under [Continuous Design](../03-delivery/continuous-design.md), refining choices while keeping the canvas current.
