<div align="center">

[![pt-br](https://img.shields.io/badge/lang-Portugu%C3%AAs-green)](README.md)

# Open Source Guide

**Find good first issues in real GitHub projects.**

[**Live demo**](https://felipeness.github.io/opensource-guide/)

</div>

---

### What is it?

A web tool to find issues labeled "good first issue" on GitHub. Filter by language, label, popularity, organization and more — all in real time using the GitHub Search API.

### Features

- **Advanced filters** — language, labels (beginner/intermediate/advanced), stars, date, organization, repository
- **Organization shortcuts** — Microsoft, Meta, Google, Vercel, Apache, Mozilla and more with one click
- **Quality filters** — no assignee, no comments, no linked PR, has description
- **Pagination** — load more results without losing previous ones
- **Synced URL** — all filters are stored in the URL, share searches with others
- **Bilingual** — interface in Portuguese and English
- **Visible rate limit** — track API usage in real time

### Stack

| Technology | Purpose |
|---|---|
| [Next.js 16](https://nextjs.org) | React framework with App Router |
| [TypeScript](https://typescriptlang.org) | Static typing |
| [Tailwind CSS v4](https://tailwindcss.com) | Styling |
| [next-intl](https://next-intl.dev) | Internationalization (PT/EN) |
| [nuqs](https://nuqs.47ng.com) | Filter state synced with URL |
| [Zod](https://zod.dev) | API response validation |

### Running locally

```bash
git clone https://github.com/Felipeness/opensource-guide.git
cd opensource-guide
npm install
npm run dev
```

Open `http://localhost:3000`.

### Increasing the rate limit

Without authentication the GitHub Search API allows 10 searches/min. To increase to 30/min, create a token and configure:

```bash
# .env.local
GITHUB_TOKEN=ghp_your_token_here
```

Generate the token at **GitHub > Settings > Developer Settings > Personal Access Tokens > Fine-grained tokens**. No scopes required.

### Project structure

```
src/
  app/
    [locale]/         # i18n routes (pt, en)
    api/search/       # GitHub API proxy
  components/         # Shared components (Hero, Footer, UI)
  features/
    search/           # Filters, search hook, query builder
    issues/           # Cards, grid, states (loading/empty/error)
    resources/        # External resource links
    tips/             # Contributor tips
  i18n/               # PT/EN messages, routing, config
  lib/                # Constants, Result type
```

---

## License

[MIT](LICENSE)
