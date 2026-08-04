import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title:
    "Steer Wrestling Events & Formats - Entries, Hazers & Producer Tools | Bulldogging.pro",
  description:
    "Steer wrestling formats explained: one-go, two-go average, go-round plus short round, jackpot bulldogging and age divisions. Plus hazer registration at entry, steer draws, and the simplest scoring screen in rodeo.",
  alternates: { canonical: "https://www.bulldogging.pro/events" },
};

const formats = [
  { name: "One-go", structure: "Standard at rodeos" },
  { name: "Two-go average", structure: "Larger rodeos and jackpots" },
  { name: "Go-round plus short round", structure: "Finals" },
  {
    name: "Jackpot bulldogging",
    structure: "Standalone events, common in the offseason",
  },
  { name: "Age divisions", structure: "Junior, open, senior" },
];

export default function EventsPage() {
  return (
    <div className="arena-page arena-bg-1 min-h-screen">
      <header className="flex items-center justify-between border-b border-ink-border bg-[#0e1319]/90 px-8 py-6 backdrop-blur-sm">
        <Link
          href="/"
          className="text-xl font-bold text-brand transition hover:text-brand-deep"
        >
          &larr; Bulldogging.Pro
        </Link>
        <nav className="flex gap-6 text-sm font-semibold">
          <Link href="/rules" className="text-muted transition hover:text-brand">
            Rules
          </Link>
          <Link href="/blog" className="text-muted transition hover:text-brand">
            Blog
          </Link>
        </nav>
      </header>

      <main className="arena-panel mx-auto my-8 max-w-4xl px-6 py-8">
        <article className="prose-arena">
          <h1 className="text-3xl font-extrabold text-brand">
            Events &amp; Formats
          </h1>
          <p className="mt-3 text-muted">
            Fewer formats than the roping events, and a different hard problem:
            getting to the rodeo with a hazer and a horse.
          </p>

          <h2>Formats</h2>
          <div className="overflow-x-auto">
            <table className="mt-4 w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-ink-border text-left">
                  <th className="py-2 pr-4 font-bold text-brand">Format</th>
                  <th className="py-2 font-bold text-brand">Structure</th>
                </tr>
              </thead>
              <tbody className="text-[#d3dbe6]">
                {formats.map((f) => (
                  <tr key={f.name} className="border-b border-ink-border/50">
                    <td className="py-2 pr-4 font-semibold whitespace-nowrap">
                      {f.name}
                    </td>
                    <td className="py-2">{f.structure}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>Entering means entering with a hazer</h2>
          <p>
            You cannot compete without one. So the hazer is part of the entry
            flow rather than something the office chases you about on the day:
          </p>
          <ul>
            <li>
              <strong>Hazer board per rodeo</strong> — who is hazing, who still
              needs one, who has an open slot. It expires at the start of the
              performance so it never goes stale.
            </li>
            <li>
              <strong>Standing partnerships</strong> — if you always haze for
              the same three guys, assignments prefill
            </li>
            <li>
              <strong>Agreed share recorded at assignment</strong>, not
              remembered afterwards
            </li>
            <li>
              Requested, confirmed, declined, completed or no-show — all tracked,
              because reliability is worth knowing
            </li>
          </ul>

          <h2>And usually with somebody else&apos;s horse</h2>
          <p>
            One man hauls a horse and four men ride it. The horse board shows
            who has one at a given rodeo, how many slots are open, and where it
            is hauling from.
          </p>
          <p>
            Mount agreements record the share or flat fee before the run, and
            the mount money calculator itemises what is owed per run. Both the
            owner and the rider see the same rows, and either can mark a
            settlement settled.
          </p>
          <p>
            Horse workload — how many runs a horse made across a weekend and
            across how many riders — is tracked too. That has real welfare
            value, and owners care about it.
          </p>

          <h2>The eight-hour problem</h2>
          <p>
            This is the practical reality the app is designed around: a
            bulldogger driving to a rodeo eight hours away needs a hazer and a
            horse when he arrives. Solve that and everything else is a bonus.
          </p>
          <p>
            So hazer and horse availability at your destination are visible{" "}
            <em>before you leave</em>, alongside the route planner and who else
            is going with room in the rig.
          </p>

          <h2>Draws and steers</h2>
          <p>
            Draw position and steer number are pushed to your phone. Steers
            carry a record — speed rating, straight rating, drop flag, fight
            flag, weight, horn spread, times used, and average time when drawn.
          </p>
          <p>
            A steer that does not run straight is a different problem for you
            than for the man behind you, and a hazer who knows what is coming
            can do something about it.
          </p>

          <h2>Results and payouts</h2>
          <p>
            Live results as times are entered, with go-round standings, the
            average and the short round tracked separately. Payouts by place
            with ground money.
          </p>
          <p>
            When a run posts, <strong>the hazer is named on it</strong> and
            their share is calculated. If a payout is later corrected, the hazer
            credit and any mount money owed on that run move with it.
          </p>

          <h2>For producers</h2>
          <p>
            The scoring screen has three inputs — time, barrier, legal fall.
            That is the whole run. One additive penalty and a binary fall
            judgment make this the simplest screen in rodeo, and it works
            offline because arena wifi does not exist.
          </p>
          <ul>
            <li>Hazer registered against each entry and named on the result</li>
            <li>
              Steer draw with speed, straight, drop and fight flags
            </li>
            <li>
              Extra steers tracked, with the pre-run minimum kept visible
            </li>
            <li>Rerun and steer-change handling</li>
            <li>
              Fine logging for unnecessary roughness, progressively doubled per
              the rulebook
            </li>
            <li>Payout by places with ground money and office charge</li>
            <li>Day sheet, draw order, and back numbers</li>
          </ul>

          <div className="mt-10 rounded-xl border border-ink-border bg-ink-raised/70 p-5">
            <p className="text-sm text-muted">
              Producing rodeos and want early access to the console?{" "}
              <Link href="/#waitlist">Join the waitlist</Link> and mention that
              you produce — producer accounts are being onboarded first.
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
