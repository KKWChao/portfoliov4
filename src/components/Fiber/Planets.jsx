import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Planets(props) {
  useFrame(() => {
    // sunRef.current.rotation.x += 0.001
  });

  return (
    <group {...props}>
      <Earth />
      <Sun />
    </group>
  );
}

export default Planets;

/* Earth */
function Earth(props) {
  const [earthTexture, earthNormalMap, earthSpecularMap] = useTexture([
    "/assets/mesh/2k_earth_daymap.jpg",
    "/assets/mesh/earth_normal.jpg",
    "/assets/mesh/earth_specular.jpg",
  ]);
  const earthRef = useRef();

  useFrame(() => {
    earthRef.current.rotation.y += 0.001;
  });

  return (
    <mesh position={[2, 2, 2]} {...props} ref={earthRef}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshPhongMaterial
        map={earthTexture}
        normalMap={earthNormalMap}
        specularMap={earthSpecularMap}
      />
    </mesh>
  );
}

function Sun(props) {
  const [sunTexture] = useTexture(["/assets/mesh/2k_sun.jpg"]);
  const sunRef = useRef();

  useFrame(() => {
    sunRef.current.rotation.y += 0.0003;
  });

  return (
    <mesh {...props} ref={sunRef}>
      <sphereGeometry args={[2]} />
      <meshPhongMaterial
        map={sunTexture}
        emissive={0xffffff}
        emissiveIntensity={0.01}
      />
    </mesh>
  );
}
