"use client";

import { AnimatePresence, motion } from "framer-motion";
import { sceneNodes } from "@/content/portfolio-data";
import { useSceneStore } from "@/lib/scene-store";
import styles from "@/styles/scene-hud.module.css";

export function SceneHud() {
  const introPhase = useSceneStore((state) => state.introPhase);
  const selectedNodeId = useSceneStore((state) => state.selectedNodeId);
  const returnToCore = useSceneStore((state) => state.returnToCore);
  const dismissIntro = useSceneStore((state) => state.dismissIntro);
  const selectNode = useSceneStore((state) => state.selectNode);
  const isMobile = useSceneStore((state) => state.isMobile);
  const focusZone = useSceneStore((state) => state.focusZone);

  const selectedNode = sceneNodes.find((node) => node.id === selectedNodeId) ?? null;
  const navNodes = sceneNodes.filter((node) =>
    ["iam-vizion", "projects", "architecture", "music", "gallery", "collaborate"].includes(
      node.id
    )
  );
  const zoneAnchors = {
    core: sceneNodes.find((node) => node.id === "iam-vizion"),
    left: sceneNodes.find((node) => node.id === "architecture"),
    right: sceneNodes.find((node) => node.id === "music")
  } as const;
  const statusCopy =
    introPhase !== "universe"
      ? "Portal sequence in progress"
      : selectedNode
        ? `Focused on ${selectedNode.label}`
        : focusZone === "all"
          ? "Free orbit across the inner cosmos"
          : `Scanning ${focusZone} hemisphere`;

  return (
    <>
      <AnimatePresence>
        {introPhase !== "universe" ? (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className={styles.introCard}
            exit={{ opacity: 0, y: -16 }}
            initial={{ opacity: 0, y: 18 }}
            transition={{ duration: 0.45 }}
          >
            <span className={styles.eyebrow}>Forehead crystal online</span>
            <h1>Enter the inner cosmos.</h1>
            <p>
              A procedural humanoid opens into a navigable map of systems, art, identity,
              and memory.
            </p>
            <div className={styles.actions}>
              <button onClick={dismissIntro} type="button">
                Skip intro
              </button>
              <span>Auto-sequence will continue in a moment.</span>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className={styles.topBar}>
        <div>
          <span className={styles.eyebrow}>VIZION / INNER COSMOS</span>
          <p>{isMobile ? "drag | pinch | select | return to core" : "drag | zoom | select | return to core"}</p>
          <span className={styles.status}>{statusCopy}</span>
        </div>
        <div className={styles.topMeta}>
          <div className={styles.legend}>
            <span className={styles.core}>Core</span>
            <span className={styles.left}>Engineering</span>
            <span className={styles.right}>Creative</span>
          </div>
          <div className={styles.zoneMap}>
            <button
              className={focusZone === "left" ? styles.zoneMapActiveLeft : undefined}
              onClick={() => zoneAnchors.left && selectNode(zoneAnchors.left.id, "left")}
              type="button"
            >
              Left
            </button>
            <button
              className={focusZone === "core" ? styles.zoneMapActiveCore : undefined}
              onClick={() => zoneAnchors.core && selectNode(zoneAnchors.core.id, "core")}
              type="button"
            >
              Core
            </button>
            <button
              className={focusZone === "right" ? styles.zoneMapActiveRight : undefined}
              onClick={() => zoneAnchors.right && selectNode(zoneAnchors.right.id, "right")}
              type="button"
            >
              Right
            </button>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={styles.bottomActions}>
          <button onClick={returnToCore} type="button">
            Return to Core
          </button>
          <div className={styles.quickNav}>
            {navNodes.map((node) => (
              <button
                className={selectedNodeId === node.id ? styles.quickNavActive : undefined}
                key={node.id}
                onClick={() => selectNode(node.id, node.zone)}
                type="button"
              >
                {node.label}
              </button>
            ))}
          </div>
        </div>
        <div className={styles.selection}>
          <span className={styles.eyebrow}>Selected signal</span>
          <strong>{selectedNode?.label ?? "None"}</strong>
        </div>
      </div>
    </>
  );
}
