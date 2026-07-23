# Example — Automated management reporting with generated narratives

> **Generic, partially filled example.** It shows *how* to fill the [Discovery Workshop Kit](../../templates/discovery/00-workshop-readme.md), not a real project. No company, vendor or internal tool names are used. All figures are illustrative placeholders, not measured values.
>
> Notice how much is deliberately left as `Assumed`, `Unknown` or `[to be confirmed]` — that is what a healthy Discovery output looks like after a first 120-minute session.

**Use case:** Monthly management reporting pack with automatically generated commentary
**Date:** *(illustrative)*  **Facilitator:** *(name)*  **Business Owner:** *(named business manager)*

---

## 1. Business value *(extract)*

| Topic | Known | Assumed | Unknown | Decision Required | Owner | Evidence | Build Impact | Run Impact | Next Action |
|---|---|---|---|---|---|---|---|---|---|
| Business problem | Monthly pack is assembled by hand from several systems; preparation spans several days each cycle | Effort is comparable across the other reporting teams | Exact hours spent per cycle | — | Business Owner | Walkthrough in workshop; last 3 packs shown | — | — | Business to measure actual hours over 1 cycle |
| Expected outcomes | Shorter preparation cycle; analysts spend time on analysis rather than assembly | Quality improves through consistency | Whether cycle time is the binding constraint | — | Business Owner | Workshop transcript | — | — | Confirm with 2 analysts |
| Users | ~15 analysts producing the pack; ~40 managers receiving it | Recipients read it monthly | Actual readership | — | Business Owner | Distribution list | Access model for 2 populations | 2 user groups to support | Confirm recipient list |
| Value hypothesis | — | Automating assembly + drafting commentary frees analyst time | Size of the gain | Is time saved the primary value, or consistency? | Business Owner | — | Scope depends on answer | — | Decide at follow-up |
| KPIs | — | Cycle time; % of narratives accepted without rewrite | Baseline for both | Baseline measurement method | Business Owner | None yet | — | Both KPIs must be measured in Run | **Baseline to be measured before Build** |
| Criticality | High — recurring management commitment, fixed monthly deadline | — | — | — | Business Owner | Workshop | Deadline drives Run SLA | Hard monthly cut-off | — |
| Business owner | Named business manager accepted the role in session | — | — | — | — | Workshop | — | Owns rules, templates, validation | — |
| Success criteria | — | Pack produced on time with commentary accepted by the business | Acceptance threshold | Threshold value | Business Owner | — | Drives evaluation set | Drives narrative supervision | `[to be confirmed]` |

**Value hypothesis:** For **reporting analysts** who **spend several days assembling a monthly pack by hand**, this product will **consolidate source data and draft commentary automatically** so that **analysts review and explain rather than assemble**. We will know we were right when **cycle time drops and most generated narratives are accepted with minor edits** — *threshold `[to be confirmed]`*.

---

## 2. Data source *(one source, filled)*

### Source 1 — Financial consolidation system *(generic description)*

| Field | Value | Status |
|---|---|---|
| Source system | Central financial consolidation system holding monthly closed figures | Known |
| Data owner | Named finance data owner, confirmed in session | Known |
| Data type | Aggregated monthly figures by entity and cost line | Known |
| Sensitivity | Confidential — internal financial data, no personal data | Known |
| Access method | Read access to a reporting layer, not the transactional core | Assumed |
| Connector or API | **`[to be confirmed]`** — team believes a standard connector exists; nobody could confirm in session | **Decision Required** |
| Authentication | Service account, least privilege | Assumed |
| Data quality | Figures are already validated at close, so trusted at source | Known |
| Refresh frequency (source) | Monthly, after close | Known |
| Refresh frequency (required) | Monthly, within 2 working days of close | Known |
| Volume | Low — thousands of rows per cycle | Assumed |
| Retention | Aligned to existing financial retention policy | `[to be confirmed]` |
| Transformation | Mapping to reporting hierarchy; entity-name harmonization | Known |
| Lineage | Every figure must be traceable back to the closed source | Known |
| Fallback if unavailable | Manual extract, as done today | Known |

> **Connector to confirm — this is the key open item.** It was recorded as `Decision Required`, given an owner and a due date (see Open Questions Q1). The workshop did **not** assume it exists.

### Sources 2 and 3 *(not detailed here)*

- Source 2 — operational volumes system: `Assumed` accessible via export; owner named; quality **unknown**.
- Source 3 — commercial pipeline system: **`[to be confirmed]`** whether in scope at all (see Q4).

---

## 3. Reporting / output *(extract)*

| Field | Value | Status |
|---|---|---|
| Primary deliverable | Monthly management pack: fixed set of tables and charts plus a commentary section per section | Known |
| Dashboard or report | Static report first; dashboard later | Known — scope decision D2 |
| Format | Document export plus an online view | Assumed |
| Audience | ~40 managers; a subset receives an extended version | Known |
| Frequency | Monthly, within 2 working days of close | Known |
| Layout constraints | Existing pack layout must be preserved | Known — sample pack provided |
| Accessibility | `[to be confirmed]` with the accessibility referent | Unknown |
| Auditability | Must reproduce any past pack, with the data snapshot used | Known — drives architecture |
| Versioning | Each issued pack versioned and retained | Known |
| Human editing | Analysts may edit generated commentary before issue; edits tracked | Known — decision D4 |

