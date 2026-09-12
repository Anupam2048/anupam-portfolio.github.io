import React, { useMemo, useState } from "react";
import { ArrowDownToLine, ArrowUpRight, FileSpreadsheet, Search, SlidersHorizontal, Sparkles } from "lucide-react";
import { currentProjects } from "../data/portfolioData";
import { ProjectCategory, ProjectItem } from "../types/portfolio";

interface CurrentWorkProps {
  onSelectProject: (project: ProjectItem) => void;
}

const categories: { id: ProjectCategory; label: string }[] = [
  { id: "all", label: "All Systems (7)" },
  { id: "excel", label: "Excel Modeling" },
  { id: "dashboards", label: "Executive Dashboards" },
  { id: "operations", label: "Operations & Portals" }
];

export const CurrentWork: React.FC<CurrentWorkProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    return currentProjects.filter((p) => {
      const matchesCategory = activeCategory === "all" || p.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesSearch =
        p.title.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q)) ||
        p.keyFormulas?.some((f) => f.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="work" className="border-t border-white/[.08] bg-[#0b0b0e] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section Label */}
        <div className="mb-5 flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-zinc-500">
          <span className="text-lime-400">04</span>
          <span>Operational Systems</span>
          <span className="h-px w-10 bg-zinc-800" />
        </div>

        {/* Section Header */}
        <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <h2 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">
              More than dashboards.<br />
              <span className="text-lime-300">Auditable systems.</span>
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-400">
              Structured operational workbooks, automated cross-department trackers, and executive visibility
              sheets engineered for real-world enterprise constraints.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input
              type="text"
              placeholder="Search formula, tag, or title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-white/10 bg-white/[.03] py-2 pl-9 pr-4 text-xs text-zinc-200 placeholder-zinc-500 transition-colors focus:border-lime-400 focus:bg-white/[.06] focus:outline-none"
            />
          </div>
        </div>

        {/* Category Filters Pill Row */}
        <div className="mb-10 flex flex-wrap items-center gap-2 border-b border-white/[.06] pb-5">
          <div className="mr-2 flex items-center gap-1.5 text-xs text-zinc-500 font-mono">
            <SlidersHorizontal size={13} className="text-lime-400" />
            <span>Filter:</span>
          </div>
          {categories.map((c) => {
            const isSelected = activeCategory === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                  isSelected
                    ? "bg-lime-400 text-black shadow-sm font-semibold"
                    : "bg-white/[.03] text-zinc-400 hover:text-white hover:bg-white/[.07]"
                }`}
              >
                {c.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid or Empty State */}
        {filteredProjects.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2">
            {filteredProjects.map((project) => (
              <article
                key={project.title}
                onClick={() => onSelectProject(project)}
                className="group relative flex flex-col justify-between rounded-3xl border border-white/[.08] bg-white/[.02] p-6 sm:p-8 transition-all duration-300 hover:border-lime-400/40 hover:bg-white/[.035] hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] cursor-pointer"
              >
                <div>
                  {/* Card Header Meta */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-lime-400">
                      {project.no}
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/[.04] px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-zinc-400">
                      {project.type}
                    </span>
                  </div>

                  {/* Card Title & Subtitle */}
                  <h3 className="mt-5 text-xl font-semibold text-white group-hover:text-lime-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-zinc-400 line-clamp-2">
                    {project.desc}
                  </p>

                  {/* 3-Column Metrics Snapshot */}
                  <div className="mt-6 grid grid-cols-3 overflow-hidden rounded-xl border border-white/[.07] bg-black/30">
                    {project.stats.map((st) => (
                      <div
                        key={st.label}
                        className="border-r border-white/[.07] p-3 text-center last:border-r-0"
                      >
                        <div className="font-mono text-lg font-bold text-lime-300">
                          {st.value}
                        </div>
                        <div className="mt-0.5 text-[9px] font-mono uppercase tracking-wider text-zinc-500">
                          {st.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Formula / Highlight Pills */}
                  {project.keyFormulas && (
                    <div className="mt-4 flex flex-wrap items-center gap-1.5">
                      <span className="text-[10px] font-mono text-zinc-500 mr-1">Formulas:</span>
                      {project.keyFormulas.slice(0, 3).map((f) => (
                        <span
                          key={f}
                          className="rounded border border-lime-400/20 bg-lime-400/[.04] px-1.5 py-0.5 text-[10px] font-mono text-lime-300"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Tags */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-white/[.04] px-2.5 py-1 text-[10px] text-zinc-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Controls */}
                <div className="mt-7 flex items-center justify-between border-t border-white/[.06] pt-4">
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-lime-400 group-hover:underline">
                    <span>Technical specs</span>
                    <ArrowUpRight size={13} />
                  </span>

                  {project.file && (
                    <a
                      href={project.file}
                      download
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 rounded-full border border-lime-400/30 bg-lime-400/[.08] px-3 py-1 text-xs font-medium text-lime-300 hover:bg-lime-400/20 transition-colors"
                    >
                      <ArrowDownToLine size={13} />
                      <span>.XLSX</span>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="rounded-3xl border border-dashed border-white/10 bg-white/[.01] p-12 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800 text-zinc-400">
              <FileSpreadsheet size={24} />
            </div>
            <h3 className="mt-4 text-lg font-medium text-white">No operational systems found</h3>
            <p className="mt-1 text-xs text-zinc-400 max-w-sm mx-auto">
              No workbooks or dashboards match your search query "{searchQuery}" under the selected category.
            </p>
            <button
              onClick={() => {
                setActiveCategory("all");
                setSearchQuery("");
              }}
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-lime-400/30 bg-lime-400/10 px-4 py-2 text-xs font-medium text-lime-300 hover:bg-lime-400/20 transition-colors"
            >
              <Sparkles size={13} />
              <span>Reset Filters</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
