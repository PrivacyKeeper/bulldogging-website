import type { Metadata } from "next";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support | Bulldogging.pro",
  description:
    "Get help with Bulldogging.pro — account questions, entries and draws, hazer credits and mount money, safety reports, producer access, and data requests.",
  alternates: { canonical: "https://www.bulldogging.pro/support" },
};

const topics = [
  {
    h: "Account and billing",
    p: "Subscription changes, cancellations, and receipts. Purchases made through the App Store or Google Play must be refunded through those stores.",
    email: "support@bulldogging.pro",
    subject: "Account%20and%20billing",
  },
  {
    h: "Entries, draws, and results",
    p: "Entry problems are usually fastest to solve with the event producer, since they control the entries, the draw, the steers, and the payout. We can help you reach them.",
    email: "support@bulldogging.pro",
    subject: "Entry%20or%20results%20question",
  },
  {
    h: "Hazer credits and mount money",
    p: "We calculate the amounts and keep the ledger both parties can see, but we do not hold or move money and we cannot arbitrate what was owed. If a row is wrong — a share percentage, a run attributed to the wrong hazer, a settlement marked settled that was not — either party can flag it and we will correct the record.",
    email: "support@bulldogging.pro",
    subject: "Hazer%20or%20mount%20money%20question",
  },
  {
    h: "Hazer and horse board conduct",
    p: "The boards are messaging surfaces, so blocking, reporting, and rate limiting apply. No-shows are recorded because reliability is worth knowing. If someone is not paying what they agreed, or is unsafe to be around, report it — hazer ratings and conduct reports are reviewed.",
    email: "support@bulldogging.pro",
    subject: "Hazer%20conduct%20report",
  },
  {
    h: "Safety, harassment, or unwanted contact",
    p: "Report it in the app for the fastest response — reports there reach our moderation team directly with the relevant context attached. You can also email us, and if a minor is involved, say so in the subject line so it is prioritized.",
    email: "support@bulldogging.pro",
    subject: "Safety%20report",
  },
  {
    h: "Producer access",
    p: "Producing rodeos and want the console — entries, steer draw and sorting, a scoring screen with the legal-fall call, hazer registration, and payouts.",
    email: "support@bulldogging.pro",
    subject: "Producer%20early%20access",
  },
  {
    h: "Guardian requests",
    p: "Guardians can adjust a minor's visibility, messaging, media sharing, and location settings, and can export or delete the account's data. Adults cannot message a minor outside a linked school, barn, or mentor relationship.",
    email: "support@bulldogging.pro",
    subject: "Guardian%20request",
  },
  {
    h: "Data export or account deletion",
    p: "You can export your data or delete your account in the app. If you would rather we handle it, email us from the address on the account.",
    email: "support@bulldogging.pro",
    subject: "Data%20request",
  },
  {
    h: "Rules corrections",
    p: "If something in our rules reference is out of date or wrong, tell us. Include the association and the amendment date if you have it — we version rules by date, and loose-steer recovery and hazer interference genuinely differ between bodies, so corrections are welcome.",
    email: "support@bulldogging.pro",
    subject: "Rules%20correction",
  },
];

export default function Support() {
  return (
    <div className="arena-page arena-bg-1 min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b border-ink-border bg-[#0e1319]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <Link href="/" className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="Bulldogging.pro" className="h-12 w-auto" />
            <span className="hidden text-base font-bold tracking-wide text-brand sm:block">
              BULLDOGGING<span className="text-brand-2">.PRO</span>
            </span>
          </Link>
          <nav className="flex gap-6 text-sm font-semibold tracking-wider text-muted uppercase">
            <Link href="/" className="transition hover:text-brand">
              Home
            </Link>
            <Link href="/rules" className="transition hover:text-brand">
              Rules
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-4xl font-extrabold tracking-tight text-cream">
          Support
        </h1>
        <p className="mt-4 text-lg text-muted">
          Email us at{" "}
          <a
            href="mailto:support@bulldogging.pro"
            className="text-brand hover:underline"
          >
            support@bulldogging.pro
          </a>{" "}
          and we will get back to you. Pick the closest topic below so it
          reaches the right person faster.
        </p>

        <div className="mt-10 space-y-4">
          {topics.map((t) => (
            <div
              key={t.h}
              className="rounded-xl border border-ink-border bg-ink-raised p-6"
            >
              <h2 className="text-lg font-semibold text-brand">{t.h}</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#d3dbe6]">
                {t.p}
              </p>
              <a
                href={`mailto:${t.email}?subject=${t.subject}`}
                className="mt-3 inline-block text-sm font-semibold text-brand-2 hover:underline"
              >
                Email about this &rarr;
              </a>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
