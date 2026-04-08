"use client";

import { useEffect, useMemo, useRef } from "react";
import { Environment, Html, Lightformer, Line, Sparkles, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { gsap } from "gsap";
import { AdditiveBlending, Group, Vector3 } from "three";
import { sceneNodes } from "@/content/portfolio-data";
import { useSceneStore } from "@/lib/scene-store";
import { getColorByKey } from "@/lib/scene-utils";
import type { SceneNode, Zone } from "@/lib/types";
import {
  AsteroidRock,
  NodeModel,
  SelectedMemoryShard
} from "./scene-models";

const UNIVERSE_SCALE = 1.44;
const coreTarget = new Vector3(0, 0.25, 13.8);

function scalePosition(position: [number, number, number]): [number, number, number] {
  return [position[0] * UNIVERSE_SCALE, position[1] * UNIVERSE_SCALE, position[2] * UNIVERSE_SCALE];
}

export function SceneStage() {
  const introPhase = useSceneStore((state) => state.introPhase);
  const introDismissed = useSceneStore((state) => state.introDismissed);
  const isMobile = useSceneStore((state) => state.isMobile);
  const reducedMotion = useSceneStore((state) => state.reducedMotion);
  const selectNode = useSceneStore((state) => state.selectNode);
  const selectedNodeId = useSceneStore((state) => state.selectedNodeId);
  const hoveredNodeId = useSceneStore((state) => state.hoveredNodeId);
  const focusZone = useSceneStore((state) => state.focusZone);
  const groupRef = useRef<Group>(null);
  const hasStarted = useRef(false);
  const { camera } = useThree();

  useEffect(() => {
    if (hasStarted.current) {
      return;
    }

    hasStarted.current = true;

    if (introPhase === "universe") {
      camera.position.copy(coreTarget);
      camera.lookAt(0, 0, 0);
      return;
    }
    camera.position.set(0, 0.6, 9.4);
    camera.lookAt(0, 0.55, 0);
  }, [camera, introPhase]);

  useEffect(() => {
    if (!introDismissed || introPhase !== "humanoid") {
      return;
    }

    const tl = gsap.timeline();

    tl.to(camera.position, {
      duration: reducedMotion ? 0.35 : isMobile ? 1.1 : 1.6,
      x: 0,
      y: 0.6,
      z: 8.25,
      ease: "power2.inOut"
    });

    if (groupRef.current) {
      tl.to(
        groupRef.current.rotation,
        {
          duration: reducedMotion ? 0.3 : 1.4,
          y: 0,
          ease: "sine.inOut"
        },
        0
      );
    }

    return () => {
      tl.kill();
    };
  }, [camera, introDismissed, introPhase, isMobile, reducedMotion]);

  useFrame((state, delta) => {
    if (groupRef.current && introPhase === "universe") {
      groupRef.current.rotation.y += delta * 0.02;
    }

    if (introPhase === "universe") {
      const targetNode = sceneNodes.find((node) => node.id === selectedNodeId);
      const desired = targetNode
        ? new Vector3(
            targetNode.position[0] * UNIVERSE_SCALE,
            targetNode.position[1] * UNIVERSE_SCALE + 0.2,
            isMobile ? 11.8 : 10.2
          )
        : coreTarget;

      camera.position.lerp(desired, 0.045);
      const lookTarget = targetNode
        ? new Vector3(
            targetNode.position[0] * UNIVERSE_SCALE,
            targetNode.position[1] * UNIVERSE_SCALE,
            targetNode.position[2] * UNIVERSE_SCALE
          )
        : new Vector3(0, 0, 0);
      camera.lookAt(lookTarget);
    } else {
      camera.lookAt(0, 0.5, 0);
    }
  });

  const selectedZone = sceneNodes.find((node) => node.id === selectedNodeId)?.zone;

  return (
    <>
      <ambientLight intensity={0.22} />
      <hemisphereLight args={["#8ad7ff", "#050910", 0.42]} position={[0, 4, 0]} />
      <directionalLight castShadow color="#9edfff" intensity={2.6} position={[8, 10, 7]} />
      <directionalLight color="#ff9058" intensity={1.6} position={[-7, -2, 5]} />
      <pointLight color="#9be8ff" intensity={3.6} position={[0, 2.3, 1.8]} />
      <pointLight color="#ffd36a" intensity={2.2} position={[0, 3.1, 1.1]} />
      <Environment resolution={256}>
        <Lightformer color="#7bd9ff" form="ring" intensity={2.6} position={[-9, 4, 5]} scale={[8, 8, 1]} />
        <Lightformer color="#ff9e61" form="ring" intensity={1.9} position={[9, 1, 4]} scale={[7, 7, 1]} />
        <Lightformer color="#ffffff" form="rect" intensity={1.1} position={[0, 8, -6]} scale={[15, 8, 1]} />
        <Lightformer color="#5dbfff" form="rect" intensity={0.9} position={[-12, -2, -2]} scale={[10, 4, 1]} />
      </Environment>

      <group ref={groupRef}>
        {introPhase === "universe" ? (
          <group>
            <ZoneAtmospheres />
            <Sparkles
              count={reducedMotion ? 50 : isMobile ? 80 : 140}
              color="#94dfff"
              scale={[16, 8, 10]}
              size={4}
              speed={0.35}
            />
            <mesh position={[0, -3.25, 0]} rotation={[-Math.PI / 2, 0, 0]}>
              <circleGeometry args={[16.5, 72]} />
              <meshBasicMaterial color="#061220" opacity={0.18} transparent />
            </mesh>

            {sceneNodes.map((node) => (
              <NodeObject
                focusZone={focusZone}
                isHovered={hoveredNodeId === node.id}
                isMobile={isMobile}
                isSelected={selectedNodeId === node.id}
                key={node.id}
                node={node}
                onSelect={() => selectNode(node.id, node.zone)}
                selectedZone={selectedZone}
              />
            ))}

            <ConnectionWeb selectedNodeId={selectedNodeId} />
            <AsteroidFields />
            <MemoryShards isMobile={isMobile} selectedNodeId={selectedNodeId} />
            <FocusField focusZone={focusZone} />
          </group>
        ) : null}
      </group>
    </>
  );
}

function ZoneAtmospheres() {
  return (
    <group>
      <HemisphereAura
        color="#43c6ff"
        position={[-6.4 * UNIVERSE_SCALE, 0.2, -3.6]}
        scale={[10.8, 6.2, 2.4]}
      />
      <HemisphereAura
        color="#ff8f52"
        position={[6.4 * UNIVERSE_SCALE, 0.15, -3.6]}
        scale={[10.8, 6.2, 2.4]}
      />
      <HemisphereAura color="#9be8ff" position={[0, 0.1, -2.4]} scale={[6.8, 4.4, 1.8]} />
      <CorePulse />
    </group>
  );
}

function HemisphereAura({
  color,
  position,
  scale
}: {
  color: string;
  position: [number, number, number];
  scale: [number, number, number];
}) {
  return (
    <mesh position={position} scale={scale}>
      <sphereGeometry args={[1, 48, 48]} />
      <meshBasicMaterial
        blending={AdditiveBlending}
        color={color}
        opacity={0.085}
        transparent
      />
    </mesh>
  );
}

function CorePulse() {
  return (
    <group position={[0, 0, -0.4]}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2.6, 2.88, 72]} />
        <meshBasicMaterial color="#9be8ff" opacity={0.24} transparent />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0.22, 0]}>
        <ringGeometry args={[3.7, 3.92, 72]} />
        <meshBasicMaterial color="#ffd36a" opacity={0.12} transparent />
      </mesh>
    </group>
  );
}

