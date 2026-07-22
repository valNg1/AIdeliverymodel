# Ownership Model

> ⚠️ **Experimental area.** Product Operations / Run is not yet stabilized. This is a first version to adapt.

Who is accountable for a product, across its whole life and across four domains: **Business, IT, Platform, and Run.**

## Principle: Single Product Ownership

Each product has **one accountable owner** end to end. Shared ownership is no ownership. The owner is responsible for value, trade-offs, and health in production.

Under that single owner, specific responsibilities are distributed across domains — but each responsibility still maps to exactly one named person.

## The four domains

| Domain | Typically responsible for |
|---|---|
| **Business** | Business rules, data quality expectations, validation, thresholds, prompts, narrative models, functional evolution |
| **IT** | Application logic, integration, technical maintenance |
| **Platform** | Shared foundations, connectors, guardrails, observability infrastructure |
| **Run** | Day-to-day supervision, incident response, escalation |

## The instrument

Distribute and record responsibilities using the [ownership matrix template](../templates/ownership-matrix.md). Every product should have a completed matrix by the end of Discovery.

## Rules

- No responsibility is left unassigned.
- Every supervision row in the [observability matrix](observability-matrix.md) names a Responsible Owner.
- Ownership is confirmed and accepted by the named people, not assumed.

*First version — to be expanded with a RACI reference.*
