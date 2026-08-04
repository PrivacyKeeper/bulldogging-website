import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Introducing Bulldogging.Pro",
  description:
    "The only rodeo event where your run depends on another contestant who is not competing. Hazer coordination, mount money, and the injury side — three things nobody has ever systematized.",
  alternates: {
    canonical: "https://www.bulldogging.pro/blog/introducing-bulldogging-pro",
  },
};

export default function Post() {
  return (
    <article className="prose-arena">
      <p className="text-xs tracking-wider text-muted-dim uppercase">
        2026-08-03
      </p>
      <h1 className="mt-2 text-3xl font-extrabold text-brand">
        Introducing Bulldogging.Pro
      </h1>

      <p>
        Steer wrestling is the only rodeo event where a contestant&apos;s run
        depends on <strong>another contestant who is not competing</strong>.
      </p>

      <p>
        Your hazer is a full partner in the outcome and, by convention, takes
        about a quarter of the payoff. You are probably on somebody else&apos;s
        horse, and they are owed money too. None of that is written down
        anywhere — it lives in group texts, memory, and the occasional
        disagreement in a parking lot.
      </p>

      <h2>Three things nobody has systematized</h2>

      <h3>1. Hazer coordination and credit</h3>

      <p>
        A hazer board per rodeo — who is hazing, who still needs one, who has an
        open slot, expiring when the performance starts. Standing partnerships
        that prefill. Search by region, availability, and travel radius.
      </p>

      <p>
        Then the part that actually matters: when a run posts,{" "}
        <strong>the hazer is named on it</strong> and their share is calculated
        from the percentage you agreed <em>before</em> the run. Both of you see
        the same settlement ledger, with a settled flag.
      </p>

      <p>
        We are not an escrow and we do not move money. We are the shared record
        that means neither of you is working from a different version of events.
        That is enough to make the argument disappear.
      </p>

      <h3>2. Horse sharing and mount money</h3>

      <p>
        One man hauls a horse, four men ride it, everybody owes. Commonly around
        25 percent of winnings, but it gets negotiated.
      </p>

      <p>
        Horse board per rodeo with open slots and where it is hauling from.
        Mount agreements recorded up front. A calculator that itemises what is
        owed per run. And horse workload tracking — how many runs across a
        weekend, across how many riders — which has genuine welfare value and
        which owners care about a great deal.
      </p>

      <h3>3. Strength and injury</h3>

      <p>
        Bulldogging has the worst injury profile of the timed events: shoulders,
        elbows, knees, and neck. Strength logs, injury records by region, and
        return-to-competition tracking — <strong>private by default</strong>,
        never shown to producers or horse owners.
      </p>

      <p>
        A health log that somebody deciding whether to mount you could read is a
        health log nobody fills in honestly.
      </p>

      <h2>The eight-hour problem</h2>

      <p>
        Here is the practical reality this app is designed around. A bulldogger
        drives eight hours to a rodeo. When he gets there he needs a hazer and
        he needs a horse.
      </p>

      <p>
        Solve that and the app is indispensable. Everything else — the feed, the
        entries, the steer history, the run segments, the marketplace — is
        genuinely useful and none of it is the reason somebody installs this in
        the first place.
      </p>

      <h2>It is still the whole community</h2>

      <p>
        The feed, the groups, the DMs, the people. Entries and draws. Steer
        records with speed, straight, drop and fight flags. Run segments so a
        4.2 and a 4.2 stop looking like the same run. Schools, clinics, and
        youth and college standings.
      </p>

      <p>If you bulldog, you should not need another app. That is the bar.</p>

      <h2>Built for the amateur side</h2>

      <p>
        Most steer wrestlers are at amateur rodeos, offseason jackpots, and high
        school and college. That is who the copy, the pricing and the defaults
        are written for.
      </p>

      <p>
        And the rules are configuration rather than code, because two of them
        genuinely differ by association — loose-steer recovery and hazer
        interference, both of which end runs. See the{" "}
        <Link href="/rules">rules reference</Link>.
      </p>

      <p>
        <Link href="/#waitlist">Join the waitlist &rarr;</Link>
      </p>
    </article>
  );
}
