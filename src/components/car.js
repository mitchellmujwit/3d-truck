import React from "react"
import { useGLTFLoader } from "drei"

const Car = () => {
  const gltf = useGLTFLoader("car.gltf")
  return (
    <mesh>
      <primitive object={gltf.scene} position={[0, 0, 0]} attach="geometry" />
    </mesh>
  )
}

export default Car
