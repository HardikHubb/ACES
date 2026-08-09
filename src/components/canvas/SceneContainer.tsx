import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ParticleField } from './ParticleField';
import { CyberGrid } from './CyberGrid';
import { HeroLogo3D } from './HeroLogo3D';
import { AboutNetwork3D } from './AboutNetwork3D';
import { TechtonicVisual3D } from './TechtonicVisual3D';
import * as THREE from 'three';

interface SceneContainerProps {
  activeSection: string;
  mousePos: React.MutableRefObject<{ x: number; y: number }>;
  isMobile: boolean;
}

const CameraRig: React.FC<{
  activeSection: string;
  mousePos: React.MutableRefObject<{ x: number; y: number }>;
  isMobile: boolean;
}> = ({ activeSection, mousePos, isMobile }) => {
  useFrame((state, delta) => {
    let targetX = mousePos.current.x * (isMobile ? 0.2 : 0.6);
    let targetY = mousePos.current.y * (isMobile ? 0.2 : 0.6);
    let targetZ = 6.2;

    switch (activeSection) {
      case 'hero':
        targetZ = isMobile ? 7.5 : 6.2;
        break;
      case 'about':
        targetZ = isMobile ? 8.5 : 7.2;
        targetX += 0.4;
        break;
      case 'team':
        targetZ = isMobile ? 9 : 7.8;
        break;
      case 'events':
        targetZ = isMobile ? 9 : 7.8;
        break;
      case 'registration':
        targetZ = isMobile ? 8 : 6.8;
        break;
      default:
        targetZ = 7.2;
    }

    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, targetX, delta * 2);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, targetY, delta * 2);
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, targetZ, delta * 2);

    state.camera.lookAt(0, 0, 0);
  });

  return null;
};

export const SceneContainer: React.FC = ({
  activeSection,
  mousePos,
  isMobile,
}) => {
  return (
    <div
      className="fixed inset-0 w-full h-full"
      style={{
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
     <Canvas
  camera={{ position: [0, 0, 6.2], fov: 60 }}
  dpr={isMobile ? [1, 1.2] : [1, 1.5]}
  gl={{
    powerPreference: 'high-performance',
    antialias: true,
  }}
>

  {/* PARTICLES */}
  <ParticleField
    mousePos={mousePos}
    count={200}
  />
</Canvas>
    </div>
  );
};

