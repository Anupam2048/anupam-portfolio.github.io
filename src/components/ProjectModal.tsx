import React, { useEffect } from "react";
import { ArrowDownToLine, Check, FileSpreadsheet, Sparkles, X } from "lucide-react";
import { ProjectItem } from "../types/portfolio";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/10 bg-[#0e0e11] p-6 text-zinc-100 shadow-2xl sm:p-8">
        {/* Header Bar */}
        <div className="flex items-start justify-between gap-4 border-b border-white/[.08] pb-5">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="text-lime-400 font-bold">{project.no}</span>
              <span className="text-zinc-600">/</span>
              <span className="text-zinc-400 uppercase tracking-wider">{project.type}</span>
            </div>
            <h3 id="modal-title" className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="rounded-full border border-white/10 p-2 text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Key Metrics Stats */}
        <div className="mt-6 grid grid-cols-3 overflow-hidden rounded-2xl border border-white/[.08] bg-white/[.02]">
          {project.stats.map((st) => (
            <div key={st.label} className="border-r border-white/[.08] p-4 text-center last:border-r-0">
              <div className="font-mono text-xl font-bold text-lime-300 sm:text-2xl">{st.value}</div>
              <div className="mt-1 text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                {st.label}
              </div>
            </div>
          ))}
        </div>

        {/* Narrative & Architecture */}
        <div className="mt-6 space-y-5 text-sm text-zinc-300">
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
              System Architecture & Workflow
            </h4>
            <p className="leading-relaxed text-zinc-300 bg-white/[.015] p-4 rounded-xl border border-white/[.05]">
              {project.desc}
            </p>
          </div>

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                Operational Features
              </h4>
              <ul className="space-y-2">
                {project.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5 text-xs text-zinc-300">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-lime-400/15 text-lime-400">
                      <Check size={10} />
                    </span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Formula & Method Stack */}
          {project.keyFormulas && project.keyFormulas.length > 0 && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                Core Formulas & Technical Methods
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.keyFormulas.map((form) => (
                  <span
                    key={form}
                    className="inline-flex items-center gap-1 rounded-lg border border-lime-400/20 bg-lime-400/[.05] px-2.5 py-1 font-mono text-xs text-lime-300"
                  >
                    <Sparkles size={11} className="text-lime-400" />
                    {form}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Business Impact */}
          {project.businessImpact && (
            <div className="rounded-xl border border-lime-400/25 bg-lime-400/[.04] p-4">
              <h4 className="text-xs font-semibold text-lime-300 uppercase tracking-wider">
                Measurable Business Impact
              </h4>
              <p className="mt-1 text-xs text-zinc-300 leading-relaxed">
                {project.businessImpact}
              </p>
            </div>
          )}
        </div>

        {/* Modal Actions */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-white/[.08] pt-5">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-md bg-white/[.05] px-2 py-1 text-[10px] text-zinc-400">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {project.file ? (
              <a
                href={project.file}
                download
                className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-5 py-2.5 text-xs font-semibold text-black transition-all hover:bg-lime-300 shadow-md"
              >
                <ArrowDownToLine size={14} />
                <span>Download Sample .XLSX</span>
              </a>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-xs text-zinc-500 font-mono">
                <FileSpreadsheet size={13} />
                <span>Company Internal (Confidential Data Redacted)</span>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
