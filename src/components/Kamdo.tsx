import { useGLTF } from '@react-three/drei';
import type { GroupProps } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import React, { useRef } from 'react';
import type { Group, Mesh, MeshBasicMaterial, PointLight } from 'three';
import { Color } from 'three';
import type { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

interface KamdoProps extends GroupProps {
  // define additional props here
}

const Kamdo: React.FC<KamdoProps> = (props) => {
  const headRef = useRef<Group | null>(null);
  const stripeRef = useRef<MeshBasicMaterial | null>(null);
  const lightRef = useRef<PointLight | null>(null);

  const gltf = useGLTF(
    '/s2wt_kamdo_industrial_divinities-transformed.glb'
  ) as GLTF;

  const body001 = gltf.scene.children.find(
    (child) => child.name === 'body001'
  ) as Mesh;
  const head001 = gltf.scene.children.find(
    (child) => child.name === 'head001'
  ) as Mesh;
  const stripe001 = gltf.scene.children.find(
    (child) => child.name === 'stripe001'
  ) as Mesh;

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

  // Assuming that 'body001', 'head001' and 'stripe001' are the names of meshes in the GLTF scene

  return (
    <group {...props}>
      {body001 && (
        <mesh
          castShadow
          receiveShadow
          geometry={body001.geometry}
          material={body001.material}
        />
      )}
      <group ref={headRef}>
        {head001 && (
          <mesh
            castShadow
            receiveShadow
            geometry={head001.geometry}
            material={head001.material}
          />
        )}
        {stripe001 && (
          <mesh castShadow receiveShadow geometry={stripe001.geometry}>
            <meshBasicMaterial ref={stripeRef} toneMapped={false} />
            <pointLight
              ref={lightRef}
              intensity={1}
              color="purple"
              distance={2.5}
            />
          </mesh>
        )}
      </group>
    </group>
  );
};

useGLTF.preload('/s2wt_kamdo_industrial_divinities-transformed.glb');

export default Kamdo;
