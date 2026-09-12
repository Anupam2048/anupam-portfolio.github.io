import React, { useState } from "react";
import { Sparkles, Check } from "lucide-react";
import { skillCategories } from "../data/portfolioData";

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section id="skills" className="border-t border-white/[.08] bg-[#09090b] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section Label */}
        <div className="mb-5 flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-zinc-500">
          <span className="text-lime-400">02</span>
          <span>Technical Capabilities</span>
          <span className="h-px w-10 bg-zinc-800" />
        </div>

        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end mb-14">
          <div>
            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl text-white">
              Tools I use to make <span className="text-lime-300">data actionable.</span>
            </h2>
            <p className="mt-3 max-w-2xl text-base text-zinc-400">
              Spanning end-to-end data manipulation from Python and SQL querying to complex Excel logic,
              enterprise BI visualization, and Google Apps Script process automation.
            </p>
          </div>

          {/* Quick Filter Pill Buttons */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory(null)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                activeCategory === null
                  ? "bg-lime-400 text-black shadow-sm font-semibold"
                  : "bg-white/[.04] text-zinc-400 hover:text-white hover:bg-white/[.08]"
              }`}
            >
              All Categories
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.title}
                onClick={() => setActiveCategory(cat.title === activeCategory ? null : cat.title)}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                  activeCategory === cat.title
                    ? "bg-lime-400 text-black shadow-sm font-semibold"
                    : "bg-white/[.04] text-zinc-400 hover:text-white hover:bg-white/[.08]"
                }`}
              >
                {cat.title.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Category Cards Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            const isHighlighted = activeCategory === null || activeCategory === category.title;

            return (
              <div
                key={category.title}
                className={`group relative flex flex-col justify-between rounded-2xl border p-6 transition-all duration-300 ${
                  isHighlighted
                    ? "border-white/[.08] bg-white/[.02] hover:border-lime-400/30 hover:bg-white/[.035] opacity-100"
                    : "border-white/[.04] bg-white/[.01] opacity-40"
                }`}
              >
                <div>
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-lime-400/10 text-lime-400 border border-lime-400/20">
                        <Icon size={16} />
                      </div>
                      <h3 className="text-sm font-semibold text-zinc-100 tracking-wide">
                        {category.title}
                      </h3>
                    </div>
                    <span className="font-mono text-[11px] text-zinc-600">
                      {category.items.length} tools
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1 rounded-full border border-white/[.06] bg-white/[.02] px-3 py-1 text-xs text-zinc-300 transition-colors group-hover:border-lime-400/20 group-hover:text-zinc-100"
                      >
                        <span className="h-1 w-1 rounded-full bg-lime-400/60" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[.05] flex items-center justify-between text-[11px] text-zinc-500 font-mono">
                  <span>PRODUCTION READY</span>
                  <Check size={13} className="text-lime-400" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Core Competency Highlights Banner */}
        <div className="mt-8 rounded-2xl border border-lime-400/20 bg-lime-400/[.03] p-6 sm:p-7">
          <div className="flex items-start gap-4">
            <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-lime-400/20 text-lime-400">
              <Sparkles size={14} />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-lime-300">
                Formula Architecture & Auditing Standard
              </h4>
              <p className="mt-1 text-xs text-zinc-400 leading-relaxed">
                All Excel workbooks adhere to strict MIS modeling standards: separated input data sheets,
                non-volatile dynamic array formulas (replacing slow lookups), error-safe wrappers (<code className="text-lime-300 font-mono">IFERROR</code>, <code className="text-lime-300 font-mono">XLOOKUP</code>), and automated validation constraints to guarantee data integrity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
