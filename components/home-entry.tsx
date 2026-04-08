"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { SceneMenu } from "@/components/scene-menu";
import { SplineScene } from "@/components/spline-scene";

const sentinelScene = "/spline/home-sentinel.splinecode";

export function HomeEntry() {
  const router = useRouter();
  const [isEntering, setIsEntering] = useState(false);
  const sceneRef = useRef<HTMLDivElement | null>(null);

  const enterSite = () => {
    if (isEntering) {
      return;
    }

    setIsEntering(true);

    window.setTimeout(() => {
      router.push("/about");
    }, 900);
  };

  useEffect(() => {
    const sceneElement = sceneRef.current;

    if (!sceneElement) {
      return;
    }

    const handleDoubleClick = () => {
      enterSite();
    };

    sceneElement.addEventListener("dblclick", handleDoubleClick);

    return () => {
      sceneElement.removeEventListener("dblclick", handleDoubleClick);
    };
  }, [isEntering]);

  return (
    <main className={`home-shell${isEntering ? " is-entering" : ""}`}>
      <SceneMenu current="home" />

      <div ref={sceneRef} className="scene-layer" aria-hidden="true">
        <SplineScene localScene={sentinelScene} loadingLabel="Loading sentinel portal" />
      </div>

      <div className="scene-vignette" aria-hidden="true" />

      <section className="hero-copy">
        <h1>SAHR JOHN II</h1>
        <p className="summary">
          The sentinel is the threshold. Single click keeps the scene response.
          Double click the X in the face to enter the mind behind it.
        </p>
      </section>

      <div className="transition-gate" aria-hidden="true">
        <div className="transition-core" />
      </div>
    </main>
  );
}
