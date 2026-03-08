# Como Encontrar e Contribuir para Projetos Open Source

> Um guia completo para quem quer começar a contribuir para projetos open source mas não sabe por onde começar.

**Idioma:** Portugues (BR) | [English version coming soon]

---

## Por que contribuir para Open Source?

- Aprende na pratica com codebases reais e profissionais
- Constroi um portfolio publico que recrutadores conseguem ver
- Recebe code review de desenvolvedores experientes
- Faz networking com a comunidade global de desenvolvimento
- Melhora habilidades de comunicacao, git, e trabalho em equipe

---

## Indice

1. [Encontrando issues para iniciantes](#1-encontrando-issues-para-iniciantes)
2. [Busca avancada no GitHub](#2-busca-avancada-no-github)
3. [Sites e ferramentas que agregam issues](#3-sites-e-ferramentas-que-agregam-issues)
4. [Usando o GitHub CLI](#4-usando-o-github-cli)
5. [Como escolher uma boa issue](#5-como-escolher-uma-boa-issue)
6. [Passo a passo da primeira contribuicao](#6-passo-a-passo-da-primeira-contribuicao)
7. [Labels comuns e o que significam](#7-labels-comuns-e-o-que-significam)
8. [Dicas para ter seu PR aceito](#8-dicas-para-ter-seu-pr-aceito)
9. [Projetos amigaveis para iniciantes](#9-projetos-amigaveis-para-iniciantes)
10. [Recursos adicionais](#10-recursos-adicionais)

---

## 1. Encontrando issues para iniciantes

A maioria dos projetos open source usa **labels** para marcar issues que sao boas para quem esta comecando. As mais comuns:

| Label | Descricao |
|-------|-----------|
| `good first issue` | A label oficial recomendada pelo GitHub para iniciantes |
| `first-timers-only` | Issues reservadas para quem nunca contribuiu antes |
| `beginner` | Issues de dificuldade baixa |
| `easy` | Issues simples |
| `help wanted` | O projeto precisa de ajuda da comunidade |
| `up-for-grabs` | Issues abertas para qualquer pessoa pegar |
| `starter` | Issues para comecar |
| `low-hanging fruit` | Coisas simples de resolver |
| `contributions welcome` | Contribuicoes sao bem-vindas |

---

## 2. Busca avancada no GitHub

O GitHub tem uma busca poderosa que pouca gente usa. Aqui estao as queries mais uteis:

### Busca basica por good first issues

```
label:"good first issue" is:open is:issue
```

[Clique aqui para executar essa busca](https://github.com/issues?q=label%3A%22good+first+issue%22+is%3Aopen+is%3Aissue)

### Filtrar por linguagem

```
label:"good first issue" is:open is:issue language:python
```

```
label:"good first issue" is:open is:issue language:javascript
```

```
label:"good first issue" is:open is:issue language:typescript
```

```
label:"good first issue" is:open is:issue language:go
```

```
label:"good first issue" is:open is:issue language:java
```

```
label:"good first issue" is:open is:issue language:rust
```

### Filtrar por popularidade do projeto (evita projetos abandonados)

```
label:"good first issue" is:open is:issue stars:>100
```

```
label:"good first issue" is:open is:issue stars:>1000
```

### Filtrar por atividade recente

```
label:"good first issue" is:open is:issue stars:>100 sort:updated
```

### Combinar filtros (exemplo: TypeScript + projeto popular + recente)

```
label:"good first issue" is:open is:issue language:typescript stars:>500 sort:updated
```

### Excluir issues que ja tem alguem trabalhando

```
label:"good first issue" is:open is:issue no:assignee language:python stars:>100
```

> **Dica:** o filtro `no:assignee` mostra apenas issues que ainda nao foram atribuidas a ninguem.

### Buscar por multiplas labels

```
label:"good first issue" label:"help wanted" is:open is:issue
```

### Buscar em uma organizacao especifica

```
org:facebook label:"good first issue" is:open is:issue
```

```
org:microsoft label:"good first issue" is:open is:issue
```

```
org:google label:"good first issue" is:open is:issue
```

### Buscar em um repositorio especifico

```
repo:facebook/react label:"good first issue" is:open is:issue
```

### Tabela de referencia rapida dos filtros

| Filtro | O que faz | Exemplo |
|--------|-----------|---------|
| `is:open` | Apenas issues abertas | `is:open` |
| `is:issue` | Apenas issues (nao PRs) | `is:issue` |
| `label:"X"` | Filtra por label | `label:"good first issue"` |
| `language:X` | Filtra por linguagem | `language:python` |
| `stars:>N` | Projetos com mais de N stars | `stars:>500` |
| `sort:updated` | Ordena por atualizacao recente | `sort:updated` |
| `no:assignee` | Issues sem dono | `no:assignee` |
| `org:X` | Dentro de uma organizacao | `org:microsoft` |
| `repo:X/Y` | Dentro de um repo especifico | `repo:vercel/next.js` |
| `created:>YYYY-MM-DD` | Criada apos uma data | `created:>2025-01-01` |
| `comments:0` | Sem comentarios (ninguem pegou ainda) | `comments:0` |

---

## 3. Sites e ferramentas que agregam issues

Esses sites fazem o trabalho de buscar e organizar issues de varios projetos:

### Agregadores de issues

| Site | Descricao | Link |
|------|-----------|------|
| **Good First Issue** | Agrega issues filtradas por linguagem/framework | [goodfirstissue.dev](https://goodfirstissue.dev) |
| **Good First Issues** | Busca com filtros por tecnologia | [goodfirstissues.com](https://goodfirstissues.com) |
| **Up For Grabs** | Lista projetos com issues para iniciantes | [up-for-grabs.net](https://up-for-grabs.net) |
| **First Timers Only** | Curadoria para primeira contribuicao | [firsttimersonly.com](https://www.firsttimersonly.com) |
| **CodeTriage** | Recebe issues por email dos repos que voce escolher | [codetriage.com](https://www.codetriage.com) |
| **Ovio** | Busca por skill, linguagem, e dificuldade | [ovio.org](https://ovio.org) |
| **First Contributions** | Tutorial interativo de como fazer o primeiro PR | [firstcontributions.github.io](https://firstcontributions.github.io) |
| **Awesome for Beginners** | Lista curada de projetos amigaveis | [github.com/MunGell/awesome-for-beginners](https://github.com/MunGell/awesome-for-beginners) |
| **Open Source Friday** | Iniciativa do GitHub para contribuir nas sextas | [opensourcefriday.com](https://opensourcefriday.com) |

### Ferramentas de descoberta

| Ferramenta | Descricao | Link |
|------------|-----------|------|
| **GitHub Explore** | Secao "Get started contributing" do GitHub | [github.com/explore](https://github.com/explore) |
| **GitHub Topics** | Explore projetos por topico | [github.com/topics](https://github.com/topics) |
| **GitHub Trending** | Repositorios em alta | [github.com/trending](https://github.com/trending) |

---

## 4. Usando o GitHub CLI

Se voce usa o terminal, o [GitHub CLI (`gh`)](https://cli.github.com/) permite buscar issues direto da linha de comando:

### Instalacao

```bash
# Windows (winget)
winget install GitHub.cli

# macOS (Homebrew)
brew install gh

# Linux (apt)
sudo apt install gh

# Apos instalar, autentique:
gh auth login
```

### Buscando good first issues

```bash
# Busca global por linguagem
gh search issues --label="good first issue" --language=typescript --state=open --limit=20

# Busca em um repo especifico
gh search issues --label="good first issue" --repo=vercel/next.js --state=open

# Busca com ordenacao por atualizacao recente
gh search issues --label="good first issue" --language=python --state=open --sort=updated --limit=30

# Busca com multiplas labels
gh search issues --label="good first issue" --label="help wanted" --state=open --limit=20

# Busca em projetos populares (mais de 500 stars)
gh search issues --label="good first issue" --language=go --state=open --stars=">500"

# Ver detalhes de uma issue especifica
gh issue view 123 --repo=facebook/react

# Listar issues de um repo que voce ja clonou (rode dentro do repo)
gh issue list --label="good first issue" --state=open
```

### Alias util para criar um atalho

```bash
# Cria um alias para buscar good first issues rapidamente
gh alias set gfi 'search issues --label="good first issue" --state=open --sort=updated'

# Agora voce pode usar:
gh gfi --language=python --limit=20
```

---

## 5. Como escolher uma boa issue

Nem toda "good first issue" e realmente boa. Aqui esta um checklist:

### Sinais positivos (pegar!)

- [ ] Issue tem descricao clara do problema e do resultado esperado
- [ ] Tem instrucoes de como reproduzir (se for bug) ou o que implementar (se for feature)
- [ ] O projeto tem um `CONTRIBUTING.md` com instrucoes
- [ ] O repo teve commits recentes (ultimo mes)
- [ ] Outras PRs estao sendo revisadas e mergeadas
- [ ] Ninguem esta atribuido (assignee) e nao ha comentario dizendo "estou trabalhando nisso"
- [ ] O maintainer respondeu na issue e esta ativo

### Sinais negativos (evitar)

- [ ] Issue aberta ha mais de 1 ano sem comentarios recentes
- [ ] O repo nao tem commits ha meses
- [ ] Tem alguem ja trabalhando mas nao finalizou (verifique os comentarios)
- [ ] A descricao e vaga: "melhorar performance" sem especificar onde ou como
- [ ] O projeto nao tem CI/testes (dificil saber se seu PR vai quebrar algo)
- [ ] PRs de outros contribuidores ficam semanas sem review

### Como verificar rapidamente a saude de um projeto

```bash
# Ver atividade recente do repo
gh repo view OWNER/REPO

# Ver PRs recentes (estao sendo mergeadas?)
gh pr list --repo=OWNER/REPO --state=merged --limit=10

# Ver issues recentes (maintainers respondem?)
gh issue list --repo=OWNER/REPO --state=closed --limit=10
```

---

## 6. Passo a passo da primeira contribuicao

### 1. Escolha a issue

Use as ferramentas acima para encontrar uma issue que te interesse.

### 2. Comunique que voce vai trabalhar nela

Deixe um comentario na issue:

> "Hi! I'd like to work on this issue. Could you assign it to me?"

Isso evita que outra pessoa comece ao mesmo tempo.

### 3. Fork o repositorio

```bash
# Via CLI
gh repo fork OWNER/REPO --clone

# Ou pelo site: clique no botao "Fork" no GitHub
```

### 4. Crie uma branch

```bash
cd REPO
git checkout -b fix/descricao-curta-da-issue
```

Convencoes comuns de nomes de branch:

| Prefixo | Quando usar | Exemplo |
|---------|-------------|---------|
| `fix/` | Correcao de bug | `fix/typo-in-readme` |
| `feat/` | Nova feature | `feat/add-dark-mode` |
| `docs/` | Documentacao | `docs/update-install-guide` |
| `refactor/` | Refatoracao | `refactor/simplify-parser` |

### 5. Faca as alteracoes

- Leia o `CONTRIBUTING.md` do projeto
- Siga o estilo de codigo existente
- Escreva testes se o projeto tiver testes
- Faca commits pequenos e descritivos

### 6. Envie o PR

```bash
# Suba sua branch
git push origin fix/descricao-curta-da-issue

# Crie o PR
gh pr create --title "fix: descricao curta" --body "Fixes #NUMERO_DA_ISSUE

## O que foi feito
- Descricao das alteracoes

## Como testar
- Passos para testar"
```

### 7. Responda ao code review

- Seja educado e receptivo ao feedback
- Faca as alteracoes pedidas rapidamente
- Agradeca o review

---

## 7. Labels comuns e o que significam

Alem das labels de dificuldade, e util conhecer outras labels comuns:

| Label | Significado |
|-------|-------------|
| `bug` | Algo esta quebrado |
| `enhancement` | Melhoria em algo existente |
| `feature` | Feature nova |
| `documentation` | Melhorias na documentacao |
| `question` | Duvida (geralmente nao e para resolver com PR) |
| `wontfix` | Nao vai ser resolvido (evitar) |
| `duplicate` | Duplicada de outra issue |
| `invalid` | Nao e um problema valido |
| `hacktoberfest` | Participa do Hacktoberfest (outubro) |
| `priority: high` | Prioridade alta do projeto |
| `needs triage` | Ainda nao foi avaliada |
| `blocked` | Depende de outra coisa (evitar) |

---

## 8. Dicas para ter seu PR aceito

1. **Leia o CONTRIBUTING.md** — cada projeto tem suas regras
2. **Uma mudanca por PR** — nao misture correcao de bug com refatoracao
3. **Siga o estilo do projeto** — use o mesmo linter, formatacao, convencoes
4. **Escreva testes** — se o projeto tem testes, adicione testes para suas mudancas
5. **Commit messages claros** — siga a convencao do projeto (geralmente Conventional Commits)
6. **PR description completo** — explique O QUE mudou e POR QUE
7. **Referencie a issue** — use `Fixes #123` ou `Closes #123` na descricao
8. **Mantenha o PR pequeno** — PRs com menos de 200 linhas sao revisados mais rapido
9. **Responda rapido** — se pedirem mudancas, faca em 1-2 dias
10. **Nao leve feedback para o pessoal** — code review e sobre o codigo, nao sobre voce

---

## 9. Projetos amigaveis para iniciantes

Esses projetos sao conhecidos por serem receptivos a novos contribuidores:

### JavaScript / TypeScript

- [freeCodeCamp](https://github.com/freeCodeCamp/freeCodeCamp) — Plataforma de ensino de programacao
- [Next.js](https://github.com/vercel/next.js) — Framework React
- [Svelte](https://github.com/sveltejs/svelte) — Framework de UI
- [Deno](https://github.com/denoland/deno) — Runtime JavaScript/TypeScript

### Python

- [scikit-learn](https://github.com/scikit-learn/scikit-learn) — Machine Learning
- [FastAPI](https://github.com/tiangolo/fastapi) — Framework web
- [Django](https://github.com/django/django) — Framework web
- [HTTPie](https://github.com/httpie/cli) — Cliente HTTP para terminal

### Go

- [Hugo](https://github.com/gohugoio/hugo) — Gerador de sites estaticos
- [Kubernetes](https://github.com/kubernetes/kubernetes) — Orquestracao de containers
- [Terraform](https://github.com/hashicorp/terraform) — Infrastructure as Code

### Rust

- [Rust (o compilador)](https://github.com/rust-lang/rust) — A propria linguagem
- [Servo](https://github.com/servo/servo) — Motor de renderizacao web

### Documentacao (nao precisa saber programar!)

- [MDN Web Docs](https://github.com/mdn/content) — Documentacao web da Mozilla
- [freeCodeCamp](https://github.com/freeCodeCamp/freeCodeCamp) — Traducoes e artigos
- [The Odin Project](https://github.com/TheOdinProject/curriculum) — Curriculo de programacao

---

## 10. Recursos adicionais

### Guias e tutoriais

- [GitHub: How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)
- [First Contributions (tutorial interativo)](https://github.com/firstcontributions/first-contributions)
- [Git e GitHub para Iniciantes (em PT-BR)](https://www.udemy.com/course/git-e-github-para-iniciantes/)

### Eventos

- **Hacktoberfest** (outubro) — Contribua para projetos e ganhe brindes. [hacktoberfest.com](https://hacktoberfest.com)
- **Google Summer of Code** — Programa pago para estudantes contribuirem no verao. [summerofcode.withgoogle.com](https://summerofcode.withgoogle.com)
- **MLH Fellowship** — Fellowship para contribuir em open source. [fellowship.mlh.io](https://fellowship.mlh.io)

### Comunidades

- [DEV Community](https://dev.to/) — Artigos e discussoes sobre open source
- [Reddit r/opensource](https://www.reddit.com/r/opensource/) — Comunidade no Reddit
- [Discord de projetos] — Muitos projetos tem Discord/Slack proprio (procure no README do projeto)

---

## Contribuindo para este guia

Encontrou um link quebrado? Conhece um site que nao esta listado? Abra uma issue ou envie um PR!

Este repositorio tambem aceita `good first issues` — meta, ne?

---

## Licenca

[MIT](LICENSE)
