# Davidson AI Hub — MVP

This app turns the AI Delivery Model into a portfolio and delivery control tower.

## Scope included

- Home / portfolio dashboard
- Project workspace with Summary, Specifications, Requirements, Deliveries, AI Usage and Handover
- ADM workflow and human gates
- Living requirement statuses
- Full methodology area with 13 phases
- Architecture page
- Davidson design system page
- Portfolio AI usage view
- Executive presentation (10 screens)
- Product Owner onboarding presentation (8 screens)
- Ready-for-industrialization handover gate

## Run locally

```powershell
cd apps\davidson-ai-hub
python -m http.server 8080
```

Open `http://localhost:8080`.

No package installation is required.

## Hosting

The MVP is static HTML/CSS/JS and can later be hosted under the Everboarding/Vercel environment. The next iteration should replace demo project data with GitHub/API-backed project descriptors while keeping the UI contracts stable.
