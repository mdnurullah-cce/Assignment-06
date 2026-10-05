import Image from "next/image";
import type { IWorkout } from "@/types/workout";

import WorkoutSpecs from "./WorkoutSpecs";
import WorkoutInstructions from "./WorkoutInstructions";
import WorkoutActions from "./WorkoutActions";

interface WorkoutDetailsProps {
  workout: IWorkout;
}

const WorkoutDetails = ({ workout }: WorkoutDetailsProps) => {
  return (
    <main className="bg-[#0B0B0B] px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="relative min-h-100 overflow-hidden rounded-3xl lg:min-h-175">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="mb-5 flex flex-wrap gap-2">
              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full bg-[#CCFF00]/10 px-3 py-1 text-xs font-bold uppercase text-[#CCFF00]"
                >
                  {muscle}
                </span>
              ))}
            </div>

            <h1 className="text-4xl font-black uppercase leading-none sm:text-6xl">
              {workout.name}
            </h1>

            <p className="mt-6 text-lg leading-8 text-white/60">
              {workout.description}
            </p>

            <div className="my-8">
              <WorkoutSpecs workout={workout} />
            </div>

            <WorkoutInstructions instructions={workout.instructions} />

            <div className="mt-8">
              <WorkoutActions workout={workout} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WorkoutDetails;