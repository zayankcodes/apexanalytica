// pages/home.js

import Hero from "../components/Hero";
import { Reveal } from "../hooks/useReveal";

export default function Home() {
  const features = [
    {
      title: "Research",
      copy: "Peer-reviewed studies powering transparent, robust risk models.",
      link: "/methodology"
    },
    {
      title: "Platform",
      copy: "All-in-one API & dashboard for live simulations and stress-tests.",
      link: "/solution"
    },
    {
      title: "Advisory",
      copy: "Strategic guidance that turns data into actionable resilience.",
      link: "/contact"
    }
  ];

  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Why Apex Analytica? */}
      <section className="mx-auto mt-16 max-w-6xl z-10 px-4 py-36 text-center space-y-16">
        <Reveal>
          <h2 className="text-5xl font-bold">Why&nbsp;Apex&nbsp;Analytica?</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto max-w-3xl text-lg md:text-xl leading-relaxed text-slate-300">
            We blend cutting edge robust-optimization methods with transparent, interpretable machine-learning to
            uncover hidden tail-risk. The result? Actionable insight that turns uncertainty
            into opportunity for underwriters, investors, and regulators alike.
          </p>
        </Reveal>
        <div className="grid gap-10 md:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={0.2 + i * 0.1}>
              <a
                href={f.link}
                className="group relative overflow-hidden rounded-2xl p-8 shadow transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative z-10 flex flex-col gap-4">
                  <h3 className="relative text-2xl md:text-3xl font-semibold group-hover:text-accent">
                    {f.title}
                    <span
                      aria-hidden
                      className="absolute bottom-0 left-0 h-1 w-12 rounded-full bg-accent transition-all duration-300 group-hover:w-20"
                    />
                  </h3>
                  <p className="text-lg leading-relaxed text-slate-200">
                    {f.copy}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Our Partners */}
      <section className="mx-auto max-w-6xl px-4 py-28 text-center">
        <Reveal>
          <h2 className="text-5xl font-bold mb-12">Our Partners</h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <Reveal delay={0.2}>
            <img
              src="jhu.png"
              alt="Johns Hopkins University"
              className="mx-auto h-40 object-contain"
            />
          </Reveal>
          <Reveal delay={0.3}>
            <img
              src="/IMG_6760.jpeg"
              alt="NVIDIA"
              className="mx-auto h-40 object-contain"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
