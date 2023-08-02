function Lighting() {
  return (
    <>
      {/* <ambientLight intensity={0.3} /> */}
      <directionalLight
        position={[0, 0, 1]}
        castShadow
        shadow-mapSize-height={512}
        shadow-mapSize-width={512}
      />
    </>
  );
}

export default Lighting;
