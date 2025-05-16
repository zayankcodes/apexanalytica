"use client";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Hero() {
  const card = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.2, 0.8, 0.2, 1] } }
  };
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { when: "beforeChildren", staggerChildren: 0.5 } }
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.2, 0.8, 0.2, 1] } }
  };

  return (
    <section className="relative z-10 mx-auto pt-0 mt-24">
      <motion.div
        className="group relative mx-auto grid w-full max-w-6xl overflow-hidden rounded-md bg-primary-light/60 backdrop-blur-sm md:grid-cols-2"
        style={{ boxShadow: "0 8px 20px rgba(0,0,0,0.3)" }}
        variants={card}
        initial="hidden"
        animate="visible"
      >
        {/* COPY */}
        <motion.div className="p-12 md:p-16" variants={container} initial="hidden" animate="visible">
          <motion.div variants={fadeUp}>
            <h1 className="text-5xl font-display font-bold leading-tight">
              Quantifying Tomorrow’s Catastrophes&nbsp;Today
            </h1>
            <div className="mt-6 h-1 w-24 bg-accent transition-[width] duration-500 group-hover:w-32" />
          </motion.div>

          <motion.p className="mt-6 max-w-md text-lg text-slate-300" variants={fadeUp}>
            Apex Analytica fuses extreme-event simulation with transparent machine-learning analytics,
            arming (re)insurers, capital-markets desks and regulators with the insight they need to underwrite,
            manage and hedge systemic risk—before it strikes.
          </motion.p>

          <motion.div variants={fadeUp}>
            <a
              href="/solution"
              className="mt-20 inline-block bg-accent px-10 py-3 text-sm font-semibold tracking-widest text-primary transition hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_0_12px_#0051ff]"
            >
              EXPLORE PLATFORM
            </a>
          </motion.div>
        </motion.div>

        {/* VISUAL */}
        <div className="relative hidden overflow-hidden md:block">
          <motion.img
            src="/apex.gif"
            alt="gif"
            className="h-full w-full object-cover opacity-80"
            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          />
          <span className="absolute inset-0 rounded-md ring-1 ring-accent/20" />
        </div>

        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-accent/15 to-transparent animate-scanLine mix-blend-screen"
        />
      </motion.div>
    </section>
  );
}
