"use client";

import { useState } from "react";
import Link from "next/link";
import { Brain, Loader2, CheckCircle2, Calendar, ArrowRight } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/sumit-kanwal/10kgraph";
const SHEETS_URL = process.env.NEXT_PUBLIC_SHEETS_WEBHOOK_URL || "";

export default function RequestAccessPage() {
  const [form, setForm] = useState({ name: "", email: "", fund: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      if (SHEETS_URL) {
        // text/plain avoids CORS preflight; Apps Script parses e.postData.contents as JSON.
        await fetch(SHEETS_URL, {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify({
            ...form,
            userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
            page: typeof window !== "undefined" ? window.location.href : "",
          }),
          redirect: "follow",
        });
      }
      setSubmitted(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#060b14] flex items-center justify-center px-4 py-12 relative overflow-hidden">
      <div className="aurora opacity-60" />
      <div className="absolute inset-0 grid-floor pointer-events-none opacity-50" />

      <div className="relative w-full max-w-md">
        <Link href="/" className="flex items-center justify-center gap-2 mb-6">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 via-indigo-500 to-emerald-500 flex items-center justify-center">
            <Brain className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xl text-white">10kgraph</span>
          <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-blue-300 bg-blue-500/10 border border-blue-500/25 rounded-full px-2 py-0.5">
            Beta
          </span>
        </Link>

        {!submitted ? (
          <div className="lg-glass rounded-2xl p-8">
            <h1 className="text-2xl font-bold mb-2 text-white">Get early access</h1>
            <p className="text-white/55 text-sm mb-6 leading-relaxed">
              10kgraph is in private beta for institutional investors. Tell us who you are and
              we&rsquo;ll reach out within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-medium text-white/60 block mb-1.5">Name</label>
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-all"
                  placeholder="Alex Johnson"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-white/60 block mb-1.5">Work email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-all"
                  placeholder="you@fund.com"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-white/60 block mb-1.5">
                  Fund / firm <span className="text-white/30 font-normal">(optional)</span>
                </label>
                <input
                  value={form.fund}
                  onChange={(e) => setForm({ ...form, fund: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-all"
                  placeholder="Meridian Capital"
                />
              </div>

              {error && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-2.5 text-sm text-red-400">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-br from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed text-white py-3 rounded-xl font-semibold text-sm transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25"
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
                {loading ? "Submitting…" : "Get early access"}
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-white/5">
              <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-white/40 mb-3">
                Prefer to talk first?
              </p>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 rounded-xl px-4 py-3 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-4 h-4 text-emerald-300" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-white/90">Book a 30-min demo</div>
                  <div className="text-[11px] text-white/45">Live walkthrough with the founder</div>
                </div>
                <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
              </a>
            </div>
          </div>
        ) : (
          <div className="lg-glass rounded-2xl p-8 text-center">
            <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-5">
              <CheckCircle2 className="w-7 h-7 text-emerald-300" />
            </div>
            <h1 className="text-2xl font-bold mb-2 text-white">You&rsquo;re on the list.</h1>
            <p className="text-white/55 text-sm mb-6 leading-relaxed">
              We&rsquo;ll be in touch at <span className="text-white/90 font-medium">{form.email}</span> within 24 hours.
              Want to skip the queue? Book time below.
            </p>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full bg-gradient-to-br from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white py-3 rounded-xl font-semibold text-sm transition-colors shadow-lg shadow-blue-500/25"
            >
              <Calendar className="w-4 h-4" />
              Pick a demo slot
            </a>
          </div>
        )}

        <p className="text-center text-sm text-white/40 mt-6">
          <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors">
            ← Back to home
          </Link>
        </p>
      </div>
    </div>
  );
}
