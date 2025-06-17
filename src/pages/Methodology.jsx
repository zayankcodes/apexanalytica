// src/pages/Methodology.jsx
import { Reveal } from "../hooks/useReveal";

export default function Methodology() {
  return (
    <section className="mx-auto max-w-5xl space-y-12 px-4 py-24">
      {/* Page Title */}
      <Reveal>
        <h1 className="text-4xl font-bold text-center">Methodology</h1>
      </Reveal>

      {/* Intro */}
      <Reveal delay={0.1}>
        <p className="text-lg text-center text-slate-300 max-w-3xl mx-auto">
          Apex Analytica’s Ω-Robustness framework transforms risk modeling by moving beyond historical data and average-case assumptions. Built for extreme uncertainty, it ensures models are resilient, explainable, and decision-ready—no matter how unpredictable the future becomes.
        </p>
      </Reveal>

      {/* Core Components */}
      <div className="grid gap-10 md:grid-cols-2">
        <Reveal delay={0.2}>
          <div className="rounded-2xl bg-primary-light p-6 shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold">Synthetic Scenario Generation</h2>
            <p className="mt-2 text-slate-200">
              We construct scientifically grounded synthetic datasets using copula modeling, adversarial stress tests, and probabilistic simulations of rare events. This enables forward-looking forecasts that remain valid even when historical baselines fail.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="rounded-2xl bg-primary-light p-6 shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold">Multi-Objective Optimization</h2>
            <p className="mt-2 text-slate-200">
              We balance tradeoffs like cost vs. risk and interpretability vs. complexity using lexicographic Pareto techniques. Our models are selected not for average performance, but for consistency under worst-case disruptions.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="rounded-2xl bg-primary-light p-6 shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold">Robustness Evaluation</h2>
            <p className="mt-2 text-slate-200">
              Each candidate solution is tested across 10,000+ stress scenarios, with perturbation and generalization decay analysis to ensure stability under volatility, regime shifts, and compounding failures.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.5}>
          <div className="rounded-2xl bg-primary-light p-6 shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold">Mechanistic Interpretability</h2>
            <p className="mt-2 text-slate-200">
              Using SHAP, LIME, and Deep Feature Attribution, we open the black box. We make AI decisions explainable, traceable, and justifiable—ensuring transparency for regulators, stakeholders, and decision-makers.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
