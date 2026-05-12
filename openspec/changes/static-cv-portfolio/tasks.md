## 1. Project Setup

- [x] 1.1 Scaffold React + TypeScript + Vite project with `npm create vite@latest . -- --template react-ts`
- [x] 1.2 Install dependencies: `tailwindcss`, `@tailwindcss/vite`, `daisyui`
- [x] 1.3 Configure Tailwind CSS with `@tailwindcss/vite` plugin in `vite.config.ts`
- [x] 1.4 Configure Vite base path for GitHub Pages deployment
- [x] 1.5 Set up `src/index.css` with Tailwind directives and DaisyUI import
- [x] 1.6 Move `image.webp` to `public/` directory

## 2. Data Layer

- [x] 2.1 Create `src/data.ts` with TypeScript interfaces for Profile, Experience, Education, and Skills
- [x] 2.2 Populate `data.ts` with all CV content from `content.md`
- [x] 2.3 Export typed constants: `profile`, `experience`, `education`, `skills`

## 3. Layout & Navigation

- [x] 3.1 Create `Navbar.tsx` component with DaisyUI `navbar` class, fixed positioning, section anchor links, and theme toggle button
- [x] 3.2 Create `Footer.tsx` component with DaisyUI `footer` class and copyright notice
- [x] 3.3 Update `App.tsx` to compose all sections in correct order with `scroll-behavior: smooth` on the HTML element

## 4. CV Section Components

- [x] 4.1 Create `Hero.tsx` with DaisyUI `hero` component, profile photo, name, titles, and CTA buttons
- [x] 4.2 Create `Summary.tsx` component rendering the professional summary paragraph
- [x] 4.3 Create `Experience.tsx` with DaisyUI `timeline` component rendering each job entry
- [x] 4.4 Create `Education.tsx` with DaisyUI `card` components for each education entry
- [x] 4.5 Create `Skills.tsx` with DaisyUI `badge` components for each skill

## 5. Theme Toggle

- [x] 5.1 Implement theme toggle logic: read/write `localStorage`, apply `data-theme` attribute to `document.documentElement`
- [x] 5.2 Add sun/moon icon toggle button in the navbar
- [x] 5.3 Default to light theme on first visit

## 6. Responsive Design

- [x] 6.1 Ensure Education and Skills sections render side by side on desktop (>=1024px) using DaisyUI/Tailwind grid or flex utilities
- [x] 6.2 Ensure all sections stack vertically on mobile (<1024px)
- [x] 6.3 Verify navbar collapses or adapts on small screens

## 7. GitHub Pages Deployment

- [x] 7.1 Create `.github/workflows/deploy.yml` with GitHub Actions workflow for building and deploying to GitHub Pages
- [x] 7.2 Configure workflow to trigger on push to `main`, run `npm install`, `npm run build`, and deploy `dist/`
- [x] 7.3 Verify production build with `npm run build` succeeds locally
