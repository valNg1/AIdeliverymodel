# Agent Execution Budget — Prompt Template

Prepend this block to any AI-agent coding task. It declares the budget before work starts and defines how the agent stops.

Rule reference: [Agent Execution Budget](../03-delivery/agent-execution-budget.md).

## Template

```
## Execution budget

- Estimated effort (E): ___ minutes
- Hard-stop threshold: 110% of E = ___ minutes
- Tool-call budget: ___ calls

## Deliverables

- ___
- ___

## Stopping criteria

Stop when all of the following are true:
- ___
- ___

## Budget control

- At 90% of E: stop exploration, begin delivery closure.
- At 100% of E: no new implementation may start.
- At 110% of E: mandatory hard stop.

## Hard-stop procedure

On hard stop:
1. stop all development;
2. preserve completed work;
3. run only essential validation if still possible;
4. report what is complete;
5. report what remains;
6. explain the cause of the overrun;
7. propose a separate follow-up iteration.

Never silently exceed the 110% threshold.
A controlled partial delivery is preferable to an uncontrolled complete delivery.
```

## Filling it in

| Field | Guidance |
|---|---|
| **Estimated effort (E)** | Wall-clock minutes for the whole task, validation included. |
| **Hard-stop threshold** | Compute it explicitly — do not leave the agent to infer it. |
| **Tool-call budget** | A ceiling on calls. Catches exploration loops that burn no visible time. |
| **Deliverables** | Concrete artifacts. "Improve the module" is not a deliverable. |
| **Stopping criteria** | Observable conditions, not a feeling of completeness. |

## Guardrail

If the agent cannot state a credible estimate, the task is not specified well enough to run. Split it before starting.
