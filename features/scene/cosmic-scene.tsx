"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { AdaptiveDpr, OrbitControls, Stars } from "@react-three/drei";
import { SceneStage } from "./scene-stage";
import { useSceneStore } from "@/lib/scene-store";
import styles from "@/styles/cosmic-scene.module.css";

export function CosmicScene() {
  const cameraMode = useSceneStore((state) => state.cameraMode);
  const isMobile = useSceneStore((state) => state.isMobile);
  const reducedMotion = useSceneStore((state) => state.reducedMotion);

  return (
    <div className={styles.canvasWrap}>
      <Canvas
        camera={{ fov: 52, near: 0.1, far: 140, position: [0, 0.3, 15.5] }}
        dpr={[1, 1.75]}
      >
        <color attach="background" args={["#030712"]} />
        <fog attach="fog" args={["#030712", 14, 34]} />
        <Suspense fallback={null}>
          <AdaptiveDpr pixelated />
          <Stars
            count={isMobile || reducedMotion ? 900 : 1600}
            depth={50}
            fade
            factor={isMobile ? 2.1 : 3}
            radius={48}
            saturation={0}
            speed={reducedMotion ? 0.2 : 0.65}
          />
          <SceneStage />
          <OrbitControls
            enabled={cameraMode === "orbit"}
            enableDamping
            dampingFactor={0.08}
            enablePan={false}
            maxDistance={32}
            maxPolarAngle={Math.PI * 0.72}
            minDistance={10}
            minPolarAngle={Math.PI * 0.28}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
