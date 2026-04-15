import React, { useState } from "react";

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
  const textSizes = {
    xs: "text-[1rem]",
    sm: "text-[1.28rem]",
    md: "text-[1.85rem]",
  };

  return (
    <div className="flex items-center gap-2.5">
      <BuildingMark size={size} />
      <span className={`${textSizes[size]} font-semibold tracking-tight text-white`}>
        Entrepreneur’s League
      </span>
    </div>
  );
}

function StatCard({ value, label, accent = "emerald" }) {
  const accentMap = {
    emerald: "border-emerald-500/20 bg-emerald-500/5",
    sky: "border-sky-500/20 bg-sky-500/5",
    violet: "border-violet-500/20 bg-violet-500/5",
    amber: "border-amber-500/20 bg-amber-500/5",
  };

  return (
    <div className={`rounded-3xl border p-5 backdrop-blur-md ${accentMap[accent]}`}>
      <div className="text-3xl font-semibold text-white">{value}</div>
      <div className="mt-2 text-sm text-slate-300">{label}</div>
    </div>
  );
}

function CompactStat({ value, label, accent = "emerald" }) {
  const accentMap = {
    emerald: "border-emerald-500/20 bg-emerald-500/5",
    sky: "border-sky-500/20 bg-sky-500/5",
    violet: "border-violet-500/20 bg-violet-500/5",
    amber: "border-amber-500/20 bg-amber-500/5",
  };

  return (
    <div className={`rounded-2xl border p-4 ${accentMap[accent]}`}>
      <div className="text-2xl font-semibold tracking-tight text-white">{value}</div>
      <div className="mt-1 text-xs text-slate-300">{label}</div>
    </div>
  );
}

function ProofCard({ title, value, detail, accent = "emerald" }) {
  const accentMap = {
    emerald: "from-emerald-500/12 to-emerald-400/5 border-emerald-500/20",
    sky: "from-sky-500/12 to-sky-400/5 border-sky-500/20",
    violet: "from-violet-500/12 to-violet-400/5 border-violet-500/20",
    amber: "from-amber-500/12 to-amber-400/5 border-amber-500/20",
  };

  return (
    <div className={`rounded-3xl border bg-gradient-to-br ${accentMap[accent]} p-6`}>
      <div className="text-xs uppercase tracking-[0.24em] text-slate-400">{title}</div>
      <div className="mt-3 text-4xl font-semibold tracking-tight text-white">{value}</div>
      <div className="mt-2 text-sm leading-6 text-slate-300">{detail}</div>
    </div>
  );
}

function StoryCard({ name, role, result, body }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-lg font-semibold text-white">{name}</div>
          <div className="mt-1 text-sm text-slate-400">{role}</div>
        </div>
        <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
          {result}
        </div>
      </div>
      <p className="mt-4 text-sm leading-7 text-slate-300">{body}</p>
    </div>
  );
}

function FeatureCard({ eyebrow, title, body }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
        {eyebrow}
      </p>
      <h3 className="mt-4 text-2xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{body}</p>
    </div>
  );
}

function PathCard({ title, body }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
      <p className="font-semibold text-white">{title}</p>
      <p className="mt-2 text-sm text-slate-300">{body}</p>
    </div>
  );
}

