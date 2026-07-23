# AI-native Discovery Workshop Kit

A complete, ready-to-use kit to prepare and run a **90–120 minute AI-native Discovery workshop**.

> **AI produces analyses. Humans build consensus and make decisions.**
> The human facilitator remains responsible for all arbitrations.

---

## 🇫🇷 Note en français

Ce kit est destiné à **préparer et animer l'atelier de lundi**. Il rassemble l'ensemble des canvas et livrables nécessaires pour conduire une Discovery AI-native de bout en bout, en 90 à 120 minutes.

L'objectif de l'atelier n'est **pas seulement de recueillir le besoin fonctionnel**. Il s'agit de relier immédiatement le besoin métier à ses conséquences réelles : données, connecteurs, visualisations, architecture, sécurité, gouvernance, delivery, maintenance, supervision, responsabilités, coûts, risques et évolutivité — donc aux impacts **Build** et **Run**.

Support unique de travail pendant la séance : **[ai-discovery-workbook.md](ai-discovery-workbook.md)** (assemble tous les canvas dans l'ordre de l'atelier).
Exemple partiellement rempli : **[automated-reporting-example.md](../../examples/discovery/automated-reporting-example.md)**.

À personnaliser avant lundi : le nom du cas d'usage, les participants, les propriétaires (owners) et les créneaux horaires.

---

## The use case in scope

The business wants an application able to:

1. retrieve data from several sources;
2. consolidate or copy that data into a reporting layer;
3. apply formatting;
4. automatically generate narratives or commentary;
5. produce a deliverable usable by business users.

The workshop must connect that need to: business needs, process, users, data sources, available connectors, data quality and frequency, expected visualizations, technical capabilities, architecture, security, governance, delivery model, maintenance model, objects to observe, supervision frequency, Business/IT/Platform/Run responsibilities, Build impacts, Run impacts, costs, risks, and evolution.

## The kit

| # | Canvas | Workshop slot |
|---|---|---|
| 00 | This readme — agenda and guidance | Preparation |
| 01 | [Business Value](01-business-value-canvas.md) | 10–25 min |
| 02 | [Process and Users](02-process-and-users-canvas.md) | 25–45 min |
| 03 | [Data and Connectors](03-data-and-connectors-canvas.md) | 45–65 min |
| 04 | [Visualization and Output](04-visualization-and-output-canvas.md) | 45–65 min |
| 05 | [AI Capability](05-ai-capability-canvas.md) | 65–80 min |
| 06 | [Architecture Options](06-architecture-options-canvas.md) | 65–80 min |
| 07 | [Security and Governance](07-security-and-governance-canvas.md) | 80–95 min |
| 08 | [Build Impact](08-build-impact-canvas.md) | 80–95 min |
| 09 | [Run and Observability](09-run-and-observability-canvas.md) | 80–95 min |
| 10 | [Ownership and Responsibility](10-ownership-and-responsibility-canvas.md) | 95–110 min |
| 11 | [Cost, Risk and Evolution](11-cost-risk-and-evolution-canvas.md) | 95–110 min |
| 12 | [Open Questions and Decisions](12-open-questions-and-decisions.md) | Continuous |
| 13 | [Discovery Synthesis](13-discovery-synthesis.md) | 110–120 min |
| 14 | [Go / No-Go Recommendation](14-go-no-go-recommendation.md) | After workshop |
| — | **[Workbook (all canvases in order)](ai-discovery-workbook.md)** | Single working support |

## The shared status vocabulary

Every canvas uses the same columns, where relevant:

| Field | Meaning |
|---|---|
| **Topic** | The element being discussed |
| **Known** | Established fact, with evidence |
| **Assumed** | A working assumption to be confirmed |
| **Unknown** | Explicitly not yet known |
| **Decision Required** | A choice to be made — by whom, by when |
| **Owner** | The named human accountable |
| **Evidence** | The source: document, transcript, data sample, measurement |
| **Build Impact** | Effect on the Build (effort, complexity, dependencies) |
| **Run Impact** | Effect on the Run (supervision, cost, ownership) |
| **Next Action** | The concrete follow-up, with an owner |

