import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "drei";
import "./App.scss";

import Car from "./components/car";
import Door from "./components/door";
import Light from "./components/lights";

function App() {
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <Car />
          <Door />
          <Light />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </>
  );
}

export default App;