---

## 4. Generated narrative *(AI capability, filled)*

| Field | Value |
|---|---|
| **Type** | Generative AI — narrative drafting only |
| **Why AI is needed** | Commentary is free text explaining variances across many sections; rules-based templates were tried before and produced text analysts rewrote entirely |
| **Expected input** | Computed figures and variances (deterministic), the prior period's commentary, and a business glossary |
| **Expected output** | A short paragraph per section: what moved, by how much, and against what reference — factual, no speculation |
| **Quality criteria** | Every figure cited matches the computed value; no invented causal explanation; agreed tone; within length limit |
| **Validation method** | Analyst reviews every narrative before issue in the first cycles; sampling considered later — *sampling rate `[to be confirmed]`* |
| **Failure mode** | Plausible but wrong causal claim; correct figure attributed to the wrong entity; omission of a material variance |
| **Fallback** | Issue the pack with figures only and a manual comment, as today |
| **Owner (business)** | Named business manager owns the narrative template and acceptance criteria |
| **Status** | Assumed — quality criteria agreed in principle, threshold `[to be confirmed]` |

**Key design decision (D3):** figures are computed **deterministically**; the AI only *explains* them. The model never calculates a number that appears in the pack.

**Capability classification extract**

| Step | Classification | Rationale |
|---|---|---|
| Retrieve data from sources | Deterministic automation | Scheduled extraction, no AI needed |
| Consolidate into reporting | Deterministic automation | Mapping rules, business-owned |
| Apply formatting | Deterministic automation | Fixed layout |
| Compute variances | Analytics | Arithmetic against reference |
| Generate commentary | **Generative AI** | Free-text explanation across many sections |
| Approve before issue | **Human review** | Analyst validation gate |

---

## 5. Human validation *(filled)*

| Validation point | What is checked | Who validates | When | If rejected |
|---|---|---|---|---|
| Data load complete | All in-scope sources present and fresh | Data steward | After each load | Halt; do not generate |
| Figures vs. source | Sample check against closed figures | Reporting analyst | Before narrative generation | Investigate mapping |
| **Generated narrative** | Figures cited are correct; no invented causality; tone and length | **Reporting analyst (named)** | Before issue | Analyst edits or rewrites; edit is tracked |
| Final pack approval | Whole pack fit to issue | Business Owner | Before distribution | Pack held; fallback to figures-only |

**Decision D4:** no generated commentary reaches a manager without analyst review — at least for the first cycles. Revisiting this requires an explicit new decision.

---

## 6. Supervision objects *(extract — experimental area)*

| Object to Observe | Metric or Event | Frequency | Threshold | Responsible Owner | Action | Escalation Path | Evidence or Log | Review Date |
|---|---|---|---|---|---|---|---|---|
| Data source (financial) | Freshness — figures present after close | Monthly, per cycle | Not present by close + 1 day | Data steward | Chase source owner; hold generation | → Product Owner → Business Owner | Ingestion log | After 3 cycles |
| Connector | Extraction success / failure | Per run | Any failure | Platform team | Retry, then manual extract fallback | → IT Delivery Lead | Job log | After 3 cycles |
| Transformation job | Run success, duration | Per run | Any failure; duration `[tbc]` | IT Delivery Lead | Investigate; rerun | → Platform team | Job log | After 3 cycles |
| Generated narrative | Share of narratives accepted without material edit | Monthly | `[to be confirmed]` with business | **Business Owner** | Review template and prompt; re-validate | → Product Owner | Validation records | After 3 cycles |
| Prompt | Version in use; change events | On change | Any unreviewed change | Product Owner | Re-run evaluation set before release | → Business Owner | Change log | Quarterly |
| Model | Provider version change or behavior drift | On event / quarterly | Any version change | Product Operations | Re-run evaluation set | → Product Owner | Evaluation results | Quarterly |
| Cost | Run cost vs. budget (inference + platform) | Monthly | `[to be confirmed]` | Product Owner | Review volumes and length | → Portfolio governance | Cost report | Quarterly |
| User feedback | Issues reported by recipients | Monthly | 3+ similar reports | Support | Triage; route to business or IT | → Product Owner | Support tickets | After 3 cycles |
| SLA | Pack issued within 2 working days of close | Monthly | Any miss | Product Owner | Post-cycle review | → Business Owner | Issue log | After 3 cycles |

> Thresholds left as `[to be confirmed]` were **not invented** to fill the table. Each has an owner and a due date in the open questions.

---

## 7. Responsibilities *(extract)*

### Business responsibilities — accepted in session

