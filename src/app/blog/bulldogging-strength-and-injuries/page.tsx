import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Strength, Shoulders and Staying in One Piece",
  description:
    "The worst injury profile of the timed events. Shoulders, elbows, knees and neck — what the load actually is in steer wrestling, and what the guys with long careers do about it.",
  alternates: {
    canonical:
      "https://www.bulldogging.pro/blog/bulldogging-strength-and-injuries",
  },
};

export default function Post() {
  return (
    <article className="prose-arena">
      <p className="text-xs tracking-wider text-muted-dim uppercase">
        2026-08-03
      </p>
      <h1 className="mt-2 text-3xl font-extrabold text-brand">
        Strength, Shoulders and Staying in One Piece
      </h1>

      <p>
        Steer wrestling has the worst injury profile of the timed events. That
        is not a boast and it is not an excuse — it is a planning input, and
        most people treat it as neither.
      </p>

      <h2>What the load actually is</h2>

      <p>
        You leave a running horse, take hold of a 500-pound animal that is also
        running, decelerate it with your body, and put it on the ground. The
        forces do not go anywhere convenient.
      </p>

      <ul>
        <li>
          <strong>Shoulders</strong> — the arm hooked over the horn takes the
          deceleration, repeatedly, at a bad angle
        </li>
        <li>
          <strong>Elbows</strong> — same load, less tissue around it
        </li>
        <li>
          <strong>Knees</strong> — you are landing from a moving horse onto
          uncertain ground and then immediately loading laterally
        </li>
        <li>
          <strong>Neck</strong> — the one nobody logs, and the one that
          accumulates quietly
        </li>
      </ul>

      <p>
        Those four regions are what our injury records are keyed to, because
        &ldquo;shoulder&rdquo; and &ldquo;knee&rdquo; are specific enough to
        show a pattern and &ldquo;upper body&rdquo; is not.
      </p>

      <h2>What the long-career guys do</h2>

      <p>Nothing surprising. What is surprising is how few people do it.</p>

      <h3>Actual strength training</h3>
      <p>
        This is one of the few rodeo events where being genuinely strong is a
        performance input rather than a nice-to-have. Stopping a steer is
        eccentric loading under speed, and that is trainable.
      </p>
      <p>
        Logging it by lift, load, sets, reps and RPE is not gym-bro
        bookkeeping — it is how you know whether the thing you have been doing
        for six weeks is doing anything.
      </p>

      <h3>Neck work</h3>
      <p>
        Ten minutes, deeply unglamorous, and probably the highest-return item on
        the list. Same as it is for the roughstock riders.
      </p>

      <h3>Landing mechanics</h3>
      <p>
        Knees do not usually go in the throw. They go on the landing, and
        landing under control is a skill that can be drilled off a stationary
        horse or a dummy before it ever needs to happen at speed.
      </p>

      <h3>Not competing hurt when it does not matter</h3>
      <p>
        The hardest one. A shoulder that is 70 percent at a Saturday jackpot in
        April is a shoulder that will not be there in September.
      </p>

      <h2>Why writing it down changes things</h2>

      <p>Two reasons, both mundane.</p>

      <p>
        <strong>Patterns are invisible in the moment.</strong> A shoulder that
        aches after every rodeo is a fact you live with. A shoulder that has
        ached after every rodeo for nine weeks and now aches on the drive there
        is a decision — and you only ever get the second version if it is
        written down.
      </p>

      <p>
        <strong>Workload compounds.</strong> Rodeos entered, runs taken, miles
        driven, and how much of that was on a horse you were not used to. Across
        a season that picture tells you when you are cooked. In the middle of a
        four-rodeo weekend, nobody can see it.
      </p>

      <h2>It is private, and that is the point</h2>

      <p>
        Injury records here are private to your account by default. They are
        never shown to producers, associations, horse owners, or other
        contestants, and we do not analyse them for anyone but you.
      </p>

      <p>
        That matters more in this event than most, because you are constantly
        asking people to let you ride their horse. A health log that a horse
        owner could read is a health log nobody fills in honestly — and a
        dishonest record is worth less than no record at all.
      </p>

      <h2>The blunt version</h2>

      <p>
        This event will take something from you. The variable is how much, and
        over how long. The guys still doing it at forty are almost never the
        toughest ones — they are the ones who trained for it and who stopped
        when stopping was cheap.
      </p>

      <p>
        None of that has ever had a tool built for it. It does now.
      </p>

      <p>
        <Link href="/#waitlist">Join the waitlist &rarr;</Link>
      </p>
    </article>
  );
}
