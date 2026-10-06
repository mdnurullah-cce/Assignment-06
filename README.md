# FitLog — Workout Library

FitLog is a responsive workout library and workout planning web application built with **Next.js, TypeScript, Tailwind CSS, and DaisyUI**.

It allows users to explore workouts, view detailed exercise information, add exercises to today's workout plan, save workouts for later, and track basic workout metrics such as total exercises, duration, and calories.

The project follows a dark, modern gym-focused design with a bright lime accent color.

---

## 🚀 Live Demo

- **Live Website:** "Given in the future"
- **GitHub Repository:** "Given in the future"
---

## 📌 Project Overview

FitLog provides a simple way to discover workouts and organize a daily workout routine.

Users can:

- Browse a library of 12 workouts.
- Sort workouts by duration, calories, or rating.
- Open a workout to view its complete details.
- Add workouts to today's plan.
- Save workouts for later.
- Remove workouts from their plan or saved list.
- Mark planned workouts as completed.
- View total exercises, workout minutes, and calories.
- Keep plan and saved data after refreshing the browser using `localStorage`.
- Receive toast notifications for important actions.

---

## ✨ Key Features

### 1. Workout Library

The home page contains a responsive workout library with 12 workouts fetched from an external API.

Each workout card displays:

- Workout image
- Muscle groups
- Workout name
- Equipment
- Duration
- Calories burned
- Rating

Clicking a workout card opens its detailed workout page.

---

### 2. Workout Details

Every workout has a dynamic details page.

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

Users can also:

- Add the workout to today's plan
- Save the workout for later

---

### 3. Today's Workout Plan

Users can create a daily workout plan from the available exercises.

The plan includes:

- Maximum 5 lifts
- Exercise count
- Total workout minutes
- Total calories
- View Details button
- Mark as Done button
- Remove button

The plan updates automatically when workouts are added or removed.

---

### 4. Saved Workouts

Users can save workouts that they want to use later.

The Saved section allows users to:

- View saved workouts
- Open workout details
- Remove saved workouts

---

### 5. Sorting

The workout library includes a sorting feature.

Users can sort workouts by:

- Duration
- Calories
- Rating

The default sorting option is **Duration**.

Sorting is handled on the client side without changing the original API data.

---

### 6. Local Storage Persistence

FitLog uses browser `localStorage` to preserve:

- Today's workout plan
- Saved workouts

This means the user's selected workouts remain available even after refreshing the browser.

---

### 7. Toast Notifications

FitLog uses **React Toastify** to provide feedback when users perform actions.

Examples include:

- Workout added to today's plan
- Workout already exists
- Workout saved
- Workout removed
- Workout marked as done
- Five-workout plan limit reached

---

### 8. Responsive Design

The application is designed for:

- 📱 Mobile
- 📱 Tablet
- 💻 Desktop

Tailwind CSS responsive utilities are used throughout the application to adapt layouts, cards, navigation, buttons, images, and sections to different screen sizes.

---

### 9. Loading States

Loading UI is provided for:

- Home page
- Workout details page
- My Plan page

The application displays a loading spinner and message while data is being loaded.

---

### 10. Custom 404 Page

FitLog includes a custom 404 page for invalid routes or unavailable workouts.

The page provides:

- 404 message
- Workout Not Found message
- Button to return to the workout library

---

## 🛠️ Technologies Used

### Frontend

- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **DaisyUI**

### Additional Tools

- **React Toastify** — Toast notifications
- **Next/Image** — Optimized images
- **localStorage** — Client-side persistence
- **Git & GitHub** — Version control
- **Vercel** — Deployment

---

## 🔌 API

FitLog uses the following workout API:

`https://api.abcz.workers.dev/api/fitlog`

### Get all workouts


GET https://api.abcz.workers.dev/api/fitlog


### Get a single workout


GET https://api.abcz.workers.dev/api/fitlog/:id


Example:


https://api.abcz.workers.dev/api/fitlog/1


---

## 📦 Workout Data Structure

The application uses the following TypeScript interface:


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


---

## 📁 Project Structure


fitlog/
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
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json


---

## 🧩 Component Architecture

The application is divided into reusable components.

### Layout Components


Navbar
Footer


These components are shared across the application.

### Home Components


Hero
Library
WorkoutGrid
WorkoutCard
SortDropdown


The home page follows this structure:


Home Page
│
├── Hero
│
└── Library
    │
    └── WorkoutGrid
        │
        ├── SortDropdown
        │
        └── WorkoutCard


### Workout Components


WorkoutDetails
├── WorkoutSpecs
├── WorkoutInstructions
└── WorkoutActions


### My Plan Components


My Plan
│
├── PlanHeader
├── MetricsSummary
├── PlannedWorkoutCard
└── EmptyPlan


---

## 🧠 State Management

FitLog uses **React Context API** for application-wide workout state.

The main provider is:


FitLogProvider


It manages:


plan;
saved;


and provides functions such as:


addToPlan();
removeFromPlan();
saveWorkout();
removeFromSaved();
markAsDone();
isInPlan();
isSaved();


This allows the Navbar, workout details, and My Plan page to share the same workout state.

---

## 💾 Local Storage

FitLog stores user selections in the browser.

The following keys are used:


fitlog-plan
fitlog-saved


Example:


localStorage.setItem("fitlog-plan", JSON.stringify(plan));


