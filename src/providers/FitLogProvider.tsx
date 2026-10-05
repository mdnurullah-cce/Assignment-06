"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { toast } from "react-toastify";
import type { IWorkout } from "@/types/workout";

interface FitLogContextType {
  plan: IWorkout[];
  saved: IWorkout[];

  addToPlan: (workout: IWorkout) => void;
  removeFromPlan: (id: number) => void;

  saveWorkout: (workout: IWorkout) => void;
  removeFromSaved: (id: number) => void;

  markAsDone: (id: number) => void;

  isInPlan: (id: number) => boolean;
  isSaved: (id: number) => boolean;
}

const FitLogContext = createContext<FitLogContextType | undefined>(
  undefined,
);

const getStoredPlan = (): IWorkout[] => {
  if (typeof window === "undefined") {
    return [];
  }

  const storedPlan = localStorage.getItem("fitlog-plan");

  if (!storedPlan) {
    return [];
  }

  try {
    return JSON.parse(storedPlan) as IWorkout[];
  } catch {
    return [];
  }
};

const getStoredSaved = (): IWorkout[] => {
  if (typeof window === "undefined") {
    return [];
  }

  const storedSaved = localStorage.getItem("fitlog-saved");

  if (!storedSaved) {
    return [];
  }

  try {
    return JSON.parse(storedSaved) as IWorkout[];
  } catch {
    return [];
  }
};

export const FitLogProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [plan, setPlan] = useState<IWorkout[]>(getStoredPlan);
  const [saved, setSaved] = useState<IWorkout[]>(getStoredSaved);

  // Save plan whenever it changes
  useEffect(() => {
    localStorage.setItem("fitlog-plan", JSON.stringify(plan));
  }, [plan]);

  // Save saved workouts whenever they change
  useEffect(() => {
    localStorage.setItem("fitlog-saved", JSON.stringify(saved));
  }, [saved]);

  const addToPlan = (workout: IWorkout) => {
    if (plan.length >= 5) {
      toast.error("Today's plan can contain only 5 lifts.");
      return;
    }

    if (plan.some((item) => item.id === workout.id)) {
      toast.info("Workout is already in today's plan.");
      return;
    }

    setPlan((previous) => [...previous, workout]);

    toast.success("Added to today's plan");
  };

  const removeFromPlan = (id: number) => {
    setPlan((previous) =>
      previous.filter((item) => item.id !== id),
    );

    toast.info("Workout removed from today's plan");
  };

  const saveWorkout = (workout: IWorkout) => {
    if (saved.some((item) => item.id === workout.id)) {
      toast.info("Workout is already saved.");
      return;
    }

    setSaved((previous) => [...previous, workout]);

    toast.success("Workout saved for later");
  };

  const removeFromSaved = (id: number) => {
    setSaved((previous) =>
      previous.filter((item) => item.id !== id),
    );

    toast.info("Workout removed from saved");
  };

  const markAsDone = (id: number) => {
    setPlan((previous) =>
      previous.filter((item) => item.id !== id),
    );

    toast.success("Workout marked as done");
  };

  const isInPlan = (id: number) => {
    return plan.some((item) => item.id === id);
  };

  const isSaved = (id: number) => {
    return saved.some((item) => item.id === id);
  };

  return (
    <FitLogContext.Provider
      value={{
        plan,
        saved,
        addToPlan,
        removeFromPlan,
        saveWorkout,
        removeFromSaved,
        markAsDone,
        isInPlan,
        isSaved,
      }}
    >
      {children}
    </FitLogContext.Provider>
  );
};

export const useFitLog = () => {
  const context = useContext(FitLogContext);

  if (!context) {
    throw new Error(
      "useFitLog must be used inside FitLogProvider",
    );
  }

  return context;
};