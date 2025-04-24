import React, { useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";

const PARTICLE_COUNT = 12;
const DELAY_BETWEEN = 4; // frames between each trailing ball
const MAX_HISTORY = PARTICLE_COUNT * DELAY_BETWEEN + 1;
const SPHERE_RADIUS = 0.03; // slightly larger for visibility

// Bright, vibrant color palette
const COLORS = [
  "#FF2D95", // bright pink
  "#00FFD5", // neon teal
  "#FFAA00", // vivid orange
  "#8D38B2", // bright purple
  "#00A8E8", // electric blue
  "#FF0054", // hot magenta
  "#4EFF00", // lime green
  "#FF7F50", // coral
  "#FFD700", // gold
  "#00FA9A", // spring green
  "#DC143C", // crimson
  "#00BFFF"  // deep sky blue
];

function ParticleTrail() {
  const { mouse, viewport } = useThree();
  const meshRefs = useRef<THREE.Mesh[]>([]);
  const history = useRef<{ x: number; y: number }[]>([]);

  useFrame(() => {
    const cx = mouse.x * (viewport.width / 2);
    const cy = mouse.y * (viewport.height / 2);

    // Record cursor history
    history.current.push({ x: cx, y: cy });
    if (history.current.length > MAX_HISTORY) {
      history.current.shift();
    }

    meshRefs.current.forEach((mesh, i) => {
      if (!mesh) return;
      // Compute index in history for this ball
      const idx = history.current.length - 1 - i * DELAY_BETWEEN;
      const pos = history.current[Math.max(0, idx)];
      // Z offset for layering
      const z = -i * 0.02;
      // Smoothly interpolate towards target
      mesh.position.lerp(new THREE.Vector3(pos.x, pos.y, z), 0.3);
    });
  });

  return (
    <>
      {Array.from({ length: PARTICLE_COUNT }).map((_, i) => (
        <mesh
          key={i}
          ref={el => { if (el) meshRefs.current[i] = el; }}
        >
          <sphereGeometry args={[SPHERE_RADIUS, 16, 16]} />
          {/* Unlit material for full brightness */}
          <meshBasicMaterial color={COLORS[i % COLORS.length]} />
        </mesh>
      ))}
    </>
  );
}

export default function CursorParticles() {
  return (
    <Canvas
      className="pointer-events-none fixed inset-0 z-50"
      camera={{ position: [0, 0, 5], fov: 75 }}
    >
      <ParticleTrail />
    </Canvas>
  );
}
