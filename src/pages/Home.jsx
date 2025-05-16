import Hero from "../components/Hero";
import { Reveal } from "../hooks/useReveal";

/**
 * Placeholder partner logos – swap with real assets when available.
 */
const partnerLogos = [
  "https://via.placeholder.com/220x100?text=Partner+1",
  "https://via.placeholder.com/220x100?text=Partner+2",
  "https://via.placeholder.com/220x100?text=Partner+3",
  "https://via.placeholder.com/220x100?text=Partner+4",
  "https://via.placeholder.com/220x100?text=Partner+5",
  "https://via.placeholder.com/220x100?text=Partner+6",
  "https://via.placeholder.com/220x100?text=Partner+7",
  "https://via.placeholder.com/220x100?text=Partner+8"
];

export default function Home() {
  const features = [
    {
      title: "Research",
      copy: "Peer-reviewed studies powering transparent, robust risk models.",
      link: "/methodology"
    },
    {
      title: "Platform",
      copy: "All-in-one API & dashboard for live simulations and stress-tests.",
      link: "/solution"
    },
    {
      title: "Advisory",
      copy: "Strategic guidance that turns data into actionable resilience.",
      link: "/contact"
    }
  ];

  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Why Apex Analytica? */}
      <section className="mx-auto mt-16 max-w-6xl px-4 py-36 text-center space-y-16">
        <Reveal>
          <h2 className="text-5xl md:text-5xl font-bold">Why&nbsp;Apex&nbsp;Analytica?</h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto max-w-3xl text-lg md:text-xl leading-relaxed text-slate-300">
            We blend Bayesian statistics with transparent, interpretable machine-learning to
            uncover hidden tail-risk. The result? Actionable insight that turns uncertainty
            into opportunity for underwriters, investors, and regulators alike.
          </p>
        </Reveal>

        <div className="grid gap-10 md:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={0.2 + i * 0.1}>
              <a
                href={f.link}
                className="group relative overflow-hidden rounded-2xl p-8 shadow transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative z-10 flex flex-col gap-4">
                  <h3 className="relative text-2xl md:text-3xl font-semibold group-hover:text-accent">
                    {f.title}
                    {/* horizontal accent underline */}
                    <span
                      aria-hidden
                      className="absolute bottom-0 left-0 h-1 w-12 rounded-full bg-accent transition-all duration-300 group-hover:w-20"
                    />
                  </h3>
                  <p className="text-lg leading-relaxed text-slate-200">
                    {f.copy}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Our Partners */}
      <section className="relative py-28 overflow-hidden -mt-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <Reveal>
            <h2 className="mb-24 text-5xl md:text-5xl font-bold">Our Partners</h2>
          </Reveal>

          <div className="relative overflow-hidden">
            <div className="flex items-center gap-44 whitespace-nowrap animate-[marquee_120s_linear_infinite]">
              {partnerLogos.concat(partnerLogos).map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="partner logo"
                  className="h-40 md:h-44 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              ))}
            </div>
            {/* fade masks */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-36 bg-gradient-to-r from-[#040d24] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-36 bg-gradient-to-l from-[#040d24] to-transparent" />
          </div>
        </div>
      </section>
    </>
  );
}

/* -------------------------------------------------------------------------
   Utilities – attach once globally (e.g. globals.css or tailwind.config)
   ------------------------------------------------------------------------
@layer utilities {
  @keyframes marquee {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
}

/* -------------------------------------------------------------------------
   🔧  Add the following to your global stylesheet or tailwind.config.js:  
   ------------------------------------------------------------------------
   @tailwind base;
   @tailwind components;
   @tailwind utilities;

   @layer utilities {
     @keyframes marquee {
       0%   { transform: translateX(0%);   }
       100% { transform: translateX(-50%); }
     }
     .mask-fade {
     
       -webkit-mask-image: linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%);
       mask-image: linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%);
     }
   }

   // If the sidebar is ~11rem wide, the `md:pl-48` (12rem) on the container
   // makes sure the carousel never slides underneath it.
   // Adjust the value if your sidebar width changes.
*/