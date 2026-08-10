# Taynara Souza — Portfólio

> Portfólio profissional desenvolvido com React, TypeScript e Tailwind CSS — apresentando projetos, habilidades e trajetória.

![Status](https://img.shields.io/badge/status-online-22c55e)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-38bdf8?logo=tailwindcss)
![Vite](https://img.shields.io/badge/build-Vite-646CFF?logo=vite)
![License](https://img.shields.io/badge/license-MIT-green)

🌐 **[Ver online](https://taynarasouza.vercel.app/)**

## Visão do Projeto

Portfólio pessoal desenvolvido para apresentar projetos, stack técnica e trajetória profissional. Construído com as tecnologias modernas do ecossistema React, com foco em performance, acessibilidade e design limpo.

### O que o projeto apresenta

- Projetos desenvolvidos com links e descrições.
- Stack técnica e habilidades.
- Trajetória profissional e formação.
- Contato por links diretos (e-mail e redes) — não há formulário de envio.
- Design responsivo com animações suaves.

## Stack Técnica

- **Framework:** React 18
- **Linguagem:** TypeScript
- **Estilo:** Tailwind CSS
- **Build:** Vite
- **Deploy:** Vercel

## Estrutura do Projeto

```text
.
├─ src/
│  ├─ components/     ← Header, Hero, About, Skills, Experience, Projects, Contact, Footer
│  ├─ lib/            ← cliente Supabase (presente, mas não utilizado hoje)
│  ├─ App.tsx         ← composição das seções em página única
│  ├─ main.tsx        ← entry point
│  └─ index.css       ← Tailwind + estilos globais
├─ index.html
├─ vite.config.ts
├─ tailwind.config.js
├─ postcss.config.js
├─ eslint.config.js
└─ tsconfig.json · tsconfig.app.json · tsconfig.node.json
```

É uma página única: `App.tsx` empilha as seções de `components/`. Não há roteamento nem pasta `public/`.

## Pré-requisitos

- **Node.js `^20.19.0` ou `>=22.12.0`** — exigência do Vite 7
- npm 10+

## Como Executar

```bash
npm install
npm run dev
```

Acesse: `http://localhost:5173`

Demais scripts:

| Comando | O que faz |
|---|---|
| `npm run build` | Build de produção em `dist/` |
| `npm run preview` | Serve o build local para conferência |
| `npm run lint` | ESLint em todo o projeto |
| `npm run typecheck` | `tsc --noEmit` sobre `tsconfig.app.json` |

## Deploy

Publicado na **Vercel** em [taynarasouza.vercel.app](https://taynarasouza.vercel.app/), com deploy automático a cada push na `main`.

O repositório também tem **GitHub Pages** habilitado, servindo a mesma aplicação em `taysouzaa.github.io/Taynara.Souza/`. A Vercel é o endereço oficial; o Pages é secundário.

## Licença

MIT — veja [LICENSE](./LICENSE)