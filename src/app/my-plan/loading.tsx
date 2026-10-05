
const Loading = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0B0B0B]">
      <div className="text-center">
        <span className="loading loading-spinner loading-lg text-[#CCFF00]" />

        <p className="mt-4 text-white/50">
          Loading workouts…
        </p>
      </div>
    </main>
  );
};

export default Loading;
