## Context

Fresh workspace with no existing code. Content source is `content.md` (CV text) and `image.webp` (profile photo) at the workspace root. The site will be a single-page scrollable CV for Andrian Muzakki Firmansyah, hosted for free on GitHub Pages.

## Goals / Non-Goals

**Goals:**
- Professional, responsive single-page CV site
- Fast load times (static build, no runtime API calls)
- Easy content updates (data separated from components)
- Automated deployment on push to main
- Dark/light theme support

**Non-Goals:**
- Blog or CMS functionality
- Contact form with backend (use mailto: links instead)
- Multi-page routing
- Admin panel or dynamic content management
- SEO optimization beyond basic meta tags

## Decisions

### 1. React + TypeScript + Vite over plain HTML
**Choice:** React + TypeScript + Vite
**Rationale:** Component reusability, typed data structures for CV content, and scalability if features are added later. Vite provides fast builds and native TypeScript support.
**Alternatives considered:** Plain HTML (simpler but no component model), Next.js (overkill for static single-page).

### 2. DaisyUI for UI components
**Choice:** DaisyUI on top of Tailwind CSS
**Rationale:** Provides pre-built semantic components (timeline, card, badge, hero, navbar, footer) that map directly to CV sections. Built-in theme system with dark/light toggle.
**Alternatives considered:** Headless UI (more work), Material UI (heavier, opinionated), Flowbite (less comprehensive).

### 3. Separate data file (`src/data.ts`)
**Choice:** All CV content in a single typed data file
**Rationale:** Editing CV content means changing one file, not hunting through JSX. TypeScript types ensure data structure consistency.
**Alternatives considered:** JSON files (no type safety), hardcoded in components (hard to maintain), CMS (overkill).

### 4. GitHub Pages with GitHub Actions
**Choice:** Deploy via `actions/deploy-pages` on push to main
**Rationale:** Free hosting, automatic SSL, integrated with the repository. Vite builds static assets, GitHub Actions deploys them.
**Alternatives considered:** Netlify (external dependency), Vercel (external), manual deployment (error-prone).

### 5. Project structure — components by section
**Choice:** One component per CV section + shared App layout
**Rationale:** Each section is self-contained, easy to reorder or hide. Small scope means flat component structure is sufficient.
**Alternatives considered:** Feature-based folders (overkill for single page), single file (hard to read).

## Risks / Trade-offs

- **GitHub Pages SPA routing** → SPA returns 404 on direct URL access. Mitigation: use single-page scroll with hash anchors, no client-side routing needed.
- **Tailwind CSS bundle size** → Unused styles could bloat output. Mitigation: Vite + Tailwind purges unused styles in production build automatically.
- **No offline support** → Site requires network. Mitigation: acceptable for a CV site, could add a service worker later if needed.
- **DaisyUI version pinning** → Theme classes may change between major versions. Mitigation: pin DaisyUI version in package.json.
