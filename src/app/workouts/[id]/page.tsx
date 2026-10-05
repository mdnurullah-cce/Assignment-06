import { notFound } from "next/navigation";
import WorkoutDetails from "@/components/workout/WorkoutDetails";
import { getWorkout } from "@/types/api";

interface WorkoutPageProps {
  params: Promise<{
    id: string;
  }>;
}

const WorkoutPage = async ({ params }: WorkoutPageProps) => {
  const { id } = await params;

  let workout;

  try {
    workout = await getWorkout(id);
  } catch {
    notFound();
  }

  return <WorkoutDetails workout={workout} />;
};

export default WorkoutPage;
