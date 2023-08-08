import { useTexture } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";

function ContactScene() {
  const { viewport } = useThree();
  const moonRef = useRef();
  const [moonTexture] = useTexture([
    "/src/assets/meshes/earthMoonMesh/8k_moon.jpg",
  ]);

  useFrame(({ clock }) => {
    moonRef.current.rotation.x += clock.getElapsedTime() * 0.000001;
  });

  return (
    <group position-y={-viewport.height * 4}>
      <mesh position={[0, -4.3, 4]} ref={moonRef}>
        <sphereGeometry args={[4, 64, 64]} />
        <meshPhongMaterial map={moonTexture} />
      </mesh>
    </group>
  );
}

export default ContactScene;
