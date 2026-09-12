import React, { useState } from "react";
import {
  ArrowUpRight,
  Check,
  CheckCircle2,
  Copy,
  Loader2,
  Mail,
  MessageSquare,
  Phone,
  Send,
  Sparkles
} from "lucide-react";

interface FormState {
  name: string;
  email: string;
  role: string;
  message: string;
}

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    role: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string>("");
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
      // Fallback if clipboard API is restricted
      setCopiedType(null);
    }
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validation checks
    if (!formState.name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!formState.email.trim() || !validateEmail(formState.email)) {
      setError("Please provide a valid business email address.");
      return;
    }
    if (!formState.message.trim() || formState.message.trim().length < 10) {
      setError("Please include a brief message (at least 10 characters).");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/yanupam139@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          role: formState.role || "Not specified",
          message: formState.message,
          _subject: `New Portfolio Inquiry from ${formState.name}`,
          _template: "table",
          _captcha: "false"
        })
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok || data.success === "true" || (data.message && data.message.includes("Activation"))) {
        setLoading(false);
        setSuccess(true);
        if (data.message && data.message.includes("Activation")) {
          setSuccessMessage("Inquiry received! Check your inbox (yanupam139@gmail.com) for FormSubmit's one-time activation link to confirm reception.");
        } else {
          setSuccessMessage("Thank you for reaching out! Your message was delivered directly to yanupam139@gmail.com, and Anupam will review it shortly.");
        }
        setFormState({ name: "", email: "", role: "", message: "" });
      } else {
        throw new Error(data.message || "Failed to deliver message");
      }
    } catch (err: unknown) {
      setLoading(false);
      const errMsg = err instanceof Error ? err.message : "Submission failed";
      setError(
        `${errMsg}. If network restrictions apply, you can send directly using the mail link below.`
      );
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

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Left Column: Direct channels & value statement */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <h2 className="text-4xl font-medium tracking-tight text-white sm:text-6xl leading-[1.05]">
                Have a data problem?<br />
                <span className="text-lime-300">Let's solve it.</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-zinc-400 max-w-md">
                Open to full-time Data Analyst, MIS Executive, and Business Reporting roles.
                Whether you need cleaner spreadsheets, executive KPI dashboards, or automated reporting pipelines, let's talk.
              </p>
            </div>

            {/* Quick Copy / Action Pills */}
            <div className="space-y-3">
              {/* Email Card */}
              <div className="flex items-center justify-between rounded-2xl border border-white/[.08] bg-white/[.02] p-4 sm:p-5">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-400/10 text-lime-400">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                      Primary Email
                    </div>
                    <a
                      href={`mailto:${emailAddress}?subject=Opportunity%20for%20Anupam%20Yadav`}
                      className="text-sm font-medium text-white hover:text-lime-300 transition-colors"
                    >
                      {emailAddress}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(emailAddress, "email")}
                  className="rounded-full border border-white/10 bg-white/[.04] p-2 text-zinc-400 hover:border-lime-400/40 hover:text-white transition-all"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedType === "email" ? (
                    <span className="flex items-center gap-1 text-[11px] text-lime-400 font-mono px-1">
                      <Check size={14} /> Copied!
                    </span>
                  ) : (
                    <Copy size={15} />
                  )}
                </button>
              </div>

              {/* Phone Card */}
              <div className="flex items-center justify-between rounded-2xl border border-white/[.08] bg-white/[.02] p-4 sm:p-5">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-400/10 text-lime-400">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                      Direct Phone / WhatsApp
                    </div>
                    <a
                      href={`tel:${phoneNumber}`}
                      className="text-sm font-medium text-white hover:text-lime-300 transition-colors"
                    >
                      {displayPhone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(displayPhone, "phone")}
                  className="rounded-full border border-white/10 bg-white/[.04] p-2 text-zinc-400 hover:border-lime-400/40 hover:text-white transition-all"
                  title="Copy phone to clipboard"
                  aria-label="Copy phone number"
                >
                  {copiedType === "phone" ? (
                    <span className="flex items-center gap-1 text-[11px] text-lime-400 font-mono px-1">
                      <Check size={14} /> Copied!
                    </span>
                  ) : (
                    <Copy size={15} />
                  )}
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://github.com/Anupam2048"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-4 py-2 text-xs font-medium text-zinc-300 hover:border-lime-400/40 hover:text-white transition-colors"
              >
                <span>GitHub Repository</span>
                <ArrowUpRight size={13} />
              </a>
              <a
                href="https://www.linkedin.com/in/anupam-yadav-a7852a238"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-4 py-2 text-xs font-medium text-zinc-300 hover:border-lime-400/40 hover:text-white transition-colors"
              >
                <span>LinkedIn Profile</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>

          {/* Right Column: Direct Message Form with States */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-white/[.08] bg-white/[.015] p-6 sm:p-8">
              <div className="mb-6 flex items-center justify-between border-b border-white/[.06] pb-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <MessageSquare size={16} className="text-lime-400" />
                  <span>Send a Direct Inquiry</span>
                </div>
                <span className="text-[11px] font-mono text-lime-400">Response within 24h</span>
              </div>

              {success ? (
                /* Success State */
                <div className="rounded-2xl border border-lime-400/30 bg-lime-400/[.06] p-8 text-center animate-fade-in">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-lime-400/20 text-lime-400">
                    <CheckCircle2 size={28} />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-white">Inquiry Received!</h3>
                  <p className="mt-2 text-xs text-zinc-300 leading-relaxed max-w-sm mx-auto">
                    {successMessage || "Thank you for reaching out. Your message has been received and will be reviewed shortly."}
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-lime-400/30 bg-lime-400/10 px-4 py-2 text-xs font-medium text-lime-300 hover:bg-lime-400/20 transition-colors"
                  >
                    <Sparkles size={13} />
                    <span>Send Another Inquiry</span>
                  </button>
                </div>
              ) : (
                /* Form with Loading & Error States */
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="rounded-xl border border-rose-500/30 bg-rose-500/10 p-3 text-xs text-rose-300">
                      {error}
                    </div>
                  )}

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-mono text-zinc-400 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        disabled={loading}
                        placeholder="e.g. Rahul Sharma"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full rounded-xl border border-white/10 bg-white/[.03] px-3.5 py-2.5 text-xs text-white placeholder-zinc-600 focus:border-lime-400 focus:bg-white/[.06] focus:outline-none transition-colors disabled:opacity-50"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-mono text-zinc-400 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        disabled={loading}
                        placeholder="e.g. rahul@company.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full rounded-xl border border-white/10 bg-white/[.03] px-3.5 py-2.5 text-xs text-white placeholder-zinc-600 focus:border-lime-400 focus:bg-white/[.06] focus:outline-none transition-colors disabled:opacity-50"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-role" className="block text-xs font-mono text-zinc-400 mb-1.5">
                      Company / Role / Opportunity (Optional)
                    </label>
                    <input
                      id="contact-role"
                      type="text"
                      disabled={loading}
                      placeholder="e.g. Data Analyst Role / MIS Consulting"
                      value={formState.role}
                      onChange={(e) => setFormState({ ...formState, role: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-white/[.03] px-3.5 py-2.5 text-xs text-white placeholder-zinc-600 focus:border-lime-400 focus:bg-white/[.06] focus:outline-none transition-colors disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono text-zinc-400 mb-1.5">
                      Message / Requirement *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      disabled={loading}
                      placeholder="Share details about the role, reporting requirements, or project scope..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-white/[.03] px-3.5 py-2.5 text-xs text-white placeholder-zinc-600 focus:border-lime-400 focus:bg-white/[.06] focus:outline-none transition-colors disabled:opacity-50 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-lime-400 px-5 py-3 text-xs font-semibold text-black hover:bg-lime-300 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
                  >
                    {loading ? (
                      <>
                        <Loader2 size={15} className="animate-spin" />
                        <span>Submitting Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <Send size={14} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <div className="pt-1 text-center">
                    <a
                      href={`mailto:${emailAddress}?subject=${encodeURIComponent(
                        formState.name ? `Portfolio Inquiry from ${formState.name}` : "Portfolio Inquiry"
                      )}&body=${encodeURIComponent(formState.message || "Hi Anupam,\n\n")}`}
                      className="inline-flex items-center gap-1.5 text-[11px] font-mono text-zinc-500 hover:text-lime-300 transition-colors"
                    >
                      <Mail size={12} />
                      <span>Or click here to send via your email client</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
