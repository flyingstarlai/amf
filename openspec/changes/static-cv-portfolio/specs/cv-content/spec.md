## ADDED Requirements

### Requirement: CV data structure
The system SHALL export a typed `data.ts` file containing all CV content: profile (name, titles, photo path, summary), experience (array of jobs with title, company, location, period, description, skills), education (array with school, degree, period), and skills (array of strings).

#### Scenario: Data file contains all CV sections
- **WHEN** the application imports from `data.ts`
- **THEN** it SHALL receive `profile`, `experience`, `education`, and `skills` exports with fully typed structures

### Requirement: Profile data
The system SHALL include profile data with name, array of professional titles, photo path pointing to `image.webp`, and a professional summary paragraph.

#### Scenario: Profile renders from data
- **WHEN** the Hero component reads profile data
- **THEN** it SHALL display the name, all titles, photo, and summary from the data source

### Requirement: Experience data with chronological order
The system SHALL store work experience as an array with each entry containing title, company, employment type, location, period (start/end), bullet-point descriptions, and skill tags. The array SHALL be ordered most recent first.

#### Scenario: Experience renders as timeline
- **WHEN** the Experience component reads experience data
- **THEN** it SHALL render each job in reverse chronological order with title, company, period, descriptions, and skill badges

### Requirement: Education data
The system SHALL store education as an array with school name, degree/field, and period.

#### Scenario: Education renders from data
- **WHEN** the Education component reads education data
- **THEN** it SHALL display each institution with degree and period

### Requirement: Skills data
The system SHALL store technical skills as an array of strings matching the content source.

#### Scenario: Skills render as badges
- **WHEN** the Skills component reads skills data
- **THEN** it SHALL display each skill as a DaisyUI badge
