/* eslint-disable react/no-unknown-property */
import React, { Suspense, useMemo, useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Vector2 } from "three/src/math/Vector2";
import { damp } from "three/src/math/MathUtils";
import { MeshDistortMaterial, OrbitControls } from "@react-three/drei";
import {
  EffectComposer,
  RenderPass,
  EffectPass,
  ChromaticAberrationEffect,
  SMAAEffect,
  SMAAPreset,
  GlitchEffect,
  GlitchMode,
  PixelationEffect,
  ScanlineEffect
} from "postprocessing";
import { useInView } from "react-intersection-observer";
import { theme } from "./../../../tailwind.config";
import colors from "tailwindcss/colors";
import { checkDarkTheme, setDarkThemeObserver } from "@/utils/utils";
// import { Color } from "three";

const Effect = ({ children }: any) => {
  const { gl, camera, scene } = useThree();

  const composer = useMemo(() => {
    const comp = new EffectComposer(gl);
    comp.addPass(new RenderPass(scene, camera));
    comp.addPass(
      new EffectPass(camera, new SMAAEffect({ preset: SMAAPreset.ULTRA }))
    );
    comp.addPass(
      new EffectPass(camera, new GlitchEffect())
    )
    comp.addPass(
      new EffectPass(camera, new ScanlineEffect({
        density: 2
      }))
    )
    // comp.addPass(
    //   new EffectPass(camera, new PixelationEffect(5))
    // )
    return comp;
  }, [gl, scene, camera]);

  useFrame(() => {
    composer.render();
  }, 1);
  return <></>;
};

const CustomPointLight = ({ color, intensity, position, resolution }: any) => {
  return <pointLight args={[color, 3]} position={position} />;
};

const DistortedSphereMesh = ({
  resolution,
  wireframe,
  color
}: {
  resolution: number;
  wireframe: boolean;
  color: string;
}) => {
  const BASE_DISTORT = 0.65;
  const MAX_DISTORT = 1.25;

  const BASE_SPEED = 1.1;

  const meshRef = useRef<any>(null);
  const meshDistortMatRef = useRef<any>(null);

  const [mouseOver, setMouseOver] = useState<boolean>(false);
  const [clicking, setClicking] = useState<boolean>(false);

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
  });

  return (
    <mesh
      ref={meshRef}
      castShadow
      receiveShadow
      scale={2}
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

  useEffect(() => {
    setDarkThemeObserver((e : any) => {
      setBlobColor(
        e[0].target.classList[0] === "dark"
          ? theme.colors.dark["500"]
          : theme.colors.primary["500"]
      );
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
      shadows={{ enabled: true, needsUpdate: true }}
      camera={{ position: [4.2, 0, 0] }}
    >
      <OrbitControls />
      {!inView && <DisableRender />}
      <Suspense fallback={null}>
        {/* <OrbitControls /> */}
        {/* <axesHelper args={[2]} /> */}
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
        <DistortedSphereMesh {...props} color={blobColor}/>
        <Effect />
      </Suspense>
    </Canvas>
  );
};

export default ThreeJSPageScene;
