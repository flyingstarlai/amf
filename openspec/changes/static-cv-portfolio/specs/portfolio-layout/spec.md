## ADDED Requirements

### Requirement: Single-page scroll layout
The system SHALL render all CV sections in a single scrollable page in this order: Navbar (fixed), Hero, Summary, Experience, Education & Skills (side by side on desktop), Footer.

#### Scenario: All sections render on one page
- **WHEN** the user loads the site
- **THEN** all sections SHALL be visible by scrolling without page navigation

### Requirement: Sticky navbar with section links
The system SHALL display a fixed navbar at the top with anchor links to each section. Clicking a link SHALL smoothly scroll to the corresponding section.

#### Scenario: Navbar scroll navigation
- **WHEN** the user clicks a navbar link (e.g., "Experience")
- **THEN** the page SHALL smoothly scroll to the Experience section

### Requirement: Responsive design
The system SHALL be responsive. On desktop (>=1024px), Education and Skills SHALL appear side by side. On mobile (<1024px), all sections SHALL stack vertically.

#### Scenario: Mobile layout
- **WHEN** the viewport is less than 1024px wide
- **THEN** Education and Skills sections SHALL stack vertically, each taking full width

#### Scenario: Desktop layout
- **WHEN** the viewport is 1024px or wider
- **THEN** Education and Skills SHALL appear side by side in a two-column grid

### Requirement: DaisyUI component usage
The system SHALL use the following DaisyUI components: `navbar` for navigation, `hero` for the landing section, `timeline` for work experience, `card` for education entries, `badge` for skill tags, `footer` for the page footer.

#### Scenario: Components use DaisyUI classes
- **WHEN** the page renders
- **THEN** each section SHALL use the corresponding DaisyUI component class (e.g., `timeline`, `card`, `badge`)

### Requirement: Hero section with photo and CTAs
The system SHALL display a Hero section with the profile photo (`image.webp`), full name, professional titles, and action buttons.

#### Scenario: Hero displays profile photo
- **WHEN** the Hero section renders
- **THEN** it SHALL show the profile photo with name and titles overlaid or adjacent

### Requirement: Footer with copyright
The system SHALL display a footer with copyright notice showing the current year and the owner's name.

#### Scenario: Footer displays copyright
- **WHEN** the page renders
- **THEN** the footer SHALL show "© <current-year> Andrian Muzakki Firmansyah"
