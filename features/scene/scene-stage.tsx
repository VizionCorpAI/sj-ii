"use client";

import { useEffect, useMemo, useRef } from "react";
import { Html, Line, Sparkles, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { gsap } from "gsap";
import { AdditiveBlending, Group, Mesh, Vector3 } from "three";
import { sceneNodes } from "@/content/portfolio-data";
import { useSceneStore } from "@/lib/scene-store";
import { getColorByKey } from "@/lib/scene-utils";
import type { SceneNode, Zone } from "@/lib/types";
import {
  CrystalPortalHalo,
  HumanoidBust,
  NodeModel,
  PortalTunnel,
  SelectedMemoryShard
} from "./scene-models";

const coreTarget = new Vector3(0, 0, 7.5);

export function SceneStage() {
  const introPhase = useSceneStore((state) => state.introPhase);
  const reducedMotion = useSceneStore((state) => state.reducedMotion);
  const isMobile = useSceneStore((state) => state.isMobile);
  const setIntroPhase = useSceneStore((state) => state.setIntroPhase);
  const dismissIntro = useSceneStore((state) => state.dismissIntro);
  const selectNode = useSceneStore((state) => state.selectNode);
  const selectedNodeId = useSceneStore((state) => state.selectedNodeId);
  const hoveredNodeId = useSceneStore((state) => state.hoveredNodeId);
  const focusZone = useSceneStore((state) => state.focusZone);
  const groupRef = useRef<Group>(null);
  const humanoidRef = useRef<Group>(null);
  const portalRef = useRef<Mesh>(null);
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

    const rotationProxy = { y: 0 };
    const tl = gsap.timeline();

    tl.call(() => setIntroPhase("boot"))
      .to(camera.position, {
        duration: 0.8,
        x: 0,
        y: 0.35,
        z: 12
      })
      .call(() => setIntroPhase("humanoid"))
      .to(camera.position, {
        duration: reducedMotion ? 0.4 : isMobile ? 1.4 : 2.1,
        x: 0,
        y: 0.6,
        z: 8.25,
        ease: "power2.inOut"
      })
      .call(() => setIntroPhase("portal"))
      .to(camera.position, {
        duration: reducedMotion ? 0.35 : isMobile ? 1.3 : 2,
        x: 0,
        y: 0.1,
        z: 1.6,
        ease: "power3.in"
      })
      .to(rotationProxy, {
        duration: 1.1,
        y: 0.18,
        ease: "sine.inOut",
        onUpdate: () => {
          if (groupRef.current) {
            groupRef.current.rotation.y = rotationProxy.y;
          }
        }
      })
      .call(() => dismissIntro());

    return () => {
      tl.kill();
    };
  }, [camera, dismissIntro, introPhase, isMobile, reducedMotion, setIntroPhase]);

  useFrame((state, delta) => {
    const elapsed = state.clock.getElapsedTime();

    if (humanoidRef.current) {
      humanoidRef.current.position.y = Math.sin(elapsed * 1.4) * 0.06;
    }

    if (portalRef.current) {
      portalRef.current.scale.setScalar(1 + Math.sin(elapsed * 2.8) * 0.06);
    }

    if (groupRef.current && introPhase === "universe") {
      groupRef.current.rotation.y += delta * 0.02;
    }

    if (introPhase === "universe") {
      const targetNode = sceneNodes.find((node) => node.id === selectedNodeId);
      const desired = targetNode
        ? new Vector3(targetNode.position[0], targetNode.position[1], isMobile ? 7.2 : 5.8)
        : coreTarget;

      camera.position.lerp(desired, 0.045);
      const lookTarget = targetNode
        ? new Vector3(targetNode.position[0], targetNode.position[1], targetNode.position[2])
        : new Vector3(0, 0, 0);
      camera.lookAt(lookTarget);
    } else {
      camera.lookAt(0, 0.5, 0);
    }
  });

  const selectedZone = sceneNodes.find((node) => node.id === selectedNodeId)?.zone;

  return (
    <>
      <ambientLight intensity={0.55} />
      <directionalLight color="#7bd9ff" intensity={2.2} position={[4, 6, 5]} />
      <directionalLight color="#ff8948" intensity={1.4} position={[-4, -2, 3]} />
      <pointLight color="#9be8ff" intensity={7} position={[0, 1.7, 0.35]} />

      <group ref={groupRef}>
        {introPhase !== "universe" ? (
          <group ref={humanoidRef}>
            <HumanoidBust crystalRef={portalRef} />
            <CrystalPortalHalo />
            <PortalTunnel active={introPhase === "portal"} />
            <PortalTransitionOverlay active={introPhase === "portal"} />
          </group>
        ) : null}

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
              <circleGeometry args={[13.5, 64]} />
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
      <HemisphereAura color="#43c6ff" position={[-5.8, 0.15, -1.6]} scale={[7.4, 4.5, 1]} />
      <HemisphereAura color="#ff8f52" position={[5.8, 0.15, -1.6]} scale={[7.4, 4.5, 1]} />
      <HemisphereAura color="#9be8ff" position={[0, 0.05, -1.2]} scale={[4.6, 3.2, 1]} />
      <CorePulse />
    </group>
  );
}

function PortalTransitionOverlay({ active }: { active: boolean }) {
  if (!active) {
    return null;
  }

  return (
    <group position={[0, 0.6, -2.5]}>
      <mesh scale={[10, 6, 1]}>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial color="#12070c" opacity={0.28} transparent />
      </mesh>
      <mesh scale={[4.2, 2.8, 1]}>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial color="#ffb760" opacity={0.08} transparent />
      </mesh>
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
        opacity={0.075}
        transparent
      />
    </mesh>
  );
}

function CorePulse() {
  return (
    <group position={[0, 0, -0.4]}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2.2, 2.42, 72]} />
        <meshBasicMaterial color="#9be8ff" opacity={0.24} transparent />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0.22, 0]}>
        <ringGeometry args={[3.15, 3.32, 72]} />
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
    <group position={node.position}>
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
                points={[node.position, target.position]}
                transparent
              />
            );
          })
      )}
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
    <group position={selectedNode.position}>
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
