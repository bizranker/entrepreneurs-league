import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Bell,
  Shield,
  Landmark,
  Filter,
  ChevronRight,
  ArrowRight,
  Globe,
  Database,
  Network,
  Sparkles,
  Lock,
  Briefcase,
  Users,
  FileBarChart,
  LineChart,
  Wallet,
  CheckCircle2,
  Clock3,
  Flag,
  BadgeDollarSign,
  LogOut,
} from "lucide-react";

const mockUsers = [
  { username: "investor", password: "demo123", displayName: "Investor", role: "investor" },
  { username: "brian", password: "admin123", displayName: "Brian Bills", role: "admin" },
];

const entities = [
  {
    id: 1,
    name: "Atlantic Capital Holdings LLC",
    state: "Florida",
    age: 11,
    status: "Admin Dissolution",
    tier: "Tier I",
    score: 92,
    estimatedValue: "$38K–$55K",
    price: "$42,500",
    industry: "Consulting",
    readiness: "High",
  },
  {
    id: 2,
    name: "Suncoast Property Ventures Inc.",
    state: "Florida",
    age: 8,
    status: "Inactive",
    tier: "Tier II",
    score: 81,
    estimatedValue: "$24K–$34K",
    price: "$27,900",
    industry: "Real Estate",
    readiness: "High",
  },
  {
    id: 3,
    name: "Gulfstream Logistics Group LLC",
    state: "Texas",
    age: 7,
    status: "Admin Dissolution",
    tier: "Tier II",
    score: 78,
    estimatedValue: "$19K–$31K",
    price: "$24,800",
    industry: "Logistics",
    readiness: "Moderate",
  },
  {
    id: 4,
    name: "Silverline Merchant Solutions Corp.",
    state: "Wyoming",
    age: 6,
    status: "Inactive",
    tier: "Tier III",
    score: 70,
    estimatedValue: "$14K–$22K",
    price: "$16,900",
    industry: "Payments",
    readiness: "Emerging",
  },
  {
    id: 5,
    name: "Reliant Energy Advisors LLC",
    state: "Nevada",
    age: 13,
    status: "Admin Dissolution",
    tier: "Tier I",
    score: 95,
    estimatedValue: "$45K–$62K",
    price: "$48,750",
    industry: "Energy",
    readiness: "High",
  },
  {
    id: 6,
    name: "Heritage Medical Supply Inc.",
    state: "Florida",
    age: 9,
    status: "Inactive",
    tier: "Tier II",
    score: 84,
    estimatedValue: "$26K–$39K",
    price: "$29,400",
    industry: "Healthcare",
    readiness: "Moderate",
  },
];

const services = [
  {
    icon: Shield,
    title: "Asset Protection Structures",
    description:
      "Cook Islands trust guidance, entity layering, and ownership shielding strategies for premium clients.",
  },
  {
    icon: Landmark,
    title: "Corporate Credit Optimization",
    description:
      "Advisory services to improve fundability, trade lines, and lender readiness after acquisition.",
  },
  {
    icon: Briefcase,
    title: "Executive Acquisition Concierge",
    description:
      "White-glove sourcing, negotiation support, ownership transfer, and transaction handling.",
  },
  {
    icon: Wallet,
    title: "Investor Access & REIT Pathways",
    description:
      "Structured investor offerings, premium member programs, and adjacent wealth-building products.",
  },
];

const signals = [
  { label: "Age Weight", value: "+28" },
  { label: "Status Score", value: "+24" },
  { label: "Credit Tier Potential", value: "+26" },
  { label: "Industry Stability", value: "+14" },
  { label: "Acquisition Friction", value: "-6" },
];

const architecture = [
  {
    title: "Public Registry Ingestion",
    icon: Globe,
    body: "State filing records are discovered from public Secretary of State sources and normalized into a unified entity pipeline.",
  },
  {
    title: "Data Warehouse & Entity Graph",
    icon: Database,
    body: "Business records, ownership metadata, filing histories, and scoring attributes are stored in a structured intelligence layer.",
  },
  {
    title: "Enrichment & Credit APIs",
    icon: Network,
    body: "Eligible entities are pushed through enrichment connectors and score engines to classify fundability and opportunity class.",
  },
  {
    title: "Ranking & Marketplace",
    icon: Sparkles,
    body: "The platform ranks opportunities by score, age, price band, and acquisition readiness, then surfaces them inside a premium portal.",
  },
];

