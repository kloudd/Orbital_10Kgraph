import Link from "next/link";
import {
  ArrowRight, Brain, Sparkles, CheckCircle2, X as XMark, Plus,
  TrendingUp, TrendingDown, Shield, Lock, Layers3, Eye, Share2,
} from "lucide-react";
import KnowledgeGraphNVDA from "@/components/landing/KnowledgeGraphNVDA";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#060b14] text-white overflow-x-clip selection:bg-blue-500/30 selection:text-white">
      {/* ──────────────── Nav ──────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-6xl mx-auto mt-3 px-3">
          <div className="lg-glass rounded-2xl h-14 flex items-center justify-between px-5">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 via-indigo-500 to-emerald-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
                <Brain className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg tracking-tight">10kgraph</span>
              <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-blue-300 bg-blue-500/10 border border-blue-500/25 rounded-full px-2 py-0.5 ml-1">
                Beta
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm text-white/60">
              <a href="#product" className="hover:text-white transition-colors">Product</a>
              <a href="#moat"    className="hover:text-white transition-colors">Why us</a>
              <a href="#faq"     className="hover:text-white transition-colors">FAQ</a>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/request-access"
                className="group text-sm bg-gradient-to-br from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-4 py-2 rounded-lg font-medium transition-all inline-flex items-center gap-1.5 shadow-lg shadow-blue-500/20"
              >
                Get early access <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* ──────────────── Hero ──────────────── */}
      <section className="relative pt-36 pb-24 px-6">
        <div className="aurora" />
        <div className="absolute inset-0 grid-floor pointer-events-none opacity-70" />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 lg-glass rounded-full px-4 py-1.5 text-xs text-blue-200/90 mb-8">
            <Sparkles className="w-3.5 h-3.5 text-blue-300" />
            Private beta &middot; AI research for institutional investors
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-[5.25rem] font-bold leading-[1.02] tracking-tight mb-7">
            Your research desk,
            <br />
            <span className="shine-text">with perfect memory.</span>
          </h1>

          <p className="text-lg md:text-xl text-white/55 max-w-2xl mx-auto mb-10 leading-relaxed">
            10kgraph reads every filing, debates every thesis, and sizes every position &mdash;
            grounded in a knowledge graph that never forgets what your fund has already figured
            out.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/request-access"
              className="group inline-flex items-center justify-center gap-2 bg-gradient-to-br from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-7 py-3.5 rounded-xl font-semibold text-base transition-all shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50"
            >
              Get early access
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://calendly.com/sumit-kanwal/10kgraph"
              target="_blank"
              rel="noreferrer"
              className="lg-glass inline-flex items-center justify-center gap-2 hover:bg-white/8 text-white px-7 py-3.5 rounded-xl font-medium text-base transition-colors"
            >
              Book a demo
            </a>
          </div>
        </div>

        {/* Live thesis card — the hero visual */}
        <div className="relative max-w-4xl mx-auto mt-20" style={{ perspective: "1600px" }}>
          <div
            className="relative rounded-[24px] lg-glass overflow-hidden shadow-[0_60px_120px_-40px_rgba(59,130,246,0.35)]"
            style={{ transform: "rotateX(10deg)", transformOrigin: "center top" }}
          >
            <div className="flex items-center gap-2 px-5 py-3 border-b border-white/5 bg-white/[0.02]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <div className="ml-4 text-xs font-mono text-white/40">Live thesis &mdash; NVDA</div>
              <div className="ml-auto flex items-center gap-2">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-70" />
                  <span className="relative w-2 h-2 rounded-full bg-emerald-400" />
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-300">live</span>
              </div>
            </div>

            <div className="p-7 grid md:grid-cols-5 gap-6">
              <div className="md:col-span-2">
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 mb-1">Verdict</div>
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="font-mono text-3xl font-bold text-white">NVDA</span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">LONG</span>
                </div>
                <div className="space-y-2 text-sm">
                  <MetaRow k="Size"       v="3.2% NAV" />
                  <MetaRow k="Conviction" v="0.81" />
                  <MetaRow k="Horizon"    v="6&ndash;9 months" />
                  <MetaRow k="Reviewed"   v="just now" />
                </div>
                <div className="mt-5 pt-5 border-t border-white/5">
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 mb-2">PM copilot</div>
                  <p className="text-[13px] text-white/75 leading-relaxed italic">
                    &ldquo;Moat durability outweighs multiple risk at this cycle
                    position. Half&#8209;Kelly sizing given drawdown regime.&rdquo;
                  </p>
                </div>
              </div>

              <div className="md:col-span-3 grid grid-cols-1 gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2 text-[10px] font-mono uppercase tracking-[0.2em] text-emerald-300/80">
                    <TrendingUp className="w-3 h-3" /> Supporting &mdash; cited
                  </div>
                  <ul className="space-y-1.5 text-sm text-white/80">
                    <CiteRow cite="WIKI" tone="emerald">CUDA ecosystem compounding since 2007 (19 years).</CiteRow>
                    <CiteRow cite="NVDA" tone="emerald">Blackwell ~70% of DC compute in Q1 FY26; GB300 crosses GB200.</CiteRow>
                    <CiteRow cite="GTC"  tone="emerald">Jensen signals $1T+ AI infra TAM through 2027.</CiteRow>
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2 text-[10px] font-mono uppercase tracking-[0.2em] text-red-300/80">
                    <TrendingDown className="w-3 h-3" /> Objections &mdash; considered
                  </div>
                  <ul className="space-y-1.5 text-sm text-white/80">
                    <CiteRow cite="AWS"  tone="red">Trainium 3 lands at ~50% better price/perf vs H100 / B200.</CiteRow>
                    <CiteRow cite="INTL" tone="red">Custom ASICs capture 15&ndash;25% of 2026 accelerator share.</CiteRow>
                    <CiteRow cite="FUT"  tone="red">NVDA share drifts from 95% peak to ~75&ndash;80% by EOY 2026.</CiteRow>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── Three pillars ──────────────── */}
      <section id="product" className="py-28 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-blue-300/80 mb-4">
              <Sparkles className="w-3.5 h-3.5" /> The product
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 max-w-3xl mx-auto">
              Three things your analysts do.<br />
              <span className="gradient-text">Now with receipts.</span>
            </h2>
            <p className="text-white/50 text-base md:text-lg max-w-2xl mx-auto">
              10kgraph doesn&rsquo;t replace your judgment. It gives you a desk that reads faster,
              forgets less, and argues harder &mdash; so you can underwrite with conviction.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {PILLARS.map((p) => (
              <div key={p.title} className="tilt-3d lg-glass glow-ring rounded-3xl p-7 h-full flex flex-col">
                <div className="tilt-inner flex flex-col flex-1">
                  <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-blue-300/80 mb-3">
                    {p.kicker}
                  </div>
                  <h3 className="text-xl font-bold mb-3 leading-snug">{p.title}</h3>
                  <p className="text-[14px] text-white/60 leading-relaxed mb-6">{p.body}</p>
                  <div className="mt-auto pt-4 border-t border-white/5">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-white/35 mb-1.5">
                      Outcome
                    </div>
                    <p className="text-sm text-white/85 font-medium leading-snug">{p.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────── Knowledge graph ──────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-blue-300/80 mb-4">
              <Share2 className="w-3.5 h-3.5" /> Ticker Knowledge Graph
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Every ticker is a <span className="gradient-text">neighbourhood</span>,
              <br /> not a PDF.
            </h2>
            <p className="text-white/50 text-base md:text-lg max-w-2xl mx-auto">
              Moats, customers, suppliers, tailwinds and risks &mdash; linked with provenance,
              updated on every filing. Hover the nodes to explore NVDA&rsquo;s current graph.
            </p>
          </div>

          <div className="lg-glass rounded-3xl p-5 md:p-7">
            <KnowledgeGraphNVDA />
          </div>
        </div>
      </section>

      {/* ──────────────── Trust & control ──────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-emerald-300/80 mb-4">
              <Shield className="w-3.5 h-3.5" /> Trust &amp; control
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Your edge <span className="gradient-text">stays inside your walls.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {TRUST.map((t) => (
              <div key={t.title} className="tilt-3d lg-glass rounded-2xl p-6">
                <div className="tilt-inner">
                  <div className="w-10 h-10 rounded-xl bg-white/5 ring-1 ring-white/10 flex items-center justify-center mb-4">
                    <t.icon className="w-5 h-5 text-emerald-300" />
                  </div>
                  <div className="font-semibold mb-2">{t.title}</div>
                  <p className="text-sm text-white/55 leading-relaxed">{t.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────── Moat ──────────────── */}
      <section id="moat" className="py-28 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-violet-300/80 mb-4">
              <Layers3 className="w-3.5 h-3.5" /> Why us
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Incumbents search <span className="gradient-text">public content</span>.
              <br />
              10kgraph remembers <span className="gradient-text">your edge</span>.
            </h2>
            <p className="text-white/50 text-base md:text-lg max-w-2xl mx-auto">
              Published research is a commodity. Your fund&rsquo;s accumulated reasoning is not.
              10kgraph puts the latter first.
            </p>
          </div>

          <div className="lg-glass rounded-3xl overflow-hidden">
            <div className="grid grid-cols-5 text-[11px] font-mono uppercase tracking-wider text-white/50 border-b border-white/5 bg-white/[0.02]">
              <div className="px-5 py-3 col-span-1">Capability</div>
              <div className="px-3 py-3 text-center">AlphaSense</div>
              <div className="px-3 py-3 text-center">BlueFlame</div>
              <div className="px-3 py-3 text-center">Canalyst</div>
              <div className="px-3 py-3 text-center text-blue-300 bg-blue-500/[0.06]">10kgraph</div>
            </div>
            {MOAT_ROWS.map(([cap, a, b, c, d], i) => (
              <div key={i} className={`grid grid-cols-5 text-sm ${i % 2 ? "bg-white/[0.015]" : ""}`}>
                <div className="px-5 py-3 col-span-1 text-white/80">{cap as string}</div>
                <Cell on={a as boolean} />
                <Cell on={b as boolean} />
                <Cell on={c as boolean} />
                <Cell on={d as boolean} highlight />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────── FAQ ──────────────── */}
      <section id="faq" className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Questions <span className="gradient-text">we hear every demo</span>
            </h2>
          </div>
          <div className="space-y-3">
            {FAQ.map((f, i) => (
              <details key={i} className="group lg-glass rounded-2xl overflow-hidden">
                <summary className="cursor-pointer list-none px-6 py-4 flex items-center justify-between gap-4">
                  <span className="text-base font-semibold text-white/90">{f.q}</span>
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center group-open:rotate-45 transition-transform">
                    <Plus className="w-3.5 h-3.5 text-white/60" />
                  </span>
                </summary>
                <div className="px-6 pb-5 text-sm text-white/60 leading-relaxed">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────── Final CTA ──────────────── */}
      <section className="py-28 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="aurora opacity-70" />
            <div className="relative lg-glass rounded-[28px] p-14 text-center">
              <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.18em] text-blue-300 bg-blue-500/10 border border-blue-500/25 rounded-full px-3 py-1 mb-6">
                Currently in private beta
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                The next great fund<br />
                <span className="shine-text">starts with a better graph.</span>
              </h2>
              <p className="text-white/55 text-base md:text-lg mb-8 max-w-xl mx-auto">
                See what your research desk looks like when it never forgets.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/request-access"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-br from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-8 py-4 rounded-xl font-semibold text-base transition-all shadow-xl shadow-blue-500/30"
                >
                  Get early access <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://calendly.com/sumit-kanwal/10kgraph"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 lg-glass hover:bg-white/8 text-white px-8 py-4 rounded-xl font-medium text-base transition-colors"
                >
                  Book a demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── Footer ──────────────── */}
      <footer className="border-t border-white/5 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center">
              <Brain className="w-3 h-3 text-white" />
            </div>
            <span className="font-semibold text-sm">10kgraph</span>
          </div>
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} 10kgraph. Research software for institutional investors. Not financial advice.
          </p>
          <div className="flex gap-6 text-xs text-white/30">
            <a href="#product" className="hover:text-white/60 transition-colors">Product</a>
            <a href="#moat"    className="hover:text-white/60 transition-colors">Why us</a>
            <Link href="/request-access" className="hover:text-white/60 transition-colors">Get early access</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ────────────────────── Content constants ──────────────────────

const PILLARS = [
  {
    kicker: "01  ·  Read",
    title: "Reads every filing before you open your laptop.",
    body:  "Every 10-K, 10-Q, 8-K, earnings call, and comment letter is ingested, structured, and tied into the knowledge graph — so your theses are grounded in the whole record, not the paragraph you remembered.",
    outcome: "First-read advantage on every ticker you follow.",
  },
  {
    kicker: "02  ·  Debate",
    title: "Stress-tests every thesis before it’s funded.",
    body:  "A structured bull case and bear case are built from separate evidence, then reconciled by a PM copilot. The adversarial transcript is the artefact you underwrite — not a blob of prose.",
    outcome: "Conviction that survives its strongest objection.",
  },
  {
    kicker: "03  ·  Size",
    title: "Sizes with conviction, not vibes.",
    body:  "Position sizing is Kelly-bounded, factor-aware, and regime-adjusted. Every recommendation cites the risk bounds it respects and the trades it correlates with.",
    outcome: "Book-level risk that matches your book-level view.",
  },
];

const MOAT_ROWS: Array<[string, boolean, boolean, boolean, boolean]> = [
  ["Searches your private research corpus",    true,  true,  false, true],
  ["KPIs auto-extracted from filings",         true,  false, true,  true],
  ["Language & tone drift detection",          true,  false, false, true],
  ["Full audit trail for compliance",          true,  true,  false, true],
  ["Adversarial bull / bear debate",           false, false, false, true],
  ["Temporal knowledge graph w/ provenance",   false, false, false, true],
  ["Cross-asset regime monitor",               false, false, false, true],
  ["Kelly position sizer + risk gate",         false, false, false, true],
  ["Idea journal w/ AI retrospective",         false, false, false, true],
  ["Paper + live execution",                   false, false, false, true],
];

const TRUST = [
  { icon: Lock,  title: "Your data, your graph",   body: "Tenant-isolated, row-level security. Your reasoning is never mixed with another fund’s, never used to train a shared model." },
  { icon: Eye,   title: "Every claim is citable",  body: "Every bullet, every verdict, every sized position traces to a specific paragraph in a specific document. Hover to read the source." },
  { icon: Shield,title: "Deterministic risk gate", body: "Position limits, sector caps, and conviction floors are enforced outside the language model. No hallucinated fills, ever." },
];

const FAQ = [
  { q: "How is this different from a ChatGPT wrapper?",
    a: "ChatGPT has no persistent knowledge graph, no adversarial debate, no deterministic risk gate, no audit trail, and no execution layer. 10kgraph has all five, and your reasoning compounds inside the graph over time." },
  { q: "Can I use my own models and keys?",
    a: "Yes. On Enterprise, bring your own reasoning model and keys. The orchestration and graph are model-agnostic." },
  { q: "What about compliance and audit?",
    a: "Every claim, every decision, every fill persists with inputs, outputs, timestamps, and source citations. Export to CSV or stream to your SIEM. Enterprise ships a SOC 2-style evidence pack." },
  { q: "Hosted, VPC, or on-prem?",
    a: "Your choice. Beta users are onboarded onto a dedicated VPC. Enterprise deploys into your account with your keys." },
  { q: "When does it come out of beta?",
    a: "We’re onboarding funds a few at a time to ensure every design partner gets hands-on founder time. Request access and we’ll share the current timeline." },
];

// ────────────────────── Components ──────────────────────

function MetaRow({ k, v }: { k: string; v: React.ReactNode }) {
  return (
    <div className="flex items-baseline justify-between gap-3 text-sm">
      <span className="text-white/40 font-mono text-xs">{k}</span>
      <span className="text-white/90 font-mono">{v}</span>
    </div>
  );
}

function CiteRow({ cite, tone, children }: { cite: string; tone: "emerald" | "red"; children: React.ReactNode }) {
  const cls = tone === "emerald"
    ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-300"
    : "bg-red-500/10 border-red-500/20 text-red-300";
  return (
    <li className="flex items-start gap-2.5 leading-relaxed">
      <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded border ${cls} flex-shrink-0 mt-0.5 uppercase tracking-wider`}>{cite}</span>
      <span>{children}</span>
    </li>
  );
}

function Cell({ on, highlight = false }: { on: boolean; highlight?: boolean }) {
  return (
    <div className={`px-3 py-3 text-center flex items-center justify-center ${highlight ? "bg-blue-500/[0.06]" : ""}`}>
      {on ? (
        <CheckCircle2 className={`w-4 h-4 ${highlight ? "text-blue-300" : "text-emerald-400"}`} />
      ) : (
        <XMark className="w-4 h-4 text-white/20" />
      )}
    </div>
  );
}
