import { Routes, Route } from "react-router-dom";

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
  return (
    <div className="flex min-h-screen flex-col bg-primary text-white">
  
      <HeaderBar />
      <Sidebar />
      <TechBackground/>
      <Particles count={500}/>

      {/* main content */}
      <main className="flex-1 pt-32 md:pl-[17rem]">  {/* 17rem = sidebar 56px + 40px */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/methodology" element={<Methodology />} />
          <Route path="/Insights" element={<Insights />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
