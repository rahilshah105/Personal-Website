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
