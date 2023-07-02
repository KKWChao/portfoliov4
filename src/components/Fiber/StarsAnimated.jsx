import { Stars } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";

const StarsAnimated = () => {
  const starsRef = useRef();
  const starProps = useMemo(() => ({
    radius: 100,
    depth: 50,
    count: 5000,
    factor: 4,
    saturation: 0,
    speed: 1,
  }));
  useFrame(() => {
    starsRef.current.rotation.x += 0.0001;
    starsRef.current.rotation.y += 0.0001;
    starsRef.current.rotation.z += 0.0001;
  });
  return <Stars {...starProps} ref={starsRef} />;
};

export default StarsAnimated;
