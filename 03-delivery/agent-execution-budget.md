# Agent Execution Budget

**Principle:** an AI agent works inside a declared budget. Effort is bounded before work starts, and the agent stops on its own when the bound is reached.

## Why

An agent that keeps working until it feels finished has no natural stopping point. It explores, refactors, widens scope, and consumes effort no one budgeted. The failure is rarely a bad result — it is an unbounded one: work that never closes, or closes far past what was agreed, with no one able to say when it went off track.

Bounding effort turns the agent into a predictable delivery participant.

## Declaring the budget

Every AI-agent task must declare, before execution starts:

- **estimated effort in minutes**;
- **estimated number of tool calls**;
- **expected deliverables**;
- **stopping criteria**.

A task without these four elements is not ready to be run.

## Budget control

Let **E** be the estimated effort.

| Threshold | Rule |
|---|---|
| **90% of E** | Stop exploration and begin delivery closure. |
| **100% of E** | No new implementation may start. |
| **110% of E** | Mandatory hard stop. |

## Hard-stop procedure

At the hard stop, the agent must:

1. stop all development;
2. preserve completed work;
3. run only essential validation if still possible;
4. report what is complete;
5. report what remains;
6. explain the cause of the overrun;
7. propose a separate follow-up iteration.

> **The agent must never silently exceed the 110% threshold.**

Silence is the real failure. An overrun that is declared, explained, and handed over is a manageable delivery event. An overrun discovered afterwards is not.

## Core principle

> **A controlled partial delivery is preferable to an uncontrolled complete delivery.**

Partial work that is bounded, validated, and honestly reported can be planned around. Complete work delivered outside any budget cannot — it distorts every estimate that follows.

## Reusable prompt

Use the [Agent Execution Budget prompt](../prompts/agent-execution-budget.md) to declare the budget at the start of a task.

## Related

- [Human Validation](human-validation.md) — humans validate, arbitrate, and decide.
- [Roles and Responsibilities](../01-operating-model/roles-and-responsibilities.md) — who owns the budget decision.
