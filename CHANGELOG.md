# Changelog

All notable changes to the AI Delivery Model are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project aims to follow [Semantic Versioning](https://semver.org/spec/v2.0.0.html)
for its documentation releases.

## [Unreleased]

### Added
- **AI-native Discovery Workshop Kit** (`templates/discovery/`): a ready-to-use set of 15 canvases for a 90–120 minute Discovery workshop, covering business value, process and users, data and connectors, visualization and output, AI capability, architecture options, security and governance, build impact, run and observability, ownership and responsibility, cost/risk/evolution, open questions and decisions, synthesis, and a Go / No-Go recommendation.
- **AI Discovery Workbook** (`templates/discovery/ai-discovery-workbook.md`): a single working support assembling every canvas in workshop order.
- Timed 120-minute agenda with facilitator questions, expected evidence, canvas to complete and decision to obtain per sequence, plus a Facilitator Guidance section.
- **Generic worked example** (`examples/discovery/automated-reporting-example.md`): partially filled Discovery for automated management reporting with generated narratives.

### Changed
- Cross-linked the workshop kit from the README, the AI Impact Canvas, the augmented workshop, discovery deliverables, the observability matrix, the agent prompts, and the analysis templates.
- Reframed `templates/discovery-workshop-agenda.md` as the short generic agenda, pointing to the kit for full sessions.

## [0.1.0] — 2026-07-22

### Added
- Initial repository structure and foundational framework.
- Vision layer: manifesto and eleven structuring principles.
- Operating model: overview and end-to-end lifecycle (Discovery → Design → Build → Validate → Operate → Learn).
- AI-native Discovery: overview, augmented workshop model, inputs and workflow, and discovery deliverables.
- **AI Impact Canvas** as the central Discovery deliverable, with a ready-to-fill template.
- Product Operations layer (marked as experimental), including an observability / supervision matrix.
- Templates for the augmented workshop, specialized analyses, ownership matrix, and decision log.
- AI agent role prompts (orchestrator, business analyst, data architect, solution architect, security reviewer, product operations lead, delivery lead).
- Apache License 2.0, contributing guide, roadmap, and glossary.

### Notes
- Product Operations / Run is presented as an area still under experimentation; practices there are not yet stabilized.
- No metrics, results, or case-study outcomes are claimed. All examples are generic.
- No application code is included at this stage.

[0.1.0]: https://github.com/valNg1/AIdeliverymodel/releases/tag/v0.1.0
