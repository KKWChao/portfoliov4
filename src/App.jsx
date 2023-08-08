import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";

import About from "@/scenes/About";
import Home from "@/scenes/Home";
import Projects from "@/scenes/Projects";
import Contact from "@/scenes/Contact";
import Skills from "@/scenes/Skills";
import Menu from "@/components/Menu";

import Lighting from "@/components/Fiber/lighting";
import ScrollManager from "@/components/Reusable/ScrollManager";

import HomeBox from "@/components/Fiber/Skybox/homeBox";
import AboutScene from "@/components/Fiber/scenes/aboutScene";
import SkillScene from "@/components/Fiber/scenes/skillsScene";
import ProjectScene from "@/components/Fiber/scenes/projectScene";
import ContactScene from "@/components/Fiber/scenes/contactScene";

function App() {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    setMenuOpened(false);
  }, [section]);

  return (
    <>
      <Canvas id="canvas" style={{ position: "fixed" }}>
        <color attach="background" args={["#000000"]} />

        <ScrollControls pages={5} damping={0.1}>
          <Lighting />
          {/* <OrbitControls /> */}

          <Scroll>
            {/* page items */}
            <HomeBox />
            <AboutScene />
            <ProjectScene />
            <SkillScene />
            <ContactScene />
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

      <Menu
        onSectionChange={setSection}
        menuOpen={menuOpened}
        setMenuOpen={setMenuOpened}
      />
    </>
  );
}

export default App;
