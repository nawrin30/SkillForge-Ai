 ## SkillForge
Build Skills. Track Progress. Shape Your Career.

SkillForge is a modern, responsive Career & Skill Development Platform designed for students and early-career developers who want to organize their learning journey, track career goals, manage projects, and measure progress from one place.
Built entirely with HTML5, CSS3, Vanilla JavaScript, and LocalStorage — no backend or frontend framework required.
## Live Link: https://nawrin30.github.io/SkillForge-Ai/
## Overview
SkillForge works as a personal career development dashboard where users can:
- Set and manage career goals
- Track technical and soft skills
- Build an interactive career roadmap
- Manage courses and learning resources
- Track projects and certificates
- Create daily, weekly, monthly, and career goals
- Monitor learning streaks
- Analyze learning progress
- Manage a professional profile
- Switch between Light and Dark mode
- Export application data as JSON
The app includes realistic sample data on first launch so the dashboard looks professional immediately.
🎯 Core Features
🔐 Authentication
- Frontend-only login simulation
- Email/password validation
- Show/hide password
- Remember me
- LocalStorage authentication state
- Login/logout
## Dashboard
- Career goal overview
- Overall learning progress
- Skill statistics
- Active courses
- Completed projects
- Certificates earned
- Learning streak
- Weekly goal progress
- Dynamic progress visualization
🧠 My Skills
Manage skills by category:
- Programming
- Web Development
- Database
- Tools
- Soft Skills
- Other
Includes add, edit, delete, search, category filtering, sorting, skill levels, and progress bars.
🗺️ Career Roadmap
Create an interactive learning path with:
- Topic
- Description
- Status
- Resources
- Completion checkbox
Statuses: Not Started / In Progress / Completed.
📚 Courses
Track:
- Course title
- Platform
- Instructor
- Category
- Start date
- Target completion date
- Progress
- Status
Supports CRUD, search, filter, sort, and progress updates.
🔖 Learning Resources
Personal library for:
- Websites
- YouTube tutorials
- Documentation
- Books
- Articles
- Practice platforms
Supports search, filtering, bookmarking, and deletion.
💻 Projects
Track career projects with:
- Project name
- Description
- Technologies
- GitHub URL
- Live demo URL
- Status
- Start/completion dates
🏆 Certificates
Store certificate name, platform, issuer, issue date, credential ID, credential URL, and skill/category.
🎯 Goals
Create and track:
- Daily goals
- Weekly goals
- Monthly goals
- Career goals
Includes deadline, priority, progress, status, completion, filtering, and visual progress indicators.
🔥 Learning Streak
Tracks:
- Current streak
- Longest streak
- Total learning days
- Daily learning activity
📈 Progress Analytics
Provides dynamic statistics for:
- Overall progress
- Skill progress
- Course completion
- Project completion
- Certificate count
- Weekly learning activity
- Monthly progress
👤 Profile
Manage:
- Name
- University
- Department
- Semester
- Career goal
- Bio
- Skills
- GitHub
- LinkedIn
⚙️ Settings
Includes:
- Light/Dark mode
- Notification preferences
- Profile settings
- JSON data export
- Reset all data
- Logout
🎨 UI/UX
SkillForge follows a clean, professional SaaS dashboard style with:
- Responsive cards
- Progress bars
- Status badges
- Modals
- Tooltips
- Dropdowns
- Toast notifications
- Empty states
- Confirmation dialogs
- Subtle hover/scroll animations
- Accessible, mobile-friendly forms
The interface avoids excessive gradients and unnecessary animation to keep the product professional.
📱 Responsive Design
Designed for:
- Desktop
- Laptop
- Tablet
- Mobile
The mobile layout includes a collapsible sidebar, responsive cards, mobile-friendly forms, and layouts designed to avoid unnecessary horizontal overflow.
🛠️ Technology Stack
Technology	Purpose
HTML5	Page structure
CSS3	Styling and responsive UI
Vanilla JavaScript	Application logic
LocalStorage	Client-side persistence
CSS/SVG	Icons and visual elements


