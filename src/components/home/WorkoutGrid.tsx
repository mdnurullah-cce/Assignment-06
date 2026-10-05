"use client";

import { useMemo, useState } from "react";
import type { IWorkout } from "@/types/workout";
import WorkoutCard from "./WorkoutCard";
import SortDropdown from "./SortDropdown";

interface WorkoutGridProps {
  workouts: IWorkout[];
}

const WorkoutGrid = ({ workouts }: WorkoutGridProps) => {
  const [sortBy, setSortBy] = useState("duration");

  const sortedWorkouts = useMemo(() => {
    const copiedWorkouts = [...workouts];

    if (sortBy === "duration") {
      return copiedWorkouts.sort(
        (a, b) => a.duration - b.duration,
      );
    }

    if (sortBy === "calories") {
      return copiedWorkouts.sort(
        (a, b) => a.caloriesBurned - b.caloriesBurned,
      );
    }

    if (sortBy === "rating") {
      return copiedWorkouts.sort(
        (a, b) => b.rating - a.rating,
      );
    }

    return copiedWorkouts;
  }, [workouts, sortBy]);

  return (
    <div>
      <div className="mb-8 flex justify-end">
        <SortDropdown
          value={sortBy}
          onChange={setSortBy}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {sortedWorkouts.map((workout) => (
          <WorkoutCard
            key={workout.id}
            workout={workout}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkoutGrid;