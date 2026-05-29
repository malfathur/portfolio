# Portfolio — Akmal Fathurrahman

Personal portfolio site. Built with Vite + React + TypeScript + Tailwind CSS. Deployed to GitHub Pages.

**Live:** https://malfathur.github.io/portfolio

---

## Stack

| Layer | Tool |
|---|---|
| Language | TypeScript |
| Framework | Vite + React 18 |
| Styling | Tailwind CSS v3 |
| Icons | Lucide React |
| Hosting | GitHub Pages |

---

## Local Setup

```bash
git clone https://github.com/malfathur/malfathur.github.io.git
cd malfathur.github.io
npm install
npm run dev
```

Open http://localhost:5173

---

## Build & Preview

```bash
npm run build       # outputs to dist/
npm run preview     # preview production build locally
```

---

## Deployment

Auto-deploys to GitHub Pages on every push to `main` via `.github/workflows/deploy.yml`.

No manual steps required after initial setup (Settings → Pages → Source: GitHub Actions).

---

## Project Structure

```
src/
├── data/
│   ├── projects.ts   # project content
│   └── skills.ts     # skills/stack groups
├── components/       # one file per section
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   └── Contact.tsx
├── App.tsx
└── main.tsx
```

---

## Environment Variables

None. This is a fully static site with no backend or API calls.

See `.env.example` for reference.

---

## Development Process

Built with [Claude Code](https://claude.ai/code) as a coding assistant. All architecture decisions, content, and design direction by Akmal Fathurrahman. AI used to accelerate implementation — not to replace judgment.

---

## License

MIT — see `LICENSE`
