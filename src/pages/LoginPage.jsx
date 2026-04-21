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

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.12),transparent_24%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.15),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.12),transparent_22%)]" />

      <div className="relative flex min-h-screen items-center justify-center px-4">
        <div className="w-full max-w-xl rounded-[2rem] border border-sky-400/20 bg-sky-500/10 p-6 shadow-2xl backdrop-blur-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-300">Member Access</p>

          <div className="mt-4">
            <LeagueWordmark />
          </div>

          <p className="mt-5 text-lg leading-8 text-slate-200">
            Private member login preview for returning users. This portal flow is being prepared for paid access, tier management, and future Stripe-enabled onboarding.
          </p>

          <div className="mt-6 space-y-4">
            <div>
              <label className="mb-2 block text-sm font-semibold text-white">Email or Username</label>
              <input
                type="text"
                placeholder="name@example.com"
                className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-slate-300"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-white">Password</label>
              <input
                type="password"
                value="password123"
                readOnly
                className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white outline-none"
              />
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <button
              className="rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
            >
              Sign In
            </button>
            <button
              onClick={() => navigate("/")}
              className="rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              Back to League
            </button>
          </div>

          <div className="mt-4 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm leading-7 text-slate-200">
            This is a live interface preview showing the direction of the member portal. Authentication, billing, and account provisioning are the next layer.
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <button
              onClick={() => navigate("/signup")}
              className="text-sm font-semibold text-sky-300 transition hover:text-sky-200"
            >
              Create Account
            </button>
            <span className="text-slate-500">•</span>
            <span className="text-sm text-slate-400">Preview route: /login</span>
          </div>
        </div>
      </div>
    </div>
  );
}
