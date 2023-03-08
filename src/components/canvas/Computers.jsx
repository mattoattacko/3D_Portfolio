import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber'; //canvas is just an empty canvas that lets us put something on it
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'; //OrbitControls is a camera that lets us move around the scene

import CanvasLoader from '../Loader'

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf')

  return (
    <mesh>    
      <hemisphereLight intensity={0.15} groundColor='black' />
      <pointLight intensity={1} />
      <spotLight 
        position={[ -20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={0.75}
        position={[0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

// The Computer // 
// explained at ~50min https://www.youtube.com/watch?v=0fYi8SGA20k
const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }} //x, y, z axis. field of view
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* loader while model is loading */}
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls //camera controls
          enableZoom={false} 
          maxPolarAngle={Math.PI / 2} //max angle you can move the camera up
          minPolarAngle={Math.PI / 2} //max angle you can move the camera down
        />
        <Computers />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas