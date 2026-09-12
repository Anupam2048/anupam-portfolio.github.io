import React, { useEffect } from "react";
import {
  ArrowUpRight,
  Award,
  BookOpen,
  Briefcase,
  CheckCircle2,
  Copy,
  Download,
  FolderGit2,
  Mail,
  MapPin,
  Phone,
  Printer,
  Sparkles,
  X
} from "lucide-react";
import {
  certifications,
  educationHistory,
  experienceData,
  featuredWorkshop,
  officialAchievements,
  resumeSummary,
  skillCategories
} from "../data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-white/15 bg-[#0d0d11] p-6 text-zinc-100 shadow-2xl sm:p-10">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between border-b border-white/[.08] pb-5 mb-8">
          <div className="flex items-center gap-2 text-xs font-mono text-lime-400">
            <span className="h-2 w-2 rounded-full bg-lime-400" />
            <span>OFFICIAL CURRICULUM VITAE</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[.04] px-3.5 py-1.5 text-xs text-zinc-300 hover:border-lime-400/40 hover:text-white transition-all"
              title="Print or Save as PDF"
            >
              <Printer size={13} />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="rounded-full border border-white/10 p-2 text-zinc-400 hover:bg-white/10 hover:text-white transition-colors"
              aria-label="Close resume viewer"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* ATS-Formatted Resume Content */}
        <div className="space-y-8 print:text-black">
          {/* Header Block */}
          <div className="border-b border-white/[.08] pb-6 text-center sm:text-left">
            <h1 id="resume-title" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              ANUPAM YADAV
            </h1>
            <p className="mt-1 text-sm font-medium text-lime-300">
              Data Analyst | MIS Executive
            </p>

            <div className="mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-x-5 gap-y-2 text-xs text-zinc-400">
              <span className="flex items-center gap-1">
                <MapPin size={12} className="text-lime-400" />
                Raipur, Chhattisgarh, India
              </span>
              <a href="tel:+919301118319" className="flex items-center gap-1 hover:text-white transition-colors">
                <Phone size={12} className="text-lime-400" />
                +91 9301118319
              </a>
              <a href="mailto:yanupam139@gmail.com" className="flex items-center gap-1 hover:text-white transition-colors">
                <Mail size={12} className="text-lime-400" />
                yanupam139@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/anupam-yadav-a7852a238"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 hover:text-white transition-colors"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://github.com/Anupam2048"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 hover:text-white transition-colors"
              >
                GitHub ↗
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-lime-400 border-b border-white/[.08] pb-1.5 mb-3 flex items-center gap-2">
              <Sparkles size={13} />
              <span>Professional Summary</span>
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-zinc-300">
              {resumeSummary}
            </p>
          </div>

          {/* Skills Breakdown */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-lime-400 border-b border-white/[.08] pb-1.5 mb-3">
              Technical & Domain Skills
            </h2>
            <div className="grid gap-2.5 sm:grid-cols-2 text-xs">
              <div>
                <span className="font-semibold text-white">Programming Languages:</span>
                <p className="text-zinc-400 mt-0.5">Python (Pandas, Numpy), SQL (MySQL)</p>
              </div>
              <div>
                <span className="font-semibold text-white">ERP Systems (Construction & Infra):</span>
                <p className="text-zinc-400 mt-0.5">BOQ, GRN, DPR, Material Indent, Issue, PO, Machinery</p>
              </div>
              <div>
                <span className="font-semibold text-white">Data & BI:</span>
                <p className="text-zinc-400 mt-0.5">
                  Microsoft Excel (Advanced Formulas, XLOOKUP, SUMIFS, Pivot Tables, Data Validation), Power BI (Dashboard), Tableau, Google Sheets, Looker
                </p>
              </div>
              <div>
                <span className="font-semibold text-white">Domain & Governance:</span>
                <p className="text-zinc-400 mt-0.5">
                  MIS Reporting, Performance Scorecards, KPI Tracking, Data Validation
                </p>
              </div>
              <div className="sm:col-span-2">
                <span className="font-semibold text-white">Platforms & Tools:</span>
                <p className="text-zinc-400 mt-0.5">
                  MS Office, Windows 10/11, Claude, OpenAI (ChatGPT), Gemini, Google Apps Script, Google Sites
                </p>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-lime-400 border-b border-white/[.08] pb-1.5 mb-4 flex items-center gap-2">
              <Briefcase size={13} />
              <span>Work Experience</span>
            </h2>
            <div className="space-y-6">
              {experienceData.map((exp) => (
                <div key={exp.company}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <h3 className="text-sm font-bold text-white">{exp.company}</h3>
                      <p className="text-xs font-medium text-lime-300">{exp.role}</p>
                    </div>
                    <div className="text-right text-xs font-mono text-zinc-400">
                      <div>{exp.period}</div>
                      <div>{exp.location}</div>
                    </div>
                  </div>
                  <ul className="mt-2.5 space-y-1.5 text-xs text-zinc-300">
                    {exp.points.map((p) => (
                      <li key={p} className="flex items-start gap-2">
                        <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-lime-400" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-lime-400 border-b border-white/[.08] pb-1.5 mb-4 flex items-center gap-2">
              <FolderGit2 size={13} />
              <span>Key Projects</span>
            </h2>
            <div className="space-y-5">
              {/* Workshop Project */}
              <div>
                <div className="flex items-baseline justify-between">
                  <h3 className="text-sm font-bold text-white">
                    {featuredWorkshop.title} — <span className="font-normal text-zinc-400">{featuredWorkshop.client}</span>
                  </h3>
                </div>
                <ul className="mt-2 space-y-1.5 text-xs text-zinc-300">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-lime-400" />
                    <span>
                      <strong className="text-white">End-to-End Analytics Solution:</strong> Designed and built an enterprise-grade 27-sheet Excel & Power BI analytics workbook tracking 16 Critical Management Numbers across multi-branch workshop operations (Dondi & Charama branches).
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-lime-400" />
                    <span>
                      <strong className="text-white">Financial & Revenue Leakage Control:</strong> Built revenue tracking modules across 6 streams (Parts, Labour, Oil, DEF, Warranty, Accidental) and implemented estimate conversion models to identify rejected estimate values and minimize revenue leakage.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-lime-400" />
                    <span>
                      <strong className="text-white">Inventory & VOR Optimization:</strong> Developed parts classification models (Fast/Slow/Dead Stock &gt;180 days) and back-order tracking matrix to monitor Vehicle Off Road (VOR) incidents and reduce parts delivery delays.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Construction Operations Dashboard */}
              <div>
                <h3 className="text-sm font-bold text-white">
                  Construction Operations Dashboard — <span className="font-normal text-zinc-400">Surface Engineering Pvt. Ltd.</span>
                </h3>
                <ul className="mt-1.5 space-y-1 text-xs text-zinc-300">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-lime-400" />
                    <span>Created dashboards for inventory tracking, attendance monitoring, and operational reporting.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-lime-400" />
                    <span>Automated data collection using Google Sheets and Apps Script.</span>
                  </li>
                </ul>
              </div>

              {/* Site Reporting Management System */}
              <div>
                <h3 className="text-sm font-bold text-white">
                  Site Reporting Management System — <span className="font-normal text-zinc-400">Surface Engineering Pvt. Ltd.</span>
                </h3>
                <ul className="mt-1.5 space-y-1 text-xs text-zinc-300">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-lime-400" />
                    <span>Built a cloud-based reporting platform using Google Sites and Google Sheets.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-lime-400" />
                    <span>Centralized stock reports, attendance, and daily site updates.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-lime-400 border-b border-white/[.08] pb-1.5 mb-3 flex items-center gap-2">
              <BookOpen size={13} />
              <span>Education</span>
            </h2>
            <div className="space-y-3">
              {educationHistory.map((edu) => (
                <div key={edu.institution} className="flex flex-wrap items-baseline justify-between text-xs">
                  <div>
                    <h3 className="font-bold text-white">{edu.institution}</h3>
                    <p className="text-zinc-400">{edu.degree} || {edu.score}</p>
                  </div>
                  <div className="text-right font-mono text-zinc-500">
                    <div>{edu.period}</div>
                    <div>{edu.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Achievements in 2 columns */}
          <div className="grid gap-6 sm:grid-cols-2 pt-2">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-lime-400 border-b border-white/[.08] pb-1.5 mb-3 flex items-center gap-2">
                <Award size={13} />
                <span>Certifications</span>
              </h2>
              <ul className="space-y-2 text-xs text-zinc-300">
                {certifications.map((cert) => (
                  <li key={cert.title} className="flex items-start gap-2">
                    <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-lime-400" />
                    <span>
                      <strong className="text-white">{cert.title}</strong> — {cert.issuer}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-lime-400 border-b border-white/[.08] pb-1.5 mb-3 flex items-center gap-2">
                <CheckCircle2 size={13} />
                <span>Key Achievements</span>
              </h2>
              <ul className="space-y-2 text-xs text-zinc-300">
                {officialAchievements.map((ach) => (
                  <li key={ach.title} className="flex items-start gap-2">
                    <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-lime-400" />
                    <span>{ach.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-white/[.08] pt-6">
          <div className="text-xs font-mono text-zinc-500">
            Anupam Yadav · Verified Resume
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 rounded-full bg-lime-400 px-5 py-2 text-xs font-semibold text-black hover:bg-lime-300 transition-colors"
            >
              <Printer size={13} />
              <span>Print Resume</span>
            </button>
            <button
              onClick={onClose}
              className="rounded-full border border-white/10 px-4 py-2 text-xs text-zinc-400 hover:text-white transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
