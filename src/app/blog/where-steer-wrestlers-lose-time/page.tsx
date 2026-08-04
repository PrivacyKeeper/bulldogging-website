import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Where Steer Wrestlers Actually Lose Time",
  description:
    "A 4.2 and a 4.2 are not the same run. Barrier, box, catch, feet down, stop, throw — which of the six is costing you, and which ones you can actually train.",
  alternates: {
    canonical:
      "https://www.bulldogging.pro/blog/where-steer-wrestlers-lose-time",
  },
};

export default function Post() {
  return (
    <article className="prose-arena">
      <p className="text-xs tracking-wider text-muted-dim uppercase">
        2026-08-03
      </p>
      <h1 className="mt-2 text-3xl font-extrabold text-brand">
        Where Steer Wrestlers Actually Lose Time
      </h1>

      <p>
        Steer wrestling gives you one number and there is almost nothing else in
        the results to explain it. No penalty column beyond the barrier, no
        catch classification, no partner to attribute anything to.
      </p>

      <p>
        Which means a 4.2 and a 4.2 can be completely different runs, and you
        cannot tell from a sheet.
      </p>

      <h2>The six places time goes</h2>

      <h3>1. The barrier</h3>
      <p>
        Ten seconds if you break it, so people sit. And sitting costs you two or
        three tenths on every run, all year, invisibly.
      </p>
      <p>
        The only way to know whether you are riding the edge or leaving room is
        to measure the margin in milliseconds across a season. Feel is not
        reliable here — a run where you were sure you were late is often the one
        where you were closest.
      </p>

      <h3>2. Leaving the box</h3>
      <p>
        Your horse&apos;s start. Largely the horse, and one of the better
        arguments for knowing which horse you are on before you get on it.
      </p>

      <h3>3. The catch</h3>
      <p>
        Box to hand on the horn. This is the segment most affected by the hazer
        — a steer running straight puts the horn where you expect it, and a
        steer drifting does not.
      </p>
      <p>
        If this segment is inconsistent across a weekend, look at who was
        hazing before you look at your own reach.
      </p>

      <h3>4. Feet on the ground</h3>
      <p>
        Catch to your feet under you. This is the hidden one — the equivalent of
        the dismount in tie-down, and the place where tenths disappear without
        anyone noticing.
      </p>
      <p>
        It depends heavily on the horse&apos;s stop and on where you were
        positioned at the catch. Two riders with identical catches can be a
        quarter of a second apart here.
      </p>

      <h3>5. Stopping the steer</h3>
      <p>
        Feet down to the steer stopped. Strength and leverage, and the segment
        most affected by the steer itself — a 600-pound steer that fights is not
        the same job as one that gives.
      </p>

      <h3>6. The throw</h3>
      <p>
        Stop to the fall complete. Technique, and the one place where doing it
        wrong does not just cost time but costs the run entirely — a head turned
        back means letting the steer up and starting again.
      </p>

      <h2>Why most people misdiagnose it</h2>

      <p>
        Ask a steer wrestler where he is slow and he will usually say the throw,
        because the throw is the part he can feel. It is physical, it is the
        end, and it is what everyone watches.
      </p>

      <p>
        More often the time is in the catch and the feet — the two segments that
        happen fastest and feel like a single event. And those two point at
        completely different fixes: the catch at the hazer and the horse, the
        feet at position and the stop.
      </p>

      <h2>What to actually do about it</h2>

      <p>
        The principle is the same as in any technical event:{" "}
        <strong>stop training the whole run</strong>. Measure the pieces, find
        the slow one, and work on it for a month.
      </p>

      <p>
        Film from the side rather than head-on. Head-on video is useless for
        segment timing because you cannot see the ground contact clearly. One
        phone on a fence post at the right angle will give you every one of the
        six.
      </p>

      <p>
        And record which steer and which hazer, because two of the six segments
        are not yours. A run that was slow because of a steer that ducked is not
        a run to change your technique over.
      </p>

      <h2>The thing you cannot train</h2>

      <p>
        Worth being honest about: the steer draw is a real source of variance
        here, same as it is in the roping events. A steer with a{" "}
        <strong>drop flag</strong> or a <strong>fight flag</strong> is a
        different job from a fresh one that runs straight.
      </p>

      <p>
        Knowing which you drew does not make you faster, but it does stop you
        drawing the wrong conclusion from a slow run — and over a season, not
        drawing wrong conclusions is most of what improvement is.
      </p>

      <p>
        <Link href="/#waitlist">Join the waitlist &rarr;</Link>
      </p>
    </article>
  );
}
