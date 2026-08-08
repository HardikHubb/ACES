import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticleFieldProps {
  mousePos: React.MutableRefObject<{ x: number; y: number }>;
  count?: number;
}

export const ParticleField: React.FC<ParticleFieldProps> = ({ mousePos, count = 200 }) => {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  const { positions, colors, initialPositions } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const initPos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);

    const cyan = new THREE.Color('#00e5ff');
    const blue = new THREE.Color('#2563eb');
    const violet = new THREE.Color('#7c3aed');

    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 32;
      const y = (Math.random() - 0.5) * 32;
      const z = (Math.random() - 0.5) * 22 - 4;

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;

      initPos[i * 3] = x;
      initPos[i * 3 + 1] = y;
      initPos[i * 3 + 2] = z;

      const rand = Math.random();
      const col = rand > 0.5 ? cyan : rand > 0.2 ? blue : violet;
      cols[i * 3] = col.r;
      cols[i * 3 + 1] = col.g;
      cols[i * 3 + 2] = col.b;
    }

    return { positions: pos, colors: cols, initialPositions: initPos };
  }, [count]);

  const linePositions = useMemo(() => new Float32Array(count * 6), [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;

    const geo = pointsRef.current.geometry;
    const posAttr = geo.attributes.position;
    const time = state.clock.elapsedTime * 0.25;

    const mouseX = mousePos.current.x * 1.5;
    const mouseY = mousePos.current.y * 1.5;

    for (let i = 0; i < count; i++) {
      const ix = i * 3;
      const iy = i * 3 + 1;

      posAttr.setX(
        i,
        initialPositions[ix] + Math.sin(time + initialPositions[iy]) * 0.25 + mouseX * (0.03 + (i % 5) * 0.008)
      );
      posAttr.setY(
        i,
        initialPositions[iy] + Math.cos(time + initialPositions[ix]) * 0.25 - mouseY * (0.03 + (i % 5) * 0.008)
      );
    }
    posAttr.needsUpdate = true;

    if (linesRef.current) {
      let lineIndex = 0;
      const currentPos = posAttr.array as Float32Array;

      for (let i = 0; i < count; i += 2) {
        for (let j = i + 1; j < count; j += 5) {
          const dx = currentPos[i * 3] - currentPos[j * 3];
          const dy = currentPos[i * 3 + 1] - currentPos[j * 3 + 1];
          const dz = currentPos[i * 3 + 2] - currentPos[j * 3 + 2];
          const distSq = dx * dx + dy * dy + dz * dz;

          if (distSq < 4.0 && lineIndex < count * 6 - 6) {
            linePositions[lineIndex++] = currentPos[i * 3];
            linePositions[lineIndex++] = currentPos[i * 3 + 1];
            linePositions[lineIndex++] = currentPos[i * 3 + 2];

            linePositions[lineIndex++] = currentPos[j * 3];
            linePositions[lineIndex++] = currentPos[j * 3 + 1];
            linePositions[lineIndex++] = currentPos[j * 3 + 2];
          }
        }
      }

      for (let k = lineIndex; k < linePositions.length; k++) {
        linePositions[k] = 0;
      }

      linesRef.current.geometry.attributes.position.needsUpdate = true;
    }

    pointsRef.current.rotation.z = time * 0.03;
    if (linesRef.current) {
      linesRef.current.rotation.z = time * 0.03;
    }
  });

  return (
    <group>
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
          size={0.09}
          vertexColors
          transparent
          opacity={0.55}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>

      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#00e5ff"
          transparent
          opacity={0.07}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  );
};
