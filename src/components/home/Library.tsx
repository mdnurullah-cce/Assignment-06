import type { IWorkout } from "@/types/workout";
import WorkoutGrid from "./WorkoutGrid";

interface LibraryProps {
  workouts: IWorkout[];
}

const Library = ({ workouts }: LibraryProps) => {
  return (
    <section
      id="library"
      className="bg-[#0B0B0B] px-4 py-20 text-white sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#CCFF00]">
            The Library
          </p>

          <h2 className="text-4xl font-black uppercase sm:text-5xl">
            Twelve lifts covering every major muscle group.
          </h2>
        </div>

        <WorkoutGrid workouts={workouts} />
      </div>
    </section>
  );
};

export default Library;