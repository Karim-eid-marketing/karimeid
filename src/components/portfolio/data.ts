import headshot from "@/assets/karim-headshot.jpg.asset.json";
import introVideo from "@/assets/intro.mp4.asset.json";

import decogalSeoPlan from "@/assets/decogal-seo-plan.jpg.asset.json";
import decogalPostingSchedule from "@/assets/decogal-posting-schedule.jpg.asset.json";
import decogalTimeline from "@/assets/decogal-timeline.jpg.asset.json";
import decogalStrategyDoc from "@/assets/decogal-strategy-doc.jpg.asset.json";
import decogalAdsBudget from "@/assets/decogal-ads-budget.jpg.asset.json";
import decogalAdsTargeting from "@/assets/decogal-ads-targeting.jpg.asset.json";

import cuzymartPricing from "@/assets/cuzymart-pricing.jpg.asset.json";
import cuzymartOrders from "@/assets/cuzymart-orders.jpg.asset.json";
import cuzymartCatalog from "@/assets/cuzymart-catalog.jpg.asset.json";
import cuzymartAdspy from "@/assets/cuzymart-adspy.jpg.asset.json";
import cuzymartRevenue from "@/assets/cuzymart-revenue.jpg.asset.json";
import cuzymartUgc1 from "@/assets/cuzymart-ugc-1.jpg.asset.json";
import cuzymartUgc2 from "@/assets/cuzymart-ugc-2.jpg.asset.json";
import cuzymartOutreach from "@/assets/cuzymart-outreach.jpg.asset.json";

import avosilkStyling from "@/assets/avosilk-styling.jpg.asset.json";
import avosilkStoryCode from "@/assets/avosilk-story-code.jpg.asset.json";
import avosilkStoryReach from "@/assets/avosilk-story-reach.jpg.asset.json";
import avosilkVetting from "@/assets/avosilk-vetting.jpg.asset.json";

import creator1 from "@/assets/creator-1.jpg.asset.json";
import creator2 from "@/assets/creator-2.jpg.asset.json";
import creator3 from "@/assets/creator-3.jpg.asset.json";
import creator4 from "@/assets/creator-4.jpg.asset.json";
import creator5 from "@/assets/creator-5.jpg.asset.json";
import creator6 from "@/assets/creator-6.jpg.asset.json";
import creator7 from "@/assets/creator-7.jpg.asset.json";
import jewleraStorefront from "@/assets/jewlera-storefront.jpg.asset.json";
import jewleraStella from "@/assets/jewlera-stella.jpg.asset.json";
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
  location: "Cairo, Egypt",
};

export const tickerItems: Array<[string, string, "up" | "down"]> = [
  ["AVG. ROAS", "4x", "up"],
  ["ORGANIC GROWTH, V CUT", "+200%", "up"],
  ["CREATOR NETWORK", "100+", "up"],
  ["FIRST-MONTH SALES, DECOGAL", "+30%", "up"],
  ["AD BUDGET MANAGED", "EGP 100K", "up"],
  ["SHOPIFY STORES", "3+", "up"],
  ["CREATOR-DRIVEN SALES", "50%+", "up"],
  ["BRAND VALUE LIFT, V CUT", "1.5x", "up"],
];

export const heroStats = [
  { num: "4x", lbl: "Avg. ROAS" },
  { num: "+200%", lbl: "Organic growth, V Cut" },
  { num: "100+", lbl: "Creators network" },
  { num: "+30%", lbl: "First-month sales, Decogal" },
  { num: "EGP 100K", lbl: "Ad budget managed" },
];

export const heroBadges = [
  "4x ROAS",
  "100+ creators",
  "200% organic growth",
  "30% first-month sales",
  "50%+ creator-driven sales",
];

export const heroChips = [
  "Influencer Marketing",
  "Paid Media",
  "Meta Ads",
  "Shopify",
  "CRO",
  "SEO",
  "Social Media",
];

export const skills = [
  { n: "01", title: "Influencer Marketing", body: "Sourcing, vetting, outreach, negotiation and ROI tracking across a 100+ creator network." },
  { n: "02", title: "Paid Media", body: "Meta, TikTok & Google Ads — targeting, creative testing and optimization toward ROAS and CAC." },
  { n: "03", title: "Social Media", body: "Content calendars, organic growth and community management. +200% organic presence at V Cut." },
  { n: "04", title: "E-Commerce", body: "Shopify end-to-end — product research, pricing, store design, CRO and fulfilment. 3+ stores built." },
  { n: "05", title: "SEO", body: "On-site and social-SEO action plans built into the marketing calendar." },
  { n: "06", title: "Email & Outreach", body: "Merge-email creator outreach tracked through Opened / Clicked / Responded / Bounced." },
];

