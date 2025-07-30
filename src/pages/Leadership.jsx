import { Reveal } from "../hooks/useReveal";

export default function Leadership() {
  const people = [
    {
      name: "Junaid Ghauri",
      role: "Principal Scientist · CEO",
      bio: (
        <>
          <p><strong>Expertise:</strong> Leadership in tech, Bayesian models, COVID‑19 analytics, reinsurance risk.</p>
          <p><strong>Background:</strong> Ex‑General Partner at Pareto Technologies; Former CTO at MARK LABS; Chair of the Board at Emerita.</p>
          <p><strong>Education:</strong> Doctor of Engineering, Johns Hopkins University.</p>
        </>
      ),
      imgAlt: "Portrait of Junaid Ghauri",
      image: "/junaid.png",
      linkedin: "https://www.linkedin.com/in/jghauri/",
    },
    {
      name: "Georgios Korpas",
      role: "Head of Research",
      bio: (
        <>
          <p><strong>Expertise:</strong> Quantum computing, AI, optimization, applied mathematics, hybrid computing for finance.</p>
          <p><strong>Background:</strong> Lead researcher at Archimedes AI; long‑term collaborator on quantum projects with HSBC, Anyon & QCentroid.</p>
          <p><strong>Education:</strong> Ph.D. in Mathematics, Trinity College Dublin; Visiting PhD Scholar at Stanford University.</p>
        </>
      ),
      imgAlt: "Portrait of Georgios Korpas",
      image: "", // Placeholder – add path when available
      linkedin: "https://www.linkedin.com/in/georgios-korpas/", // TODO: add Georgios’ LinkedIn URL when available
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-24">
      <Reveal>
        <h1 className="text-4xl font-bold text-center">Leadership</h1>
      </Reveal>

      <div className="mt-12 flex flex-col gap-8 md:flex-row md:justify-between">
        {people.map((p, i) => (
          <Reveal key={p.name} delay={0.1 + i * 0.1}>
            <div className="flex-1 bg-primary-light rounded-2xl p-8 flex flex-col items-center text-center space-y-6">
              {/* Avatar */}
              {p.image ? (
                <div className="h-48 w-48 overflow-hidden rounded-full bg-accent/20 shadow-lg">
                  <img
                    src={p.image}
                    alt={p.imgAlt}
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : (
                <div className="h-48 w-48 rounded-full bg-accent/20 shadow-lg flex items-center justify-center text-4xl font-semibold text-accent">
                  {p.name.split(" ").map((n) => n[0]).join("")}
                </div>
              )}

              <h2 className="text-2xl font-semibold">{p.name}</h2>
              <p className="text-sm text-slate-300">{p.role}</p>
              <div className="mt-2 text-slate-200 space-y-2">{p.bio}</div>

              {p.linkedin && p.linkedin !== "#" && (
                <a
                  href={p.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-20 inline-block bg-accent px-6 py-2 text-sm font-semibold tracking-widest text-primary transition hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_0_12px_#0051ff]"
                >
                  View LinkedIn Profile
                </a>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
