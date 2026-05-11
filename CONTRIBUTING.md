# Contributing to opensource-guide

Thanks for your interest in helping. This is a small guide-as-tool, so contributions can be small too.

## Quick start

```bash
git clone https://github.com/Felipeness/opensource-guide.git
cd opensource-guide
npm install
npm run dev
```

Open http://localhost:3000.

## Workflow

1. Open an issue first if the change is non-trivial (anything beyond a typo or single-component fix). Lets us align before code is written.
2. Fork, create a branch from `main`. Branch naming: `feat/short-description`, `fix/short-description`, `docs/short-description`.
3. Conventional commits: `feat: add language filter`, `fix: handle empty search`, `docs: clarify setup`.
4. PR description: link the issue, describe what changed and why.

## What's welcome

- Bug fixes (search returning wrong results, filters not working, accessibility issues)
- New filter capabilities (by topic, by recent activity, by community size)
- Translations beyond PT/EN
- UX improvements with screenshots before/after
- New "Recursos" entries (vetted aggregators or guides only — no self-promotion)

## What needs discussion first

- Changes to the data source (currently GitHub Search API)
- New routing or major UI restructuring
- Adding analytics or tracking

## Style

- TypeScript strict
- Tailwind for styling, follow existing patterns
- Tests with Vitest if logic is non-trivial
- ESLint + Prettier configured — `npm run lint` before pushing

## Code of conduct

Be respectful. Disagreements about technical decisions are fine; personal attacks are not. The maintainer reserves the right to close issues or PRs that don't follow this.

## License

By contributing you agree your contribution is licensed under the MIT License (see LICENSE).
