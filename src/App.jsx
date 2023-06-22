import React, { useEffect, useLayoutEffect, useRef } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Token from "./Components/Token";
import Roadmap from "./Components/Roadmap";
import Footer from "./Components/Footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import AOS from "aos";
import "aos/dist/aos.css";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const main = useRef(null);

  useEffect(() => {
    AOS.init();
    
    document
      .querySelectorAll("img")
      .forEach((ele) => [ele.setAttribute("loading", "lazy")]);

  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      let heroHeader = new SplitType(".hero-header", { types: "chars" });
      let heroPara = new SplitType(".hero-para", { types: "lines" });
      let FooterHeader = new SplitType(".footer-logo", { types: "chars" });
      console.log(heroHeader);

      const heroanimation = gsap
        .timeline({ ease: "none" })
        .from(".header-logo", {
          opacity: 0,
          scale: 0,
        })
        .from(
          heroHeader.chars,
          {
            opacity: 0,
            stagger: 0.08,
            y: 10,
          },
          1
        )
        .from(
          heroPara.lines,
          {
            opacity: 0,
            scaleY: 0,
            stagger: 0.09,
          },
          5
        )
        .from(
          ".hero-btn",
          {
            xPercent: -200,
          },
          6
        )
        .from(".dextool", {
          autoAlpha: 0,
          ease: "bounce",
        })
        .from(".telegram", {
          autoAlpha: 0,
          ease: "bounce",
        })
        .from(".ether", {
          autoAlpha: 0,
          ease: "bounce",
          xPercent: 100,
        })
        .from(".hero-img", {
          autoAlpha: 0,
          xPercent: 100,
          ease: "none",
        })
        .from(".hero-img", {
          scale: 0.9,
        })
        .from(FooterHeader.chars, {
          opacity: 0,
          stagger: 0.09,
        });

      // ScrollTrigger.create({
      //   trigger: "#hero",
      //   animation: heroanimation,
      //   toggleActions: "restart none restart none",
      //   start: "0px 0px",
      //   markers: true,
      // });
    }, main);

    return () => ctx.revert();
  });

  return (
    <div
      className="bg-bg min-h-screen w-full relative font-Work_Sans text-white"
      ref={main}
    >
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
