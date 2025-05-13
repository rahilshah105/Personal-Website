# Personal-Website

**Code for my personal portfolio website** built with [Next.js](https://nextjs.org) (App Router) and [TypeScript](https://www.typescriptlang.org/), styled with CSS Modules and PostCSS, and animated using [GSAP](https://greensock.com/gsap/) for smooth transitions.

[![Vercel](https://img.shields.io/badge/deploy-on%20vercel-000000?style=flat-square&logo=vercel)](https://vercel.com/new/git/external?repository-url=https://github.com/rahilshah105/Personal-Website)  
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

---

## Table of Contents

- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Getting Started](#getting-started)  
  - [Prerequisites](#prerequisites)  
  - [Installation](#installation)  
  - [Development](#development)  
  - [Building](#building)  
  - [Deployment](#deployment)  
- [Contributing](#contributing)  
- [License](#license)  
- [Contact](#contact)  

---

## Features

- **App Router + Dynamic Routes**: Generates project pages via `[slug]` segments and `generateStaticParams()`.  
- **GSAP Animations**: Page entry, scroll-triggered, and timeline animations for polished UX.  
- **Responsive Design**: Mobile-first navbars, aside navigation on desktop, and fluid layouts.  
- **Scoped Styling**: CSS Modules + PostCSS for maintainable, modern CSS with autoprefixing.  
- **TypeScript**: Strong typing with interfaces for props and data models.  
- **Vercel Deployment**: Zero-config CI/CD, preview URLs, and global CDN out of the box.  

---

## Tech Stack

- **Next.js** (App Router, Server & Client Components)  
- **React** (functional components & hooks)  
- **TypeScript** (interfaces, type safety)  
- **GSAP** (animation engine & ScrollTrigger plugin)  
- **CSS Modules** (locally scoped `.module.css`)  
- **PostCSS** (modern CSS features + autoprefixer)  
- **Vercel** (hosting & continuous deployment)  
- **ESLint** & **Prettier** (linting & formatting)  

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v16 or higher  
- [npm](https://www.npmjs.com/) (or [Yarn](https://yarnpkg.com/) / [pnpm](https://pnpm.io/))  

### Installation

1. **Clone the repo**  
   ```bash
   git clone https://github.com/rahilshah105/Personal-Website.git
   cd Personal-Website
   ```

2. **Install dependencies**  
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.  
Edit files under `app/`, `components/`, or `styles/` — the page will auto-reload.

---

### Building

Create an optimized production build:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

Preview the production build locally:

```bash
npm run start
# or
yarn start
# or
pnpm start
```

---

### Deployment

This project is designed for Vercel:

- Push your code to a GitHub repository.  
- Import the repo into [Vercel](https://vercel.com/new).  
- Vercel will auto-detect Next.js and deploy.

Alternatively, deploy manually:

```bash
npm install -g vercel
vercel
```

Follow the prompts to complete deployment.

---

## Contributing

1. **Fork** this repository  
2. **Create a branch**: `git checkout -b feature/YourFeature`  
3. **Commit** your changes: `git commit -m "Add some feature"`  
4. **Push** to the branch: `git push origin feature/YourFeature`  
5. **Open a Pull Request** describing your changes

Please ensure all linting and type checks pass before submitting.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

🔗 **Live Site**: [https://personal-website-chi-cyan-52.vercel.app](https://personal-website-chi-cyan-52.vercel.app)  
🌐 **Portfolio**: [https://rahilshah.com](https://rahilshah.com)  
✉️ **Email**: [superrahil10@gmail.com](mailto:superrahil10@gmail.com)  
🐙 **GitHub**: [https://github.com/rahilshah105](https://github.com/rahilshah105)
