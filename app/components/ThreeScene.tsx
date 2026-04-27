"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh, Group } from "three";

function BuildingBlocks() {
  const groupRef = useRef<Group>(null);
  const meshes = useRef<Mesh[]>([]);

  const blocks = useMemo(
    () => [
      { pos: [0, 0, 0] as [number, number, number], size: [1.5, 1.2, 1.5] as [number, number, number] },
      { pos: [0.9, 0.3, 0.2] as [number, number, number], size: [0.8, 0.8, 0.8] as [number, number, number] },
      { pos: [-0.8, -0.2, 0.5] as [number, number, number], size: [1, 0.6, 1] as [number, number, number] },
      { pos: [0.2, 0.9, -0.3] as [number, number, number], size: [0.6, 0.5, 0.6] as [number, number, number] },
      { pos: [-0.3, -0.6, -0.4] as [number, number, number], size: [0.7, 0.4, 0.7] as [number, number, number] },
    ],
    []
  );

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {blocks.map((block, i) => (
        <mesh
          key={i}
          position={block.pos}
          ref={(el) => {
            if (el) meshes.current[i] = el;
          }}
        >
          <boxGeometry args={block.size} />
          <meshStandardMaterial
            color="#FAFAF9"
            roughness={0.3}
            metalness={0.1}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function ThreeScene() {
  return (
    <div className="w-full h-[280px] sm:h-[350px] md:h-[450px]">
      <Canvas
        camera={{ position: [3, 2, 4], fov: 45 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <directionalLight position={[-3, -2, -3]} intensity={0.3} />
        <BuildingBlocks />
      </Canvas>
    </div>
  );
}