/* ---------- Case studies (real screenshots kept) ---------- */
export const cases = [
  {
    id: "decogal",
    tag: "Decogal · Full-time Marketing Manager · 2024",
    name: "Decogal",
    pills: ["Home Decor · Egypt", "Meta Ads", "SEO", "Social Media"],
    challenge: "Joined as the dedicated marketing hire with no existing function — needed to build the strategy and deliver results fast.",
    actions: [
      "Built the marketing function from scratch: strategy, content calendar and paid media.",
      "Managed a 100K EGP budget across Meta Ads, social, and influencer marketing.",
      "Created a viral organic video that significantly increased brand reach.",
      "Documented an on-site SEO action plan alongside the paid and organic calendar.",
    ],
    stats: [
      { num: "+30%", lbl: "Sales increase, first month" },
      { num: "EGP 100K", lbl: "Marketing budget managed" },
      { num: "3", lbl: "Channels owned (paid, organic, influencer)" },
    ],
    shots: [
      { src: decogalAdsBudget.url, cap: "Live campaign — $150/day website-conversions build", wide: true },
      { src: decogalAdsTargeting.url, cap: "Ad set targeting — Beauty & Fashion / Women's Lifestyle, 99M+ reach", wide: true },
      { src: decogalSeoPlan.url, cap: "SEO action plan" },
      { src: decogalPostingSchedule.url, cap: "Posting schedule" },
      { src: decogalTimeline.url, cap: "Marketing plan timeline — 2024" },
      { src: decogalStrategyDoc.url, cap: "Marketing strategy document", wide: true },
    ],
    takeaway: "Joining as the dedicated marketing hire and owning the full plan let paid, organic and influencer work pull in the same direction from day one.",
  },
  {
    id: "cuzymart",
    tag: "CuzyMart · Influencer & Growth Marketing · 2024",
    name: "CuzyMart",
    pills: ["Wooden Toys · Saudi-Based", "Shopify · DTC", "Meta Ads + Influencer"],
    challenge: "A new Saudi-based toy catalogue with 30+ SKUs and no proven winners — budget could not be spread evenly.",
    actions: [
      "Ran competitor ad-spy and revenue estimates to find winning products and angles.",
      "Priced 17 SKUs against landed cost and fees (22–53% margin) — margin decided ad spend.",
      "Built a 100+ contact influencer outreach tracker and sourced UGC for paid and organic.",
      "Managed Meta Ads, splitting budget toward products above break-even ROAS.",
    ],
    stats: [
      { num: "$52K", lbl: "Net sales, FY2024" },
      { num: "50/50", lbl: "Influencer vs. Meta Ads revenue" },
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
      { src: cuzymartPricing.url, cap: "Shopify pricing & margin panel" },
      { src: cuzymartOrders.url, cap: "Live order flow — Shopify Orders" },
      { src: cuzymartCatalog.url, cap: "Product catalog — 8 of 30+ SKUs" },
      { src: cuzymartAdspy.url, cap: "Competitor ad-spy research" },
      { src: cuzymartRevenue.url, cap: "Competitor revenue estimates" },
      { src: cuzymartUgc1.url, cap: 'UGC ad creative — "Add with this"' },
      { src: cuzymartUgc2.url, cap: 'UGC ad creative — "Play Room Upgrade"' },
      { src: cuzymartOutreach.url, cap: "Influencer outreach tracker — 100+ contacts, redacted", wide: true },
    ],
    takeaway: "Margin data — not gut feel — decided which products got paid budget; the rest earned their place through creators and organic first.",
  },
  {
    id: "avosilk",
    tag: "Avosilk · Influencer Engine & E-Commerce Growth",
    name: "Avosilk",
    pills: ["Sleepwear · DTC", "Influencer Engine", "Shopify"],
    challenge: "A DTC sleepwear brand that needed reach and trust fast, without wasting product and budget on creators with inflated audiences.",
    actions: [
      "Ran a 4-check creator vetting system: female ratio, engagement rate, audit score, real-audience %.",
      "Seeded product and ran code-based collabs tracked to sales.",
      "Coordinated storefront, offer logic and product styling alongside the creator engine.",
    ],
    stats: [
      { num: "+30%", lbl: "Increase in sales" },
      { num: "27.4K", lbl: "Reach, single creator story" },
      { num: "770", lbl: "Sticker taps, single story" },
    ],
    shots: [
      { src: avosilkStyling.url, cap: "Product styling — sleep mask & pillowcase" },
      { src: avosilkStoryCode.url, cap: "Story insights — @avo_silk code" },
      { src: avosilkStoryReach.url, cap: "Story insights — 27.4K reach" },
      { src: avosilkVetting.url, cap: "Live creator vetting sheet — scored before outreach", wide: true },
    ],
    takeaway: "A four-check vetting model turns influencer spend from a gamble into a predictable acquisition channel.",
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
      { src: jewleraStella.url, cap: "jewlera.com — Stella Cini creator collection on the live storefront", wide: true },
    ],
  },
  {
    brand: "Poochycat & Porlarisa",
    items: [
      { src: poochycatCollab.url, cap: "@thecomedycat collab — video frame" },
      { src: porlarisaFeature.url, cap: "Porlarisa — campaign feature" },
    ],
  },
];

