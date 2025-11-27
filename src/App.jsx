import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-black min-h-screen text-left">
      <Hero />
      {/* <Navbar /> */}
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
