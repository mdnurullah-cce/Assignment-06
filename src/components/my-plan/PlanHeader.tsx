
const PlanHeader = () => {
  return (
    <div className="mb-10">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#CCFF00]">
        Today&apos;s Workout
      </p>

      <h1 className="text-5xl font-black uppercase sm:text-6xl">
        My Plan
      </h1>

      <p className="mt-4 max-w-xl text-white/50">
        Cap of five lifts for today. Finish them, then load more.
      </p>
    </div>
  );
};

export default PlanHeader;
