import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import About from "./components/About";
import Gallery from "./pages/Gallery";

function Home() {
  return (
    <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

function App() {
  return (
    <Router>
      <div className="fixed -z-10 h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      <Navbar /> {/* Navbar is outside Routes so it stays on all pages */}

      <Routes>
        <Route path="/" element={<Home />} /> {/* Single scrollable page */}
        <Route path="/gallery" element={<Gallery />} /> {/* Separate About Page */}
      </Routes>
      
    </Router>
  );
}
export default App;