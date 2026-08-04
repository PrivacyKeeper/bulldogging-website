import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mount Money: One Man Hauls, Four Men Ride",
  description:
    "A good bulldogging horse gets used by five people in an afternoon and everybody owes the owner. How the percentages work, what gets negotiated, and why a shared ledger ends the argument.",
  alternates: {
    canonical: "https://www.bulldogging.pro/blog/mount-money-explained",
  },
};

export default function Post() {
  return (
    <article className="prose-arena">
      <p className="text-xs tracking-wider text-muted-dim uppercase">
        2026-08-03
      </p>
      <h1 className="mt-2 text-3xl font-extrabold text-brand">
        Mount Money: One Man Hauls, Four Men Ride
      </h1>

      <p>
        A finished bulldogging horse is expensive, hard to find, and hard to
        replace. Which is why almost nobody at an amateur rodeo is on their own.
        One man hauls the horse. Four or five men ride it in the same
        performance. Everybody owes him.
      </p>

      <p>
        That arrangement is one of the genuinely good things about this event.
        It also generates most of its arguments.
      </p>

      <h2>How it works</h2>

      <p>
        <strong>Mount money</strong> is what a rider pays the horse&apos;s owner
        for the use of the horse. The common figure is around{" "}
        <strong>25 percent of winnings</strong>, though it is negotiated rather
        than set by any rulebook.
      </p>

      <p>Variations that come up constantly:</p>

      <ul>
        <li>
          <strong>Percentage of winnings</strong> — the standard. Win nothing,
          owe nothing.
        </li>
        <li>
          <strong>Flat fee per run</strong> — sometimes preferred when the horse
          is travelling a long way, or when the rider is new.
        </li>
        <li>
          <strong>Both</strong> — a small flat fee plus a smaller percentage.
        </li>
        <li>
          <strong>Nothing</strong> — friends, family, and people who have earned
          it. Also worth recording, so nobody has to guess later.
        </li>
      </ul>

      <h2>Why it goes wrong</h2>

      <p>
        Not because anyone is dishonest. Because of this sequence:
      </p>

      <ol>
        <li>A verbal agreement in a chute, three minutes before a run</li>
        <li>Four riders on the same horse, on different terms</li>
        <li>A payout that arrives days or weeks later</li>
        <li>Two people who each remember it slightly differently</li>
      </ol>

      <p>
        Add a hazer share on top of the same run — because the hazer is owed too
        — and one cheque now has to be split three ways against two verbal
        agreements made at different times.
      </p>

      <h2>What a ledger actually fixes</h2>

      <p>
        The fix is not enforcement. It is a <strong>shared record</strong>:
      </p>

      <ul>
        <li>
          The agreement is recorded <em>before</em> the run — share percentage
          or flat fee, agreed by both
        </li>
        <li>When the run posts, the amount owed is calculated automatically</li>
        <li>
          Both parties see <strong>the same rows</strong> — not two copies that
          can drift
        </li>
        <li>Either can mark a settlement settled, with a note</li>
      </ul>

      <p>
        We are explicitly <strong>not</strong> a payment processor. We do not
        hold money, we do not transfer it, and marking something settled is
        something a person does rather than something we verify. This is a
        ledger both parties trust, not an escrow — and that turns out to be
        enough.
      </p>

      <p>
        One consequence worth knowing: if a payout gets corrected after the
        fact, the hazer credit and the mount money owed on that run move with
        it. That is the kind of thing that quietly goes unadjusted when it lives
        in someone&apos;s head.
      </p>

      <h2>The owner&apos;s side</h2>

      <p>
        If you are the one hauling, mount money is not really the point — it
        offsets fuel and it acknowledges what the horse is worth. The thing you
        actually care about is the horse.
      </p>

      <p>
        <strong>Workload tracking</strong> matters here: how many runs your
        horse made across a weekend, and across how many different riders. Five
        runs in an afternoon with five different people on him is a lot of horse
        for one day, and it is very easy to lose count when you are running the
        chute.
      </p>

      <p>
        That has real welfare value, and it is also just useful — a horse with a
        documented workload history and a run record is worth more when you sell
        him.
      </p>

      <h2>For anyone starting out</h2>

      <p>
        Do not be shy about riding somebody else&apos;s horse. It is completely
        normal in this event and it is how most people get started — a good
        horse under a beginner is much safer than a green one.
      </p>

      <p>
        Just agree the terms before you get on, not after you win. Which is the
        entire argument for writing it down.
      </p>

      <p>
        <Link href="/#waitlist">Join the waitlist &rarr;</Link>
      </p>
    </article>
  );
}
