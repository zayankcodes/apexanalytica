// src/pages/Leadership.jsx
import { Reveal } from "../hooks/useReveal";

export default function Leadership() {
  const people = [
    {
      name: "Junaid Ghauri",
      role: "Founder · CEO & Chief Scientist",
      bio: (
        <>
          Leads R &amp; D on probabilistic catastrophe models. Former General Partner
          at&nbsp;Pareto Technologies and CTO at&nbsp;MARK Labs; currently Chair of the Board at
          Emerita. Doctoral candidate in Computational Mathematics at Johns Hopkins.
        </>
      ),
      imgAlt: "Portrait of Junaid Ghauri",
      image: "/junaid.png",
      linkedin: "https://www.linkedin.com/in/jghauri/",
    },
    {
      name: "Brynna Shale",
      role: "VP · Operations & Data Strategy",
      bio: (
        <>
          Drives business process design, data pipelines and operational
          efficiency. Background in Computer Science &amp; Analytics; incoming
          Goldman Sachs (Controllers Division) associate. Graduate of NYU Stern.
        </>
      ),
      imgAlt: "Portrait of Brynna Shale",
      image: "/IMG_6758.jpeg",
      linkedin: "https://www.linkedin.com/in/brynna-shale-ab544b1b9/",
    },
    {
      name: "Siddharth Rohilla",
      role: "VP · Business Strategy",
      bio: (
        <>
          Focuses on financial modelling, investment analysis and fundraising.
          Ex-Investment Banking Analyst at Bentley Associates. Holds an MS in
          Finance (Brandeis Intl.) and an MBA with a tech concentration.
        </>
      ),
      imgAlt: "Portrait of Siddharth Rohilla",
      image: "/IMG_6759.jpeg",
      linkedin: "https://www.linkedin.com/in/sidrohilla/",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-24">
      <Reveal>
        <h1 className="text-4xl font-bold text-center">Team</h1>
      </Reveal>

      <div className="mt-12 flex flex-col gap-8 md:flex-row md:justify-between">
        {people.map((p, i) => (
          <Reveal key={p.name} delay={0.1 + i * 0.1}>
            <div className="flex-1 bg-primary-light rounded-2xl p-8 flex flex-col items-center text-center space-y-6">
              {/* Enlarged avatar */}
              <div className="h-48 w-48 overflow-hidden rounded-full bg-accent/20 shadow-lg">
                <img
                  src={p.image}
                  alt={p.imgAlt}
                  className="h-full w-full object-cover"
                />
              </div>

              <h2 className="text-2xl font-semibold">{p.name}</h2>
              <p className="text-sm text-slate-300">{p.role}</p>
              <p className="mt-2 text-slate-200">{p.bio}</p>

              {/* Clickable LinkedIn button */}
              <a
                href={p.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-20 inline-block bg-accent px-6 py-2 text-sm font-semibold tracking-widest text-primary transition hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_0_12px_#0051ff]"
              >
                View LinkedIn Profile
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
