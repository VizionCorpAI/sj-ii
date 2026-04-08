"use client";

import dynamic from "next/dynamic";
import { Component, type ReactNode, useEffect, useState } from "react";

const Spline = dynamic(() => import("@/components/spline-runtime"), {
  ssr: false,
  loading: () => null,
});

type SplineSceneProps = {
  className?: string;
  localScene: string;
  loadingLabel: string;
};

type SceneBoundaryProps = {
  children: ReactNode;
  loadingLabel: string;
};

type SceneBoundaryState = {
  hasError: boolean;
};

class SceneErrorBoundary extends Component<
  SceneBoundaryProps,
  SceneBoundaryState
> {
  state: SceneBoundaryState = {
    hasError: false,
  };

  static getDerivedStateFromError(): SceneBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error("Spline scene failed to render", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="scene-loading scene-loading--error" role="alert">
          <span className="scene-loading__label">{this.props.loadingLabel}</span>
          <span className="scene-loading__meta">
            The 3D scene failed to initialize. Use the top-right menu to keep
            navigating while the scene asset is checked.
          </span>
        </div>
      );
    }

    return this.props.children;
  }
}

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

      <SceneErrorBoundary loadingLabel={loadingLabel}>
        <Spline scene={localScene} onLoad={() => setHasLoaded(true)} />
      </SceneErrorBoundary>
    </div>
  );
}
