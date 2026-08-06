"use client";

import { useState } from "react";
import CrossQuote from "./components/CrossQuote";
import Footer from "./components/Footer";
import Link from "next/link";

/**
 * Feature groups mirror the screens in the build map's route tree.
 *
 * The map names three things nobody else has systematized: hazer coordination
 * and credit, horse sharing and mount money, and strength/injury management.
 * Social leads because this is an everything-app; the hazer system is second
 * because it is the differentiator — steer wrestling is the only rodeo event
 * where a contestant's run depends on another contestant who is not competing.
 *
 * Audience is amateur, jackpot and college steer wrestlers.
 */
const features = [
  {
    id: "social",
    icon: "👥",
    title: "Social & Community",
    desc: "The Whole Bulldogging World, In One Feed",
    detail: [
      "A real feed — post video of your runs, not just times",
      "Stories that disappear in 24 hours",
      "Like, comment, bookmark, repost, and share anywhere",
      "Follow the steer wrestlers you look up to and build your own following",
      "Group chats for your travel rig, your school team, or your practice group",
      "Direct messaging with read receipts",
      "Find guys near you or entered at the same rodeo",
      "Regional groups — your local rodeo scene, organized",
      "Celebrate first qualified runs, first checks, and first buckles",
      "Badges for milestones, streaks, and consistency",
      "Block, report, and mute on every account from day one",
    ],
  },
  {
    id: "hazers",
    icon: "🤝",
    title: "Hazer Coordination & Credit",
    desc: "The Only Event Where You Cannot Compete Alone",
    detail: [
      "Hazer board per rodeo: who is hazing, who needs one, who has a slot",
      "Standing partnerships — if you always haze for the same guys, it prefills",
      "Search by region, availability, and travel radius",
      "The hazer is named on the result and their share is calculated automatically",
      "Agreed percentage stored per assignment, not assumed",
      "Settlement ledger shared between both of you, with a settled flag",
      "Hazer stats: runs hazed, average time, percentage of steers kept straight",
      "Reliability rating, because a no-show eight hours from home is a lost weekend",
      "Board expires at the start of the performance, so it stays current",
      "This is the feature that makes the payoff argument disappear",
    ],
  },
  {
    id: "horses",
    icon: "🐴",
    title: "Horse Sharing & Mount Money",
    desc: "One Man Hauls. Four Men Ride. Everybody Owes.",
    detail: [
      "Horse board per rodeo: who has a horse and how many slots are open",
      "Mount agreements with the share or flat fee agreed up front",
      "Mount money calculator — winnings times share, itemized per run",
      "Settlement ledger shared between owner and rider, same rows for both",
      "Horse workload: how many runs across a weekend, across how many riders",
      "Real welfare value, and owners genuinely care about it",
      "Hauling-from information so you know what is arriving",
      "Horse profiles with run history and who has been on them",
      "Because a good bulldogging horse is expensive and hard to find",
    ],
  },
  {
    id: "segments",
    icon: "⏱️",
    title: "Run Segments",
    desc: "A 4.2 And A 4.2 Are Not The Same Run",
    detail: [
      "Barrier margin in milliseconds, tracked across a season",
      "Leave the box to catching the horn",
      "Catch to feet on the ground",
      "Feet down to the steer stopped",
      "Stop to the throw started",
      "Throw to the fall complete",
      "See which segment is actually costing you, instead of guessing",
      "Compare any run against your own best, segment by segment",
      "Attach video to any run",
    ],
  },
  {
    id: "steers",
    icon: "🐂",
    title: "Steer History",
    desc: "Know What You Drew Before You Nod",
    detail: [
      "Steer records with speed rating and straight rating",
      "Drop flag and fight flag, because both change the run completely",
      "Weight, breed, and horn spread",
      "Average time when drawn, across the season",
      "Times used, so you know whether it is fresh",
      "Producers can sort and pull with the reason logged",
      "A draw sheet that means something instead of just a number",
    ],
  },
  {
    id: "strength",
    icon: "💪",
    title: "Strength & Injury",
    desc: "Worst Injury Profile Of The Timed Events",
    detail: [
      "Strength logs by lift, sets, reps, load, and rate of perceived exertion",
      "Injury records by body region — shoulder, elbow, knee, neck",
      "Severity, treatment, provider, and the date you were actually cleared",
      "Private by default, never shown to producers, horse owners, or anyone else",
      "Return-to-competition tracking after an injury",
      "Workload across a season, so you can see when you are cooked",
      "Sports medicine and chiropractic directory",
      "Throwing a 500-pound animal off a running horse has a cost. Track it.",
    ],
  },
  {
    id: "competition",
    icon: "🏆",
    title: "Competition & Events",
    desc: "Every Rodeo And Jackpot Within Driving Distance",
    detail: [
      "Browse and enter by association, age division, date, and distance",
      "One-go, two-go average, go-round plus short round",
      "Jackpot bulldogging — standalone events, common in the offseason",
      "Junior, open, and senior age divisions",
      "Draw position and steer number pushed to your phone",
      "Live results as times are entered",
      "Payouts by place with ground money",
      "Hazer registered against your entry, so the office is not chasing it",
    ],
  },
  {
    id: "rules",
    icon: "📖",
    title: "Rules & Officiating",
    desc: "Know The Call Before It Gets Made",
    detail: [
      "What makes a legal fall: four feet and the head the same direction",
      "The steer must be up and under control before it is thrown",
      "Loose-steer recovery — one of the rules that genuinely varies",
      "Hazer interference, which is also association-dependent",
      "Barrier penalty and score line",
      "Unnecessary roughness, including neck twisting after the fall",
      "Rules versioned by date — a 2026 run is scored under 2026 rules",
      "Producer ground rules stated up front, before you enter",
    ],
  },
  {
    id: "marketplace",
    icon: "🛒",
    title: "Marketplace",
    desc: "Buy & Sell With Confidence",
    detail: [
      "Bulldogging horses, hazing horses, prospects, and leases",
      "Mounts offered by the weekend rather than by the sale",
      "Saddles, breast collars, bits, reins, and cinches",
      "Gloves, boots, hats, vests, braces, and tape",
      "Practice equipment: dummies, sleds, and chutes",
      "Bulldogging steers, Corriente, and practice cattle leases",
      "Trailers, rigs, and living quarters",
      "Schools, clinics, hauling, sports medicine, and chiropractic",
      "Seller ratings, saved listings, and direct messaging",
    ],
  },
  {
    id: "travel",
    icon: "🚗",
    title: "Travel & Safety",
    desc: "Eight Hours Out, You Need A Hazer And A Horse",
    detail: [
      "Route planner built around the rodeos you actually entered",
      "See who else is going, and who has room in the rig",
      "Split the drive and the fuel",
      "Hazer and horse availability at your destination, before you leave",
      "Real-time weather and severe weather alerts",
      "Emergency alert system with one-tap contacts",
      "Arena finder with reviews from other steer wrestlers",
      "Entry deadlines and draw times surfaced before you miss them",
    ],
  },
  {
    id: "training",
    icon: "🎯",
    title: "Training & Video",
    desc: "Coaching For People Who Cannot Afford A Coach (Premium)",
    detail: [
      "Film a run on your phone and get it broken down — no special equipment",
      "Barrier margin across a whole season",
      "The catch: where your hand meets the horn, and how square you are",
      "Feet-on-ground timing, where a lot of runs are quietly lost",
      "The throw: leverage, angle, and how long the steer takes to go flat",
      "Side by side against your own best run",
      "Progress measured against your own baseline, not a professional's",
      "Drill library and dummy work",
      "Book schools and clinics in the app",
    ],
  },
  {
    id: "youth",
    icon: "🎓",
    title: "Youth, School & College",
    desc: "Junior Rodeo Through The CNFR",
    detail: [
      "NHSRA and NIRA steer wrestling standings and qualification tracking",
      "Junior and youth divisions with lighter cattle",
      "Coach dashboards with roster, entries, travel, and eligibility",
      "Hazer assignment inside a team roster, coach-supervised",
      "School event calendars and region standings",
      "Scholarship board with deadlines and requirements",
      "Recruiting profile, coaches-only by default for minors",
      "Progression pathway: first qualified run, first check, first buckle",
      "A minor's recruiting profile never goes public automatically at 18",
    ],
  },
  {
    id: "producers",
    icon: "💼",
    title: "Producers",
    desc: "The Simplest Scoring Screen In Rodeo (Premium)",
    detail: [
      "Time, barrier, legal fall — three inputs and the run is recorded",
      "One additive penalty and a binary fall judgment, so the screen stays fast",
      "Offline first, because arena wifi does not exist",
      "Hazer registered against each entry, and named on the result",
      "Steer draw with speed, straight, drop, and fight flags",
      "Extra steers tracked, with the pre-run minimum kept visible",
      "Rerun and steer-change handling",
      "Fine logging for unnecessary roughness, progressively doubled",
      "Payout by places with ground money, day sheet, and back numbers",
    ],
  },
];

