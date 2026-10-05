# FitLog — Workout Library

FitLog is a modern, responsive workout library built with Next.js, TypeScript, Tailwind CSS, and DaisyUI.

It is designed as a simple, dark-themed gym companion where users can explore workouts, view detailed workout information, add exercises to today's plan, save workouts for later, and track their workout metrics.

---

## 🚀 Live Project

**Live Demo:** "given in future"

**GitHub Repository:** "given in the future"

---

## 📌 Project Overview

FitLog provides a collection of workouts covering different major muscle groups.

Users can:

- Browse available workouts
- Sort workouts by duration, calories, or rating
- View detailed information about each workout
- Add workouts to today's plan
- Save workouts for later
- Remove workouts from their plan
- Mark workouts as completed
- View total exercises, workout minutes, and calories
- Keep their plan and saved workouts after refreshing the browser
- Navigate between the workout library and personal plan

The project follows a component-based architecture using the Next.js App Router.

---

## ✨ Key Features

### 1. Responsive Navigation

- Responsive navbar for mobile, tablet, and desktop
- FitLog logo and branding
- Workout and My Plan navigation links
- Active navigation state
- Plan counter
- Saved counter
- Mobile-friendly navigation

### 2. Hero Section

The homepage includes a large hero section with:

- `WORKOUT LIBRARY` eyebrow text
- `TRAIN WITH INTENT. LOG EVERY SET.` heading
- Project description
- Browse Workouts CTA
- Workout hero image
- Smooth scrolling to the workout library

### 3. Workout Library

The library displays workout data from an external API.

Each workout card includes:

- Workout image
- Muscle group tags
- Workout name
- Equipment
- Duration
- Calories burned
- Rating

The cards are fully responsive.

### 4. Workout Sorting

Users can sort workouts by:

- Duration
- Calories
- Rating

The default sorting option is Duration.

Sorting behavior:

- Duration → shortest first
- Calories → lowest first
- Rating → highest first

### 5. Workout Details

Clicking a workout opens a dynamic workout details page.

The details page includes:

- Workout image
- Workout name
- Muscle groups
- Description
- Equipment
- Difficulty
- Sets
- Reps
- Duration
- Calories
- Rating
- Step-by-step instructions

### 6. Today's Plan

Users can add workouts to today's plan.

The plan includes:

- Maximum 5 workouts
- Exercise count
- Total workout minutes
- Total calories
- View Details button
- Mark as Done button
- Remove button

### 7. Saved Workouts

Users can save workouts for later.

Saved workouts include:

- Workout thumbnail
- Workout name
- Equipment
- Duration
- Calories
- Rating
- View Details button
- Remove button

### 8. Toast Notifications

React Toastify is used to provide feedback when users:

- Add a workout
- Save a workout
- Remove a workout
- Mark a workout as completed
- Try to add a duplicate workout
- Reach the 5-workout limit

### 9. Local Storage

FitLog uses browser `localStorage` to preserve:

- Today's Plan
- Saved workouts

Therefore, the selected workouts remain available after refreshing the browser.

### 10. Loading States

Loading UI is provided for:

- Homepage
- Workout details
- My Plan page

### 11. Custom 404 Page

A custom 404 page is included for invalid workout routes.

---

## 🛠️ Technologies Used

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- DaisyUI

### State Management

- React Context API
- React `useState`
- React `useMemo`
- React `useEffect`

### Notifications

- React Toastify

### Data

- REST API
- Browser localStorage

### Development Tools

- VS Code
- Git
- GitHub
- npm

---

## 🔌 API

FitLog uses the following API:

```text
https://api.abcz.workers.dev/api/fitlog
```

### Get all workouts

```text
GET https://api.abcz.workers.dev/api/fitlog
```

### Get a single workout

```text
GET https://api.abcz.workers.dev/api/fitlog/:id
```

For example:

```text
https://api.abcz.workers.dev/api/fitlog/1
```

The API provides workout information such as:

```text
id
name
image
muscleGroups
equipment
difficulty
duration
caloriesBurned
sets
reps
rating
description
instructions
```

---

## 📦 TypeScript Data Type

The workout data is represented by the following interface:

```ts
export interface IWorkout {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: string;
  duration: number;
  caloriesBurned: number;
  sets: number;
  reps: string;
  rating: number;
  description: string;
  instructions: string[];
}
```

---

## 📁 Project Structure

```text
fit-log/
│
├── public/
│   └── images/
│       ├── logo.svg
│       └── hero-workout.png
│
├── src/
│   │
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── loading.tsx
│   │   ├── not-found.tsx
│   │   │
│   │   ├── workouts/
│   │   │   └── [id]/
│   │   │       ├── page.tsx
│   │   │       └── loading.tsx
│   │   │
│   │   └── my-plan/
│   │       ├── page.tsx
│   │       └── loading.tsx
│   │
│   ├── components/
│   │   │
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   │
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── Library.tsx
│   │   │   ├── WorkoutGrid.tsx
│   │   │   ├── WorkoutCard.tsx
│   │   │   └── SortDropdown.tsx
│   │   │
│   │   ├── workout/
│   │   │   ├── WorkoutDetails.tsx
│   │   │   ├── WorkoutSpecs.tsx
│   │   │   ├── WorkoutInstructions.tsx
│   │   │   └── WorkoutActions.tsx
│   │   │
│   │   └── my-plan/
│   │       ├── PlanHeader.tsx
│   │       ├── MetricsSummary.tsx
│   │       ├── PlannedWorkoutCard.tsx
│   │       └── EmptyPlan.tsx
│   │
│   ├── providers/
│   │   └── FitLogProvider.tsx
│   │
│   ├── lib/
│   │   └── api.ts
│   │
│   └── types/
│       └── workout.ts
│
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
├── eslint.config.mjs
└── README.md
```

