import React, { useRef, useState } from 'react';
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber';
import { Html, OrbitControls, Plane } from "@react-three/drei";
import * as THREE from 'three';
import domToImage from 'dom-to-image';

import { Box, Text, Button } from '@chakra-ui/react';

extend({ Html });

function DynamicTexture() {
  const ref = useRef<any>(null!);
  const { viewport } = useThree();
  
  const [texture, setTexture] = useState<any>();

  useFrame((state, delta) => {
    if (ref.current) {
      domToImage.toPng(ref.current).then((dataURL) => {
        const img = new Image();
        img.onload = function () {
          const texture = new THREE.Texture(img);
          texture.needsUpdate = true;
          setTexture(texture);
        };
        img.src = dataURL;
      }).catch((error) => {
        console.log('oops, something went wrong!', error);
      });
    }
  });

  return (
    <group>
      <Html ref={ref}>
        <Box>
          <Text>Hello 3D</Text>
          <Button size="lg" onClick={()=>{console.log("Button clicked")}}>Button</Button>
        </Box>
        </Html>
      {texture && (
        <mesh position={[viewport.width / 2, viewport.height / 2, -2]}>
          <Plane args={[1, 1]} />
          <meshBasicMaterial map={texture} />
        </mesh>
      )}
    </group>
  );
}

export default function R3F() {
  return (
    <Canvas style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <DynamicTexture />
      <OrbitControls />
    </Canvas>
  );
}