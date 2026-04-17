"use client";

import dynamic from "next/dynamic";
import { Component, type ReactNode, useEffect, useRef, useState } from "react";

const Spline = dynamic(() => import("@/components/spline-runtime"), {
  ssr: false,
  loading: () => null,
});

type SplineSceneProps = {
  className?: string;
  localScene: string;
  loadingLabel: string;
  mobileZoom?: number;
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
          <span className="scene-loading__orb" aria-hidden="true" />
          <span className="scene-sr-only">{this.props.loadingLabel} failed to initialize.</span>
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
  mobileZoom,
}: SplineSceneProps) {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [isSlowLoad, setIsSlowLoad] = useState(false);
  const splineAppRef = useRef<{ setZoom: (zoom: number) => void } | null>(null);

  const applyMobileZoom = () => {
    if (typeof window === "undefined" || !mobileZoom || !splineAppRef.current) {
      return;
    }

    const isMobileViewport = window.matchMedia("(max-width: 700px)").matches;
    splineAppRef.current.setZoom(isMobileViewport ? mobileZoom : 1);
  };

  useEffect(() => {
    setHasLoaded(false);
    setIsSlowLoad(false);
    splineAppRef.current = null;

    const slowLoadTimer = window.setTimeout(() => {
      setIsSlowLoad(true);
    }, 6000);

    return () => {
      window.clearTimeout(slowLoadTimer);
    };
  }, [localScene]);

  useEffect(() => {
    if (!mobileZoom) {
      return;
    }

    const handleResize = () => {
      applyMobileZoom();
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [mobileZoom]);

  return (
    <div className={className}>
      {!hasLoaded ? (
        <div className="scene-loading" role="status" aria-live="polite" aria-label={loadingLabel}>
          <span className="scene-loading__orb" aria-hidden="true" />
          <span className="scene-sr-only">
            {isSlowLoad ? `${loadingLabel} is still loading.` : `${loadingLabel} is loading.`}
          </span>
        </div>
      ) : null}

      <SceneErrorBoundary loadingLabel={loadingLabel}>
        <Spline
          scene={localScene}
          onLoad={(splineApp) => {
            splineAppRef.current = splineApp as { setZoom: (zoom: number) => void };
            applyMobileZoom();
            setHasLoaded(true);
          }}
        />
      </SceneErrorBoundary>
    </div>
  );
}
