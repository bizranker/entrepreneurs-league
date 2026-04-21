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

function LeagueWordmark() {
  return (
    <div className="flex items-center gap-3">
      <BuildingMark size="sm" />
      <div>
        <div className="text-2xl font-semibold tracking-tight text-white">
          Entrepreneur&apos;s League
        </div>
        <div className="text-xs uppercase tracking-[0.32em] text-slate-400">
          Private Access Platform
        </div>
      </div>
    </div>
  );
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

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.12),_transparent_28%),radial-gradient(circle_at_top_left,_rgba(56,189,248,0.10),_transparent_26%),linear-gradient(180deg,_#020617_0%,_#020617_45%,_#020617_100%)] px-4 py-10 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex items-center justify-between">
          <LeagueWordmark />
          <button
            onClick={() => navigate("/")}
            className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:bg-white/10"
          >
            Back to League
          </button>
        </div>

        <PageShell>
          <div className="grid gap-8 p-6 md:grid-cols-[1fr_0.9fr] md:p-10">
            <div>
              <div className="inline-flex rounded-full border border-sky-400/20 bg-sky-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.26em] text-sky-300">
                Member Access
              </div>

              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
                Enter the private platform.
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
                This preview is designed to feel like a real premium entry point for
                returning members, partners, and serious operators moving into the next step.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07] hover:shadow-[0_0_30px_rgba(56,189,248,0.14)]">
                  <div className="inline-flex rounded-full border border-sky-400/20 bg-sky-500/10 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-sky-300">
                    Access
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold text-white">Structured entry</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    Clean access into the member environment, premium routes, and next-step actions.
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07] hover:shadow-[0_0_30px_rgba(168,85,247,0.14)]">
                  <div className="inline-flex rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-violet-300">
                    Trust
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold text-white">Controlled flow</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    The experience is designed to feel guided, intentional, and ready for serious use.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/75 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.35)]">
              <div className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-emerald-300">
                Login Preview
              </div>

              <div className="mt-6 space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-white">
                    Email or Username
                  </label>
                  <input
                    type="text"
                    placeholder="name@example.com"
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="mt-6 grid gap-3">
                <button className="rounded-xl bg-gradient-to-r from-emerald-400 to-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_12px_30px_rgba(16,185,129,0.18)] transition duration-300 hover:from-emerald-300 hover:to-emerald-400">
                  Enter the Platform
                </button>

                <button
                  onClick={() => navigate("/signup")}
                  className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-white/10"
                >
                  Create Account
                </button>
              </div>

              <div className="mt-6 rounded-2xl border border-sky-400/20 bg-sky-500/10 p-4">
                <div className="text-sm font-semibold text-sky-300">Demo Note</div>
                <p className="mt-2 text-sm leading-7 text-slate-200">
                  This is a premium preview environment for investor and funnel demonstration.
                </p>
              </div>
            </div>
          </div>
        </PageShell>
      </div>
    </div>
  );
}