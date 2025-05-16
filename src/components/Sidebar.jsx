import { NavLink, useLocation } from "react-router-dom";
import { useMemo } from "react";

const LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Methodology", to: "/methodology" },
  { label: "Solution", to: "/solution" },
  { label: "Insights", to: "/insights" },
  { label: "Leadership", to: "/leadership" },
  { label: "Contact", to: "/contact" }
];

/**
 * The sidebar is now **truly overlayed** (fixed) rather than sticky, so it no
 * longer reserves vertical space that was pushing each page downward.
 *
 * • Vertical centering → `top-1/2 -translate-y-1/2`
 * • You may tweak the `left-16` value to align with your header logo.
 */
export default function Sidebar() {
  const { pathname } = useLocation();

  // eslint-disable-next-line no-unused-vars
  const active = useMemo(
    () => LINKS.findIndex((l) => l.to === (pathname === "/" ? "/" : pathname)),
    [pathname]
  );

  return (
    <aside
      className="fixed left-36 top-96 -translate-y-1/2 z-30 hidden md:block mt-10"
    >
      <nav className="relative flex flex-col gap-12">
        {/* Active indicator bar */}
        
        
        {LINKS.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            className={({ isActive }) =>
              `relative block pl-6 text-xl tracking-widest transition-transform duration-300 hover:-translate-y-1 hover:scale-105 ${
                isActive
                  ? "text-accent"
                  : "text-white opacity-80 hover:text-[#0051ff] hover:[text-shadow:0_0_8px_rgba(0,81,255,0.8)]"
              }`
            }
          >
            {l.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
