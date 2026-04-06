"use client";

import type { RefObject } from "react";
import { Float, MeshDistortMaterial, MeshTransmissionMaterial, Sparkles } from "@react-three/drei";
import type { Mesh } from "three";
import { AdditiveBlending } from "three";
import { getColorByKey } from "@/lib/scene-utils";
import type { ColorKey, SceneNode, Zone } from "@/lib/types";

export function HumanoidBust({ crystalRef }: { crystalRef: RefObject<Mesh | null> }) {
  return (
    <group>
      <group position={[0, 0.18, -0.18]}>
        <mesh position={[0, -0.18, 0]} scale={[2.45, 1.2, 1.25]}>
          <sphereGeometry args={[1, 42, 42]} />
          <meshStandardMaterial color="#09111d" emissive="#09192f" emissiveIntensity={0.65} />
        </mesh>
        <mesh position={[0, 1.1, -0.1]} scale={[0.56, 0.78, 0.46]}>
          <capsuleGeometry args={[0.62, 1.25, 12, 28]} />
          <meshStandardMaterial color="#10182a" emissive="#10213a" emissiveIntensity={0.8} />
        </mesh>
        <mesh position={[0, 2.58, 0]} scale={[1.08, 1.22, 1.02]}>
          <icosahedronGeometry args={[0.92, 3]} />
          <meshStandardMaterial color="#131c31" emissive="#0f1f38" emissiveIntensity={0.95} />
        </mesh>
        <mesh position={[0, 2.14, 0.65]} rotation={[0.42, 0, 0]} scale={[0.56, 0.32, 0.2]}>
          <sphereGeometry args={[1, 24, 24]} />
          <meshStandardMaterial color="#182239" emissive="#10213a" emissiveIntensity={0.52} />
        </mesh>
        <mesh position={[0, 2.9, 0.82]} rotation={[0.08, 0.24, 0.18]} ref={crystalRef}>
          <octahedronGeometry args={[0.42, 0]} />
          <MeshTransmissionMaterial
            anisotropy={0.45}
            chromaticAberration={0.06}
            clearcoat={1}
            distortion={0.25}
            emissive="#83eeff"
            emissiveIntensity={1.8}
            ior={1.15}
            roughness={0.08}
            thickness={0.8}
          />
        </mesh>
      </group>

      <mesh position={[0, 1.55, 0.1]} rotation={[0.12, 0, 0]} scale={[0.12, 3.8, 0.12]}>
        <capsuleGeometry args={[1, 1, 10, 16]} />
        <meshBasicMaterial color="#66dfff" opacity={0.16} transparent />
      </mesh>
      <mesh position={[-0.55, 1.42, 0.18]} rotation={[0.2, 0.04, -0.5]} scale={[0.08, 2.3, 0.08]}>
        <capsuleGeometry args={[1, 1, 8, 14]} />
        <meshBasicMaterial color="#5ebeff" opacity={0.14} transparent />
      </mesh>
      <mesh position={[0.58, 1.36, 0.15]} rotation={[0.16, -0.04, 0.52]} scale={[0.08, 2.45, 0.08]}>
        <capsuleGeometry args={[1, 1, 8, 14]} />
        <meshBasicMaterial color="#6fe4ff" opacity={0.14} transparent />
      </mesh>

      <Sparkles
        count={80}
        color="#8deaff"
        position={[0, 2.85, 0.82]}
        scale={[1.6, 0.95, 1]}
        size={3.6}
        speed={0.55}
      />
    </group>
  );
}

export function CrystalPortalHalo() {
  return (
    <group position={[0, 2.92, 0.8]}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.68, 0.024, 18, 96]} />
        <meshBasicMaterial color="#98efff" opacity={0.85} transparent />
      </mesh>
      <mesh rotation={[Math.PI / 2, Math.PI / 3, 0]}>
        <torusGeometry args={[0.98, 0.014, 18, 96]} />
        <meshBasicMaterial color="#ffd36a" opacity={0.42} transparent />
      </mesh>
      <mesh rotation={[0.28, 0.22, 0.1]} scale={[1.4, 0.55, 1]}>
        <sphereGeometry args={[0.92, 36, 36]} />
        <meshBasicMaterial
          blending={AdditiveBlending}
          color="#5ccfff"
          opacity={0.1}
          transparent
        />
      </mesh>
    </group>
  );
}

export function NodeModel({
  node,
  isDimmed,
  isHovered,
  isMobile,
  isSelected
}: {
  node: SceneNode;
  isDimmed: boolean;
  isHovered: boolean;
  isMobile: boolean;
  isSelected: boolean;
}) {
  const color = getColorByKey(node.colorKey);
  const opacity = isDimmed ? 0.22 : 1;
  const baseScale = isSelected ? 1.24 : isHovered ? 1.08 : 1;

  return (
    <Float floatIntensity={isMobile ? 0.22 : 0.55} rotationIntensity={0.18} speed={1.2}>
      <group scale={baseScale}>
        <PlanetShell color={color} isSelected={isSelected} opacity={opacity} zone={node.zone} />
        <NodeSatellites color={color} zone={node.zone} />
      </group>
    </Float>
  );
}

