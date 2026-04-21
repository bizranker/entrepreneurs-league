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

function StatCard({ value, label, accent = "emerald" }) {
  const tones = {
    emerald: "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
    sky: "border-sky-400/20 bg-sky-500/10 text-sky-300",
    violet: "border-violet-400/20 bg-violet-500/10 text-violet-300",
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
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
      button: "bg-emerald-500 text-slate-950 hover:bg-emerald-400",
      border: "hover:border-emerald-400/25",
    },
    sky: {
      badge: "border-sky-500/20 bg-sky-500/10 text-sky-300",
      button: "bg-sky-400 text-slate-950 hover:bg-sky-300",
      border: "hover:border-sky-500/25",
    },
    violet: {
      badge: "border-violet-500/20 bg-violet-500/10 text-violet-300",
      button: "bg-violet-400 text-slate-950 hover:bg-violet-300",
      border: "hover:border-violet-500/25",
    },
  };

  const a = accents[accent];

  return (
    <div
      className={`flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 transition ${a.border}`}
    >
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
        className={`mt-8 rounded-xl px-5 py-3 text-sm font-semibold transition ${a.button}`}
      >
        Continue
      </button>
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

      <main className="px-4 pb-10 pt-2">
        <section className="mx-auto grid max-w-7xl items-start gap-10 px-6 py-10 lg:grid-cols-[1.04fr_0.96fr] lg:py-14">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex rounded-full border border-sky-400/20 bg-sky-500/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-sky-200">
              Wealth Education • Opportunity Access • Premium Positioning
            </div>

            <h1 className="text-5xl font-semibold tracking-tight text-white md:text-6xl lg:text-7xl">
              Access capital, positioning, and deal flow — from the inside.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              This is designed to position serious people in front of real opportunity — not
              just information.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => document.getElementById("overview")?.scrollIntoView({ behavior: "smooth", block: "start" })}
                className="rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
              >
                Enter the Room
              </button>
              <button
                onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth", block: "start" })}
                className="rounded-xl border border-sky-500/20 bg-sky-500/10 px-5 py-3 text-sm font-semibold text-sky-200 transition hover:bg-sky-500/15"
              >
                Understand the System
              </button>
              <button
                onClick={() => document.getElementById("membership")?.scrollIntoView({ behavior: "smooth", block: "start" })}
                className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
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
            <div className="rounded-[2rem] border border-white/10 bg-black/30 p-8 shadow-2xl backdrop-blur-xl">
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
                <div
                  onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth", block: "start" })}
                  role="button"
                  tabIndex={0}
                  className="group cursor-pointer rounded-2xl border border-white/10 bg-slate-950/70 p-5 transition hover:border-sky-400/40 hover:bg-slate-900/80"
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-sky-500/10 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-sky-300">
                      System
                    </span>
                    <span className="text-slate-500 opacity-50 transition duration-200 group-hover:translate-x-1 group-hover:text-sky-300 group-hover:opacity-100">
                      →
                    </span>
                  </div>

                  <p className="mt-3 text-sm font-semibold text-white">1. Learn the System</p>
                  <p className="mt-1 text-sm text-slate-300">
                    See how credit, capital, and opportunity connect.
                  </p>
                </div>

                <div
                  onClick={() => document.getElementById("membership")?.scrollIntoView({ behavior: "smooth", block: "start" })}
                  role="button"
                  tabIndex={0}
                  className="group cursor-pointer rounded-2xl border border-white/10 bg-slate-950/70 p-5 transition hover:border-violet-400/40 hover:bg-slate-900/80"
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-violet-500/10 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-violet-300">
                      Tiering
                    </span>
                    <span className="text-slate-500 opacity-50 transition duration-200 group-hover:translate-x-1 group-hover:text-violet-300 group-hover:opacity-100">
                      →
                    </span>
                  </div>

                  <p className="mt-3 text-sm font-semibold text-white">2. Find Your Position</p>
                  <p className="mt-1 text-sm text-slate-300">
                    Understand your fit, your tier, and your next serious move.
                  </p>
                </div>

                <div
                  onClick={() => navigate("/login")}
                  role="button"
                  tabIndex={0}
                  className="group cursor-pointer rounded-2xl border border-white/10 bg-slate-950/70 p-5 transition hover:border-emerald-400/40 hover:bg-slate-900/80"
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-emerald-300">
                      Access
                    </span>
                    <span className="text-slate-500 opacity-50 transition duration-200 group-hover:translate-x-1 group-hover:text-emerald-300 group-hover:opacity-100">
                      →
                    </span>
                  </div>

                  <p className="mt-3 text-sm font-semibold text-white">3. Move With Intention</p>
                  <p className="mt-1 text-sm text-slate-300">
                    A direct path into the right tier, offer, or next step.
                  </p>
                </div>
              </div>

              <div
                onClick={() => document.getElementById("overview")?.scrollIntoView({ behavior: "smooth", block: "start" })}
                role="button"
                tabIndex={0}
                className="mt-6 cursor-pointer rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5 transition hover:bg-emerald-400/15"
              >
                <p className="text-sm font-semibold text-emerald-300">Positioning</p>
                <p className="mt-2 text-sm leading-7 text-slate-200">
                  A controlled entry point into opportunity, capital, and deal flow.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3 text-xs text-slate-200">
                <div
                  onClick={() => document.getElementById("overview")?.scrollIntoView({ behavior: "smooth", block: "start" })}
                  role="button"
                  tabIndex={0}
                  className="cursor-pointer rounded-2xl border border-sky-500/20 bg-sky-500/5 p-3 transition hover:bg-sky-500/10"
                >
                  <div className="font-medium text-sky-300">Authority Layer</div>
                  Clear positioning, proof, and trust signals for serious visitors.
                </div>

                <div
                  onClick={() => document.getElementById("membership")?.scrollIntoView({ behavior: "smooth", block: "start" })}
                  role="button"
                  tabIndex={0}
                  className="cursor-pointer rounded-2xl border border-violet-500/20 bg-violet-500/5 p-3 transition hover:bg-violet-500/10"
                >
                  <div className="font-medium text-violet-300">Access Layer</div>
                  A direct path into the right tier, offer, or next step.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="overview" className="scroll-mt-24 mx-auto max-w-7xl px-6 py-6">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-400">
              Proof of Position
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              This platform is designed for clarity, positioning, and real opportunity flow.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-300">
                Capital Context
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">Premium entry before confusion.</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Serious visitors should understand what exists, what tier they belong in,
                and how to move without wasting time.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-300">
                Deal Flow
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">Better structure produces better action.</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                The system is designed to move a visitor from curiosity into tiered,
                premium decision-making.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">
                Trust Signal
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">Presentation affects perceived value.</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                A controlled premium interface signals seriousness before a single call is booked.
              </p>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="scroll-mt-24 mx-auto max-w-7xl px-6 py-10">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-300">
              How It Works
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Learn the path, identify your place, and move forward.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="inline-flex rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-sky-300">
                Step 1
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-white">See the structure</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Understand how positioning, funding, and opportunity fit together.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-violet-300">
                Step 2
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-white">Choose the right level</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Enter the tier that matches your seriousness, needs, and next move.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-emerald-300">
                Step 3
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-white">Move with intent</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Use the private entry path to continue into the right offer or next step.
              </p>
            </div>
          </div>
        </section>

        <section id="membership" className="scroll-mt-24 mx-auto max-w-7xl px-6 py-10">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-violet-300">
              Membership Tiers
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Tiered entry for different levels of seriousness.
            </h2>
          </div>

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
        </section>

        <section className="mx-auto max-w-7xl px-6 py-14">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
              Why It Matters
            </p>

            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Start at the right level. Move with clarity.
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-300">
              This is a structured entry point into better positioning, better decisions,
              and better opportunities.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => navigate("/signup")}
                className="rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
              >
                Continue to Phase 2
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Add Real Brand Assets
              </button>
            </div>
          </div>
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
          <div className="rounded-[2rem] border border-white/10 bg-black/30 p-5 backdrop-blur-xl">
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
                onClick={() => document.getElementById("overview-mobile")?.scrollIntoView({ behavior: "smooth", block: "start" })}
                className="rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950"
              >
                Enter the Room
              </button>

              <button
                onClick={() => document.getElementById("membership-mobile")?.scrollIntoView({ behavior: "smooth", block: "start" })}
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
          </div>
        </section>

        <section id="overview-mobile" className="pt-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <LeagueWordmark size="sm" />
            <p className="mt-4 text-sm leading-7 text-slate-300">
              A private access portal built to help serious visitors understand the system,
              identify the right tier, and move into the correct next step.
            </p>
          </div>
        </section>

        <section id="membership-mobile" className="pt-6">
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
