interface WorkoutInstructionsProps {
  instructions: string[];
}

const WorkoutInstructions = ({
  instructions,
}: WorkoutInstructionsProps) => {
  return (
    <section>
      <h2 className="mb-5 text-2xl font-black uppercase">
        Instructions
      </h2>

      <ol className="space-y-4">
        {instructions.map((instruction, index) => (
          <li
            key={instruction}
            className="flex gap-4 rounded-xl border border-white/10 bg-[#151515] p-4"
          >
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#CCFF00] font-black text-black">
              {index + 1}
            </span>

            <p className="leading-7 text-white/70">
              {instruction}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default WorkoutInstructions;