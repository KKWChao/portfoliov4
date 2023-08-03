import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Planets(props) {
  const [
    mercuryTexture,
    venusTexture,
    marsTexture,
    jupiterTexture,
    saturnTexture,
    uranusTexture,
    neptuneTexture,
  ] = useTexture([
    "/assets/mesh/2k_mercury.jpg",
    "/assets/mesh/2k_venus.jpg",
    "/assets/mesh/2k_mars.jpg",
    "/assets/mesh/2k_jupiter.jpg",
    "/assets/mesh/2k_saturn.jpg",
    "/assets/mesh/2k_uranus.jpg",
    "/assets/mesh/2k_neptune.jpg",
  ]);
  return (
    <group {...props} rotation={[Math.PI / 8, 0, 0]} scale={1}>
      <Sun size={1} rotation={0.0003} />
      <Planet
        texture={mercuryTexture}
        size={0.02}
        rotation={0.0008}
        speed={0.5}
        distance={1.5}
      />
      <Planet
        texture={venusTexture}
        size={0.09}
        rotation={0.004}
        speed={1}
        distance={1.8}
      />
      <Earth size={0.1} speed={0.7} distance={2.5} />
      <Planet
        texture={marsTexture}
        size={0.05}
        rotation={0.0016}
        speed={0.5}
        distance={3}
      />
      <Planet
        texture={jupiterTexture}
        size={0.5}
        rotation={0.01}
        speed={0.29}
        distance={5}
      />
      {/* NEED TO ADD SATURNS RINGS */}
      <Planet
        texture={saturnTexture}
        size={0.1}
        rotation={0.001}
        speed={0.22}
        distance={6}
      />
      <Planet
        texture={uranusTexture}
        size={0.2}
        rotation={0.001}
        speed={0.15}
        distance={7}
      />
      {/* NEPTUNE RINGS */}
      <Planet
        texture={neptuneTexture}
        size={0.19}
        rotation={0.001}
        speed={0.12}
        distance={8}
      />
    </group>
  );
}

/* SUN */
function Sun(props) {
  const [sunTexture] = useTexture(["/assets/mesh/2k_sun.jpg"]);
  const sunRef = useRef();

  useFrame(() => {
    sunRef.current.rotation.y += props.rotation;
  });

  return (
    <mesh ref={sunRef}>
      <sphereGeometry args={[props.size]} />
      <meshPhongMaterial
        map={sunTexture}
        emissive={0xffffff}
        emissiveIntensity={0.01}
      />
    </mesh>
  );
}

/* Earth */
function Earth(props) {
  const [
    earthTexture,
    earthNormalMap,
    earthSpecularMap,
    earthDisplacementMap,
    moonTexture,
  ] = useTexture([
    "/assets/mesh/2k_earth_daymap.jpg",
    "/assets/mesh/earth_normal.jpg",
    "/assets/mesh/earth_specular.jpg",
    "/assets/mesh/earth_displacement.jpg",
    "/assets/mesh/2k_moon.jpg",
  ]);
  const earthRef = useRef();
  const moonRef = useRef();
  const earthGroupRef = useRef();
  const xAxis = 3;
  const speed = 0.5;

  useFrame(({ clock }) => {
    earthRef.current.rotation.y += 0.005;
    moonRef.current.rotation.y += 0.0001;

    moonRef.current.position.x = Math.sin(clock.getElapsedTime() * -1) * 0.1;
    moonRef.current.position.z = Math.cos(clock.getElapsedTime() * -1) * 0.1;

    earthGroupRef.current.position.x =
      Math.sin(clock.getElapsedTime() * props.speed) * props.distance;
    earthGroupRef.current.position.z =
      Math.cos(clock.getElapsedTime() * props.speed) * props.distance;
  });

  return (
    <group ref={earthGroupRef}>
      <mesh ref={earthRef} castShadow receiveShadow>
        <sphereGeometry args={[props.size, 32, 32]} />
        <meshPhongMaterial
          map={earthTexture}
          normalMap={earthNormalMap}
          specularMap={earthSpecularMap}
          displacementMap={earthDisplacementMap}
          shininess={1000}
          displacementScale={0.01}
        />
      </mesh>
      <mesh position={[0.1, 0, 0]} ref={moonRef} castShadow receiveShadow>
        <sphereGeometry args={[0.01]} />
        <meshPhongMaterial map={moonTexture} />
      </mesh>
    </group>
  );
}

function Planet(props) {
  const texture = props.texture;
  const ref = useRef();

  useFrame(({ clock }) => {
    ref.current.rotation.y += props.rotation;

    ref.current.position.x =
      Math.sin(clock.getElapsedTime() * props.speed) * props.distance;
    ref.current.position.z =
      Math.cos(clock.getElapsedTime() * props.speed) * props.distance;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[props.size]} />
      <meshPhongMaterial
        map={texture}
        emissive={0xffffff}
        emissiveIntensity={0.01}
      />
    </mesh>
  );
}

export default Planets;