const investors = [
  {
    title: "Why It Wins",
    bullets: [
      "Transforms fragmented manual sourcing into a structured intelligence platform.",
      "Combines discovery, qualification, ranking, and monetization inside one system.",
      "Creates cross-sell opportunities beyond entity acquisition itself.",
    ],
  },
  {
    title: "Revenue Streams",
    bullets: [
      "Premium subscription access to ranked opportunity data.",
      "Transaction and concierge fees on successful acquisitions.",
      "High-margin adjacent services: structuring, protection, investor pathways.",
    ],
  },
  {
    title: "Expansion Path",
    bullets: [
      "Florida proof point → all no-income-tax states → national coverage.",
      "Data moat improves with every crawl, enrichment cycle, and transaction outcome.",
      "Investor deck, deal room, and partner channel support built into product motion.",
    ],
  },
];

function tierClass(tier) {
  if (tier === "Tier I") {
    return "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30";
  }
  if (tier === "Tier II") {
    return "bg-amber-500/15 text-amber-300 border border-amber-500/30";
  }
  return "bg-slate-500/15 text-slate-300 border border-slate-500/30";
}

function readinessClass(readiness) {
  if (readiness === "High") return "text-emerald-400";
  if (readiness === "Moderate") return "text-amber-400";
  return "text-slate-400";
}

function StatCard({ title, value, sub, icon: Icon }) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 text-white shadow-xl">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-400">{title}</p>
          <p className="mt-2 text-3xl font-semibold tracking-tight">{value}</p>
          <p className="mt-2 text-xs text-slate-500">{sub}</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-3">
          <Icon className="h-5 w-5 text-indigo-300" />
        </div>
      </div>
    </div>
  );
}

