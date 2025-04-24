import { Reveal } from "../hooks/useReveal";

export default function Methodology() {
  return (
    <section className="mx-auto max-w-5xl space-y-10 px-4 py-24">
      <Reveal>
        <h1 className="text-4xl font-bold">Our Methodology</h1>
      </Reveal>

      <Reveal delay={0.1}>
        <p>
          Apex Analytica uses a robust modeling approach called Ω-Robustness, combining Pareto Robust Optimization (PRO) and Distributionally Robust Optimization (DRO). Our method identifies optimal solutions by balancing multiple competing objectives under uncertainty.
        </p>
      </Reveal>

      <Reveal delay={0.2}>
        <h2 className="text-2xl font-semibold">Synthetic Scenario Generation</h2>
        <p>
          We generate realistic synthetic scenarios that capture extreme but scientifically plausible events, ensuring comprehensive coverage of potential risks.
        </p>
      </Reveal>

      <Reveal delay={0.3}>
        <h2 className="text-2xl font-semibold">Multi-Objective Optimization</h2>
        <p>
          Our optimization strategy balances accuracy, complexity, and coverage through a prioritized process, delivering robust solutions.
        </p>
      </Reveal>

      <Reveal delay={0.4}>
        <h2 className="text-2xl font-semibold">Robustness Evaluation</h2>
        <p>
          We measure solution resilience against multiple simulated scenarios, selecting solutions that maintain performance despite uncertainties.
        </p>
      </Reveal>

      <Reveal delay={0.5}>
        <h2 className="text-2xl font-semibold">Transparent Insights</h2>
        <p>
          Using transparent diagnostics, we clearly illustrate model drivers, supporting stakeholder understanding and regulatory compliance.
        </p>
      </Reveal>

      <Reveal delay={0.6}>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { stat: "10,000+", label: "Scenarios Analyzed" },
            { stat: "Optimized", label: "Objective Balancing" },
            { stat: "Validated", label: "Transparent Analysis" },
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
          Our methodology ensures robust and actionable insights, enabling effective risk management in complex environments.
        </p>
      </Reveal>
    </section>
  );
}