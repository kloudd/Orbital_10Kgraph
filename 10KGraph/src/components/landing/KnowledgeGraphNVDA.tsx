"use client";

import { useState } from "react";

type Category = "company" | "moat" | "product" | "customer" | "supplier" | "tailwind" | "risk";

type Node = {
  id: string;
  label: string;
  sub: string;
  cat: Category;
  x: number;
  y: number;
  r: number;
  labelPos: "top" | "bottom" | "left" | "right";
};

type Edge = { from: string; to: string; label: string };

const NODES: Node[] = [
  { id: "nvda",      label: "NVDA",             sub: "$4.9T cap",            cat: "company",  x: 320, y: 270, r: 34, labelPos: "bottom" },
  { id: "cuda",      label: "CUDA",             sub: "19yr ecosystem",       cat: "moat",     x: 130, y: 130, r: 22, labelPos: "top"    },
  { id: "blackwell", label: "Blackwell",        sub: "~70% DC compute",      cat: "product",  x: 510, y: 130, r: 22, labelPos: "top"    },
  { id: "tsmc",      label: "TSMC 3nm",         sub: "sole fab",             cat: "supplier", x: 568, y: 270, r: 22, labelPos: "right"  },
  { id: "hyper",     label: "Hyperscalers",     sub: "$700B '26 capex",      cat: "customer", x: 510, y: 400, r: 22, labelPos: "bottom" },
  { id: "sov",       label: "Sovereign AI",     sub: "Saudi · UAE · JP · FR",cat: "tailwind", x: 130, y: 400, r: 22, labelPos: "bottom" },
  { id: "amd",       label: "AMD MI300X",       sub: "$15K vs H100 $32K",    cat: "risk",     x: 72,  y: 270, r: 22, labelPos: "left"   },
  { id: "silicon",   label: "Custom ASICs",     sub: "15–25% '26 share",     cat: "risk",     x: 320, y: 470, r: 22, labelPos: "bottom" },
];

const EDGES: Edge[] = [
  { from: "nvda", to: "cuda",      label: "moat" },
  { from: "nvda", to: "blackwell", label: "ships" },
  { from: "nvda", to: "tsmc",      label: "sourced" },
  { from: "nvda", to: "hyper",     label: "sells to" },
  { from: "nvda", to: "sov",       label: "benefits" },
  { from: "nvda", to: "amd",       label: "threatened" },
  { from: "nvda", to: "silicon",   label: "absorbed" },
  { from: "blackwell", to: "tsmc", label: "fabbed" },
  { from: "hyper", to: "silicon",  label: "building" },
];

const TONE: Record<Category, { stroke: string; fill: string; glow: string; text: string; chip: string }> = {
  company:  { stroke: "rgba(147,197,253,1)", fill: "rgba(37,99,235,0.32)",  glow: "rgba(96,165,250,0.80)",  text: "#f0f7ff", chip: "Ticker"   },
  moat:     { stroke: "rgba(110,231,183,1)", fill: "rgba(16,185,129,0.26)", glow: "rgba(52,211,153,0.70)",  text: "#ddfbea", chip: "Moat"     },
  product:  { stroke: "rgba(147,197,253,1)", fill: "rgba(59,130,246,0.24)", glow: "rgba(96,165,250,0.70)",  text: "#ecf3ff", chip: "Product"  },
  customer: { stroke: "rgba(196,181,253,1)", fill: "rgba(139,92,246,0.24)", glow: "rgba(167,139,250,0.70)", text: "#f2ecff", chip: "Customer" },
  supplier: { stroke: "rgba(253,224,71,0.95)", fill: "rgba(234,179,8,0.24)",  glow: "rgba(250,204,21,0.65)",  text: "#fef3c7", chip: "Supplier" },
  tailwind: { stroke: "rgba(134,239,172,1)", fill: "rgba(34,197,94,0.24)",  glow: "rgba(74,222,128,0.65)",  text: "#d3fbdc", chip: "Tailwind" },
  risk:     { stroke: "rgba(252,165,165,1)", fill: "rgba(239,68,68,0.24)",  glow: "rgba(248,113,113,0.70)", text: "#ffdede", chip: "Risk"     },
};

