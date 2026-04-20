import React from "react";

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
      textWrap: "gap-2",
      title: "text-lg",
      subtitle: "text-[10px] tracking-[0.28em]",
    },
    md: {
      mark: "md",
      textWrap: "gap-3",
      title: "text-2xl",
      subtitle: "text-xs tracking-[0.32em]",
    },
  };

  const c = map[size];

  return (
    <div className={`flex items-center ${c.textWrap}`}>
      <BuildingMark size={c.mark} />
      <div>
        <div className={`${c.title} font-semibold tracking-tight text-white`}>Entrepreneur’s League</div>
        <div className={`${c.subtitle} uppercase text-slate-400`}>Private Access Platform</div>
      </div>
    </div>
  );
}

function StatCard({ value, label, accent = "emerald" }) {
  const tones = {
    emerald: "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
    sky: "border-sky-400/20 bg-sky-500/10 text-sky-300",
    violet: "border-violet-400/20 bg-violet-500/10 text-violet-300",
    amber: "border-amber-400/20 bg-amber-500/10 text-amber-300",
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
      <div className={`inline-flex rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${tones[accent]}`}>
        {label}
      </div>
      <div className="mt-3 text-3xl font-semibold tracking-tight text-white">{value}</div>
    </div>
  );
}

function FeatureCard({ eyebrow, title, body }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-300">{eyebrow}</p>
      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{body}</p>
    </div>
  );
}

function ProofCard({ title, value, detail, accent = "emerald" }) {
  const tones = {
    emerald: "text-emerald-300 border-emerald-400/20 bg-emerald-400/10",
    sky: "text-sky-300 border-sky-500/20 bg-sky-500/10",
    violet: "text-violet-300 border-violet-500/20 bg-violet-500/10",
    amber: "text-amber-300 border-amber-400/20 bg-amber-500/10",
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className={`inline-flex rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${tones[accent]}`}>
        {title}
      </div>
      <div className="mt-4 text-4xl font-semibold tracking-tight text-white">{value}</div>
      <p className="mt-3 text-sm leading-7 text-slate-300">{detail}</p>
    </div>
  );
}

function TierCard({ tier, price, cadence, subtitle, features, cta, accent = "emerald" }) {
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
    <div className={`flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 transition ${a.border}`}>
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
            <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-slate-300" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button className={`mt-auto w-full rounded-xl px-5 py-3 text-sm font-semibold transition ${a.button}`}>
        {cta}
      </button>
    </div>
  );
}

function PathCard({ title, body }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
      <p className="text-sm font-semibold text-white">{title}</p>
      <p className="mt-1 text-sm leading-7 text-slate-300">{body}</p>
    </div>
  );
}

