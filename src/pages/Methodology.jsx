// pages/methodology.js



// pages/methodology.js
import { Reveal } from "../hooks/useReveal";

export default function Methodology() {
  return (
    <section className="mx-auto max-w-5xl space-y-12 px-4 py-24">

      <Reveal>
        <h1 className="text-4xl font-bold text-center">Methodology</h1>
      </Reveal>

 
      <Reveal delay={0.1}>
        <p className="text-lg text-center text-slate-300 max-w-3xl mx-auto">
          Apex Analytica’s core approach is <strong>Ω-Robustness</strong>—combining Pareto Robust Optimization and Distributionally Robust Optimization to deliver resilient, transparent risk models.
        </p>
      </Reveal>

    
      <div className="grid gap-10 md:grid-cols-2">
        <Reveal delay={0.2}>
          <div className="rounded-2xl bg-primary-light p-6 shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold">Synthetic Scenario Generation</h2>
            <ul className="mt-2 list-disc list-inside text-slate-200 space-y-1">
              <li>Copula models for dependent tail events</li>
              <li>Adversarial stress testing</li>
              <li>Probabilistic rare-event simulation</li>
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="rounded-2xl bg-primary-light p-6 shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold">Multi-Objective Optimization</h2>
            <ul className="mt-2 list-disc list-inside text-slate-200 space-y-1">
              <li>Risk vs. cost tradeoffs</li>
              <li>Simplicity vs. accuracy</li>
              <li>Generalization vs. tail exposure</li>
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="rounded-2xl bg-primary-light p-6 shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold">Robustness Evaluation & Stress Testing</h2>
            <ul className="mt-2 list-disc list-inside text-slate-200 space-y-1">
              
              <li>Perturbation & drift analysis</li>
              <li>Generalization decay measurement</li>
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.5}>
          <div className="rounded-2xl bg-primary-light p-6 shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold">Mechanistic Interpretability</h2>
            <ul className="mt-2 list-disc list-inside text-slate-200 space-y-1">
              <li>SHAP & LIME attributions</li>
              <li>Deep feature attribution</li>
              <li>Transparent diagnostics</li>
            </ul>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.6}>
        <div className="text-center">
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Our methodology ensures models that remain robust under uncertainty—and interpretable at every step.
          </p>
        </div>
      </Reveal>
    </section>
  );
}

/*
import { Reveal } from "../hooks/useReveal";

export default function Methodology() {
  return (
    <section className="mx-auto max-w-5xl space-y-10 px-4 py-24">

      <Reveal>
        <h1 className="text-4xl font-bold">Methodology</h1>
      </Reveal>


      <Reveal delay={0.1}>
        <h2 className="text-2xl font-semibold">Our Engine: The Science of Robust Foresight</h2>
      </Reveal>


      <Reveal delay={0.2}>
        <p className="text-lg leading-relaxed">
          Apex Analytica’s methodological core is <strong>Ω-Robustness</strong>—a hybrid optimization framework built for extreme uncertainty. Designed to move beyond traditional statistical assumptions, our approach synthesizes rare events, balances competing objectives, and illuminates the fault lines in black-box systems.
        </p>
      </Reveal>

     
      <Reveal delay={0.3}>
        <h3 className="text-xl font-semibold">What is Ω-Robustness?</h3>
        <ul className="mt-2 list-disc list-inside space-y-1 text-lg leading-relaxed">
          <li><strong>Pareto Robust Optimization (PRO):</strong> Solves multi-objective problems by identifying non-dominated tradeoff solutions across conflicting goals (e.g., accuracy vs. interpretability).</li>
          <li><strong>Distributionally Robust Optimization (DRO):</strong> Models uncertainty by considering the worst-case performance across plausible probability distributions—not just the average case.</li>
        </ul>
        <p className="mt-2 text-lg leading-relaxed">
          This fusion allows Apex to optimize not just for performance, but for resilience, equity, and safety under unpredictable stress.
        </p>
      </Reveal>

      
      <Reveal delay={0.4}>
        <h3 className="text-xl font-semibold">Core Components of Our Methodology</h3>
      </Reveal>

      <div className="space-y-8">
        <Reveal delay={0.5}>
          <div>
            <h4 className="text-lg font-semibold">1. Synthetic Scenario Generation</h4>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>Copula models to simulate dependent tail events</li>
              <li>Adversarial stress tests to explore boundary failure modes</li>
              <li>Probabilistic simulation of rare or long-tail shocks</li>
            </ul>
            <p className="mt-2 text-lg leading-relaxed">
              This ensures our risk models remain relevant when historical data becomes obsolete.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.6}>
          <div>
            <h4 className="text-lg font-semibold">2. Multi-Objective Optimization</h4>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>Risk vs. cost tradeoffs</li>
              <li>Simplicity vs. accuracy</li>
              <li>Generalization vs. tail exposure</li>
            </ul>
            <p className="mt-2 text-lg leading-relaxed">
              Candidate solutions are evaluated not just for average performance—but for stability under disruption.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.7}>
          <div>
            <h4 className="text-lg font-semibold">3. Robustness Evaluation & Stress Testing</h4>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>10,000+ scenario simulations</li>
              <li>Perturbation analysis</li>
              <li>Generalization decay measurement</li>
            </ul>
            <p className="mt-2 text-lg leading-relaxed">
              We select solutions that retain integrity under volatility, drift, and worst-case realization.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.8}>
          <div>
            <h4 className="text-lg font-semibold">4. Mechanistic Interpretability</h4>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>Using SHAP, LIME, and Deep Feature Attribution to decompose black-box behavior</li>
              <li>Revealing causal drivers and tipping points</li>
              <li>Ensuring decisions are traceable and justifiable</li>
            </ul>
            <p className="mt-2 text-lg leading-relaxed">
              Interpretability is not a post hoc add-on—it is foundational to every Apex model.
            </p>
          </div>
        </Reveal>
      </div>

    
      <Reveal delay={0.9}>
        <p className="text-lg leading-relaxed">
          Traditional modeling breaks down under feedback loops, adversarial agents, or unstable data regimes. Apex’s methodology is built for systemic resilience, regulatory trustworthiness, AI safety, and generalizability. Whether you're managing sovereign climate risk, underwriting AI models, or structuring reinsurance treaties, our methodology equips you for the known unknowns—and the unknown unknowns.
        </p>
      </Reveal>
    </section>
  );
}
*/