# 02 — AI-native Discovery

> Part of the [Excellence Judo LMS worked example](00-overview.md) — a fictionalized case. Applies [AI-native Discovery](../../02-ai-discovery/overview.md).

The specialized [AI roles](../../prompts/) each analyze the same corpus (the [Intent](01-intent.md), sample content, and known constraints) from their own angle. Below, each analysis is applied concretely to the Excellence Judo LMS — kept short on purpose.

> **AI produces analyses. Humans build consensus and make decisions.**

## Specialized analyses

### [Business Analyst](../../prompts/business-analyst.md)
- **Learner journey:** a practitioner picks a level, follows a path, opens a content item. The journey — not the content library — is the value.
- **Content ownership:** pedagogical content owners curate; France Judo owns the material. Editorial authority stays human.
- **Structure question (open):** is "level/grade" the primary organizing axis, or one of several? Business could not confirm in the room.

### [Data Architect](../../prompts/data-architect.md)
- **Content entities:** `LearningPath`, `PathStep`, `ContentItem`, `LearnerLevel` — minimal set for the slice.
- **Metadata:** each `ContentItem` needs level, title, format, validation status, owner.
- **Source issues:** content exists in mixed formats (documents, video, expert notes); no single structured source today.
- **Versioning (assumed need):** validated content will change; items need version and validation-date fields — deferred, but flagged.

### [Solution Architect](../../prompts/solution-architect.md)
- **Capabilities:** authenticated access, a path/navigation view, a content viewer. Nothing more for loop 1.
- **Content delivery:** serve one already-validated item; no authoring, no transcoding.
- **Reuse:** authentication and a content-viewer pattern are candidates for [reusable building blocks](../../03-delivery/reusable-assets.md) rather than bespoke work — see [Reference-Driven Delivery](../../03-delivery/reference-driven-delivery.md).

### [Security Reviewer](../../prompts/security-reviewer.md)
- **Roles:** practitioner (read), content owner (curate), administrator (manage access).
- **Content access:** proprietary pedagogical content — access must be authenticated and role-gated even in the prototype.
- **Admin rights:** least privilege; no personal data beyond account identity in scope for loop 1.
- **IP protection:** the knowledge base is the asset; prevent uncontrolled export.

### [Product Operations Lead](../../prompts/product-operations-lead.md) *(Run — experimental area)*
- **Editorial ownership:** who marks an item "validated," and how is that visible? Must be explicit.
- **Content validation:** a validation state is a first-class attribute, not a manual convention.
- **Content freshness:** validated items go stale; a review cadence will be needed — deferred past loop 1.
- **Maintenance:** the durable memory of the product is the repository (see [Knowledge First](../../03-delivery/knowledge-first.md)).

### [Delivery Lead](../../prompts/delivery-lead.md)
- **Thin slice:** level selector → one path → one content category → one validated item → minimal navigation.
- **Scope cut:** drop authoring, analytics, multi-format, and the full curriculum from loop 1.
- **Dependencies:** one validated content item and a level taxonomy stub must exist before the demo.
- **First demo:** show the acceptance scenario end to end to a practitioner and a content owner.

## Human arbitration

The analyses are inputs. A human consolidated them into a small set of decisions and open questions (this is [Human Validation](../../03-delivery/human-validation.md) at the Discovery stage).

**Decisions**

| # | Decision | Owner |
|---|---|---|
| D1 | Loop 1 is **read-only** for learners; no authoring. | Product Owner |
| D2 | `ContentItem` carries an explicit **validation status**; only validated items are shown. | Product Owner |
| D3 | Access is **authenticated and role-gated** from the prototype onward. | Security Reviewer |
| D4 | Reuse an existing auth + content-viewer pattern rather than build new. | Solution Architect |

**Open questions**

| # | Question | Owner |
|---|---|---|
| Q1 | Is learner level the only navigation axis, or is pedagogical objective also needed? | Product Owner |
| Q2 | What is the taxonomy of learner levels / objectives? | Content owner |
| Q3 | What content-versioning and freshness policy applies? | Product Operations |

> Q1 is deliberately left open. The team will let the **first delivery loop** answer it rather than debate it now — reducing the cost of that uncertainty instead of trying to eliminate it upfront.

➡️ Next: [AI Impact Canvas](03-ai-impact-canvas.md).
