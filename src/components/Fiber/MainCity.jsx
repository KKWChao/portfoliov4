import { useRef } from "react";
import City from "./City";
import AnimatedPoints from "./AnimatedPoints";
import { useFrame } from "@react-three/fiber";

function MainCity() {
  const cityRef = useRef();

  useFrame(({ clock }) => {
    cityRef.current.rotation.y = clock.getElapsedTime() / 6;
  });
  return (
    <group ref={cityRef}>
      <City />
      <AnimatedPoints horizontal={true} invert={true} />
      <AnimatedPoints horizontal={true} invert={false} />
      <AnimatedPoints horizontal={false} invert={true} />
      <AnimatedPoints horizontal={false} invert={false} />
    </group>
  );
}

export default MainCity;
