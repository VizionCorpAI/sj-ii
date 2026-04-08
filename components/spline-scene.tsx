"use client";

import Spline from "@splinetool/react-spline/next";
import { useEffect, useState } from "react";

type SplineSceneProps = {
  className?: string;
  localScene: string;
  remoteScene: string;
  loadingLabel: string;
};

export function SplineScene({
  className,
  localScene,
  remoteScene,
  loadingLabel,
}: SplineSceneProps) {
  const [activeScene, setActiveScene] = useState(localScene);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [isFallback, setIsFallback] = useState(false);

  useEffect(() => {
    setActiveScene(localScene);
    setHasLoaded(false);
    setIsFallback(false);

    const fallbackTimer = window.setTimeout(() => {
      setActiveScene((currentScene) => {
        if (currentScene === remoteScene) {
          return currentScene;
        }

        setIsFallback(true);
        return remoteScene;
      });
    }, 6000);

    return () => {
      window.clearTimeout(fallbackTimer);
    };
  }, [localScene, remoteScene]);

  return (
    <div className={className}>
      {!hasLoaded ? (
        <div className="scene-loading" role="status" aria-live="polite">
          <span className="scene-loading__label">{loadingLabel}</span>
          <span className="scene-loading__meta">
            {isFallback
              ? "Switching to hosted scene delivery..."
              : "Initializing local scene assets..."}
          </span>
        </div>
      ) : null}

      <Spline scene={activeScene} onLoad={() => setHasLoaded(true)} />
    </div>
  );
}
