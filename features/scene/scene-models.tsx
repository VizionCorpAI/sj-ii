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
      <group position={[0, 0.12, -0.16]}>
        <mesh position={[0, -0.2, -0.05]} scale={[2.65, 1.28, 1.36]}>
          <sphereGeometry args={[1, 42, 42]} />
          <meshStandardMaterial color="#4f1120" emissive="#2d0815" emissiveIntensity={0.88} metalness={0.42} roughness={0.34} />
        </mesh>

        <mesh position={[0, 0.95, 0.08]} rotation={[0.2, 0, 0]} scale={[1.12, 0.78, 0.55]}>
          <capsuleGeometry args={[0.74, 1.5, 14, 28]} />
          <meshStandardMaterial color="#9b2639" emissive="#511221" emissiveIntensity={0.82} metalness={0.38} roughness={0.28} />
        </mesh>
        <mesh position={[0, 0.58, 0.44]} rotation={[0.55, 0, 0]} scale={[0.82, 0.45, 0.22]}>
          <sphereGeometry args={[1, 24, 24]} />
          <meshStandardMaterial color="#d1a14b" emissive="#6d4818" emissiveIntensity={0.65} metalness={0.62} roughness={0.24} />
        </mesh>

        <mesh position={[-1.38, 0.96, -0.04]} rotation={[0.14, 0.08, -0.76]} scale={[0.6, 1.14, 0.62]}>
          <capsuleGeometry args={[0.52, 1.36, 10, 20]} />
          <meshStandardMaterial color="#6d1628" emissive="#370912" emissiveIntensity={0.7} metalness={0.45} roughness={0.34} />
        </mesh>
        <mesh position={[1.38, 0.96, -0.04]} rotation={[0.14, -0.08, 0.76]} scale={[0.6, 1.14, 0.62]}>
          <capsuleGeometry args={[0.52, 1.36, 10, 20]} />
          <meshStandardMaterial color="#6d1628" emissive="#370912" emissiveIntensity={0.7} metalness={0.45} roughness={0.34} />
        </mesh>

        <mesh position={[0, 2.62, 0]} scale={[0.96, 1.28, 0.98]}>
          <sphereGeometry args={[0.86, 36, 36]} />
          <meshStandardMaterial color="#8e2034" emissive="#4b0d1b" emissiveIntensity={0.94} metalness={0.36} roughness={0.26} />
        </mesh>
        <mesh position={[0, 2.34, 0.54]} rotation={[0.4, 0, 0]} scale={[0.52, 0.34, 0.22]}>
          <sphereGeometry args={[1, 24, 24]} />
          <meshStandardMaterial color="#ccac60" emissive="#6f4d20" emissiveIntensity={0.75} metalness={0.7} roughness={0.18} />
        </mesh>

        <mesh position={[0, 2.82, 0.38]} rotation={[0.28, 0, 0]} scale={[0.54, 0.76, 0.18]}>
          <sphereGeometry args={[1, 28, 28]} />
          <meshStandardMaterial color="#d9b56a" emissive="#704d16" emissiveIntensity={0.68} metalness={0.62} roughness={0.22} />
        </mesh>
        <mesh position={[0, 2.52, 0.78]} rotation={[0.32, 0, 0]} scale={[0.42, 0.18, 0.08]}>
          <boxGeometry args={[1.2, 1, 1]} />
          <meshBasicMaterial color="#f6dfb1" opacity={0.68} transparent />
        </mesh>
        <mesh position={[0, 2.94, 0.46]} rotation={[0.18, 0, 0]} scale={[0.22, 0.58, 0.12]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#d8b064" emissive="#6b4919" emissiveIntensity={0.64} metalness={0.65} roughness={0.18} />
        </mesh>
        <mesh position={[0, 3.05, 0.9]} rotation={[0.08, 0.24, 0.18]} ref={crystalRef}>
          <octahedronGeometry args={[0.3, 0]} />
          <MeshTransmissionMaterial
            anisotropy={0.6}
            chromaticAberration={0.045}
            clearcoat={1}
            color="#ffd66f"
            distortion={0.12}
            emissive="#ffd15a"
            emissiveIntensity={2.35}
            ior={1.18}
            roughness={0.04}
            thickness={0.92}
          />
        </mesh>
      </group>

      <mesh position={[0, 1.48, 0.14]} rotation={[0.12, 0, 0]} scale={[0.1, 4.1, 0.1]}>
        <capsuleGeometry args={[1, 1, 10, 16]} />
        <meshBasicMaterial color="#ffd36a" opacity={0.16} transparent />
      </mesh>
      <mesh position={[-0.55, 1.42, 0.18]} rotation={[0.2, 0.04, -0.5]} scale={[0.08, 2.3, 0.08]}>
        <capsuleGeometry args={[1, 1, 8, 14]} />
        <meshBasicMaterial color="#ff7c5a" opacity={0.14} transparent />
      </mesh>
      <mesh position={[0.58, 1.36, 0.15]} rotation={[0.16, -0.04, 0.52]} scale={[0.08, 2.45, 0.08]}>
        <capsuleGeometry args={[1, 1, 8, 14]} />
        <meshBasicMaterial color="#ffb86a" opacity={0.14} transparent />
      </mesh>

      <Sparkles
        count={80}
        color="#ffd36a"
        position={[0, 3.02, 0.9]}
        scale={[1.6, 0.95, 1]}
        size={3.6}
        speed={0.55}
      />
    </group>
  );
}

export function CrystalPortalHalo() {
  return (
    <group position={[0, 3.02, 0.88]}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.58, 0.02, 18, 96]} />
        <meshBasicMaterial color="#ffe58e" opacity={0.88} transparent />
      </mesh>
      <mesh rotation={[Math.PI / 2, Math.PI / 3, 0]}>
        <torusGeometry args={[0.84, 0.012, 18, 96]} />
        <meshBasicMaterial color="#ff9559" opacity={0.34} transparent />
      </mesh>
      <mesh rotation={[0.28, 0.22, 0.1]} scale={[1.4, 0.55, 1]}>
        <sphereGeometry args={[0.92, 36, 36]} />
        <meshBasicMaterial
          blending={AdditiveBlending}
          color="#ffc85f"
          opacity={0.13}
          transparent
        />
      </mesh>
    </group>
  );
}

export function PortalTunnel({ active }: { active: boolean }) {
  if (!active) {
    return null;
  }

  return (
    <group position={[0, 2.95, -0.35]}>
      <mesh rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 3.6]}>
        <cylinderGeometry args={[0.92, 0.34, 2.8, 32, 1, true]} />
        <meshBasicMaterial color="#ffcf68" opacity={0.16} side={2} transparent />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0.18, 0]} scale={[1, 1, 2.6]}>
        <torusGeometry args={[0.92, 0.045, 18, 80]} />
        <meshBasicMaterial color="#fff2b0" opacity={0.62} transparent />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0.58, 0]} scale={[1.25, 1.25, 3.2]}>
        <torusGeometry args={[0.72, 0.028, 18, 80]} />
        <meshBasicMaterial color="#ff8a52" opacity={0.32} transparent />
      </mesh>
      <Sparkles
        count={70}
        color="#ffd36a"
        position={[0, 0, -0.7]}
        scale={[1.8, 1.8, 3.1]}
        size={4}
        speed={0.8}
      />
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
