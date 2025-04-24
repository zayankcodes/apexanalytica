import { Reveal } from "../hooks/useReveal";

export default function Solution() {
  return (
    <section className="mx-auto max-w-5xl space-y-10 px-4 py-24">
      <Reveal>
        <h1 className="text-4xl font-bold">Our Solution</h1>
      </Reveal>

      <Reveal delay={0.1}>
        <p>
          Apex Analytica provides advanced risk analytics for insurers, reinsurers, financial institutions, and regulators, converting complex data into clear, actionable insights.
        </p>
      </Reveal>

      <Reveal delay={0.2}>
        <h2 className="text-2xl font-semibold">Comprehensive Data Integration</h2>
        <p>
          We integrate climate, financial, and risk data into a unified platform, delivering high-quality, ready-to-use datasets for analysis.
        </p>
      </Reveal>

      <Reveal delay={0.3}>
        <h2 className="text-2xl font-semibold">Scenario Simulation</h2>
        <p>
          Our advanced modeling techniques generate realistic simulations of extreme scenarios, capturing risks often overlooked by traditional models.
        </p>
      </Reveal>

      <Reveal delay={0.4}>
        <h2 className="text-2xl font-semibold">Interactive Dashboards</h2>
        <p>
          Intuitive dashboards visualize risks clearly, allowing users to explore insights, identify opportunities, and quickly make informed decisions.
        </p>
      </Reveal>

      <Reveal delay={0.5}>
        <h2 className="text-2xl font-semibold">Practical Risk Management</h2>
        <p>
          We provide tailored recommendations to optimize portfolios, strengthen resilience, and ensure regulatory compliance.
        </p>
      </Reveal>

      <Reveal delay={0.6}>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { stat: "1000+", label: "Risk Variables" },
            { stat: "Real-time", label: "Insights" },
            { stat: "Transparent", label: "Diagnostics" },
          ].map((s, i) => (
            <Reveal key={s.stat} delay={0.7 + i * 0.1}>
              <div className="rounded-xl bg-primary-light p-6 text-center shadow">
                <p className="text-3xl font-extrabold text-accent">{s.stat}</p>
                <p className="mt-2 text-sm text-slate-300">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.9}>
        <p>
          Apex Analytica empowers clients to confidently navigate risks in an uncertain world.
        </p>
      </Reveal>
    </section>
  );
}
