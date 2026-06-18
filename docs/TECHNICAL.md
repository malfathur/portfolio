# Technical Documentation

Audience: engineers maintaining the site.

## Architecture
A fully static single-page site — no backend, no API calls.

```
Vite + React + TypeScript + Tailwind
   src/data/*.ts  → content (projects, skills)
   src/components/*.tsx → one file per section
   App.tsx → composes sections;  main.tsx → entry
   build → dist/ → GitHub Pages (via Actions)
```

## Stack
TypeScript · Vite + React 18 · Tailwind CSS v3 · Lucide React (icons) · GitHub Pages hosting.

## Module map
| Path | Responsibility |
|---|---|
| `src/data/projects.ts` | project content (data-driven cards) |
| `src/data/skills.ts` | skills / stack groups |
| `src/components/` | `Nav`, `Hero`, `About`, `Projects`, `Skills`, `Contact` |
| `src/App.tsx` | composes the sections |
| `src/main.tsx` | app entry |

## Content vs presentation
Content is separated into `src/data/` so copy changes never touch component logic. Add a project
by appending to `projects.ts`; add a skill group in `skills.ts`.

## Environment
None — fully static, no backend or secrets. `.env.example` exists for convention only.

## Build
```bash
npm run dev       # local dev (http://localhost:5173)
npm run build     # → dist/
npm run preview   # preview production build
```
