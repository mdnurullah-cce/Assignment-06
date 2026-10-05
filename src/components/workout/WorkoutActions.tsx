"use client";

import type { IWorkout } from "@/types/workout";
import { useFitLog } from "@/providers/FitLogProvider";

interface WorkoutActionsProps {
  workout: IWorkout;
}

const WorkoutActions = ({ workout }: WorkoutActionsProps) => {
  const {
    addToPlan,
    saveWorkout,
    isInPlan,
    isSaved,
  } = useFitLog();

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <button
        onClick={() => addToPlan(workout)}
        disabled={isInPlan(workout.id)}
        className="btn rounded-full border-0 bg-[#CCFF00] px-6 font-bold uppercase text-black hover:bg-[#d9ff33] disabled:bg-white/20 disabled:text-white/40"
      >
        <span>＋</span>

        {isInPlan(workout.id)
          ? "Already in plan"
          : "Add to today's plan"}
      </button>

      <button
        onClick={() => saveWorkout(workout)}
        disabled={isSaved(workout.id)}
        className="btn rounded-full border border-white/20 bg-transparent px-6 font-bold uppercase text-white hover:bg-white/10 disabled:text-white/40"
      >
        <span>♡</span>

        {isSaved(workout.id)
          ? "Saved"
          : "Save for later"}
      </button>
    </div>
  );
};

export default WorkoutActions;