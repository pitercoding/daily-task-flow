<h1 align="center">Daily Task Flow</h1>

<p align="center">
  <strong>Languages:</strong><br>
  <a href="README.pt.md">Portuguese</a> |
  <a href="README.md">English</a>
</p>

Daily Task Flow is a **frontend productivity application** built with **Angular** for managing small daily workflows in a simple and visual way. The app combines a task manager, a persistent timer, a manual counter, and a home dashboard to help users stay organized throughout the day.

The application supports:

- A dashboard with daily task statistics and progress percentage
- Quick task creation directly from the home screen
- A task manager with add, complete, undo, and delete actions
- A persistent timer that keeps counting after page reload
- A manual counter for quick incremental tracking
- Sidebar navigation between all app sections
- Local data persistence using `localStorage`

## Project Motivation

This project was built to practice Angular fundamentals through a realistic productivity tool instead of isolated demo components.

The main goal was to create a small but cohesive single-page application that demonstrates:

- navigation with Angular Router
- state handling with Angular Signals
- reusable shared components
- local persistence for a smoother user experience
- clean UI composition across multiple screens

## Current Features

### Frontend (Angular)

- Home screen with:
  - welcome section and app overview
  - task summary cards for total, completed, and pending tasks
  - progress bar based on completed tasks percentage
  - recent tasks preview
  - quick-add task input
  - shortcut buttons to the main tools
- Task Manager screen with:
  - task creation via keyboard enter
  - task completion toggle
  - undo action for completed tasks
  - task removal
  - visual status badges for `Completed` and `Pending`
- Timer screen with:
  - start, pause, and reset controls
  - running/paused status indicator
  - persistent elapsed time using `localStorage`
  - automatic timer recovery after page refresh when running
- Counter screen with:
  - increment action
  - decrement action
  - reset action
- Shared UI structure:
  - reusable page layout with sidebar and router outlet
  - reusable title component for screen headings
  - reusable menu and menu item components
  - active route highlight in sidebar navigation

### Data & State

- `TasksService` stores tasks with Angular Signals
- automatic persistence of tasks in `localStorage`
- default seed tasks when no saved tasks exist
- computed task metrics for total, completed, and pending counts
- `TimerService` stores timer state in `localStorage`
- computed formatted timer output in `MM:SS`

## Application Flow

1. Open the home screen
2. Review the current task summary and progress
3. Add a quick task or open the full tasks page
4. Manage tasks by marking them as completed, undoing, or deleting them
5. Use the timer screen to track focused work time
6. Use the counter screen for manual counting when needed

## Technologies

### Frontend

- Angular 21
- TypeScript
- Angular Router
- Angular Signals
- Angular Material Icons
- RxJS
- SCSS

## How to Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/pitercoding/daily-task-flow.git
cd daily-task-flow
```

### 2. Install dependencies

```bash
cd frontend
npm install
```

### 3. Start the development server

```bash
npm start
```

### 4. Open the application

- Frontend: `http://localhost:4200`

## Available Scripts

Inside `frontend/`, the main scripts are:

```bash
npm start
npm run build
npm test
```

## Data Persistence Notes

- Tasks are stored in `localStorage` under the `tasks` key
- Timer start state is stored in `localStorage`
- If the timer is running and the page reloads, the app restores the elapsed time
- If there is no saved task list yet, the app initializes a small default task set

## Testing Status

Current status:

- the project builds successfully with `npm run build`
- there are no custom `*.spec.ts` files yet
- the generated Angular test script is available, but project-specific automated tests are still pending

Recommended next test scope:

- component tests for `Home`, `Tasks`, `Timer`, and `Counter`
- service tests for `TasksService` and `TimerService`
- route rendering tests for sidebar navigation
- localStorage persistence tests for tasks and timer recovery

## Next Improvements

### Product and UX

- Add task editing
- Add task categories or priorities
- Add due dates and filtering options
- Add daily history or archived task views
- Add responsive behavior improvements for smaller screens

### Engineering

- Add unit tests for components and services
- Add route guards or future profile-based personalization if authentication is introduced
- Improve accessibility and keyboard flow
- Introduce a cleaner persistence abstraction instead of direct service-level localStorage access

### Future Expansion

- Add backend integration for cloud task sync
- Add authentication and user accounts
- Add analytics such as focused time per day
- Add Pomodoro or session-based timer modes

## Folder Structure

```text
daily-task-flow/
|-- frontend/                                # Angular application
|   |-- public/
|   |   `-- screenshots/                    # Project screenshots used in the README
|   |-- src/
|   |   |-- app/
|   |   |   |-- components/shared/          # Reusable layout, menu, and title components
|   |   |   |-- models/                     # App models
|   |   |   |-- screens/                    # Main app screens
|   |   |   |   |-- home/
|   |   |   |   |-- counter/
|   |   |   |   |-- timer/
|   |   |   |   `-- tasks/
|   |   |   |-- services/                   # Task and timer state management
|   |   |   |-- app.routes.ts               # Application routes
|   |   |   |-- app.ts                      # Root component
|   |   |   `-- app.html                    # Root template
|   |   |-- main.ts                         # Angular bootstrap
|   |   `-- styles.scss                     # Global styles
|   |-- angular.json
|   |-- package.json
|   `-- package-lock.json
|-- README.md                                # Documentation (English)
`-- README.pt.md                             # Documentation (Portuguese)
```

## Screenshots & Visuals

### Home Dashboard

![Home Dashboard](frontend/public/screenshots/home_dtf.png)

### Manual Counter

![Manual Counter](frontend/public/screenshots/counter_dtf.png)

### Timer Screen

![Timer Screen](frontend/public/screenshots/timer_dtf.png)

### Task Manager

![Task Manager](frontend/public/screenshots/tasks_dtf.png)

## License

This project is licensed under the **MIT License**.

## Author

**Piter Gomes** - Computer Science Student (6th Semester) & Full-Stack Developer

[Email](mailto:piterg.bio@gmail.com) | [LinkedIn](https://www.linkedin.com/in/piter-gomes-4a39281a1/) | [GitHub](https://github.com/pitercoding) | [Portfolio](https://portfolio-pitergomes.vercel.app/)
