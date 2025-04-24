import { useEffect, useRef } from "react";

// eslint-disable-next-line no-unused-vars
import { useAnimation, motion } from "framer-motion";

export function Reveal({ children, delay = 0 }) {
  const ref = useRef();
  const controls = useAnimation();

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && controls.start({ opacity: 1, y: 0 }),
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => ref.current && obs.unobserve(ref.current);
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      transition={{ duration: 0.9, delay }}
    >
      {children}
    </motion.div>
  );
}
