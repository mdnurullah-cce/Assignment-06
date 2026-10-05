
import Link from "next/link";

interface EmptyPlanProps {
  saved?: boolean;
}

const EmptyPlan = ({
  saved = false,
}: EmptyPlanProps) => {
  return (
    <div className="rounded-3xl border border-dashed border-white/15 bg-[#111111] px-6 py-20 text-center">
      <h2 className="text-3xl font-black uppercase">
        Nothing Here Yet
      </h2>

      <p className="mx-auto mt-4 max-w-md text-white/50">
        {saved
          ? "Save a workout from the library and it will appear here."
          : "Browse the library and add a lift to get today moving."}
      </p>

      {!saved && (
        <Link
          href="/"
          className="btn mt-7 rounded-full border-0 bg-[#CCFF00] px-6 font-bold uppercase text-black hover:bg-[#d9ff33]"
        >
          Go to workouts
        </Link>
      )}
    </div>
  );
};

export default EmptyPlan;
