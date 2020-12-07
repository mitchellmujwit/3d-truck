import React from 'react'
import { useGLTFLoader } from "drei";

const Car = () => {
  const gltf = useGLTFLoader('DumCar.gltf')
  return <primitive object={gltf.scene} position={[0, 0, 0]} />
}

export default Car;
