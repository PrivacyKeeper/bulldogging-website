import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hazing Explained: The Partner Who Does Not Compete",
  description:
    "What a hazer actually does, why you cannot enter without one, how the quarter share became convention, and what makes the difference between a good hazer and a warm body on a horse.",
  alternates: {
    canonical: "https://www.bulldogging.pro/blog/hazing-explained",
  },
};

export default function Post() {
  return (
    <article className="prose-arena">
      <p className="text-xs tracking-wider text-muted-dim uppercase">
        2026-08-03
      </p>
      <h1 className="mt-2 text-3xl font-extrabold text-brand">
        Hazing Explained: The Partner Who Does Not Compete
      </h1>

      <p>
        If you are new to steer wrestling, the hazer is the part that takes
        longest to appreciate. There is a second man on a horse, he is not being
        timed, he is not being scored, and he is roughly a quarter of whether
        you win anything.
      </p>

      <h2>What he actually does</h2>

      <p>
        The hazer rides the <strong>right side of the steer</strong>, mounted,
        keeping it running straight while you come down the left side of your
        own horse.
      </p>

      <p>
        A steer left to itself does not run in a line. It drifts, it ducks, it
        cuts back toward the fence. Every one of those things moves the horn you
        are reaching for, and you are reaching for it at speed while dismounting
        from a running horse.
      </p>

      <p>
        A good hazer makes the steer boring. That is the whole job description.
      </p>

      <h2>You cannot enter without one</h2>

      <p>
        This is not a convention — it is a hard requirement. No hazer, no run.
        Which means that in this event, <strong>logistics can end your weekend
        before technique gets a chance to</strong>.
      </p>

      <p>
        Drive eight hours, arrive without a hazer, and the entry fee is gone.
        That is the situation the hazer board in our app exists for: who is
        hazing at this rodeo, who still needs one, who has an open slot — and
        crucially, visible <em>before</em> you leave.
      </p>

      <h2>The quarter share</h2>

      <p>
        By convention the hazer takes about <strong>25 percent</strong> of the
        payoff. No rulebook sets that. It is negotiated, and it does move —
        depending on whether he brought the horse, how far he travelled, and
        what you have arranged between you historically.
      </p>

      <p>
        Which is exactly why it should be recorded at the point of assignment
        rather than reconstructed after a cheque arrives. The agreed percentage
        goes on the assignment; when the run posts, the hazer is named and the
        share is calculated from what you actually agreed.
      </p>

      <p>
        Then a shared settlement ledger — both of you seeing the same rows, with
        a settled flag. We do not hold or move the money. We just make sure
        nobody is working from a different version of what happened.
      </p>

      <h2>What makes a good one</h2>

      <p>
        Riders talk about hazers the way ropers talk about partners, and the
        criteria are just as specific:
      </p>

      <ul>
        <li>
          <strong>Keeps the steer straight.</strong> The core skill, and it is
          measurable — percentage of steers kept straight, over enough runs.
        </li>
        <li>
          <strong>Horsepower.</strong> A hazing horse has to be fast enough to
          hold position on a steer that is already running.
        </li>
        <li>
          <strong>Reliability.</strong> Shows up, on time, at the rodeo he said
          he would. A no-show eight hours from home is a lost weekend for
          everyone in the rig.
        </li>
        <li>
          <strong>Judgement.</strong> Knowing when to press and when to back
          off, because hazer interference is a no time.
        </li>
      </ul>

      <p>
        Those are the dimensions our hazer ratings run across, rather than a
        single star count. And hazer stats — runs hazed, average time of runs
        hazed, straight percentage — give a hazer something to point at, which
        nobody currently has.
      </p>

      <h2>Hazer interference</h2>

      <p>
        A hazer who gets in the way rather than helping produces a no time, and
        what exactly counts as interference{" "}
        <strong>varies by association</strong>. It is one of two rules in this
        event that genuinely differ between sanctioning bodies, and it is worth
        checking before you enter somewhere new. See the{" "}
        <Link href="/rules">rules reference</Link>.
      </p>

      <h2>Hazing is also how you get started</h2>

      <p>
        Worth saying for anyone coming into the event: hazing is a real way in.
        You are in the arena, on a good horse, learning to read cattle at speed,
        without having to throw anything.
      </p>

      <p>
        Plenty of steer wrestlers hazed for two seasons before they entered.
        And plenty of good hazers never compete at all — they are simply worth
        having around, and they get paid for it.
      </p>

      <p>
        <Link href="/#waitlist">Join the waitlist &rarr;</Link>
      </p>
    </article>
  );
}
