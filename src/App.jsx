import React from "react";
import { useNavigate } from "react-router-dom";

function BuildingMark({ size = "md" }) {
  const map = {
    xs: {
      wrap: "w-7 h-7",
      base: "w-7",
      frontW: "w-[10px]",
      frontH: "h-[14px]",
      backW: "w-[13px]",
      backH: "h-[18px]",
      leftFront: "left-[13px]",
      leftBack: "left-[2px]",
      baseBottom: "bottom-[2px]",
      windowGap: "gap-[2px]",
      windowW: "w-[4px]",
      windowH: "h-[1.5px]",
    },
    sm: {
      wrap: "w-8 h-8",
      base: "w-8",
      frontW: "w-[11px]",
      frontH: "h-[16px]",
      backW: "w-[14px]",
      backH: "h-[21px]",
      leftFront: "left-[15px]",
      leftBack: "left-[3px]",
      baseBottom: "bottom-[2px]",
      windowGap: "gap-[2px]",
      windowW: "w-[5px]",
      windowH: "h-[1.5px]",
    },
    md: {
      wrap: "w-10 h-10",
      base: "w-10",
      frontW: "w-[13px]",
      frontH: "h-[19px]",
      backW: "w-[17px]",
      backH: "h-[25px]",
      leftFront: "left-[19px]",
      leftBack: "left-[4px]",
      baseBottom: "bottom-[3px]",
      windowGap: "gap-[2px]",
      windowW: "w-[6px]",
      windowH: "h-[2px]",
    },
  };

  const c = map[size];

  return (
    <div className={`relative ${c.wrap}`}>
      <div className={`absolute left-0 right-0 ${c.baseBottom} flex justify-center`}>
        <div className={`h-[2px] ${c.base} rounded-full bg-slate-200/90`} />
      </div>

      <div
        className={`absolute ${c.leftBack} bottom-[4px] ${c.backW} ${c.backH} rounded-t-[5px] border border-slate-200/90 bg-transparent`}
      >
        <div className={`absolute left-1/2 top-[4px] -translate-x-1/2 flex flex-col ${c.windowGap}`}>
          <div className={`${c.windowW} ${c.windowH} rounded-full bg-slate-200/90`} />
          <div className={`${c.windowW} ${c.windowH} rounded-full bg-slate-200/90`} />
          <div className={`${c.windowW} ${c.windowH} rounded-full bg-slate-200/90`} />
          <div className={`${c.windowW} ${c.windowH} rounded-full bg-slate-200/90`} />
        </div>
      </div>

      <div
        className={`absolute ${c.leftFront} bottom-[4px] ${c.frontW} ${c.frontH} rounded-t-[4px] border border-slate-200/90 bg-transparent`}
      >
        <div className={`absolute left-1/2 top-[4px] -translate-x-1/2 flex flex-col ${c.windowGap}`}>
          <div className={`${c.windowW} ${c.windowH} rounded-full bg-slate-200/90`} />
          <div className={`${c.windowW} ${c.windowH} rounded-full bg-slate-200/90`} />
          <div className={`${c.windowW} ${c.windowH} rounded-full bg-slate-200/90`} />
        </div>
      </div>
    </div>
  );
}

function LeagueWordmark({ size = "md" }) {
  const map = {
    sm: {
      mark: "sm",
      gap: "gap-2",
      title: "text-lg",
      subtitle: "text-[10px] tracking-[0.28em]",
    },
    md: {
      mark: "md",
      gap: "gap-3",
      title: "text-2xl",
      subtitle: "text-xs tracking-[0.32em]",
    },
  };

  const c = map[size];

  return (
    <div className={`flex items-center ${c.gap}`}>
      <BuildingMark size={c.mark} />
      <div>
        <div className={`${c.title} font-semibold tracking-tight text-white`}>
          Entrepreneur&apos;s League
        </div>
        <div className={`${c.subtitle} uppercase text-slate-400`}>
          Private Access Platform
        </div>
      </div>
    </div>
  );
}

