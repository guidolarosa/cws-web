import Head from "next/head";
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

const Sphere = (props : any) => {
  // This reference will give us direct access to the mesh
  const mesh : any = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame

  useFrame((state, delta) => (mesh.current.rotation.y += delta))
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={props.scale}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <sphereGeometry args={[1.5, 10, 10]}/>
      <meshStandardMaterial color={'white'} wireframe />
    </mesh>
  )
}

export default function TJSScene(props : any) {
  return (
    <Canvas className={'w-full h-full'}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Sphere position={[0, 0, 0]} scale={props.scale ? props.scale : 1.75}/>
    </Canvas>
  );
}
