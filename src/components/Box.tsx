import type { MeshProps, RootState } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';
import React, { useRef, useState } from 'react';
import type { Mesh } from 'three';

interface BoxProps extends MeshProps {
  // define additional props here
}

const Box: React.FC<BoxProps> = (props) => {
  const meshRef = useRef<Mesh | null>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame((_state: RootState, delta: number) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta;
    }
  });

  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={clicked ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={() => setClicked(!clicked)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
};

export default Box;
