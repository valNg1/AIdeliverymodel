# Foundation Cockpit — Portable MVP delivery case

> Public, anonymized technical case study. No client-specific planning, names, owners, dates, action register, or internal artifacts are included.

## Purpose

Build a lightweight, portable management cockpit for a multi-workstream transformation foundation phase, with a management read-only view and a single-editor workflow.

## MVP baseline (v0.2)

- Executive dashboard: counts, status distribution, average progress, overdue actions and workstream progress.
- Interactive monthly roadmap / Gantt: action selection, status visualization, category identification.
- Action register: search, category filtering, detailed action forms.
- Readiness overview: illustrative transition-gate criteria requiring human approval.
- Explicit category reference on roadmap rows, register rows and action details.
- Local viewer/admin presentation modes and JSON import/export.

## Implementation

The prototype is a self-contained `index.html` with embedded HTML, CSS, JavaScript and demonstration seed data. It runs directly in a modern browser without a build step or external CDN. Local edits are stored in browser `localStorage`; JSON exports allow manual backups or transfers.

**Security limitation:** The local admin/viewer toggle is not access control. Browser-local storage is not shared, durable central storage, or a multi-user audit trail. Do not treat this MVP as a production deployment.

## Production evolution

1. Confirm approved hosting, data classification and deployment constraints.
2. Replace browser-local persistence with an internal API and managed central datastore.
3. Integrate enterprise SSO and server-enforced role-based authorization (editor / reader).
4. Add audit history, backups, monitoring, controlled releases and security review.
5. Validate operational readiness and governance sign-off before go-live.

The interface can be retained while the data access layer is replaced. A modular TypeScript/React implementation is an option, not a prerequisite for evaluating the MVP.

## Delivery decisions

- **Prototype first:** test usability before committing to enterprise infrastructure.
- **Keep it portable:** no runtime dependencies for the initial local proof of concept.
- **Avoid sensitive publication:** source data and the operational planning workbook remain outside this public repository.
- **Document limitations:** avoid confusing UI role switches with secure authorization.

## Next backlog

- Action creation and archiving.
- Change history and timestamped snapshots.
- Validated import schema and data migration.
- Shared, authenticated production persistence.

## Version history

- **v0.1:** dashboard, roadmap, action register, readiness, local edits and JSON import/export.
- **v0.2:** category labels made explicit throughout roadmap, register and action details.

This document describes the delivery pattern only; it does not contain the operational application code or real project data.
