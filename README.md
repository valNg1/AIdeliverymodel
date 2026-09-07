# AI Delivery Model

> An operating model for organizations that want to turn a business need into a maintainable digital product — repeatably — by combining human expertise, AI, a knowledge base, and reusable building blocks.

**Status: v0.1 — Foundational structure.** This is an early, opinionated draft meant to be usable by a team from its very first Discovery workshop. Some areas — especially Product Operations / Run — are explicitly marked as still experimental.

---

## The problem

Most organizations still run software delivery on assumptions from the previous era: buy a product, hand its integration to a vendor, and treat each initiative as a one-off project. That model made sense when producing software was slow and expensive. It also produced fragmented systems, weak internal knowledge, and a hard dependency on external integrators for anything strategic.

Three things break in this model when AI enters delivery:

- The cost of producing software drops, so the old "buy and integrate" default is no longer the only rational choice.
- Delivery moves faster than governance, so shadow IT and ungoverned AI usage spread.
- Products get built but not *operated* — nobody planned who supervises them, who validates their outputs, or who pays for the Run.

The AI Delivery Model exists to close those gaps.

## The thesis: From Buy to Make

In the historical model, companies **bought** software and outsourced its integration to vendors and system integrators.

With AI, the cost of software production falls. Companies can **build** their strategic products again, while continuing to **buy** commodity software where it makes sense.

The new strategic asset is therefore not the software itself, but the organization's **capability to produce, operate, maintain, and evolve digital products**. Delivery becomes an organizational capability, not a series of disconnected projects.

See [00-vision/from-buy-to-make.md](00-vision/from-buy-to-make.md) and [00-vision/why-now.md](00-vision/why-now.md).

## Principles

The model rests on eleven structuring principles:

1. **Business First** — start from business value, not technology.
2. **Single Product Ownership** — one accountable owner per product, end to end.
3. **Human + AI Delivery Team** — AI is a team member with defined roles, not a black box.
4. **Knowledge First** — capture and reuse knowledge as a first-class asset.
5. **Reference-Driven Delivery** — build from proven references, patterns, and examples.
6. **Continuous Design** — design is ongoing, not a one-time upfront phase.
7. **Reusable Building Blocks** — assemble products from shared, reusable components.
8. **Human Validation** — humans validate, arbitrate, and decide.
9. **Product over Project** — fund and manage products, not temporary projects.
10. **Continuous Learning** — every delivery feeds the learning system.
11. **Delivery as an Organizational Capability** — treat delivery itself as an asset to grow.

Full descriptions: [00-vision/principles.md](00-vision/principles.md). The stance behind them: [00-vision/manifesto.md](00-vision/manifesto.md).

## The lifecycle

The operating model runs a repeatable lifecycle from need to running product:

**Discovery → Design → Build → Validate → Operate → Learn**

Each stage feeds the next, and Operate and Learn feed back into Discovery. Details in [01-operating-model/lifecycle.md](01-operating-model/lifecycle.md) and [01-operating-model/overview.md](01-operating-model/overview.md).

## AI-native Discovery

AI-native Discovery is the heart of this model. It is **not** just a better way to capture requirements.

From Discovery onward, the model links, in a single connected view:

- business need, process, and users;
- data sources, connectors, and data quality;
- expected visualizations;
- AI capabilities, technical capabilities, and architecture;
- security, compliance, and cost;
- delivery model and maintenance model;
- objects to observe, supervision frequency, and thresholds;
- responsibilities across Business, IT, Platform, and Run.

Discovery must let the business **immediately understand the impact of its choices on Build and Run**. The business no longer just expresses a need — it understands and accepts its future responsibilities: business rules, data quality, result validation, thresholds, prompts, narrative models, supervision, and functional evolution.

An **augmented Discovery workshop** uses several specialized AI roles — Business Analyst, Data Architect, Solution Architect, Security Reviewer, Product Operations Lead, Delivery Lead — that all analyze the same corpus (workshop transcript, business documents, notes, diagrams, known constraints) and produce specialized analyses. A human consolidates and arbitrates them.

> **AI produces the analyses. Humans build consensus and make decisions.**

The central Discovery deliverable is the **[AI Impact Canvas](02-ai-discovery/ai-impact-canvas.md)** — a single connected view of a need and its full Build-and-Run consequences.

Start with [02-ai-discovery/overview.md](02-ai-discovery/overview.md).

## The role of the human

AI accelerates analysis; it does not own decisions. In this model, humans are responsible for:

- building consensus across stakeholders;
- arbitrating between conflicting analyses;
- validating results, data quality, and outputs;
- accepting ownership and downstream responsibilities;
- making the final call.

Human validation is a principle, not a formality. See [03-delivery/human-validation.md](03-delivery/human-validation.md).

AI agents also work inside a **declared execution budget**: effort, tool calls, deliverables, and stopping criteria are stated before work starts, and the agent hard-stops rather than silently overrunning. See [03-delivery/agent-execution-budget.md](03-delivery/agent-execution-budget.md) — a controlled partial delivery is preferable to an uncontrolled complete delivery.

Delivery itself starts from a structured **Intent** rather than a frozen spec, and grows a **Living Specification** through short loops — *Intent before Build. Specification through Delivery.* See [03-delivery/intent-based-development.md](03-delivery/intent-based-development.md).

## Repository structure

