import StarsAnimated from "@/components/Fiber/starsAnimated";

function Lighting() {
  return (
    <>
      {/* <ambientLight intensity={0.3} /> */}
      <directionalLight
        position={[0, 0, 3]}
        castShadow
        shadow-mapSize={[1024, 1024]}
      >
        <orthographicCamera attach="shadow-camera" args={[-10, 10, 10, -10]} />
      </directionalLight>
      <StarsAnimated />

      {/* <ambientLight /> */}
    </>
  );
}

export default Lighting;
