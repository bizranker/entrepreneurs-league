import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const plans = {
  standard: {
    title: "Tier I Access",
    price: "$297",
    cadence: "/entry",
    accent: "emerald",
    description:
      "Structured entry for operators ready to understand the system and move cleanly.",
    includes: [
      "Private access orientation",
      "Foundational positioning pathway",
      "Tiered continuation options",
    ],
  },
  premium: {
    title: "Tier II Access",
    price: "$1,250",
    cadence: "/level",
    accent: "sky",
    description:
      "For visitors ready for more direct positioning and premium access.",
    includes: [
      "Higher-trust positioning",
      "Priority access pathway",
      "More direct continuation flow",
    ],
  },
  vip: {
    title: "Tier III Access",
    price: "$4,950",
    cadence: "/private",
    accent: "violet",
    description:
      "High-touch private entry for serious decision-makers and strategic operators.",
    includes: [
      "Private access priority lane",
      "Highest trust presentation",
      "Direct path into premium next steps",
    ],
  },
};

function accentTheme(accent) {
  const map = {
    emerald: {
      badge: "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
      button:
        "bg-gradient-to-r from-emerald-400 to-emerald-500 text-slate-950 hover:from-emerald-300 hover:to-emerald-400 shadow-[0_12px_30px_rgba(16,185,129,0.18)]",
      glow: "shadow-[0_0_34px_rgba(16,185,129,0.14)]",
    },
    sky: {
      badge: "border-sky-400/20 bg-sky-500/10 text-sky-300",
      button:
        "bg-gradient-to-r from-sky-300 to-sky-400 text-slate-950 hover:from-sky-200 hover:to-sky-300 shadow-[0_12px_30px_rgba(56,189,248,0.18)]",
      glow: "shadow-[0_0_34px_rgba(56,189,248,0.14)]",
    },
    violet: {
      badge: "border-violet-400/20 bg-violet-500/10 text-violet-300",
      button:
        "bg-gradient-to-r from-violet-300 to-violet-400 text-slate-950 hover:from-violet-200 hover:to-violet-300 shadow-[0_12px_30px_rgba(168,85,247,0.18)]",
      glow: "shadow-[0_0_34px_rgba(168,85,247,0.14)]",
    },
  };

  return map[accent];
}

function PageShell({ children }) {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-[0_18px_60px_rgba(0,0,0,0.42)] backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="pointer-events-none absolute -right-24 top-0 h-40 w-40 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="relative">{children}</div>
    </div>
  );
}

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { tier } = useParams();
  const plan = plans[tier] || plans.standard;
  const a = accentTheme(plan.accent);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.12),_transparent_28%),radial-gradient(circle_at_top_left,_rgba(56,189,248,0.10),_transparent_26%),linear-gradient(180deg,_#020617_0%,_#020617_45%,_#020617_100%)] px-4 py-10 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <div className={`inline-flex rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.26em] ${a.badge}`}>
              Secure Checkout Preview
            </div>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
              {plan.title}
            </h1>
          </div>

          <button
            onClick={() => navigate("/")}
            className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:bg-white/10"
          >
            Back to League
          </button>
        </div>

        <PageShell>
          <div className="grid gap-8 p-6 md:grid-cols-[1.1fr_0.9fr] md:p-10">
            <div>
              <div className={`inline-flex rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] ${a.badge}`}>
                {plan.title}
              </div>

              <div className="mt-5 flex items-end gap-2">
                <span className="text-5xl font-semibold tracking-tight text-white">{plan.price}</span>
                <span className="pb-2 text-base text-slate-400">{plan.cadence}</span>
              </div>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
                {plan.description}
              </p>

              <div className={`mt-8 rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-6 ${a.glow}`}>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-white">
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      placeholder="Brian Bills"
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-white">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-400"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="mb-2 block text-sm font-semibold text-white">
                      Card Information
                    </label>
                    <input
                      type="text"
                      placeholder="4242 4242 4242 4242"
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-white">
                      Expiration
                    </label>
                    <input
                      type="text"
                      placeholder="12 / 29"
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-white">
                      CVC
                    </label>
                    <input
                      type="text"
                      placeholder="123"
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div className="mt-6 grid gap-3">
                  <button className={`rounded-xl px-5 py-3 text-sm font-semibold transition duration-300 ${a.button}`}>
                    Continue to Secure Checkout
                  </button>

                  <button
                    onClick={() => navigate("/signup")}
                    className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-white/10"
                  >
                    Create Account First
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:bg-white/[0.07]">
                <div className={`inline-flex rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] ${a.badge}`}>
                  Includes
                </div>

                <ul className="mt-5 space-y-4">
                  {plan.includes.map((item) => (
                    <li
                      key={item}
                      className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-sm leading-7 text-slate-200"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:bg-white/[0.07]">
                <div className="inline-flex rounded-full border border-sky-400/20 bg-sky-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-300">
                  Investor Demo Note
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  This page is intentionally designed to feel like a premium billing flow while remaining a safe preview environment for investor meetings and product walkthroughs.
                </p>
              </div>
            </div>
          </div>
        </PageShell>
      </div>
    </div>
  );
}