import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  aboutParas,
  brandExperience,
  cases,
  contact,
  creatorGalleries,
  faqs,
  heroBadges,
  heroChips,
  heroStats,
  influencerNumbers,
  media,
  skillGroups,
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
        className={`mt-4 font-display text-3xl leading-[1.08] font-bold tracking-tight md:text-[40px] ${
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
  ["#top", "Home"],
  ["#work", "Work"],
  ["#experience", "Experience"],
  ["#skills", "Skills"],
  ["#about", "About"],
  ["#contact", "Contact"],
];

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-lg">
      <Wrap className="flex h-16 items-center justify-between gap-6">
        <a href="#top" className="font-display text-lg font-bold tracking-tight">
          KARIM EID<span className="text-signal">.</span>
        </a>
        <div className="hidden items-center gap-5 lg:flex">
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
          href={contact.linkedin}
          target="_blank"
          rel="noopener"
          className="border border-signal px-4 py-2 font-mono text-[11px] tracking-wider text-signal uppercase transition-colors hover:bg-signal hover:text-primary-foreground"
        >
          Connect on LinkedIn
        </a>
      </Wrap>
    </nav>
  );
}

export function Hero() {
  return (
    <header id="top" className="hero-aura relative overflow-hidden border-b border-border">
      <div className="hairline-grid pointer-events-none absolute inset-0 opacity-[0.35]" />
      <Wrap className="relative py-16 md:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.35fr_1fr]">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 border border-signal/50 bg-signal/10 px-3 py-1.5 font-mono text-[11px] tracking-wider text-signal uppercase">
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-signal" />
              Open to full-time opportunities
            </div>
            <h1 className="font-display text-4xl leading-[1.03] font-bold tracking-tight md:text-6xl">
              Karim Eid — Influencer Marketing Manager &{" "}
              <em className="text-signal not-italic">E-Commerce Growth</em>
            </h1>
            <p className="mt-4 font-mono text-[12px] tracking-wider text-signal uppercase">
              Influencer & Creator Marketing | Paid Media | Shopify | CRO
            </p>
            <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-muted-foreground">
              6+ years running influencer and performance marketing across DTC e-commerce brands — a
              100+ creator network driving 50%+ of sales, up to 4x ROAS on Meta Ads, and 200% organic
              growth. Cairo-based, bilingual (Arabic/English), open to full-time roles.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#work"
                className="bg-signal px-5 py-3 font-mono text-xs tracking-wider text-primary-foreground uppercase shadow-[var(--shadow-signal)] transition-transform hover:-translate-y-0.5"
              >
                View my work →
              </a>
              <a
                href="/Karim-Eid-Resume.pdf"
                download
                className="border border-border px-5 py-3 font-mono text-xs tracking-wider uppercase transition-colors hover:border-signal hover:text-signal"
              >
                Download resume
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener"
                className="border border-border px-5 py-3 font-mono text-xs tracking-wider uppercase transition-colors hover:border-signal hover:text-signal"
              >
                LinkedIn
              </a>
            </div>
            <div className="mt-7 flex flex-wrap gap-2">
              {heroBadges.map((t) => (
                <span
                  key={t}
                  className="border border-signal/40 bg-signal/5 px-3 py-1.5 font-mono text-[10.5px] tracking-wide text-signal uppercase"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {heroChips.map((t) => (
                <span
                  key={t}
                  className="border border-border px-2.5 py-1 font-mono text-[10px] tracking-wide text-muted-foreground uppercase"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 bg-[var(--grad-signal)] opacity-15 blur-2xl" />
            <img
              src={media.headshot}
              alt="Karim Eid, influencer marketing manager and e-commerce growth marketer"
              className="relative w-full border border-border object-cover shadow-[var(--shadow-lift)]"
            />
            <div className="relative -mt-px flex items-center justify-between border border-t-0 border-border bg-ink-2 px-4 py-3 font-mono text-[11px] text-muted-foreground">
              <span>KARIM EID · CAIRO, EG</span>
              <span className="flex items-center gap-2 text-signal">
                <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-signal" />
                OPEN TO FULL-TIME ROLES
              </span>
            </div>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-px border border-border bg-border md:grid-cols-3 lg:grid-cols-5">
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
            lede="Who I am, what I do, and why I'd be a good fit — no script, just the short version."
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
          title="Meta ad creatives from our creator collabs"
          lede="Live ad creatives we ran on Meta — built through creator collaborations, from briefing to testing as paid assets."
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

export function Work() {
  return (
    <section id="work" className="border-b border-border py-20">
      <Wrap>
        <SectionHead
          eyebrow="Selected work"
          title="Case studies: challenge, actions, results"
          lede="Marketing work I owned for e-commerce brands, with the real screenshots behind it. Customer names and creator contact details are redacted."
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
                    <div className="mb-5 border border-border p-4">
                      <div className="font-mono text-[10.5px] tracking-wider text-signal uppercase">
                        Challenge
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {c.challenge}
                      </p>
                    </div>

                    <div className="font-mono text-[10.5px] tracking-wider text-signal uppercase">
                      Actions
                    </div>
                    <ul className="my-4 space-y-3">
                      {c.actions.map((a, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="mt-0.5 shrink-0 border border-signal/40 px-2 py-1 font-mono text-[11px] text-signal">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="text-sm leading-relaxed text-muted-foreground">{a}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mb-2 font-mono text-[10.5px] tracking-wider text-signal uppercase">
                      Results
                    </div>
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

                    <div className="mt-6 border-l-2 border-signal bg-ink-2 p-4">
                      <div className="font-mono text-[10.5px] tracking-wider text-signal uppercase">
                        Key takeaway
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {c.takeaway}
                      </p>
                    </div>
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
          title="Real creator collaborations"
          lede="Creator campaigns I ran for Jewlera, Poochycat and Porlarisa — sourcing and vetting creators, negotiating collabs, briefing content and tracking results."
        />
        {creatorGalleries.map((g) => (
          <div key={g.brand} className="mt-12">
            <div className="mb-4 border-b border-paper-border pb-2 font-mono text-[11px] tracking-wider text-paper-muted uppercase">
              {g.brand}
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {g.items.map((it) => (
                <figure
                  key={it.cap}
                  className={`group border border-paper-border bg-paper ${
                    "wide" in it && (it as { wide?: boolean }).wide ? "sm:col-span-2" : ""
                  }`}
                >
                  <div className="overflow-hidden">
                    <img
                      src={it.src}
                      alt={it.cap}
                      loading="lazy"
                      className="w-full object-contain transition duration-500 group-hover:scale-[1.02]"
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

export function BrandExperience() {
  return (
    <section id="brands" className="border-b border-border py-20">
      <Wrap>
        <SectionHead
          eyebrow="Brand experience"
          title="Companies & brands I've worked with"
          lede="Where I've worked, my role, and the results — aligned to the work I owned at each company."
        />
        <div className="mt-12 grid gap-px border border-border bg-border lg:grid-cols-2">
          {brandExperience.map((b, i) => (
            <Reveal key={b.brand} delay={(i % 2) * 60}>
              <article className="h-full bg-background p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-border pb-4">
                  <h3 className="font-display text-2xl font-bold tracking-tight">{b.brand}</h3>
                  <span className="font-mono text-[10.5px] tracking-wide text-muted-foreground uppercase">
                    {b.note}
                  </span>
                </div>
                <div className="mt-4 font-mono text-[11px] tracking-wider text-signal uppercase">
                  {b.area}
                </div>
                <div className="mt-1 font-mono text-[11px] tracking-wider text-muted-foreground uppercase">
                  {b.duration}
                </div>

                <ul className="mt-5 space-y-1.5">
                  {b.worked.map((w) => (
                    <li key={w} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                      <span className="text-signal">·</span>
                      {w}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 font-mono text-[10.5px] tracking-wider text-foreground uppercase">
                  Results
                </div>
                <ul className="mt-2 space-y-1.5">
                  {b.results.map((r) => (
                    <li key={r} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                      <span className="text-signal">→</span>
                      {r}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Wrap>
    </section>
  );
}

export function InfluencerExperience() {
  return (
    <section id="influencer" className="bg-paper py-20 text-paper-foreground">
      <Wrap>
        <SectionHead
          paper
          eyebrow="Core specialization"
          title="Influencer & Creator Marketing"
          lede="Finding the right creators, vetting them, negotiating the deal, running the campaign and connecting it to sales."
        />
        <div className="mt-10 grid grid-cols-2 gap-px border border-paper-border bg-paper-border md:grid-cols-3 lg:grid-cols-5">
          {influencerNumbers.map((n) => (
            <div key={n.lbl} className="bg-paper px-5 py-6">
              <div className="font-display text-3xl font-bold tracking-tight text-signal-dim">
                {n.num}
              </div>
              <div className="mt-2 font-mono text-[10.5px] tracking-wide text-paper-muted uppercase">
                {n.lbl}
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
    <section id="skills" className="border-b border-border py-20">
      <Wrap>
        <SectionHead
          eyebrow="Skills"
          title="What I bring to a growth team"
          lede="Hands-on across the full DTC growth loop — paid media, creators, storefront and content reported into one set of numbers."
        />
        <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g) => (
            <div key={g.t} className="bg-background p-6">
              <h3 className="font-display text-lg font-semibold">{g.t}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <li
                    key={i}
                    className="border border-border px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                  >
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s) => (
            <div key={s.n} className="group bg-background p-6 transition-colors hover:bg-ink-2">
              <div className="font-mono text-[11px] text-signal">{s.n}</div>
              <h3 className="mt-3 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
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
          eyebrow="Career timeline"
          title="Roles, companies and results"
          lede="Where I've worked, my role, and the results that came out of it."
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
          <h3 className="mt-3 font-display text-2xl font-semibold">Platforms & software</h3>
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

export function About() {
  return (
    <section id="about" className="border-b border-border py-20">
      <Wrap>
        <SectionHead eyebrow="About" title="Influencer marketing first, commercial thinking behind it" />
        <div className="mt-6 space-y-4">
          {aboutParas.map((p) => (
            <p key={p} className="text-[15px] leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
        </div>
      </Wrap>
    </section>
  );
}

export function Faq() {
  return (
    <section id="faq" className="border-b border-border py-20">
      <Wrap>
        <SectionHead
          eyebrow="FAQ"
          title="What hiring teams usually ask"
          lede="Straight answers on the role I'm looking for and how I measure work."
        />
        <div className="mt-12 space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="group surface-ink open:border-signal/40">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-display text-base font-semibold transition-colors hover:text-signal [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="shrink-0 font-mono text-lg text-signal transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="border-t border-border px-5 py-4 text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </p>
            </details>
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
        <Eyebrow>Contact</Eyebrow>
        <h2 className="mt-5 max-w-3xl font-display text-3xl leading-[1.08] font-bold tracking-tight md:text-5xl">
          Looking for a full-time marketer who can{" "}
          <em className="text-signal not-italic">own creators, paid media and e-commerce results?</em>
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
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener"
            className="border border-border px-5 py-3 font-mono text-xs tracking-wider uppercase transition-colors hover:border-signal hover:text-signal"
          >
            LinkedIn
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
          <p>© {new Date().getFullYear()} Karim Eid — Influencer Marketing Manager & E-Commerce Growth</p>
          <p>Cairo · Remote — Arabic & English</p>
        </div>
      </Wrap>
    </footer>
  );
}