const shares = [
  { value: "The run", label: "Steer wrestler" },
  { value: "~25%", label: "Hazer, by convention" },
  { value: "~25%", label: "Horse owner, if mounted" },
];

const pricing = [
  {
    name: "Free",
    price: "$0",
    period: "/forever",
    perks: [
      "Rider profile and community feed",
      "Event discovery and entries",
      "Hazer board and horse board",
      "Hazer credit and mount money ledger",
      "Run log and steer history",
      "Strength and injury logs",
      "Marketplace access",
      "Rules reference",
    ],
  },
  {
    name: "Premium",
    price: "$4.99",
    period: "/mo",
    featured: true,
    perks: [
      "Everything in Free",
      "Full run segment breakdown",
      "AI video analysis: catch, feet down, throw",
      "Side-by-side comparison against your best run",
      "Hazer and horse analytics across a season",
      "Horse workload reporting for owners",
      "Drill library and school bookings",
      "Priority support",
    ],
  },
  {
    name: "Annual",
    price: "$49.99",
    period: "/yr",
    best: true,
    perks: [
      "Everything in Premium",
      "Save $10 versus monthly",
      "Early access to new features",
      "Exclusive community badge",
    ],
  },
];

export default function Home() {
  const [openModal, setOpenModal] = useState<number | null>(null);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Failed to submit");
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="arena-page arena-bg-1 min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b border-ink-border bg-[#0e1319]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <Link href="/" className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="Bulldogging.pro" className="h-14 w-auto" />
            <span className="hidden text-lg font-bold tracking-wide text-brand sm:block">
              BULLDOGGING<span className="text-brand-2">.PRO</span>
            </span>
          </Link>
          <nav className="hidden gap-8 text-sm font-semibold tracking-wider text-muted uppercase md:flex">
            <a href="#features" className="transition hover:text-brand">
              Features
            </a>
            <Link href="/rules" className="transition hover:text-brand">
              Rules
            </Link>
            <a href="#pricing" className="transition hover:text-brand">
              Pricing
            </a>
            <Link href="/blog" className="transition hover:text-brand">
              Blog
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center px-6 py-20 text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo.png"
          alt="Bulldogging.pro"
          className="w-[300px] drop-shadow-2xl md:w-[400px]"
        />
        <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-cream md:text-5xl">
          Bulldogging<span className="text-brand-2">.pro</span>
        </h1>
        <p className="mt-4 text-xl font-bold tracking-wide text-brand italic md:text-2xl">
          &ldquo;You cannot do this alone. So stop trying to.&rdquo;
        </p>
        <p className="mt-6 max-w-2xl text-lg text-muted md:text-xl">
          Steer wrestling is the only rodeo event where your run depends on
          another contestant who is not competing. Your hazer is a full partner
          in the outcome. You are probably on somebody else&apos;s horse. Both
          of them are owed money when you win.
        </p>
        <p className="mt-4 max-w-2xl text-lg text-muted md:text-xl">
          All of that currently runs on group texts, memory, and arguments in a
          parking lot.{" "}
          <span className="text-cream">
            This is the app that puts it on a ledger you both trust — and
            everything else the bulldogging community needs alongside it.
          </span>
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <div className="relative">
            <div className="flex cursor-default items-center gap-3 rounded-xl border border-ink-border bg-ink-raised px-6 py-3 opacity-70">
              <svg viewBox="0 0 384 512" className="h-8 w-8 fill-cream">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
              </svg>
              <div className="text-left">
                <p className="text-[10px] leading-tight text-muted uppercase">
                  Download on the
                </p>
                <p className="text-lg leading-tight font-semibold text-cream">
                  App Store
                </p>
              </div>
            </div>
            <span className="absolute -top-3 -right-3 rounded-full bg-brand-deep px-2 py-1 text-[10px] font-bold text-white uppercase shadow-lg">
              Coming Soon
            </span>
          </div>
          <div className="relative">
            <div className="flex cursor-default items-center gap-3 rounded-xl border border-ink-border bg-ink-raised px-6 py-3 opacity-70">
              <svg viewBox="0 0 512 512" className="h-8 w-8 fill-cream">
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
              </svg>
              <div className="text-left">
                <p className="text-[10px] leading-tight text-muted uppercase">
                  Get it on
                </p>
                <p className="text-lg leading-tight font-semibold text-cream">
                  Google Play
                </p>
              </div>
            </div>
            <span className="absolute -top-3 -right-3 rounded-full bg-brand-deep px-2 py-1 text-[10px] font-bold text-white uppercase shadow-lg">
              Coming Soon
            </span>
          </div>
        </div>

        <a
          href="#waitlist"
          className="mt-8 rounded-lg bg-brand px-8 py-4 text-lg font-bold tracking-wider text-[#0e1319] uppercase shadow-lg shadow-brand/20 transition hover:bg-brand-deep"
        >
          Join the Waitlist
        </a>
      </section>

      {/* The three-way split */}
      <section className="mx-auto max-w-4xl px-6 pb-10">
        <p className="mb-4 text-center text-sm font-bold tracking-wider text-brand uppercase">
          One check, three people
        </p>
        <div className="share-grid">
          {shares.map((s) => (
            <div key={s.label} className="share-cell">
              <p className="share-value">{s.value}</p>
              <p className="mt-2 text-xs leading-tight text-muted">{s.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-sm text-muted">
          Percentages are conventions, not rules — they get negotiated. Which is
          exactly why they should be written down before the run, not after the
          cheque.
        </p>
      </section>

      {/* Who it is for */}
      <section className="mx-auto max-w-6xl px-6 pb-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { label: "Steer Wrestlers", note: "Amateur, jackpot, college" },
            { label: "Hazers", note: "Get named and get paid" },
            { label: "Horse Owners", note: "Mounts and workload" },
            { label: "Producers", note: "Entries, steers, payouts" },
          ].map((who) => (
            <div
              key={who.label}
              className="rounded-xl border border-ink-border bg-ink-raised/70 p-4 text-center"
            >
              <p className="text-sm font-bold tracking-wider text-brand uppercase">
                {who.label}
              </p>
              <p className="mt-1 text-xs text-muted">{who.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold tracking-wider text-brand uppercase">
          What&apos;s Inside
        </h2>
        <p className="mx-auto mt-4 mb-14 max-w-2xl text-center text-muted">
          Thirteen feature groups — the social side, the competing side, and the
          logistics that decide whether you even get a run. Built for weekend
          and college guys, not just the ones on TV. Tap any card for the full
          list.
        </p>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <button
              key={f.id}
              onClick={() => setOpenModal(i)}
              className="group rounded-xl border border-ink-border bg-ink-raised p-6 text-left transition-all hover:border-brand hover:shadow-lg hover:shadow-brand/10"
            >
              <div className="mb-4 text-4xl">{f.icon}</div>
              <h3 className="text-xl font-semibold text-brand group-hover:underline">
                {f.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{f.desc}</p>
              <p className="mt-3 text-xs font-semibold text-brand-2">
                See all {f.detail.length} features &rarr;
              </p>
            </button>
          ))}
        </div>
      </section>

      {/* Feature modal */}
      {openModal !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setOpenModal(null)}
        >
          <div
            className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-ink-border bg-ink-panel p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 text-5xl">{features[openModal].icon}</div>
            <h3 className="text-2xl font-bold text-brand">
              {features[openModal].title}
            </h3>
            <p className="mt-1 text-sm text-muted">{features[openModal].desc}</p>
            <ul className="mt-4 space-y-2">
              {features[openModal].detail.map((item, j) => (
                <li key={j} className="flex items-start gap-2 text-[#d3dbe6]">
                  <span className="mt-0.5 text-brand-2">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
            <button
              onClick={() => setOpenModal(null)}
              className="mt-6 rounded-lg bg-brand px-6 py-2 font-semibold text-[#0e1319] transition hover:bg-brand-deep"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Why it is different */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="mb-14 text-center text-3xl font-bold tracking-wider text-brand uppercase">
          Why Steer Wrestling Needed Its Own App
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              t: "You need a second contestant to compete at all",
              d: "No other event works this way. The hazer is a full partner in the outcome and takes a share of the payoff, and eight hours from home you need one who is actually going to show up. That is a coordination problem, and it has never had a tool.",
            },
            {
              t: "You are probably on somebody else's horse",
              d: "A good bulldogging horse is expensive and hard to find, so one gets hauled and four or five men ride it. Everybody owes mount money. Right now that is tracked by memory, which is why it is argued about.",
            },
            {
              t: "The worst injury profile of the timed events",
              d: "Shoulders, elbows, knees, neck. Strength work and injury records are not a wellness tab bolted on the side — they are a third of why this app exists, and they stay private to you.",
            },
          ].map((c) => (
            <div
              key={c.t}
              className="rounded-xl border border-ink-border bg-ink-raised p-6"
            >
              <h3 className="text-lg font-semibold text-brand-2">{c.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="mb-14 text-center text-3xl font-bold tracking-wider text-brand uppercase">
          Pricing
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {pricing.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl border p-8 ${
                plan.featured
                  ? "border-brand bg-ink-panel shadow-lg shadow-brand/15"
                  : "border-ink-border bg-ink-raised"
              }`}
            >
              {plan.featured && (
                <p className="mb-2 text-xs font-bold tracking-wider text-brand-2 uppercase">
                  Most Popular
                </p>
              )}
              {plan.best && (
                <p className="mb-2 text-xs font-bold tracking-wider text-brand uppercase">
                  Best Value
                </p>
              )}
              <h3 className="text-xl font-bold text-brand">{plan.name}</h3>
              <div className="mt-4">
                <span className="text-4xl font-extrabold text-cream">
                  {plan.price}
                </span>
                <span className="text-muted">{plan.period}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {plan.perks.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-2 text-sm text-[#d3dbe6]"
                  >
                    <span className="mt-0.5 text-brand-2">&#10003;</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="mx-auto max-w-xl px-6 py-20 text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-wider text-brand uppercase">
          Get Early Access
        </h2>
        <p className="mb-8 text-muted">
          Drop your email and be the first to know when Bulldogging.pro
          launches.
        </p>
        {status === "success" ? (
          <p className="text-lg font-semibold text-brand">
            &#127881; You&apos;re on the list! Check your inbox.
          </p>
        ) : (
          <form
            onSubmit={handleWaitlist}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="flex-1 rounded-lg border border-ink-border bg-ink-raised px-4 py-3 text-cream placeholder-muted-dim focus:border-brand focus:outline-none"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="rounded-lg bg-brand px-6 py-3 font-bold tracking-wider text-[#0e1319] uppercase shadow-lg shadow-brand/20 transition hover:bg-brand-deep disabled:opacity-50"
            >
              {status === "loading" ? "Submitting..." : "Notify Me"}
            </button>
          </form>
        )}
        {status === "error" && (
          <p className="mt-4 text-sm text-red-400">
            Something went wrong. Try again.
          </p>
        )}
      </section>

      <Footer />
      <CrossQuote />
    </div>
  );
}
