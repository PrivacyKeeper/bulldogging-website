import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Bulldogging.pro",
  description: "The terms governing use of the Bulldogging.pro app and website.",
  alternates: { canonical: "https://www.bulldogging.pro/terms" },
};

const sections = [
  {
    h: "1. Acceptance of Terms",
    p: "By creating an account or using Bulldogging.pro, you agree to these Terms of Service. If you do not agree, do not use the service. Bulldogging.pro is operated by Apps 1, LLC.",
  },
  {
    h: "2. Eligibility and Accounts Held by Minors",
    p: "You must be at least 13 years old to create an account. Users under 18 require guardian consent, and guardian controls apply to messaging, media sharing, and location visibility. You are responsible for maintaining the security of your account credentials and for all activity that occurs under your account.",
  },
  {
    h: "3. Hazer and Mount Money Records Are a Ledger, Not an Escrow",
    p: "Hazer credits, mount money calculations, and settlement logs are a shared record-keeping tool. We are not a payment processor, we do not hold or transfer funds between users, and we do not guarantee that anyone will pay anyone. A settlement marked settled means a user marked it settled. Percentages are whatever the two parties agreed; our defaults are conventions, not terms we set. Disputes about what was owed are between the people involved.",
  },
  {
    h: "4. Hazer Assignments Are Not Contracts",
    p: "A confirmed hazer assignment in the app records an intention between two contestants. It does not bind either of you, it does not bind a producer, and it does not guarantee that a hazer will be present or that a horse will be available. No-shows are recorded because reliability is worth knowing, not because we can enforce anything.",
  },
  {
    h: "5. Practice Data Is Not Official",
    p: "Times, catches, and other run data you record yourself are practice data. They are hand-timed, they are not verified by any judge, timer, or sanctioning body, and they are never treated as official results. Official results, standings, and payouts originate from event producers and sanctioning bodies. Nothing in the app constitutes an official record of competition unless it is provided by the producer of that event.",
  },
  {
    h: "6. Rules Information Is a Reference, Not Authority",
    p: "The rules content in the app and on this website is a plain-language reference compiled from published association rulebooks and amendments. Steer wrestling rules differ between sanctioning bodies — loose-steer recovery and hazer interference in particular — and our reference labels those differences rather than asserting a single answer. It is not a rulebook and it is not legal or competitive advice. Where our reference and an association's current rulebook disagree, the rulebook governs. Ground rules for a specific rodeo override association rules for that rodeo.",
  },
  {
    h: "7. Events, Entries, and Payments",
    p: "Event listings, entry fees, added money, office charges, class configurations, ground rules, and sanctioning status are supplied by event producers. We are not the producer of events listed in the app and we are not responsible for the conduct, cancellation, scoring, or payout of any event. Entry fees paid through the app are collected on behalf of the producer, subject to that producer's own entry, draw-out, and refund terms.",
  },
  {
    h: "8. Hazer and Horse Boards",
    p: "The hazer board and the horse board are messaging and coordination surfaces. Hazer ratings and horsepower claims reflect what users say about themselves and each other; we do not verify them. Blocking, reporting, and rate limiting apply. Minors cannot be contacted by adults outside a linked school or barn group. Getting on a horse you found through this service, or hazing for someone you met through it, is entirely at your own risk and your own judgment.",
  },
  {
    h: "9. Marketplace",
    p: "Marketplace listings are created by users. We do not own, inspect, verify, or warrant any horse, animal, item, or service listed, including bulldogging horses offered for sale, lease, or mounts. Transactions are between buyer and seller. You are responsible for your own due diligence, including veterinary examination, soundness, health documentation, and transport arrangements. Report suspicious listings using the in-app reporting tools.",
  },
  {
    h: "10. Subscriptions and Billing",
    p: "Premium features are offered on monthly and annual subscriptions. Subscriptions renew automatically until cancelled. You may cancel at any time through your app store account or in the app; cancellation takes effect at the end of the current billing period. Pricing may change with notice.",
  },
  {
    h: "11. Assumption of Risk",
    p: "Steer wrestling has the worst injury profile of the timed events — shoulders, elbows, knees and neck — and throwing a 500-pound animal off a running horse is inherently dangerous. Nothing in this app reduces that risk. Training content, drills, and AI-generated coaching output are informational only and are not a substitute for qualified instruction, veterinary advice, or your own judgment. You participate in equine activities entirely at your own risk.",
  },
  {
    h: "12. Animal Welfare",
    p: "You agree to comply with the humane treatment rules of any association or rodeo you participate in, including the unnecessary-roughness provisions that specifically cover twisting a steer's neck after the fall is complete. Content depicting abuse or mistreatment of animals is prohibited and will be removed, and may result in account termination and referral to the relevant sanctioning body.",
  },
  {
    h: "13. User Content and Conduct",
    p: "You retain ownership of content you post and grant us a license to host, display, and distribute it within the service. You agree not to post content that is unlawful, harassing, abusive, or that violates another person's privacy — and specifically not to use the service to contact minors outside of an established, guardian-visible school, barn, or mentor relationship. We may remove content and suspend or terminate accounts that violate these terms.",
  },
  {
    h: "14. Service Availability",
    p: "We provide the service on an as-is and as-available basis. We do not warrant uninterrupted or error-free operation, and we may modify, suspend, or discontinue features at any time.",
  },
  {
    h: "15. Limitation of Liability",
    p: "To the maximum extent permitted by law, Apps 1, LLC is not liable for indirect, incidental, special, consequential, or punitive damages, or for lost profits, lost winnings, lost entry fees, or lost opportunities arising from your use of the service.",
  },
  {
    h: "16. Changes to These Terms",
    p: "We may update these terms as the product develops. Material changes will be communicated in the app and by email. Continued use after a change constitutes acceptance.",
  },
  {
    h: "17. Contact",
    p: "Questions about these terms can be sent to support@bulldogging.pro.",
  },
];

export default function Terms() {
  return (
    <div className="arena-page arena-bg-2">
      <main className="mx-auto min-h-screen max-w-4xl px-6 py-16">
        <div className="arena-panel p-8 md:p-10">
          <Link
            href="/"
            className="mb-8 inline-block text-sm text-brand hover:underline"
          >
            &larr; Back to Home
          </Link>
          <h1 className="mb-2 text-4xl font-bold text-cream">
            Terms of Service
          </h1>
          <p className="mb-10 text-sm text-muted">Last updated: August 2026</p>

          <div className="space-y-8 text-[#d3dbe6]">
            {sections.map((s) => (
              <section key={s.h}>
                <h2 className="mb-2 text-xl font-bold text-brand">{s.h}</h2>
                <p className="leading-relaxed">{s.p}</p>
              </section>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