function NodeObject({
  node,
  isHovered,
  isMobile,
  isSelected,
  selectedZone,
  focusZone,
  onSelect
}: {
  node: SceneNode;
  isHovered: boolean;
  isMobile: boolean;
  isSelected: boolean;
  selectedZone?: Zone;
  focusZone: Zone | "all";
  onSelect: () => void;
}) {
  const hoverNode = useSceneStore((state) => state.hoverNode);
  const color = getColorByKey(node.colorKey);
  const isDimmed =
    focusZone !== "all" && focusZone !== node.zone && !isSelected && selectedZone !== node.zone;

  return (
    <group position={scalePosition(node.position)}>
      <group
        onClick={onSelect}
        onPointerEnter={() => hoverNode(node.id)}
        onPointerLeave={() => hoverNode(null)}
      >
        <NodeModel
          isDimmed={isDimmed}
          isHovered={isHovered}
          isMobile={isMobile}
          isSelected={isSelected}
          node={node}
        />
      </group>

      {(isHovered || isSelected) ? (
        <>
          <Sparkles
            count={10}
            color={color}
            position={[0, 0, 0]}
            scale={[0.9, 0.9, 0.9]}
            size={4}
            speed={0.8}
          />
          <Html center distanceFactor={8.5}>
            <div
              style={{
                padding: "0.45rem 0.7rem",
                borderRadius: "999px",
                background: "rgba(5, 14, 28, 0.82)",
                border: "1px solid rgba(155, 232, 255, 0.25)",
                color: "#f7fbff",
                fontSize: "0.8rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                whiteSpace: "nowrap"
              }}
            >
              {node.label}
            </div>
          </Html>
        </>
      ) : null}

      {!isMobile ? (
        <Text
          anchorX="center"
          anchorY="middle"
          color="#dff6ff"
          fontSize={0.14}
          outlineColor="#030712"
          outlineWidth={0.012}
          position={[0, -0.62, 0]}
        >
          {node.label}
        </Text>
      ) : null}
    </group>
  );
}

