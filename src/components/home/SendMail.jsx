import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import * as THREE from "three";
function WaveGrid() {
  const meshRef = useRef();
  const geometry = new THREE.PlaneGeometry(30, 30, 50, 50);
  const material = new THREE.MeshStandardMaterial({
    color: 0x00ff80,
    wireframe: true,
    side: THREE.DoubleSide,
  });

  useFrame(({ clock }) => {
    const positions = meshRef.current.geometry.attributes.position;
    const time = clock.getElapsedTime();

    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const y = positions.getY(i);
      const z = 0.5 * Math.sin(x + time) * Math.cos(y + time);
      positions.setZ(i, z);
    }
    positions.needsUpdate = false;
  });

  return (
    <mesh
      ref={meshRef}
      rotation={[-Math.PI / 3, 0, 0]}
      position={[0, -2, 0]}
      geometry={geometry}
      material={material}
    />
  );
}
export default function SendMail() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-green-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-50">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <WaveGrid />
        </Canvas>
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-300">
          Ready to Start Learning?
        </h2>
        <p className="text-xl mb-8 text-green-100">
          Join thousands of students and begin your educational journey today.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-64 bg-gray-800 text-white placeholder-gray-400 border-green-500 focus:border-green-400"
          />
          <Button className="w-full sm:w-auto bg-green-500 text-white hover:bg-green-600">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
}
