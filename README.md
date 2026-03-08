<div align="center">

# Open Source Guide

**Encontre good first issues em projetos reais do GitHub.**

**Find good first issues in real GitHub projects.**

[Portugues](#portugues) | [English](#english)

</div>

---

<a id="portugues"></a>

## Portugues

### O que e?

Uma ferramenta web para encontrar issues marcadas como "good first issue" no GitHub. Filtre por linguagem, label, popularidade, organizacao e mais — tudo em tempo real com a GitHub Search API.

### Funcionalidades

- **Filtros avancados** — linguagem, labels (iniciante/intermediario/avancado), stars, data, organizacao, repositorio
- **Atalhos de organizacao** — Microsoft, Meta, Google, Vercel, Apache, Mozilla e mais com um clique
- **Filtros de qualidade** — sem assignee, sem comentarios, sem PR vinculado, com descricao
- **Paginacao** — carregue mais resultados sem perder os anteriores
- **URL sincronizada** — todos os filtros ficam na URL, compartilhe buscas com outros
- **Bilíngue** — interface em Portugues e Ingles
- **Rate limit visivel** — acompanhe o uso da API em tempo real

### Stack

| Tecnologia | Uso |
|---|---|
| [Next.js 16](https://nextjs.org) | Framework React com App Router |
| [TypeScript](https://typescriptlang.org) | Tipagem estatica |
| [Tailwind CSS v4](https://tailwindcss.com) | Estilizacao |
| [next-intl](https://next-intl.dev) | Internacionalizacao (PT/EN) |
| [nuqs](https://nuqs.47ng.com) | Estado dos filtros sincronizado com a URL |
| [Zod](https://zod.dev) | Validacao da resposta da API |

### Rodando localmente

```bash
git clone https://github.com/Felipeness/opensource-guide.git
cd opensource-guide
npm install
npm run dev
```

Acesse `http://localhost:3000`.

### Aumentando o rate limit

Sem autenticacao a GitHub Search API permite 10 buscas/min. Para aumentar para 30/min, crie um token e configure:

```bash
# .env.local
GITHUB_TOKEN=ghp_seu_token_aqui
```

Gere o token em **GitHub > Settings > Developer Settings > Personal Access Tokens > Fine-grained tokens**. Nenhum scope e necessario.

### Estrutura do projeto

```
src/
  app/
    [locale]/         # Rotas com i18n (pt, en)
    api/search/       # Proxy para GitHub API
  components/         # Componentes compartilhados (Hero, Footer, UI)
  features/
    search/           # Filtros, hook de busca, query builder
    issues/           # Cards, grid, estados (loading/empty/error)
    resources/        # Links para recursos externos
    tips/             # Dicas para contribuidores
  i18n/               # Mensagens PT/EN, routing, config
  lib/                # Constantes, Result type
```

---

<a id="english"></a>

## English

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
