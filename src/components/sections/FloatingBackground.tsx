"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, Stars } from "@react-three/drei";
import * as THREE from "three";

export default function FloatingBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 -z-10 bg-black/80">
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        <Particles />
      </Canvas>
    </div>
  );
}

function Particles() {
  const count = 100;
  
  const [positions, scales] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const scales = new Float32Array(count);
    for (let i = 0; i < count; i++) {
        // distribute them in a box
        positions[i * 3] = (Math.random() - 0.5) * 40;     // x
        positions[i * 3 + 1] = (Math.random() - 0.5) * 40; // y
        positions[i * 3 + 2] = (Math.random() - 0.5) * 40; // z
        scales[i] = Math.random() * 2;
    }
    return [positions, scales];
  }, [count]);

  const group = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.05;
      group.current.rotation.x = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <group ref={group}>
        {/* We can use native instanced meshes but let's keep it simple with Float component over primitive spheres if count is small. Wait, for 100 it's fine. */}
        {Array.from({ length: count }).map((_, i) => (
            <Float key={i} speed={Math.random() * 2} rotationIntensity={Math.random() * 2} floatIntensity={Math.random() * 2}>
                <mesh position={[positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2]]}>
                    <sphereGeometry args={[0.05 * scales[i], 8, 8]} />
                    <meshStandardMaterial color={i % 3 === 0 ? "#6C63FF" : i % 3 === 1 ? "#00D4FF" : "#A855F7"} emissive={i % 3 === 0 ? "#6C63FF" : i % 3 === 1 ? "#00D4FF" : "#A855F7"} emissiveIntensity={2} toneMapped={false} />
                </mesh>
            </Float>
        ))}
    </group>
  );
}
