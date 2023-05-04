import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { theme } from "./../../../tailwind.config";
import { setDarkThemeObserver } from "@/utils/utils";

const Sphere = (props: any) => {
  // This reference will give us direct access to the mesh
  const mesh: any = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // Subscribe this component to the render-loop, rotate the mesh every frame

  useFrame((state, delta) => (mesh.current.rotation.y += delta));
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
      <sphereGeometry args={[1.5, 10, 10]} />
      <meshStandardMaterial color={props.color} wireframe />
    </mesh>
  );
};

const Plane = (props: any) => {
  // This reference will give us direct access to the mesh
  const mesh: any = useRef();
  // Subscribe this component to the render-loop, rotate the mesh every frame

  // useFrame((state, delta) => (mesh.current.rotation.x += delta))
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh {...props} ref={mesh} scale={props.scale} rotation={[0, 0, 0]}>
      <planeGeometry args={[5.5, 5.5]} />
      <meshStandardMaterial color={props.color} />
    </mesh>
  );
};
export default function TJSScene(props: any) {
  const [sphereColor, setSphereColor] = useState(theme.colors.primary['500']);
  const [planeColor, setPlaneColor] = useState('#FFFFFF');

  useEffect(() => {
    setDarkThemeObserver((e : any) => {
      setSphereColor(
        e[0].target.classList[0] === "dark"
          ? theme.colors.dark["500"]
          : theme.colors.primary["500"]
      );
      setPlaneColor(
        e[0].target.classList[0] === "dark"
          ? '#000000'
          : '#FFFFFF'
      );
    });
  }, []);

  return (
    <Canvas className={"w-full h-full"}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {props.showPlane && <Plane color={planeColor}/>}
      <Sphere
        position={[0, 0, 0]}
        scale={props.scale ? props.scale : 1.75}
        color={sphereColor}
      />
    </Canvas>
  );
}