function BuildingMark({ size = "md" }) {
  const map = {
    xs: {
      wrap: "w-7 h-7",
      stroke: "stroke-[1.8]",
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
      stroke: "stroke-[1.9]",
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
      stroke: "stroke-[2]",
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

function BizRankerWordmark({ size = "md" }) {
  const textSizes = {
    xs: "text-[1rem]",
    sm: "text-[1.28rem]",
    md: "text-[1.85rem]",
  };

  return (
    <div className="flex items-center gap-2.5">
      <BuildingMark size={size} />
      <span className={`${textSizes[size]} font-semibold tracking-tight text-white`}>
        BizRanker
      </span>
    </div>
  );
}

function Hero({ onLogin, loginError }) {
  const [username, setUsername] = useState("investor");
  const [password, setPassword] = useState("demo123");

  const submit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/assets/images/bizranker-usreliance-headquarters.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-slate-950/72" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-950/82 to-indigo-950/60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.16),transparent_30%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-6 py-8 lg:px-10">
        <div className="flex items-center justify-between">
          <div className="rounded-2xl border border-white/10 bg-black/30 px-5 py-3 backdrop-blur-md">
            <div className="flex items-center gap-4">
              <BizRankerWordmark size="sm" />
              <div className="hidden h-8 w-px bg-white/10 sm:block" />
              <div className="hidden sm:block">
                <div className="text-[11px] uppercase tracking-[0.32em] text-slate-300">
                  Investor Prototype
                </div>
              </div>
            </div>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-slate-200 backdrop-blur">
              Private Access
            </span>
            <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300 backdrop-blur">
              High-Trust Demo
            </span>
          </div>
        </div>

        <div className="grid items-center gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="mb-5 inline-flex rounded-full border border-sky-400/20 bg-sky-500/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-sky-200 backdrop-blur">
              Corporate Intelligence • Acquisition Marketplace • Premium Services
            </div>

            <h1 className="text-5xl font-semibold tracking-tight text-white drop-shadow-lg md:text-6xl lg:text-7xl">
              The premium portal for sourcing and ranking undervalued corporate entities.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              BizRanker transforms public business registry data into a scored
              acquisition marketplace by sourcing, enriching, ranking, and
              packaging aged corporate opportunities for sophisticated buyers,
              advisors, and investors.
            </p>

            <div className="mt-8 rounded-[2rem] border border-white/10 bg-black/20 p-4 backdrop-blur-md max-w-2xl">
              <img
                src="/assets/images/cityscape.png"
                alt="BizRanker cityscape"
                className="w-full max-h-[210px] object-contain rounded-2xl"
              />
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-black/25 p-5 backdrop-blur-md">
                <div className="text-3xl font-semibold text-white">9</div>
                <div className="mt-1 text-sm text-slate-300">
                  No-income-tax states in rollout
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-black/25 p-5 backdrop-blur-md">
                <div className="text-3xl font-semibold text-white">4x</div>
                <div className="mt-1 text-sm text-slate-300">
                  Monetization lanes beyond entity sale
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-black/25 p-5 backdrop-blur-md">
                <div className="text-3xl font-semibold text-white">24/7</div>
                <div className="mt-1 text-sm text-slate-300">
                  Automated discovery and scoring flow
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            <div className="rounded-[2rem] border border-white/10 bg-black/35 p-8 text-white shadow-2xl backdrop-blur-xl">
              <div className="mb-6">
                <div className="mb-4 overflow-hidden">
                  <BizRankerWordmark size="md" />
                </div>
                <h2 className="text-2xl font-semibold">Private Access Portal</h2>
                <p className="mt-2 text-sm text-slate-300">
                  Investor-grade preview of the BizRanker experience
                </p>
              </div>

              <form onSubmit={submit} className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm text-slate-200">
                    Username
                  </label>
                  <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="h-12 w-full rounded-xl border border-white/15 bg-white/10 px-4 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    placeholder="investor"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-200">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-12 w-full rounded-xl border border-white/15 bg-white/10 px-4 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    placeholder="demo123"
                  />
                </div>

                {loginError && (
                  <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                    {loginError}
                  </div>
                )}

                <button
                  type="submit"
                  className="h-12 w-full rounded-xl bg-indigo-600 text-white transition hover:bg-indigo-500"
                >
                  Access Dashboard
                </button>
              </form>

              <div className="mt-4 grid grid-cols-2 gap-3 pt-2 text-xs text-slate-200">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                  <div className="mb-1 flex items-center gap-2 font-medium text-white">
                    <Lock className="h-4 w-4 text-indigo-300" />
                    Private Deal Flow
                  </div>
                  Entity ranking, enrichment, and acquisition readiness.
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                  <div className="mb-1 flex items-center gap-2 font-medium text-white">
                    <Shield className="h-4 w-4 text-indigo-300" />
                    Trust Layer
                  </div>
                  Premium services, investor pathways, and protection strategies.
                </div>
              </div>

              <div className="pt-4 text-center text-[11px] uppercase tracking-[0.24em] text-slate-400">
                Powered by US Reliance
              </div>

              <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-3 text-xs text-slate-300">
                Demo accounts: <span className="text-white">investor / demo123</span> and{" "}
                <span className="text-white">brian / admin123</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.22em] text-slate-300">
          <span>Public Registry Data</span>
          <span>•</span>
          <span>Credit Signal Enrichment</span>
          <span>•</span>
          <span>Tiered Marketplace</span>
          <span>•</span>
          <span>Investor-Ready Story</span>
        </div>
      </div>
    </div>
  );
}

function Dashboard({ user, onLogout }) {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(entities[0].id);
  const [stateFilter, setStateFilter] = useState("All");

  const selected = entities.find((e) => e.id === selectedId);

  const filtered = useMemo(() => {
    return entities.filter((e) => {
      const matchQuery =
        query.length === 0 ||
        e.name.toLowerCase().includes(query.toLowerCase()) ||
        e.industry.toLowerCase().includes(query.toLowerCase());

      const matchState = stateFilter === "All" || e.state === stateFilter;
      return matchQuery && matchState;
    });
  }, [query, stateFilter]);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-10">
          <div className="flex items-center gap-3 overflow-hidden">
            <BizRankerWordmark size="xs" />
            <div>
              <div className="text-xs uppercase tracking-[0.28em] text-slate-500">
                Acquisition Intelligence
              </div>
            </div>
          </div>

          <div className="hidden max-w-md flex-1 items-center gap-3 md:flex">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search entity, industry, or state signal"
                className="h-11 w-full rounded-xl border border-slate-800 bg-slate-900 pl-9 pr-4 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="flex items-center rounded-xl border border-slate-800 bg-slate-900 px-4 py-2 text-slate-200 hover:bg-slate-800 hover:text-white">
              <Bell className="mr-2 h-4 w-4" />
              Alerts
            </button>
            <div className="rounded-2xl border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-200">
              {user.displayName}
            </div>
            <button
              onClick={onLogout}
              className="flex items-center rounded-xl border border-slate-800 bg-slate-900 px-4 py-2 text-slate-200 hover:bg-slate-800 hover:text-white"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="text-4xl font-semibold tracking-tight">
              Corporate Opportunity Dashboard
            </h2>
            <p className="mt-2 max-w-3xl text-slate-400">
              Ranked acquisition opportunities sourced from public registry
              data and enhanced through score-driven intelligence signals,
              pricing bands, and services alignment.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button className="flex items-center rounded-xl border border-slate-800 bg-slate-900 px-4 py-2 text-slate-200 hover:bg-slate-800 hover:text-white">
              <Filter className="mr-2 h-4 w-4" />
              Filter Set
            </button>
            <button className="rounded-xl bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500">
              Export Deal Flow
            </button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="Entities Indexed"
            value="18,420"
            sub="Across current rollout states"
            icon={Database}
          />
          <StatCard
            title="Tier I Opportunities"
            value="1,142"
            sub="Premium acquisition-ready profiles"
            icon={BadgeDollarSign}
          />
          <StatCard
            title="New This Week"
            value="286"
            sub="Recently surfaced candidates"
            icon={Clock3}
          />
          <StatCard
            title="Flagged for Review"
            value="73"
            sub="High potential / manual verification"
            icon={Flag}
          />
        </div>

        <div className="mt-8 grid gap-6 xl:grid-cols-[1.14fr_1.36fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 text-white shadow-xl">
            <div className="mb-6 flex flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold">
                  Ranked Opportunity Listings
                </h3>
                <p className="mt-1 text-slate-400">
                  Sort by tier, age, price, and acquisition readiness.
                </p>
              </div>

              <div className="flex items-center gap-2">
                {["All", "Florida", "Texas", "Nevada", "Wyoming"].map((s) => (
                  <button
                    key={s}
                    onClick={() => setStateFilter(s)}
                    className={`rounded-xl border px-3 py-2 text-sm ${
                      stateFilter === s
                        ? "border-indigo-500/40 bg-indigo-600 text-white hover:bg-indigo-500"
                        : "border-slate-800 bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-4 md:hidden">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search entity or industry"
                className="h-11 w-full rounded-xl border border-slate-800 bg-slate-900 px-4 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse table-auto">
                <thead>
                  <tr className="border-b border-slate-800">
                    <th className="px-3 py-3 text-left text-sm font-medium text-slate-400 min-w-[230px]">
                      Entity
                    </th>
                    <th className="px-3 py-3 text-left text-sm font-medium text-slate-400 w-[100px] whitespace-nowrap">
                      State
                    </th>
                    <th className="px-3 py-3 text-left text-sm font-medium text-slate-400 w-[80px] whitespace-nowrap">
                      Age
                    </th>
                    <th className="px-3 py-3 text-left text-sm font-medium text-slate-400 w-[124px] whitespace-nowrap">
                      Tier
                    </th>
                    <th className="px-3 py-3 text-left text-sm font-medium text-slate-400 w-[78px] whitespace-nowrap">
                      Score
                    </th>
                    <th className="px-3 py-3 text-left text-sm font-medium text-slate-400 w-[106px] whitespace-nowrap">
                      Price
                    </th>
                    <th className="px-3 py-3 text-left text-sm font-medium text-slate-400 w-[98px] whitespace-nowrap">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((e) => (
                    <tr
                      key={e.id}
                      onClick={() => setSelectedId(e.id)}
                      className={`cursor-pointer border-b border-slate-800 ${
                        selectedId === e.id
                          ? "bg-slate-900/80"
                          : "hover:bg-slate-900/50"
                      }`}
                    >
                      <td className="px-3 py-4 min-w-[230px]">
                        <div className="font-medium text-white">{e.name}</div>
                        <div className="text-xs text-slate-500">
                          {e.industry} • {e.status}
                        </div>
                      </td>
                      <td className="px-3 py-4 w-[100px] whitespace-nowrap text-slate-300">
                        {e.state}
                      </td>
                      <td className="px-3 py-4 w-[80px] whitespace-nowrap text-slate-300">
                        {e.age} yrs
                      </td>
                      <td className="px-3 py-4 w-[124px] whitespace-nowrap">
                        <span
                          className={`inline-block min-w-[80px] text-center rounded-full px-3 py-1 text-xs font-medium whitespace-nowrap ${tierClass(
                            e.tier
                          )}`}
                        >
                          {e.tier}
                        </span>
                      </td>
                      <td className="px-3 py-4 w-[78px] whitespace-nowrap text-slate-100">
                        {e.score}
                      </td>
                      <td className="px-3 py-4 w-[106px] whitespace-nowrap text-slate-100">
                        {e.price}
                      </td>
                      <td className="px-3 py-4 w-[98px] whitespace-nowrap">
                        <button className="flex items-center rounded-xl px-3 py-2 text-indigo-300 hover:bg-indigo-500/10 hover:text-indigo-200">
                          View <ChevronRight className="ml-1 h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="min-w-0 rounded-3xl border border-slate-800 bg-slate-950/70 p-6 text-white shadow-xl">
            <h3 className="text-2xl font-semibold">Entity Detail</h3>
            <p className="mt-1 text-slate-400">
              Investor-facing snapshot of value, signals, and next-step services.
            </p>

            {selected && (
              <div className="mt-6 max-h-[720px] overflow-y-auto pr-2">
                <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <h4 className="text-[1.65rem] leading-tight font-semibold break-words">
                        {selected.name}
                      </h4>
                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        {selected.state} • {selected.industry} • {selected.status}
                      </p>
                    </div>
                    <span
                      className={`inline-block shrink-0 min-w-[88px] text-center rounded-full px-3 py-1 text-xs font-medium whitespace-nowrap ${tierClass(
                        selected.tier
                      )}`}
                    >
                      {selected.tier}
                    </span>
                  </div>

                  <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div className="min-w-0 rounded-2xl border border-slate-800 bg-slate-950 p-4">
                      <div className="text-xs uppercase tracking-[0.2em] text-slate-500">
                        Score
                      </div>
                      <div className="mt-2 text-3xl font-semibold">
                        {selected.score}
                      </div>
                    </div>
                    <div className="min-w-0 rounded-2xl border border-slate-800 bg-slate-950 p-4">
                      <div className="text-xs uppercase tracking-[0.2em] text-slate-500">
                        Est. Value
                      </div>
                      <div className="mt-2 text-[1.28rem] leading-tight font-semibold whitespace-nowrap">
                        {selected.estimatedValue}
                      </div>
                    </div>
                    <div className="min-w-0 rounded-2xl border border-slate-800 bg-slate-950 p-4">
                      <div className="text-xs uppercase tracking-[0.2em] text-slate-500">
                        Age
                      </div>
                      <div className="mt-2 text-2xl font-semibold whitespace-nowrap">
                        {selected.age} years
                      </div>
                    </div>
                    <div className="min-w-0 rounded-2xl border border-slate-800 bg-slate-950 p-4">
                      <div className="text-xs uppercase tracking-[0.2em] text-slate-500">
                        Readiness
                      </div>
                      <div
                        className={`mt-2 text-2xl font-semibold ${readinessClass(
                          selected.readiness
                        )}`}
                      >
                        {selected.readiness}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  <h5 className="mb-3 text-sm uppercase tracking-[0.22em] text-slate-500">
                    Scoring Signals
                  </h5>
                  <div className="space-y-3">
                    {signals.map((s) => (
                      <div
                        key={s.label}
                        className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900 p-4"
                      >
                        <div className="text-sm text-slate-300">{s.label}</div>
                        <div className="font-semibold text-white">{s.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="my-6 h-px bg-slate-800" />

                <div>
                  <h5 className="mb-3 text-sm uppercase tracking-[0.22em] text-slate-500">
                    Associated Products & Services
                  </h5>
                  <div className="space-y-3">
                    {services.slice(0, 3).map((service) => {
                      const Icon = service.icon;
                      return (
                        <div
                          key={service.title}
                          className="rounded-2xl border border-slate-800 bg-slate-900 p-4"
                        >
                          <div className="flex items-start gap-3">
                            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-2.5">
                              <Icon className="h-4 w-4 text-indigo-300" />
                            </div>
                            <div>
                              <div className="font-medium text-white">
                                {service.title}
                              </div>
                              <div className="mt-1 text-sm leading-6 text-slate-400">
                                {service.description}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-6 rounded-3xl border border-indigo-500/20 bg-indigo-500/10 p-5">
                  <div className="text-sm uppercase tracking-[0.24em] text-indigo-300">
                    Suggested Next Action
                  </div>
                  <div className="mt-2 text-lg font-semibold">
                    Initiate acquisition workflow + premium advisory packaging
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    This entity is a strong candidate for premium packaging:
                    ranked opportunity listing, advisory outreach, protection
                    strategy, and investor-aligned concierge support.
                  </p>
                  <button className="mt-4 flex items-center rounded-xl bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500">
                    Open Deal Workflow
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-10">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="rounded-2xl border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-200">
              Services
            </span>
            <span className="rounded-2xl border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-200">
              How It Works
            </span>
            <span className="rounded-2xl border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-200">
              Investor Story
            </span>
          </div>

          <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 text-white"
                >
                  <div className="mb-4 inline-flex rounded-2xl border border-slate-800 bg-slate-900 p-3">
                    <Icon className="h-5 w-5 text-indigo-300" />
                  </div>
                  <div className="text-lg font-semibold">{s.title}</div>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {s.description}
                  </p>
                  <button className="mt-4 flex items-center px-0 text-indigo-300 hover:text-indigo-200">
                    Explore module <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              );
            })}
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-4">
            {architecture.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/70 p-6 text-white"
                >
                  <div className="absolute right-4 top-4 text-5xl font-semibold text-slate-800">
                    0{idx + 1}
                  </div>
                  <div className="mb-4 inline-flex rounded-2xl border border-slate-800 bg-slate-900 p-3">
                    <Icon className="h-5 w-5 text-indigo-300" />
                  </div>
                  <div className="text-lg font-semibold">{item.title}</div>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.body}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {investors.map((section) => (
              <div
                key={section.title}
                className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 text-white"
              >
                <h4 className="text-xl font-semibold">{section.title}</h4>
                <div className="mt-4 space-y-3">
                  {section.bullets.map((bullet) => (
                    <div
                      key={bullet}
                      className="flex items-start gap-3 rounded-2xl border border-slate-800 bg-slate-900 p-4"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-300" />
                      <p className="text-sm leading-6 text-slate-300">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Storyboard() {
  const pages = [
    {
      title: "Access Portal",
      icon: Lock,
      text: "Investor-safe login experience with private access branding and premium trust cues.",
    },
    {
      title: "Deal Dashboard",
      icon: FileBarChart,
      text: "High-level intelligence cards, top opportunities, and state-level acquisition flow.",
    },
    {
      title: "Ranked Listings",
      icon: Database,
      text: "Sortable marketplace by score, price, age, and acquisition readiness.",
    },
    {
      title: "Entity Detail",
      icon: Sparkles,
      text: "A due-diligence style profile showing value signals, risks, and associated services.",
    },
    {
      title: "Investor Overview",
      icon: LineChart,
      text: "Product story, revenue model, market framing, and platform defensibility for partners.",
    },
    {
      title: "Services Layer",
      icon: Users,
      text: "Asset protection, advisory, concierge acquisition, and premium member pathways.",
    },
  ];

  return (
    <div className="bg-slate-950 px-6 pb-16 text-white lg:px-10">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-slate-800 bg-slate-950/70 p-8 shadow-xl">
        <div className="mb-8 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="text-sm uppercase tracking-[0.26em] text-slate-500">
              Storyboard View
            </div>
            <h3 className="mt-2 text-3xl font-semibold tracking-tight">
              What the product becomes when fully built out
            </h3>
          </div>
          <span className="w-fit rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-sm text-slate-200">
            Pitch-ready navigation model
          </span>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {pages.map((page) => {
            const Icon = page.icon;
            return (
              <div
                key={page.title}
                className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 text-white"
              >
                <div className="mb-4 inline-flex rounded-2xl border border-slate-800 bg-slate-950 p-3">
                  <Icon className="h-5 w-5 text-indigo-300" />
                </div>
                <div className="text-lg font-semibold">{page.title}</div>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {page.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [user, setUser] = useState(null);
  const [loginError, setLoginError] = useState("");

  const handleLogin = (username, password) => {
    const found = mockUsers.find(
      (u) => u.username === username && u.password === password
    );

    if (found) {
      setUser(found);
      setLoginError("");
      return;
    }

    setLoginError("Invalid username or password. Try investor/demo123 or brian/admin123.");
  };

  const handleLogout = () => {
    setUser(null);
    setLoginError("");
  };

  return user ? (
    <div>
      <Dashboard user={user} onLogout={handleLogout} />
      <Storyboard />
    </div>
  ) : (
    <Hero onLogin={handleLogin} loginError={loginError} />
  );
}
