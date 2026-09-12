import React, { useMemo, useState } from "react";
import {
  AlertTriangle,
  Calculator,
  CheckCircle2,
  HelpCircle,
  RefreshCw,
  TrendingDown,
  TrendingUp
} from "lucide-react";

interface PresetScenario {
  name: string;
  budget: number;
  actual: number;
  completion: number;
  description: string;
}

const presets: PresetScenario[] = [
  {
    name: "Material Procurement",
    budget: 1500000,
    actual: 1420000,
    completion: 95,
    description: "Raw steel & industrial coating supply order"
  },
  {
    name: "Site Civil Works",
    budget: 2800000,
    actual: 3150000,
    completion: 80,
    description: "Multi-tier foundation and passage finishing"
  },
  {
    name: "ERP & Portal Rollout",
    budget: 850000,
    actual: 810000,
    completion: 100,
    description: "Google Sites + Sheets automation deployment"
  }
];

export const AnalyticsDemo: React.FC = () => {
  const [budget, setBudget] = useState<number>(1500000);
  const [actual, setActual] = useState<number>(1420000);
  const [completion, setCompletion] = useState<number>(95);

  const calculations = useMemo(() => {
    const variance = actual - budget;
    const variancePercent = budget > 0 ? (variance / budget) * 100 : 0;
    const earnedValue = (budget * completion) / 100;
    const cpi = actual > 0 ? earnedValue / actual : 1; // Cost Performance Index

    let status: "optimal" | "warning" | "critical";
    let statusText: string;

    if (variance <= 0 && cpi >= 1.0) {
      status = "optimal";
      statusText = "Favorable (Under Budget & On Schedule)";
    } else if (variancePercent <= 10) {
      status = "warning";
      statusText = "Moderate Variance (Within Contingency)";
    } else {
      status = "critical";
      statusText = "Unfavorable Cost Runaway (Requires MIS Intervention)";
    }

    return {
      variance,
      variancePercent,
      earnedValue,
      cpi,
      status,
      statusText
    };
  }, [budget, actual, completion]);

  const formatINR = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    }).format(val);
  };

  const applyPreset = (p: PresetScenario) => {
    setBudget(p.budget);
    setActual(p.actual);
    setCompletion(p.completion);
  };

  return (
    <section id="calculator" className="border-t border-white/[.08] bg-[#09090b] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section Label */}
        <div className="mb-5 flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-zinc-500">
          <span className="text-lime-400">05</span>
          <span>Interactive Analytics Lab</span>
          <span className="h-px w-10 bg-zinc-800" />
        </div>

        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
              Live MIS Simulator: <span className="text-lime-300">Cost Variance & CPI</span>
            </h2>
            <p className="mt-2 max-w-2xl text-base text-zinc-400">
              Test how I structure operational variance modeling in production. Adjust project parameters
              below to see real-time financial health indicators, Earned Value (EV), and management flags.
            </p>
          </div>

          {/* Quick Preset Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-zinc-500 mr-1">Sample Scenarios:</span>
            {presets.map((p) => (
              <button
                key={p.name}
                onClick={() => applyPreset(p)}
                className="rounded-full border border-white/10 bg-white/[.03] px-3 py-1.5 text-xs text-zinc-300 transition-colors hover:border-lime-400/40 hover:text-white"
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>

        {/* Simulator Grid */}
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Controls Column */}
          <div className="space-y-6 rounded-3xl border border-white/[.08] bg-white/[.015] p-6 sm:p-8 lg:col-span-5">
            <div className="flex items-center justify-between border-b border-white/[.06] pb-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <Calculator size={16} className="text-lime-400" />
                <span>Input Parameters</span>
              </div>
              <button
                onClick={() => applyPreset(presets[0])}
                className="inline-flex items-center gap-1 text-xs text-zinc-500 hover:text-lime-300 transition-colors"
                title="Reset to default"
              >
                <RefreshCw size={12} />
                <span>Reset</span>
              </button>
            </div>

            {/* Slider 1: Estimated Budget */}
            <div>
              <div className="flex justify-between text-xs font-mono">
                <span className="text-zinc-400">Estimated Project Budget</span>
                <span className="text-lime-300 font-bold">{formatINR(budget)}</span>
              </div>
              <input
                type="range"
                min={500000}
                max={5000000}
                step={50000}
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="mt-2.5 h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-zinc-800 accent-lime-400"
              />
              <div className="mt-1 flex justify-between text-[10px] text-zinc-600 font-mono">
                <span>₹5 Lakhs</span>
                <span>₹50 Lakhs</span>
              </div>
            </div>

            {/* Slider 2: Actual Incurred Cost */}
            <div>
              <div className="flex justify-between text-xs font-mono">
                <span className="text-zinc-400">Actual Incurred Spend</span>
                <span className="text-lime-300 font-bold">{formatINR(actual)}</span>
              </div>
              <input
                type="range"
                min={500000}
                max={5000000}
                step={50000}
                value={actual}
                onChange={(e) => setActual(Number(e.target.value))}
                className="mt-2.5 h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-zinc-800 accent-lime-400"
              />
              <div className="mt-1 flex justify-between text-[10px] text-zinc-600 font-mono">
                <span>₹5 Lakhs</span>
                <span>₹50 Lakhs</span>
              </div>
            </div>

            {/* Slider 3: Completion % */}
            <div>
              <div className="flex justify-between text-xs font-mono">
                <span className="text-zinc-400">Milestone Completion</span>
                <span className="text-lime-300 font-bold">{completion}%</span>
              </div>
              <input
                type="range"
                min={10}
                max={100}
                step={5}
                value={completion}
                onChange={(e) => setCompletion(Number(e.target.value))}
                className="mt-2.5 h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-zinc-800 accent-lime-400"
              />
              <div className="mt-1 flex justify-between text-[10px] text-zinc-600 font-mono">
                <span>10%</span>
                <span>100% Complete</span>
              </div>
            </div>

            {/* Formula Reference Tag */}
            <div className="rounded-xl border border-white/[.06] bg-black/40 p-4 font-mono text-[11px] text-zinc-400">
              <div className="text-zinc-500 mb-1 flex items-center gap-1">
                <HelpCircle size={12} className="text-lime-400" />
                <span>EXCEL LOGIC IMPLEMENTATION:</span>
              </div>
              <p className="text-lime-300">= (Actual_Cost - Planned_Budget) / Planned_Budget</p>
              <p className="mt-1 text-zinc-500">= Earned_Value / Actual_Cost</p>
            </div>
          </div>

          {/* Results & Dashboard Output Column */}
          <div className="space-y-6 rounded-3xl border border-white/[.08] bg-white/[.02] p-6 sm:p-8 lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Executive Status Header Banner */}
              <div
                className={`flex items-center gap-3 rounded-2xl border p-4.5 transition-colors ${
                  calculations.status === "optimal"
                    ? "border-lime-400/30 bg-lime-400/10 text-lime-300"
                    : calculations.status === "warning"
                    ? "border-amber-400/30 bg-amber-400/10 text-amber-300"
                    : "border-rose-400/30 bg-rose-400/10 text-rose-300"
                }`}
              >
                {calculations.status === "optimal" ? (
                  <CheckCircle2 size={20} className="shrink-0" />
                ) : calculations.status === "warning" ? (
                  <AlertTriangle size={20} className="shrink-0" />
                ) : (
                  <TrendingDown size={20} className="shrink-0" />
                )}
                <div>
                  <div className="text-[11px] uppercase tracking-wider font-mono opacity-75">
                    Executive Governance Signal
                  </div>
                  <div className="text-sm font-semibold">{calculations.statusText}</div>
                </div>
              </div>

              {/* KPI Scorecard Grid */}
              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {/* Cost Variance */}
                <div className="rounded-2xl border border-white/[.06] bg-black/40 p-4">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                    Net Variance (₹)
                  </div>
                  <div
                    className={`mt-1 font-mono text-xl font-bold ${
                      calculations.variance <= 0 ? "text-lime-300" : "text-rose-400"
                    }`}
                  >
                    {calculations.variance > 0 ? `+${formatINR(calculations.variance)}` : formatINR(calculations.variance)}
                  </div>
                  <div className="mt-1 text-[11px] text-zinc-500">
                    {calculations.variance <= 0 ? "Under planned spend" : "Budget overrun"}
                  </div>
                </div>

                {/* Variance % */}
                <div className="rounded-2xl border border-white/[.06] bg-black/40 p-4">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                    Variance %
                  </div>
                  <div
                    className={`mt-1 flex items-center gap-1 font-mono text-xl font-bold ${
                      calculations.variancePercent <= 0 ? "text-lime-300" : "text-rose-400"
                    }`}
                  >
                    {calculations.variancePercent <= 0 ? (
                      <TrendingDown size={18} />
                    ) : (
                      <TrendingUp size={18} />
                    )}
                    <span>{calculations.variancePercent.toFixed(1)}%</span>
                  </div>
                  <div className="mt-1 text-[11px] text-zinc-500">Target: ±0.0%</div>
                </div>

                {/* CPI */}
                <div className="rounded-2xl border border-white/[.06] bg-black/40 p-4 col-span-2 sm:col-span-1">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                    Cost Efficiency (CPI)
                  </div>
                  <div
                    className={`mt-1 font-mono text-xl font-bold ${
                      calculations.cpi >= 1 ? "text-lime-300" : "text-amber-300"
                    }`}
                  >
                    {calculations.cpi.toFixed(2)}
                  </div>
                  <div className="mt-1 text-[11px] text-zinc-500">
                    {calculations.cpi >= 1 ? "Positive return on spend" : "Sub-optimal capital burn"}
                  </div>
                </div>
              </div>

              {/* Earned Value Analysis */}
              <div className="mt-6 rounded-2xl border border-white/[.06] bg-white/[.015] p-5">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span>Earned Value (Work Done Value):</span>
                  <span className="text-white font-bold">{formatINR(calculations.earnedValue)}</span>
                </div>
                {/* Visual Progress Bars comparison */}
                <div className="mt-3 space-y-2">
                  <div>
                    <div className="flex justify-between text-[10px] text-zinc-500 font-mono mb-1">
                      <span>Physical Progress: {completion}%</span>
                      <span>Target: 100%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-zinc-800 overflow-hidden">
                      <div
                        className="h-full bg-lime-400 transition-all duration-300"
                        style={{ width: `${completion}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key takeaway */}
            <div className="mt-6 border-t border-white/[.06] pt-4 text-xs text-zinc-400 flex items-center justify-between">
              <span>Automated in Google Sheets & Excel via dynamic formula matrices.</span>
              <span className="font-mono text-lime-400">ZERO RUNAWAY RISK</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
