import headshot from "@/assets/karim-headshot.jpg.asset.json";
import introVideo from "@/assets/intro.mp4.asset.json";

import decogalMediaBuying from "@/assets/decogal-media-buying.jpg.asset.json";
import decogalSeoPlan from "@/assets/decogal-seo-plan.jpg.asset.json";
import decogalPostingSchedule from "@/assets/decogal-posting-schedule.jpg.asset.json";
import decogalTimeline from "@/assets/decogal-timeline.jpg.asset.json";
import decogalStrategyDoc from "@/assets/decogal-strategy-doc.jpg.asset.json";

import cuzymartStorefront from "@/assets/cuzymart-storefront.jpg.asset.json";
import cuzymartPricing from "@/assets/cuzymart-pricing.jpg.asset.json";
import cuzymartOrders from "@/assets/cuzymart-orders.jpg.asset.json";
import cuzymartCatalog from "@/assets/cuzymart-catalog.jpg.asset.json";
import cuzymartAdspy from "@/assets/cuzymart-adspy.jpg.asset.json";
import cuzymartRevenue from "@/assets/cuzymart-revenue.jpg.asset.json";
import cuzymartUgc1 from "@/assets/cuzymart-ugc-1.jpg.asset.json";
import cuzymartUgc2 from "@/assets/cuzymart-ugc-2.jpg.asset.json";
import cuzymartOutreach from "@/assets/cuzymart-outreach.jpg.asset.json";

import avosilkStyling from "@/assets/avosilk-styling.jpg.asset.json";
import avosilkCart from "@/assets/avosilk-cart.jpg.asset.json";
import avosilkStoryCode from "@/assets/avosilk-story-code.jpg.asset.json";
import avosilkStoryReach from "@/assets/avosilk-story-reach.jpg.asset.json";
import avosilkVetting from "@/assets/avosilk-vetting.jpg.asset.json";
import avosilkHighlights from "@/assets/avosilk-highlights.jpg.asset.json";

import creator1 from "@/assets/creator-1.jpg.asset.json";
import creator2 from "@/assets/creator-2.jpg.asset.json";
import creator3 from "@/assets/creator-3.jpg.asset.json";
import creator4 from "@/assets/creator-4.jpg.asset.json";
import creator5 from "@/assets/creator-5.jpg.asset.json";
import creator6 from "@/assets/creator-6.jpg.asset.json";
import creator7 from "@/assets/creator-7.jpg.asset.json";
import jewleraStorefront from "@/assets/jewlera-storefront.jpg.asset.json";
import poochycatCollab from "@/assets/poochycat-collab.jpg.asset.json";
import porlarisaFeature from "@/assets/porlarisa-feature.jpg.asset.json";
import adCreative1 from "@/assets/ad-creative-51.mp4.asset.json";
import adCreative2 from "@/assets/ad-creative-56.mp4.asset.json";
import adCreative3 from "@/assets/ad-creative-90.mp4.asset.json";
export const media = {
  headshot: headshot.url,
  introVideo: introVideo.url,
  adCreatives: [adCreative1.url, adCreative2.url, adCreative3.url],
};

export const contact = {
  email: "karimeid.work@gmail.com",
  phone: "+20 111 316 6392",
  phoneHref: "tel:+201113166392",
  whatsapp: "https://wa.me/201113166392",
  linkedin: "https://linkedin.com/in/karim-3eed",
  location: "Cairo, Egypt — working with Egypt, KSA & international brands",
};

export const tickerItems: Array<[string, string, "up" | "down"]> = [
  ["AVG. ROAS", "4.00x", "up"],
  ["CAC / WASTED SPEND", "-20%", "down"],
  ["CLIENT REVENUE GROWTH", "+25%", "up"],
  ["CUZYMART NET SALES '24", "$52K", "up"],
  ["AVOSILK SALES", "+30%", "up"],
  ["CREATOR NETWORK", "100+", "up"],
  ["SHOPIFY STORES BUILT", "3+", "up"],
  ["INFLUENCER SHARE OF SALES", "50%+", "up"],
  ["AVG. SKU MARGIN", "~42%", "up"],
  ["V CUT GYM", "CONTENT LIVE", "up"],
];

