import { createFileRoute } from "@tanstack/react-router";
import {
  About,
  CreatorProof,
  Experience,
  Footer,
  Hero,
  Intro,
  Nav,
  Skills,
  Work,
} from "@/components/portfolio/sections";

const title = "Karim Eid — Influencer Marketing Manager";
const description =
  "Influencer Marketing Manager and e-commerce growth marketer with a 100+ creator network, up to 4x ROAS, and proven DTC results.";

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
          jobTitle: "Influencer Marketing Manager & E-Commerce Growth Marketer",
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
      <Nav />
      <main>
        <Hero />
        <Intro />
        <Work />
        <CreatorProof />
        <Experience />
        <Skills />
        <About />
      </main>
      <Footer />
    </div>
  );
}
