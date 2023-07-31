import { DoubleSide } from "three";

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
      <mesh
        castShadow
        receiveShadow
        position={[innerX, innerY / 2, innerZ]}
        key={i + "box"}
      >
        <boxGeometry args={[0.9, innerY, 0.9]} />
        <meshPhongMaterial color={0x131313} metalness={1} roughness={1} />
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
        <meshPhongMaterial color={0x131313} side={DoubleSide} />
      </mesh>
    );

    outerBoxes.push(box);
  }

  return (
    <>
      {outerBoxes}
      {innerBoxes}
      <fog attach="fog" color={0x000000} near={10} far={25} />
      <mesh castShadow receiveShadow position={[0, -0.5, 0]}>
        <boxGeometry args={[50, 0.1, 50]} attach="geometry" />
        <meshLambertMaterial
          color={0x202020}
          side={DoubleSide}
          attach="material"
        />
      </mesh>
      <gridHelper args={[50, 50, 0xff0000, 0x000000]} />
    </>
  );
}

export default City;
