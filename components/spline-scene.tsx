"use client";

import Spline from "@splinetool/react-spline/next";
import { useEffect, useState } from "react";

type SplineSceneProps = {
  className?: string;
  localScene: string;
  loadingLabel: string;
};

export function SplineScene({
  className,
  localScene,
  loadingLabel,
}: SplineSceneProps) {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [isSlowLoad, setIsSlowLoad] = useState(false);

  useEffect(() => {
    setHasLoaded(false);
    setIsSlowLoad(false);

    const slowLoadTimer = window.setTimeout(() => {
      setIsSlowLoad(true);
    }, 6000);

    return () => {
      window.clearTimeout(slowLoadTimer);
    };
  }, [localScene]);

  return (
    <div className={className}>
      {!hasLoaded ? (
        <div className="scene-loading" role="status" aria-live="polite">
          <span className="scene-loading__label">{loadingLabel}</span>
          <span className="scene-loading__meta">
            {isSlowLoad
              ? "Scene assets are heavy. Keep this page open while the 3D file finishes loading."
              : "Initializing local scene assets..."}
          </span>
        </div>
      ) : null}

      <Spline scene={localScene} onLoad={() => setHasLoaded(true)} />
    </div>
  );
}
