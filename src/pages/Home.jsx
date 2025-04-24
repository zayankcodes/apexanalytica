import Hero from "../components/Hero";
import { Reveal } from "../hooks/useReveal";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="mx-auto mt-10 max-w-5xl space-y-10 px-4 py-40">
        <Reveal>
          <h2 className="text-3xl font-bold">Why Apex Analytica?</h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p>
            Apex Analytica builds advanced catastrophe models that are fair, transparent
            and regulator‑ready. Our platform blends Bayesian statistics
            and interpretable machine‑learning to reveal hidden tail‑risk with multi-domain application—turning uncertainty into opportunity for underwriters
            and capital‑markets alike.
          </p>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-3 mt-5">
          {[
            {
              title: "Research",
              copy:
                "Peer‑reviewed studies spanning climate extremes, catastrophic forgetting and AI safety underpin every model we deploy.",
              link: "/methodology"
            },
            {
              title: "Platform",
              copy:
                "APIs & dashboards deliver scenario generation, portfolio stress‑testing and governance analytics in a single workspace.",
              link: "/solution"
            },
            {
              title: "Advisory",
              copy:
                "Strategic engagements with reinsurers, governments and investors help bridge analytics to real‑world resilience.",
              link: "/contact"
            }
          ].map((c, i) => (
            <Reveal key={c.title} delay={0.2 + i * 0.1}>
              <a
                href={c.link}
                className="group relative overflow-hidden rounded-2xl p-6 shadow transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span aria-hidden className="absolute left-0 top-0 h-full w-6 rounded-r-full bg-accent/40 transition-all duration-300 group-hover:w-8" />

                <div className="relative z-10">
                  <h3 className="mb-2 text-xl font-semibold group-hover:text-accent">{c.title}</h3>
                  <p className="text-sm text-slate-200">{c.copy}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