export const heroStats = [
  { num: "4.00x", lbl: "Avg. ROAS" },
  { num: "+30%", lbl: "Sales lift, Avosilk" },
  { num: "$52K", lbl: "Net sales, CuzyMart '24" },
  { num: "100+", lbl: "Vetted creators" },
  { num: "20%", lbl: "CAC / waste reduction" },
  { num: "25%", lbl: "Faster campaign planning" },
];

export const skills = [
  {
    n: "01",
    title: "Influencer Marketing",
    body: "Sourcing, vetting (audience quality, engagement rate, audit score), outreach, contract negotiation and ROI tracking across a 100+ creator network.",
  },
  {
    n: "02",
    title: "Ad Campaigns",
    body: "Meta, TikTok & Google Ads — audience targeting, creative testing and media buying, optimized toward ROAS and CAC, not impressions.",
  },
  {
    n: "03",
    title: "Social Media Management",
    body: "Content calendars, organic growth and community management that set the creative direction paid media later amplifies.",
  },
  {
    n: "04",
    title: "Content Creation",
    body: "UGC-style and organic content strategy — currently building V Cut Gym's brand and content presence from zero.",
  },
  {
    n: "05",
    title: "E-Commerce Strategy",
    body: "Shopify store operations end to end — product research, pricing/margin modeling, merchandising and CRO.",
  },
  {
    n: "06",
    title: "Web Design",
    body: "Shopify storefronts designed from the ground up — branding, product page optimization, UX and checkout flow.",
  },
  {
    n: "07",
    title: "SEO",
    body: "Organic discovery and social-SEO strategy, plus documented on-site SEO action plans built into the marketing calendar.",
  },
  {
    n: "08",
    title: "Email & Outreach Marketing",
    body: "Merge-email creator outreach tracked through Opened / Clicked / Responded / Bounced — a pipeline, not a send-and-hope list.",
  },
];

/* ---------- Paid media deep dive ---------- */
export const mediaBuyingSteps = [
  {
    n: "01",
    t: "Offer & margin check",
    d: "Before a single ad runs I price the product against COGS, shipping, payment and platform fees to know the break-even ROAS. If the margin can't carry a 2x, the ad account isn't the problem.",
  },
  {
    n: "02",
    t: "Research & ad-spy",
    d: "Competitor ad libraries, revenue estimates and angle mapping — which hooks are already paying for themselves in this niche, and which are saturated.",
  },
  {
    n: "03",
    t: "Creative brief & UGC",
    d: "3–5 angles per product, each with its own hook, script and format (UGC talking head, demo, static, carousel). Creative is the targeting.",
  },
  {
    n: "04",
    t: "Account structure",
    d: "Clean CBO/ABO split, broad + interest stacks on Meta, and separate testing vs. scaling campaigns so learnings never get contaminated by budget shifts.",
  },
  {
    n: "05",
    t: "Testing protocol",
    d: "Small-budget structured tests, one variable at a time, judged on CTR, CPC, hook-rate, add-to-cart and CPA — with kill rules written before the test starts.",
  },
  {
    n: "06",
    t: "Scaling",
    d: "Vertical budget increases on proven winners, horizontal duplication into new audiences and placements, with CPA guardrails at every step.",
  },
  {
    n: "07",
    t: "Retargeting & retention",
    d: "Warm-audience sequencing across viewers, engagers, ATC and past buyers, plus creator content reused as social proof at the bottom of the funnel.",
  },
  {
    n: "08",
    t: "Reporting & reallocation",
    d: "Weekly ROAS / CAC / AOV / CTR / CPM review, budget moved to what converts and off what doesn't — the discipline that cut 20% of wasted spend at Decogal.",
  },
];

