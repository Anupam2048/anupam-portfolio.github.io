import React, { useEffect, useState } from "react";
import { ArrowUpRight, FileSpreadsheet, FileText, Menu, X } from "lucide-react";

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenResume: () => void;
}

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Current Work" },
  { id: "calculator", label: "Variance Demo" },
  { id: "projects", label: "Case Study" }
];

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onNavigate,
  onOpenResume
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[.08] bg-[#09090b]/85 backdrop-blur-xl transition-colors duration-300">
      {/* Reading Progress Indicator */}
      <div
        className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-lime-400 to-emerald-400 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Page scroll progress"
      />

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick("home")}
          className="group flex items-center gap-2 font-mono text-base font-bold tracking-tight text-white transition-opacity hover:opacity-90"
          aria-label="Anupam Yadav Portfolio Home"
        >
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="Anupam Yadav"
            className="h-8 w-8 rounded-lg object-contain border border-lime-400/30 bg-black/60 p-0.5 shadow-sm transition-transform duration-300 group-hover:scale-105"
          />
          <span>
            ANUPAM<span className="text-lime-400">.</span>
          </span>
          <span className="hidden text-[11px] font-normal text-zinc-500 sm:inline-block">
            / MIS & Analytics
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex lg:gap-2" aria-label="Main Navigation">
          {navLinks.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-3 py-1.5 text-xs font-medium transition-all duration-200 rounded-full ${
                  isActive
                    ? "text-lime-300 bg-lime-400/10 shadow-[0_0_12px_rgba(190,242,100,0.15)]"
                    : "text-zinc-400 hover:text-zinc-100 hover:bg-white/[.04]"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Links & Resume Trigger */}
        <div className="hidden items-center gap-2 sm:flex">
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 rounded-full border border-lime-400/40 bg-lime-400/[.08] px-3.5 py-1.5 text-xs font-semibold text-lime-300 transition-all hover:bg-lime-400 hover:text-black shadow-sm"
          >
            <FileText size={13} />
            <span>View Resume</span>
          </button>

          <a
            href="https://www.linkedin.com/in/anupam-yadav-a7852a238"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-400 transition-colors hover:border-white/25 hover:text-white"
          >
            <span>LinkedIn</span>
            <ArrowUpRight size={12} />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg border border-white/10 p-2 text-zinc-300 hover:bg-white/[.05] md:hidden"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="border-t border-white/[.08] bg-[#09090b]/98 px-5 py-4 backdrop-blur-2xl md:hidden">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-lime-400/10 text-lime-300 font-semibold"
                      : "text-zinc-400 hover:bg-white/[.04] hover:text-white"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />}
                </button>
              );
            })}
          </nav>
          <div className="mt-4 flex gap-2 border-t border-white/[.06] pt-4">
            <button
              onClick={() => {
                setMobileOpen(false);
                onOpenResume();
              }}
              className="flex-1 text-center rounded-lg border border-lime-400/30 bg-lime-400/10 py-2.5 text-xs font-semibold text-lime-300"
            >
              View Official Resume
            </button>
            <a
              href="https://github.com/Anupam2048"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-white/10 px-3 py-2 text-xs text-zinc-300"
            >
              GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
