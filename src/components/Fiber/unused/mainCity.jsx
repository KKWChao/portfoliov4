/* UNUSED */

// import { useRef } from "react";
// import City from "./City";
// import AnimatedPoints from "./AnimatedPoints";
// import { useFrame } from "@react-three/fiber";
// import { Shadow } from "@react-three/drei";

// function MainCity(props) {
//   const { position } = props;
//   const cityRef = useRef();

//   useFrame(({ clock }) => {
//     cityRef.current.rotation.y = clock.getElapsedTime() / 6;
//   });
//   return (
//     <>
//       <directionalLight
//         position={[0, -60, 0]}
//         castShadow
//         lookAt={[0, -80, 0]}
//         intensity={5}
//         shadow-mapSize-width={1024}
//         shadow-mapSize-height={1024}
//       >
//         <perspectiveCamera attach="shadow-camera" />
//       </directionalLight>

//       <group ref={cityRef} position={position}>
//         {/* <Shadow color="black" colorStop={0} opacity={0.5} fog={false} /> */}
//         <City />
//         <AnimatedPoints horizontal={true} invert={true} />
//         <AnimatedPoints horizontal={true} invert={false} />
//         <AnimatedPoints horizontal={false} invert={true} />
//         <AnimatedPoints horizontal={false} invert={false} />
//       </group>
//     </>
//   );
// }

// export default MainCity;
