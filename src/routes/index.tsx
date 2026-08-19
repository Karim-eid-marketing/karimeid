import { createFileRoute } from "@tanstack/react-router";
import {
  CreatorProof,
  Ecommerce,
  Experience,
  Footer,
  Hero,
  HowIWork,
  Intro,
  Nav,
  Now,
  PaidMedia,
  Seo,
  Skills,
  Ticker,
  Work,
} from "@/components/portfolio/sections";

const title = "Karim Eid — Performance & Influencer Marketing for DTC Brands";
const description =
  "Performance and influencer marketing specialist: Meta, TikTok & Google Ads, SEO, Shopify e-commerce and a 100+ creator network. 4x avg. ROAS, 20% lower CAC.";

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
          jobTitle: "Performance & Influencer Marketing Specialist",
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
        <Skills />
        <PaidMedia />
        <Seo />
        <Ecommerce />
        <Work />
        <CreatorProof />
        <Now />
        <Experience />
        <HowIWork />
      </main>
      <Footer />
    </div>
  );
}
