# SkillForge

SkillForge is a portfolio-quality **Career & Skill Development Platform** built entirely with **HTML5, CSS3, Vanilla JavaScript and LocalStorage**.

## Features

- Landing page and frontend-only login simulation
- Dashboard with dynamic career statistics
- Career goals with CRUD operations
- Skill tracker with search, category filtering and sorting
- Interactive career roadmap with automatic completion percentage
- Course tracker with progress and status management
- Learning resource library with bookmarks
- Project portfolio tracker with technology tags and links
- Certificate tracker
- Daily / weekly / monthly / career goals
- Learning activity and streak calculation
- Progress analytics with CSS/JS visualizations
- Editable professional profile
- Dark/light mode
- JSON data export
- LocalStorage persistence
- Responsive desktop, tablet and mobile layouts
- Toast notifications, modals, badges, empty states and confirmation dialogs

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- LocalStorage
- Google Fonts CDN for Inter

No React, Vue, Angular, Bootstrap, Tailwind, Node.js, PHP or backend framework is required.

## Setup

1. Download or clone this repository.
2. Open the `SkillForge` folder.
3. Start with `index.html`.
4. Click **Get Started** and sign in with any valid email and a password of at least 6 characters.
5. The app creates realistic sample data on first launch.
6. All application data is stored in your browser's LocalStorage.

For the best development experience, use VS Code + Live Server. A backend is not required.

## LocalStorage

The main state is stored under:

`skillforge_v1`

The stored object contains user profile data, skills, roadmap, courses, resources, projects, certificates, goals, activity history, theme and authentication state.

## JavaScript Architecture

- `app.js` — shared state, LocalStorage CRUD, navigation, theme, modals, profile, settings, export, streak utilities
- `auth.js` — login validation and local authentication state
- `dashboard.js` — dashboard statistics and recent activity
- `skills.js` — skill CRUD/search/filter/sort
- `roadmap.js` — roadmap completion and progress
- `courses.js` — course CRUD/filter/sort/progress
- `resources.js` — resource CRUD/search/filter/bookmarks
- `projects.js` — project CRUD/filter
- `certificates.js` — certificate CRUD/search/filter
- `goals.js` — goal CRUD/filter/completion
- `analytics.js` — dynamic analytics visualizations

## Suggested GitHub Structure

```text
SkillForge/
├── index.html
├── login.html
├── dashboard.html
├── skills.html
├── roadmap.html
├── courses.html
├── resources.html
├── projects.html
├── certificates.html
├── goals.html
├── analytics.html
├── profile.html
├── settings.html
├── css/
├── js/
├── assets/
└── README.md
```

## Future Full-Stack Upgrade Plan

### Phase 1 — API and database
Replace LocalStorage with a REST API and PostgreSQL/MySQL.

Possible backend:
- Node.js
- Express.js
- PostgreSQL
- Prisma

Core entities:
- User
- Profile
- Skill
- Goal
- RoadmapStep
- Course
- Resource
- Project
- Certificate
- LearningActivity

### Phase 2 — Authentication
Add:
- Password hashing
- JWT/session authentication
- Email verification
- Password reset
- OAuth login

### Phase 3 — Cloud data
Move all user data to the database so it can sync across devices.

### Phase 4 — File storage
Allow certificate PDFs, profile photos and project screenshots using object storage.

### Phase 5 — Advanced analytics
Add:
- Weekly/monthly trends
- Skill gap analysis
- Course completion trends
- Goal success rates
- Calendar heatmap

### Phase 6 — Production frontend
The current UI can later be migrated to React/Next.js while preserving the existing feature model and design system.

### Phase 7 — Deployment
A possible production architecture:

```text
Frontend → React / Next.js
API      → Node.js / Express
Database → PostgreSQL
Storage  → Cloud object storage
Auth     → JWT / OAuth
Hosting  → Vercel + Render/Railway/AWS
```

## Portfolio Notes

When publishing the project, include:
- Screenshots of Dashboard, Skills, Roadmap and Analytics
- A short feature demo GIF/video
- Live demo link
- GitHub repository link
- Architecture / data-flow diagram
- A short section describing the LocalStorage-first architecture
