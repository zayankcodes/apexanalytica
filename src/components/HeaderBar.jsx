// src/components/HeaderBar.jsx
import { Link } from "react-router-dom";

export default function HeaderBar() {
  return (
    <header
      className="
        fixed top-0 left-20 right-0 z-40
        flex items-center gap-6
        backdrop-blur-sm pl-8 pr-6
        border-b border-accent/20 shadow-sm
      "
      style={{ height: '110px' }}
    >
  
      <Link to="/" className="flex items-center gap-4">
        <img
          src="/logo1.PNG"
          alt="Logo"
          className="h-48 w-auto select-none mb-3"
        />
        <h1
          className="
            w-2/5 text-4xl font-display font-semibold
            tracking-[0.3em] text-white whitespace-nowrap
          "
        >
          APEX&nbsp;ANALYTICA
        </h1>
      </Link>

      <div className="ml-8 flex-1 min-w-[60%] border-t border-accent/50" />
    </header>
  );
}
