"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const isWorkoutActive = pathname === "/";
  const isPlanActive = pathname === "/my-plan";

  // Temporary values.
  // Later these will come from FitLogProvider.
  const planCount = 0;
  const savedCount = 0;

  return (
    <div>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B0B0B]/95 backdrop-blur-md">
        {" "}
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {" "}
          {/* Logo */}{" "}
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2"
            aria-label="FitLog Home"
          >
            {" "}
            <Image
              src="/images/logo.png"
              alt={"FitLog Logo"}
              width={120}
              height={40}
              className="h-auto w-24 sm:w-28"
            />{" "}
          </Link>{" "}
          {/* Desktop Navigation */}{" "}
          <div className="hidden items-center gap-2 md:flex">
            {" "}
            <Link
              href="/"
              className={`rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-wide transition ${isWorkoutActive ? "bg-[#CCFF00] text-black" : "text-white/70 hover:bg-white/10 hover:text-white"}`}
            >
              {" "}
              Workout{" "}
            </Link>{" "}
            <Link
              href="/my-plan"
              className={`rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-wide transition ${isPlanActive ? "bg-[#CCFF00] text-black" : "text-white/70 hover:bg-white/10 hover:text-white"}`}
            >
              {" "}
              My Plan{" "}
            </Link>{" "}
          </div>{" "}
          {/* Status Badges */}{" "}
          <div className="flex items-center gap-2 sm:gap-3">
            {" "}
            <Link
              href="/my-plan"
              className="flex items-center gap-1.5 rounded-full bg-[#CCFF00] px-3 py-2 text-xs font-bold uppercase tracking-wide text-black transition hover:bg-[#d8ff33] sm:px-4"
            >
              {" "}
              <span>Plan</span> <span>{planCount}</span>{" "}
            </Link>{" "}
            <Link
              href="/my-plan"
              className="flex items-center gap-1.5 rounded-full border border-[#CCFF00] px-3 py-2 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-[#CCFF00]/10 sm:px-4"
            >
              {" "}
              <span>Saved</span> <span>{savedCount}</span>{" "}
            </Link>{" "}
          </div>{" "}
        </nav>{" "}
        {/* Mobile Navigation */}{" "}
        <div className="border-t border-white/10 px-4 py-2 md:hidden">
          {" "}
          <div className="mx-auto flex max-w-7xl items-center justify-center gap-2">
            {" "}
            <Link
              href="/"
              className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wide transition ${isWorkoutActive ? "bg-[#CCFF00] text-black" : "text-white/70 hover:bg-white/10 hover:text-white"}`}
            >
              {" "}
              Workout{" "}
            </Link>{" "}
            <Link
              href="/my-plan"
              className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wide transition ${isPlanActive ? "bg-[#CCFF00] text-black" : "text-white/70 hover:bg-white/10 hover:text-white"}`}
            >
              {" "}
              My Plan{" "}
            </Link>{" "}
          </div>{" "}
        </div>{" "}
      </header>
    </div>
  );
};

export default Navbar;
