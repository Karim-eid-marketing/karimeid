import { useState, type ReactNode } from "react";
import {
  aboutParas,
  cases,
  contact,
  creatorGalleries,
  heroStats,
  media,
  skillGroups,
  timeline,
  tools,
} from "./data";

/* ---------------- primitives ---------------- */

function Wrap({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-3xl px-6 ${className}`}>{children}</div>;
}

function Head({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">{children}</h2>
  );
}

function Rule() {
  return <hr className="my-14 border-0 border-t border-border" />;
}

function Evidence({
  label,
  items,
}: {
  label: string;
  items: Array<{ src: string; cap: string }>;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-5">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="text-sm text-signal underline underline-offset-4 hover:opacity-80"
      >
        {open ? "Hide" : label} ({items.length})
      </button>
      {open ? (
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {items.map((it) => (
            <figure key={it.cap} className="border border-border bg-ink-2">
              <img src={it.src} alt={it.cap} loading="lazy" className="w-full object-contain" />
              <figcaption className="border-t border-border px-3 py-2 text-xs text-muted-foreground">
                {it.cap}
              </figcaption>
            </figure>
          ))}
        </div>
      ) : null}
    </div>
  );
}

/* ---------------- sections ---------------- */

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <Wrap className="flex h-14 items-center justify-between">
        <a href="#top" className="font-display text-sm font-semibold tracking-tight">
          Karim Eid
        </a>
        <div className="flex items-center gap-5 text-sm text-muted-foreground">
          <a href="#work" className="hover:text-foreground">
            Work
          </a>
          <a href="#experience" className="hover:text-foreground">
            Experience
          </a>
          <a href="#contact" className="hover:text-foreground">
            Contact
          </a>
        </div>
      </Wrap>
    </nav>
  );
}

export function Hero() {
  return (
    <header id="top" className="border-b border-border py-16">
      <Wrap>
        <div className="flex items-start gap-5">
          <img
            src={media.headshot}
            alt="Karim Eid"
            className="h-20 w-20 shrink-0 rounded-full object-cover"
          />
          <div>
            <h1 className="font-display text-3xl leading-tight font-bold tracking-tight md:text-4xl">
              Karim Eid
            </h1>
            <p className="mt-1 text-[15px] text-muted-foreground">
              Influencer Marketing Manager · E-commerce growth · Cairo, open to full-time roles
            </p>
          </div>
        </div>

        <p className="mt-8 text-[17px] leading-relaxed">
          I run creator partnerships and paid campaigns for e-commerce brands, and I stay close to the
          store itself — pricing, product pages, checkout. Six years of it, mostly Shopify.
        </p>

        <ul className="mt-7 flex flex-wrap gap-x-7 gap-y-2 text-sm text-muted-foreground">
          {heroStats.map((s) => (
            <li key={s.lbl}>
              <span className="font-display font-semibold text-foreground">{s.num}</span> {s.lbl}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-4 text-sm">
          <a href={`mailto:${contact.email}`} className="text-signal underline underline-offset-4">
            Email me
          </a>
          <a href="/Karim-Eid-Resume.pdf" download className="text-signal underline underline-offset-4">
            Resume (PDF)
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener"
            className="text-signal underline underline-offset-4"
          >
            LinkedIn
          </a>
        </div>
      </Wrap>
    </header>
  );
}

export function Intro() {
  return (
    <section className="pt-14">
      <Wrap>
        <Head>A quick hello</Head>
        <div className="mt-5 grid gap-6 sm:grid-cols-[minmax(0,220px)_1fr] sm:items-start">
          <video
            src={media.introVideo}
            controls
            playsInline
            preload="metadata"
            className="w-full border border-border"
          />
          <div>
            <p className="text-[15px] leading-relaxed text-muted-foreground">
              Below are three creator-made ads I briefed and ran on Meta.
            </p>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {media.adCreatives.map((src) => (
                <video
                  key={src}
                  src={src}
                  controls
                  playsInline
                  muted
                  preload="metadata"
                  className="aspect-[9/16] w-full border border-border object-cover"
                />
              ))}
            </div>
          </div>
        </div>
        <Rule />
      </Wrap>
    </section>
  );
}

export function Work() {
  return (
    <section id="work">
      <Wrap>
        <Head>Work</Head>
        <div className="mt-8 space-y-12">
          {cases.map((c) => (
            <article key={c.id}>
              <h3 className="font-display text-lg font-semibold">{c.name}</h3>
              <div className="mt-1 text-xs text-muted-foreground">{c.tag}</div>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{c.challenge}</p>
              <ul className="mt-3 space-y-1.5 text-[15px] leading-relaxed text-muted-foreground">
                {c.actions.map((a) => (
                  <li key={a} className="flex gap-2">
                    <span className="text-signal">—</span>
                    {a}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[15px]">
                {c.stats.map((s, i) => (
                  <span key={s.lbl}>
                    {i > 0 ? <span className="text-muted-foreground"> · </span> : null}
                    <span className="font-display font-semibold text-signal">{s.num}</span>{" "}
                    <span className="text-muted-foreground">{s.lbl.toLowerCase()}</span>
                  </span>
                ))}
              </p>
              <Evidence label="Show screenshots" items={c.shots} />
            </article>
          ))}
        </div>
        <Rule />
      </Wrap>
    </section>
  );
}

export function CreatorProof() {
  return (
    <section id="creators">
      <Wrap>
        <Head>Creator collaborations</Head>
        <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
          Jewlera, Poochycat and Porlarisa — sourcing, outreach, briefs, content and tracking.
        </p>
        {creatorGalleries.map((g) => (
          <div key={g.brand} className="mt-6">
            <div className="text-sm font-medium">{g.brand}</div>
            <Evidence label="Show collaborations" items={g.items} />
          </div>
        ))}
        <Rule />
      </Wrap>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience">
      <Wrap>
        <Head>Experience</Head>
        <div className="mt-8 space-y-8">
          {timeline.map((t) => (
            <div key={t.title}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-base font-semibold">{t.title}</h3>
                <span className="text-xs text-muted-foreground">{t.date}</span>
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{t.role}</div>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{t.body}</p>
            </div>
          ))}
        </div>
        <Rule />
      </Wrap>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills">
      <Wrap>
        <Head>Skills & tools</Head>
        <dl className="mt-6 space-y-3 text-[15px]">
          {skillGroups.map((g) => (
            <div key={g.t} className="sm:flex sm:gap-4">
              <dt className="shrink-0 font-medium sm:w-48">{g.t}</dt>
              <dd className="text-muted-foreground">{g.items.join(", ")}</dd>
            </div>
          ))}
          <div className="sm:flex sm:gap-4">
            <dt className="shrink-0 font-medium sm:w-48">Tools</dt>
            <dd className="text-muted-foreground">{tools.join(", ")}</dd>
          </div>
        </dl>
        <Rule />
      </Wrap>
    </section>
  );
}

export function About() {
  return (
    <section id="about">
      <Wrap>
        <Head>About</Head>
        <div className="mt-5 space-y-4">
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

export function Footer() {
  return (
    <footer id="contact" className="mt-16 border-t border-border py-12">
      <Wrap>
        <Head>Contact</Head>
        <div className="mt-4 space-y-1.5 text-[15px]">
          <div>
            <a href={`mailto:${contact.email}`} className="text-signal underline underline-offset-4">
              {contact.email}
            </a>
          </div>
          <div>
            <a href={contact.phoneHref} className="text-signal underline underline-offset-4">
              {contact.phone}
            </a>
          </div>
          <div>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener"
              className="text-signal underline underline-offset-4"
            >
              linkedin.com/in/karim-3eed
            </a>
          </div>
          <div className="text-muted-foreground">{contact.location} · Arabic & English</div>
        </div>
        <p className="mt-10 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Karim Eid
        </p>
      </Wrap>
    </footer>
  );
}
