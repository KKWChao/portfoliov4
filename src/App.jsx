import {
  Scroll,
  ScrollControls,
  SoftShadows,
  Sparkles,
} from "@react-three/drei";
import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import baffle from "baffle";

import About from "@/scenes/About";
import Projects from "@/scenes/Projects";
import Contact from "@/scenes/Contact";
import Skills from "@/scenes/Skills";

import StarsAnimated from "@/components/Fiber/StarsAnimated";

import Lighting from "@/components/Fiber/Lighting";
import MainCity from "@/components/Fiber/MainCity";
import TestSquare from "@/components/Fiber/TestSquare";
// import Navbar from "@/components/Navbar";
import Footer from "./components/Footer";
import Home from "@/scenes/Home";

function App() {
  const { height } = useThree((state) => state.viewport);

  useEffect(() => {
    const target = baffle(".title");
    target.set({
      characters: "░▒▓░▒▓░▒▓░▒▓░▒",
      speed: 100,
    });
    target.start();
    target.reveal(2000, 1000);
  }, []);

  return (
    <ScrollControls pages={5.5} damping={0.1}>
      <Lighting />
      <Scroll>
        {/* <MainCity /> */}
        <StarsAnimated />
        {/* <SoftShadows /> */}
        {/* page items */}
        {/* <Sparkles
          position={[0, -height * 1.4, 0]}
          scale={15}
          size={10}
          noise={3}
        /> */}
        {/* <TestSquare position={[0, -height * 1.4, 0]} /> */}
      </Scroll>

      <Scroll html className="w-full" id="pages">
        {/* maybe add sticky nav with mobile hamburger? */}
        {/* <Navbar />  */}
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
        {/* <Footer /> */}
      </Scroll>
    </ScrollControls>
  );
}

export default App;
