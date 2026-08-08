import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float } from '@react-three/drei';
import * as THREE from 'three';

export const TechtonicVisual3D: React.FC = () => {
  const ballRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Group>(null);

  useFrame((_state, delta) => {
    if (ballRef.current) {
      ballRef.current.rotation.y += delta * 0.8;
      ballRef.current.rotation.x += delta * 0.4;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z -= delta * 0.5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
      <group position={[0, 0, 0]}>
        <mesh ref={ballRef}>
          <icosahedronGeometry args={[1.1, 2]} />
          <meshStandardMaterial
            color="#00e5ff"
            emissive="#00e5ff"
            emissiveIntensity={0.8}
            wireframe
          />
        </mesh>

        <mesh>
          <sphereGeometry args={[0.7, 16, 16]} />
          <meshPhysicalMaterial
            color="#2563eb"
            emissive="#7c3aed"
            emissiveIntensity={0.5}
            transparent
            opacity={0.7}
          />
        </mesh>

        <group ref={ringRef}>
          <Text
            position={[1.8, 0, 0]}
            fontSize={0.4}
            color="#00e5ff"
            font="https://fonts.gstatic.com/s/orbitron/v31/yGlR-pJlAcA3rdAtB1aH.woff"
          >
            {'</>'}
          </Text>
          <Text
            position={[-1.8, 0, 0]}
            fontSize={0.4}
            color="#7c3aed"
            font="https://fonts.gstatic.com/s/orbitron/v31/yGlR-pJlAcA3rdAtB1aH.woff"
          >
            {'{ }'}
          </Text>
          <Text
            position={[0, 1.8, 0]}
            fontSize={0.4}
            color="#00e5ff"
            font="https://fonts.gstatic.com/s/orbitron/v31/yGlR-pJlAcA3rdAtB1aH.woff"
          >
            0101
          </Text>
          <Text
            position={[0, -1.8, 0]}
            fontSize={0.4}
            color="#2563eb"
            font="https://fonts.gstatic.com/s/orbitron/v31/yGlR-pJlAcA3rdAtB1aH.woff"
          >
            CRICKET
          </Text>
        </group>

        <pointLight color="#00e5ff" intensity={3} distance={5} />
      </group>
    </Float>
  );
};
