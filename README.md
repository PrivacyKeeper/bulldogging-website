# Bulldogging.pro — Website

Marketing site for the Bulldogging.pro mobile app. Built to the same pattern as
the other Rodeo Apps sites (BullRider.pro, BreakawayRoping.pro, TeamRope.pro,
TieDown.pro, SaddleBronc.pro, BarebackBronc.pro): Next.js App Router, Tailwind
v4, Resend for the waitlist, no database and no auth.

## Commands

- `npm run dev` — development server (http://localhost:3000)
- `npm run build` — production build
- `npm start` — serve the production build
- `npx eslint .` — lint

## Stack

Next.js 16 (App Router, Turbopack), React 19, TypeScript, Tailwind CSS v4,
Resend. Path alias `@/*` maps to `./src/*`.

## Required assets

`public/logo.png` is referenced by the header, the hero, and the OG/Twitter
card, and is **not** in the repo yet. Drop the Bulldogging crest in before
deploying or those three places render a broken image.

`public/cross.jpg` and `public/backgrounds/arena-1.jpg` / `arena-2.jpg` are
already here, carried over from the other Rodeo Apps sites.

## Environment

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Waitlist confirmation + team notification email |

Copy `.env.example` to `.env.local` for local development, and set the same
variable in the hosting provider's project settings for preview and production.

Without it, `POST /api/waitlist` returns 503 and the form shows an error. The
build and every other page work fine without it.

The sending domain `bulldogging.pro` must also be verified in Resend, otherwise
every send fails and the route answers 502 rather than reporting a signup that
never actually went out. The
build and every other page work fine without it.

## Structure

```
src/app/
  page.tsx                  Landing — 13 feature groups, share grid, pricing
  rules/                    Full steer wrestling rules reference (SEO)
  events/                   Formats, hazer/horse boards, producer console
  blog/                     8 SEO posts; index reads from blog/posts.ts
  support/                  Support topics
  terms/ privacy/ refund/   Legal
  api/waitlist/route.ts     Resend handler
  robots.ts  sitemap.ts     SEO
  components/
    SchemaMarkup.tsx        JSON-LD: SoftwareApplication, WebSite, FAQPage
    CrossQuote.tsx          Rotating verse, matches the other sites
    Footer.tsx
  data/quotes.json
```

## Brand

Per the build map: **steel blue and gold on slate**. Unusually for this
portfolio the map names *both* accents, so `--brand` is the gold `#d9a441` and
`--brand-2` is the steel blue `#6f97bd`, on `--ink` `#0e1319`.

Token names (`--brand`, `--brand-deep`, `--brand-2`, `--ink*`) are identical
across all six Rodeo Apps sites — only the values differ. That is deliberate:
the sites should diff cleanly against each other.

## Positioning

**Everything-app.** Social & Community leads the feature list because it is
what people open daily. The landing page states the bar outright: if you
bulldog, you should not need another app.

**Amateur audience.** Users are amateur, jackpot and college steer wrestlers,
not PRCA professionals.

## What makes this site different from the other timed-event ones

The build map names three things nobody has systematized, and they drive the
whole site:

1. **Hazer coordination and credit** — steer wrestling is the only rodeo event
   where a contestant's run depends on another contestant who is not
   competing. You cannot enter without one, and by convention they take ~25% of
   the payoff.
2. **Horse sharing and mount money** — one man hauls, four or five ride,
   everybody owes. Also ~25%, also negotiated.
3. **Strength and injury** — the worst injury profile of the timed events.
   Private by default; the privacy policy states this explicitly, because you
   spend the season asking people to let you ride their horse.

The landing page carries a `.share-grid` showing the three-way split, since the
payoff argument is the thing this app exists to make disappear.

Note the ledger framing throughout: we calculate and record, we never hold or
move money. Terms, refund and privacy all say so.

## Rules content, and what is tagged

Steer wrestling has the simplest rule engine in rodeo after breakaway — one
additive penalty (10s barrier) and a binary legal-fall judgment. Two things do
vary by association and both end runs:

- **Loose-steer recovery** — commonly one step or one hand back on
- **Hazer interference** — what counts differs between bodies

Both carry `.assoc-tag` pills on `/rules`. Keep that convention when editing.

## Adding a blog post

1. Create `src/app/blog/<slug>/page.tsx` with a `metadata` export and an
   `<article className="prose-arena">` body.
2. Add the entry to `src/app/blog/posts.ts` (drives the index).
3. Add the slug to `blogSlugs` in `src/app/sitemap.ts`.
