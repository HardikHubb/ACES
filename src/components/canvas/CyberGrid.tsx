import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const CyberGrid: React.FC = () => {
  const gridRef = useRef<THREE.GridHelper>(null);

  useFrame((state) => {
    if (!gridRef.current) return;
    gridRef.current.position.z = (state.clock.elapsedTime * 0.4) % 1;
  });

  return (
    <group position={[0, -4, 0]}>
      <gridHelper
        ref={gridRef}
        args={[60, 60, '#00e5ff', '#2563eb']}
        position={[0, 0, 0]}
      >
        <lineBasicMaterial attach="material" color="#00e5ff" transparent opacity={0.15} />
      </gridHelper>
    </group>
  );
};
