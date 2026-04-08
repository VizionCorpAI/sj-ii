"use client";

import Spline from "@splinetool/react-spline/next";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { SceneMenu } from "@/components/scene-menu";

const sentinelScene =
  "/spline/home-sentinel.splinecode";

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
        <Spline scene={sentinelScene} />
      </div>

      <div className="scene-vignette" aria-hidden="true" />
      <div className="face-focus-ring" aria-hidden="true" />

      <section className="hero-copy">
        <p className="eyebrow">Home</p>
        <h1>I AM VIZION</h1>
        <p className="summary">
          The sentinel is the threshold. Single click keeps the scene response.
          Double click the X in the face to enter the mind behind it.
        </p>
      </section>

      <section className="enter-target" aria-label="Entrance instructions">
        <span className="target-kicker">X marks the spot</span>
        <span className="target-title">Double click the X to enter</span>
        <span className="target-copy">
          The first click can trigger the sentinel animation. The second opens
          the About brain scene.
        </span>
      </section>

      <div className="transition-gate" aria-hidden="true">
        <div className="transition-core" />
      </div>
    </main>
  );
}
