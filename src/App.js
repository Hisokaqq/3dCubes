
import React from 'react';
import { OrbitControls, Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import Box from './components/Box';
import Plane from './components/Plane';

function App() {
  const BoxSize = 1;
  return (
    <Canvas>
            <OrbitControls minDistance={30} />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <color attach="background" args={['#333']} />
      <Physics gravity={[0, -9.81, 0]}>
        
      {[...Array(100)].map((_, i) => (
          <Box key={i} boxSize={BoxSize} />
        ))}     
        <Plane pos={BoxSize/2}/>

      </Physics>
    </Canvas>
  );
}

export default App;