export const platformBreakdown = [
  {
    platform: "Meta Ads",
    focus: "Primary revenue engine",
    body: "Advantage+ and manual campaigns, creative testing at volume, interest and lookalike stacks, catalog/DPA retargeting, pixel and CAPI hygiene. Up to 4x ROAS on top-performing campaigns.",
    metrics: ["ROAS", "CPA", "CTR", "Hook rate", "ATC rate"],
  },
  {
    platform: "TikTok Ads",
    focus: "Creative discovery",
    body: "Spark Ads on creator posts that already earned organic traction, native UGC scripts, and short-cycle testing to find hooks before porting the winners to Meta.",
    metrics: ["CPM", "Thumb-stop", "CPC", "CVR"],
  },
  {
    platform: "Google Ads",
    focus: "Intent capture",
    body: "Search and Shopping on high-intent product and brand terms, negative-keyword hygiene, and feed optimization so the storefront wins the click it already earned.",
    metrics: ["Impr. share", "CPC", "ROAS", "Quality score"],
  },
  {
    platform: "Influencer & Affiliate",
    focus: "Trust at scale",
    body: "Gifted, paid and code-based collabs with tracked discount codes — 50%+ of total client sales at freelance clients came through this channel.",
    metrics: ["Code redemptions", "CPM equiv.", "Sales share"],
  },
];

/* ---------- SEO deep dive ---------- */
export const seoPillars = [
  {
    t: "Technical foundation",
    d: "Site speed, mobile UX, crawlability, clean URL and collection structure, indexation of collection and product pages, structured data for products, reviews and FAQs.",
  },
  {
    t: "Keyword & intent mapping",
    d: "Commercial, informational and branded terms mapped to collections, product pages and blog content — so every page has one job and one query cluster.",
  },
  {
    t: "On-page optimization",
    d: "Titles, meta descriptions, H-structure, alt text, internal linking and product copy rewritten for both buyers and crawlers. Documented as an action plan inside the marketing calendar.",
  },
  {
    t: "Content & topical authority",
    d: "Buying guides, comparison and use-case content built around what the category actually searches for, feeding the same creative direction paid and social use.",
  },
  {
    t: "Social & marketplace SEO",
    d: "TikTok, Instagram and Pinterest search optimization — captions, keywords, hashtags and cover text — which drove traffic with zero ad spend across my own stores.",
  },
  {
    t: "Measurement",
    d: "Google Analytics and Search Console tracking on impressions, clicks, position and assisted revenue, so organic is judged on the same P&L as paid.",
  },
];

/* ---------- E-commerce deep dive ---------- */
export const ecomStack = [
  {
    t: "Product research & validation",
    d: "Trend and competitor research, demand checks and small-budget ad tests to prove a product before inventory or ad budget scales behind it.",
  },
  {
    t: "Pricing & margin modelling",
    d: "Every SKU priced against landed cost, shipping and platform fees. At CuzyMart 17 SKUs were modelled from 22% to 53% margin — and margin decided who got ad spend.",
  },
  {
    t: "Store design & branding",
    d: "Shopify storefronts built from scratch: brand system, homepage narrative, collection architecture, product page layout and mobile-first UX.",
  },
  {
    t: "CRO & checkout",
    d: "Offer structure, bundles, upsells, trust blocks, review placement and checkout friction removal — turning existing traffic into a bigger AOV.",
  },
  {
    t: "Merchandising & catalog ops",
    d: "30+ SKU catalogs, product listing optimization, imagery standards, inventory and variant hygiene across pet, jewelry, toy and sleepwear niches.",
  },
  {
    t: "Suppliers & fulfilment",
    d: "Supplier sourcing and negotiation, quality control, shipping times and post-purchase service — the unglamorous half that decides whether ads stay profitable.",
  },
];

