import Head from "next/head";
import React, { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { theme } from './../../../tailwind.config'
import { setDarkThemeObserver } from "@/utils/utils";
import GlitchEffect from './GlitchEffect'

const Torus = (props : any) => {
  // This reference will give us direct access to the mesh
  const mesh : any = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame

  useFrame((state, delta) => {
    mesh.current.rotation.z += delta / 4
  })
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={props.scale}
      rotation={[0,Math.PI / 2,0]}
      position={[0,0,0]}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <torusGeometry args={[10, 3, 20, 64]}/>
      <meshStandardMaterial color={props.color} wireframe />
    </mesh>
  )
}

export default function TJSTorus(props : any) {

  const [torusColor, setTorusColor] = useState(theme.colors.primary['500']);
  const [planeColor, setPlaneColor] = useState('transparent');

  const setColors = () => {
    const html =  document.querySelector('html');

    if (html) {
      setTorusColor(
        html.classList[0] === "dark"
          ? theme.colors.dark["500"]
          : theme.colors.primary["500"]
      );
      setPlaneColor(
        html.classList[0] === "dark"
          ? theme.colors.dark['950']
          : theme.colors.primary['50']
      );
    }
  }

  useEffect(() => {
    setColors();
    setDarkThemeObserver((e : any) => {
      setColors();
    })
  }, []);

  return (
    <Canvas 
      className={'w-full h-full'}
      camera={{
        position: [0, 0, -15],
        rotation: [-Math.PI / 2, 0, Math.PI / 2]
      }}
    >
      <color attach="background" args={[planeColor]} />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Torus position={[0, 0, 0]} scale={props.scale ? props.scale : 1.75} color={torusColor}/>
      <GlitchEffect />
    </Canvas>
  );
}
