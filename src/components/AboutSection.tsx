import React from "react";
import { Cpu, FileSpreadsheet, GitBranch, Layers } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="border-t border-white/[.08] bg-[#09090b] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section Label */}
        <div className="mb-5 flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-zinc-500">
          <span className="text-lime-400">01</span>
          <span>Core Philosophy</span>
          <span className="h-px w-10 bg-zinc-800" />
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-24 items-start">
          <div>
            <h2 className="text-3xl font-medium leading-tight text-white sm:text-4xl">
              I work where <br />
              <span className="text-lime-300">data meets daily operations.</span>
            </h2>
            <div className="mt-6 flex flex-wrap gap-2 text-xs font-mono text-zinc-400">
              <span className="rounded-md border border-white/10 bg-white/[.03] px-2.5 py-1">
                Data Modeling
              </span>
              <span className="rounded-md border border-white/10 bg-white/[.03] px-2.5 py-1">
                Process Governance
              </span>
              <span className="rounded-md border border-white/10 bg-white/[.03] px-2.5 py-1">
                Cost Variance
              </span>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-zinc-300">
              Business reporting, inventory analytics, dashboard development, and process automation.
            </p>
            <p className="text-base leading-relaxed text-zinc-400">
              I take fragmented, messy operational records across site offices, ERPs, and spreadsheets,
              structure them into clean relational data models, automate repetitive collation with Google Apps Script & Excel macros,
              and surface high-signal indicators that leadership can act on immediately.
            </p>

            {/* Three Operational Pillars */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3 pt-4 border-t border-white/[.06]">
              <div className="rounded-xl border border-white/[.06] bg-white/[.015] p-4">
                <FileSpreadsheet size={18} className="text-lime-400 mb-2" />
                <h3 className="text-xs font-semibold text-white uppercase tracking-wider">Clean Architecture</h3>
                <p className="mt-1 text-[11px] text-zinc-500 leading-normal">
                  Strict separation of raw transactional logs from presentation dashboards.
                </p>
              </div>

              <div className="rounded-xl border border-white/[.06] bg-white/[.015] p-4">
                <Cpu size={18} className="text-lime-400 mb-2" />
                <h3 className="text-xs font-semibold text-white uppercase tracking-wider">Zero Redundancy</h3>
                <p className="mt-1 text-[11px] text-zinc-500 leading-normal">
                  Automating repetitive weekly compilation via Google Apps Script & formulas.
                </p>
              </div>

              <div className="rounded-xl border border-white/[.06] bg-white/[.015] p-4">
                <Layers size={18} className="text-lime-400 mb-2" />
                <h3 className="text-xs font-semibold text-white uppercase tracking-wider">Executive Signal</h3>
                <p className="mt-1 text-[11px] text-zinc-500 leading-normal">
                  Estimated vs. actual variance reporting focused on margin leaks and bottlenecks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
