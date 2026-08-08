import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Text } from '@react-three/drei';
import * as THREE from 'three';

interface HeroLogo3DProps {
  mousePos: React.MutableRefObject<{ x: number; y: number }>;
}

export const HeroLogo3D: React.FC<HeroLogo3DProps> = ({ mousePos }) => {
  const groupRef = useRef<THREE.Group>(null);
  const outerRingRef = useRef<THREE.Mesh>(null);
  const innerCoreRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    const targetRotX = mousePos.current.y * 0.35;
    const targetRotY = mousePos.current.x * 0.45;

    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, delta * 3);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY + state.clock.elapsedTime * 0.2, delta * 3);

    if (outerRingRef.current) {
      outerRingRef.current.rotation.z += delta * 0.4;
      outerRingRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
    }

    if (innerCoreRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
      innerCoreRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
      <group ref={groupRef} position={[0, 0.2, 0]}>
        <mesh ref={outerRingRef}>
          <torusGeometry args={[2.2, 0.08, 16, 6]} />
          <meshPhysicalMaterial
            color="#00e5ff"
            emissive="#00e5ff"
            emissiveIntensity={0.4}
            roughness={0.1}
            metalness={0.8}
            wireframe
          />
        </mesh>

        <mesh rotation={[Math.PI / 4, 0, Math.PI / 6]}>
          <torusGeometry args={[2.5, 0.04, 16, 64]} />
          <meshStandardMaterial
            color="#7c3aed"
            emissive="#7c3aed"
            emissiveIntensity={0.6}
            wireframe
          />
        </mesh>

        <mesh ref={innerCoreRef}>
          <octahedronGeometry args={[1.2, 2]} />
          <meshPhysicalMaterial
            color="#050914"
            transmission={0.85}
            opacity={1}
            transparent
            roughness={0.15}
            ior={1.4}
            thickness={0.5}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </mesh>

        <group position={[0, -0.2, 0.4]}>
          <Text
            font="https://fonts.gstatic.com/s/spacegrotesk/v16/V8mDoOuFjJeAxG22j5t1aw.woff"
            fontSize={0.9}
            letterSpacing={0.15}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
          >
            ACES
            <meshStandardMaterial
              color="#ffffff"
              emissive="#00e5ff"
              emissiveIntensity={0.5}
              roughness={0.2}
              metalness={0.9}
            />
          </Text>
        </group>

        <pointLight color="#00e5ff" intensity={4} distance={6} />
        <pointLight color="#7c3aed" intensity={3} distance={5} position={[0, -1, 1]} />
      </group>
    </Float>
  );
};
