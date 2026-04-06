"use client";

import type { RefObject } from "react";
import { Float, MeshDistortMaterial, MeshTransmissionMaterial, Sparkles } from "@react-three/drei";
import type { Mesh } from "three";
import { AdditiveBlending } from "three";
import { getColorByKey } from "@/lib/scene-utils";
import type { ColorKey, SceneNode, Zone } from "@/lib/types";
import { getProceduralTextureSet } from "./procedural-textures";

export function HumanoidBust({ crystalRef }: { crystalRef: RefObject<Mesh | null> }) {
  const humanoidMetal = getProceduralTextureSet("humanoid-metal");
  const goldMetal = getProceduralTextureSet("gold-metal");

  return (
    <group>
      <group position={[0, 0.04, -0.22]}>
        <mesh position={[0, -0.44, -0.12]} rotation={[0.08, 0, 0]} scale={[2.85, 1.38, 1.52]}>
          <icosahedronGeometry args={[1, 3]} />
          <meshStandardMaterial
            bumpMap={humanoidMetal.bump}
            bumpScale={0.08}
            color="#5e1324"
            emissive="#2d0815"
            emissiveIntensity={0.72}
            map={humanoidMetal.map}
            metalness={0.58}
            roughness={0.26}
          />
        </mesh>
        <mesh position={[0, 0.82, 0.02]} rotation={[0.14, 0, 0]} scale={[1.28, 0.9, 0.6]}>
          <capsuleGeometry args={[0.72, 1.72, 14, 28]} />
          <meshStandardMaterial
            bumpMap={humanoidMetal.bump}
            bumpScale={0.06}
            color="#a3263b"
            emissive="#4a0f1d"
            emissiveIntensity={0.74}
            map={humanoidMetal.map}
            metalness={0.54}
            roughness={0.22}
          />
        </mesh>
        <mesh position={[0, 0.48, 0.52]} rotation={[0.54, 0, 0]} scale={[0.92, 0.38, 0.2]}>
          <sphereGeometry args={[1, 28, 28]} />
          <meshStandardMaterial
            bumpMap={goldMetal.bump}
            bumpScale={0.04}
            color="#c8933b"
            emissive="#694314"
            emissiveIntensity={0.52}
            map={goldMetal.map}
            metalness={0.72}
            roughness={0.18}
          />
        </mesh>
        <mesh position={[-1.62, 0.86, -0.12]} rotation={[0.2, 0.08, -0.88]} scale={[0.66, 1.32, 0.74]}>
          <capsuleGeometry args={[0.48, 1.56, 12, 20]} />
          <meshStandardMaterial
            bumpMap={humanoidMetal.bump}
            bumpScale={0.06}
            color="#6f1628"
            emissive="#330814"
            emissiveIntensity={0.58}
            map={humanoidMetal.map}
            metalness={0.64}
            roughness={0.24}
          />
        </mesh>
        <mesh position={[1.62, 0.86, -0.12]} rotation={[0.2, -0.08, 0.88]} scale={[0.66, 1.32, 0.74]}>
          <capsuleGeometry args={[0.48, 1.56, 12, 20]} />
          <meshStandardMaterial
            bumpMap={humanoidMetal.bump}
            bumpScale={0.06}
            color="#6f1628"
            emissive="#330814"
            emissiveIntensity={0.58}
            map={humanoidMetal.map}
            metalness={0.64}
            roughness={0.24}
          />
        </mesh>
        <mesh position={[-1.02, 0.08, -0.02]} rotation={[0.24, 0.12, -0.18]} scale={[0.34, 1.28, 0.34]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial bumpMap={goldMetal.bump} bumpScale={0.05} color="#d6a253" emissive="#593611" emissiveIntensity={0.38} map={goldMetal.map} metalness={0.82} roughness={0.16} />
        </mesh>
        <mesh position={[1.02, 0.08, -0.02]} rotation={[0.24, -0.12, 0.18]} scale={[0.34, 1.28, 0.34]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial bumpMap={goldMetal.bump} bumpScale={0.05} color="#d6a253" emissive="#593611" emissiveIntensity={0.38} map={goldMetal.map} metalness={0.82} roughness={0.16} />
        </mesh>
        <mesh position={[0, 2.58, -0.04]} rotation={[0.04, 0, 0]} scale={[0.9, 1.18, 0.82]}>
          <icosahedronGeometry args={[0.92, 3]} />
          <meshStandardMaterial
            bumpMap={humanoidMetal.bump}
            bumpScale={0.06}
            color="#9a2238"
            emissive="#4a0f1d"
            emissiveIntensity={0.86}
            map={humanoidMetal.map}
            metalness={0.58}
            roughness={0.16}
          />
        </mesh>
        <mesh position={[0, 2.46, 0.54]} rotation={[0.22, 0, 0]} scale={[0.34, 0.9, 0.24]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#8d1f34" emissive="#4a0f1d" emissiveIntensity={0.58} metalness={0.62} roughness={0.18} />
        </mesh>
        <mesh position={[0, 2.26, 0.7]} rotation={[0.4, 0, 0]} scale={[0.52, 0.16, 0.08]}>
          <boxGeometry args={[1.16, 1, 1]} />
          <meshBasicMaterial color="#f5e2b4" opacity={0.72} transparent />
        </mesh>

        <mesh position={[-0.34, 2.38, 0.48]} rotation={[0.18, -0.14, -0.18]} scale={[0.16, 0.46, 0.16]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial bumpMap={goldMetal.bump} bumpScale={0.04} color="#d0a355" emissive="#684714" emissiveIntensity={0.42} map={goldMetal.map} metalness={0.8} roughness={0.16} />
        </mesh>
        <mesh position={[0.34, 2.38, 0.48]} rotation={[0.18, 0.14, 0.18]} scale={[0.16, 0.46, 0.16]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial bumpMap={goldMetal.bump} bumpScale={0.04} color="#d0a355" emissive="#684714" emissiveIntensity={0.42} map={goldMetal.map} metalness={0.8} roughness={0.16} />
        </mesh>

        <mesh position={[0, 2.02, 0.68]} rotation={[0.36, 0, 0]} scale={[0.34, 0.18, 0.06]}>
          <boxGeometry args={[1.28, 1, 1]} />
          <meshStandardMaterial color="#c7943f" emissive="#5d390d" emissiveIntensity={0.38} metalness={0.84} roughness={0.14} />
        </mesh>

        <mesh position={[-0.42, 2.84, 0.24]} rotation={[0.16, -0.1, -0.36]} scale={[0.24, 0.5, 0.18]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial bumpMap={humanoidMetal.bump} bumpScale={0.05} color="#811b2d" emissive="#430c18" emissiveIntensity={0.5} map={humanoidMetal.map} metalness={0.74} roughness={0.14} />
        </mesh>
        <mesh position={[0.42, 2.84, 0.24]} rotation={[0.16, 0.1, 0.36]} scale={[0.24, 0.5, 0.18]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial bumpMap={humanoidMetal.bump} bumpScale={0.05} color="#811b2d" emissive="#430c18" emissiveIntensity={0.5} map={humanoidMetal.map} metalness={0.74} roughness={0.14} />
        </mesh>

        <mesh position={[0, 2.92, 0.48]} rotation={[0.2, 0, 0]} scale={[0.24, 0.68, 0.14]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#d5a95a" emissive="#684714" emissiveIntensity={0.56} metalness={0.82} roughness={0.14} />
        </mesh>

        <mesh position={[0, 3.06, 0.34]} rotation={[0.16, 0, 0]} scale={[0.34, 0.18, 0.08]}>
          <boxGeometry args={[1.18, 1, 1]} />
          <meshStandardMaterial color="#cf9b45" emissive="#6c4311" emissiveIntensity={0.46} metalness={0.86} roughness={0.12} />
        </mesh>

        <mesh position={[-0.26, 2.84, 0.72]} rotation={[0.3, 0.18, -0.2]} scale={[0.08, 0.18, 0.08]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshBasicMaterial color="#f3deb0" opacity={0.62} transparent />
        </mesh>
        <mesh position={[0.26, 2.84, 0.72]} rotation={[0.3, -0.18, 0.2]} scale={[0.08, 0.18, 0.08]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshBasicMaterial color="#f3deb0" opacity={0.62} transparent />
        </mesh>

        <mesh position={[0, 3.08, 0.94]} rotation={[0.08, 0.24, 0.18]} ref={crystalRef}>
          <octahedronGeometry args={[0.24, 0]} />
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

        <mesh position={[0, 3.34, -0.02]} rotation={[0.06, 0, 0]} scale={[0.58, 0.3, 0.5]}>
          <sphereGeometry args={[1, 20, 20]} />
          <meshStandardMaterial bumpMap={humanoidMetal.bump} bumpScale={0.05} color="#7d1a2d" emissive="#3f0b18" emissiveIntensity={0.38} map={humanoidMetal.map} metalness={0.6} roughness={0.2} />
        </mesh>
      </group>

      <mesh position={[0, 1.42, 0.16]} rotation={[0.12, 0, 0]} scale={[0.08, 4.35, 0.08]}>
        <capsuleGeometry args={[1, 1, 10, 16]} />
        <meshBasicMaterial color="#ffd36a" opacity={0.16} transparent />
      </mesh>
      <mesh position={[-0.58, 1.3, 0.22]} rotation={[0.18, 0.04, -0.54]} scale={[0.07, 2.5, 0.07]}>
        <capsuleGeometry args={[1, 1, 8, 14]} />
        <meshBasicMaterial color="#ff7c5a" opacity={0.14} transparent />
      </mesh>
      <mesh position={[0.58, 1.28, 0.18]} rotation={[0.16, -0.04, 0.52]} scale={[0.07, 2.55, 0.07]}>
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
  const profile = getNodeProfile(node);
  const textureSet =
    profile.family === "crystal"
      ? getProceduralTextureSet("core-crystal")
      : profile.family === "engineered"
        ? getProceduralTextureSet("engineered-world")
        : profile.family === "asteroid"
          ? getProceduralTextureSet("rocky-asteroid")
          : getProceduralTextureSet("organic-world");

  return (
    <Float floatIntensity={isMobile ? 0.22 : 0.55} rotationIntensity={0.18} speed={1.2}>
      <group scale={baseScale}>
        <PlanetShell
          color={color}
          isSelected={isSelected}
          opacity={opacity}
          profile={profile}
          textureSet={textureSet}
          zone={node.zone}
        />
        <NodeSatellites color={color} profile={profile} zone={node.zone} />
      </group>
    </Float>
  );
}

function PlanetShell({
  zone,
  color,
  opacity,
  isSelected,
  profile,
  textureSet
}: {
  zone: Zone;
  color: string;
  opacity: number;
  isSelected: boolean;
  profile: NodeProfile;
  textureSet: ReturnType<typeof getProceduralTextureSet>;
}) {
  const { bump, map } = textureSet;

  if (zone === "core") {
    return (
      <group>
        <mesh>
          <icosahedronGeometry args={[profile.primaryScale, profile.detail]} />
          <MeshTransmissionMaterial
            bumpMap={bump}
            bumpScale={0.06}
            chromaticAberration={0.04}
            color={color}
            distortion={0.12}
            emissive={color}
            emissiveIntensity={isSelected ? 1.9 : 1.15}
            map={map}
            roughness={0.12}
            thickness={0.9}
            transparent
          />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, profile.ringTilt]}>
          <torusGeometry args={[profile.ringRadius, 0.032, 18, 72]} />
          <meshBasicMaterial color="#dffcff" opacity={0.58 * opacity} transparent />
        </mesh>
      </group>
    );
  }

  if (zone === "left") {
    return (
      <group>
        <mesh>
          <dodecahedronGeometry args={[profile.primaryScale, profile.detail]} />
          <meshStandardMaterial
            bumpMap={bump}
            bumpScale={0.08}
            color={profile.surfaceColor}
            emissive={color}
            emissiveIntensity={isSelected ? 1.5 : 0.95}
            map={map}
            metalness={0.72}
            opacity={opacity}
            roughness={0.18}
            transparent
          />
        </mesh>
        <mesh rotation={[0.5, Math.PI / 2.5, profile.ringTilt]}>
          <torusGeometry args={[profile.ringRadius, 0.022, 12, 72]} />
          <meshBasicMaterial color={color} opacity={0.34 * opacity} transparent />
        </mesh>
        <mesh position={[0.46, -0.18, 0.14]} rotation={[0.32, 0.4, 0]} scale={[0.22, 0.18, 0.2]}>
          <dodecahedronGeometry args={[1, 1]} />
          <meshStandardMaterial bumpMap={bump} bumpScale={0.04} color={profile.moonColor} emissive={color} emissiveIntensity={0.35} map={map} metalness={0.62} roughness={0.24} opacity={0.9 * opacity} transparent />
        </mesh>
      </group>
    );
  }

  if (profile.family === "asteroid") {
    return (
      <group>
        <mesh rotation={[0.42, 0.3, 0.1]} scale={[1.18, 0.92, 0.78]}>
          <icosahedronGeometry args={[profile.primaryScale, Math.max(profile.detail, 2)]} />
          <meshStandardMaterial
            bumpMap={bump}
            bumpScale={0.16}
            color={profile.surfaceColor}
            emissive={color}
            emissiveIntensity={isSelected ? 0.7 : 0.28}
            map={map}
            metalness={0.1}
            opacity={opacity}
            roughness={0.9}
            transparent
          />
        </mesh>
        <mesh position={[0.72, 0.18, -0.08]} rotation={[0.3, 0.5, 0.2]} scale={[0.42, 0.3, 0.34]}>
          <dodecahedronGeometry args={[1, 1]} />
          <meshStandardMaterial bumpMap={bump} bumpScale={0.12} color={profile.moonColor} map={map} metalness={0.04} opacity={0.94 * opacity} roughness={0.92} transparent />
        </mesh>
        <mesh position={[-0.62, -0.24, 0.14]} rotation={[0.18, 0.2, 0.56]} scale={[0.34, 0.28, 0.26]}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial bumpMap={bump} bumpScale={0.12} color={profile.surfaceColor} map={map} metalness={0.03} opacity={0.88 * opacity} roughness={0.94} transparent />
        </mesh>
      </group>
    );
  }

  return (
    <group>
      <mesh>
        <icosahedronGeometry args={[profile.primaryScale, profile.detail]} />
        <MeshDistortMaterial
          bumpMap={bump}
          bumpScale={0.06}
          color={profile.surfaceColor}
          distort={profile.distort}
          emissive={color}
          emissiveIntensity={isSelected ? 1.9 : 1.25}
          map={map}
          metalness={0.16}
          opacity={opacity}
          roughness={0.28}
          speed={2.1}
          transparent
        />
      </mesh>
      <mesh rotation={[profile.secondaryTilt, 0.38, 0.3]}>
        <torusGeometry args={[profile.ringRadius, 0.04, 14, 72]} />
        <meshBasicMaterial color={profile.ringColor} opacity={0.28 * opacity} transparent />
      </mesh>
      <mesh position={[-0.52, 0.24, 0.08]} rotation={[0.2, 0.4, 0.1]} scale={[0.18, 0.16, 0.14]}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial bumpMap={bump} bumpScale={0.05} color={profile.moonColor} emissive={profile.ringColor} emissiveIntensity={0.2} map={map} roughness={0.46} metalness={0.08} opacity={0.92 * opacity} transparent />
      </mesh>
    </group>
  );
}

export function AsteroidRock({
  color,
  opacity = 1,
  position,
  rotation,
  scale
}: {
  color: string;
  opacity?: number;
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
}) {
  const rockyTexture = getProceduralTextureSet("rocky-asteroid");

  return (
    <group position={position} rotation={rotation} scale={scale}>
      <mesh rotation={[0.16, 0.24, 0.08]} scale={[1.18, 0.92, 0.82]}>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial
          bumpMap={rockyTexture.bump}
          bumpScale={0.18}
          color={color}
          emissive="#0f141b"
          emissiveIntensity={0.1}
          map={rockyTexture.map}
          metalness={0.05}
          opacity={opacity}
          roughness={0.95}
          transparent
        />
      </mesh>
      <mesh position={[0.42, -0.18, 0.2]} rotation={[0.34, 0.42, 0.1]} scale={[0.34, 0.28, 0.26]}>
        <dodecahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          bumpMap={rockyTexture.bump}
          bumpScale={0.14}
          color="#a9a29a"
          map={rockyTexture.map}
          metalness={0.03}
          opacity={opacity}
          roughness={0.96}
          transparent
        />
      </mesh>
    </group>
  );
}

function NodeSatellites({
  color,
  profile,
  zone
}: {
  color: string;
  profile: NodeProfile;
  zone: Zone;
}) {
  if (zone === "core") {
    return (
      <>
        <mesh position={[profile.ringRadius + 0.2, 0.12, -0.06]}>
          <boxGeometry args={[0.08, 0.46, 0.04]} />
          <meshBasicMaterial color="#dffcff" opacity={0.46} transparent />
        </mesh>
        <mesh position={[-profile.ringRadius - 0.16, -0.12, 0.08]} rotation={[0.18, 0.2, 0.3]}>
          <boxGeometry args={[0.08, 0.32, 0.04]} />
          <meshBasicMaterial color={color} opacity={0.36} transparent />
        </mesh>
      </>
    );
  }

  if (zone === "left") {
    return (
      <>
        <mesh position={[profile.ringRadius + 0.04, 0.2, 0.04]}>
          <boxGeometry args={[0.12, 0.12, 0.12]} />
          <meshBasicMaterial color={color} opacity={0.52} transparent />
        </mesh>
        <mesh position={[-profile.ringRadius, -0.16, -0.02]}>
          <octahedronGeometry args={[0.1, 0]} />
          <meshBasicMaterial color="#d7f7ff" opacity={0.5} transparent />
        </mesh>
      </>
    );
  }

  return (
    <>
      <mesh position={[profile.ringRadius + 0.08, 0.16, 0]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color="#ffe0ca" opacity={0.58} transparent />
      </mesh>
      <mesh position={[-profile.ringRadius + 0.02, -0.22, 0.05]} rotation={[0.12, 0.2, 0.4]}>
        <coneGeometry args={[0.08, 0.28, 6]} />
        <meshBasicMaterial color={color} opacity={0.42} transparent />
      </mesh>
    </>
  );
}

type NodeProfile = {
  family: "crystal" | "engineered" | "organic" | "asteroid";
  primaryScale: number;
  detail: number;
  distort: number;
  ringRadius: number;
  ringTilt: number;
  secondaryTilt: number;
  surfaceColor: string;
  ringColor: string;
  moonColor: string;
};

function getNodeProfile(node: SceneNode): NodeProfile {
  if (node.zone === "core") {
    return {
      family: "crystal",
      primaryScale:
        node.id === "iam-vizion" ? 0.58 : node.id === "collaborate" ? 0.5 : 0.42,
      detail: 2,
      distort: 0.12,
      ringRadius: node.id === "collaborate" ? 0.78 : 0.62,
      ringTilt: node.id === "logic-art" ? 0.44 : 0.14,
      secondaryTilt: 0.4,
      surfaceColor: "#bdf5ff",
      ringColor: "#e8fcff",
      moonColor: "#9be8ff"
    };
  }

  if (node.zone === "left") {
    return {
      family:
        node.id === "projects" || node.id === "experience-archive" ? "asteroid" : "engineered",
      primaryScale:
        node.id === "projects"
          ? 0.62
          : node.id === "experience-archive"
            ? 0.56
            : node.id === "architecture"
              ? 0.48
              : 0.4,
      detail: node.id === "security" || node.id === "projects" ? 2 : 1,
      distort: 0.1,
      ringRadius: node.id === "architecture" ? 0.68 : 0.58,
      ringTilt: node.id === "cloud-systems" ? 0.5 : 0.16,
      secondaryTilt: 0.5,
      surfaceColor:
        node.id === "security"
          ? "#1e2b42"
          : node.id === "projects"
            ? "#445161"
            : node.id === "experience-archive"
              ? "#5a6675"
              : "#0d1a2e",
      ringColor: "#43c6ff",
      moonColor: "#8fc7e8"
    };
  }

  return {
    family:
      node.id === "gallery" || node.id === "dream-layer" ? "asteroid" : "organic",
    primaryScale:
      node.id === "music"
        ? 0.58
        : node.id === "gallery"
          ? 0.62
          : node.id === "dream-layer"
            ? 0.5
            : 0.4,
    detail: node.id === "dream-layer" || node.id === "gallery" ? 2 : 1,
    distort: node.id === "dream-layer" ? 0.48 : 0.34,
    ringRadius: node.id === "music" ? 0.72 : 0.58,
    ringTilt: 0.3,
    secondaryTilt: node.id === "music" ? 1.2 : 0.8,
    surfaceColor:
      node.id === "music" ? "#d05b56" : node.id === "dream-layer" ? "#8f5cd6" : "#ff8f52",
    ringColor: node.id === "music" ? "#ffcf90" : "#ffb06d",
    moonColor: node.id === "dream-layer" ? "#c6b2ff" : "#ffe0ca"
  };
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
