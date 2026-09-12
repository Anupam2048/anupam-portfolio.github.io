import React from "react";
import {
  ArrowDownToLine,
  ArrowUpRight,
  Calculator,
  CheckCircle2,
  FileText,
  Mail,
  MapPin
} from "lucide-react";
import { quickMetrics, resumeSummary } from "../data/portfolioData";

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenResume }) => {
  return (
    <section id="home" className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden pt-20 pb-16">
      {/* Background Gradients & Mesh */}
      <div className="grid-bg absolute inset-0 pointer-events-none" />
      <div className="radial-glow absolute inset-0 pointer-events-none" />
      <div className="absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-lime-400/[.05] blur-[120px] pointer-events-none" />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2.5 rounded-full border border-lime-400/25 bg-lime-400/[.08] px-3.5 py-1.5 text-xs text-lime-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-lime-400" />
          </span>
          <span className="font-mono uppercase tracking-wider text-[11px]">Available for Analytics & MIS Roles</span>
        </div>

        {/* Hero Main Heading */}
        <div className="mt-8">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500 mb-3">
            Operations • Executive Dashboards • Process Automation
          </p>
          <h1 className="text-[clamp(3.2rem,8vw,7.5rem)] font-bold leading-[0.9] tracking-[-0.06em] text-white">
            Anupam <br />
            <span className="text-zinc-500 hover:text-zinc-400 transition-colors">Yadav</span>
            <span className="text-lime-400">.</span>
          </h1>
        </div>

        {/* Subtitle & Value Proposition harmonized with resume */}
        <div className="mt-8 max-w-2xl">
          <p className="text-lg leading-relaxed text-zinc-300 sm:text-xl font-light">
            Data Analyst <span className="text-lime-400 font-normal">×</span> MIS Executive.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
            {resumeSummary}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-9 flex flex-wrap items-center gap-3.5">
          <button
            onClick={() => onNavigate("work")}
            className="group inline-flex items-center gap-2 rounded-full bg-lime-400 px-6 py-3.5 text-sm font-semibold text-black transition-all hover:bg-lime-300 hover:shadow-[0_0_24px_rgba(190,242,100,0.35)]"
          >
            <span>Explore 7 Live Systems</span>
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 rounded-full border border-lime-400/40 bg-lime-400/10 px-5 py-3.5 text-sm font-medium text-lime-300 transition-all hover:bg-lime-400 hover:text-black"
          >
            <FileText size={15} />
            <span>View Official Resume</span>
          </button>

          <button
            onClick={() => onNavigate("calculator")}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.03] px-5 py-3.5 text-sm font-medium text-zinc-300 transition-colors hover:border-lime-400/30 hover:text-white"
          >
            <Calculator size={15} />
            <span>Variance Demo</span>
          </button>

          <a
            href={`${import.meta.env.BASE_URL}workbooks/HOTEL_ROOM_TRACKING_DASHBOARD.xlsx`}
            download
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.03] px-5 py-3.5 text-sm text-zinc-400 transition-colors hover:border-white/25 hover:text-white"
          >
            <ArrowDownToLine size={15} />
            <span>Sample .xlsx</span>
          </a>

          <button
            onClick={() => onNavigate("contact")}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3.5 text-sm text-zinc-400 transition-colors hover:border-white/20 hover:text-white"
          >
            <Mail size={15} />
            <span>Get in Touch</span>
          </button>
        </div>

        {/* Quick Highlights / Metrics Ribbon */}
        <div className="mt-16 pt-8 border-t border-white/[.08]">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
            {quickMetrics.map((metric) => (
              <div
                key={metric.label}
                className="group rounded-2xl border border-white/[.06] bg-white/[.02] p-4 transition-all hover:border-lime-400/25 hover:bg-white/[.04]"
              >
                <div className="flex items-baseline gap-1.5">
                  <span className="font-mono text-2xl font-bold tracking-tight text-lime-300 sm:text-3xl">
                    {metric.value}
                  </span>
                  <CheckCircle2 size={13} className="text-lime-400 opacity-60" />
                </div>
                <div className="mt-1.5 text-xs font-medium text-zinc-200">{metric.label}</div>
                <div className="mt-1 text-[11px] text-zinc-500 leading-snug">{metric.detail}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Location & Status footer */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-500">
          <div className="flex items-center gap-2">
            <MapPin size={13} className="text-lime-400/70" />
            <span>Raipur, Chhattisgarh · Open to Remote & Relocation</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Anupam2048"
              target="_blank"
              rel="noreferrer"
              className="hover:text-lime-300 transition-colors"
            >
              GitHub / Anupam2048
            </a>
            <span>•</span>
            <a
              href="https://www.linkedin.com/in/anupam-yadav-a7852a238"
              target="_blank"
              rel="noreferrer"
              className="hover:text-lime-300 transition-colors"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
