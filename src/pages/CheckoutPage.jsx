import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const plans = {
  standard: {
    title: "Standard",
    price: "$149",
    cadence: "/month",
    accent: "text-emerald-300 border-emerald-400/20 bg-emerald-400/10",
    button: "bg-emerald-500 text-slate-950 hover:bg-emerald-400",
    description: "For individuals getting serious about credit, structure, and positioning.",
    includes: [
      "Access to hiddencreditsecrets.com",
      "10 credit repair templates",
      "1 monthly coaching call on Zoom",
    ],
  },
  premium: {
    title: "Premium",
    price: "$997",
    cadence: "/year",
    accent: "text-sky-300 border-sky-500/20 bg-sky-500/10",
    button: "bg-sky-400 text-slate-950 hover:bg-sky-300",
    description: "For operators who want deeper understanding, better execution, and consistent guidance.",
    includes: [
      "Everything in Standard",
      "Credit repair course",
      "2 monthly coaching calls on Zoom",
    ],
  },
  vip: {
    title: "VIP",
    price: "$2497",
    cadence: "/year",
    accent: "text-violet-300 border-violet-500/20 bg-violet-500/10",
    button: "bg-violet-400 text-slate-950 hover:bg-violet-300",
    description: "For serious entrepreneurs and investors who want direct access and strategic direction.",
    includes: [
      "Everything in Premium",
      "Weekly live group coaching calls",
      "1 private coaching call per month with Corey",
    ],
  },
};

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { tier } = useParams();
  const plan = plans[tier] || plans.standard;

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.12),transparent_24%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.15),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.12),transparent_22%)]" />

      <div className="relative mx-auto max-w-6xl px-4 py-10">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">Secure Checkout Preview</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-white">
              {plan.title} Membership
            </h1>
          </div>

          <button
            onClick={() => navigate("/")}
            className="rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
          >
            Back to League
          </button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className={`inline-flex rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${plan.accent}`}>
              {plan.title} Plan
            </div>

            <div className="mt-5 flex items-end gap-2">
              <span className="text-5xl font-semibold tracking-tight text-white">{plan.price}</span>
              <span className="pb-2 text-base text-slate-400">{plan.cadence}</span>
            </div>

            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">{plan.description}</p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-white">Cardholder Name</label>
                <input
                  type="text"
                  placeholder="Brian Bills"
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-slate-300"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-white">Email</label>
                <input
                  type="email"
                  placeholder="brianbills21@usreliance.com"
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-slate-300"
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-semibold text-white">Card Information</label>
                <input
                  type="text"
                  placeholder="4242 4242 4242 4242"
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-slate-300"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-white">Expiration</label>
                <input
                  type="text"
                  placeholder="12 / 29"
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-slate-300"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-white">CVC</label>
                <input
                  type="text"
                  placeholder="123"
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-slate-300"
                />
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button className={`rounded-xl px-5 py-3 text-sm font-semibold transition ${plan.button}`}>
                Continue to Secure Checkout
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                Create Account First
              </button>
            </div>

            <div className="mt-5 rounded-2xl border border-sky-500/20 bg-sky-500/10 p-4 text-sm leading-7 text-slate-200">
              Payment processing preview only. Live Stripe billing, account provisioning, and recurring subscription logic are part of the production phase.
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">Included with {plan.title}</p>

            <ul className="mt-5 space-y-4">
              {plan.includes.map((item) => (
                <li key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-slate-200">
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4">
              <p className="text-sm font-semibold text-emerald-300">Investor Demo Note</p>
              <p className="mt-2 text-sm leading-7 text-slate-200">
                This page is intentionally designed to feel like a production billing experience while remaining a safe preview environment for meetings and demos.
              </p>
            </div>

            <div className="mt-6 text-sm text-slate-400">
              Preview route: /checkout/{tier || "standard"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
