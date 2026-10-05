
"use client";

import Image from "next/image";
import Link from "next/link";

import type { IWorkout } from "@/types/workout";
import { useFitLog } from "@/providers/FitLogProvider";

interface PlannedWorkoutCardProps {
  workout: IWorkout;
}

const PlannedWorkoutCard = ({
  workout,
}: PlannedWorkoutCardProps) => {
  const {
    removeFromPlan,
    markAsDone,
  } = useFitLog();

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#151515]">
      <div className="grid md:grid-cols-[220px_1fr]">
        {/* Image */}
        <div className="relative min-h-52">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            sizes="220px"
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-2xl font-black uppercase">
                {workout.name}
              </h3>

              <p className="mt-2 text-sm text-white/50">
                {workout.equipment}
              </p>
            </div>

            {/* Remove */}
            <button
              onClick={() => removeFromPlan(workout.id)}
              className="btn btn-circle btn-sm border-0 bg-transparent text-xl text-white/40 hover:bg-white/10 hover:text-white"
              aria-label="Remove workout"
            >
              ×
            </button>
          </div>

          {/* Stats */}
          <div className="my-5 flex flex-wrap gap-4 text-sm text-white/60">
            <span>
              ◷ {workout.duration} min
            </span>

            <span>
              🔥 {workout.caloriesBurned} kcal
            </span>

            <span>
              ★ {workout.rating}
            </span>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3">
            <Link
              href={`/workouts/${workout.id}`}
              className="btn btn-sm rounded-full border border-white/20 bg-transparent text-white"
            >
              View Details
            </Link>

            <button
              onClick={() => markAsDone(workout.id)}
              className="btn btn-sm rounded-full border-0 bg-[#CCFF00] text-black hover:bg-[#d9ff33]"
            >
              ✓ Mark as Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlannedWorkoutCard;
