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
    <meshPhongMaterial color={"red"} key={"4"} />,
    <meshPhongMaterial color={"blue"} key={"5"} />,
    <meshPhongMaterial color={"green"} key={"6"} />,
    <meshPhongMaterial color={"yellow"} key={"7"} />,
  ];

  const backEnd = [
    <meshPhongMaterial color={"red"} key={"0"} />,
    <meshPhongMaterial color={"blue"} key={"1"} />,
    <meshPhongMaterial color={"green"} key={"2"} />,
    <meshPhongMaterial color={"yellow"} key={"3"} />,
    <meshPhongMaterial color={"red"} key={"4"} />,
    <meshPhongMaterial color={"blue"} key={"5"} />,
    <meshPhongMaterial color={"green"} key={"6"} />,
    <meshPhongMaterial color={"yellow"} key={"7"} />,
  ];

  const tools = [
    <meshPhongMaterial color={"red"} key={"0"} />,
    <meshPhongMaterial color={"blue"} key={"1"} />,
    <meshPhongMaterial color={"green"} key={"2"} />,
    <meshPhongMaterial color={"yellow"} key={"3"} />,
    <meshPhongMaterial color={"red"} key={"4"} />,
    <meshPhongMaterial color={"blue"} key={"5"} />,
    <meshPhongMaterial color={"green"} key={"6"} />,
    <meshPhongMaterial color={"yellow"} key={"7"} />,
  ];

  useFrame(({ clock }) => {
    frontRef.current.rotation.z = -clock.getElapsedTime() * 0.5;
    backRef.current.rotation.y = clock.getElapsedTime() * 0.5;
    toolRef.current.rotation.z = clock.getElapsedTime() * 0.5;
  });
  return (
    <>
      <group
        {...props}
        ref={frontRef}
        rotation={[Math.PI / 3, Math.PI / 3, Math.PI / 6]}
      >
        <ShapeOrbit
          focal={[0, 0, 0]}
          count={frontEnd.length}
          radius={2.5}
          array={frontEnd}
          tilt={Math.PI / 2}
        />
      </group>
      <group {...props} ref={backRef}>
        <ShapeOrbit
          focal={[0, 0, 0]}
          count={backEnd.length}
          radius={3}
          array={backEnd}
          tilt={-Math.PI}
        />
      </group>

      <group {...props} ref={toolRef} rotation={[-Math.PI / 3, Math.PI / 6, 0]}>
        <ShapeOrbit
          focal={[0, 0, 0]}
          count={tools.length}
          radius={2}
          array={backEnd}
          tilt={Math.PI / 2}
        />
      </group>
      <group {...props}>
        <mesh castShadow receiveShadow>
          <sphereGeometry args={[0.3]} />
          <meshPhongMaterial color={"white"} />
        </mesh>
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
      <mesh key={i} position={[x, y, z]} scale={0.1} castShadow receiveShadow>
        <boxGeometry />
        {array[i]}
      </mesh>
    );
  }

  return <group rotation={[tilt, 0, 0]}>{shapes}</group>;
}

export default SkillsOrbit;
