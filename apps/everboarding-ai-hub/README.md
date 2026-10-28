# Everboarding AI Hub

Private operational workspace for the AI Delivery Model.

Target URL: `https://hub.everboarding.fr`

## Purpose

The Hub is the enterprise control tower. It contains operational information that should not be exposed on the public ADM showcase:

- portfolio and project status;
- specifications and living requirements;
- deliveries and test evidence;
- AI usage;
- Human Acceptance and handover;
- Organizational Design / Factory operating model;
- architecture and industrialization readiness.

The public method and client/partner onboarding experience lives separately in:

`apps/adm-site` → `https://adm.everboarding.fr`

## Local preview

Open this folder in VS Code and use Live Server.

## Local project links

Edit `local-apps.js` to configure the local URL/port behind each **Open** action.

## Deployment

Create a dedicated Vercel project with this folder as project root:

`apps/everboarding-ai-hub`

Attach the custom domain:

`hub.everboarding.fr`

## Access control

This application is intended to be private. Authentication must be enforced at deployment before real project/client data is connected.

Recommended target:
1. Everboarding/Supabase authentication or approved enterprise SSO;
2. server-side authorization for project access;
3. no secrets or client data embedded in static JavaScript;
4. GitHub/API credentials stored server-side only.

The current MVP uses demonstration data and is safe to preview locally.
