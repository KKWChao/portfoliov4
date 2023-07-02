import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Loader } from "@react-three/drei";
import { AnimatePresence } from "framer-motion";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AnimatePresence>
      <Canvas
        shadows
        id="canvas"
        color={"#000000"}
        style={{ position: "fixed" }}
        camera={{ position: [20, 10, 10], fov: 45 }}
      >
        <color attach="background" args={["#000000"]} />
        <Suspense fallback={null}>
          <App />
        </Suspense>
      </Canvas>
      <Loader />
    </AnimatePresence>
  </React.StrictMode>
);
