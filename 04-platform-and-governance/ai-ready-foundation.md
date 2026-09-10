# AI-Ready Foundation

Before an organisation can reliably activate AI agents, its data and context must be sufficiently **governed, connected, trusted, and accessible**. That is the AI-Ready Foundation.

ADM separates two layers:

| Layer | Question it answers | Owns |
|---|---|---|
| **AI-Ready Foundation** | *Can agents safely and reliably use this information?* | data governance, connectivity, context, security, [Agent 0](#agent-0--context--orchestration) |
| **Agentic Delivery** | *Can agents deliver the product?* | the existing [delivery workflow](../03-delivery/intent-based-development.md) (Problem Clarifier → Prototype → Human Gate → Delivery → Test → Demo → Human Acceptance → Learning) |

The Foundation **enables** the delivery agents; it does not replace them.

## The readiness stack

```
BUSINESS NEED
      ↓
DATA GOVERNANCE            → Data Governance Map
      ↓
DATA DISCOVERY & CROSSING  → Data Relationship Map
      ↓
SINGLE SOURCE OF TRUTH     → Source of Truth Map
      ↓
AI-READY DATA / CONTEXT     → AI-Ready Context Contract
      ↓
AGENT 0 — CONTEXT & ORCHESTRATION
      ↓
ADM DELIVERY AGENTS
```

> **This is not a mandate to build a data platform first.** ADM sizes the readiness the *use case* needs — see the [gate](#readiness-is-a-gate-not-always-a-project). Most use cases need a governed slice of context, not an enterprise programme.

---

## Readiness is a gate, not always a project

Before activating agents, ADM (via [Agent 0](#agent-0--context--orchestration)) assesses readiness for **this** use case and returns a verdict:

| Verdict | Meaning | Next |
|---|---|---|
| 🟢 **GREEN** | Data / context is sufficient and trusted. | Proceed to the agent workflow. |
| 🟠 **AMBER** | Usable with explicit limitations / guardrails. | Proceed conditionally; record the guardrails. |
| 🔴 **RED** | Too fragmented, unreliable, or unsafe. | Targeted remediation first, then re-assess. |

This is what stops ADM from turning every AI opportunity into a data-platform programme. The verdict is scoped to the use case, produced with the [Data Readiness Canvas](../templates/data-readiness-canvas.md), and owned by a human.

---

## Layer 1 — Data Governance

Answer, for the data this use case touches: what exists, who owns it, who can access it, its sensitivity, the quality required, retention / compliance rules, whether it may be exposed to agents, and whether it has an authoritative owner.

`INPUT` the business need + candidate sources
`AI ACTION` inventory sources, propose owners, sensitivity, access, quality, exposure flags
`HUMAN DECISION` confirm owners, sensitivity, and what agents may / may not touch
`OUTPUT` **Data Governance Map**

| Data / context | Owner | Sensitivity | Access | Quality required | Retention / compliance | Agent-exposable? |
|---|---|---|---|---|---|---|

This is **not** a generic enterprise-data-governance framework. It answers one question: *can ADM agents safely and reliably use this information?* Access, identity, and data-protection rules come from [security and compliance](security-and-compliance.md) — reference them, don't restate them.

---

## Layer 2 — Data Discovery & Crossing

AI value often comes not from one dataset but from **combining trusted context** across sources (e.g. CRM + billing + support + documents + analytics).

`INPUT` the useful sources from Layer 1
`AI ACTION` find join keys, duplicates, conflicts, missing relationships, quality blockers, and the context an agent needs to interpret the data
`HUMAN DECISION` confirm which sources to combine and resolve conflicts of record
`OUTPUT` **Data Relationship Map**

| Sources to cross | Common key / join | Duplication | Conflict | Missing relationship | Interpretation context needed |
|---|---|---|---|---|---|

---

## Layer 3 — Single Source of Truth

Many organisations — especially SMEs — run on local Excel files, duplicated spreadsheets, email attachments, personal folders, multiple versions, disconnected SaaS, and undocumented [shadow IT](shadow-it-prevention.md). Agents cannot reliably act on that.

`INPUT` the Data Relationship Map
`AI ACTION` flag duplicated information; propose the authoritative source per domain; identify systems of record vs. copies to govern or eliminate
`HUMAN DECISION` declare the authoritative source; decide consolidation vs. eliminate vs. govern-in-place
`OUTPUT` **Source of Truth Map**

For each critical information domain, record: (A) what is duplicated, (B) which source is authoritative, (C) which remain operational systems of record, (D) where consolidation helps, (E) which local / shadow copies to eliminate or govern.

> This is the constructive counterpart to [shadow IT prevention](shadow-it-prevention.md): shadow IT is *ungoverned* local data; the Source of Truth Map decides, per domain, which copy is authoritative and what happens to the rest.

**No prescribed technology.** A source of truth may live in PostgreSQL, Snowflake, Databricks, Microsoft Fabric, BigQuery, SharePoint, an existing enterprise database, or an approved SaaS platform. **ADM defines the capability, not the vendor.**

---

## Layer 4 — AI-Ready Data / Context Layer

**AI-ready does not mean "put all company data into one database."** It means an agent can reach the *right* information with clear ownership, known provenance, sufficient quality, permissions, metadata, context, stable identifiers, understandable schemas, and traceability.

Where appropriate, expose that context through **stable interfaces**: APIs, connectors, [MCP servers](https://modelcontextprotocol.io), views, semantic layers, retrieval services, or data contracts.

`INPUT` the Source of Truth Map
`AI ACTION` draft, per exposed source, what an agent can rely on (interface, provenance, permissions, freshness, identifiers)
`HUMAN DECISION` approve the contract and its access boundaries
`OUTPUT` **AI-Ready Context Contract**

| Exposed source | Interface (API / connector / MCP / view …) | Provenance | Permissions | Freshness | Stable identifier | Quality guarantee |
|---|---|---|---|---|---|---|

The contract describes exactly what [Agent 0](#agent-0--context--orchestration) may depend on.

---

## Agent 0 — Context & Orchestration

Agent 0 is the **context broker and orchestrator** that sits between the company environment and the ADM delivery agents. **Agent 0 is not a data warehouse** — it stores no system of record; it discovers, connects, retrieves, and brokers governed context.

Agent 0's job:

- discover available sources and **connect only to authorised ones**;
- read their [AI-Ready Context Contracts](#layer-4--ai-ready-data--context-layer);
- retrieve the relevant context and build the **Context Pack** the downstream agents need;
- preserve source **provenance** and enforce **access boundaries**;
- orchestrate **handoffs** between ADM agents.

```
COMPANY ENVIRONMENT   (GitHub/GitLab · Jira · CRM · SharePoint · databases · files · ServiceNow · …)
        ↓
CONNECTORS / ADAPTERS         ← environment-specific complexity lives here
        ↓
AI-READY CONTEXT              ← governed, per the Context Contract
        ↓
AGENT 0                       ← discovers, retrieves, brokers, enforces boundaries
        ↓
STANDARD ADM AGENTS           ← reusable across environments
```

### The "universal soldier" strategy

ADM delivery agents must stay **reusable across environments**. So environment-specific complexity belongs in **adapters, connectors, context configuration, and permissions** — *not* inside every specialist agent. An [Environment Adapter](#environment-adapters) is the swappable part; agent behaviour is the portable part.

> Agent 0 is the delivery-time context broker. It is distinct from the Discovery-time [Orchestrator](../02-ai-discovery/agent-model.md), which consolidates specialist *analyses* into the AI Impact Canvas. Agent 0 brokers *context and handoffs*; the Orchestrator brokers *analyses*.

### Environment Adapters

An **Environment Adapter** connects one concrete system (a specific CRM, Git host, ticketing tool…) to the AI-Ready Context Layer, exposing it through a stable contract. Swap the adapter, keep the agents. This is how the same ADM agents run against different company environments.

---

## ADM architecture — Foundation vs Delivery

```
ADM FOUNDATION                          ADM DELIVERY
Data · Governance · Connectivity        Problem Clarifier → Prototype Agent → Human Gate
Context · Security · Agent 0     ─────▶  → Delivery Agent → Commit → Test Agent → Demo Agent
                                         → Human Acceptance → Learning Agent
```

The Foundation enables the Delivery agents. It does **not** change the existing delivery workflow — see [Intent-Based Development](../03-delivery/intent-based-development.md) and the [Human Acceptance stage](../03-delivery/intent-based-development.md#human-acceptance-and-the-demo-agent).

---

## SME positioning — a path to AI-ready

An SME should **not** build an enterprise-scale architecture before using ADM. ADM is a path to becoming AI-ready, one step at a time:

```
LOCAL / FRAGMENTED   Excel + SaaS + files + email
        ↓
DISCOVERED           we know where information is
        ↓
GOVERNED             we know ownership and access
        ↓
CONNECTED            systems can exchange useful context
        ↓
TRUSTED              authoritative sources are identified
        ↓
AI-READY             agents can reliably consume context
        ↓
AGENTIC              ADM agents execute delivery workflows
```

Each step is small and independently useful. A use case can go AGENTIC on a governed *slice* while the rest of the organisation is still fragmented — that is exactly what the [readiness gate](#readiness-is-a-gate-not-always-a-project) is for.

---

## Principles

- **Before becoming AI-native, become sufficiently AI-ready.**
- **No agent is better than the context and data it can reliably access.**
- **Establish trusted sources before automating decisions.**
- **Connect agents to governed context, not uncontrolled data.**
- **AI-ready does not mean centralise everything.**
- **Agent portability depends on separating environment adapters from agent behaviour.**

## Use it

- Assess a use case with the [Data Readiness Canvas](../templates/data-readiness-canvas.md).
- Foundations and connectors: [platform foundations](platform-foundations.md).
- Governance of local / shadow copies: [shadow IT prevention](shadow-it-prevention.md).
- Data protection and access rules: [security and compliance](security-and-compliance.md).
