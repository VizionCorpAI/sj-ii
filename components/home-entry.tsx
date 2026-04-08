"use client";

import Spline from "@splinetool/react-spline/next";
import { useRouter } from "next/navigation";
import { useState } from "react";

const sentinelScene =
  "https://prod.spline.design/nBcxZMDF-GCtzXY6/scene.splinecode";

export function HomeEntry() {
  const router = useRouter();
  const [isEntering, setIsEntering] = useState(false);

  const enterSite = () => {
    if (isEntering) {
      return;
    }

    setIsEntering(true);

    window.setTimeout(() => {
      router.push("/about");
    }, 900);
  };

  return (
    <main className={`home-shell${isEntering ? " is-entering" : ""}`}>
      <div className="scene-layer" aria-hidden="true">
        <Spline scene={sentinelScene} />
      </div>

      <div className="scene-vignette" aria-hidden="true" />
      <div className="face-focus-ring" aria-hidden="true" />

      <section className="hero-copy">
        <p className="eyebrow">Home</p>
        <h1>I AM VIZION</h1>
        <p className="summary">
          The sentinel is the threshold. The X in the face is the mark that
          opens the mind behind it.
        </p>
      </section>

      <button
        type="button"
        className="enter-target"
        onClick={enterSite}
        aria-label="Enter the site through the X on the sentinel face"
      >
        <span className="target-kicker">X marks the spot</span>
        <span className="target-title">Click the X to enter</span>
        <span className="target-copy">
          Pass through the sentinel face and enter the brain-space archive.
        </span>
      </button>

      <div className="transition-gate" aria-hidden="true">
        <div className="transition-core" />
      </div>
    </main>
  );
}
