// src/App.jsx
import { Routes, Route } from "react-router-dom";
import { useViewportScale } from "./hooks/useViewportScale";

import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Solution from "./pages/Solution";
import Methodology from "./pages/Methodology";
import Leadership from "./pages/Leadership";
import Contact from "./pages/Contact";
import TechBackground from "./components/TechBackground";
import Particles from "./components/Particles";
import HeaderBar from "./components/HeaderBar";
import Insights from "./pages/Insights";

export default function App() {
  // 1. compute a scale factor relative to a 1440px design
  const scale = useViewportScale(2400);

  return (
    // Outer wrapper: will fill the screen background, etc.
    <div className="min-h-screen bg-primary text-white overflow-hidden">
      {/* 
        Instead of rendering Header/Sidebar/Particles directly,
        we nest them inside a fixed-width container (1440px).
        Then we scale that container by the computed factor.
      */}
      <div
        // 2. set the “design width” of the inner wrapper to exactly 1440px
        style={{
          width: "2400px",
          // scale up/down based on `scale`; origin = top-left ensures it anchors at (0,0)
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        {/* Everything inside here is “rendered at 1440px design width,”
            then the outer div will visually shrink or grow it uniformly. */}

        {/* TechBackground is behind everything */}
        <TechBackground />

        {/* These sit at fixed positions, but because they're inside
            the 1440px wrapper, their CSS “left-36/top-96” now resolves
            relative to a 1440px coordinate system. */}
        <HeaderBar />
        <Sidebar />
        <Particles count={500} />

        {/* main content */}
        <main className="flex-1 pt-11">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/solution" element={<Solution />} />
            <Route path="/methodology" element={<Methodology />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </div>
  );
}
