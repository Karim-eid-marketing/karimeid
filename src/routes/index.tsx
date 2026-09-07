import { createFileRoute } from "@tanstack/react-router";
import {
  About,
  BrandExperience,
  ByTheNumbers,
  CreatorProof,
  Ecommerce,
  Experience,
  Faq,
  Footer,
  Hero,
  InfluencerExperience,
  Intro,
  Nav,
  Now,
  PaidMedia,
  Seo,
  Skills,
  Ticker,
  WhyMe,
  Work,
} from "@/components/portfolio/sections";

const title = "Karim Eid — Influencer & Creator Marketing Specialist | DTC Growth";
const description =
  "Influencer & creator marketing specialist and e-commerce/DTC growth marketer: 100+ creator network driving 50%+ of client sales, 4x avg ROAS, 20% lower CAC. Shopify, paid media, CRO.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Karim Eid",
          jobTitle: "Influencer & Creator Marketing Specialist | E-Commerce & DTC Growth Marketer",
          email: "mailto:karimeid.work@gmail.com",
          telephone: "+201113166392",
          url: "/",
          sameAs: ["https://linkedin.com/in/karim-3eed"],
          address: { "@type": "PostalAddress", addressLocality: "Cairo", addressCountry: "EG" },
          knowsAbout: [
            "Performance Marketing",
            "Influencer Marketing",
            "Meta Ads",
            "TikTok Ads",
            "Google Ads",
            "SEO",
            "Shopify",
            "E-Commerce Strategy",
          ],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Ticker />
      <Nav />
      <main>
        <Hero />
        <Intro />
        <ByTheNumbers />
        <BrandExperience />
        <InfluencerExperience />
        <Skills />
        <PaidMedia />
        <Seo />
        <Ecommerce />
        <Work />
        <CreatorProof />
        <WhyMe />
        <Now />
        <Experience />
        <About />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