function ConnectionWeb({ selectedNodeId }: { selectedNodeId: string | null }) {
  const nodeMap = useMemo(() => new Map(sceneNodes.map((node) => [node.id, node])), []);

  return (
    <>
      {sceneNodes.flatMap((node) =>
        node.connections
          .filter((connectionId) => node.id < connectionId)
          .map((connectionId) => {
            const target = nodeMap.get(connectionId);
            if (!target) {
              return null;
            }

            const isActive = selectedNodeId === node.id || selectedNodeId === target.id;

            return (
              <Line
                color={isActive ? "#d6f8ff" : "#24506b"}
                key={`${node.id}-${connectionId}`}
                lineWidth={isActive ? 1.8 : 0.7}
                opacity={isActive ? 0.9 : 0.3}
                points={[scalePosition(node.position), scalePosition(target.position)]}
                transparent
              />
            );
          })
      )}
    </>
  );
}

function AsteroidFields() {
  const fields = [
    {
      id: "projects",
      color: "#8ea0b8",
      offsets: [
        [1.1, 0.42, -0.22],
        [1.56, -0.18, 0.08],
        [-1.02, 0.24, -0.14],
        [-1.42, -0.44, 0.12],
        [0.26, -0.82, 0.16]
      ]
    },
    {
      id: "experience-archive",
      color: "#b0bac6",
      offsets: [
        [0.92, 0.32, -0.14],
        [1.32, -0.08, 0.06],
        [-0.84, -0.26, 0.1],
        [-1.22, 0.48, -0.08]
      ]
    },
    {
      id: "gallery",
      color: "#c69473",
      offsets: [
        [1.02, 0.46, -0.18],
        [1.46, -0.22, 0.08],
        [-1.08, 0.18, -0.1],
        [-1.34, -0.38, 0.12],
        [0.22, -0.94, 0.22]
      ]
    },
    {
      id: "dream-layer",
      color: "#bba4ff",
      offsets: [
        [0.88, 0.34, -0.16],
        [1.18, -0.14, 0.08],
        [-0.96, -0.26, 0.16],
        [-1.24, 0.44, -0.04]
      ]
    }
  ] as const;

  return (
    <>
      {fields.map((field) => {
        const anchor = sceneNodes.find((node) => node.id === field.id);
        if (!anchor) {
          return null;
        }

        return (
          <group key={field.id} position={scalePosition(anchor.position)}>
            {field.offsets.map((offset, index) => (
              <AsteroidRock
                color={field.color}
                key={`${field.id}-asteroid-${index}`}
                position={offset as [number, number, number]}
                rotation={[0.24 * (index + 1), 0.18 * index, 0.12 * (index + 2)]}
                scale={[
                  0.22 + index * 0.03,
                  0.16 + (index % 2) * 0.05,
                  0.17 + ((index + 1) % 3) * 0.04
                ]}
              />
            ))}
          </group>
        );
      })}
    </>
  );
}

function MemoryShards({
  selectedNodeId,
  isMobile
}: {
  selectedNodeId: string | null;
  isMobile: boolean;
}) {
  const selectedNode = sceneNodes.find((node) => node.id === selectedNodeId);

  if (!selectedNode) {
    return null;
  }

  const color = getColorByKey(selectedNode.colorKey);

  return (
    <group position={scalePosition(selectedNode.position)}>
      <SelectedMemoryShard color={selectedNode.colorKey} isMobile={isMobile} />
      <Sparkles
        count={8}
        color={color}
        position={[0, 0, 0]}
        scale={[1.8, 1.8, 1.8]}
        size={4.5}
        speed={0.45}
      />
    </group>
  );
}

function FocusField({ focusZone }: { focusZone: Zone | "all" }) {
  const color =
    focusZone === "left"
      ? "#43c6ff"
      : focusZone === "right"
        ? "#ff8f52"
        : focusZone === "core"
          ? "#9be8ff"
          : "#9be8ff";

  return (
    <mesh position={[0, 0, -1.4]}>
      <ringGeometry args={[focusZone === "all" ? 7.5 : 5.9, 8.4, 96]} />
      <meshBasicMaterial color={color} opacity={focusZone === "all" ? 0.08 : 0.18} transparent />
    </mesh>
  );
}
