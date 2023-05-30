import React from 'react';
import { useBox } from '@react-three/cannon';

const Box = ({ boxSize }) => {
    const randomPosition = () => {
        const randomHeight = Math.floor(Math.random() * 6) + 5; // Random height between 5 and 10 (inclusive)
        const randomX = Math.floor(Math.random() * 11) - 5; // Random X position between -5 and 5 (inclusive)
        const randomZ = Math.floor(Math.random() * 11) - 5; // Random Z position between -5 and 5 (inclusive)
        return [randomX, randomHeight, randomZ];
      };

  const [ref, api] = useBox(() => ({
    mass: 2,
    position: randomPosition(),
  }));

  return (
    <mesh ref={ref} onClick={() => api.applyImpulse([0, 10, 0], [0, 0, 0])}>
      <boxBufferGeometry args={[boxSize, boxSize, boxSize]} />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  );
};

export default Box;
