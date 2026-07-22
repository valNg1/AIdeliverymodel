# AI-native Discovery — Overview

AI-native Discovery is the heart of the AI Delivery Model. It is **not** simply a better way to capture requirements. It is a way to connect a business need to its full Build and Run consequences, so that decisions are made with their real weight visible.

## The core idea

A need is cheap to state and expensive to run. Traditional discovery captures *what the business wants*. AI-native Discovery also surfaces *what the business will be responsible for* once the product is built and running.

From Discovery onward, the model links, in a single connected view:

- business need, process, and users and roles;
- data sources, connectors, and data quality;
- expected visualizations;
- AI capabilities, technical capabilities, and architecture;
- security, compliance, and cost;
- delivery model and maintenance model;
- objects to observe, supervision frequency, and thresholds;
- responsibilities across Business, IT, Platform, and Run.

The result is captured in the **[AI Impact Canvas](ai-impact-canvas.md)** — the central Discovery deliverable.

## What Discovery must achieve

**1. Make Build and Run impact immediate.**
The business must be able to see, during the workshop, how a given choice changes the Build effort *and* the Run cost, supervision load, and ownership.

**2. Turn need into accepted responsibility.**
The business no longer only expresses a need. It understands and accepts its future responsibilities:

- business rules;
- data quality;
- validation of results;
- thresholds;
- prompts;
- narrative / reporting models;
- supervision;
- functional evolution.

**3. Separate what is known from what is not.**
Every element of the canvas is marked as Known, Assumed, Unknown, or Decision Required — with an owner and evidence. Discovery is honest about uncertainty.

## How it works

AI-native Discovery uses an **[augmented workshop](augmented-workshop.md)**: specialized AI roles analyze a shared corpus (transcript, business documents, notes, diagrams, known constraints) and each produce a focused analysis. An orchestrator consolidates them. A human arbitrates.

> **AI produces the analyses. Humans build consensus and make decisions.**

- The shared corpus and processing steps: [inputs-and-workflow.md](inputs-and-workflow.md).
- The roles and how they collaborate: [agent-model.md](agent-model.md).
- What Discovery produces: [discovery-deliverables.md](discovery-deliverables.md).

## Where to start

1. Read [augmented-workshop.md](augmented-workshop.md).
2. Copy the [workshop agenda template](../templates/discovery-workshop-agenda.md).
3. Copy the [AI Impact Canvas template](../templates/ai-impact-canvas.md).
4. Use the [agent prompts](../prompts/) to run the specialized analyses.

## What Discovery is not

- It is not a requirements document that freezes and hands off. Design is [continuous](../03-delivery/continuous-design.md).
- It is not a place for AI to decide. Every decision is human, recorded in the [decision log](../templates/decision-log.md).
- It is not complete until Run impact and ownership are explicit.