No frameworks used
This project intentionally does not use React, Vue, Angular, Bootstrap, Tailwind CSS, Node.js, PHP, Laravel, Express, or any backend framework.
📂 Project Structure
SkillForge/
│
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
│
├── css/
│   ├── style.css
│   ├── responsive.css
│   └── components.css
│
├── js/
│   ├── app.js
│   ├── auth.js
│   ├── dashboard.js
│   ├── skills.js
│   ├── roadmap.js
│   ├── courses.js
│   ├── resources.js
│   ├── projects.js
│   ├── certificates.js
│   ├── goals.js
│   └── analytics.js
│
├── assets/
│   ├── images/
│   └── icons/
│
└── README.md
⚡ Getting Started
1. Clone or download
git clone YOUR_REPOSITORY_URL
Or download the ZIP and extract it.
2. Open in VS Code
Open the SkillForge folder.
3. Run
No package installation or backend server is required.
You can open index.html directly, or use the Live Server extension in VS Code for the best development experience.
4. Login
Open the Login page and enter a valid email and password. The frontend login state is stored in LocalStorage.
💾 LocalStorage Architecture
SkillForge stores application data in the browser, including:
Authentication
Profile
Skills
Career Goals
Roadmap
Courses
Resources
Projects
Certificates
Goals
Learning Activity
Theme
Preferences
Data survives refreshes and browser restarts unless browser storage is cleared.
📤 JSON Data Export
Users can export their SkillForge data as a JSON backup.
Example:
{
  "profile": {},
  "skills": [],
  "goals": [],
  "courses": [],
  "projects": [],
  "certificates": [],
  "resources": [],
  "roadmap": [],
  "learningActivity": []
}
🧩 JavaScript Architecture
The application is split into feature-specific JavaScript files for maintainability.
File	Responsibility
app.js	Shared utilities, navigation, theme, toast/modal helpers
auth.js	Login, logout, authentication state
dashboard.js	Dashboard statistics and progress
skills.js	Skill CRUD, search, filter, sorting
roadmap.js	Roadmap steps, completion, progress
courses.js	Course CRUD and progress
resources.js	Resource library, bookmarks, filtering
projects.js	Project CRUD and status
certificates.js	Certificate CRUD, search, filtering
goals.js	Goal CRUD, priority, progress, completion
analytics.js	Learning statistics and visualizations


🔄 CRUD Flow
Create
  ↓
Read
  ↓
Update
  ↓
Delete
  ↓
LocalStorage
  ↓
Dynamic UI Refresh
This pattern is used across the main management modules.
🧪 Functional Checklist
- [x] Login / Logout
- [x] Authentication state
- [x] Add / Edit / Delete
- [x] Search
- [x] Filter
- [x] Sort
- [x] Progress tracking
- [x] Roadmap completion
- [x] Course tracking
- [x] Project tracking
- [x] Certificate tracking
- [x] Goal tracking
- [x] Learning streak
- [x] Dashboard statistics
- [x] Progress analytics
- [x] Dark mode
- [x] LocalStorage persistence
- [x] JSON export
- [x] Responsive UI
🔒 Security Note
SkillForge is a frontend-only educational and portfolio project. Its authentication is a simulation and should not be used to store real passwords or sensitive information.
A production version should use secure backend authentication, password hashing, HTTPS, authorization, server-side validation, rate limiting, and a protected database.
🚀 Future Full-Stack Upgrade
A future production version could use:
Frontend
React / Next.js
      ↓
REST API
      ↓
Node.js + Express
      ↓
PostgreSQL / MongoDB
Potential future features:
- Real user registration
- Secure authentication
- Cloud database
- User-specific dashboards
- Password reset and email verification
- Profile image upload
- GitHub API integration
- Course API integration
- Advanced analytics
- Achievement/badge system
- Notifications
- Admin dashboard
- AI-powered career recommendations
- AI-generated learning roadmaps
- Resume builder
- Job and internship tracker
- Application tracking
🎓 Learning Outcomes
This project demonstrates practical experience with:
Frontend Development
- Semantic HTML
- Modern CSS
- Responsive design
- Reusable UI patterns
- Accessibility basics
JavaScript
- DOM manipulation
- Event handling
- Form validation
- Arrays and objects
- CRUD operations
- LocalStorage
- Dynamic rendering
- Search/filter/sort
- JSON handling
- Client-side state management
Software Engineering
- Modular architecture
- Requirement implementation
- Maintainable code organization
- User-centered UI design
- Portfolio-oriented development
📌 Project Status
Version: 1.0.0
Status: Completed Frontend Portfolio Project
Architecture: Client-side application
Storage: LocalStorage
Backend: None
👩‍💻 Author
Nawrin Tarannum
Software Engineering Student
Interests
- Full-Stack Development
- Web Technologies
- Software Engineering
- Career & Skill Development
