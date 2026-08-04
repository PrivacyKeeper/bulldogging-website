import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Makes a Legal Fall",
  description:
    "Four feet and the head the same direction. Why a steer thrown with the head turned back has to be let up and turned, and why a steer that trips is a delay rather than a gift.",
  alternates: {
    canonical: "https://www.bulldogging.pro/blog/what-makes-a-legal-fall",
  },
};

export default function Post() {
  return (
    <article className="prose-arena">
      <p className="text-xs tracking-wider text-muted-dim uppercase">
        2026-08-03
      </p>
      <h1 className="mt-2 text-3xl font-extrabold text-brand">
        What Makes a Legal Fall
      </h1>

      <p>
        Steer wrestling has almost no penalty table. One additive penalty for
        the barrier, and then a single binary judgment: was the steer legally
        down or not.
      </p>

      <p>Getting that judgment wrong is what turns a fast run into nothing.</p>

      <h2>The requirement</h2>

      <p>
        The steer must be <strong>on its side, with all four feet and its head
        pointing in the same direction</strong>.
      </p>

      <p>
        All three parts matter. On its side — not on its back, not propped.
        Four feet — not three with one tucked. And the head in the same
        direction as the feet, which is the one that catches people.
      </p>

      <h2>The head turned back</h2>

      <p>
        This is the most common way a fall fails. The steer goes over, it is
        flat, everything looks right — and its head is turned back over its own
        shoulder.
      </p>

      <p>
        That is <strong>not down legally</strong>. The steer has to be let up
        and turned, and you throw it again.
      </p>

      <p>
        Which means the flag you are waiting for does not come, and the clock
        that you thought had stopped is still running. It is the single worst
        feeling in the event and it is entirely avoidable with the throw
        mechanics — the head follows the leverage, and if the leverage is wrong
        the head goes wrong.
      </p>

      <h2>The steer must be up first</h2>

      <p>
        Before you throw it, the steer must be <strong>on its feet and under
        control</strong>. If it goes down before that — trips, stumbles, gets
        pulled off balance — you have to <strong>let it up</strong> and start
        the throw again.
      </p>

      <p>
        A steer that goes down early looks like a shortcut and is the opposite.
        It is exactly the same situation as a tie-down calf that is already down
        when the roper reaches it: you have to stand it back up before you can
        do anything that counts.
      </p>

      <h2>If it gets loose</h2>

      <p>
        You are generally allowed a limited recovery, and the exact allowance{" "}
        <strong>varies by association</strong> — commonly one step, or one hand
        back on.
      </p>

      <p>
        This is worth knowing cold before you enter somewhere new, because it is
        the situation where you have a fraction of a second to decide whether to
        chase it or let it go. If you do not know the allowance, you will make
        the wrong call, and it will feel like bad luck rather than a rules gap.
      </p>

      <h2>When the run is over — and what comes after it</h2>

      <p>
        The fall is complete the moment the steer is on its side with four feet
        and its head in the same direction. Your hand must be on the steer when
        it is flagged.
      </p>

      <p>
        Everything after that point is <strong>not part of your run</strong>,
        and it is where fines live. Rulebooks specifically call out{" "}
        <strong>unnecessary twisting of the steer&apos;s neck after the fall is
        complete</strong> as unnecessary roughness, with a fine that is
        progressively doubled for repeat offences.
      </p>

      <p>
        That rule exists for the obvious reason, and it is worth internalising
        as a habit rather than as a rule you are avoiding breaking. When the
        flag drops, you are done.
      </p>

      <h2>Why this makes the scoring so simple</h2>

      <p>
        Because there is only one additive penalty and one binary judgment, a
        producer&apos;s scoring screen needs exactly three inputs: time,
        barrier, legal fall.
      </p>

      <p>
        It is the simplest engine in rodeo after breakaway. Which is good news
        for producers and slightly bad news for contestants — with almost no
        penalties to blame, every tenth you are losing is inside the run itself.
        See{" "}
        <Link href="/blog/where-steer-wrestlers-lose-time">
          where steer wrestlers actually lose time
        </Link>
        .
      </p>

      <p>
        <Link href="/rules">Read the full rules reference &rarr;</Link>
      </p>
    </article>
  );
}
