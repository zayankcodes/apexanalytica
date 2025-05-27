import { Reveal } from "../hooks/useReveal";

export default function Solution() {
  return (
    <section className="mx-auto max-w-5xl space-y-10 px-4 py-24">
      <Reveal>
        <h1 className="text-4xl font-bold">Our Solution</h1>
      </Reveal>

      <Reveal delay={0.1}>
        <p>
          Apex Analytica delivers a comprehensive analytics platform designed for insurers, reinsurers, financial institutions, and regulators, translating complex catastrophe risk data into actionable insights and strategic decision-making tools.
        </p>
      </Reveal>

      <Reveal delay={0.2}>
        <h2 className="text-2xl font-semibold">Unified Data Platform</h2>
        <p>
          Our service consolidates climate data, financial information, and exposure details into a streamlined data hub, providing consistent and reliable datasets for accurate risk assessment.
        </p>
      </Reveal>

      <Reveal delay={0.3}>
        <h2 className="text-2xl font-semibold">Advanced Risk Forecasting</h2>
        <p>
          Utilizing our proprietary optimization framework, we provide robust forecasts of extreme events, enhancing risk visibility beyond conventional models.
        </p>
      </Reveal>

      <Reveal delay={0.4}>
        <h2 className="text-2xl font-semibold">Dynamic Visualization Dashboards</h2>
        <p>
          Interactive dashboards clearly visualize risk scenarios, enabling stakeholders to intuitively understand risks, explore scenario impacts, and swiftly identify strategic opportunities.
        </p>
      </Reveal>

      <Reveal delay={0.5}>
        <h2 className="text-2xl font-semibold">Strategic Risk Recommendations</h2>
        <p>
          We offer practical guidance for optimizing risk portfolios, enhancing financial resilience, and achieving regulatory compliance, tailored specifically to organizational needs.
        </p>
      </Reveal>

      <Reveal delay={0.6}>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { stat: "1000+", label: "Risk Metrics" },
            { stat: "Interactive", label: "Dashboards" },
            { stat: "Strategic", label: "Recommendations" },
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
          Apex Analytica equips organizations with precise tools and clear visualizations for confident navigation through complex risks.
        </p>
      </Reveal>
    </section>
  );
}