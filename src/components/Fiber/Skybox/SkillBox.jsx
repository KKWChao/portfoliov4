// import { OrbitControls, Stars, useTexture } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";
// import { useRef } from "react";
// import * as THREE from "three";

// function SkillBox({ ...props }) {
//   const map = useTexture("/assets/mesh/anime_art_style_lava_world.jpg");
//   const sphereRef = useRef();

//   useFrame(({ clock }) => {
//     sphereRef.current.rotation.y = clock.getElapsedTime() * 0.05;
//   });
//   return (
//     <group {...props} ref={sphereRef}>
//       <mesh>
//         <sphereGeometry args={[4, 64, 64]} />
//         <meshStandardMaterial map={map} side={THREE.BackSide} />
//       </mesh>
//     </group>
//   );
// }

// export default SkillBox;