---

## 🧩 Component Architecture

### Layout Components

#### `Navbar.tsx`

Responsible for:

- Site navigation
- Active page indication
- Plan count
- Saved count
- Responsive mobile navigation

#### `Footer.tsx`

Responsible for:

- FitLog branding
- Copyright information

---

### Home Components

#### `Hero.tsx`

Displays the main homepage hero section.

#### `Library.tsx`

Displays the workout library section.

#### `WorkoutGrid.tsx`

Responsible for:

- Workout sorting
- Rendering workout cards
- Managing the selected sorting option

#### `WorkoutCard.tsx`

Displays individual workout information.

#### `SortDropdown.tsx`

Provides the sorting options:

- Duration
- Calories
- Rating

---

### Workout Components

#### `WorkoutDetails.tsx`

Combines the complete workout details page.

#### `WorkoutSpecs.tsx`

Displays workout specifications.

#### `WorkoutInstructions.tsx`

Displays the workout instructions as numbered steps.

#### `WorkoutActions.tsx`

Handles:

- Add to Today's Plan
- Save for Later

---

### My Plan Components

#### `PlanHeader.tsx`

Displays the My Plan heading and description.

#### `MetricsSummary.tsx`

Calculates:

- Total exercises
- Total minutes
- Total calories

#### `PlannedWorkoutCard.tsx`

Displays workouts added to Today's Plan.

#### `EmptyPlan.tsx`

Displays the empty-state UI when no workouts are available.

---

## 🧠 State Management

FitLog uses React Context API for global workout state.

The main provider is:

```text
src/providers/FitLogProvider.tsx
```

It manages:

```text
plan
saved
addToPlan()
removeFromPlan()
saveWorkout()
removeFromSaved()
markAsDone()
isInPlan()
isSaved()
```

This allows the Navbar, workout details, and My Plan page to share the same state.

---

## 💾 Local Storage

FitLog stores user selections in browser localStorage.

The following keys are used:

```text
fitlog-plan
fitlog-saved
```

This means users can refresh the page without losing their current plan or saved workouts.

---

## 🎨 Design

FitLog uses a dark fitness-focused design.

### Main Colors

```text
Background:
#0B0B0B

Card Background:
#151515

Accent:
#CCFF00

Text:
#FFFFFF
```

The bright lime accent is used for:

- Buttons
- Active navigation
- Important numbers
- Tags
- Highlights

---

## 📱 Responsive Design

The application is designed for:

- Mobile
- Tablet
- Desktop

Tailwind CSS responsive utilities are used throughout the project.

Examples:

```text
sm:
md:
lg:
xl:
```

The workout library uses:

```text
Mobile  → 1 column
Tablet  → 2 columns
Desktop → 3 columns
```

With 12 workouts, the desktop layout displays a 3 × 4 grid.

---

## 🖼️ External Images

Workout images are provided by the API.

The image hostname is configured in `next.config.ts`:

```ts
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.magnific.com",
      },
    ],
  },
};

export default nextConfig;
```

This allows Next.js `Image` to load the external workout images.

---

## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Go to the project directory

```bash
cd fit-log
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the application

Open:

```text
http://localhost:3000
```

---

## 🏗️ Build for Production

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

---

## 🚀 Deployment

The project can be deployed using platforms such as:

- Vercel
- Netlify
- Cloudflare Pages

For a Next.js application, Vercel is recommended.

Before deployment, make sure:

- The production build succeeds
- API requests work
- External images load correctly
- Dynamic workout routes work
- Refreshing `/workouts/:id` does not cause an error
- `/my-plan` works correctly
- The custom 404 page works

---

## 🧪 Main User Flow

```text
Home
  ↓
Browse Workouts
  ↓
Workout Library
  ↓
Select Workout
  ↓
Workout Details
  ↓
Add to Today's Plan
       OR
Save for Later
  ↓
My Plan
  ↓
View / Remove / Mark as Done
```

---

## 📊 Metrics Calculation

The My Plan page calculates metrics dynamically.

### Exercises

```ts
workouts.length;
```

### Total Minutes

```ts
workouts.reduce((total, workout) => total + workout.duration, 0);
```

### Total Calories

```ts
workouts.reduce((total, workout) => total + workout.caloriesBurned, 0);
```

Therefore, when workouts are added or removed, the metrics update automatically.

---

## 🔐 Plan Limit

Today's Plan supports a maximum of **5 workouts**.

If the user tries to add a sixth workout, FitLog displays a toast notification instead of adding it.

```text
Today's plan can contain only 5 lifts.
```

---

## 🔔 Notifications

React Toastify provides user feedback for important actions.

Examples:

```text
Added to today's plan
Workout saved for later
Workout removed from today's plan
Workout marked as done
Workout removed from saved
Workout is already in today's plan
Today's plan can contain only 5 lifts
```

---

## 🛠️ Development Notes

This project follows a component-based architecture.

The application separates:

- API logic
- Type definitions
- Global state
- Layout components
- Home components
- Workout components
- My Plan components

This makes the project easier to maintain and extend.

---

## 🔮 Future Improvements

Possible future features include:

- Workout search
- Filtering by muscle group
- Filtering by difficulty
- User authentication
- Personal workout history
- Weekly progress tracking
- Custom workout creation
- Workout completion statistics
- Dark/light theme support
- Backend database for persistent user data

---

## 👨‍💻 Author

**MD. NURULLAH**

Frontend Developer in training

Built with:

```text
Next.js
TypeScript
Tailwind CSS
DaisyUI
React
```

---

## 📄 License

This project was created for educational and assignment purposes.
