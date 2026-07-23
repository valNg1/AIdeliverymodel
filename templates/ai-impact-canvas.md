# AI Impact Canvas — Template

> Copy this file per product/need and fill it in. Concept and guidance: [../02-ai-discovery/ai-impact-canvas.md](../02-ai-discovery/ai-impact-canvas.md).
>
> ⭐ **Running a workshop?** Fill the granular canvases of the **[Discovery Workshop Kit](discovery/00-workshop-readme.md)** during the session, then consolidate them here. Mapping: [01](discovery/01-business-value-canvas.md) → Business Value · [02](discovery/02-process-and-users-canvas.md) → Process, Users · [03](discovery/03-data-and-connectors-canvas.md) → Data Sources, Connectors, Data Quality · [04](discovery/04-visualization-and-output-canvas.md) → Visualization · [05](discovery/05-ai-capability-canvas.md) → AI Capabilities · [06](discovery/06-architecture-options-canvas.md) → Architecture · [07](discovery/07-security-and-governance-canvas.md) → Security and Compliance · [08](discovery/08-build-impact-canvas.md) → Delivery · [09](discovery/09-run-and-observability-canvas.md) → Product Operations, Observability, Maintenance · [10](discovery/10-ownership-and-responsibility-canvas.md) → Ownership · [11](discovery/11-cost-risk-and-evolution-canvas.md) → Cost, Risks, Evolution · [12](discovery/12-open-questions-and-decisions.md) → Open Questions.

**Product / Need:** _____________________________________
**Sponsor:** ______________  **Product Owner:** ______________
**Date:** ____________  **Version:** ____________
**Build-vs-Buy stance:** ☐ Build ☐ Buy ☐ Hybrid — rationale: ______________

## How to fill this canvas

For **every element**, complete all columns. Do not leave cells blank.

- **Status** — one of: `Known` · `Assumed` · `Unknown` · `Decision Required`
- **Owner** — the named human accountable for this element
- **Evidence** — the source (document, transcript, data sample, measurement)
- **Build Impact** — effect on the Build (effort, complexity, dependencies)
- **Run Impact** — effect on the Run (supervision, cost, ownership)

> Rule: nothing is left blank, and nothing is silently assumed. If Run Impact is empty, Discovery is not finished.

---

### 1. Business Value
| Element | Status | Owner | Evidence | Build Impact | Run Impact |
|---|---|---|---|---|---|
| Outcome and why it matters |  |  |  |  |  |

### 2. Process
| Element | Status | Owner | Evidence | Build Impact | Run Impact |
|---|---|---|---|---|---|
| Business process supported/changed |  |  |  |  |  |

### 3. Users and Roles
| Element | Status | Owner | Evidence | Build Impact | Run Impact |
|---|---|---|---|---|---|
| Who uses it and in what role |  |  |  |  |  |

### 4. Data Sources
| Element | Status | Owner | Evidence | Build Impact | Run Impact |
|---|---|---|---|---|---|
| Where the data comes from |  |  |  |  |  |

### 5. Connectors
| Element | Status | Owner | Evidence | Build Impact | Run Impact |
|---|---|---|---|---|---|
| Integrations required |  |  |  |  |  |

### 6. Data Quality
| Element | Status | Owner | Evidence | Build Impact | Run Impact |
|---|---|---|---|---|---|
| Quality required and who owns it |  |  |  |  |  |

### 7. Visualization
| Element | Status | Owner | Evidence | Build Impact | Run Impact |
|---|---|---|---|---|---|
| What the business expects to see |  |  |  |  |  |

### 8. AI Capabilities
| Element | Status | Owner | Evidence | Build Impact | Run Impact |
|---|---|---|---|---|---|
| AI behavior required and its limits |  |  |  |  |  |

### 9. Architecture
| Element | Status | Owner | Evidence | Build Impact | Run Impact |
|---|---|---|---|---|---|
| Shape of the solution |  |  |  |  |  |

### 10. Security and Compliance
| Element | Status | Owner | Evidence | Build Impact | Run Impact |
|---|---|---|---|---|---|
| Obligations and constraints |  |  |  |  |  |

### 11. Delivery
| Element | Status | Owner | Evidence | Build Impact | Run Impact |
|---|---|---|---|---|---|
| How it will be built |  |  |  |  |  |

### 12. Product Operations *(experimental)*
| Element | Status | Owner | Evidence | Build Impact | Run Impact |
|---|---|---|---|---|---|
| How it will be run |  |  |  |  |  |

### 13. Observability
| Element | Status | Owner | Evidence | Build Impact | Run Impact |
|---|---|---|---|---|---|
| What must be supervised, and how |  |  |  |  |  |

### 14. Maintenance
| Element | Status | Owner | Evidence | Build Impact | Run Impact |
|---|---|---|---|---|---|
| How it is kept healthy and current |  |  |  |  |  |

### 15. Ownership
| Element | Status | Owner | Evidence | Build Impact | Run Impact |
|---|---|---|---|---|---|
| Accountability across Business/IT/Platform/Run |  |  |  |  |  |

### 16. Cost
| Element | Status | Owner | Evidence | Build Impact | Run Impact |
|---|---|---|---|---|---|
| Build cost and Run cost |  |  |  |  |  |

### 17. Risks
| Element | Status | Owner | Evidence | Build Impact | Run Impact |
|---|---|---|---|---|---|
| What could go wrong |  |  |  |  |  |

### 18. Evolution
| Element | Status | Owner | Evidence | Build Impact | Run Impact |
|---|---|---|---|---|---|
| How it is expected to change |  |  |  |  |  |

### 19. Open Questions
| Question | Owner | Target date | Notes |
|---|---|---|---|
|  |  |  |  |

---

## Business responsibilities accepted

The business owner confirms acceptance of downstream responsibilities:

- ☐ Business rules
- ☐ Data quality
- ☐ Validation of results
- ☐ Thresholds
- ☐ Prompts
- ☐ Narrative / reporting models
- ☐ Supervision
- ☐ Functional evolution

**Business owner signature / name:** ______________  **Date:** ____________

## Linked deliverables

- Ownership matrix: [ownership-matrix.md](ownership-matrix.md)
- Decision log: [decision-log.md](decision-log.md)
- Draft observability plan: [../05-product-operations/observability-matrix.md](../05-product-operations/observability-matrix.md)
