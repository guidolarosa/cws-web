/* eslint-disable react/no-unknown-property */
import React, { Suspense, useMemo, useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Vector2 } from "three/src/math/Vector2";
import { damp } from "three/src/math/MathUtils";
import { MeshDistortMaterial, OrbitControls } from "@react-three/drei";
import GlitchEffect from './GlitchEffect';
import { useInView } from "react-intersection-observer";
import { theme } from "./../../../tailwind.config";
import colors from "tailwindcss/colors";
import { setDarkThemeObserver } from "@/utils/utils";
import { Vector3 } from "three";

const CustomPointLight = ({ color, intensity, position, resolution }: any) => {
  return <pointLight args={[color, 3]} position={position} />;
};

const Plane = (props: any) => {
  const mesh: any = useRef();
  return (
    <mesh {...props} ref={mesh} scale={10} rotation={[0, 0, 0]}>
      <planeGeometry args={[10, 10]} />
      <meshStandardMaterial color={'#FFFFFF'} />
    </mesh>
  );
};

const DistortedSphereMesh = ({
  resolution,
  wireframe,
  color,
  position
}: {
  resolution: number;
  wireframe: boolean;
  color: string;
  position: any;
}) => {
  const BASE_DISTORT = 0.65;
  const MAX_DISTORT = 20;

  const BASE_SPEED = 3;

  const meshRef = useRef<any>(null);
  const meshDistortMatRef = useRef<any>(null);

  const [mouseOver, setMouseOver] = useState<boolean>(false);
  const [clicking, setClicking] = useState<boolean>(false);
  const [scale, setScale] = useState<number>(2);

  useFrame(({ clock }: any) => {
    // console.log('frame');
    meshRef.current.rotation.y = clock.elapsedTime / 10;
  });
  
  useFrame((state, delta) => {
    if (meshDistortMatRef.current) {
      meshDistortMatRef.current.distort = damp(
        meshDistortMatRef.current.distort,
        mouseOver || clicking ? MAX_DISTORT : BASE_DISTORT,
        mouseOver || clicking ? 4 : 12,
        delta
      );
    }

    // console.log(simplex.current.simplex)

    // setScale(simplex.current.noise(state));
  });

  // alert(position)

  return (
    <mesh
      ref={meshRef}
      castShadow
      receiveShadow
      scale={scale}
      onPointerEnter={(e) => {
        // setMouseOver(true);
      }}
      onPointerLeave={(e) => {
        // setMouseOver(false);
      }}
      onPointerDown={(e) => {
        // setClicking(true);
      }}
      onPointerUp={(e) => {
        // setClicking(false);
      }}
      position={position}
      >
      <sphereBufferGeometry
        attach="geometry"
        args={[1, resolution ? resolution : 50, resolution ? resolution : 50]}
      />
      <MeshDistortMaterial
        wireframe={wireframe}
        ref={meshDistortMatRef}
        color={color}
        distort={BASE_DISTORT}
        speed={BASE_SPEED}
        metalness={0.3}
        roughness={0.9}
      />
    </mesh>
  );
};

// const VolSpotLight = () => {
//   return (
//     <SpotLight
//       castShadow
//       shadow-mapSize={new Vector2(1024, 1024)}
//       penumbra={1}
//       distance={20}
//       angle={1}
//       attenuation={20}
//       anglePower={20}
//       color="#6b6"
//       position={[4, -2, 8]}
//       intensity={4}
//     />
//   );
// };

const ThreeJSPageScene = (props: any) => {
  const { ref, inView } = useInView();
  const [blobColor, setBlobColor] = useState(theme.colors.primary['500']);
  const [planeColor, setPlaneColor] = useState('transparent');

  const setColors = () => {
    const html =  document.querySelector('html');

    if (html) {
      setBlobColor(
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

  const DisableRender = () => useFrame(() => null, 1000);

  return (
    <Canvas
      ref={ref}
      gl={{
        powerPreference: "high-performance",
        antialias: false,
        stencil: false,
        depth: false,
      }}
      // className="blur-xl"
      shadows={{ enabled: true, needsUpdate: true }}
      camera={{ position: [4.2, 0, 0] }}
    >
      <color attach="background" args={[planeColor]} />
      <OrbitControls autoRotate maxDistance={15} minDistance={5}/>
      {!inView && <DisableRender />}
      <Suspense fallback={null}>
        {/* <OrbitControls /> */}
        {/* <axesHelper args={[2]} /> */}
        {/* <Plane /> */}
        <ambientLight intensity={2} color={colors.amber["100"]} />
        <CustomPointLight
          color={theme.colors.primary["500"]}
          position={[-4, 4, 8]}
          intensity={12}
        />
        <CustomPointLight
          color={theme.colors.primary["950"]}
          position={[6, -8, -8]}
          intensity={4}
        />
        <CustomPointLight color={colors.amber['500']} position={[6, 4, 4]} intensity={10} />
        {/* <DistortedSphereMesh {...props} position={[-10, -10, -10]} color={blobColor}/>
        <DistortedSphereMesh {...props} position={[10, -10, 10]} color={blobColor}/>
        <DistortedSphereMesh {...props} position={[-10, 10, 10]} color={blobColor}/>
        <DistortedSphereMesh {...props} position={[-12, -8, 5]} color={blobColor}/>
        <DistortedSphereMesh {...props} position={[12, 8, -3]} color={blobColor}/>
        <DistortedSphereMesh {...props} position={[8, -4, 5]} color={blobColor}/> */}
        <DistortedSphereMesh {...props} position={[0, 0, 0]} color={blobColor}/>
        {/* <DistortedSphereMesh {...props} position={[-4, 0, 0]} color={blobColor}/>
        <DistortedSphereMesh {...props} position={[-4, 0, 0]} color={blobColor}/>
        <DistortedSphereMesh {...props} color={blobColor}/> */}
        <GlitchEffect />
      </Suspense>
    </Canvas>
  );
};

export default ThreeJSPageScene;