export const ecomKpis = [
  { k: "ROAS", v: "Return on ad spend" },
  { k: "CAC / CPA", v: "Acquisition cost" },
  { k: "AOV", v: "Average order value" },
  { k: "CVR", v: "Conversion rate" },
  { k: "CTR / CPM", v: "Creative efficiency" },
  { k: "Contribution margin", v: "Profit per order" },
];

/* ---------- Engagement model ---------- */
export const engagementSteps = [
  {
    n: "01",
    t: "Audit — week 1",
    d: "Ad account, storefront, analytics, SEO and creator history reviewed against margin. You get a written list of what's leaking money.",
  },
  {
    n: "02",
    t: "Plan — week 2",
    d: "One calendar covering paid, creators, content and SEO, with budget allocation, creative angles and KPI targets tied to your break-even ROAS.",
  },
  {
    n: "03",
    t: "Build — weeks 3–4",
    d: "Campaign structure live, creator pipeline in outreach, storefront and product pages fixed, SEO action plan started.",
  },
  {
    n: "04",
    t: "Scale — ongoing",
    d: "Weekly reporting, kill/scale decisions, new creative and creator batches, and monthly strategy reviews against revenue — not vanity metrics.",
  },
];

/* ---------- Case studies ---------- */
export const cases = [
  {
    id: "decogal",
    tag: "Case Study — Marketing Manager, 2024",
    name: "Decogal",
    pills: ["Home Decor · Egypt", "Meta Ads", "SEO", "Full-Stack Marketing"],
    paras: [
      "Decogal is a wall-art marketplace connecting customers with independent designers. Because art sells on how it looks in a room — not on a discount banner — organic and influencer content led, and paid media followed on purpose, not by default.",
      "Full ownership of the stack: strategy, content calendar, influencer relationships and the Meta Ads budget, unified into a single cross-functional plan instead of three separate ones.",
    ],
    list: [
      {
        b: "01",
        strong: "Direction first.",
        text: "Content calendar and creative direction were planned around what was already resonating organically, so paid spend amplified proven creative instead of guessing.",
      },
      {
        b: "02",
        strong: "Meta Ads, owned end to end.",
        text: "Audience targeting, creative testing and continuous budget reallocation toward what was actually converting.",
      },
      {
        b: "03",
        strong: "One calendar.",
        text: "Organic, influencer and paid planning centralized so creative direction stayed consistent everywhere.",
      },
      {
        b: "04",
        strong: "SEO in the same plan.",
        text: "A documented on-site SEO action plan — page structure, metadata and content priorities — scheduled alongside the paid and organic calendar instead of treated as a side project.",
      },
    ],
    stats: [
      { num: "4x", lbl: "ROAS — E£180K spend → E£720K revenue" },
      { num: "20%", lbl: "Wasted ad spend reduced" },
      { num: "25%", lbl: "Campaign planning time cut" },
    ],
    shots: [
      { src: decogalMediaBuying.url, cap: "Media buying — 8-step process" },
      { src: decogalSeoPlan.url, cap: "SEO action plan" },
      { src: decogalPostingSchedule.url, cap: "Posting schedule" },
      { src: decogalTimeline.url, cap: "Marketing plan timeline — 2024" },
      { src: decogalStrategyDoc.url, cap: "Marketing strategy document", wide: true },
    ],
  },
  {
    id: "cuzymart",
    tag: "Case Study — Freelance Growth Consultant, 2024",
    name: "CuzyMart",
    pills: ["Wooden Toys · Saudi-Based", "Shopify · DTC", "Meta Ads + Influencer"],
    paras: [
      "CuzyMart sells Montessori-inspired wooden toys, positioned around child development rather than novelty. The mandate: find the winning products, then split spend evenly across influencer-driven content and Meta Ads.",
      "17 SKUs were priced against Shopify fees, landed cost and shipping before a single ad ran — margins ranged from 22% to 53%, and that data decided which products got ad budget versus organic-only.",
    ],
    list: [
      {
        b: "01",
        strong: "Research before spend.",
        text: "Competitor ad-spy and revenue estimates mapped the winning angles and price points in the niche before the first campaign went live.",
      },
      {
        b: "02",
        strong: "Margin-led media buying.",
        text: "Only SKUs above the break-even ROAS got paid budget; thin-margin products were pushed organically and through creators instead.",
      },
      {
        b: "03",
        strong: "UGC as the creative engine.",
        text: "Creator-shot demo and 'play room upgrade' angles fed both Meta Ads and organic — the same asset working twice.",
      },
    ],
    stats: [
      { num: "$52K", lbl: "Net sales, full year 2024" },
      { num: "50/50", lbl: "Revenue split — influencer vs. Meta Ads" },
      { num: "~42%", lbl: "Avg. margin across 17 SKUs" },
    ],
    table: {
      head: ["Product", "Price", "Cost + Ship", "Margin"],
      rows: [
        ["Wooden Tea Party Tray & Pastry Set", "$77.27", "$21.27", "53.46%"],
        ["Portable 3-in-1 Farmhouse", "$77.25", "$21.33", "53.38%"],
        ["5-in-1 Wooden Activity Castle", "$77.00", "$21.76", "52.71%"],
        ["Rocket Stacker & Magnetic Puzzle", "$77.87", "$23.88", "51.43%"],
        ["Wooden Steering Wheel Busy Board", "$50.00", "$22.00", "26.25%"],
      ],
    },
    shots: [
      { src: cuzymartStorefront.url, cap: "Live storefront — cuzymart.com" },
      { src: cuzymartPricing.url, cap: "Shopify pricing & margin panel" },
      { src: cuzymartOrders.url, cap: "Live order flow — Shopify Orders" },
      { src: cuzymartCatalog.url, cap: "Product catalog — 8 of 30+ SKUs" },
      { src: cuzymartAdspy.url, cap: "Competitor ad-spy research" },
      { src: cuzymartRevenue.url, cap: "Competitor revenue estimates" },
      { src: cuzymartUgc1.url, cap: 'UGC ad creative — "Add with this"' },
      { src: cuzymartUgc2.url, cap: 'UGC ad creative — "Play Room Upgrade"' },
      {
        src: cuzymartOutreach.url,
        cap: "Influencer outreach tracker — 100+ contacts, redacted",
        wide: true,
      },
    ],
  },
  {
    id: "avosilk",
    tag: "Case Study — Founder-Led Growth",
    name: "Avosilk",
    pills: ["Sleepwear · DTC", "Supplier Sourcing", "Influencer Engine"],
    paras: [
      "Zero to a full-funnel silk brand: supplier sourcing and quality control, product design, storefront and offer logic, and an influencer engine — run as one system, not four separate hires.",
      "Every creator was scored before outreach, on four checks, so budget went to the right accounts, not the biggest follower counts.",
    ],
    list: [
      {
        b: "Aa",
        strong: "Female ratio",
        text: "— audience gender split checked against the core buyer before a single DM went out.",
      },
      {
        b: "Er",
        strong: "Engagement rate",
        text: "— real interaction against following, the number that predicts whether a story gets tapped.",
      },
      {
        b: "HA",
        strong: "Audit score",
        text: "— third-party score flagging bought followers or bot activity before product went out.",
      },
      {
        b: "Up",
        strong: "Upfluence match",
        text: '— cross-checked "real audience" percentage used to prioritize who got sent product first.',
      },
    ],
    stats: [
      { num: "+30%", lbl: "Increase in sales" },
      { num: "770", lbl: "Sticker taps, single story" },
      { num: "27.4K", lbl: "Reach, single story" },
    ],
    shots: [
      { src: avosilkStyling.url, cap: "Product styling — sleep mask & pillowcase" },
      { src: avosilkCart.url, cap: "Cart — influencer code at checkout" },
      { src: avosilkStoryCode.url, cap: "Story insights — @avo_silk code" },
      { src: avosilkStoryReach.url, cap: "Story insights — 27.4K reach" },
      { src: avosilkVetting.url, cap: "Live creator vetting sheet — scored before outreach", wide: true },
      {
        src: avosilkHighlights.url,
        cap: "Creator highlights reel — up to 33.9K views per cover",
        wide: true,
      },
    ],
  },
];

