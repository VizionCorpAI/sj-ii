"use client";

import { useEffect } from "react";
import { MotionConfig } from "framer-motion";
import { PanelOverlay } from "@/features/panels/panel-overlay";
import { SceneHud } from "@/features/hud/scene-hud";
import { CosmicScene } from "@/features/scene/cosmic-scene";
import { useSceneStore } from "@/lib/scene-store";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";
import styles from "@/styles/portfolio-experience.module.css";

export function PortfolioExperience() {
  const reducedMotion = usePrefersReducedMotion();
  const setReducedMotion = useSceneStore((state) => state.setReducedMotion);

  useEffect(() => {
    setReducedMotion(reducedMotion);
  }, [reducedMotion, setReducedMotion]);

  return (
    <MotionConfig reducedMotion={reducedMotion ? "always" : "never"}>
      <main className={styles.shell}>
        <CosmicScene />
        <SceneHud />
        <PanelOverlay />
      </main>
    </MotionConfig>
  );
}
