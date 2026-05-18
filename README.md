# Nilson Marques — Portfolio

Personal portfolio site built with **Next.js 14 · TypeScript · Tailwind CSS**.

## Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS + custom design tokens
- **Fonts**: Syne (display) + JetBrains Mono (code)

## Getting started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project structure

```
portfolio/
├── app/
│   ├── layout.tsx       # Root layout + metadata
│   ├── page.tsx         # Home page (assembles sections)
│   └── globals.css      # Tailwind + font imports
├── components/
│   ├── Navbar.tsx       # Fixed nav + dark mode toggle
│   ├── Hero.tsx         # Typewriter hero section
│   ├── Skills.tsx       # Filterable skills grid
│   ├── Projects.tsx     # Project cards
│   ├── Experience.tsx   # Work + education + certs
│   ├── Contact.tsx      # Contact CTA
│   └── Footer.tsx
└── lib/
    ├── data.ts          # All your real portfolio data
    └── types.ts         # TypeScript interfaces
```

## Customising

All your data lives in `lib/data.ts` — update projects, skills,
certifications, and contact info there. Types are in `lib/types.ts`.

## Deploying

```bash
# Vercel (recommended — free)
npx vercel

# Or build for any host
npm run build
npm start
```
