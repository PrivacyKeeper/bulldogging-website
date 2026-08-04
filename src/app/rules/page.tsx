import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title:
    "Steer Wrestling Rules Explained - Legal Fall, Barrier & Hazing | Bulldogging.pro",
  description:
    "A complete plain-language steer wrestling rules reference: what makes a legal fall, when the steer must be let up, the barrier penalty, loose-steer recovery, hazer interference, the time limit, and the unnecessary-roughness rules. Current as of August 2026.",
  alternates: { canonical: "https://www.bulldogging.pro/rules" },
};

/**
 * Two rules genuinely vary between sanctioning bodies here — loose-steer
 * recovery and hazer interference — and both decide runs. Anything that
 * differs carries an association tag rather than being asserted as universal.
 */
function Assoc({ children }: { children: React.ReactNode }) {
  return <span className="assoc-tag">{children}</span>;
}

export default function RulesPage() {
  return (
    <div className="arena-page arena-bg-2 min-h-screen">
      <header className="flex items-center justify-between border-b border-ink-border bg-[#0e1319]/90 px-8 py-6 backdrop-blur-sm">
        <Link
          href="/"
          className="text-xl font-bold text-brand transition hover:text-brand-deep"
        >
          &larr; Bulldogging.Pro
        </Link>
        <nav className="flex gap-6 text-sm font-semibold">
          <Link href="/rules" className="text-brand">
            Rules
          </Link>
          <Link href="/blog" className="text-muted transition hover:text-brand">
            Blog
          </Link>
        </nav>
      </header>

      <main className="arena-panel mx-auto my-8 max-w-3xl px-6 py-8">
        <article className="prose-arena">
          <h1 className="text-3xl font-extrabold text-brand">
            Steer Wrestling Rules
          </h1>
          <p className="mt-3 text-muted">
            A plain-language reference to the rules that decide runs. Current as
            of 3 August 2026.
          </p>

          <div className="mt-6 rounded-xl border border-ink-border bg-ink-raised/70 p-5">
            <p className="text-sm text-[#d3dbe6]">
              <strong className="text-brand">Read this first.</strong> Steer
              wrestling has the simplest rule engine of any timed event — one
              additive penalty and a binary fall judgment. Two things do vary by
              association, and both decide runs:{" "}
              <strong className="text-brand">loose-steer recovery</strong> and{" "}
              <strong className="text-brand">hazer interference</strong>. Both
              are tagged below.
            </p>
            <p className="mt-3 text-sm text-[#d3dbe6]">
              Ground rules for a specific rodeo override association rules for
              that rodeo. Junior and youth classes run lighter cattle, which is
              a class setting rather than an exception.
            </p>
          </div>

          <h2>The run</h2>
          <p>
            The steer wrestler starts on horseback in the box behind a barrier.
            The steer gets a head start determined by the arena.
          </p>
          <p>
            A <strong>hazer</strong>, mounted, rides the right side of the steer
            to keep it running straight. Then, in order:
          </p>
          <ol>
            <li>
              The wrestler slides down the right side of his horse
            </li>
            <li>
              Hooks his right arm around the steer&apos;s right horn
            </li>
            <li>Grasps the left horn with his left hand</li>
            <li>Uses leverage to bring the steer down</li>
          </ol>
          <p>
            The time limit is typically <strong>30 seconds</strong> to complete
            the run, and it is configurable by association.
          </p>

          <h2>What makes a fall legal</h2>
          <p>
            The steer must be <strong>on its side with all four feet and its
            head pointing in the same direction</strong>.
          </p>
          <p>
            A steer thrown with the head turned back is <em>not</em> down
            legally. It must be let up and turned — which is where a fast run
            becomes a slow one, and where a lot of people find out the flag did
            not come.
          </p>

          <h3>The steer must be up first</h3>
          <p>
            The steer must be on its feet and under control before it is thrown.
            If it goes down before that, the wrestler has to{" "}
            <strong>let it up</strong> and start the throw again.
          </p>
          <p>
            This is the equivalent of the tie-down rule about a calf that is
            already down: a steer that trips looks like a gift and is actually a
            delay.
          </p>

          <h3>If the steer gets loose</h3>
          <p>
            The wrestler is generally allowed a limited recovery, but the
            allowance is <strong>association-dependent</strong> —{" "}
            <Assoc>Varies</Assoc> commonly one step, or one hand back on.
          </p>
          <p>
            This is worth checking before you enter somewhere new, because it is
            precisely the situation where you have a split second to decide
            whether to keep going or let it go.
          </p>

          <h2>The barrier</h2>
          <p>
            Breaking the barrier carries a <strong>10-second penalty</strong>{" "}
            added to the raw time. The score line is set by arena conditions and
            steer speed, and barrier malfunctions are handled per rulebook with
            the flagman option.
          </p>
          <p>
            Apart from the barrier, steer wrestling has essentially{" "}
            <strong>no time-adding penalties</strong>. Everything else is a no
            time or a fine. That makes it the simplest engine in rodeo after
            breakaway — and it means every tenth you are losing is inside the
            run itself.
          </p>

          <h2>The hazer</h2>
          <p>
            You <strong>cannot compete without a hazer</strong>. That is not a
            convention, it is a hard requirement — an entry without one is
            blocked.
          </p>
          <p>
            The hazer is a full partner in the outcome and, by convention, takes
            about a quarter of the payoff. That percentage is negotiated rather
            than fixed by any rulebook.
          </p>
          <p>
            <strong>Hazer interference</strong> is a no time, and what counts as
            interference is <Assoc>Varies</Assoc> association-dependent. This is
            the other rule worth confirming before entering somewhere unfamiliar.
          </p>

          <h2>The steers</h2>
          <ul>
            <li>
              Typically <strong>400 to 600 pounds</strong> at amateur level, and
              heavier at pro level
            </li>
            <li>
              Extra steers are bulldogged from a horse and thrown down before
              each performance, with a minimum number of pre-run extras kept
              available
            </li>
            <li>
              Steer changes and reruns follow the same pattern as other timed
              events: the field judge decides, and reruns are offered without a
              request
            </li>
          </ul>

          <h2>Unnecessary roughness</h2>
          <p>
            This carries a fine that is <strong>progressively doubled</strong>{" "}
            for repeat offences, and the rulebooks call out one thing
            specifically:
          </p>
          <p>
            <strong>
              Unnecessary twisting of the steer&apos;s neck after the fall is
              complete.
            </strong>
          </p>
          <p>
            The fall is finished the moment the steer is on its side with four
            feet and its head in the same direction. Anything after that is not
            part of your run, and it is the thing most likely to cost you money
            you already won.
          </p>

          <h2>What this means for how you prepare</h2>
          <p>
            Because there is only one additive penalty, the interesting
            information about a run lives in its segments — barrier, leaving the
            box, catching the horn, feet on the ground, stopping the steer,
            starting the throw, and the fall going complete.
          </p>
          <p>
            And because you cannot enter without a hazer and probably cannot
            enter without borrowing a horse, the two things most likely to end
            your weekend are not rules at all. They are logistics — which is why{" "}
            <Link href="/">Bulldogging.pro</Link> is built around them.
          </p>

          <div className="mt-10 rounded-xl border border-ink-border bg-ink-raised/70 p-5">
            <p className="text-sm text-muted">
              <strong className="text-brand">Sources and currency.</strong> PRCA
              values are from the 2026 PRCA Rule Book. Amateur and jackpot
              variations, including loose-steer recovery and hazer interference,
              are as documented in the Bulldogging.pro build map, rules-verified
              24 July 2026. Rodeo rules change annually and mid-season. This
              page is a reference, not a rulebook — the association&apos;s
              current published rulebook and the ground rules of the specific
              rodeo always govern, and the field judge&apos;s decision on a fall
              is final within the grievance process.
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
