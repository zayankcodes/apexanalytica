import { Reveal } from "../hooks/useReveal";

export default function About() {
  const paragraphs = [
    `Apex Analytica is a risk-technology platform dedicated to democratizing sophisticated catastrophe modeling. Our mission is to empower insurers, reinsurers, and sovereign funds by providing advanced analytics capable of capturing extreme scenarios that conventional risk models often miss.`,
    `At Apex Analytica, we harness cutting-edge methodologies including Pareto Robust Optimization (PRO) and Distributionally Robust Optimization (DRO), collectively known as Ω-Robustness. Our approach systematically synthesizes scientifically plausible extreme data scenarios, enhancing the predictive accuracy and robustness of risk assessments. This enables firms to reliably manage risks related to climate volatility, complex financial systems, and advanced artificial intelligence.`,
    `Our interdisciplinary team combines expertise from atmospheric science, quantitative methodologies, and interpretable machine learning to create models that are rigorous, transparent, and auditable by regulators. Leveraging peer-reviewed research and state-of-the-art computational methods, we deliver insights that help organizations prepare for and mitigate risks from increasingly volatile and unpredictable events.`,
  ];

  return (
    <section className="relative mx-auto max-w-5xl px-4 py-24">
  
      

  <div className="relative z-10 space-y-16">
        {/* Heading */}
        <Reveal>
          <h1 className="mx-auto max-w-3xl text-center text-5xl font-bold text-white">
            About Apex Analytica
          </h1>
        </Reveal>

        {/* Stats */}
        <Reveal>
          <div className="mx-auto grid w-full max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { stat: "10,000+", label: "Synthetic Extreme Scenarios Modeled" },
              { stat: "30+", label: "Climate & AI Risk Variables Integrated" },
              { stat: "3", label: "Peer-reviewed Methodologies Developed" },
            ].map((s) => (
              <div
                key={s.stat}
                className="rounded-lg bg-primary-light bg-opacity-40 p-6 text-center backdrop-blur-sm"
              >
                <p className="text-4xl font-extrabold text-accent">{s.stat}</p>
                <p className="mt-2 text-sm text-gray-200">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Intro Paragraphs */}
        <div className="space-y-12 flex flex-col items-center">
          {paragraphs.map((text, i) => (
            <Reveal key={i} delay={0.05 * i}>
              <p className="max-w-prose text-center text-lg leading-relaxed text-indigo-100">
                {text}
              </p>
            </Reveal>
          ))}
        </div>

        {/* Closing Callout */}
        <Reveal>
          <div className="max-w-prose mx-auto text-center border-l-4 border-accent pl-6 italic text-indigo-200">
            As uncertainty becomes the new normal, Apex Analytica stands committed to advancing the frontier of catastrophe risk modeling. We equip stakeholders with the analytical tools they need to safeguard financial stability, ensure regulatory compliance, and confidently navigate the complexity of contemporary global risks.
          </div>
        </Reveal>
      </div>
    </section>
  );
}