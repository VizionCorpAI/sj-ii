"use client";

import { useEffect } from "react";
import { MotionConfig } from "framer-motion";
import { PanelOverlay } from "@/features/panels/panel-overlay";
import { SceneHud } from "@/features/hud/scene-hud";
import { CosmicScene } from "@/features/scene/cosmic-scene";
import { useIsMobile } from "@/lib/use-is-mobile";
import { useSceneStore } from "@/lib/scene-store";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";
import styles from "@/styles/portfolio-experience.module.css";

export function PortfolioExperience() {
  const reducedMotion = usePrefersReducedMotion();
  const isMobile = useIsMobile();
  const setReducedMotion = useSceneStore((state) => state.setReducedMotion);
  const setIsMobile = useSceneStore((state) => state.setIsMobile);

  useEffect(() => {
    setReducedMotion(reducedMotion);
  }, [reducedMotion, setReducedMotion]);

  useEffect(() => {
    setIsMobile(isMobile);
  }, [isMobile, setIsMobile]);

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