function TierCard({
  tier,
  price,
  cadence,
  subtitle,
  features,
  cta,
  accent = "emerald",
  featured = false,
}) {
  const accentMap = {
    emerald: {
      ring: "border-emerald-500/30",
      badge: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
      button: "bg-emerald-500 text-slate-950 hover:bg-emerald-400",
      dot: "bg-emerald-400",
    },
    sky: {
      ring: "border-sky-500/30",
      badge: "border-sky-500/30 bg-sky-500/10 text-sky-300",
      button: "bg-sky-500 text-slate-950 hover:bg-sky-400",
      dot: "bg-sky-400",
    },
    violet: {
      ring: "border-violet-500/30",
      badge: "border-violet-500/30 bg-violet-500/10 text-violet-300",
      button: "bg-violet-500 text-white hover:bg-violet-400",
      dot: "bg-violet-400",
    },
  };

  const a = accentMap[accent];

  return (
    <div
      className={`flex h-full flex-col rounded-3xl border bg-slate-950/70 p-6 shadow-xl ${
        featured ? `${a.ring} ring-1 ring-white/10` : "border-white/10"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium ${a.badge}`}>
            {tier}
          </div>
          <div className="mt-4 text-4xl font-semibold tracking-tight text-white">
            {price}
            <span className="ml-1 text-xl text-slate-300">/{cadence}</span>
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-300">{subtitle}</p>
        </div>

        {featured && (
          <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
            Most Direct Path
          </div>
        )}
      </div>

      <div className="mt-6 space-y-3 pb-8">
        {features.map((feature) => (
          <div key={feature} className="flex items-start gap-3">
            <div className={`mt-2 h-2.5 w-2.5 rounded-full ${a.dot}`} />
            <p className="text-sm leading-6 text-slate-200">{feature}</p>
          </div>
        ))}
      </div>

      <button className={`mt-auto w-full rounded-xl px-5 py-3 text-sm font-semibold transition ${a.button}`}>
        {cta}
      </button>
    </div>
  );
}

function Chevron({ open }) {
  return (
    <span
      className={`inline-block text-slate-300 transition-transform duration-200 ${
        open ? "rotate-90" : ""
      }`}
    >
      ▶
    </span>
  );
}

function ExpandableSection({ title, subtitle, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left"
      >
        <div>
          <div className="text-sm font-semibold text-white">{title}</div>
          {subtitle ? <div className="mt-1 text-xs text-slate-400">{subtitle}</div> : null}
        </div>
        <Chevron open={open} />
      </button>

      {open ? <div className="border-t border-white/10 px-4 py-4">{children}</div> : null}
    </div>
  );
}