export const brandExperience = [
  {
    brand: "The V Cut",
    area: "Social Media & Influencer Marketing Manager",
    duration: "Jan 2025 — Present · Part-time",
    note: "Fitness & Wellness · Cairo, Egypt",
    worked: [
      "Social media strategy and organic content",
      "Community building and organic growth",
      "Influencer and creator collaborations for reach and UGC",
    ],
    results: [
      "Grew social media presence by 200% through organic content and strategy",
      "Engaged 100+ clients through community building and content marketing",
      "Increased brand value 1.5x and pricing power through social proof",
    ],
  },
  {
    brand: "Decogal Co",
    area: "E-Commerce & Performance Marketing Manager",
    duration: "Jul 2024 — Sep 2024 · Full-time",
    note: "Home Decor · Cairo, Egypt",
    worked: [
      "Built the marketing function from scratch as the dedicated hire",
      "Owned a 100K EGP budget across Meta Ads, social, and influencers",
      "Content calendar and viral organic video",
      "On-site SEO action plan",
    ],
    results: [
      "Increased sales by 30% in the first month",
      "Managed 100K EGP marketing budget across paid, social and influencer",
      "Created a viral organic video that increased brand reach and engagement",
    ],
  },
  {
    brand: "Multiple Global Clients (DTC E-Commerce)",
    area: "DTC E-Commerce & Influencer Marketing",
    duration: "Aug 2019 — Jan 2025 · Contract",
    note: "Shopify DTC · Egypt, KSA & international",
    worked: [
      "Launched and managed 3+ Shopify DTC stores — product research, branding, CRO",
      "Influencer campaigns across a 100+ creator network (outreach, UGC, partnerships)",
      "Meta Ads and performance marketing — up to 4x ROAS",
    ],
    results: [
      "Up to 4x ROAS through audience targeting, creative testing and optimization",
      "100+ creator network executed end-to-end influencer campaigns",
      "3+ Shopify DTC stores built and grown",
    ],
  },
  {
    brand: "E-Commerce Shopify Stores",
    area: "DTC & Influencer Marketing Manager",
    duration: "Mar 2019 — Feb 2024 · Self-employed",
    note: "Pet, Jewelry & Beauty niches · Remote",
    worked: [
      "Launched and operated multiple Shopify stores independently",
      "Built a 100+ creator network — outreach, negotiation, UGC, content briefs",
      "Ran Meta Ads and creative testing (ROAS, CTR, CPA, CPM, AOV, CVR)",
      "Tested TikTok organic and creator-led content for growth",
    ],
    results: [
      "3+ Shopify stores across pet, jewelry and beauty niches",
      "100+ creator network with tracked influencer campaigns",
      "Meta Ads optimized to up to 4x ROAS",
    ],
  },
  {
    brand: "Kickbooster",
    area: "Affiliate Marketer — Performance Marketing",
    duration: "Aug 2018 — Mar 2019 · Self-employed",
    note: "Affiliate marketing",
    worked: [
      "Traffic generation, offer selection and funnel building",
      "Organic content and paid traffic campaigns",
      "Copywriting, audience targeting and performance tracking",
    ],
    results: [
      "Generated sales through organic and paid traffic",
      "Built foundational skills in performance marketing",
      "Applied learnings into e-commerce and paid media work",
    ],
  },
];

