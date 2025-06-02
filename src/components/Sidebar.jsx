// src/components/Sidebar.jsx

import { NavLink, useLocation } from "react-router-dom";
import { useMemo } from "react";

const LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Methodology", to: "/methodology" },
  { label: "Solution", to: "/solution" },
  { label: "Team", to: "/leadership" },
  { label: "Contact", to: "/contact" },
];

export default function Sidebar() {
  const { pathname } = useLocation();
  const active = useMemo(
    () => LINKS.findIndex((l) => l.to === (pathname === "/" ? "/" : pathname)),
    [pathname]
  );

  return (
    <aside className="hidden md:block fixed left-36 top-96 -translate-y-1/2 z-30 mt-10">
      <nav className="flex flex-col gap-12">
        {LINKS.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            className={({ isActive }) =>
              `block pl-6 text-xl tracking-widest transition-transform duration-300 hover:-translate-y-1 hover:scale-105 ${
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
