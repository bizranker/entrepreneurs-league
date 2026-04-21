import React from "react";
import { useNavigate } from "react-router-dom";

function BuildingMark({ size = "md" }) {
  const map = {
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
  };

  const c = map[size];

  return (
    <div className={`relative ${c.wrap}`}>
      <div className={`absolute left-0 right-0 ${c.baseBottom} flex justify-center`}>
        <div className={`h-[2px] ${c.base} rounded-full bg-slate-200/90`} />
      </div>
      <div className={`absolute ${c.leftBack} bottom-[4px] ${c.backW} ${c.backH} rounded-t-[5px] border border-slate-200/90 bg-transparent`}>
        <div className={`absolute left-1/2 top-[4px] -translate-x-1/2 flex flex-col ${c.windowGap}`}>
          <div className={`${c.windowW} ${c.windowH} rounded-full bg-slate-200/90`} />
          <div className={`${c.windowW} ${c.windowH} rounded-full bg-slate-200/90`} />
          <div className={`${c.windowW} ${c.windowH} rounded-full bg-slate-200/90`} />
          <div className={`${c.windowW} ${c.windowH} rounded-full bg-slate-200/90`} />
        </div>
      </div>
      <div className={`absolute ${c.leftFront} bottom-[4px] ${c.frontW} ${c.frontH} rounded-t-[4px] border border-slate-200/90 bg-transparent`}>
        <div className={`absolute left-1/2 top-[4px] -translate-x-1/2 flex flex-col ${c.windowGap}`}>
          <div className={`${c.windowW} ${c.windowH} rounded-full bg-slate-200/90`} />
          <div className={`${c.windowW} ${c.windowH} rounded-full bg-slate-200/90`} />
          <div className={`${c.windowW} ${c.windowH} rounded-full bg-slate-200/90`} />
        </div>
      </div>
    </div>
  );
}

function LeagueWordmark() {
  return (
    <div className="flex items-center gap-3">
      <BuildingMark size="sm" />
      <div>
        <div className="text-2xl font-semibold tracking-tight text-white">Entrepreneur’s League</div>
        <div className="text-xs uppercase tracking-[0.32em] text-slate-400">Private Access Platform</div>
      </div>
    </div>
  );
}

export default function SignupPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.12),transparent_24%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.15),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.12),transparent_22%)]" />

      <div className="relative flex min-h-screen items-center justify-center px-4">
        <div className="w-full max-w-2xl rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-400">Join the League</p>

          <div className="mt-4">
            <LeagueWordmark />
          </div>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">
            This is a preview of the onboarding layer. Membership setup, account activation, and plan-based access will live here in the production version.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-white">First Name</label>
              <input
                type="text"
                placeholder="Corey"
                className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-slate-300"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-white">Last Name</label>
              <input
                type="text"
                placeholder="Smith"
                className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-slate-300"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-white">Email</label>
              <input
                type="email"
                placeholder="name@example.com"
                className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-slate-300"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-white">Desired Tier</label>
              <select className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white outline-none">
                <option className="bg-slate-900">Standard</option>
                <option className="bg-slate-900">Premium</option>
                <option className="bg-slate-900">VIP</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-white">Create Password</label>
              <input
                type="password"
                placeholder="Create a password"
                className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-slate-300"
              />
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <button
              onClick={() => navigate("/checkout/standard")}
              className="rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
            >
              Continue to Plan Selection
            </button>
            <button
              onClick={() => navigate("/")}
              className="rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              Back to League
            </button>
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <button
              onClick={() => navigate("/login")}
              className="text-sm font-semibold text-sky-300 transition hover:text-sky-200"
            >
              Already a member? Login
            </button>
            <span className="text-slate-500">•</span>
            <span className="text-sm text-slate-400">Preview route: /signup</span>
          </div>
        </div>
      </div>
    </div>
  );
}
