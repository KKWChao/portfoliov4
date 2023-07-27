import {
  Scroll,
  ScrollControls,
  SoftShadows,
  Sparkles,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Loader } from "@react-three/drei";
import { useEffect, useState } from "react";
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
import Home from "@/scenes/Home";
import ScrollManager from "./components/Reusable/ScrollManager";
import Menu from "./components/Menu";

function App() {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    setMenuOpened(false);
  }, [section]);

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
    <>
      <Canvas
        shadows
        id="canvas"
        color={"#000000"}
        style={{ position: "fixed" }}
        camera={{ position: [20, 10, 10], fov: 45 }}
      >
        <color attach="background" args={["#000000"]} />
        <Suspense fallback={null}>
          <ScrollControls pages={5} damping={0.1}>
            <Lighting />
            <StarsAnimated />
            <Scroll>
              {/* <SoftShadows /> */}
              {/* page items */}
              <Sparkles position={[0, 0, 0]} scale={15} size={10} noise={3} />

              <TestSquare position={[0, 0, 0]} />
              <MainCity position={[0, -80, 0]} />
            </Scroll>

            <Scroll html id="pages">
              <ScrollManager section={section} onSectionChange={setSection} />
              <Home />
              <About />
              <Projects />
              <Skills />
              <Contact />
            </Scroll>
          </ScrollControls>
        </Suspense>
        <Loader />
      </Canvas>
      <Menu
        onSectionChange={setSection}
        menuOpen={menuOpened}
        setMenuOpen={setMenuOpened}
      />
    </>
  );
}

export default App;
