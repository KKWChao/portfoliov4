import { Shadow } from "@react-three/drei";

function Lighting() {
  return (
    <>
      {/* <directionalLight intensity={4} color={"red"} position={[30, 10, 20]}>
        <perspectiveCamera attach="shadow-camera" />
      </directionalLight>
      <directionalLight intensity={4} color={"blue"} position={[-30, 10, -20]}>
        <perspectiveCamera attach="shadow-camera" />
      </directionalLight> */}

      <directionalLight
        position={[20, 10, 20]}
        castShadow
        intensity={1}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      >
        <perspectiveCamera attach="shadow-camera" />
      </directionalLight>
      <fog attach="fog" color={0x000000} near={2} far={35} />
      <Shadow color="black" colorStop={0} opacity={0.5} fog={false} />
      <ambientLight />
    </>
  );
}

export default Lighting;
