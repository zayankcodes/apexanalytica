import { NavLink, useLocation } from "react-router-dom";
import { useMemo } from "react";

const LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Methodology", to: "/methodology" },
  { label: "Solution", to: "/solution" },
  { label: "Insights", to: "/insights" },
  { label: "Leadership", to: "/leadership" },
  { label: "Contact", to: "/contact" },
];

export default function Sidebar() {
  const { pathname } = useLocation();


  const active = useMemo(
    () => LINKS.findIndex((l) => l.to === (pathname === "/" ? "/" : pathname)),
    [pathname]
  );

  return (
    <aside
      className="
        fixed top-60 left-60 z-30 hidden w-72 md:block
        bg-transparent
        rounded-none
        p-0
        shadow-none
      " 
    >
      <nav className="relative flex flex-col gap-8">
 
        <span
          aria-hidden
          className="absolute mt-0.5 -left-4 h-4 w-0.5 bg-accent transition-transform duration-200 opacity-60"
          style={{ transform: `translateY(${active * 56}px)` }}
        />

        {LINKS.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            className={({ isActive }) =>
              `relative block pl-6 tracking-widest transition-transform duration-300 transform
              hover:-translate-y-1 hover:scale-105 text-base
              ${
                isActive
                  ? "text-accent"
                  : "text-white hover:text-[#0051ff] hover:[text-shadow:0_0_8px_rgba(0,81,255,0.8)] opacity-80"
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
