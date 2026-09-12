import React from "react";
import { ArrowUpRight } from "lucide-react";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="border-t border-white/[.08] bg-[#070709] py-12 text-zinc-500">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          {/* Brand & Mission */}
          <div>
            <div className="flex items-center gap-2.5 font-mono text-sm font-bold text-white">
              <img
                src={`${import.meta.env.BASE_URL}logo.png`}
                alt="Anupam Yadav"
                className="h-7 w-7 rounded-lg object-contain border border-lime-400/30 bg-black/60 p-0.5"
              />
              <span>
                ANUPAM YADAV<span className="text-lime-400">.</span>
              </span>
            </div>
            <p className="mt-1.5 text-xs text-zinc-500">
              Data Analyst & MIS Executive · Raipur, Chhattisgarh, India
            </p>
          </div>

          {/* Quick Nav Anchor Buttons */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs">
            <button onClick={() => onNavigate("home")} className="hover:text-white transition-colors">
              Home
            </button>
            <button onClick={() => onNavigate("about")} className="hover:text-white transition-colors">
              About
            </button>
            <button onClick={() => onNavigate("skills")} className="hover:text-white transition-colors">
              Skills
            </button>
            <button onClick={() => onNavigate("experience")} className="hover:text-white transition-colors">
              Experience
            </button>
            <button onClick={() => onNavigate("work")} className="hover:text-white transition-colors">
              Current Work
            </button>
            <button onClick={() => onNavigate("calculator")} className="hover:text-white transition-colors">
              Variance Lab
            </button>
            <button onClick={() => onNavigate("projects")} className="hover:text-white transition-colors">
              Case Study
            </button>
            <a href="mailto:yanupam139@gmail.com" className="hover:text-white transition-colors">
              Email
            </a>
          </div>
        </div>

        {/* Bottom copyright and metadata */}
        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-white/[.06] pt-6 text-[11px] text-zinc-600 sm:flex-row sm:items-center font-mono">
          <div className="flex items-center gap-3">
            <span>© {new Date().getFullYear()} Anupam Yadav</span>
            <span>•</span>
            <span className="text-zinc-500">All Workbooks Sanitized & Production Tested</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-lime-400/80">Data → Insight → Action</span>
            <a
              href="https://github.com/Anupam2048"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 hover:text-white transition-colors"
            >
              <span>GitHub</span>
              <ArrowUpRight size={11} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