const byId = (id: string) => NODES.find((n) => n.id === id)!;

const HALO = "#060b14";

function labelAnchor(pos: Node["labelPos"]): "start" | "middle" | "end" {
  if (pos === "left") return "end";
  if (pos === "right") return "start";
  return "middle";
}

function labelOffset(n: Node): { x: number; y: number; dySub: number } {
  const pad = 10;
  switch (n.labelPos) {
    case "top":    return { x: 0,               y: -(n.r + pad + 6),  dySub: 12 };
    case "bottom": return { x: 0,               y:   n.r + pad + 8,   dySub: 12 };
    case "left":   return { x: -(n.r + pad),    y:   2,               dySub: 12 };
    case "right":  return { x:   n.r + pad,     y:   2,               dySub: 12 };
  }
}

export default function KnowledgeGraphNVDA() {
  const [hover, setHover] = useState<string | null>(null);

  const activeEdges = new Set<string>();
  const activeNeighbors = new Set<string>();
  if (hover) {
    EDGES.forEach((e, i) => {
      if (e.from === hover || e.to === hover) {
        activeEdges.add(String(i));
        activeNeighbors.add(e.from === hover ? e.to : e.from);
      }
    });
  }

  return (
    <div className="relative w-full">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <div className="flex items-center gap-2">
          <span className="relative flex w-2 h-2">
            <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-70" />
            <span className="relative w-2 h-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-emerald-300">Live neighbourhood</span>
          <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-white/55">&middot; NVDA</span>
        </div>
        <div className="hidden sm:flex items-center gap-3 text-[10px] font-mono uppercase tracking-wider text-white/70">
          {(["moat","product","customer","supplier","tailwind","risk"] as Category[]).map((c) => (
            <span key={c} className="inline-flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full" style={{ background: TONE[c].stroke }} />
              {c}
            </span>
          ))}
        </div>
      </div>

      <div className="relative rounded-2xl overflow-hidden bg-[#070d18]/60 ring-1 ring-white/5">
        <svg
          viewBox="0 0 640 560"
          className="w-full h-[460px] md:h-[540px]"
          style={{ display: "block" }}
        >
          <defs>
            <radialGradient id="kg-bg" cx="50%" cy="50%" r="60%">
              <stop offset="0%"   stopColor="rgba(59,130,246,0.10)" />
              <stop offset="60%"  stopColor="rgba(59,130,246,0.02)" />
              <stop offset="100%" stopColor="rgba(0,0,0,0)" />
            </radialGradient>
            <pattern id="kg-grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="rgba(120,170,255,0.06)" strokeWidth="1" />
            </pattern>
            {Object.entries(TONE).map(([key, t]) => (
              <filter key={key} id={`glow-${key}`} x="-80%" y="-80%" width="260%" height="260%">
                <feGaussianBlur stdDeviation="6" result="b" />
                <feFlood floodColor={t.glow} floodOpacity="1" />
                <feComposite in2="b" operator="in" result="c" />
                <feMerge>
                  <feMergeNode in="c" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            ))}
          </defs>

          <rect width="640" height="560" fill="url(#kg-grid)" opacity="0.6" />
          <rect width="640" height="560" fill="url(#kg-bg)" />

          <g>
            {EDGES.map((e, i) => {
              const a = byId(e.from);
              const b = byId(e.to);
              const active = activeEdges.has(String(i));
              const dim    = hover && !active;
              return (
                <g key={i} opacity={dim ? 0.18 : 1} style={{ transition: "opacity 220ms" }}>
                  <line
                    x1={a.x} y1={a.y} x2={b.x} y2={b.y}
                    stroke={active ? "rgba(186,222,255,1)" : "rgba(170,190,220,0.55)"}
                    strokeWidth={active ? 2.2 : 1.25}
                    strokeDasharray={active ? "0" : "4 4"}
                    style={{ transition: "all 220ms" }}
                  />
                  {active && (
                    <text
                      x={(a.x + b.x) / 2}
                      y={(a.y + b.y) / 2 - 7}
                      textAnchor="middle"
                      fontSize="11.5"
                      fontWeight={600}
                      stroke={HALO}
                      strokeWidth={4}
                      strokeLinejoin="round"
                      paintOrder="stroke"
                      fill="#ffffff"
                      style={{
                        fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                        letterSpacing: "0.02em",
                      }}
                    >
                      {e.label}
                    </text>
                  )}
                </g>
              );
            })}
          </g>

          <g>
            {NODES.map((n) => {
              const t = TONE[n.cat];
              const isHover = hover === n.id;
              const isNeighbor = activeNeighbors.has(n.id);
              const dim = hover && !isHover && !isNeighbor;
              const off = labelOffset(n);
              const anchor = labelAnchor(n.labelPos);

              const isCenter = n.id === "nvda";
              const glowOn = isHover || isCenter;

              return (
                <g
                  key={n.id}
                  onMouseEnter={() => setHover(n.id)}
                  onMouseLeave={() => setHover((h) => (h === n.id ? null : h))}
                  style={{
                    cursor: "pointer",
                    opacity: dim ? 0.3 : 1,
                    transition: "opacity 220ms",
                  }}
                >
                  {(isHover || isNeighbor || isCenter) && (
                    <circle
                      cx={n.x} cy={n.y}
                      r={n.r + 10}
                      fill="none"
                      stroke={t.stroke}
                      strokeWidth={isHover ? 1.4 : 0.6}
                      opacity={isHover ? 0.6 : 0.22}
                      style={{ transition: "all 220ms" }}
                    />
                  )}

                  <circle
                    cx={n.x} cy={n.y}
                    r={n.r}
                    fill={t.fill}
                    stroke={t.stroke}
                    strokeWidth={isHover ? 2 : 1.2}
                    filter={glowOn ? `url(#glow-${n.cat})` : undefined}
                    style={{ transition: "all 220ms" }}
                  />

                  <circle
                    cx={n.x} cy={n.y}
                    r={n.r - 5}
                    fill="none"
                    stroke={t.stroke}
                    strokeWidth="0.5"
                    opacity="0.4"
                  />

                  <text
                    x={n.x + off.x}
                    y={n.y + off.y}
                    textAnchor={anchor}
                    fontSize={isCenter ? 15 : 13}
                    fontWeight={700}
                    stroke={HALO}
                    strokeWidth={4}
                    strokeLinejoin="round"
                    paintOrder="stroke"
                    fill={isHover ? "#ffffff" : t.text}
                    style={{
                      fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                      pointerEvents: "none",
                      letterSpacing: "0.01em",
                      transition: "fill 220ms",
                    }}
                  >
                    {n.label}
                  </text>
                  <text
                    x={n.x + off.x}
                    y={n.y + off.y + off.dySub}
                    textAnchor={anchor}
                    fontSize={11}
                    stroke={HALO}
                    strokeWidth={3.5}
                    strokeLinejoin="round"
                    paintOrder="stroke"
                    fill="rgba(255,255,255,0.92)"
                    style={{
                      fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                      pointerEvents: "none",
                    }}
                  >
                    {n.sub}
                  </text>
                </g>
              );
            })}
          </g>
        </svg>

        <div className="flex items-center justify-between border-t border-white/5 bg-white/[0.02] px-5 py-3 text-[11px] font-mono">
          {hover ? (
            <>
              <span className="text-white/85">
                <span className="text-white/45">node &middot; </span>
                <span className="uppercase tracking-wider" style={{ color: TONE[byId(hover).cat].text }}>
                  {TONE[byId(hover).cat].chip}
                </span>
                <span className="text-white/45"> / </span>
                {byId(hover).label}
              </span>
              <span className="text-white/50">{activeEdges.size} edges &middot; {activeNeighbors.size} neighbours</span>
            </>
          ) : (
            <>
              <span className="text-white/55">Hover any node to see its edges and neighbours.</span>
              <span className="text-white/35">{NODES.length} nodes &middot; {EDGES.length} edges</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
