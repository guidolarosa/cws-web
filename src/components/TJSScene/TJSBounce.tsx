import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { theme } from './../../../tailwind.config'
import { checkDarkTheme } from '@/utils/utils';


function BouncingBall(props : any) {
  const meshRef : any = useRef();
  const geometryRef : any = useRef()

  // Define animation loop
  useFrame(({ clock } : any) => {
    // Update ball position using a sine wave
    meshRef.current.rotation.y = -clock.elapsedTime + 1.5;
  });

  useEffect(() => {
    geometryRef.current.translate(2, 0, 0)
    // meshRef.current.rotateZ(Math.PI / 2)
  }, [])


  return (
    <mesh ref={meshRef} position={[0, 0, 0]} scale={0.5}>
      <sphereBufferGeometry ref={geometryRef} args={[1, 16, 16]} />
      <meshStandardMaterial color={checkDarkTheme() ? theme.colors.dark["500"] : theme.colors.primary["500"]} wireframe/>
    </mesh>
  );
}

function App() {
  return (
    <Canvas className={'w-full h-full'}>
      {/* <ambientLight /> */}
      <pointLight position={[-5, 10, 0]} />
      <pointLight position={[10, -10, 10]} />
      <BouncingBall />
    </Canvas>
  );
}

export default App;