function SectionShell({ children, className = "" }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-[0_18px_60px_rgba(0,0,0,0.42)] backdrop-blur-xl ${className}`}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="pointer-events-none absolute -right-24 top-0 h-40 w-40 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="relative">{children}</div>
    </div>
  );
}

function SectionHeading({ eyebrow, title, body, accent = "emerald" }) {
  const tones = {
    emerald: "text-emerald-300 border-emerald-400/20 bg-emerald-400/10",
    sky: "text-sky-300 border-sky-400/20 bg-sky-500/10",
    violet: "text-violet-300 border-violet-400/20 bg-violet-500/10",
  };

  return (
    <div className="mb-8">
      <div
        className={`inline-flex rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] ${tones[accent]}`}
      >
        {eyebrow}
      </div>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {body ? <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">{body}</p> : null}
    </div>
  );
}

function accentTheme(accent) {
  const map = {
    emerald: {
      badge: "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
      line: "from-emerald-300/0 via-emerald-300/70 to-emerald-300/0",
      hover:
        "hover:border-emerald-400/30 hover:bg-white/[0.07] hover:shadow-[0_0_34px_rgba(16,185,129,0.16)]",
      arrow: "group-hover:text-emerald-300",
    },
    sky: {
      badge: "border-sky-400/20 bg-sky-500/10 text-sky-300",
      line: "from-sky-300/0 via-sky-300/70 to-sky-300/0",
      hover: "hover:border-sky-400/30 hover:bg-white/[0.07] hover:shadow-[0_0_34px_rgba(56,189,248,0.16)]",
      arrow: "group-hover:text-sky-300",
    },
    violet: {
      badge: "border-violet-400/20 bg-violet-500/10 text-violet-300",
      line: "from-violet-300/0 via-violet-300/70 to-violet-300/0",
      hover:
        "hover:border-violet-400/30 hover:bg-white/[0.07] hover:shadow-[0_0_34px_rgba(168,85,247,0.16)]",
      arrow: "group-hover:text-violet-300",
    },
  };

  return map[accent];
}

function PremiumCard({
  eyebrow,
  title,
  body,
  accent = "sky",
  onClick,
  interactive = false,
  className = "",
}) {
  const a = accentTheme(accent);

  return (
    <div
      onClick={onClick}
      role={interactive ? "button" : undefined}
      tabIndex={interactive ? 0 : undefined}
      className={`group relative rounded-3xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 ${a.hover} ${interactive ? "cursor-pointer" : ""} ${className}`}
    >
      <div className={`pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r ${a.line}`} />
      <div
        className={`inline-flex rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] ${a.badge}`}
      >
        {eyebrow}
      </div>

      {interactive ? (
        <div className="absolute right-6 top-6 text-slate-500 opacity-50 transition duration-200 group-hover:translate-x-1 group-hover:opacity-100">
          <span className={a.arrow}>→</span>
        </div>
      ) : null}

      <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{body}</p>
    </div>
  );
}

function StatCard({ value, label, accent = "emerald" }) {
  const tones = {
    emerald:
      "border-emerald-400/20 bg-emerald-400/10 text-emerald-300 shadow-[0_0_30px_rgba(16,185,129,0.10)]",
    sky: "border-sky-400/20 bg-sky-500/10 text-sky-300 shadow-[0_0_30px_rgba(56,189,248,0.10)]",
    violet:
      "border-violet-400/20 bg-violet-500/10 text-violet-300 shadow-[0_0_30px_rgba(168,85,247,0.10)]",
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.07]">
      <div
        className={`inline-flex rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${tones[accent]}`}
      >
        {label}
      </div>
      <div className="mt-3 text-4xl font-semibold tracking-tight text-white">{value}</div>
    </div>
  );
}

function TierCard({
  tier,
  price,
  cadence,
  subtitle,
  features,
  accent = "emerald",
  onClick,
}) {
  const accents = {
    emerald: {
      badge: "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
      button:
        "bg-gradient-to-r from-emerald-400 to-emerald-500 text-slate-950 hover:from-emerald-300 hover:to-emerald-400 shadow-[0_10px_30px_rgba(16,185,129,0.18)]",
      hover:
        "hover:border-emerald-400/25 hover:shadow-[0_0_34px_rgba(16,185,129,0.16)]",
      line: "from-emerald-300/0 via-emerald-300/70 to-emerald-300/0",
    },
    sky: {
      badge: "border-sky-500/20 bg-sky-500/10 text-sky-300",
      button:
        "bg-gradient-to-r from-sky-300 to-sky-400 text-slate-950 hover:from-sky-200 hover:to-sky-300 shadow-[0_10px_30px_rgba(56,189,248,0.18)]",
      hover: "hover:border-sky-500/25 hover:shadow-[0_0_34px_rgba(56,189,248,0.16)]",
      line: "from-sky-300/0 via-sky-300/70 to-sky-300/0",
    },
    violet: {
      badge: "border-violet-500/20 bg-violet-500/10 text-violet-300",
      button:
        "bg-gradient-to-r from-violet-300 to-violet-400 text-slate-950 hover:from-violet-200 hover:to-violet-300 shadow-[0_10px_30px_rgba(168,85,247,0.18)]",
      hover:
        "hover:border-violet-500/25 hover:shadow-[0_0_34px_rgba(168,85,247,0.16)]",
      line: "from-violet-300/0 via-violet-300/70 to-violet-300/0",
    },
  };

  const a = accents[accent];

  return (
    <div
      className={`relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07] ${a.hover}`}
    >
      <div className={`pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r ${a.line}`} />
      <div className={`inline-flex w-fit rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${a.badge}`}>
        {tier}
      </div>

      <div className="mt-5">
        <div className="flex items-end gap-2">
          <span className="text-4xl font-semibold tracking-tight text-white">{price}</span>
          <span className="pb-1 text-sm text-slate-400">/{cadence}</span>
        </div>
        <p className="mt-4 text-sm leading-7 text-slate-300">{subtitle}</p>
      </div>

      <ul className="mt-6 space-y-3 text-sm text-slate-200">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <span className="mt-1 text-emerald-300">•</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={onClick}
        className={`mt-8 rounded-xl px-5 py-3 text-sm font-semibold transition duration-300 ${a.button}`}
      >
        Continue
      </button>
    </div>
  );
}

function HighlightStrip({ title, body, accent = "emerald", onClick }) {
  const tones = {
    emerald:
      "border-emerald-400/20 bg-emerald-400/10 text-emerald-300 hover:bg-emerald-400/15 hover:shadow-[0_0_30px_rgba(16,185,129,0.14)]",
    sky: "border-sky-400/20 bg-sky-500/10 text-sky-300 hover:bg-sky-500/15 hover:shadow-[0_0_30px_rgba(56,189,248,0.14)]",
    violet:
      "border-violet-400/20 bg-violet-500/10 text-violet-300 hover:bg-violet-500/15 hover:shadow-[0_0_30px_rgba(168,85,247,0.14)]",
  };

  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      className={`cursor-pointer rounded-2xl border p-5 transition duration-300 ${tones[accent]}`}
    >
      <p className="text-sm font-semibold">{title}</p>
      <p className="mt-2 text-sm leading-7 text-slate-200">{body}</p>
    </div>
  );
}

function DesktopLayout() {
  const navigate = useNavigate();

  return (
    <div className="hidden md:block">
      <div className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-4">
            <LeagueWordmark size="sm" />
            <button
              onClick={() => navigate("/signup")}
              className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Join Now
            </button>
          </div>

          <div className="hidden text-xs tracking-wide text-slate-400 sm:block">
            Private Access • Structured Entry
          </div>

          <button
            onClick={() => navigate("/login")}
            className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Login
          </button>
        </div>
      </div>

      <main className="px-4 pb-12 pt-2">
        <section className="mx-auto grid max-w-7xl items-start gap-10 px-6 py-10 lg:grid-cols-[1.04fr_0.96fr] lg:py-14">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex rounded-full border border-sky-400/20 bg-sky-500/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-sky-200">
              Wealth Education • Opportunity Access • Premium Positioning
            </div>

            <h1 className="text-5xl font-semibold tracking-tight text-white md:text-6xl lg:text-7xl">
              Access capital, positioning, and deal flow — from the inside.
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">
              This is designed to position serious people in front of real opportunity — not
              just information.
            </p>

            <p className="mt-4 max-w-2xl text-sm uppercase tracking-[0.24em] text-slate-400">
              Built for operators who understand leverage, scale, and timing.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() =>
                  document.getElementById("overview")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
                className="rounded-xl bg-gradient-to-r from-emerald-400 to-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_12px_30px_rgba(16,185,129,0.18)] transition duration-300 hover:from-emerald-300 hover:to-emerald-400"
              >
                Enter the Room
              </button>
              <button
                onClick={() =>
                  document.getElementById("how-it-works")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
                className="rounded-xl border border-sky-500/20 bg-sky-500/10 px-5 py-3 text-sm font-semibold text-sky-200 transition duration-300 hover:bg-sky-500/15 hover:shadow-[0_0_25px_rgba(56,189,248,0.18)]"
              >
                Understand the System
              </button>
              <button
                onClick={() =>
                  document.getElementById("membership")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
                className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-white/10"
              >
                Choose Your Level
              </button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <StatCard value="3" label="Clear Pathways" accent="emerald" />
              <StatCard value="24/7" label="Lead Capture" accent="sky" />
              <StatCard value="High" label="Trust Value" accent="violet" />
            </div>
          </div>

          <div>
            <SectionShell className="p-8">
              <div className="mb-6">
                <div className="mb-4 overflow-hidden">
                  <LeagueWordmark size="sm" />
                </div>
                <h2 className="text-2xl font-semibold text-white">Private Access Portal</h2>
                <p className="mt-2 text-sm text-slate-300">
                  A private access layer for serious operators moving with clarity,
                  structure, and intent.
                </p>
              </div>

              <div className="space-y-4">
                <PremiumCard
                  eyebrow="System"
                  title="1. Learn the System"
                  body="See how credit, capital, and opportunity connect."
                  accent="sky"
                  interactive
                  onClick={() =>
                    document.getElementById("how-it-works")?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    })
                  }
                />

                <PremiumCard
                  eyebrow="Tiering"
                  title="2. Find Your Position"
                  body="Understand your fit, your tier, and your next serious move."
                  accent="violet"
                  interactive
                  onClick={() =>
                    document.getElementById("membership")?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    })
                  }
                />

                <PremiumCard
                  eyebrow="Access"
                  title="3. Move With Intention"
                  body="A direct path into the right tier, offer, or next step."
                  accent="emerald"
                  interactive
                  onClick={() => navigate("/login")}
                />
              </div>

              <div className="mt-6 space-y-4">
                <HighlightStrip
                  title="Positioning"
                  body="A controlled entry point into opportunity, capital, and deal flow."
                  accent="emerald"
                  onClick={() =>
                    document.getElementById("overview")?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    })
                  }
                />


        </section>

        <section id="overview" className="scroll-mt-24 mx-auto max-w-7xl px-6 py-6">
          <SectionShell className="p-8 md:p-10">
            <SectionHeading
              eyebrow="Proof of Position"
              title="This platform is designed for clarity, positioning, and real opportunity flow."
              body="Presentation affects trust. Trust affects response. The stronger the interface, the easier it is for a serious visitor to understand value and move."
              accent="emerald"
            />

            <div className="grid gap-6 lg:grid-cols-3">
              <PremiumCard
                eyebrow="Capital Context"
                title="Premium entry before confusion."
                body="Serious visitors should understand what exists, what tier they belong in, and how to move without wasting time."
                accent="sky"
              />
              <PremiumCard
                eyebrow="Deal Flow"
                title="Better structure produces better action."
                body="The system is designed to move a visitor from curiosity into tiered, premium decision-making."
                accent="violet"
              />
              <PremiumCard
                eyebrow="Trust Signal"
                title="Presentation affects perceived value."
                body="A controlled premium interface signals seriousness before a single call is booked."
                accent="emerald"
              />
            </div>
          </SectionShell>
        </section>

        <section id="how-it-works" className="scroll-mt-24 mx-auto max-w-7xl px-6 py-10">
          <SectionShell className="p-8 md:p-10">
            <SectionHeading
              eyebrow="Capabilities"
              title="Learn the path, identify your place, and move forward."
              body="The experience should feel guided, premium, and intentional from the first click to the next serious decision."
              accent="sky"
            />

            <div className="grid gap-6 lg:grid-cols-3">
              <PremiumCard
                eyebrow="Step 1"
                title="See the structure"
                body="Understand how positioning, funding, and opportunity fit together."
                accent="sky"
                interactive
              />
              <PremiumCard
                eyebrow="Step 2"
                title="Choose the right level"
                body="Enter the tier that matches your seriousness, needs, and next move."
                accent="violet"
                interactive
              />
              <PremiumCard
                eyebrow="Step 3"
                title="Move with intent"
                body="Use the private entry path to continue into the right offer or next step."
                accent="emerald"
                interactive
              />
            </div>
          </SectionShell>
        </section>

        <section id="membership" className="scroll-mt-24 mx-auto max-w-7xl px-6 py-10">
          <SectionShell className="p-8 md:p-10">
            <SectionHeading
              eyebrow="Access Tiers"
              title="Tiered entry for different levels of seriousness."
              body="Structured access to high-value corporate assets, capital pathways, and premium next steps."
              accent="violet"
            />

            <div className="grid gap-6 lg:grid-cols-3">
              <TierCard
                tier="Tier I"
                price="$297"
                cadence="entry"
                subtitle="Structured entry for operators ready to understand the system and move cleanly."
                features={[
                  "Private access orientation",
                  "Foundational positioning pathway",
                  "Tiered continuation options",
                ]}
                accent="emerald"
                onClick={() => navigate("/checkout/standard")}
              />

              <TierCard
                tier="Tier II"
                price="$1,250"
                cadence="level"
                subtitle="For visitors ready for more direct positioning and premium access."
                features={[
                  "Higher-trust positioning",
                  "Priority access pathway",
                  "More direct continuation flow",
                ]}
                accent="sky"
                onClick={() => navigate("/checkout/premium")}
              />

              <TierCard
                tier="Tier III"
                price="$4,950"
                cadence="private"
                subtitle="High-touch private entry for serious decision-makers and strategic operators."
                features={[
                  "Private access priority lane",
                  "Highest trust presentation",
                  "Direct path into premium next steps",
                ]}
                accent="violet"
                onClick={() => navigate("/checkout/vip")}
              />
            </div>
          </SectionShell>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-14">
          <SectionShell className="p-8 text-center md:p-10">
            <SectionHeading
              eyebrow="Final Positioning"
              title="Start at the right level. Move with clarity."
              body="This is a structured entry point into better positioning, better decisions, and better opportunities."
              accent="emerald"
            />

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => navigate("/signup")}
                className="rounded-xl bg-gradient-to-r from-emerald-400 to-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_12px_30px_rgba(16,185,129,0.18)] transition duration-300 hover:from-emerald-300 hover:to-emerald-400"
              >
                Continue to Phase 2
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-white/10"
              >
                Add Real Brand Assets
              </button>
            </div>
          </SectionShell>
        </section>
      </main>
    </div>
  );
}

function MobileLayout() {
  const navigate = useNavigate();

  return (
    <div className="md:hidden">
      <div className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
        <div className="flex items-center justify-center py-3">
          <LeagueWordmark size="sm" />
        </div>
      </div>

      <main className="px-4 pb-10 pt-4">
        <section>
          <SectionShell className="p-5">
            <div className="inline-flex rounded-full border border-sky-400/20 bg-sky-500/10 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-sky-200">
              Wealth Education • Deals • Access
            </div>

            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white">
              Access funding, credit, and real deals.
            </h1>

            <p className="mt-4 text-sm leading-7 text-slate-300">
              Built for serious operators ready to move.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-3">
              <button
                onClick={() =>
                  document.getElementById("overview-mobile")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
                className="rounded-xl bg-gradient-to-r from-emerald-400 to-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_12px_30px_rgba(16,185,129,0.18)]"
              >
                Enter the Room
              </button>

              <button
                onClick={() =>
                  document.getElementById("membership-mobile")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
                className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white"
              >
                View Options
              </button>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <StatCard value="3" label="Paths" accent="emerald" />
              <StatCard value="Clear" label="Flow" accent="sky" />
              <StatCard value="High" label="Trust" accent="violet" />
            </div>
          </SectionShell>
        </section>

        <section id="overview-mobile" className="pt-6">
          <SectionShell className="p-5">
            <div className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-emerald-300">
              Proof of Position
            </div>
            <div className="mt-4">
              <LeagueWordmark size="sm" />
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              A private access portal built to help serious visitors understand the system,
              identify the right tier, and move into the correct next step.
            </p>
          </SectionShell>
        </section>

        <section className="pt-6">
          <SectionShell className="p-5">
            <SectionHeading
              eyebrow="Capabilities"
              title="Move with structure"
              body="Learn the system, identify your level, and advance with clarity."
              accent="sky"
            />
            <div className="grid gap-4">
              <PremiumCard
                eyebrow="Step 1"
                title="See the structure"
                body="Understand how positioning, capital, and opportunity connect."
                accent="sky"
                interactive
              />
              <PremiumCard
                eyebrow="Step 2"
                title="Choose your level"
                body="Pick the access path that matches your seriousness and timing."
                accent="violet"
                interactive
              />
              <PremiumCard
                eyebrow="Step 3"
                title="Advance"
                body="Use the private path into the right tier, offer, or next step."
                accent="emerald"
                interactive
              />
            </div>
          </SectionShell>
        </section>

        <section id="membership-mobile" className="pt-6">
          <SectionShell className="p-5">
            <SectionHeading
              eyebrow="Access Tiers"
              title="Choose the right path"
              body="Structured access into premium positioning and next-step opportunity."
              accent="violet"
            />
            <div className="grid gap-4">
              <TierCard
                tier="Tier I"
                price="$297"
                cadence="entry"
                subtitle="Structured entry for people ready to get clear."
                features={["Orientation", "Positioning", "Tiered continuation"]}
                accent="emerald"
                onClick={() => navigate("/checkout/standard")}
              />

              <TierCard
                tier="Tier II"
                price="$1,250"
                cadence="level"
                subtitle="More direct premium positioning and access."
                features={["Priority path", "Higher trust", "Faster continuation"]}
                accent="sky"
                onClick={() => navigate("/checkout/premium")}
              />

              <TierCard
                tier="Tier III"
                price="$4,950"
                cadence="private"
                subtitle="Private access for serious operators."
                features={["Priority lane", "Private access", "Premium next-step flow"]}
                accent="violet"
                onClick={() => navigate("/checkout/vip")}
              />
            </div>
          </SectionShell>
        </section>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.12),_transparent_28%),radial-gradient(circle_at_top_left,_rgba(56,189,248,0.10),_transparent_26%),linear-gradient(180deg,_#020617_0%,_#020617_45%,_#020617_100%)] text-white">
      <DesktopLayout />
      <MobileLayout />
    </div>
  );
}