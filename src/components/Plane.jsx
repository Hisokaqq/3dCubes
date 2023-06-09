import React from 'react'
import {  usePlane } from '@react-three/cannon';
function Plane() {
    const [ref] = usePlane(() => ({
      rotation: [-Math.PI / 2, 0, 0],
      position: [0, -0.5, 0],
      args: [100, 100],
    }));
  
    return (
      <mesh ref={ref} receiveShadow>
        <planeBufferGeometry args={[100, 100]} />
        <meshStandardMaterial color="gray" />
      </mesh>
    );
  }
export default Plane