
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import PlanHeader from "@/components/my-plan/PlanHeader";
import MetricsSummary from "@/components/my-plan/MetricsSummary";
import PlannedWorkoutCard from "@/components/my-plan/PlannedWorkoutCard";
import EmptyPlan from "@/components/my-plan/EmptyPlan";
import { useFitLog } from "@/providers/FitLogProvider";

const MyPlanPage = () => {
  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

  const {
    plan,
    saved,
    removeFromSaved,
  } = useFitLog();

  return (
    <main className="min-h-screen bg-[#0B0B0B] px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <PlanHeader />

        <MetricsSummary workouts={plan} />

        {/* Tabs */}
        <div className="mb-8 flex gap-3 border-b border-white/10 pb-4">
          <button
            onClick={() => setActiveTab("plan")}
            className={`rounded-full px-5 py-2 text-sm font-bold uppercase ${
              activeTab === "plan"
                ? "bg-[#CCFF00] text-black"
                : "bg-white/5 text-white/50"
            }`}
          >
            Today@apos;s Plan ({plan.length})
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`rounded-full px-5 py-2 text-sm font-bold uppercase ${
              activeTab === "saved"
                ? "bg-[#CCFF00] text-black"
                : "bg-white/5 text-white/50"
            }`}
          >
            Saved ({saved.length})
          </button>
        </div>

        {/* Today's Plan */}
        {activeTab === "plan" && (
          <div className="space-y-5">
            {plan.length === 0 ? (
              <EmptyPlan />
            ) : (
              plan.map((workout) => (
                <PlannedWorkoutCard
                  key={workout.id}
                  workout={workout}
                />
              ))
            )}
          </div>
        )}

        {/* Saved */}
        {activeTab === "saved" && (
          <div className="space-y-5">
            {saved.length === 0 ? (
              <EmptyPlan saved />
            ) : (
              saved.map((workout) => (
                <div
                  key={workout.id}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-[#151515]"
                >
                  <div className="grid md:grid-cols-[220px_1fr]">
                    <div className="relative min-h-52">
                      <Image
                        src={workout.image}
                        alt={workout.name}
                        fill
                        sizes="220px"
                        className="object-cover"
                      />
                    </div>

                    <div className="p-5">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-2xl font-black uppercase">
                            {workout.name}
                          </h3>

                          <p className="mt-2 text-sm text-white/50">
                            {workout.equipment}
                          </p>
                        </div>

                        <button
                          onClick={() =>
                            removeFromSaved(workout.id)
                          }
                          className="btn btn-circle btn-sm border-0 bg-transparent text-xl text-white/40 hover:bg-white/10 hover:text-white"
                          aria-label="Remove saved workout"
                        >
                          ×
                        </button>
                      </div>

                      <div className="my-5 flex flex-wrap gap-4 text-sm text-white/60">
                        <span>
                          ◷ {workout.duration} min
                        </span>

                        <span>
                          🔥 {workout.caloriesBurned} kcal
                        </span>

                        <span>
                          ★ {workout.rating}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <Link
                          href={`/workouts/${workout.id}`}
                          className="btn btn-sm rounded-full border border-white/20 bg-transparent text-white"
                        >
                          View Details
                        </Link>

                        <button
                          onClick={() =>
                            removeFromSaved(workout.id)
                          }
                          className="btn btn-sm rounded-full border-0 bg-white/10 text-white"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </main>
  );
};

export default MyPlanPage;
