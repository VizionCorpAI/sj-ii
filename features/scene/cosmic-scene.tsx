"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { AdaptiveDpr, OrbitControls, Stars } from "@react-three/drei";
import { SceneStage } from "./scene-stage";
import { useSceneStore } from "@/lib/scene-store";
import styles from "@/styles/cosmic-scene.module.css";

export function CosmicScene() {
  const cameraMode = useSceneStore((state) => state.cameraMode);

  return (
    <div className={styles.canvasWrap}>
      <Canvas
        camera={{ fov: 42, near: 0.1, far: 100, position: [0, 0, 11] }}
        dpr={[1, 1.75]}
      >
        <color attach="background" args={["#030712"]} />
        <fog attach="fog" args={["#030712", 14, 34]} />
        <Suspense fallback={null}>
          <AdaptiveDpr pixelated />
          <Stars
            count={1600}
            depth={50}
            fade
            factor={3}
            radius={48}
            saturation={0}
            speed={0.65}
          />
          <SceneStage />
          <OrbitControls
            enabled={cameraMode === "orbit"}
            enableDamping
            dampingFactor={0.08}
            enablePan={false}
            maxDistance={18}
            maxPolarAngle={Math.PI * 0.72}
            minDistance={6}
            minPolarAngle={Math.PI * 0.28}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
