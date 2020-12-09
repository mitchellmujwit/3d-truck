import React, { useRef, useState } from "react"
import { useGLTFLoader } from "drei"
import { useSpring, a } from "react-spring/three"

const Door = ({ position }) => {
  const gltf = useGLTFLoader("door.gltf")
  const ref = useRef(null)

  const [expand, setExpand] = useState(false)
  const props = useSpring({
    scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
  })

  return (
    <a.mesh
      onClick={() => setExpand(!expand)}
      scale={props.scale}
      castShadow
      position={position}
      ref={ref}
    >
      <primitive object={gltf.scene} ref={ref} position={[0, 0, 0]} />
    </a.mesh>
  )
}

export default Door
