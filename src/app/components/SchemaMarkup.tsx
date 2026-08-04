export default function SchemaMarkup() {
  const appSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Bulldogging.pro",
    applicationCategory: "SportsApplication",
    operatingSystem: "iOS, Android",
    description:
      "The everything app for steer wrestling. A social platform for the whole bulldogging community, plus hazer coordination and credit, horse sharing and mount money settlement, steer history, run segments, and strength and injury tracking. Built for amateur, jackpot and college steer wrestlers.",
    url: "https://www.bulldogging.pro",
    offers: [
      { "@type": "Offer", price: "0", priceCurrency: "USD", name: "Free" },
      {
        "@type": "Offer",
        price: "4.99",
        priceCurrency: "USD",
        name: "Premium Monthly",
      },
      {
        "@type": "Offer",
        price: "49.99",
        priceCurrency: "USD",
        name: "Premium Annual",
      },
    ],
    author: {
      "@type": "Organization",
      name: "Bulldogging.pro",
      url: "https://www.bulldogging.pro",
      email: "support@bulldogging.pro",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Bulldogging.pro",
    url: "https://www.bulldogging.pro",
    description:
      "The complete steer wrestling platform. Community, hazers, horses, mount money, steers, entries, results, and rules in one app.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.bulldogging.pro/blog?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What makes a legal fall in steer wrestling?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The steer must be on its side with all four feet and its head pointing in the same direction. A steer thrown with the head turned back is not down legally and must be let up and turned. The steer must also be on its feet and under control before it is thrown — if it goes down before that, the wrestler has to let it up and start again.",
        },
      },
      {
        "@type": "Question",
        name: "What does a hazer do in steer wrestling?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The hazer rides the right side of the steer, mounted, to keep it running straight while the steer wrestler comes off his horse on the left. Steer wrestling is the only rodeo event where a contestant's run depends on another contestant who is not competing, and by convention the hazer takes about a quarter of the payoff. You cannot compete without one.",
        },
      },
      {
        "@type": "Question",
        name: "How does mount money work in steer wrestling?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A good bulldogging horse is expensive and hard to find, so one man commonly hauls a horse that four or five men ride at the same rodeo. Everyone who rides it owes the owner mount money — commonly around 25 percent of winnings, though it is negotiated rather than fixed. The same convention applies to the hazer's share.",
        },
      },
      {
        "@type": "Question",
        name: "What is the barrier penalty in steer wrestling?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Breaking the barrier carries a 10-second penalty added to the raw time. The score line is set by arena conditions and steer speed. Apart from the barrier, steer wrestling has essentially no time-adding penalties — everything else is a no time or a fine.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if the steer gets loose in steer wrestling?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The wrestler is generally allowed a limited recovery, but the exact allowance varies by association — commonly one step or one hand back on. This is one of the rules that genuinely differs between sanctioning bodies, so check the ground rules of the rodeo you have entered rather than assuming.",
        },
      },
      {
        "@type": "Question",
        name: "What counts as unnecessary roughness in steer wrestling?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Unnecessary roughness carries a fine that is progressively doubled for repeat offences, and the rulebooks specifically call out unnecessary twisting of the steer's neck after the fall is complete. The fall is finished when the steer is on its side with all four feet and its head in the same direction — anything after that point is not part of the run.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
