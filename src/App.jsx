import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Token from "./Components/Token";
import Roadmap from "./Components/Roadmap";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="bg-bg min-h-screen w-full relative font-Work_Sans text-white">
      <Header />
      <Hero />
      <About />
      <Token />
      <Roadmap />
      <Footer />
    </div>
  );
};

export default App;