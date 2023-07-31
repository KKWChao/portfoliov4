import { RoundedBox } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function TestSquare(props) {
  const boxRef = useRef();

  useFrame(() => {
    boxRef.current.rotation.x += 0.001;
    boxRef.current.rotation.y += 0.001;
    boxRef.current.rotation.z += 0.001;
  });

  return (
    <mesh {...props} ref={boxRef}>
      <RoundedBox
        args={[10, 10, 10]}
        radius={0.5}
        smoothness={4}
        creaseAngle={0.4}
      >
        <meshPhongMaterial color={"red"} />
      </RoundedBox>
    </mesh>
  );
}

export default TestSquare;
