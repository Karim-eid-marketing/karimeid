import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  cases,
  contact,
  creatorGalleries,
  ecomKpis,
  ecomStack,
  engagementSteps,
  heroStats,
  media,
  mediaBuyingSteps,
  platformBreakdown,
  seoPillars,
  skills,
  tickerItems,
  timeline,
  tools,
} from "./data";

/* ---------------- primitives ---------------- */

function Wrap({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-6 md:px-8 ${className}`}>{children}</div>;
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="eyebrow flex items-center gap-2">
      <span className="inline-block h-px w-6 bg-signal" />
      {children}
    </div>
  );
}

function SectionHead({
  eyebrow,
  title,
  lede,
  paper = false,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: string;
  paper?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2
        className={`mt-4 font-display text-3xl leading-[1.08] font-bold tracking-tight md:text-[44px] ${
          paper ? "text-paper-foreground" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {lede ? (
        <p className={`mt-4 text-base ${paper ? "text-paper-muted" : "text-muted-foreground"}`}>
          {lede}
        </p>
      ) : null}
    </div>
  );
}

function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "-40px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
      className={shown ? "reveal-up" : "opacity-0"}
    >
      {children}
    </div>
  );
}

function Shot({ src, cap, wide }: { src: string; cap: string; wide?: boolean }) {
  return (
    <figure
      className={`group overflow-hidden border border-border bg-ink-2 ${wide ? "sm:col-span-2" : ""}`}
    >
      <img
        src={src}
        alt={cap}
        loading="lazy"
        className="w-full object-contain transition duration-500 group-hover:scale-[1.02]"
      />
      <figcaption className="border-t border-border px-3 py-2 font-mono text-[11px] text-muted-foreground">
        {cap}
      </figcaption>
    </figure>
  );
}

/* ---------------- sections ---------------- */

export function Ticker() {
  const row = [...tickerItems, ...tickerItems];
  return (
    <div className="overflow-hidden border-b border-border bg-[oklch(0.16_0.012_268)]">
      <div className="marquee-track h-10 items-center whitespace-nowrap">
        {row.map(([label, val, dir], i) => (
          <span
            key={`${label}-${i}`}
            className="inline-flex items-center gap-2 border-r border-border px-5 font-mono text-[11px] tracking-wide text-muted-foreground"
          >
            {label} <b className="font-semibold text-foreground">{val}</b>
            <span className={dir === "up" ? "text-signal" : "text-destructive"}>
              {dir === "up" ? "▲" : "▼"}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

const navLinks = [
  ["#intro", "Intro"],
  ["#skills", "Skills"],
  ["#paid", "Paid Media"],
  ["#seo", "SEO"],
  ["#ecommerce", "E-Commerce"],
  ["#work", "Work"],
  ["#proof", "Creator Proof"],
  ["#experience", "Experience"],
];

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-lg">
      <Wrap className="flex h-16 items-center justify-between gap-6">
        <a href="#top" className="font-display text-lg font-bold tracking-tight">
          KARIM EID<span className="text-signal">.</span>
        </a>
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="font-mono text-[11px] tracking-wider text-muted-foreground uppercase transition-colors hover:text-signal"
            >
              {label}
            </a>
          ))}
        </div>
        <a
          href={`mailto:${contact.email}`}
          className="border border-signal px-4 py-2 font-mono text-[11px] tracking-wider text-signal uppercase transition-colors hover:bg-signal hover:text-primary-foreground"
        >
          Hire Karim
        </a>
      </Wrap>
    </nav>
  );
}

