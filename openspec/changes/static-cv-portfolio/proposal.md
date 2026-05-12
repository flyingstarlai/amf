## Why

Andrian needs a professional online presence to showcase his 10+ years of experience in software development, AI engineering, and technology leadership. A static, single-page CV/portfolio site hosted on GitHub Pages provides a free, fast, and always-available way for recruiters and collaborators to learn about his background.

## What Changes

- Create a new React + TypeScript + Vite project from scratch
- Integrate Tailwind CSS with DaisyUI for component styling and theming
- Build a single-page scrollable CV with sections: Hero, Summary, Experience, Education, Skills, Footer
- Add a sticky navbar with smooth scroll navigation
- Support dark/light theme toggle using DaisyUI theme system
- Extract CV content into a separate data file for easy future updates
- Deploy to GitHub Pages via GitHub Actions CI/CD pipeline

## Capabilities

### New Capabilities
- `cv-content`: Structured CV data (profile, experience, education, skills) separated from UI components, sourced from `content.md`
- `portfolio-layout`: Single-page scrollable layout with sticky navbar, smooth scrolling, and responsive design using DaisyUI components
- `theme-toggle`: Dark/light mode switching using DaisyUI's built-in theme system
- `github-pages-deploy`: Automated deployment to GitHub Pages via GitHub Actions

### Modified Capabilities

## Impact

- New project: React + TypeScript + Vite scaffold in the workspace root
- New dependencies: `react`, `react-dom`, `tailwindcss`, `daisyui`, `@tailwindcss/vite`
- New GitHub Actions workflow (`.github/workflows/deploy.yml`)
- Existing `content.md` and `image.webp` will be used as content source
- Deployed site available at `username.github.io` or a custom domain
