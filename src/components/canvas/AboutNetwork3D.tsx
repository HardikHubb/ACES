import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float } from '@react-three/drei';
import * as THREE from 'three';

interface AboutNetwork3DProps {
  mousePos: React.MutableRefObject<{ x: number; y: number }>;
}

const NODES = [
  { label: 'IDEAS', pos: [0, 1.8, 0], color: '#00e5ff' },
  { label: 'CODE', pos: [-1.6, 0.4, 0.8], color: '#7c3aed' },
  { label: 'PEOPLE', pos: [1.6, 0.4, -0.5], color: '#2563eb' },
  { label: 'INNOVATION', pos: [-1.2, -1.5, -0.4], color: '#00e5ff' },
  { label: 'COLLABORATION', pos: [1.2, -1.5, 0.6], color: '#7c3aed' },
];

const CONNECTIONS = [
  [0, 1], [0, 2], [1, 3], [2, 4], [3, 4], [1, 2], [0, 3], [0, 4]
];

export const AboutNetwork3D: React.FC<AboutNetwork3DProps> = ({ mousePos }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_state, delta) => {
    if (!groupRef.current) return;
    
    groupRef.current.rotation.y += delta * 0.25;
    
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      mousePos.current.y * 0.2,
      delta * 2
    );
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
      <group ref={groupRef} position={[0, 0, 0]}>
        {NODES.map((node, idx) => (
          <group key={idx} position={node.pos as [number, number, number]}>
            <mesh>
              <sphereGeometry args={[0.25, 16, 16]} />
              <meshStandardMaterial
                color={node.color}
                emissive={node.color}
                emissiveIntensity={1}
                roughness={0.1}
              />
            </mesh>

            <mesh>
              <sphereGeometry args={[0.4, 16, 16]} />
              <meshBasicMaterial
                color={node.color}
                transparent
                opacity={0.15}
                wireframe
              />
            </mesh>

            <Text
              position={[0, -0.5, 0]}
              font="https://fonts.gstatic.com/s/spacegrotesk/v16/V8mDoOuFjJeAxG22j5t1aw.woff"
              fontSize={0.25}
              color="#f8fafc"
              anchorX="center"
              anchorY="top"
            >
              {node.label}
            </Text>
          </group>
        ))}

        {CONNECTIONS.map(([startIdx, endIdx], lineIdx) => {
          const start = NODES[startIdx].pos as [number, number, number];
          const end = NODES[endIdx].pos as [number, number, number];
          
          const points = [new THREE.Vector3(...start), new THREE.Vector3(...end)];
          const lineGeo = new THREE.BufferGeometry().setFromPoints(points);

          return (
            <primitive
              key={lineIdx}
              object={new THREE.Line(
                lineGeo,
                new THREE.LineBasicMaterial({
                  color: lineIdx % 2 === 0 ? '#00e5ff' : '#7c3aed',
                  transparent: true,
                  opacity: 0.4,
                  linewidth: 2,
                })
              )}
            />
          );
        })}

        <mesh position={[0, 0, 0]}>
          <octahedronGeometry args={[0.3, 0]} />
          <meshStandardMaterial
            color="#ffffff"
            emissive="#00e5ff"
            emissiveIntensity={1.5}
            wireframe
          />
        </mesh>

        <pointLight color="#00e5ff" intensity={2.5} distance={5} />
      </group>
    </Float>
  );
};
