# Operations Documentation

Audience: whoever updates and deploys the site.

## Local
```bash
npm install
npm run dev        # http://localhost:5173
```

## Update content
- Add/edit a project → `src/data/projects.ts`
- Add/edit a skill group → `src/data/skills.ts`
- Adjust a section's layout → the matching file in `src/components/`

## Deployment (GitHub Pages)
- **Automatic:** every push to `main` triggers `.github/workflows/deploy.yml`, which builds and
  publishes to GitHub Pages. No manual steps.
- One-time setup: Repo → Settings → Pages → Source: GitHub Actions.

## Credentials
None. No secrets, no backend.

## Troubleshooting
| Symptom | Cause | Fix |
|---|---|---|
| Site not updating | Pages source misconfigured | Settings → Pages → Source: GitHub Actions |
| Build fails in CI | TypeScript/lint error | Run `npm run build` locally to reproduce |
| 404 on load | Base path / Pages URL mismatch | Check Vite `base` config vs the Pages URL |

## Rollback
Revert the offending commit on `main`; CI redeploys the previous good build.