export function Hero() {
  return (
    <header id="top" className="hero-aura relative overflow-hidden border-b border-border">
      <div className="hairline-grid pointer-events-none absolute inset-0 opacity-[0.35]" />
      <Wrap className="relative py-16 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.35fr_1fr]">
          <div>
            <Eyebrow>Performance &amp; Influencer Marketing · 6+ Years</Eyebrow>
            <h1 className="mt-5 font-display text-4xl leading-[1.03] font-bold tracking-tight md:text-6xl">
              I turn ad spend and creator relationships into{" "}
              <em className="text-signal not-italic">repeatable revenue.</em>
            </h1>
            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
              Performance and influencer marketing specialist for Shopify-based DTC brands — Meta,
              TikTok &amp; Google Ads, creator partnerships, UGC, SEO, email/outreach systems and
              storefront design, run as one connected growth system instead of five separate hires.
              Based in Egypt, working with clients across Egypt, Saudi Arabia and beyond. Bilingual —
              Arabic &amp; English.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${contact.email}`}
                className="bg-signal px-5 py-3 font-mono text-xs tracking-wider text-primary-foreground uppercase shadow-[var(--shadow-signal)] transition-transform hover:-translate-y-0.5"
              >
                Start a project →
              </a>
              <a
                href="#work"
                className="border border-border px-5 py-3 font-mono text-xs tracking-wider uppercase transition-colors hover:border-signal hover:text-signal"
              >
                See the case studies
              </a>
              <a
                href={contact.phoneHref}
                className="border border-border px-5 py-3 font-mono text-xs tracking-wider uppercase transition-colors hover:border-signal hover:text-signal"
              >
                {contact.phone}
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 bg-[var(--grad-signal)] opacity-15 blur-2xl" />
            <img
              src={media.headshot}
              alt="Karim Eid, performance and influencer marketing specialist"
              className="relative w-full border border-border object-cover shadow-[var(--shadow-lift)]"
            />
            <div className="relative -mt-px flex items-center justify-between border border-t-0 border-border bg-ink-2 px-4 py-3 font-mono text-[11px] text-muted-foreground">
              <span>KARIM EID · CAIRO, EG</span>
              <span className="flex items-center gap-2 text-signal">
                <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-signal" />
                OPEN TO WORK
              </span>
            </div>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-px border border-border bg-border md:grid-cols-3 lg:grid-cols-6">
          {heroStats.map((s) => (
            <div key={s.lbl} className="bg-background px-5 py-6">
              <div className="font-display text-3xl font-bold tracking-tight text-signal">
                {s.num}
              </div>
              <div className="mt-2 font-mono text-[11px] tracking-wide text-muted-foreground uppercase">
                {s.lbl}
              </div>
            </div>
          ))}
        </div>
      </Wrap>
    </header>
  );
}

export function Intro() {
  return (
    <section id="intro" className="border-b border-border py-20">
      <Wrap className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div>
          <SectionHead
            eyebrow="Meet Karim"
            title="60 seconds, straight from me."
            lede="Who I am, what I do, and why I'd be a good fit for your brand — no script, just the short version."
          />
        </div>
        <div className="mx-auto w-full max-w-xs border border-border bg-ink-2 p-1.5 shadow-[var(--shadow-lift)] sm:max-w-sm">
          <video
            src={media.introVideo}
            controls
            playsInline
            preload="metadata"
            className="max-h-[520px] w-full object-contain"
          />
        </div>
      </Wrap>

      <Wrap className="mt-16">
        <SectionHead
          eyebrow="Ad creatives"
          title="Meta ad creatives we produced"
          lede="These are live ad creatives we ran on Meta — built through our creator collabs, from concept and briefing to shooting, editing and testing them as scroll-stopping paid assets."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {media.adCreatives.map((src, i) => (
            <div key={src} className="border border-border bg-ink-2 p-2 shadow-[var(--shadow-lift)]">
              <video
                src={src}
                controls
                playsInline
                muted
                preload="metadata"
                className="aspect-[9/16] w-full object-cover"
              />
              <div className="px-1 pb-1 pt-2 font-mono text-[11px] text-signal-dim">
                Creative {String(i + 1).padStart(2, "0")} · Meta · creator collab
              </div>
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  );
}


export function Skills() {
  return (
    <section id="skills" className="bg-paper py-20 text-paper-foreground">
      <Wrap>
        <SectionHead
          paper
          eyebrow="What I run"
          title="Eight disciplines, one growth loop"
          lede="Every brand below got the same thing: paid media, creators, SEO and content feeding the same calendar and the same storefront — not three agencies working from three different briefs."
        />
        <div className="mt-12 grid gap-px border border-paper-border bg-paper-border sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s) => (
            <div key={s.n} className="group bg-paper p-6 transition-colors hover:bg-[oklch(0.92_0.016_85)]">
              <div className="font-mono text-[11px] text-signal-dim">{s.n}</div>
              <h3 className="mt-3 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-paper-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  );
}

export function PaidMedia() {
  return (
    <section id="paid" className="border-b border-border py-20">
      <Wrap>
        <SectionHead
          eyebrow="Paid media expertise"
          title="An 8-step media buying process, not a boosted post"
          lede="Meta, TikTok and Google Ads run the same way every time: margin first, research second, creative third — and budget only moves on evidence."
        />

        <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {mediaBuyingSteps.map((s, i) => (
            <Reveal key={s.n} delay={i * 40}>
              <div className="h-full bg-background p-6 transition-colors hover:bg-ink-2">
                <div className="font-mono text-[11px] text-signal">{s.n}</div>
                <h3 className="mt-3 font-display text-base font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {platformBreakdown.map((p) => (
            <div key={p.platform} className="surface-ink p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-xl font-semibold">{p.platform}</h3>
                <span className="font-mono text-[11px] tracking-wide text-signal uppercase">
                  {p.focus}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.metrics.map((m) => (
                  <span
                    key={m}
                    className="border border-border px-2.5 py-1 font-mono text-[10.5px] tracking-wide text-muted-foreground uppercase"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  );
}

export function Seo() {
  return (
    <section id="seo" className="bg-paper py-20 text-paper-foreground">
      <Wrap>
        <SectionHead
          paper
          eyebrow="SEO & organic discovery"
          title="Traffic that keeps arriving after the ads are paused"
          lede="Search and social SEO are planned inside the same marketing calendar as paid — documented as an action plan with owners, priorities and measurable outcomes."
        />
        <div className="mt-12 grid gap-px border border-paper-border bg-paper-border md:grid-cols-2 lg:grid-cols-3">
          {seoPillars.map((p, i) => (
            <div key={p.t} className="bg-paper p-6">
              <div className="font-mono text-[11px] text-signal-dim">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-3 font-display text-lg font-semibold">{p.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-paper-muted">{p.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-3xl border-l-2 border-signal pl-4 text-sm text-paper-muted">
          Across my own Shopify stores, TikTok organic and social-search strategy drove qualified
          traffic with zero ad spend — the same organic-first approach later applied to client
          brands.
        </p>
      </Wrap>
    </section>
  );
}

export function Ecommerce() {
  return (
    <section id="ecommerce" className="border-b border-border py-20">
      <Wrap>
        <SectionHead
          eyebrow="E-commerce operating system"
          title="I've owned the P&amp;L, not just the ad account"
          lede="Three of my own Shopify stores, plus builds and growth for clients in Egypt and Saudi Arabia — product research to fulfilment, priced for profit before a single ad runs."
        />
        <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {ecomStack.map((s) => (
            <div key={s.t} className="bg-background p-6 transition-colors hover:bg-ink-2">
              <h3 className="font-display text-lg font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          {ecomKpis.map((k) => (
            <div key={k.k} className="surface-ink px-4 py-3">
              <div className="font-display text-sm font-semibold text-signal">{k.k}</div>
              <div className="font-mono text-[10.5px] tracking-wide text-muted-foreground uppercase">
                {k.v}
              </div>
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  );
}

export function Work() {
  return (
    <section id="work" className="border-b border-border py-20">
      <Wrap>
        <SectionHead
          eyebrow="Case studies"
          title="Three brands, three growth engines"
          lede="Real screenshots below are cropped for readability; customer names and creator contact details are redacted for privacy. Nothing is staged."
        />

        <div className="mt-12 space-y-10">
          {cases.map((c) => (
            <Reveal key={c.id}>
              <article className="surface-ink">
                <div className="flex flex-wrap items-start justify-between gap-4 border-b border-border p-6">
                  <div>
                    <div className="font-mono text-[11px] tracking-wide text-signal uppercase">
                      {c.tag}
                    </div>
                    <h3 className="mt-2 font-display text-3xl font-bold tracking-tight">{c.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {c.pills.map((p) => (
                      <span
                        key={p}
                        className="border border-border px-3 py-1.5 font-mono text-[10.5px] tracking-wide text-muted-foreground uppercase"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid gap-8 p-6 lg:grid-cols-[1fr_1.05fr]">
                  <div>
                    {c.paras.map((p) => (
                      <p key={p} className="mb-4 text-[15px] leading-relaxed text-muted-foreground">
                        {p}
                      </p>
                    ))}

                    <ul className="my-6 space-y-3">
                      {c.list.map((l) => (
                        <li key={l.b} className="flex gap-3">
                          <span className="mt-0.5 shrink-0 border border-signal/40 px-2 py-1 font-mono text-[11px] text-signal">
                            {l.b}
                          </span>
                          <span className="text-sm leading-relaxed text-muted-foreground">
                            <strong className="text-foreground">{l.strong}</strong> {l.text}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="grid gap-px border border-border bg-border sm:grid-cols-3">
                      {c.stats.map((s) => (
                        <div key={s.lbl} className="bg-background p-4">
                          <div className="font-display text-2xl font-bold text-signal">{s.num}</div>
                          <div className="mt-1 font-mono text-[10.5px] tracking-wide text-muted-foreground uppercase">
                            {s.lbl}
                          </div>
                        </div>
                      ))}
                    </div>

                    {"table" in c && c.table ? (
                      <div className="mt-6 overflow-x-auto border border-border">
                        <table className="w-full border-collapse text-left text-sm">
                          <thead>
                            <tr className="bg-ink-3">
                              {c.table.head.map((h) => (
                                <th
                                  key={h}
                                  className="px-3 py-2 font-mono text-[10.5px] tracking-wide text-muted-foreground uppercase"
                                >
                                  {h}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {c.table.rows.map((r) => (
                              <tr key={r[0]} className="border-t border-border">
                                {r.map((cell, ci) => (
                                  <td
                                    key={cell + ci}
                                    className={`px-3 py-2 ${
                                      ci === r.length - 1
                                        ? "font-mono text-signal"
                                        : "text-muted-foreground"
                                    }`}
                                  >
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : null}
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {c.shots.map((s) => (
                      <Shot key={s.cap} src={s.src} cap={s.cap} wide={"wide" in s && s.wide} />
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Wrap>
    </section>
  );
}

export function CreatorProof() {
  return (
    <section id="proof" className="bg-paper py-20 text-paper-foreground">
      <Wrap>
        <SectionHead
          paper
          eyebrow="Creator proof"
          title="Real collabs, not a highlight reel"
          lede="These are brands I built and scaled myself — Jewlera, Poochycat and Porlarisa. I scaled each one using Meta Ads, collaborated with over 10 macro and big influencers, designed the web storefronts, created the packaging, and ran the e-commerce operations end to end. Everything below is the influencer-network side of that engine."
        />
        {creatorGalleries.map((g) => (
          <div key={g.brand} className="mt-12">
            <div className="mb-4 border-b border-paper-border pb-2 font-mono text-[11px] tracking-wider text-paper-muted uppercase">
              {g.brand}
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {g.items.map((it) => (
                <figure key={it.cap} className="group border border-paper-border bg-paper">
                  <div className="overflow-hidden">
                    <img
                      src={it.src}
                      alt={it.cap}
                      loading="lazy"
                      className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  <figcaption className="border-t border-paper-border px-3 py-2 font-mono text-[10.5px] text-paper-muted">
                    {it.cap}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        ))}
      </Wrap>
    </section>
  );
}

export function Now() {
  return (
    <section id="now" className="border-b border-border py-20">
      <Wrap>
        <SectionHead eyebrow="Right now" title="Currently building" />
        <div className="mt-10 flex gap-4 surface-ink p-6">
          <span className="mt-2 h-3 w-3 shrink-0 animate-pulse rounded-full bg-signal" />
          <div>
            <h3 className="font-display text-2xl font-semibold">
              V Cut Gym — Co-Founder &amp; Social Media Manager
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Co-founded a fitness brand and have owned its social presence and content strategy
              since 2024 — building brand identity and audience engagement from the ground up.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Applying performance and influencer marketing experience from e-commerce to a local,
              service-based brand: content calendar, organic growth, creator partnerships and
              UGC-style content aimed at membership growth.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Content Creation", "Social Media Management", "Community Growth", "2024 — Present"].map(
                (t) => (
                  <span
                    key={t}
                    className="border border-border px-2.5 py-1 font-mono text-[10.5px] tracking-wide text-muted-foreground uppercase"
                  >
                    {t}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </Wrap>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="bg-paper py-20 text-paper-foreground">
      <Wrap>
        <SectionHead
          paper
          eyebrow="Track record"
          title="Six years, three storefronts, one thread"
          lede="From running three of my own Shopify stores solo to managing paid media and influencer budgets for other brands."
        />
        <div className="mt-12 ml-1.5 border-l border-paper-border">
          {timeline.map((t) => (
            <div key={t.title} className="relative pb-11 pl-8">
              <span className="absolute top-1 -left-[6px] h-3 w-3 rounded-full border-2 border-signal-dim bg-paper" />
              <div className="font-mono text-[11px] tracking-wider text-signal-dim uppercase">
                {t.date}
              </div>
              <h4 className="mt-2 font-display text-xl font-semibold">{t.title}</h4>
              <div className="mt-1 text-[13.5px] text-paper-muted">{t.role}</div>
              <p className="mt-2 max-w-2xl text-[14.5px] leading-relaxed text-paper-muted">
                {t.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Eyebrow>Tools</Eyebrow>
          <h3 className="mt-3 font-display text-2xl font-semibold">Platforms &amp; software</h3>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {tools.map((t) => (
              <span
                key={t}
                className="border border-paper-border px-3.5 py-2 font-mono text-xs text-paper-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </Wrap>
    </section>
  );
}

export function HowIWork() {
  return (
    <section id="process" className="border-b border-border py-20">
      <Wrap>
        <SectionHead
          eyebrow="How we'd work together"
          title="From audit to scale in four moves"
          lede="Whether it's a full-time role or a retainer, the first 30 days look the same — diagnose the leaks, then build the system."
        />
        <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {engagementSteps.map((s) => (
            <div key={s.n} className="bg-background p-6">
              <div className="font-mono text-[11px] text-signal">{s.n}</div>
              <h3 className="mt-3 font-display text-lg font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="hero-aura border-t border-border pt-20 pb-10">
      <Wrap>
        <Eyebrow>Let's talk</Eyebrow>
        <h2 className="mt-5 max-w-3xl font-display text-3xl leading-[1.08] font-bold tracking-tight md:text-5xl">
          Have a Shopify brand that needs{" "}
          <em className="text-signal not-italic">
            paid, creators, SEO and content pulling the same direction?
          </em>
        </h2>
        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href={`mailto:${contact.email}`}
            className="bg-signal px-5 py-3 font-mono text-xs tracking-wider text-primary-foreground uppercase transition-transform hover:-translate-y-0.5"
          >
            Email Karim
          </a>
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noopener"
            className="border border-border px-5 py-3 font-mono text-xs tracking-wider uppercase transition-colors hover:border-signal hover:text-signal"
          >
            WhatsApp
          </a>
        </div>

        <div className="mt-12 grid gap-8 border-t border-border pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Email", contact.email, `mailto:${contact.email}`],
            ["Phone", contact.phone, contact.phoneHref],
            ["LinkedIn", "linkedin.com/in/karim-3eed", contact.linkedin],
            ["Based in", contact.location, ""],
          ].map(([lbl, val, href]) => (
            <div key={lbl}>
              <div className="font-mono text-[11px] tracking-wider text-muted-foreground uppercase">
                {lbl}
              </div>
              {href ? (
                <a
                  href={href}
                  className="mt-2 inline-block border-b border-border pb-0.5 text-[15px] transition-colors hover:border-signal hover:text-signal"
                >
                  {val}
                </a>
              ) : (
                <div className="mt-2 text-[15px] text-muted-foreground">{val}</div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-8 font-mono text-[11px] text-muted-foreground">
          <p>© {new Date().getFullYear()} Karim Eid — Performance &amp; Influencer Marketing</p>
          <p>Cairo · Riyadh · Remote — Arabic &amp; English</p>
        </div>
      </Wrap>
    </footer>
  );
}
