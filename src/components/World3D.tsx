import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Text, Line } from '@react-three/drei';
import * as THREE from 'three';
import { seas, Sea, Island } from '../data/seas';

function SeaMarker({ sea, onClick, isSelected }: { sea: Sea; onClick: () => void; isSelected: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
    if (glowRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.15;
      glowRef.current.scale.setScalar(scale * (isSelected ? 1.5 : 1));
    }
  });

  return (
    <group position={sea.position}>
      <mesh ref={glowRef} onClick={onClick}>
        <sphereGeometry args={[0.4, 16, 16]} />
        <meshStandardMaterial
          color={sea.color}
          emissive={sea.color}
          emissiveIntensity={isSelected ? 1.5 : 0.5}
          transparent
          opacity={0.3}
        />
      </mesh>
      <mesh ref={meshRef} onClick={onClick}>
        <octahedronGeometry args={[0.2, 0]} />
        <meshStandardMaterial
          color={sea.color}
          emissive={sea.color}
          emissiveIntensity={isSelected ? 2 : 1}
        />
      </mesh>
      <Text
        position={[0, 0.6, 0]}
        fontSize={0.18}
        color={sea.color}
        anchorX="center"
        anchorY="bottom"
        outlineWidth={0.02}
        outlineColor="#000000"
      >
        {sea.name}
      </Text>
    </group>
  );
}

function IslandMarker({ island, onClick, isSelected }: { island: Island; onClick: () => void; isSelected: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 3 + island.x * 10) * 0.2;
      meshRef.current.scale.setScalar(scale * (isSelected ? 1.8 : 1));
    }
  });

  return (
    <group position={[island.x, island.y, island.z]}>
      <mesh ref={meshRef} onClick={onClick}>
        <sphereGeometry args={[island.size, 12, 12]} />
        <meshStandardMaterial
          color={island.color}
          emissive={island.color}
          emissiveIntensity={isSelected ? 2 : 0.8}
        />
      </mesh>
      {isSelected && (
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[island.size * 1.5, island.size * 2, 32]} />
          <meshStandardMaterial
            color={island.color}
            emissive={island.color}
            emissiveIntensity={1.5}
            transparent
            opacity={0.4}
            side={THREE.DoubleSide}
          />
        </mesh>
      )}
    </group>
  );
}

function WorldSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[6, 64, 64]} />
      <meshStandardMaterial
        color="#0a1628"
        emissive="#1e3a5f"
        emissiveIntensity={0.15}
        transparent
        opacity={0.3}
        wireframe
      />
    </mesh>
  );
}

function GrandLineRing() {
  const points = useMemo(() => {
    const pts: [number, number, number][] = [];
    for (let i = 0; i <= 100; i++) {
      const angle = (i / 100) * Math.PI * 2;
      pts.push([Math.cos(angle) * 4.5, Math.sin(angle) * 0.3, Math.sin(angle) * 4.5]);
    }
    return pts;
  }, []);

  return <Line points={points} color="#F59E0B" lineWidth={2} transparent opacity={0.6} />;
}

function RedLineRing() {
  const points = useMemo(() => {
    const pts: [number, number, number][] = [];
    for (let i = 0; i <= 100; i++) {
      const angle = (i / 100) * Math.PI * 2;
      pts.push([Math.cos(angle) * 5, Math.cos(angle) * 0.5, Math.sin(angle) * 5]);
    }
    return pts;
  }, []);

  return <Line points={points} color="#DC2626" lineWidth={2} transparent opacity={0.6} />;
}

interface World3DProps {
  selectedSea: string | null;
  onSelectSea: (id: string) => void;
  selectedIsland: Island | null;
  onSelectIsland: (island: Island | null) => void;
}

export default function World3D({ selectedSea, onSelectSea, selectedIsland, onSelectIsland }: World3DProps) {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 5, 12], fov: 55 }} style={{ background: 'transparent' }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#ffd700" />
        <pointLight position={[-10, -5, -10]} intensity={0.5} color="#3b82f6" />

        <Stars radius={50} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />

        <WorldSphere />
        <GrandLineRing />
        <RedLineRing />

        {seas.map((sea) => (
          <SeaMarker
            key={sea.id}
            sea={sea}
            onClick={() => onSelectSea(sea.id)}
            isSelected={selectedSea === sea.id}
          />
        ))}

        {seas.flatMap((sea) =>
          sea.islands.map((island) => (
            <IslandMarker
              key={`${sea.id}-${island.name}`}
              island={island}
              onClick={() => onSelectIsland(selectedIsland?.name === island.name ? null : island)}
              isSelected={selectedIsland?.name === island.name}
            />
          ))
        )}

        <OrbitControls
          enablePan={false}
          minDistance={5}
          maxDistance={20}
          autoRotate
          autoRotateSpeed={0.3}
        />
      </Canvas>
    </div>
  );
}
