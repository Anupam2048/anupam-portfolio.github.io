import React from "react";
import { Check, ShieldCheck, Sparkles } from "lucide-react";
import { featuredWorkshop } from "../data/portfolioData";

export const FeaturedProject: React.FC = () => {
  return (
    <section id="projects" className="border-t border-white/[.08] bg-[#09090b] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section Label */}
        <div className="mb-5 flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-zinc-500">
          <span className="text-lime-400">06</span>
          <span>Featured Enterprise Case Study</span>
          <span className="h-px w-10 bg-zinc-800" />
        </div>

        <div className="mb-12 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <h2 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">
              The numbers <span className="text-lime-300">tell the story.</span>
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-zinc-400">
              End-to-end multi-branch analytics modeling for automotive workshop operations and inventory governance.
            </p>
          </div>
        </div>

        {/* Featured Case Study Card */}
        <article className="relative overflow-hidden rounded-3xl border border-lime-400/20 bg-gradient-to-br from-lime-400/[.07] via-white/[.02] to-transparent p-6 sm:p-10 lg:p-12 shadow-2xl">
          {/* Card Top Meta */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[.07] pb-6">
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="rounded bg-lime-400 px-2 py-0.5 text-[10px] font-bold text-black uppercase">
                Case Study {featuredWorkshop.no}
              </span>
              <span className="text-zinc-400 font-medium">{featuredWorkshop.client}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-lime-400 font-mono">
              <ShieldCheck size={14} />
              <span>Executive Multi-Branch System</span>
            </div>
          </div>

          {/* Main Grid: Description + Stats */}
          <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <h3 className="text-2xl font-semibold text-white sm:text-3xl leading-tight">
                {featuredWorkshop.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-zinc-300">
                {featuredWorkshop.desc}
              </p>

              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {featuredWorkshop.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[.03] px-3 py-1 text-xs text-zinc-300"
                  >
                    <span className="h-1 w-1 rounded-full bg-lime-400" />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Key Deliverables Bullet Points */}
              <div className="mt-8 space-y-2.5">
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  Key System Implementations:
                </div>
                {featuredWorkshop.keyHighlights.map((hl) => (
                  <div key={hl} className="flex items-start gap-2.5 text-xs text-zinc-300">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-lime-400/20 text-lime-400">
                      <Check size={10} />
                    </span>
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3-Column Large Metric Badges */}
            <div className="lg:col-span-5">
              <div className="grid grid-cols-3 overflow-hidden rounded-2xl border border-white/[.08] bg-black/40">
                {featuredWorkshop.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex min-h-[140px] flex-col justify-between border-r border-white/[.08] p-4 last:border-r-0 sm:p-5"
                  >
                    <div className="font-mono text-3xl font-bold tracking-tight text-lime-300 sm:text-4xl">
                      {stat.value}
                    </div>
                    <div className="text-[10px] font-mono uppercase leading-tight tracking-wider text-zinc-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-xl border border-lime-400/20 bg-lime-400/[.03] p-4 text-xs text-zinc-300">
                <div className="flex items-center gap-1.5 font-semibold text-lime-300 mb-1">
                  <Sparkles size={13} />
                  <span>Cross-Branch Standardization</span>
                </div>
                <span>
                  Synchronized disparate daily sheets between Dondi & Charama locations into a unified
                  monthly executive reporting cadence.
                </span>
              </div>
            </div>
          </div>

          {/* Three Pillars: Problem / Solution / Impact */}
          <div className="mt-12 grid gap-6 border-t border-white/[.08] pt-8 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/[.06] bg-white/[.015] p-5">
              <div className="mb-2 text-[10px] font-mono uppercase tracking-[0.2em] text-rose-400">
                Operational Problem
              </div>
              <p className="text-xs leading-relaxed text-zinc-400">{featuredWorkshop.problem}</p>
            </div>

            <div className="rounded-2xl border border-white/[.06] bg-white/[.015] p-5">
              <div className="mb-2 text-[10px] font-mono uppercase tracking-[0.2em] text-sky-400">
                Analytics Solution
              </div>
              <p className="text-xs leading-relaxed text-zinc-400">{featuredWorkshop.solution}</p>
            </div>

            <div className="rounded-2xl border border-lime-400/20 bg-lime-400/[.04] p-5">
              <div className="mb-2 text-[10px] font-mono uppercase tracking-[0.2em] text-lime-300">
                Measurable Impact
              </div>
              <p className="text-xs leading-relaxed text-zinc-300">{featuredWorkshop.impact}</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
