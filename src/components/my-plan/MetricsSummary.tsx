import type { IWorkout } from "@/types/workout";

interface MetricsSummaryProps {
  workouts: IWorkout[];
}

const MetricsSummary = ({
  workouts,
}: MetricsSummaryProps) => {
  const minutes = workouts.reduce(
    (total, workout) => total + workout.duration,
    0,
  );

  const calories = workouts.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0,
  );

  return (
    <div className="mb-10 grid gap-4 sm:grid-cols-3">
      <div className="rounded-2xl border border-white/10 bg-[#151515] p-6">
        <p className="text-sm uppercase text-white/40">
          Exercises
        </p>

        <p className="mt-2 text-4xl font-black text-[#CCFF00]">
          {workouts.length}
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-[#151515] p-6">
        <p className="text-sm uppercase text-white/40">
          Minutes
        </p>

        <p className="mt-2 text-4xl font-black text-[#CCFF00]">
          {minutes}
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-[#151515] p-6">
        <p className="text-sm uppercase text-white/40">
          Calories
        </p>

        <p className="mt-2 text-4xl font-black text-[#CCFF00]">
          {calories}
        </p>
      </div>
    </div>
  );
};

export default MetricsSummary;