import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function SkillsOrbit(props) {
  const frontRef = useRef();
  const backRef = useRef();
  const toolRef = useRef();

  const frontEnd = [
    <meshPhongMaterial color={"red"} key={"0"} />,
    <meshPhongMaterial color={"blue"} key={"1"} />,
    <meshPhongMaterial color={"green"} key={"2"} />,
    <meshPhongMaterial color={"yellow"} key={"3"} />,
  ];

  const backEnd = [
    <meshPhongMaterial color={"red"} key={"0"} />,
    <meshPhongMaterial color={"blue"} key={"1"} />,
    <meshPhongMaterial color={"green"} key={"2"} />,
    <meshPhongMaterial color={"yellow"} key={"3"} />,
  ];

  const tools = [
    <meshPhongMaterial color={"red"} key={"0"} />,
    <meshPhongMaterial color={"blue"} key={"1"} />,
    <meshPhongMaterial color={"green"} key={"2"} />,
    <meshPhongMaterial color={"yellow"} key={"3"} />,
  ];

  useFrame(({ clock }) => {
    // frontRef.current.rotation.y = clock.getElapsedTime();
  });
  return (
    <>
      <group {...props} ref={frontRef}>
        <ShapeOrbit
          focal={[0, 0, 0]}
          count={frontEnd.length}
          radius={2}
          array={frontEnd}
          tilt={Math.PI / 6}
        />
      </group>
      <group {...props} ref={backRef}>
        <ShapeOrbit
          focal={[0, 0, 0]}
          count={backEnd.length}
          radius={1.5}
          array={backEnd}
          tilt={-Math.PI}
        />
      </group>
      <group {...props} ref={toolRef}>
        <ShapeOrbit
          focal={[0, 0, 0]}
          count={tools.length}
          radius={2.5}
          array={backEnd}
          tilt={Math.PI / 2}
        />
      </group>
    </>
  );
}

function ShapeOrbit(props) {
  const { count, radius, focal, array, tilt } = props;
  const shapes = [];

  for (let i = 0; i < count; i++) {
    const angle = (Math.PI * 2 * i) / count;
    const x = focal[0] + Math.cos(angle) * radius;
    const y = focal[1];
    const z = focal[2] + Math.sin(angle) * radius;

    shapes.push(
      <mesh key={i} position={[x, y, z]} scale={0.1}>
        <dodecahedronGeometry />
        {array[i]}
      </mesh>
    );
  }

  return <group>{shapes}</group>;
}

export default SkillsOrbit;
