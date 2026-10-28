# Everboarding web architecture — ADM

## Target domains

| Domain | Purpose | Repository root | Exposure |
| --- | --- | --- | --- |
| `everboarding.fr` | Corporate site | existing Everboarding site | Public |
| `adm.everboarding.fr` | AI Delivery Model showcase and onboarding | `apps/adm-site` | Public |
| `hub.everboarding.fr` | Portfolio, delivery and organizational control tower | `apps/everboarding-ai-hub` | Private |
| `davidson.everboarding.fr` | Davidson Training Academy | existing Academy project | Restricted / client |

## Separation rule

The public ADM site may contain:
- methodology;
- agent roles;
- selected public templates;
- anonymised / approved cases;
- client and partner onboarding material.

The private Hub may contain:
- real projects;
- requirements;
- delivery evidence;
- AI usage;
- acceptance records;
- organizational design;
- factory backlog;
- handover and industrialization data.

No private project data is copied into the public app.

## Vercel model

Use two Vercel projects from the same GitHub repository:

### Project 1 — ADM Public
Root Directory: `apps/adm-site`
Custom Domain: `adm.everboarding.fr`

### Project 2 — Everboarding AI Hub
Root Directory: `apps/everboarding-ai-hub`
Custom Domain: `hub.everboarding.fr`

This keeps deployments independent while preserving one source repository.

## Access-control target for Hub

Before connecting real client/project data:
- enable authentication;
- move API/GitHub credentials server-side;
- authorize access by user/project;
- keep audit logs for acceptance and handover actions.

The static MVP remains demonstration-only until those controls are implemented.

## Local development

Each app can be opened independently with VS Code Live Server.

Suggested local convention:
- ADM public: Live Server instance A
- Hub: Live Server instance B
- project applications: configured in `apps/everboarding-ai-hub/local-apps.js`

## Delivery sequence

1. Validate the two local experiences.
2. Deploy `apps/adm-site` to its Vercel project.
3. Map `adm.everboarding.fr`.
4. Deploy `apps/everboarding-ai-hub` to its Vercel project.
5. Map `hub.everboarding.fr`.
6. Add Hub authentication before real data.
7. Replace demonstration portfolio data with controlled Git/API-backed project descriptors.
