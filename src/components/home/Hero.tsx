
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-[#0B0B0B] text-white">
      <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-20 lg:px-8 lg:py-24">

        {/* Left Content */}
        <div className="max-w-2xl">

          {/* Eyebrow */}
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#CCFF00]">
            Workout Library
          </p>

          {/* Main Heading */}
          <h1 className="text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            Train With Intent.
            <br />

            <span className="text-[#CCFF00]">
              Log Every Set.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-xl text-base leading-7 text-white/60 sm:text-lg">
            FitLog is a dark, no-nonsense gym companion: pick a lift,
            lock it into today&apos;s plan, and watch the week&aops;s work add up.
          </p>

          {/* CTA Button */}
          <Link
            href="#library"
            className="btn mt-8 rounded-full border-0 bg-[#CCFF00] px-6 text-sm font-bold uppercase tracking-wide text-black hover:bg-[#d9ff33]"
          >
            <span>Browse Workouts</span>

            {/* Arrow Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </div>

        {/* Right Side - Hero Image */}
        <div className="relative flex items-center justify-center md:justify-end">

          {/* Background Glow */}
          <div className="absolute h-64 w-64 rounded-full bg-[#CCFF00]/10 blur-3xl sm:h-80 sm:w-80" />

          {/* Image */}
          <div className="relative w-full max-w-lg overflow-hidden rounded-2xl">
            <Image
              src="/images/banner.png"
              alt="FitLog workout"
              width={700}
              height={700}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;