Use `[to be confirmed]` wherever information is missing. That is a valid, useful answer.

---

## Agenda — 120 minutes

### 0–10 min — Context and expected outcome

**Facilitator questions**
- Why are we here, and what decision are we trying to enable?
- What would make this workshop a success for you?
- Who in this room can accept responsibilities on behalf of the business?

**Expected evidence** — the initiative brief, any prior notes, the list of participants and their roles.

**Canvas to complete** — none (framing only). Open the [workbook](ai-discovery-workbook.md).

**Decision to obtain** — shared agreement on scope and on the outcome of the session (a Go/No-Go recommendation, not a build commitment).

---

### 10–25 min — Business problem and value

**Facilitator questions**
- What problem are we solving, and what happens if we do nothing?
- What outcome would you recognize as success? How would you measure it?
- Who are the users, and how many of them?
- How critical is this — and what is the current pain?

**Expected evidence** — current reporting examples, time spent today, volumes, stated pain points.

**Canvas to complete** — [01 Business Value](01-business-value-canvas.md).

**Decision to obtain** — an agreed problem statement, a named **Business Owner**, and a value hypothesis with at least one measurable success criterion.

---

### 25–45 min — Current process and users

**Facilitator questions**
- Walk me through the process as it happens today, step by step.
- Which steps are manual? Where are the decision points and the exceptions?
- Who validates, and who approves — today and in the target process?
- What happens when something goes wrong (fallback)?

**Expected evidence** — a walkthrough of the current process, examples of exceptions, the names of validators.

**Canvas to complete** — [02 Process and Users](02-process-and-users-canvas.md).

**Decision to obtain** — an agreed target process with **explicit human validation and approval points**.

---

### 45–65 min — Data, connectors and outputs

**Facilitator questions**
- Which source systems hold the data? Who owns each one?
- How would we access them — existing connector, API, export? Is it confirmed?
- How fresh must the data be? How good is its quality today, and who is responsible for it?
- What exactly must the final deliverable look like, for whom, and how often?

**Expected evidence** — source list with owners, sample extracts, an existing report to use as a target, refresh expectations.

**Canvas to complete** — [03 Data and Connectors](03-data-and-connectors-canvas.md) and [04 Visualization and Output](04-visualization-and-output-canvas.md).

**Decision to obtain** — the in-scope source list, and a named **Data Owner** per source. Unconfirmed connectors are recorded as `[to be confirmed]` with an owner and a due date.

---

### 65–80 min — AI relevance and solution options

**Facilitator questions**
- For each step, what actually needs AI — and what is just deterministic automation or a rules engine?
- What is the non-AI alternative, and why is it not enough?
- For the generated narrative: what makes an output acceptable? Who validates it? What happens when it is wrong?
- Which architecture direction fits: platform/low-code, custom, or hybrid?

**Expected evidence** — examples of good and bad narratives, existing rules, known platform capabilities.

**Canvas to complete** — [05 AI Capability](05-ai-capability-canvas.md) and [06 Architecture Options](06-architecture-options-canvas.md).

**Decision to obtain** — an agreed split between deterministic automation and AI, and a **shortlist** of architecture options — never a final architecture choice without a human expert review.

---

### 80–95 min — Build and run impacts

**Facilitator questions**
- What must be built versus reused?
- What will it take to run this every month — who checks what, how often?
- What must be supervised: sources, connectors, jobs, prompts, narratives, cost?
- What are the security, privacy and audit obligations?

**Expected evidence** — existing reusable assets, current supervision practices, applicable policies.

**Canvas to complete** — [07 Security and Governance](07-security-and-governance-canvas.md), [08 Build Impact](08-build-impact-canvas.md), [09 Run and Observability](09-run-and-observability-canvas.md).

**Decision to obtain** — a first supervision matrix with **named owners**, and explicit acknowledgment of the Run effort.

---

### 95–110 min — Ownership, risks and decisions

