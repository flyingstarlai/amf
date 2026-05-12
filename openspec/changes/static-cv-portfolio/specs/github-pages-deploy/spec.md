## ADDED Requirements

### Requirement: GitHub Actions deployment workflow
The system SHALL include a GitHub Actions workflow that automatically builds and deploys the site to GitHub Pages on every push to the `main` branch.

#### Scenario: Push to main triggers deployment
- **WHEN** code is pushed to the `main` branch
- **THEN** GitHub Actions SHALL run `npm install`, `npm run build`, and deploy the `dist/` folder to GitHub Pages

### Requirement: Vite base path configuration
The Vite config SHALL set `base` to `'/'` for root deployment on `username.github.io`, or to the repository name if deployed as a project page.

#### Scenario: Assets load correctly on GitHub Pages
- **WHEN** the deployed site is accessed via browser
- **THEN** all CSS, JS, and image assets SHALL load without 404 errors

### Requirement: Build output
The system SHALL produce a production build in the `dist/` directory with minified HTML, CSS, and JS assets.

#### Scenario: Production build succeeds
- **WHEN** `npm run build` is executed
- **THEN** a `dist/` directory SHALL be created with `index.html` and bundled static assets
