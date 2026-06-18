# Business Documentation

Audience: recruiters, collaborators, the author.

## Objective

A fast, personal portfolio site that presents Akmal Fathurrahman's work as an AI Engineer —
projects, skills, and contact — in a single, easy-to-scan static page.

## What it delivers

- **Hero / About** — positioning and summary.
- **Projects** — curated project cards (content in `src/data/projects.ts`).
- **Skills** — grouped stack/skills (content in `src/data/skills.ts`).
- **Contact** — ways to reach out.

## Outcomes & success criteria

| Goal | Measure |
|---|---|
| Present work clearly | Projects + skills visible at a glance |
| Fast & reliable | Static site, instant load, no backend to fail |
| Easy to update | Content edits are one-file changes in `src/data/` |
| Zero running cost | Hosted free on GitHub Pages |

## Scope

**In scope:** static presentation of projects, skills, contact; light/responsive design.

**Out of scope:** CMS, backend, analytics pipelines, blog (content lives in data files).

## Maintenance
Adding a project or skill = edit `src/data/projects.ts` / `skills.ts` and push; CI deploys.
