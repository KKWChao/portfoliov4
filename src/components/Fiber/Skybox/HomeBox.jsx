import { OrbitControls, Stars, useTexture } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function HomeBox({ ...props }) {
  const map = useTexture("/assets/mesh/anime_art_style_lava_world.jpg");
  const sphereRef = useRef();
  const { viewport } = useThree();

  useFrame(({ clock }) => {
    sphereRef.current.rotation.y = clock.getElapsedTime() * 0.05;
  });
  return (
    <group {...props} position={[0, 0, 3]} ref={sphereRef}>
      <mesh>
        <sphereGeometry args={[4, 64, 64]} />
        <meshStandardMaterial map={map} side={THREE.BackSide} />
      </mesh>
    </group>
  );
}

export default HomeBox;
