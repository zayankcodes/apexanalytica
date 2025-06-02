

// pages/solution.js
import { Reveal } from "../hooks/useReveal";

export default function Solution() {
  return (
    <section className="mx-auto max-w-5xl space-y-12 px-4 py-24">

      <Reveal>
        <h1 className="text-4xl font-bold text-center">Solution</h1>
      </Reveal>


      <Reveal delay={0.1}>
        <p className="text-lg text-center text-slate-300 max-w-3xl mx-auto">
          Turn complex risk data into clear, actionable decisions with Apex Analytica’s suite of services designed to
          empower underwriters, investors, and regulators.
        </p>
      </Reveal>

      <div className="grid gap-10 md:grid-cols-2">
        <Reveal delay={0.2}>
          <div className="rounded-2xl bg-primary-light p-6 shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold">Data Integration</h2>
            <p className="mt-2 text-slate-200">
              Consolidate climate, financial, and exposure data into a single, reliable platform—removing silos and ensuring
              consistency across your analytics pipeline.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="rounded-2xl bg-primary-light p-6 shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold">Risk Forecasting</h2>
            <p className="mt-2 text-slate-200">
              Leverage our Ω-Robustness framework to generate forward-looking scenarios—capturing extreme events before they
              happen and preparing your organization for any outcome.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="rounded-2xl bg-primary-light p-6 shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold">Visualization & Dashboards</h2>
            <p className="mt-2 text-slate-200">
              Interactive, web-based dashboards and secure APIs make it easy to explore scenario outcomes, monitor key metrics,
              and share insights across teams.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.5}>
          <div className="rounded-2xl bg-primary-light p-6 shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold">Strategic Advisory</h2>
            <p className="mt-2 text-slate-200">
              Tailored consulting services help translate analytics into action—optimizing portfolios, informing reinsurance
              strategies, and ensuring regulatory compliance.
            </p>
          </div>
        </Reveal>
      </div>

 
      <Reveal delay={0.6}>
        <div className="text-center">
          <p className="text-lg text-slate-300 inline-block">
            Ready to transform your risk management?<br />
            <a href="/contact" className="mt-4 inline-block text-accent font-semibold underline hover:no-underline">
              Let’s Talk
            </a>
          </p>
        </div>
      </Reveal>
    </section>
  );
}