This allows the user's plan and saved workouts to remain after a browser refresh.

---

## 📊 Workout Metrics

The My Plan page calculates three live metrics.

### Exercises


Number of workouts in today's plan


### Minutes


Sum of workout durations


### Calories


Sum of calories burned


For example:


const minutes = workouts.reduce(
  (total, workout) => total + workout.duration,
  0,
);


---

## 🔒 Plan Limit

A maximum of **5 workouts** can be added to today's plan.

If the user tries to add a sixth workout, FitLog displays a toast notification instead of adding it.


Today's plan can contain only 5 lifts.


---

## 🎨 Design

FitLog uses a dark gym-focused visual style.

### Main Background


#0B0B0B


### Card Background


#151515


### Accent Color


#CCFF00


The lime accent is used for:

- Buttons
- Active navigation
- Important numbers
- Workout tags
- Loading indicators
- Highlights

The design intentionally keeps the interface minimal and high contrast.

---

## 📱 Responsive Breakpoints

The interface uses Tailwind CSS responsive utilities.

### Mobile

- Single-column workout cards
- Mobile navigation
- Stacked content
- Full-width buttons

### Tablet

- Two-column workout grid
- Responsive spacing
- Flexible navigation and content

### Desktop

- Three-column workout grid
- Two-column workout details
- Expanded hero section
- Full navigation

---

## ⚙️ Installation & Setup

### 1. Clone the repository


git clone YOUR_GITHUB_REPOSITORY_URL


### 2. Go to the project directory


cd fitlog


### 3. Install dependencies


npm install


### 4. Start the development server


npm run dev


### 5. Open the application

Visit:


http://localhost:3000


---

## 🏗️ Production Build

To create a production build:


npm run build


To start the production server:


npm start


---

## 🚀 Deployment

FitLog can be deployed using platforms such as:

- Vercel


After deployment, test:

- Home page
- Workout detail pages
- My Plan page
- Navigation
- Add to Plan
- Save for Later
- Remove
- Mark as Done
- Browser refresh
- Invalid workout URLs

---

## 🔄 User Flow


Home
 │
 ├── Browse Workout Library
 │       │
 │       └── Select Workout
 │              │
 │              ▼
 │        Workout Details
 │              │
 │        ┌─────┴─────┐
 │        ▼           ▼
 │   Add to Plan   Save for Later
 │        │           │
 └────────┴───────────┘
              │
              ▼
           My Plan
              │
       ┌──────┴──────┐
       ▼             ▼
   Today's Plan    Saved
       │
   ┌───┴────┐
   ▼        ▼
Mark Done  Remove


---

## 🔔 User Feedback

React Toastify is used to provide immediate feedback after user actions.

Examples:


Added to today's plan
Workout saved for later
Workout removed from today's plan
Workout marked as done
Workout is already in today's plan
Today's plan can contain only 5 lifts.


---

## 🌐 External Images

Workout images are provided by the workout API.

Because Next.js `Image` is used for remote images, the required image host is configured in `next.config.ts`.

Example configuration:


images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "img.magnific.com",
    },
  ],
},


---

## 🧪 Testing Checklist

Before submitting or deploying the project, verify the following:

- [ ] Home page loads successfully
- [ ] All 12 workouts appear
- [ ] Workout cards are clickable
- [ ] Workout detail pages work
- [ ] Invalid workout IDs show 404
- [ ] Add to Plan works
- [ ] Maximum 5-workout limit works
- [ ] Save for Later works
- [ ] Remove from Plan works
- [ ] Remove from Saved works
- [ ] Mark as Done works
- [ ] Metrics update correctly
- [ ] Navbar counters update correctly
- [ ] Sorting works
- [ ] Toast notifications appear
- [ ] localStorage persistence works
- [ ] Mobile layout works
- [ ] Tablet layout works
- [ ] Desktop layout works
- [ ] Loading states appear
- [ ] Footer displays correctly
- [ ] Production build completes successfully
- [ ] Deployment reload does not produce an error

---

## 📚 Assignment Requirements Covered

FitLog implements the major assignment requirements:

- ✅ Responsive design
- ✅ Next.js App Router
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ DaisyUI
- ✅ External API integration
- ✅ 12 workout library cards
- ✅ Dynamic workout details
- ✅ Today's workout plan
- ✅ Saved workouts
- ✅ Live plan counters
- ✅ Workout metrics
- ✅ Sorting
- ✅ Toast notifications
- ✅ Loading states
- ✅ Custom 404 page
- ✅ Mark as Done
- ✅ Remove functionality
- ✅ localStorage persistence
- ✅ Responsive navigation
- ✅ Footer
- ✅ Git/GitHub version control
- ✅ Production deployment

---

## 🔮 Future Improvements

Possible future features include:

- Workout search
- Muscle-group filtering
- Difficulty filtering
- Custom workout creation
- Weekly workout history
- Progress charts
- User authentication
- Personal fitness goals
- Workout completion statistics
- Drag-and-drop workout ordering
- Dark/light theme options

---

## 👨‍💻 Author

**MD Nurullah**

Built as a frontend development project using modern React and Next.js practices.

---

## 📄 License

This project is created for educational and portfolio purposes.

---

## 💪 Final Note

> **Train hard. Log honest.**

FitLog is designed to keep workout planning simple, focused, and practical.
