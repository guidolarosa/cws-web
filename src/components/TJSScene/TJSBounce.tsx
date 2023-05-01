import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function BouncingBall() {
  const meshRef : any = useRef();

  // Define animation loop
  useFrame(({ clock } : any) => {
    // Update ball position using a sine wave
    meshRef.current.position.y = Math.sin(clock.elapsedTime * 5) * 2 ;
    meshRef.current.position.x = Math.sin(clock.elapsedTime * 2) * 4;
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} scale={1}>
      <sphereBufferGeometry args={[1, 16, 16]} />
      <meshStandardMaterial color="white" wireframe/>
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