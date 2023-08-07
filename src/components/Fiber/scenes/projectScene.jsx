import { Image, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { atom, useAtom } from "jotai";
import { useEffect, useRef } from "react";

export const projects = [
  {
    id: 0,
    imageSrc: "./assets/images/ProjectImage1.png",
    projectName: "Storefront",
    projectDescription:
      "Cyberwares is a sleek e-commerce platform offering cutting-edge tech products. Powered by Next.js, it delivers a seamless shopping experience with responsive design. Secure payments are facilitated by Stripe integration. The admin site, built with Next.js, NextAuth, Tailwind CSS, and Chart.js, enables efficient product and category management. Explore and purchase the latest tech innovations with Cyberwares.",
    githubLink: "https://github.com/KKWChao/CyberwaresFrontend",
    projectLink: "https://cyberwares-frontend.vercel.app/",
    technologies: ["NextJS", "MongoDB", "Node.js", "Stripe"],
  },
  {
    id: 1,
    imageSrc: "./assets/images/ProjectImage2.png",
    projectName: "Admin page",
    projectDescription:
      "Explore Cyberwares Admin, a web application designed for product management and administration. This site serves as the back-end administration panel for the Cyberwares e-commerce store. It provides a user-friendly interface to manage product inventory, categories, and other essential information. Experience efficient product management and seamless integration with the Cyberwares e-commerce platform.",
    githubLink: "https://github.com/KKWChao/CyberwaresAdmin",
    projectLink: "https://cyberwares-admin.vercel.app/",
    technologies: [
      "NextJS",
      "Next Auth",
      "MongoDB",
      "TailwindCSS",
      "Google Cloud API",
    ],
  },
  {
    id: 2,
    imageSrc: "./assets/images/ProjectImage4.png",
    projectName: "Youtube Clone",
    projectDescription:
      "Experience the YouTube Clone, a dynamic web application developed with React, JavaScript, and Material-UI (MUI). Explore a vast library of videos, search for your favorite content, and enjoy an immersive viewing experience. This clone emulates the popular video-sharing platform, providing a seamless interface for discovering and watching videos.",
    githubLink: "https://github.com/KKWChao/YoutubeClone",
    projectLink:
      "https://632a22c204beb617c6d1078a--meek-marzipan-6344b2.netlify.app/",
    technologies: ["React", "MUI", "API"],
  },

  {
    id: 3,
    imageSrc: "./assets/images/ProjectImage3.png",
    projectName: "EvoGym",
    projectDescription:
      "Discover EvoGym Demo, a sleek and interactive fitness website that showcases the features and capabilities of EvoGym. Explore various workout routines, browse fitness classes, and learn about personalized training programs. With its modern design and user-friendly interface, EvoGym Demo offers an immersive experience for fitness enthusiasts looking to achieve their health and wellness goals.",
    projectLink: "https://evogym-demo.pages.dev/",
    githubLink: "https://github.com/KKWChao/DemoSite",
    technologies: ["React", "TypeScript", "TailwindCSS"],
  },
  {
    id: 4,
    imageSrc: "./assets/images/ProjectImage5.png",
    projectName: "Sociopedia",
    projectDescription:
      "A social media site to show the world your personality. ",
    projectLink: "",
    githubLink: "https://github.com/KKWChao/FullstackSite",
    technologies: ["MongoDB", "React", "Node.js", "MUI"],
  },
];

export const currentProjectAtom = atom(Math.floor(projects.length / 2));

function ProjectScene() {
  const { viewport } = useThree();
  const [currentProject] = useAtom(currentProjectAtom);

  return (
    <group position-y={-viewport.height * 2}>
      {projects.map((project, index) => (
        <motion.group
          position={[index * 3.5, 0, -2]}
          key={"project_" + index}
          animate={{
            x: 0 + (index - currentProject) * 3.5,
            y: currentProject === index ? 0 : -0.3,
            z: currentProject === index ? -2 : -4,
            rotateX: currentProject === index ? 0 : -Math.PI / 4,
          }}
        >
          <Project project={project} highlighted={index === currentProject} />
        </motion.group>
      ))}
    </group>
  );
}

function Project(props) {
  const { project, highlighted } = props;

  const background = useRef();
  const bgOpacity = useMotionValue(0.4);

  useEffect(() => {
    animate(bgOpacity, highlighted ? 0.7 : 0.4);
  }, [highlighted]);

  useFrame(() => {
    background.current.material.opacity = bgOpacity.get();
  });

  return (
    <group {...props}>
      <mesh position-z={-0.03} ref={background}>
        <planeGeometry args={[3, 5]} />
        <meshBasicMaterial color={"gray"} transparent opacity={0.9} />
      </mesh>
      <Image
        scale={[2.9, 2.1, 0.1]}
        url={project.imageSrc}
        toneMapped={false}
        position={[0, 1.4, 0]}
        onClick={() => window.open(project.projectLink)}
      />
      <Text
        maxWidth={3}
        anchorX={"left"}
        anchorY={"top"}
        fontSize={0.3}
        position={[-1.2, 0.1, -0.01]}
      >
        {project.projectName.toUpperCase()}
      </Text>
      <Text
        maxWidth={2.5}
        anchorX={"left"}
        anchorY={"top"}
        fontSize={0.14}
        position={[-1.2, -0.3, -0.01]}
      >
        {project.projectDescription}
      </Text>
      <Text
        maxWidth={1}
        anchorY={"bottom"}
        fontSize={0.15}
        position={[0, -2.3, 0]}
      ></Text>
    </group>
  );
}

export default ProjectScene;
