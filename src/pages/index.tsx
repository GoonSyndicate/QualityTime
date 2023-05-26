import { Environment, Grid, OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { Color } from 'three';

import Kamdo from '@/components/Kamdo';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  // const router = useRouter();
  const color = new Color(0.5, 0.5, 1);

  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <div className=" h-full w-full">
        <Canvas gl={{ logarithmicDepthBuffer: true }}>
          <fog attach="fog" args={['black', 15, 21.5]} />
          <Stage
            intensity={0.5}
            environment="city"
            shadows={{ type: 'accumulative', bias: -0.001 }}
            adjustCamera={false}
          >
            <Kamdo rotation={[0, Math.PI, 0]} />
          </Stage>
          <Grid
            renderOrder={-1}
            position={[0, -1.85, 0]}
            infiniteGrid
            cellSize={0.6}
            cellThickness={0.6}
            sectionSize={3.3}
            sectionThickness={1.5}
            sectionColor={color}
            fadeDistance={30}
          />
          <OrbitControls
            autoRotate
            autoRotateSpeed={0.05}
            enableZoom={false}
            makeDefault
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />
          <EffectComposer disableNormalPass>
            <Bloom luminanceThreshold={1} mipmapBlur />
          </EffectComposer>
          <Environment background preset="sunset" blur={0.8} />
          {/* <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} /> */}
        </Canvas>
      </div>
    </Main>
  );
};

export default Index;
