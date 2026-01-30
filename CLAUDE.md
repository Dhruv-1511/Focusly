# StudyHub Project

A premium student-focused platform designed to solve 90% of student daily problems.

## Build Commands

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint

## Project Structure

- `src/app/`: StudyHub Core (Page-based sections)
  - `dashboard/`: Student overview and stats
  - `problems/`: Problem Solver System (with `[id]` dynamic solutions)
  - `planner/`: AI Study Plan generation
  - `focus/`: Pomodoro and deep work zone
  - `tools/`: Learning/Memory tools (Revision, AI Notes)
  - `community/`: Student Q&A and groups
  - `mental-health/`: Wellness, Mood, and Burnout alerts
  - `rewards/`: Gamification system (XP, Badges)
- `src/data/`: Centralized mock data (`mock.ts`)
- `src/components/`: Reusable fragments (Sidebar, Navbar, etc.)
- `src/lib/`: Logic and utility functions

## Design Guidelines

- **Color Palette**: Calm Blue (#2563EB), Growth Green (#22C55E), Deep Navy, Light Blue Accent.
- **Typography**: Heavily italicized, black-weight headers for a premium, academic-sport look.
- **UX**: Use card-based layouts, high backdrop blur (glassmorphism), and Framer Motion for all transitions.
- **Components**: Reusable UI components in `src/components/ui/`
- **TypeScript**: Use strict typing where possible
