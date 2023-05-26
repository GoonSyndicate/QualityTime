import { useGLTF } from '@react-three/drei';
import type { GroupProps } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import React, { useRef } from 'react';
import type { Group, MeshBasicMaterial } from 'three';
import { Color } from 'three';
import type { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

interface KamdoProps extends GroupProps {
  // define additional props here
}

interface CustomGLTFResult extends GLTF {
  nodes: {
    body001: THREE.Mesh;
    head001: THREE.Mesh;
    stripe001: THREE.Mesh;
  };
  materials: {
    Body: THREE.Material;
    Head: THREE.Material;
  };
}

const Kamdo: React.FC<KamdoProps> = (props) => {
  const headRef = useRef<Group | null>(null);
  const stripeRef = useRef<MeshBasicMaterial | null>(null);
  const lightRef = useRef<THREE.PointLight | null>(null);
  const gltf = useGLTF(
    '/s2wt_kamdo_industrial_divinities-transformed.glb'
  ) as CustomGLTFResult;

  useFrame((state, delta) => {
    const t = (1 + Math.sin(state.clock.elapsedTime * 2)) / 2;

    if (stripeRef.current) {
      stripeRef.current.color = new Color(1 + t * 10, 2, 20 + t * 50);
    }

    if (headRef.current) {
      easing.dampE(
        headRef.current.rotation,
        [0, state.pointer.x * (state.camera.position.z > 1 ? 1 : -1), 0],
        0.4,
        delta
      );
    }

    if (lightRef.current) {
      lightRef.current.intensity = 1 + t * 2;
    }
  });

  return (
    <group {...props}>
      <mesh
        castShadow
        receiveShadow
        geometry={gltf.nodes.body001.geometry}
        material={gltf.materials.Body}
      />
      <group ref={headRef}>
        <mesh
          castShadow
          receiveShadow
          geometry={gltf.nodes.head001.geometry}
          material={gltf.materials.Head}
        />
        <mesh castShadow receiveShadow geometry={gltf.nodes.stripe001.geometry}>
          <meshBasicMaterial ref={stripeRef} toneMapped={false} />
          <pointLight
            ref={lightRef}
            intensity={1}
            color="purple"
            distance={2.5}
          />
        </mesh>
      </group>
    </group>
  );
};

useGLTF.preload('/s2wt_kamdo_industrial_divinities-transformed.glb');

export default Kamdo;
