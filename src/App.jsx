import {
  PerspectiveCamera,
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
import Home from "@/scenes/Home";
import ScrollManager from "./components/Reusable/ScrollManager";
import Menu from "./components/Menu";
import Planets from "./components/Fiber/Planets";
import { ISSModel } from "./components/Fiber/ISSModel";
import SkillsOrbit from "./components/Fiber/SkillsOrbit";
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
      <Suspense fallback={null}>
        <Canvas
          id="canvas"
          style={{ position: "fixed" }}
          shadowMap
          colorManagement
        >
          <color attach="background" args={["#000000"]} />

          <ScrollControls pages={5} damping={0.1}>
            <Lighting />
            <StarsAnimated />
            <Scroll>
              {/* <SoftShadows /> */}
              {/* page items */}
              {/* <Sparkles position={[0, 0, 0]} scale={15} size={10} noise={3} /> */}
              {/* <TestSquare position={[0, 0, 0]} /> */}
              <Planets position={[0, 0, 0]} />
              <ISSModel scale={0.05} position={[0, -8, 0]} />
              <SkillsOrbit position={[0, -23, 0]} />

              {/* <MainCity position={[0, -80, 0]} /> */}
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
        </Canvas>
      </Suspense>
      <Loader />
      <Menu
        onSectionChange={setSection}
        menuOpen={menuOpened}
        setMenuOpen={setMenuOpened}
      />
    </>
  );
}

export default App;