function PlanetShell({
  zone,
  color,
  opacity,
  isSelected
}: {
  zone: Zone;
  color: string;
  opacity: number;
  isSelected: boolean;
}) {
  if (zone === "core") {
    return (
      <group>
        <mesh>
          <icosahedronGeometry args={[0.4, 2]} />
          <MeshTransmissionMaterial
            chromaticAberration={0.04}
            color={color}
            distortion={0.12}
            emissive={color}
            emissiveIntensity={isSelected ? 1.9 : 1.15}
            roughness={0.12}
            thickness={0.9}
            transparent
          />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.62, 0.032, 18, 72]} />
          <meshBasicMaterial color="#dffcff" opacity={0.58 * opacity} transparent />
        </mesh>
      </group>
    );
  }

  if (zone === "left") {
    return (
      <group>
        <mesh>
          <dodecahedronGeometry args={[0.38, 1]} />
          <meshStandardMaterial
            color="#0d1a2e"
            emissive={color}
            emissiveIntensity={isSelected ? 1.5 : 0.95}
            metalness={0.72}
            opacity={opacity}
            roughness={0.18}
            transparent
          />
        </mesh>
        <mesh rotation={[0.5, Math.PI / 2.5, 0.18]}>
          <torusGeometry args={[0.58, 0.022, 12, 72]} />
          <meshBasicMaterial color={color} opacity={0.34 * opacity} transparent />
        </mesh>
      </group>
    );
  }

  return (
    <group>
      <mesh>
        <octahedronGeometry args={[0.36, 1]} />
        <MeshDistortMaterial
          color={color}
          distort={0.34}
          emissive={color}
          emissiveIntensity={isSelected ? 1.9 : 1.25}
          metalness={0.16}
          opacity={opacity}
          roughness={0.28}
          speed={2.1}
          transparent
        />
      </mesh>
      <mesh rotation={[0.8, 0.38, 0.3]}>
        <torusKnotGeometry args={[0.44, 0.05, 88, 12]} />
        <meshBasicMaterial color={color} opacity={0.22 * opacity} transparent />
      </mesh>
    </group>
  );
}

function NodeSatellites({ color, zone }: { color: string; zone: Zone }) {
  if (zone === "core") {
    return (
      <>
        <mesh position={[0.82, 0.12, -0.06]}>
          <boxGeometry args={[0.08, 0.46, 0.04]} />
          <meshBasicMaterial color="#dffcff" opacity={0.46} transparent />
        </mesh>
        <mesh position={[-0.78, -0.12, 0.08]} rotation={[0.18, 0.2, 0.3]}>
          <boxGeometry args={[0.08, 0.32, 0.04]} />
          <meshBasicMaterial color={color} opacity={0.36} transparent />
        </mesh>
      </>
    );
  }

  if (zone === "left") {
    return (
      <>
        <mesh position={[0.62, 0.2, 0.04]}>
          <boxGeometry args={[0.12, 0.12, 0.12]} />
          <meshBasicMaterial color={color} opacity={0.52} transparent />
        </mesh>
        <mesh position={[-0.58, -0.16, -0.02]}>
          <octahedronGeometry args={[0.1, 0]} />
          <meshBasicMaterial color="#d7f7ff" opacity={0.5} transparent />
        </mesh>
      </>
    );
  }

  return (
    <>
      <mesh position={[0.66, 0.16, 0]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color="#ffe0ca" opacity={0.58} transparent />
      </mesh>
      <mesh position={[-0.5, -0.22, 0.05]} rotation={[0.12, 0.2, 0.4]}>
        <coneGeometry args={[0.08, 0.28, 6]} />
        <meshBasicMaterial color={color} opacity={0.42} transparent />
      </mesh>
    </>
  );
}

export function SelectedMemoryShard({
  color,
  isMobile
}: {
  color: ColorKey;
  isMobile: boolean;
}) {
  const tint = getColorByKey(color);

  return (
    <>
      <mesh position={[0.88, 0.56, 0.15]} rotation={[0.3, 0.4, 0.18]}>
        <boxGeometry args={[isMobile ? 0.18 : 0.26, isMobile ? 0.42 : 0.64, 0.03]} />
        <meshBasicMaterial color={tint} opacity={0.38} transparent />
      </mesh>
      <mesh position={[-0.95, 0.18, -0.12]} rotation={[0.56, 0.2, 0.44]}>
        <boxGeometry args={[isMobile ? 0.14 : 0.2, isMobile ? 0.34 : 0.52, 0.03]} />
        <meshBasicMaterial color="#f5fbff" opacity={0.24} transparent />
      </mesh>
      <mesh position={[0.32, -0.82, 0.08]} rotation={[0.82, 0.38, 0.2]}>
        <octahedronGeometry args={[isMobile ? 0.14 : 0.2, 0]} />
        <meshBasicMaterial color={tint} opacity={0.34} transparent />
      </mesh>
    </>
  );
}
