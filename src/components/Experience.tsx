import React from "react";
import { ArrowUpRight, Award, CheckCircle2, GraduationCap, MapPin, Trophy } from "lucide-react";
import {
  certifications,
  educationHistory,
  experienceData,
  officialAchievements
} from "../data/portfolioData";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="border-t border-white/[.08] bg-[#09090b] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section Label */}
        <div className="mb-5 flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-zinc-500">
          <span className="text-lime-400">03</span>
          <span>Career & Credentials</span>
          <span className="h-px w-10 bg-zinc-800" />
        </div>

        <div className="mb-14">
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl text-white">
            Where I've been <span className="text-lime-300">delivering impact.</span>
          </h2>
          <p className="mt-2 text-base text-zinc-400">
            Professional track record in industrial engineering operations, corporate reporting, and CRM/ERP data modeling.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l border-white/[.1] ml-2 sm:ml-4 space-y-12">
          {experienceData.map((exp) => (
            <div key={exp.company} className="relative pl-8 sm:pl-12 group">
              {/* Timeline Indicator Node */}
              <div
                className={`absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-[#09090b] transition-all ${
                  exp.current
                    ? "bg-lime-400 shadow-[0_0_10px_rgba(190,242,100,0.6)] ring-4 ring-lime-400/20"
                    : "bg-zinc-600 group-hover:bg-zinc-400"
                }`}
              />

              <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
                {/* Period & Meta */}
                <div>
                  <div className="font-mono text-xs font-semibold text-lime-400">
                    {exp.period}
                  </div>
                  <div className="mt-1 flex items-center gap-1.5 text-xs text-zinc-400">
                    <MapPin size={12} className="text-zinc-500" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Role & Company Details */}
                <div className="rounded-2xl border border-white/[.06] bg-white/[.015] p-6 transition-all hover:border-lime-400/20 hover:bg-white/[.03]">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-medium text-white">{exp.company}</h3>
                      <p className="mt-1 text-sm font-medium text-lime-300">{exp.role}</p>
                    </div>
                    {exp.current && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-lime-400/30 bg-lime-400/10 px-3 py-1 text-[11px] font-medium text-lime-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-lime-400 animate-pulse" />
                        Current Role
                      </span>
                    )}
                  </div>

                  <ul className="mt-5 space-y-2.5">
                    {exp.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-zinc-300">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lime-400/60" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Operational Achievements Showcase Banner */}
        <div className="mt-20 rounded-3xl border border-lime-400/20 bg-gradient-to-br from-lime-400/[.05] via-white/[.015] to-transparent p-6 sm:p-8">
          <div className="mb-6 flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-lime-400">
            <Trophy size={15} />
            <span>Key Achievements & Operational Milestones</span>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {officialAchievements.map((ach) => (
              <div key={ach.title} className="rounded-2xl border border-white/[.06] bg-black/40 p-5">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <CheckCircle2 size={16} className="text-lime-400 shrink-0" />
                  <span>{ach.title}</span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                  {ach.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Certifications Split Section */}
        <div className="mt-16 pt-16 border-t border-white/[.08] grid gap-8 lg:grid-cols-2">
          {/* Complete 3-tier Education History */}
          <div>
            <div className="mb-6 flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-zinc-500">
              <GraduationCap size={15} className="text-lime-400" />
              <span>Academic Education</span>
            </div>
            <div className="space-y-3">
              {educationHistory.map((edu) => (
                <div
                  key={edu.institution}
                  className="rounded-2xl border border-white/[.08] bg-white/[.02] p-5 transition-all hover:border-lime-400/20"
                >
                  <div className="flex justify-between items-baseline font-mono text-xs text-lime-400">
                    <span>{edu.period}</span>
                    <span className="text-zinc-500">{edu.location}</span>
                  </div>
                  <h4 className="mt-2 text-base font-medium text-white">{edu.institution}</h4>
                  <p className="mt-0.5 text-xs text-zinc-400">{edu.degree}</p>
                  <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-lime-400/25 bg-lime-400/[.06] px-3 py-1 font-mono text-xs text-lime-300">
                    <span>Score: {edu.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Industry Credentials */}
          <div>
            <div className="mb-6 flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-zinc-500">
              <Award size={15} className="text-lime-400" />
              <span>Certifications & Specialized Training</span>
            </div>
            <div className="space-y-3">
              {certifications.map((cert) => {
                const inner = (
                  <div className="flex items-center justify-between w-full">
                    <div>
                      <h4 className="text-sm font-medium text-zinc-100">{cert.title}</h4>
                      <p className="text-xs text-zinc-500">{cert.issuer}</p>
                    </div>
                    {cert.url ? (
                      <span className="flex items-center gap-1 text-xs text-lime-400">
                        <span>Verify</span>
                        <ArrowUpRight size={13} />
                      </span>
                    ) : (
                      <span className="text-[11px] font-mono text-zinc-600">Credential Issued</span>
                    )}
                  </div>
                );

                return cert.url ? (
                  <a
                    key={cert.title}
                    href={cert.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center rounded-xl border border-white/[.07] bg-white/[.015] p-5 transition-all hover:border-lime-400/30 hover:bg-white/[.04]"
                  >
                    {inner}
                  </a>
                ) : (
                  <div
                    key={cert.title}
                    className="flex items-center rounded-xl border border-white/[.07] bg-white/[.015] p-5"
                  >
                    {inner}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