| Responsibility | Accepted | Named owner |
|---|---|---|
| Business rules (mapping, hierarchy, variance definitions) | ☑ | Business Owner |
| Data quality expectations | ☑ | Finance data owner |
| Validation of generated narratives | ☑ | Reporting analyst |
| Thresholds (acceptance rate, alert levels) | ☑ *(values `[tbc]`)* | Business Owner |
| Prompt intent and acceptance criteria | ☑ | Business Owner |
| Narrative templates and tone | ☑ | Business Owner |
| Supervision (business-side rows) | ☑ | Business Owner |
| Functional evolution (new sections, new entities) | ☑ | Business Owner |

### IT / Platform / Run responsibilities

| Responsibility | Accountable | Note |
|---|---|---|
| Connector build or configuration | IT Delivery Lead | Depends on Q1 |
| Data preparation and transformation | IT Delivery Lead | — |
| Reporting assembly and formatting | IT Delivery Lead | — |
| Architecture | Solution Architect | Review not yet held |
| Security implementation | Security | Classification confirmed: confidential, no personal data |
| Monitoring instrumentation | Platform team | — |
| Incident handling | Product Operations | Model `[to be confirmed]` |
| Support (first line) | Support | Routing rules `[to be confirmed]` |
| Cost control | Product Owner | — |

> **Facilitator note from the session:** the first pass of the RACI had *prompts*, *narrative templates* and *thresholds* assigned to IT. The facilitator stopped the discussion and reassigned them to the business, who accepted. This is the most common failure point of the workshop.

---

## 8. Open questions *(extract)*

| # | Question | Owner | Due Date | Blocking? | Evidence Needed | Status |
|---|---|---|---|---|---|---|
| Q1 | Does a usable connector exist for the financial consolidation system, or must one be built? | IT Delivery Lead | Before architecture review | **Blocking** | Written confirmation from the platform team + a successful test extraction | Open |
| Q2 | What acceptance threshold defines a "good" generated narrative? | Business Owner | Before Build | **Blocking** | Analyst review of ~20 sample narratives | Open |
| Q3 | What is the current baseline cycle time and effort? | Business Owner | Before Build | Non-blocking | Measurement over one cycle | Open |
| Q4 | Is the commercial pipeline system in scope for the first version? | Product Owner | At follow-up | Non-blocking | Scope decision | Open |
| Q5 | What is the data quality of the operational volumes source? | Finance data owner | Before architecture review | **Blocking** | Sample extract + quality assessment | Open |
| Q6 | What accessibility requirements apply to the pack? | Business Owner | Before Build | Non-blocking | Confirmation from accessibility referent | Open |
| Q7 | What is the acceptable monthly Run cost envelope? | Product Owner | Before Go/No-Go | Non-blocking | Cost estimate with confidence level | Open |
| Q8 | Which retention policy applies to generated narratives and data snapshots? | Security | Before Build | Non-blocking | Policy reference | Open |

## Decisions taken *(extract)*

| # | Decision | Owner | Options Considered | Rationale | Impact |
|---|---|---|---|---|---|
| D1 | Scope limited to the monthly management pack; other reports excluded from v1 | Product Owner | Include all reporting; monthly pack only | Keep first increment small enough to prove value | Reduces Build; defers value for other teams |
| D2 | Static report first, dashboard later | Product Owner | Dashboard first; both together | Matches existing consumption habits; lower Run cost | Simplifies architecture |
| D3 | Figures computed deterministically; AI drafts commentary only | Business Owner | AI computes and comments | Auditability and trust in figures | Constrains architecture; reduces model risk |
| D4 | No generated commentary issued without analyst review (first cycles) | Business Owner | Sample-based review; no review | Risk of plausible-but-wrong causality | Adds recurring Run effort — accepted |
| D5 | Architecture direction not decided in workshop; hybrid and platform-first shortlisted | Facilitator | Decide in session | No architect present; needs expert review | Review scheduled |

---

## 9. Provisional Go / No-Go position

| Dimension | Assessment | Note |
|---|---|---|
| Business value | Adequate | Credible, but no measured baseline yet (Q3) |
| Data readiness | **Weak** | Connector unconfirmed (Q1); one source quality unknown (Q5) |
| Architecture feasibility | Adequate | Shortlist agreed; expert review pending |
| Security readiness | Adequate | Classification settled; retention open (Q8) |
| Ownership | Strong | Business responsibilities accepted with named owners |
| Run readiness | Adequate | Matrix drafted with owners; several thresholds `[tbc]` |
| Cost | Unclear | No estimate yet (Q7) |
| Risk | Adequate | Top risks named and owned |
| Business commitment | Strong | Business Owner engaged; contributors named |

**Provisional recommendation: Go to Prototype**, timeboxed, to close Q1, Q2 and Q5 — specifically: prove the connector works, and produce ~20 narratives on real data for analysts to score against acceptance criteria.

> This is a *recommendation prepared for* a named decision owner. **AI produces analyses. Humans build consensus and make decisions.**

---

## How to use this example

- Read it beside the [workbook](../../templates/discovery/ai-discovery-workbook.md) before facilitating.
- Note the ratio: roughly as many `Assumed` / `Unknown` / `[to be confirmed]` entries as `Known` ones. That is realistic after one session.
- Note that **every** `[to be confirmed]` has a matching open question with an owner and a due date.
- Note that no threshold, cost or metric was invented to make a table look complete.
