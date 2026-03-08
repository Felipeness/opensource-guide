<div align="center">

[![en](https://img.shields.io/badge/lang-English-blue)](README.en.md)

# Open Source Guide

**Encontre good first issues em projetos reais do GitHub.**

[**Ver ao vivo**](https://felipeness.github.io/opensource-guide/)

</div>

---

### O que e?

Uma ferramenta web para encontrar issues marcadas como "good first issue" no GitHub. Filtre por linguagem, label, popularidade, organizacao e mais — tudo em tempo real com a GitHub Search API.

### Funcionalidades

- **Filtros avancados** — linguagem, labels (iniciante/intermediario/avancado), stars, data, organizacao, repositorio
- **Atalhos de organizacao** — Microsoft, Meta, Google, Vercel, Apache, Mozilla e mais com um clique
- **Filtros de qualidade** — sem assignee, sem comentarios, sem PR vinculado, com descricao
- **Paginacao** — carregue mais resultados sem perder os anteriores
- **URL sincronizada** — todos os filtros ficam na URL, compartilhe buscas com outros
- **Bilingue** — interface em Portugues e Ingles
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

## Licenca

[MIT](LICENSE)
