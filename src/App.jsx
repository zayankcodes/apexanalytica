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
    
      <div
     
        style={{
          width: "2400px",
         
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        
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