function DesktopLayout() {
  return (
    <div className="hidden lg:block">
      <header className="border-b border-white/10 bg-slate-950/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="rounded-2xl border border-white/10 bg-black/20 px-5 py-3 backdrop-blur-md">
            <div className="flex items-center gap-4">
              <LeagueWordmark size="sm" />
              <div className="hidden h-8 w-px bg-white/10 sm:block" />
              <div className="hidden sm:block">
                <div className="text-[11px] uppercase tracking-[0.32em] text-slate-300">
                  Corey Presentation
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.28em] text-emerald-300">
                  Private Wealth Platform
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs text-slate-200 transition hover:bg-white/15">
              Login
            </button>
            <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
              Ready to Deploy
            </span>
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-[1.04fr_0.96fr] lg:py-24">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex rounded-full border border-sky-400/20 bg-sky-500/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-sky-200">
              Wealth Education • Opportunity Access • Premium Positioning
            </div>

            <h1 className="text-5xl font-semibold tracking-tight text-white md:text-6xl lg:text-7xl">
              Access real funding, business credit, and strategic deals — all in one place.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              This concept is built to help your visitors quickly understand what you offer,
              why it matters, and what serious next step they should take.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">
                Watch Overview
              </button>
              <button className="rounded-xl border border-sky-500/20 bg-sky-500/10 px-5 py-3 text-sm font-semibold text-sky-200 transition hover:bg-sky-500/15">
                See How It Works
              </button>
              <button className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                Explore Membership Options
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
                  Premium front-end concept for Corey’s brand, offers, and opportunity flow
                </p>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                  <p className="text-sm font-semibold text-white">1. Learn the Playbook</p>
                  <p className="mt-1 text-sm text-slate-300">
                    Educational content, credibility, and a strong first impression.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                  <p className="text-sm font-semibold text-white">2. See Where You Fit</p>
                  <p className="mt-1 text-sm text-slate-300">
                    Visitors can quickly tell whether they are here to learn, invest, or take action.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                  <p className="text-sm font-semibold text-white">3. Take the Next Serious Step</p>
                  <p className="mt-1 text-sm text-slate-300">
                    Strategy call, premium offer, or direct path into a real opportunity.
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                <p className="text-sm font-semibold text-emerald-300">Positioning Statement</p>
                <p className="mt-2 text-sm leading-7 text-slate-200">
                  This is designed to feel like a premium front door for people who want more
                  than inspiration.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3 text-xs text-slate-200">
                <div className="rounded-2xl border border-sky-500/20 bg-sky-500/5 p-3">
                  <div className="font-medium text-sky-300">Authority Layer</div>
                  Clear positioning, premium presentation, and trust cues.
                </div>
                <div className="rounded-2xl border border-violet-500/20 bg-violet-500/5 p-3">
                  <div className="font-medium text-violet-300">Access Layer</div>
                  Serious visitors move naturally toward the right next step.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-4">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-400">
              Proof, Not Fluff
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Serious visitors respond to outcomes, not canned testimonials.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <ProofCard
              title="Funding Accessed"
              value="$2.1M+"
              detail="Illustrative placeholder for capital secured through positioning and business readiness."
              accent="emerald"
            />
            <ProofCard
              title="Entities Reviewed"
              value="47"
              detail="Example proof block showing how many opportunities were assessed or positioned for action."
              accent="sky"
            />
            <ProofCard
              title="Qualified Clients"
              value="12"
              detail="Serious buyers, investors, or operators who moved beyond curiosity."
              accent="violet"
            />
            <ProofCard
              title="Average Deal Size"
              value="$28K"
              detail="A clean way to signal economic seriousness without hype-heavy language."
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

        <section className="mx-auto max-w-7xl px-6 py-10">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
                  Suggested Site Structure
                </p>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight">
                  One brand. Multiple ways to engage.
                </h3>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <PathCard title="Education Path" body="Videos, training, proof, and simple entry points." />
                  <PathCard title="Consulting Path" body="A direct route for people ready to book time." />
                  <PathCard title="Investor Path" body="A polished presentation for serious people." />
                  <PathCard title="Premium Offer Path" body="High-value services and elite backend opportunities." />
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

        <section className="mx-auto max-w-7xl px-6 py-10">
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
              subtitle="Best for newer entrepreneurs who want structure, templates, and a direct starting point."
              features={[
                "Access to hiddencreditsecrets.com",
                "10 credit repair templates",
                "1 monthly coaching call on Zoom",
              ]}
              cta="Get Started"
              accent="emerald"
            />

            <TierCard
              tier="Premium"
              price="$997"
              cadence="year"
              subtitle="For committed operators who want deeper material, stronger training, and more live support."
              features={[
                "Everything in Standard",
                "Credit repair course",
                "2 monthly coaching calls on Zoom",
              ]}
              cta="Start with Premium"
              accent="sky"
            />

            <TierCard
              tier="VIP"
              price="$1,497"
              cadence="year"
              subtitle="For serious members who want the closest access and private proximity to Corey."
              features={[
                "Everything in Standard & Premium",
                "All 6 eBooks free download",
                "Clear Path Pilot Car Course",
                "2 monthly coaching calls on Zoom",
              ]}
              cta="Apply for VIP Access"
              accent="violet"
              featured
            />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-14">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
              What This Does For You
            </p>

            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              A premium Corey presentation that feels credible, clear, and built for real use.
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-300">
              This version keeps the polished visual style while using language, structure,
              proof points, and tier presentation that feel stronger for serious visitors.
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
    <div className="block lg:hidden">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between gap-3">
            <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
              <LeagueWordmark size="xs" />
            </div>
            <button className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs text-slate-200">
              Login
            </button>
          </div>
        </div>
      </header>

      <main className="px-4 pb-10 pt-4">
        <section>
          <div className="inline-flex rounded-full border border-sky-400/20 bg-sky-500/10 px-3 py-2 text-[10px] uppercase tracking-[0.28em] text-sky-200">
            Wealth Education • Deals • Access
          </div>

          <h1 className="mt-5 text-5xl font-semibold leading-[0.96] tracking-tight text-white">
            Access funding, credit, and real deals.
          </h1>

          <p className="mt-4 text-sm leading-7 text-slate-300">
            Built for serious operators ready to move.
          </p>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <button className="rounded-xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-slate-950">
              Watch Overview
            </button>
            <button className="rounded-xl border border-sky-500/20 bg-sky-500/10 px-4 py-3 text-sm font-semibold text-sky-200">
              View Options
            </button>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3">
            <CompactStat value="11" label="Members" accent="emerald" />
            <CompactStat value="$2.1M+" label="Raised" accent="sky" />
            <CompactStat value="47" label="Deals" accent="violet" />
          </div>
        </section>

        <section className="mt-6">
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
              subtitle="For newer entrepreneurs who want structure and a real starting point."
              features={[
                "Access to hiddencreditsecrets.com",
                "10 credit repair templates",
                "1 monthly coaching call on Zoom",
              ]}
              cta="Get Started"
              accent="emerald"
            />

            <TierCard
              tier="Premium"
              price="$997"
              cadence="year"
              subtitle="For committed operators who want stronger material and more support."
              features={[
                "Everything in Standard",
                "Credit repair course",
                "2 monthly coaching calls on Zoom",
              ]}
              cta="Start with Premium"
              accent="sky"
            />

            <TierCard
              tier="VIP"
              price="$1,497"
              cadence="year"
              subtitle="For members who want the closest access and private proximity to Corey."
              features={[
                "Everything in Standard & Premium",
                "All 6 eBooks free download",
                "Clear Path Pilot Car Course",
                "2 monthly coaching calls on Zoom",
              ]}
              cta="Apply for VIP Access"
              accent="violet"
              featured
            />
          </div>
        </section>

        <section className="mt-6">
          <div className="mb-4">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-400">
              Real Wins
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white">
              Proof people can respect.
            </h2>
          </div>

          <div className="space-y-4">
            <StoryCard
              name="Marcus Ellison"
              role="Logistics Operator • Texas"
              result="$180K Accessed"
              body="Used structure, positioning, and improved fundability to move from stalled growth into real working capital conversations."
            />
            <StoryCard
              name="Andre Wallace"
              role="Real Estate Entrepreneur • Florida"
              result="3 Deals Closed"
              body="Came in looking for clarity, tightened the strategy, and used the right tools to move with much more confidence and discipline."
            />
          </div>
        </section>

        <section className="mt-6">
          <div className="space-y-3">
            <ExpandableSection
              title="What’s inside the League"
              subtitle="Tap to see what members actually get"
              defaultOpen={false}
            >
              <div className="space-y-3 text-sm leading-7 text-slate-300">
                <p>Credit education, structured guidance, live calls, templates, and a clearer path toward funding readiness.</p>
              </div>
            </ExpandableSection>

            <ExpandableSection
              title="Why members join"
              subtitle="Quick reasons people step in"
              defaultOpen={false}
            >
              <div className="space-y-2 text-sm text-slate-300">
                <div className="rounded-xl border border-white/10 bg-slate-950/60 px-3 py-3">They want a real framework, not random internet advice.</div>
                <div className="rounded-xl border border-white/10 bg-slate-950/60 px-3 py-3">They want access to better funding conversations.</div>
                <div className="rounded-xl border border-white/10 bg-slate-950/60 px-3 py-3">They want direct exposure to how Corey thinks.</div>
              </div>
            </ExpandableSection>

            <ExpandableSection
              title="How it works"
              subtitle="Fast view of the path"
              defaultOpen={false}
            >
              <div className="space-y-2 text-sm text-slate-300">
                <div className="rounded-xl border border-white/10 bg-slate-950/60 px-3 py-3">Join the right tier</div>
                <div className="rounded-xl border border-white/10 bg-slate-950/60 px-3 py-3">Learn the framework</div>
                <div className="rounded-xl border border-white/10 bg-slate-950/60 px-3 py-3">Apply the system</div>
                <div className="rounded-xl border border-white/10 bg-slate-950/60 px-3 py-3">Move toward better opportunities</div>
              </div>
            </ExpandableSection>

            <ExpandableSection
              title="What serious members care about"
              subtitle="For investors and operators"
              defaultOpen={false}
            >
              <div className="grid grid-cols-2 gap-3">
                <CompactStat value="$28K" label="Avg deal size" accent="amber" />
                <CompactStat value="12" label="Qualified clients" accent="violet" />
                <CompactStat value="3" label="VIP members" accent="emerald" />
                <CompactStat value="4" label="New this month" accent="sky" />
              </div>
            </ExpandableSection>
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
              <button className="rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950">
                View Membership Options
              </button>
              <button className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white">
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
