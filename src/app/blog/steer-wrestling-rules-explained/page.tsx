import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Steer Wrestling Rules Explained: The Simplest Engine in Rodeo",
  description:
    "One additive penalty and a binary fall judgment. The complete rule set, plus the two things that genuinely differ by association — loose-steer recovery and hazer interference.",
  alternates: {
    canonical:
      "https://www.bulldogging.pro/blog/steer-wrestling-rules-explained",
  },
};

export default function Post() {
  return (
    <article className="prose-arena">
      <p className="text-xs tracking-wider text-muted-dim uppercase">
        2026-08-03
      </p>
      <h1 className="mt-2 text-3xl font-extrabold text-brand">
        Steer Wrestling Rules Explained: The Simplest Engine in Rodeo
      </h1>

      <p>
        After breakaway, steer wrestling has the simplest rule set in rodeo. One
        additive penalty. One binary judgment. Here is all of it.
      </p>

      <h2>The run</h2>

      <p>
        You start on horseback in the box behind a barrier. The steer gets a
        head start set by the arena. Your hazer rides the right side of the
        steer to keep it straight.
      </p>

      <p>Then:</p>

      <ol>
        <li>Slide down the right side of your horse</li>
        <li>Hook your right arm around the steer&apos;s right horn</li>
        <li>Grasp the left horn with your left hand</li>
        <li>Use leverage to bring the steer down</li>
      </ol>

      <p>
        Time limit is typically <strong>30 seconds</strong>, configurable by
        association.
      </p>

      <h2>The one penalty</h2>

      <p>
        Breaking the barrier adds <strong>10 seconds</strong>. That is the
        entire additive penalty table.
      </p>

      <p>
        The score line is set by arena conditions and steer speed. Barrier
        malfunctions get handled per the rulebook with the flagman option.
      </p>

      <h2>The one judgment</h2>

      <p>
        Legal fall: the steer on its side, all four feet and its head in the
        same direction, your hand on it when it is flagged.
      </p>

      <p>
        Head turned back is not down. The steer must also be up and under
        control before it is thrown — it goes down early, you let it up.{" "}
        <Link href="/blog/what-makes-a-legal-fall">
          That gets its own post
        </Link>{" "}
        because it decides more runs than anything else.
      </p>

      <h2>The two things that vary</h2>

      <h3>Loose-steer recovery</h3>
      <p>
        If the steer gets loose you are generally allowed a limited recovery —
        commonly one step, or one hand back on. The exact allowance is{" "}
        <strong>association-dependent</strong>.
      </p>

      <h3>Hazer interference</h3>
      <p>
        A hazer who interferes rather than helps produces a no time, and what
        counts as interference also differs between sanctioning bodies.
      </p>

      <p>
        Both of these end runs, and both are the kind of thing you find out
        about at the worst moment if you have carried an assumption from
        somewhere else. They are tagged by association on our{" "}
        <Link href="/rules">rules page</Link> rather than stated as universal.
      </p>

      <h2>You cannot compete without a hazer</h2>

      <p>
        Worth stating as a rule rather than as a convention, because it is one.
        No hazer, no run — an entry without one is blocked.
      </p>

      <p>
        The quarter share the hazer takes <em>is</em> convention, though, and it
        gets negotiated.{" "}
        <Link href="/blog/hazing-explained">More on hazing</Link>.
      </p>

      <h2>The steers</h2>

      <ul>
        <li>
          Typically <strong>400 to 600 pounds</strong> at amateur level, heavier
          at pro level
        </li>
        <li>
          Extra steers are bulldogged and thrown down from a horse before each
          performance, with a minimum number of pre-run extras kept available
        </li>
        <li>
          Steer changes and reruns work like other timed events — the field
          judge decides, and reruns are offered without a request
        </li>
      </ul>

      <h2>Unnecessary roughness</h2>

      <p>
        A fine, <strong>progressively doubled</strong> for repeat offences.
        Rulebooks specifically name unnecessary twisting of the steer&apos;s
        neck after the fall is complete.
      </p>

      <p>
        The fall is complete when the steer is flat with four feet and its head
        in the same direction. After that, you are finished — anything else is
        not part of the run and can cost you money you already won.
      </p>

      <h2>The short version</h2>

      <p>
        Do not break the barrier. Get the steer up and controlled before you
        throw it. Put it flat with four feet and the head the same way. Let go
        when the flag drops. Bring a hazer.
      </p>

      <p>
        <Link href="/rules">Read the full rules reference &rarr;</Link>
      </p>
    </article>
  );
}
