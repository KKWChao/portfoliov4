import { DoubleSide } from "three";
import { Cloud } from "@react-three/drei";

function City() {
  const innerMin = 0;
  const innerMax = 5;
  const innerHeight = 14;
  const innerHeightMin = 6;

  let innerBoxes = [];
  for (let i = 0; i < 20; i++) {
    // outside
    const innerX =
      (Math.floor(Math.random() * (innerMax - innerMin) + innerMin) + 0.5) *
      (Math.random() < 0.5 ? -1 : 1);
    const innerY = Math.ceil(
      Math.random() * (innerHeight - innerHeightMin) + innerHeightMin
    );
    const innerZ =
      (Math.floor(Math.random() * (innerMax - innerMin) + innerMin) + 0.5) *
      (Math.random() < 0.5 ? -1 : 1);

    const box = (
      <mesh castShadow position={[innerX, innerY / 2, innerZ]} key={i + "box"}>
        <boxGeometry args={[0.9, innerY, 0.9]} />
        <meshPhongMaterial color={0x808080} metalness={1} roughness={1} />
      </mesh>
    );

    innerBoxes.push(box);
  }

  const outerMax = 25;
  const outerHeight = 6;

  let outerBoxes = [];

  for (let i = 0; i < 600; i++) {
    // outside
    const outerX =
      (Math.floor(Math.random() * outerMax) + 0.5) *
      (Math.random() < 0.5 ? -1 : 1);
    const outerZ =
      (Math.floor(Math.random() * outerMax) + 0.5) *
      (Math.random() < 0.5 ? -1 : 1);

    const outerY = Math.ceil(Math.random() * outerHeight);
    const box = (
      <mesh
        position={[outerX, outerY / 2, outerZ]}
        key={i + "box"}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[0.8, outerY, 0.8]} />
        <meshPhongMaterial color={0x808080} side={DoubleSide} />
      </mesh>
    );

    outerBoxes.push(box);
  }

  return (
    <>
      {outerBoxes}
      {innerBoxes}
      <mesh receiveShadow position={[0, -0.5, 0]}>
        <boxGeometry args={[50, 0.1, 50]} attach="geometry" />
        <meshLambertMaterial
          color={0x46494d}
          side={DoubleSide}
          attach="material"
        />
      </mesh>
      <gridHelper args={[50, 50, 0xff0000, 0x000000]} />
      {/* <mesh position={[0, 10, 0]}>
        <Cloud opacity={0.3} width={20} depth={2} segments={40} />
      </mesh> */}
    </>
  );
}

export default City;
