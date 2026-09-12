import React, { useState } from "react";
import {
  ArrowUpRight,
  Check,
  Clock,
  Copy,
  Mail,
  MapPin,
  MessageCircle,
  Phone
} from "lucide-react";

export const ContactSection: React.FC = () => {
  const [copiedType, setCopiedType] = useState<"email" | "phone" | null>(null);

  const emailAddress = "yanupam139@gmail.com";
  const phoneNumber = "+919301118319";
  const displayPhone = "+91 9301118319";

  const handleCopy = async (text: string, type: "email" | "phone") => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedType(type);
      setTimeout(() => setCopiedType(null), 2500);
    } catch {
      setCopiedType(null);
    }
  };

  return (
    <section id="contact" className="border-t border-white/[.08] bg-[#09090b] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section Label */}
        <div className="mb-5 flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-zinc-500">
          <span className="text-lime-400">07</span>
          <span>Initiate Contact</span>
          <span className="h-px w-10 bg-zinc-800" />
        </div>

        {/* Header */}
        <div className="max-w-3xl">
          <h2 className="text-4xl font-medium tracking-tight text-white sm:text-6xl leading-[1.05]">
            Have a data problem?<br />
            <span className="text-lime-300">Let's solve it.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-400">
            Open to full-time Data Analyst, MIS Executive, and Business Reporting roles.
            Whether you need cleaner operational workbooks, executive KPI dashboards, or automated reporting pipelines, connect directly through any of the channels below.
          </p>
        </div>

        {/* Contact Channels Grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {/* Email Card */}
          <div className="flex flex-col justify-between rounded-3xl border border-white/[.08] bg-white/[.02] p-6 sm:p-7 transition-all duration-300 hover:border-lime-400/40 hover:bg-white/[.035]">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-lime-400/10 text-lime-400 border border-lime-400/20">
                  <Mail size={20} />
                </div>
                <button
                  onClick={() => handleCopy(emailAddress, "email")}
                  className="rounded-full border border-white/10 bg-white/[.04] px-3 py-1 text-xs text-zinc-400 hover:border-lime-400/40 hover:text-white transition-all flex items-center gap-1.5"
                  title="Copy email to clipboard"
                >
                  {copiedType === "email" ? (
                    <span className="flex items-center gap-1 text-[11px] text-lime-400 font-mono">
                      <Check size={13} /> Copied!
                    </span>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span className="text-[11px] font-mono">Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="mt-6">
                <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                  Primary Email
                </div>
                <div className="mt-1 text-base font-semibold text-white break-all">
                  {emailAddress}
                </div>
                <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                  Direct inbox for interview requests, job opportunities, and project consultations.
                </p>
              </div>
            </div>

            <a
              href={`mailto:${emailAddress}?subject=Job%20Opportunity%20/%20Inquiry%20for%20Anupam%20Yadav`}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-lime-400 px-4 py-2.5 text-xs font-semibold text-black hover:bg-lime-300 transition-all shadow-sm"
            >
              <span>Send Direct Email</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Phone / WhatsApp Card */}
          <div className="flex flex-col justify-between rounded-3xl border border-white/[.08] bg-white/[.02] p-6 sm:p-7 transition-all duration-300 hover:border-lime-400/40 hover:bg-white/[.035]">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-lime-400/10 text-lime-400 border border-lime-400/20">
                  <Phone size={20} />
                </div>
                <button
                  onClick={() => handleCopy(displayPhone, "phone")}
                  className="rounded-full border border-white/10 bg-white/[.04] px-3 py-1 text-xs text-zinc-400 hover:border-lime-400/40 hover:text-white transition-all flex items-center gap-1.5"
                  title="Copy phone to clipboard"
                >
                  {copiedType === "phone" ? (
                    <span className="flex items-center gap-1 text-[11px] text-lime-400 font-mono">
                      <Check size={13} /> Copied!
                    </span>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span className="text-[11px] font-mono">Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="mt-6">
                <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                  Direct Phone & WhatsApp
                </div>
                <div className="mt-1 text-base font-semibold text-white">
                  {displayPhone}
                </div>
                <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                  Available for direct calls, recruiter phone screenings, and instant WhatsApp chat.
                </p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-2">
              <a
                href={`tel:${phoneNumber}`}
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/[.04] px-3 py-2.5 text-xs font-medium text-white hover:border-lime-400/40 hover:bg-white/[.08] transition-all"
              >
                <Phone size={13} />
                <span>Call Now</span>
              </a>
              <a
                href={`https://wa.me/${phoneNumber.replace("+", "")}?text=${encodeURIComponent(
                  "Hi Anupam, I reviewed your portfolio and would like to discuss an opportunity."
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-lime-400 px-3 py-2.5 text-xs font-semibold text-black hover:bg-lime-300 transition-all"
              >
                <MessageCircle size={14} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Availability & Location Card */}
          <div className="flex flex-col justify-between rounded-3xl border border-white/[.08] bg-white/[.02] p-6 sm:p-7 transition-all duration-300 hover:border-lime-400/40 hover:bg-white/[.035] sm:col-span-2 lg:col-span-1">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-lime-400/10 text-lime-400 border border-lime-400/20">
                  <Clock size={20} />
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-lime-400/30 bg-lime-400/10 px-2.5 py-0.5 text-[10px] font-mono font-medium text-lime-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime-400 animate-pulse" />
                  Immediate Joining
                </span>
              </div>

              <div className="mt-6 space-y-3">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                    Location & Mobility
                  </div>
                  <div className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-white">
                    <MapPin size={14} className="text-lime-400" />
                    <span>Raipur, CG · Open to Relocation</span>
                  </div>
                  <p className="mt-1 text-xs text-zinc-400">
                    On-site, Hybrid, and Remote work across India.
                  </p>
                </div>

                <div className="border-t border-white/[.06] pt-3">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                    Response Window
                  </div>
                  <div className="mt-0.5 text-xs font-medium text-zinc-300">
                    Typically responds within 2 hours during business hours.
                  </div>
                </div>
              </div>
            </div>

            {/* Social Profile Links */}
            <div className="mt-6 flex items-center gap-2">
              <a
                href="https://www.linkedin.com/in/anupam-yadav-a7852a238"
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/[.04] px-3 py-2 text-xs font-medium text-zinc-300 hover:border-lime-400/40 hover:text-white transition-all"
              >
                <span>LinkedIn</span>
                <ArrowUpRight size={13} />
              </a>
              <a
                href="https://github.com/Anupam2048"
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/[.04] px-3 py-2 text-xs font-medium text-zinc-300 hover:border-lime-400/40 hover:text-white transition-all"
              >
                <span>GitHub</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
