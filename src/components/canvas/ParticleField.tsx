import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticleFieldProps {
  mousePos: React.MutableRefObject<{ x: number; y: number }>;
  count?: number;
}

export const ParticleField: React.FC<ParticleFieldProps> = ({
  mousePos,
  count = 200,
}) => {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, colors, initialPositions } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const initialPositions = new Float32Array(count * 3);

    const cyan = new THREE.Color('#00e5ff');
    const blue = new THREE.Color('#2563eb');
    const violet = new THREE.Color('#7c3aed');

    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 32;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 18 - 3;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      initialPositions[i * 3] = x;
      initialPositions[i * 3 + 1] = y;
      initialPositions[i * 3 + 2] = z;

      const random = Math.random();

      const color =
        random > 0.55
          ? cyan
          : random > 0.25
            ? blue
            : violet;

      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    return {
      positions,
      colors,
      initialPositions,
    };
  }, [count]);

useFrame((state) => {
  if (!pointsRef.current) return;

  const positionAttribute =
    pointsRef.current.geometry.attributes.position;

  const time = state.clock.elapsedTime;

  const mouseX = mousePos.current.x;
  const mouseY = mousePos.current.y;

  // Scroll position
  const scrollY = window.scrollY;

  // Smooth scroll influence
  const scrollInfluence = scrollY * 0.0008;

  for (let i = 0; i < count; i++) {
    const index = i * 3;

    const originalX = initialPositions[index];
    const originalY = initialPositions[index + 1];
    const originalZ = initialPositions[index + 2];

    positionAttribute.setX(
      i,
      originalX +
        Math.sin(time * 0.25 + originalY) * 0.15 +
        mouseX * 0.35 +
        Math.sin(scrollInfluence + originalY) * 0.12
    );

    positionAttribute.setY(
      i,
      originalY +
        Math.cos(time * 0.25 + originalX) * 0.15 +
        mouseY * 0.35 +
        Math.cos(scrollInfluence + originalX) * 0.12
    );

    positionAttribute.setZ(
      i,
      originalZ +
        Math.sin(scrollInfluence + originalX) * 0.08
    );
  }

  positionAttribute.needsUpdate = true;

  // Normal slow rotation + additional scroll movement
  pointsRef.current.rotation.z =
    time * 0.01 + scrollInfluence * 0.15;
});

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />

        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>

      <pointsMaterial
        vertexColors
        size={0.07}
        sizeAttenuation
        transparent
        opacity={0.85}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};