export const creatorGalleries = [
  {
    brand: "Jewlera — jewelry, DTC",
    items: [
      { src: creator1.url, cap: "@samkkirkland — collab post" },
      { src: creator2.url, cap: '@jacquie.lm — "Jade" necklace, code collab' },
      { src: creator3.url, cap: "@aurora.cellii — gifted pearl necklace" },
      { src: creator4.url, cap: "@bettydupe — BOGO code collab" },
      { src: creator5.url, cap: "@claudiaaguzzo — layered necklace collab" },
      { src: creator6.url, cap: "@stellacini — pearl necklace feature" },
      { src: creator7.url, cap: "@dandrasimmons — bracelet feature" },
      { src: jewleraStorefront.url, cap: "jewlera.com — live storefront" },
    ],
  },
  {
    brand: "Poochycat & Porlarisa",
    items: [
      { src: poochycatCollab.url, cap: "@thecomedycat collab — video frame" },
      { src: porlarisaFeature.url, cap: "Porlarisa — self-run campaign feature" },
    ],
  },
];

export const timeline = [
  {
    date: "2024 — Present",
    title: "V Cut Gym",
    role: "Co-Founder & Social Media Manager · Fitness & Wellness",
    body: "Owns content strategy, organic growth and community engagement for a local gym brand, applying e-commerce growth playbooks to a service business.",
  },
  {
    date: "2024",
    title: "Decogal",
    role: "Marketing Manager · Home Decor E-Commerce",
    body: "End-to-end digital strategy, content calendar and Meta Ads budget — 4x ROAS, 20% less wasted spend, 25% faster campaign planning.",
  },
  {
    date: "2022 — 2024",
    title: "Freelance Marketing Consultant & Shopify Store Designer",
    role: "Self-Employed · Egypt & Saudi Arabia Clients",
    body: "Embedded marketing lead for 2 international e-commerce clients — Shopify builds, full-funnel strategy, and an influencer channel that drove 50%+ of total client sales.",
  },
  {
    date: "2019 — 2023",
    title: "Furry Fiesta Family · Jewlera · Poochycat",
    role: "E-Commerce Store Owner & Operator · Shopify",
    body: "Solo-ran 3 Shopify stores across pet and jewelry niches — product testing, Meta Ads to 4x ROAS on top campaigns, a 100+ creator database, and TikTok organic/SEO for ad-free traffic.",
  },
  {
    date: "2018 — 2020",
    title: "Affiliate Marketer",
    role: "Self-Directed · Multiple Niches",
    body: "Built foundational skills in traffic generation, offer selection and conversion optimization — the base for everything after.",
  },
  {
    date: "Education & Training",
    title: "Cairo University · IMP Institute · Mindshift · Seif Mahmoud",
    role: "Construction Engineering Management (2018–2023) · Digital Marketing Certificate (2023–2024)",
    body: "Plus advanced media-buying training (Mindshift) and 1-on-1 influencer strategy coaching (Seif Mahmoud).",
  },
];

export const tools = [
  "Shopify",
  "Meta Ads Manager",
  "TikTok Ads Manager",
  "Google Ads",
  "Google Analytics",
  "Google Search Console",
  "Meta Pixel & CAPI",
  "Upfluence",
  "Klaviyo-style email flows",
  "Canva",
  "Excel / Sheets",
];
