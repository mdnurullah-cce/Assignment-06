import Image from "next/image";
import Link from "next/link";
import type { IWorkout } from "@/types/workout";

interface WorkoutCardProps {
  workout: IWorkout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <Link
      href={`/workouts/${workout.id}`}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-[#151515] transition hover:-translate-y-1 hover:border-[#CCFF00]/40"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Muscle groups */}
        <div className="mb-3 flex flex-wrap gap-2">
          {workout.muscleGroups.map((muscleGroup) => (
            <span
              key={muscleGroup}
              className="rounded-full bg-[#CCFF00]/10 px-3 py-1 text-xs font-bold uppercase text-[#CCFF00]"
            >
              {muscleGroup}
            </span>
          ))}
        </div>

        {/* Workout name */}
        <h3 className="text-xl font-black uppercase">
          {workout.name}
        </h3>

        {/* Equipment */}
        <p className="mt-2 text-sm text-white/50">
          {workout.equipment}
        </p>

        {/* Stats */}
        <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-sm text-white/60">
          <span>◷ {workout.duration} min</span>

          <span>🔥 {workout.caloriesBurned} kcal</span>

          <span>★ {workout.rating}</span>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;