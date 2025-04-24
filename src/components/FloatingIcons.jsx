
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ShieldCheck, Activity, CloudRain, LineChart } from "lucide-react";

const icons = [ShieldCheck, Activity, CloudRain, LineChart];

export default function FloatingIcons() {
  return (
    <>
      {icons.map((Icon, i) => (
        <motion.div
          key={i}
          className="absolute text-accent/40"
          initial={{ y: 0 }}
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 6 + i, ease: "easeInOut" }}
          style={{ left: `${15 + i * 20}%`, top: `${20 + i * 15}%` }}
        >
          <Icon size={40} />
        </motion.div>
      ))}
    </>
  );
}