**Facilitator questions**
- Who owns the business rules? The data quality? The prompts? The narrative templates?
- Who validates outputs before they reach end users?
- What is the cost envelope, and who controls it?
- What are the top risks, and what would make this fail?

**Expected evidence** — named people accepting each responsibility (not job titles in the abstract).

**Canvas to complete** — [10 Ownership and Responsibility](10-ownership-and-responsibility-canvas.md) and [11 Cost, Risk and Evolution](11-cost-risk-and-evolution-canvas.md).

**Decision to obtain** — a completed RACI with **exactly one Accountable per line**, and explicit business acceptance of business-side responsibilities.

---

### 110–120 min — Synthesis and next steps

**Facilitator questions**
- Have we captured the problem, the scope, and what is out of scope?
- What are our top three unresolved questions, and who owns them?
- What is the next step, and by when?

**Expected evidence** — the filled canvases from the session.

**Canvas to complete** — [13 Discovery Synthesis](13-discovery-synthesis.md); record everything open in [12 Open Questions and Decisions](12-open-questions-and-decisions.md).

**Decision to obtain** — agreement on the synthesis and on the next step, feeding the [14 Go / No-Go Recommendation](14-go-no-go-recommendation.md).

---

## Facilitator Guidance

**1. Do not try to fill every box.**
A canvas with honest gaps is worth more than a canvas filled with guesses. Coverage is not the goal; clarity is.

**2. Distinguish facts, assumptions and unknowns.**
Every statement goes into `Known`, `Assumed`, or `Unknown`. If someone says "we have an API for that," ask for the evidence before it becomes `Known`.

**3. Do not let the business transfer all responsibilities to IT.**
Business rules, data quality, thresholds, prompt intent, narrative templates, output validation and functional evolution are **business** responsibilities. When a responsibility drifts to IT by default, stop and name a business owner.

**4. Make Build and Run consequences visible.**
For every request, ask out loud: *what does this cost to build, and what does it cost to run and supervise every month?* Fill the Run Impact column before moving on.

**5. Document decisions live.**
Write decisions into [12 Open Questions and Decisions](12-open-questions-and-decisions.md) during the session, with the rationale and the owner. A decision remembered differently next week is not a decision.

**6. Do not validate an architecture without a human expert.**
The workshop produces a shortlist and trade-offs. Architecture validation happens with a named Solution Architect, afterwards.

**7. Do not treat an AI output as a decision.**
AI-produced analyses are inputs. Consensus and decisions are human. Anything a model suggested still needs a named human to own it.

**8. Mark `[to be confirmed]` when information is missing.**
Then give it an owner and a due date in the open-questions register. Unowned uncertainty is how projects fail quietly.

---

## Preparation checklist (before Monday)

- [ ] Customize the use-case name and the participant list.
- [ ] Print or open the [workbook](ai-discovery-workbook.md) as the single working support.
- [ ] Confirm a **Business Owner** who can accept responsibilities is in the room.
- [ ] Collect the corpus: existing reports, source list, known constraints (see [inputs and workflow](../../02-ai-discovery/inputs-and-workflow.md)).
- [ ] Skim the [partially filled example](../../examples/discovery/automated-reporting-example.md).
- [ ] Decide who takes notes and who owns the decision log.
- [ ] Remove or generalize any confidential or identifying details from shared material.

## How this kit relates to the rest of the framework

- These canvases feed the consolidated **[AI Impact Canvas](../ai-impact-canvas.md)** — the central Discovery deliverable.
- The method behind the workshop is in **[augmented-workshop.md](../../02-ai-discovery/augmented-workshop.md)**.
- Specialized [AI agent prompts](../../prompts/) can pre-analyze the corpus and pre-fill the canvases before the session.
- The Run section builds on **[Product Operations](../../05-product-operations/overview.md)** and the [observability matrix](../../05-product-operations/observability-matrix.md) *(experimental area)*.
- Ownership follows the **[ownership model](../../05-product-operations/ownership-model.md)**.
