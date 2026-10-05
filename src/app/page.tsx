import Hero from "@/components/home/Hero";
import Library from "@/components/home/Library";
import { getWorkouts } from "@/types/api";

const Page = async () => {
  const workouts = await getWorkouts();

  return (
    <main>
      <Hero />
      <Library workouts={workouts} />
    </main>
  );
};

export default Page;