function DesktopLayout() {
  return (
    <div className="hidden md:block">
      <div className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <LeagueWordmark size="sm" />
          <div className="hidden text-xs tracking-wide text-slate-400 sm:block">
            Private Access • Structured Entry
          </div>
        </div>
      </div>

      <main className="px-4 pb-10 pt-4">
        <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-[1.04fr_0.96fr] lg:py-24">
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
                onClick={() =>
                  document.getElementById("overview")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
                className="rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
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
                className="rounded-xl border border-sky-500/20 bg-sky-500/10 px-5 py-3 text-sm font-semibold text-sky-200 transition hover:bg-sky-500/15"
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
                className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Choose Your Level
              </button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <StatCard value="3" label="Clear pathways" accent="emerald" />
              <StatCard value="24/7" label="Lead capture" accent="sky" />
              <StatCard value="High" label="Trust value" accent="violet" />
            </div>
          </div>

          <div>
            <div className="rounded-[2rem] border border-white/10 bg-black/30 p-8 shadow-2xl backdrop-blur-xl">
              <div className="mb-6">
                <div className="mb-4 overflow-hidden">
                  <LeagueWordmark size="md" />
                </div>
                <h2 className="text-2xl font-semibold">Private Access Portal</h2>
                <p className="mt-2 text-sm text-slate-300">
                  Private access portal for people ready to move with clarity, structure, and opportunity.
                </p>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                  <p className="text-sm font-semibold text-white">1. Learn the System</p>
                  <p className="mt-1 text-sm text-slate-300">
                    Understand how credit, capital, and opportunity fit together.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                  <p className="text-sm font-semibold text-white">2. Find Your Position</p>
                  <p className="mt-1 text-sm text-slate-300">
                    See where you fit, what you qualify for, and what the next serious step looks like.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                  <p className="text-sm font-semibold text-white">3. Move With Intention</p>
                  <p className="mt-1 text-sm text-slate-300">
                    Enter the right tier, access the right tools, and move toward real opportunities.
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                <p className="text-sm font-semibold text-emerald-300">Positioning</p>
                <p className="mt-2 text-sm leading-7 text-slate-200">
                  This is not content.
                  It is a controlled entry point into opportunity, capital, and deal flow.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3 text-xs text-slate-200">
                <div className="rounded-2xl border border-sky-500/20 bg-sky-500/5 p-3">
                  <div className="font-medium text-sky-300">Authority Layer</div>
                  Clear positioning, proof, and trust signals for serious visitors.
                </div>
                <div className="rounded-2xl border border-violet-500/20 bg-violet-500/5 p-3">
                  <div className="font-medium text-violet-300">Access Layer</div>
                  A direct path into the right tier, offer, or next step.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="overview" className="mx-auto max-w-7xl px-6 py-6">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-400">
              Proof of Position
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              This platform is designed for clarity, positioning, and real opportunity flow.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <ProofCard
              title="Structured Access"
              value="Clear Entry"
              detail="Visitors immediately understand where they fit and what their next move is."
              accent="emerald"
            />
            <ProofCard
              title="Positioning"
              value="High Trust"
              detail="The experience signals credibility, seriousness, and intention from the first interaction."
              accent="sky"
            />
            <ProofCard
              title="Opportunity Flow"
              value="Directed"
              detail="Each pathway leads toward a defined outcome — not random browsing."
              accent="violet"
            />
            <ProofCard
              title="Audience Quality"
              value="Filtered"
              detail="Designed to attract people ready to act, not just consume content."
              accent="amber"
            />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10">
          <div className="grid gap-6 md:grid-cols-3">
            <FeatureCard
              eyebrow="Trust"
              title="Look established from day one"
              body="Strong visuals and confident messaging help visitors immediately feel they are in the right place."
            />
            <FeatureCard
              eyebrow="Clarity"
              title="Help people understand the opportunity"
              body="The site can walk them through what Corey offers and what the next step should be."
            />
            <FeatureCard
              eyebrow="Action"
              title="Support premium offers and serious leads"
              body="From consultations to courses to business opportunities, this layout gives each offer a credible home."
            />
          </div>
        </section>

        <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-10">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
                  The System
                </p>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight">
                  A clear path from curiosity to access.
                </h3>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <PathCard title="Learn the System" body="Videos, training, proof, and a clear first step." />
                  <PathCard title="Get Direct Guidance" body="A direct route for people ready to book time and move with intention." />
                  <PathCard title="Access Opportunities" body="A sharper presentation for serious people looking for strategic deals and capital." />
                  <PathCard title="Enter the Inner Circle" body="High-value services, premium support, and the strongest next step." />
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
                  Visitor Journey
                </p>

                <div className="mt-4 space-y-3">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-slate-200">
                    Arrives on the site
                  </div>
                  <div className="rounded-xl border border-sky-500/20 bg-sky-500/5 p-3 text-sm text-slate-200">
                    Sees proof and authority
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-slate-200">
                    Understands the options
                  </div>
                  <div className="rounded-xl border border-violet-500/20 bg-violet-500/5 p-3 text-sm text-slate-200">
                    Books, opts in, or applies
                  </div>
                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-3 text-sm font-semibold text-emerald-300">
                    Serious lead captured
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="membership" className="mx-auto max-w-7xl px-6 py-10">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-300">
              Membership Options
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Let people understand the value before they choose a level.
            </h2>
          </div>

          <div className="grid gap-6 xl:grid-cols-3">
            <TierCard
              tier="Standard"
              price="$149"
              cadence="month"
              subtitle="For individuals getting serious about credit, structure, and positioning."
              features={[
                "Access to hiddencreditsecrets.com",
                "10 credit repair templates",
                "1 monthly coaching call on Zoom",
              ]}
              cta="Start at the Foundation"
              accent="emerald"
            />

            <TierCard
              tier="Premium"
              price="$997"
              cadence="year"
              subtitle="For operators who want deeper understanding, better execution, and consistent guidance."
              features={[
                "Everything in Standard",
                "Credit repair course",
                "2 monthly coaching calls on Zoom",
              ]}
              cta="Step Into Premium"
              accent="sky"
            />

            <TierCard
              tier="VIP"
              price="$2497"
              cadence="year"
              subtitle="For serious entrepreneurs and investors who want direct access and strategic direction."
              features={[
                "Everything in Premium",
                "Weekly live group coaching calls",
                "1 private coaching call per month with Corey",
              ]}
              cta="Request Private Access"
              accent="violet"
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
              This is a structured entry point into better positioning, better decisions, and better opportunities.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button className="rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">
                Continue to Phase 2
              </button>
              <button className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
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

            <div className="mt-4">
              <LeagueWordmark size="sm" />
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
                  document.getElementById("overview")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
                className="rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950"
              >
                Watch Overview
              </button>
              <button
                onClick={() =>
                  document.getElementById("membership")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
                className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white"
              >
                View Options
              </button>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3">
              <StatCard value="3" label="Paths" accent="emerald" />
              <StatCard value="Clear" label="Flow" accent="sky" />
              <StatCard value="High" label="Trust" accent="violet" />
            </div>

            <div className="mt-8 rounded-3xl border border-white/10 bg-slate-950/70 p-5">
              <div className="overflow-hidden">
                <LeagueWordmark size="sm" />
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                A private access portal built to help serious visitors move from interest to action.
              </p>

              <div className="mt-5 space-y-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-semibold text-white">Learn the system</p>
                  <p className="mt-1 text-sm leading-7 text-slate-300">
                    See how credit, capital, and opportunity work together.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-semibold text-white">Find your fit</p>
                  <p className="mt-1 text-sm leading-7 text-slate-300">
                    Understand whether you are here to learn, invest, or move directly.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-semibold text-white">Choose a serious next step</p>
                  <p className="mt-1 text-sm leading-7 text-slate-300">
                    Book, join, or apply based on your level of readiness.
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                <p className="text-sm font-semibold text-emerald-300">Positioning</p>
                <p className="mt-2 text-sm leading-7 text-slate-200">
                  This is a controlled entry point into better opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="overview" className="mt-6">
          <div className="mb-4">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-400">
              Proof of Position
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white">
              This platform is designed for clarity, positioning, and real opportunity flow.
            </h2>
          </div>

          <div className="grid gap-4">
            <ProofCard
              title="Structured Access"
              value="Clear Entry"
              detail="Visitors immediately understand where they fit and what their next move is."
              accent="emerald"
            />
            <ProofCard
              title="Positioning"
              value="High Trust"
              detail="The experience signals credibility, seriousness, and intention from the first interaction."
              accent="sky"
            />
          </div>
        </section>

        <section className="mt-6">
          <div className="grid gap-4">
            <FeatureCard
              eyebrow="Trust"
              title="Look established"
              body="Strong visuals and confident messaging instantly change how visitors feel."
            />
            <FeatureCard
              eyebrow="Clarity"
              title="Show the path"
              body="Explain what Corey offers and why the next step matters."
            />
            <FeatureCard
              eyebrow="Action"
              title="Drive real leads"
              body="Create a clean path into calls, offers, and opportunity."
            />
          </div>
        </section>

        <section id="how-it-works" className="mt-6">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-400">
              The System
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              One brand. Multiple ways to engage.
            </h2>

            <div className="mt-5 space-y-3">
              <PathCard title="Learn the System" body="Videos, proof, and simple entry points." />
              <PathCard title="Get Direct Guidance" body="A direct route into paid guidance." />
              <PathCard title="Access Opportunities" body="A sharper presentation for serious people." />
              <PathCard title="Enter the Inner Circle" body="Elite services and backend opportunities." />
            </div>

            <div className="mt-5 rounded-2xl border border-white/10 bg-slate-950/70 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
                Visitor Journey
              </p>

              <div className="mt-4 space-y-3">
                <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-slate-200">
                  Arrives on site
                </div>
                <div className="rounded-xl border border-sky-500/20 bg-sky-500/5 p-3 text-sm text-slate-200">
                  Sees proof and authority
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-slate-200">
                  Understands the options
                </div>
                <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-3 text-sm font-semibold text-emerald-300">
                  Serious lead captured
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="membership" className="mt-6">
          <div className="mb-4">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-300">
              Membership Options
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white">
              Start where you fit.
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Clear paths. Real access. No guessing.
            </p>
          </div>

          <div className="space-y-4">
            <TierCard
              tier="Standard"
              price="$149"
              cadence="month"
              subtitle="For individuals getting serious about credit, structure, and positioning."
              features={[
                "Access to hiddencreditsecrets.com",
                "10 credit repair templates",
                "1 monthly coaching call on Zoom",
              ]}
              cta="Start at the Foundation"
              accent="emerald"
            />

            <TierCard
              tier="Premium"
              price="$997"
              cadence="year"
              subtitle="For operators who want deeper understanding, better execution, and consistent guidance."
              features={[
                "Everything in Standard",
                "Credit repair course",
                "2 monthly coaching calls on Zoom",
              ]}
              cta="Step Into Premium"
              accent="sky"
            />

            <TierCard
              tier="VIP"
              price="$2497"
              cadence="year"
              subtitle="For serious entrepreneurs and investors who want direct access and strategic direction."
              features={[
                "Everything in Premium",
                "Weekly live group coaching calls",
                "1 private call per month with Corey",
              ]}
              cta="Request Private Access"
              accent="violet"
            />
          </div>
        </section>

        <section className="mt-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-2xl font-semibold text-white">
              They want a real framework, not random internet advice.
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
              <p>They want access to better funding conversations.</p>
              <p>They want direct exposure to how Corey thinks.</p>
              <p>They want a clear path that feels premium and believable.</p>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-3">
              <button
                onClick={() =>
                  document.getElementById("membership")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
                className="rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950"
              >
                Join the right tier
              </button>
              <button
                onClick={() =>
                  document.getElementById("how-it-works")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
                className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white"
              >
                Learn the framework
              </button>
            </div>
          </div>
        </section>

        <section className="mt-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-400">
              Next Step
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              Step inside the League.
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Start with the right tier, learn the system, and move with clarity.
            </p>

            <div className="mt-5 grid grid-cols-1 gap-3">
              <button
                onClick={() =>
                  document.getElementById("membership")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
                className="rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950"
              >
                View Membership Options
              </button>
              <button
                onClick={() =>
                  document.getElementById("overview")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
                className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white"
              >
                Watch Overview
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.12),transparent_24%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.15),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.12),transparent_22%)]" />
      <div className="relative">
        <DesktopLayout />
        <MobileLayout />
      </div>
    </div>
  );
}
