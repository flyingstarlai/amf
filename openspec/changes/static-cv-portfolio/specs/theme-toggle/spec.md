## ADDED Requirements

### Requirement: Theme toggle button
The system SHALL display a theme toggle button in the navbar that switches between light and dark DaisyUI themes.

#### Scenario: Toggle from light to dark
- **WHEN** the user clicks the theme toggle button while in light mode
- **THEN** the entire page SHALL switch to the dark DaisyUI theme immediately

#### Scenario: Toggle from dark to light
- **WHEN** the user clicks the theme toggle button while in dark mode
- **THEN** the entire page SHALL switch to the light DaisyUI theme immediately

### Requirement: Theme persistence
The system SHALL persist the user's theme preference in `localStorage` and restore it on subsequent visits.

#### Scenario: Theme persists across sessions
- **WHEN** the user sets a theme and later revisits the site
- **THEN** the site SHALL load with the previously selected theme

### Requirement: Default theme
The system SHALL default to the light theme when no preference is stored.

#### Scenario: First visit default
- **WHEN** a new user visits the site with no stored preference
- **THEN** the site SHALL render in light theme
