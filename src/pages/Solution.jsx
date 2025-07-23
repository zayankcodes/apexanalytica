import { useState, useEffect } from "react";
import { Reveal } from "../hooks/useReveal";
import { motion, AnimatePresence } from "framer-motion";
import { PlayCircle } from "lucide-react";

export default function Solution() {
  // ───────────────────────────────────────────────────────────── STATE ──────────
  const [activeIdx, setActiveIdx] = useState(null);

  // Prevent page scroll when modal is open
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", activeIdx !== null);
    if (activeIdx !== null) window.scrollTo({ top: 0 });
  }, [activeIdx]);

  const services = [
    {
      title: "Data Integration",
      copy:
        "Consolidate climate, financial, and exposure data into a single, reliable platform—removing silos and ensuring consistency across your analytics pipeline.",
      src: "/WhatsApp Video 2025-07-01 at 01.11.55-3.mp4",
    },
    {
      title: "Risk Forecasting",
      copy:
        "Leverage our Ω-Robustness framework to generate forward-looking scenarios—capturing extreme events before they happen and preparing your organization for any outcome.",
      src: "/WhatsApp Video 2025-07-01 at 01.11.55-3.mp4",
    },
    {
      title: "Visualization & Dashboards",
      copy:
        "Interactive, web-based dashboards and secure APIs make it easy to explore scenario outcomes, monitor key metrics, and share insights across teams.",
      src: "/WhatsApp Video 2025-07-01 at 01.11.55.mp4",
    },
    {
      title: "Strategic Advisory",
      copy:
        "Tailored consulting services help translate analytics into action—optimizing portfolios, informing reinsurance strategies, and ensuring regulatory compliance.",
      src: "/WhatsApp Video 2025-07-01 at 01.13.53.mp4",
    },
  ];

  // ──────────────────────────────────────────────────────────── HELPERS ─────────
  const openModal = (idx) => setActiveIdx(idx);
  const closeModal = () => setActiveIdx(null);

  // ────────────────────────────────────────────────────────────── RENDER ────────
  return (
    <>
      <section className="mx-auto max-w-5xl space-y-12 px-4 py-24">
        {/* Headline */}
        <Reveal>
          <h1 className="text-4xl font-bold text-center">Solution</h1>
        </Reveal>

        {/* Sub-headline */}
        <Reveal delay={0.1}>
          <p className="text-lg text-center text-slate-300 max-w-3xl mx-auto">
            Turn complex risk data into clear, actionable decisions with Apex Analytica’s suite of services designed to
            empower underwriters, investors, and regulators.
          </p>
        </Reveal>

        {/* Services grid */}
        <div className="grid gap-10 md:grid-cols-2">
          {services.map(({ title, copy, src }, idx) => (
            <Reveal delay={0.2 + idx * 0.1} key={title}>
              <motion.div
                layoutId={`video-${idx}`}
                className="group relative rounded-2xl bg-primary-light shadow transition-all duration-500 ease-out h-48 hover:overflow-visible cursor-pointer"
                onClick={() => openModal(idx)}
              >
                {/* Instruction Overlay */}
                <div className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-100">
                  <PlayCircle className="w-12 h-12 mb-1 text-black drop-shadow-md" />
                  <span className="text-black text-sm font-medium leading-tight">
                    Click to watch
                  </span>
                </div>

                {/* Hover Video – smaller pop‑out */}
                <div
                  className="absolute inset-0 z-20 flex items-center justify-center opacity-0 scale-75 transition-all duration-500 ease-out group-hover:scale-110 group-hover:opacity-100 pointer-events-none"
                >
                  <video
                    className="w-[115%] h-[115%] rounded-2xl pointer-events-none object-cover shadow-2xl"
                    src={src}
                    loop
                    muted
                    playsInline
                    autoPlay
                  />
                </div>

                {/* Card content */}
                <div className="relative z-10 p-6 h-full flex flex-col justify-center space-y-2 transition-opacity duration-300 group-hover:opacity-0">
                  <h2 className="text-2xl font-semibold">{title}</h2>
                  <p className="mt-2 text-slate-200 line-clamp-3">{copy}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal delay={0.6}>
          <div className="text-center">
            <p className="text-lg text-slate-300 inline-block">
              Ready to transform your risk management?
              <br />
              <a href="/contact" className="mt-4 inline-block text-accent font-semibold underline hover:no-underline">
                Let’s Talk
              </a>
            </p>
          </div>
        </Reveal>
      </section>

      {/* ──────────────────────────────────────────────── MODAL OVERLAY ─────────── */}
      <AnimatePresence>
        {activeIdx !== null && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              layoutId={`video-${activeIdx}`}
              className="relative max-w-5xl w-full max-h-[90vh] -translate-y-[5vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                className="w-full h-auto rounded-3xl shadow-2xl object-cover"
                src={services[activeIdx].src}
                loop
                muted
                playsInline
                autoPlay
              />
              {/* Close button */}
              <button
                className="absolute -top-4 -right-4 bg-slate-800 text-white rounded-full p-2 shadow-lg hover:bg-slate-700 focus:outline-none"
                onClick={closeModal}
                aria-label="Close modal"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
