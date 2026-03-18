'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Torus, Octahedron, Stars } from '@react-three/drei';
import * as THREE from 'three';

function FloatingShape({
  position,
  color,
  speed,
  rotAxis,
  floatAmplitude,
  floatSpeed,
  shape,
}: {
  position: [number, number, number];
  color: string;
  speed: number;
  rotAxis: [number, number, number];
  floatAmplitude: number;
  floatSpeed: number;
  shape: 'torus' | 'octahedron' | 'sphere';
}) {
  const ref = useRef<THREE.Mesh>(null);
  const initialY = position[1];

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.rotation.x += rotAxis[0] * speed;
    ref.current.rotation.y += rotAxis[1] * speed;
    ref.current.rotation.z += rotAxis[2] * speed;
    ref.current.position.y = initialY + Math.sin(t * floatSpeed) * floatAmplitude;
  });

  const material = (
    <meshStandardMaterial
      color={color}
      transparent
      opacity={0.7}
      roughness={0.2}
      metalness={0.8}
      emissive={color}
      emissiveIntensity={0.2}
    />
  );

  if (shape === 'torus') {
    return (
      <Torus ref={ref} position={position} args={[0.7, 0.25, 16, 40]}>
        {material}
      </Torus>
    );
  }
  if (shape === 'octahedron') {
    return (
      <Octahedron ref={ref} position={position} args={[0.8]}>
        {material}
      </Octahedron>
    );
  }
  return (
    <Sphere ref={ref} position={position} args={[0.6, 24, 24]}>
      {material}
    </Sphere>
  );
}

function NetworkSphere() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = clock.getElapsedTime() * 0.08;
    ref.current.rotation.x = clock.getElapsedTime() * 0.04;
  });

  return (
    <Sphere ref={ref} args={[2.5, 16, 16]}>
      <meshStandardMaterial
        color="#6366f1"
        transparent
        opacity={0.08}
        roughness={0.8}
        wireframe
      />
    </Sphere>
  );
}

function ParticleField() {
  const count = 600;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return arr;
  }, []);

  const ref = useRef<THREE.Points>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = clock.getElapsedTime() * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#818cf8" transparent opacity={0.7} sizeAttenuation />
    </points>
  );
}

const shapes: Array<{
  position: [number, number, number];
  color: string;
  speed: number;
  rotAxis: [number, number, number];
  floatAmplitude: number;
  floatSpeed: number;
  shape: 'torus' | 'octahedron' | 'sphere';
}> = [
  { position: [-4, 1.5, -3], color: '#818cf8', speed: 0.004, rotAxis: [1, 0.5, 0.3], floatAmplitude: 0.4, floatSpeed: 0.7, shape: 'torus' },
  { position: [4, -1, -4], color: '#a78bfa', speed: 0.006, rotAxis: [0.3, 1, 0.5], floatAmplitude: 0.5, floatSpeed: 0.9, shape: 'octahedron' },
  { position: [-3, -2, -2], color: '#60a5fa', speed: 0.005, rotAxis: [0.5, 0.3, 1], floatAmplitude: 0.3, floatSpeed: 0.6, shape: 'sphere' },
  { position: [3, 2.5, -5], color: '#c084fc', speed: 0.003, rotAxis: [1, 1, 0.2], floatAmplitude: 0.6, floatSpeed: 0.8, shape: 'torus' },
  { position: [0, -3, -6], color: '#38bdf8', speed: 0.007, rotAxis: [0.2, 0.8, 1], floatAmplitude: 0.4, floatSpeed: 1.0, shape: 'octahedron' },
  { position: [-5, 0, -5], color: '#f472b6', speed: 0.004, rotAxis: [0.7, 0.4, 0.9], floatAmplitude: 0.5, floatSpeed: 0.75, shape: 'sphere' },
];

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#818cf8" />
      <pointLight position={[-10, -5, -10]} intensity={0.8} color="#60a5fa" />

      <Stars radius={50} depth={30} count={3000} factor={3} saturation={0.5} fade speed={0.5} />
      <ParticleField />
      <NetworkSphere />

      {shapes.map((props, i) => (
        <FloatingShape key={i} {...props} />
      ))}
    </>
  );
}

export default function HeroScene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <Scene />
    </Canvas>
  );
}