export const influencerNumbers = [
  { num: "100+", lbl: "Creators sourced & vetted" },
  { num: "10+", lbl: "Macro / big collaborations" },
  { num: "50%+", lbl: "Share of sales via influencer channel" },
  { num: "27.4K", lbl: "Reach, single creator story" },
  { num: "4", lbl: "Vetting checks per creator" },
];

export const timeline = [
  {
    date: "Jan 2025 — Present",
    title: "The V Cut",
    role: "Social Media & Influencer Marketing Manager · Part-time",
    body: "Owns social media strategy, organic growth and community engagement. Grew social presence 200%, engaged 100+ clients, and lifted brand value 1.5x through organic content and social proof.",
  },
  {
    date: "Jul 2024 — Sep 2024",
    title: "Decogal Co",
    role: "E-Commerce & Performance Marketing Manager · Full-time",
    body: "Joined as the dedicated marketing hire and built the function from scratch. Increased sales 30% in the first month, managed a 100K EGP budget across Meta Ads, social and influencers, and created a viral organic video.",
  },
  {
    date: "Aug 2019 — Jan 2025",
    title: "Multiple Global Clients",
    role: "DTC E-Commerce & Influencer Marketing · Contract",
    body: "Launched and managed 3+ Shopify DTC stores, ran influencer campaigns across a 100+ creator network, and managed Meta Ads to up to 4x ROAS across Egypt, Saudi Arabia and international markets.",
  },
  {
    date: "Mar 2019 — Feb 2024",
    title: "Shopify DTC Stores",
    role: "DTC & Influencer Marketing Manager · Self-employed",
    body: "Operated multiple Shopify stores across pet, jewelry and beauty niches — product research, store design, Meta Ads, a 100+ creator network and TikTok organic/SEO.",
  },
  {
    date: "Aug 2018 — Mar 2019",
    title: "Kickbooster",
    role: "Affiliate Marketer — Performance Marketing · Self-employed",
    body: "Started in digital marketing through affiliate marketing — traffic generation, offer selection, funnel building and conversion fundamentals.",
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
  "Klaviyo",
  "Canva",
  "Excel / Sheets",
];

export const skillGroups = [
  { t: "Growth / Performance", items: ["Paid Media", "Meta Ads", "TikTok Ads", "Google Ads", "ROAS", "CAC / CPA", "A/B Testing", "Budget Allocation"] },
  { t: "Influencer & Creator", items: ["Creator Sourcing", "Outreach", "Vetting", "UGC", "Affiliate Marketing", "Creator ROI Tracking", "Negotiation"] },
  { t: "E-commerce", items: ["Shopify", "CRO", "Checkout Optimization", "Product Research", "DTC Strategy", "Margin Modelling"] },
  { t: "Content & Organic", items: ["Content Strategy", "Social Media", "Organic Growth", "Social SEO", "Email & Outreach"] },
  { t: "Analytics & Strategy", items: ["KPI Reporting", "Google Analytics", "Search Console", "Market Research", "Competitive Analysis", "GTM Strategy"] },
];

export const aboutParas = [
  "Influencer and creator marketing specialist with 6+ years of hands-on experience across DTC e-commerce brands — sourcing and vetting creators, running outreach and negotiation, and turning creator partnerships into tracked sales.",
  "Performance marketing across Meta, TikTok and Google Ads (up to 4x ROAS), plus Shopify CRO, SEO and social content — connecting creator campaigns to the rest of the funnel instead of running them in isolation.",
  "Looking to bring that experience into a full-time marketing team where I can own influencer and creator partnerships and support wider growth work day to day.",
];

export const faqs = [
  { q: "What role are you looking for?", a: "A full-time Influencer Marketing Manager or E-commerce Growth role where creator partnerships and performance marketing are core to the job." },
  { q: "What's your strongest area?", a: "Influencer and creator marketing: discovery, vetting, outreach, negotiation, UGC and tracking creator campaigns to sales. Paid media, Shopify CRO, SEO and social support that core." },
  { q: "How do you measure influencer campaigns?", a: "Per-creator discount codes and links, code redemptions, reach, sales share and cost per acquired customer — each creator judged on contribution, not follower count." },
  { q: "Which markets and languages?", a: "Egypt and Saudi Arabia natively, plus US and EU DTC audiences. Bilingual in Arabic and English, set up for async remote work." },
];
