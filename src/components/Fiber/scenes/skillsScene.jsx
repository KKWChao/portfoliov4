import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

function SkillScene(props) {
  const { viewport } = useThree();

  const frontRef = useRef();
  const backRef = useRef();
  const toolRef = useRef();
  const sphereRef = useRef();

  /* FRONT END IMAGES */
  const [html, css, js, ts, react, tailWind, three, nextjs] = useTexture([
    "/src/assets/images/icons8-html-5-480.png",
    "/src/assets/images/icons8-css3-480.png",
    "/src/assets/images/icons8-javascript-480.png",
    "/src/assets/images/icons8-typescript-480.png",
    "/src/assets/images/icons8-tailwindcss-480.png",
    "/src/assets/images/threefiber.png",
    "/src/assets/images/icons8-react-native-480.png",
    "/src/assets/images/icons8-nextjs-480.png",
  ]);

  const frontEnd = [
    <meshPhongMaterial map={html} key={"html"} />,
    <meshPhongMaterial map={css} key={"css"} />,
    <meshPhongMaterial map={js} key={"js"} />,
    <meshPhongMaterial map={ts} key={"ts"} />,
    <meshPhongMaterial map={react} key={"react"} />,
    <meshPhongMaterial map={tailWind} key={"tailWind"} />,
    <meshPhongMaterial map={three} key={"three"} />,
    <meshPhongMaterial map={nextjs} color={"white"} key={"nextjs"} />,
  ];

  /* BACK END IMAGES */
  const [mongo, mySQL, python, express, node, graphQL] = useTexture([
    "/src/assets/images/icons8-mongodb-480.png",
    "/src/assets/images/mysql.png",
    "/src/assets/images/icons8-python-480.png",
    "/src/assets/images/icons8-express-js-480.png",
    "/src/assets/images/icons8-nodejs-480.png",
    "/src/assets/images/icons8-graphql-480.png",
  ]);
  const backEnd = [
    <meshPhongMaterial map={mongo} key={"mongo"} />,
    <meshPhongMaterial map={mySQL} key={"mySQL"} />,
    <meshPhongMaterial map={python} key={"python"} />,
    <meshPhongMaterial map={express} key={"express"} />,
    <meshPhongMaterial map={node} key={"node"} />,
    <meshPhongMaterial map={graphQL} key={"graphQL"} />,
  ];

  /* TOOLS IMAGES */

  const [vsCode, aws, github, heroku] = useTexture([
    "/src/assets/images/icons8-visual-studio-480.png",
    "/src/assets/images/icons8-amazon-web-services-480.png",
    "/src/assets/images/icons8-github-480.png",
    "/src/assets/images/icons8-heroku-480.png",
  ]);

  const tools = [
    <meshPhongMaterial map={vsCode} key={"vsCode"} />,
    <meshPhongMaterial map={aws} key={"aws"} />,
    <meshPhongMaterial map={github} key={"github"} />,
    <meshPhongMaterial map={heroku} key={"heroku"} />,
  ];

  /* SPHERE MESHES */
  const [color, displacement, normaldx, normalgl, roughness] = useTexture([
    "/src/assets/meshes/sphereMesh/MetalPlates006_1K_Color.png",
    "/src/assets/meshes/sphereMesh/MetalPlates006_1K_Displacement.png",
    "/src/assets/meshes/sphereMesh/MetalPlates006_1K_NormalDX.png",
    "/src/assets/meshes/sphereMesh/MetalPlates006_1K_NormalGL.png",
    "/src/assets/meshes/sphereMesh/MetalPlates006_1K_Roughness.png",
  ]);

  /* ROTATIONS */
  useFrame(({ clock }) => {
    backRef.current.rotation.z = -clock.getElapsedTime() * 0.3;
    frontRef.current.rotation.y = clock.getElapsedTime() * 0.3;
    toolRef.current.rotation.z = clock.getElapsedTime() * 0.3;

    sphereRef.current.rotation.x = clock.getElapsedTime() * -0.05;
    sphereRef.current.rotation.y = clock.getElapsedTime() * -0.05;
    sphereRef.current.rotation.z = clock.getElapsedTime() * -0.05;
  });
  return (
    <group position-y={-viewport.height * 3}>
      {/* Outer Orbit */}
      <group ref={backRef} rotation={[Math.PI / 3, Math.PI / 3, Math.PI / 6]}>
        <ShapeOrbit
          focal={[0, 0, 0]}
          count={backEnd.length}
          radius={2.5}
          array={backEnd}
          tilt={Math.PI / 2}
          invert={Math.PI}
        />
      </group>
      {/* Middle Orbit */}
      <group ref={frontRef}>
        <ShapeOrbit
          focal={[0, 0, 0]}
          count={frontEnd.length}
          radius={3}
          array={frontEnd}
          tilt={-Math.PI}
          invert={Math.PI}
        />
      </group>

      {/* Inner Orbit */}
      <group ref={toolRef} rotation={[-Math.PI / 3, Math.PI / 6, 0]}>
        <ShapeOrbit
          focal={[0, 0, 0]}
          count={tools.length}
          radius={2}
          array={tools}
          tilt={Math.PI / 2}
          invert={0}
        />
      </group>
      {/* Inner Sphere */}
      <group {...props}>
        <mesh castShadow receiveShadow ref={sphereRef}>
          <sphereGeometry args={[0.4, 64, 64]} />
          <meshPhongMaterial
            map={color}
            normalMap={normaldx}
            displacementMap={displacement}
            metalness={1}
            roughness={0.5}
            shininess={500}
            displacementScale={0.01}
          />
        </mesh>
      </group>
    </group>
  );
}

/* Box creation and orbit function */
function ShapeOrbit(props) {
  const { count, radius, focal, array, tilt, invert } = props;
  const shapes = [];

  for (let i = 0; i < count; i++) {
    const angle = (Math.PI * 2 * i) / count;
    const x = focal[0] + Math.cos(angle) * radius;
    const y = focal[1];
    const z = focal[2] + Math.sin(angle) * radius;

    shapes.push(
      <mesh key={i} position={[x, y, z]} scale={0.4} castShadow receiveShadow>
        <boxGeometry />
        {array[i]}
      </mesh>
    );
  }

  return <group rotation={[tilt, 0, invert]}>{shapes}</group>;
}

export default SkillScene;
