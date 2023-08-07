import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AnimatePresence } from "framer-motion";
import { Loader } from "@react-three/drei";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={null}>
      <AnimatePresence>
        <App />
      </AnimatePresence>
    </Suspense>
    <Loader />
  </React.StrictMode>
);
