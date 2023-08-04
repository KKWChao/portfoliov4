function Lighting() {
  return (
    <>
      {/* <ambientLight intensity={0.3} /> */}
      <directionalLight
        position={[0, 0, 1]}
        castShadow
        shadow-mapSize={[1024, 1024]}
      >
        <orthographicCamera attach="shadow-camera" args={[-10, 10, 10, -10]} />
      </directionalLight>
    </>
  );
}

export default Lighting;
