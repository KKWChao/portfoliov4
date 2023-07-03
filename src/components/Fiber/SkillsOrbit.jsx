import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useHelper } from "@react-three/drei";
import { DirectionalLightHelper } from "three";

function Dodecahedron({ ...props }) {
  return (
    <mesh {...props}>
      <dodecahedronGeometry scale={2} />
      <meshPhongMaterial
        roughness={0.75}
        emissive={"white"}
        emissiveIntensity={2}
      />
      {/* <meshBasicMaterial color={"white"} /> */}
    </mesh>
  );
}

function Content() {
  const ref = useRef();
  useFrame(
    () =>
      (ref.current.rotation.x =
        ref.current.rotation.y =
        ref.current.rotation.z +=
          0.01)
  );
  return <group ref={ref}></group>;
}

function SkillsOrbit({ position }) {
  const dirLight = useRef();
  useHelper(dirLight, DirectionalLightHelper, "cyan");
  return (
    <group position={position}>
      <Dodecahedron />
    </group>
  );
}

export default SkillsOrbit;
