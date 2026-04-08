"use client";

import Spline from "@splinetool/react-spline/next";
import { useSceneStore } from "@/lib/scene-store";
import styles from "@/styles/spline-home.module.css";

const SENTINEL_SCENE = "https://prod.spline.design/nBcxZMDF-GCtzXY6/scene.splinecode";

export function SplineHome() {
  const introPhase = useSceneStore((state) => state.introPhase);

  if (introPhase === "universe") {
    return null;
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.spaceGlow} />
      <div className={styles.viewport}>
        <div className={styles.scaleStage}>
          <Spline scene={SENTINEL_SCENE} />
        </div>
      </div>
    </div>
  );
}
