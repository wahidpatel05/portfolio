import { useState } from 'react'
import { ReactLenis } from 'lenis/react'
import Header from './components/Header'
import '/src/index.css';
import Hero from './components/Hero';
import About from './components/About';
import Skill from './components/Skill';
import Project from './components/Project';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [count, setCount] = useState(0);

  useGSAP(() => {
    const elements = gsap.utils.toArray('.reveal-up');

    elements.forEach((element) => {
      gsap.fromTo(
        element,
        { y: 50, opacity: 0 }, // start state
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",   // trigger when element is 80% in viewport
            end: "bottom 60%",
            scrub: 0.5,         // smooth scrubbing effect
          },
        }
      );
    });
  });

  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Project />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </ReactLenis>
  );
}

export default App;
