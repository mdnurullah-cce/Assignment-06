import type { IWorkout } from "@/types/workout";

interface WorkoutSpecsProps {
  workout: IWorkout;
}

const WorkoutSpecs = ({ workout }: WorkoutSpecsProps) => {
  const specs = [
    { label: "Equipment", value: workout.equipment },
    { label: "Difficulty", value: workout.difficulty },
    { label: "Sets", value: workout.sets },
    { label: "Reps", value: workout.reps },
    { label: "Duration", value: `${workout.duration} min` },
    {
      label: "Calories",
      value: `${workout.caloriesBurned} kcal`,
    },
    { label: "Rating", value: workout.rating },
  ];

  return (
    <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-white/10 bg-[#151515] sm:grid-cols-3">
      {specs.map((spec) => (
        <div
          key={spec.label}
          className="border-b border-r border-white/10 p-4"
        >
          <p className="text-xs font-bold uppercase text-white/40">
            {spec.label}
          </p>

          <p className="mt-2 font-semibold text-white">
            {spec.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default WorkoutSpecs;