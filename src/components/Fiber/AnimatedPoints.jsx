import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";

function AnimatedPoints({ ...props }) {
  const pointsRef = useRef();
  const particlesCount = 20;
  const gridSize = 25;
  let speed = 0.15;
  const direction = props.horizontal ? 0 : 2;
  const invert = props.invert;
  const bufferRef = useRef();

  const positions = useMemo(() => {
    let positionsArray = [];

    for (let i = 0; i < particlesCount; i++) {
      const x =
        Math.floor(Math.random() * gridSize) * (Math.random() < 0.5 ? -1 : 1);
      const y = Math.floor(Math.random() * (5 - 0.2) + 1);
      const z =
        Math.floor(Math.random() * gridSize) * (Math.random() < 0.5 ? -1 : 1);

      positionsArray.push(x, y, z);
    }
    return new Float32Array(positionsArray);
  }, [gridSize]);

  useFrame(() => {
    const positionsArray = positions;
    const numPoints = positionsArray.length;

    for (let i = direction; i < numPoints; i += 3) {
      // movement
      if (invert) {
        positions[i] += speed;
      } else {
        positions[i] -= speed;
      }

      // position reset conditions
      if (positionsArray[i] >= gridSize && invert) {
        positionsArray[i] = -gridSize;
      }

      if (positionsArray[i] <= -gridSize && !invert) {
        positionsArray[i] = gridSize;
      }
    }
    positions.set(positionsArray);
    bufferRef.current.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          ref={bufferRef}
          attach="attributes-position"
          count={positions.length / 3}
          itemSize={3}
          array={positions}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        color={"yellow"}
        size={0.5}
        transparent
      />
    </points>
  );
}

export default AnimatedPoints;