```
AIdeliverymodel/
├── README.md                     # You are here
├── CONTRIBUTING.md               # How to contribute
├── CHANGELOG.md                  # Version history
├── LICENSE                       # Apache License 2.0
├── roadmap.md                    # What is planned next
├── glossary.md                   # Shared vocabulary
├── 00-vision/                    # Why this model, and its stance
├── 01-operating-model/           # The operating model and lifecycle
├── 02-ai-discovery/              # AI-native Discovery and the AI Impact Canvas
├── 03-delivery/                  # Delivery practices (intent, knowledge, references, design, agent budget)
├── 04-platform-and-governance/   # Platform foundations, security, governance
├── 05-product-operations/        # Run, observability, maintenance, ownership
├── 06-learning-system/           # Continuous learning and maturity
├── templates/                    # Ready-to-fill working documents
│   └── discovery/                # ⭐ Workshop canvas kit (run a Discovery session)
├── troubleshooting/              # Applied cases — real fixes done with the model
├── examples/                     # Worked, generic examples
└── prompts/                      # AI agent role prompts for Discovery + delivery-time prompts
```

## Start here

**Running a Discovery workshop this week?** Go straight to the **[AI-native Discovery Workshop Kit](templates/discovery/00-workshop-readme.md)** — a complete, ready-to-use set of canvases for a 90–120 minute session, with a [single working workbook](templates/discovery/ai-discovery-workbook.md) and a [partially filled example](examples/discovery/automated-reporting-example.md).

Otherwise, if you are about to run your **first Discovery workshop**, read in this order:

1. [00-vision/manifesto.md](00-vision/manifesto.md) — the stance in one page.
2. [00-vision/principles.md](00-vision/principles.md) — the principles you will apply.
3. [02-ai-discovery/overview.md](02-ai-discovery/overview.md) — how AI-native Discovery works.
4. [02-ai-discovery/augmented-workshop.md](02-ai-discovery/augmented-workshop.md) — how to run the augmented workshop.
5. [templates/discovery/00-workshop-readme.md](templates/discovery/00-workshop-readme.md) — the workshop kit: agenda, canvases, facilitator guidance.
6. [templates/ai-impact-canvas.md](templates/ai-impact-canvas.md) — consolidate the session into the central canvas.
7. [prompts/](prompts/) — use these role prompts to run the specialized AI analyses.

If you are a **leader deciding whether to build or buy**, start with [00-vision/from-buy-to-make.md](00-vision/from-buy-to-make.md) and [01-operating-model/overview.md](01-operating-model/overview.md).

## Worked examples

- **[France Judo — Excellence Judo LMS](examples/hazumi-excellence-judo/00-overview.md)** — a fictionalized case walking a business need from Intent through AI-native Discovery, the AI Impact Canvas, and a first delivery loop to a Living Specification. The best end-to-end illustration of how the practices fit together.
- **[Specification churn in a language-learning product](examples/compostelle-specification-churn/00-overview.md)** — a fictionalized case showing the Intent-Based Development failure mode (local iteration on an undefined capability) and the Return-to-Intent remediation.
- **[Automated reporting](examples/discovery/automated-reporting-example.md)** — a partially filled Discovery for the workshop kit.

**[Troubleshooting — Applied Cases](troubleshooting/README.md):** real delivery problems solved with the AI Delivery Model, evolving with the fix. First case: [Compostelle — Reuse feedback](troubleshooting/compostelle-reuse-feedback/00-problem.md).

## Status and scope of v0.1

- This release provides the **structure and foundational content** of the framework.
- Priority documents are fully written; other files are short first versions meant to be expanded.
- **Product Operations / Run** is presented as an area still under experimentation where practices are not yet stabilized. Treat that section as a working hypothesis, not settled doctrine.
- No metrics, results, or case-study outcomes are claimed. Examples are generic.
- No application code is included at this stage.

See [CHANGELOG.md](CHANGELOG.md) and [roadmap.md](roadmap.md).

## Contributing

Contributions are welcome — see [CONTRIBUTING.md](CONTRIBUTING.md). This repository is documentation-only and licensed under the [Apache License 2.0](LICENSE).

---

## Résumé exécutif (Français)

**L'AI Delivery Model** est un *operating model* qui permet à une organisation de transformer, de façon répétable, un besoin métier en produit digital maintenable — en combinant expertise humaine, IA, patrimoine de connaissances et composants réutilisables.

**La thèse « From Buy to Make ».** Hier, les entreprises *achetaient* des logiciels et en confiaient l'intégration à des éditeurs et intégrateurs. Avec l'IA, le coût de production logicielle baisse : les entreprises peuvent de nouveau *construire* leurs produits stratégiques, tout en continuant d'*acheter* les logiciels commoditaires. Le nouvel actif stratégique n'est plus le logiciel, mais **la capacité de l'organisation à produire, exploiter, maintenir et faire évoluer** ses produits digitaux.

**La Discovery AI-native** est le cœur du modèle. Elle ne se limite pas à mieux recueillir le besoin : dès la Discovery, elle relie le besoin métier, les processus, les données, les connecteurs, les visualisations, les capacités techniques, l'architecture, la sécurité, les coûts, le modèle de delivery, le modèle de maintenance et la supervision. Le métier comprend immédiatement l'impact de ses choix sur le Build **et** le Run, et accepte ses responsabilités futures (règles métier, qualité des données, validation, seuils, prompts, supervision, évolution).

Un **atelier de Discovery augmenté** mobilise plusieurs rôles IA spécialisés (Business Analyst, Data Architect, Solution Architect, Security Reviewer, Product Operations Lead, Delivery Lead) qui analysent le même corpus et produisent des analyses, ensuite consolidées et arbitrées par un humain :

> **L'IA produit les analyses. Les humains construisent le consensus et prennent les décisions.**

Le livrable central est l'**[AI Impact Canvas](02-ai-discovery/ai-impact-canvas.md)**, une vue unique et connectée reliant un besoin à ses conséquences complètes de Build et de Run.

**Par où commencer :** voir la section « Start here » ci-dessus. Statut : **v0.1**, structure fondatrice, partie Run encore expérimentale.
