
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#070707] px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
        
        {/* Left: Logo + Brand */}
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="FitLog logo"
            width={32}
            height={32}
          />

          <span className="text-xl font-black tracking-wide">
            FITLOG
          </span>
        </div>

        {/* Right: Copyright */}
        <p className="text-center text-sm text-white/40 sm:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
