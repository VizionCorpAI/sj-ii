"use client";

import { create } from "zustand";
import type { IntroPhase, SceneState, Zone } from "./types";

interface SceneActions {
  setIntroPhase: (phase: IntroPhase) => void;
  selectNode: (nodeId: string | null, zone?: Zone | "all") => void;
  hoverNode: (nodeId: string | null) => void;
  returnToCore: () => void;
  returnToHome: () => void;
  dismissIntro: () => void;
  setReducedMotion: (value: boolean) => void;
  setIsMobile: (value: boolean) => void;
}

type SceneStore = SceneState & SceneActions;

const hasWindow = typeof window !== "undefined";
const seenIntro = hasWindow
  ? window.localStorage.getItem("vizion-intro-dismissed") === "true"
  : false;

export const useSceneStore = create<SceneStore>((set) => ({
  introPhase: seenIntro ? "universe" : "boot",
  selectedNodeId: null,
  hoveredNodeId: null,
  cameraMode: seenIntro ? "orbit" : "scripted",
  focusZone: "all",
  introDismissed: seenIntro,
  reducedMotion: false,
  isMobile: false,
  setIntroPhase: (phase) =>
    set((state) => ({
      introPhase: phase,
      cameraMode: phase === "universe" || state.introDismissed ? "orbit" : "scripted"
    })),
  selectNode: (nodeId, zone = "all") =>
    set({
      selectedNodeId: nodeId,
      focusZone: zone
    }),
  hoverNode: (nodeId) => set({ hoveredNodeId: nodeId }),
  returnToCore: () =>
    set({
      selectedNodeId: null,
      focusZone: "core"
    }),
  returnToHome: () =>
    set((state) => ({
      selectedNodeId: null,
      hoveredNodeId: null,
      focusZone: "all",
      introPhase: "humanoid",
      cameraMode: "scripted",
      introDismissed: state.introDismissed
    })),
  dismissIntro: () => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("vizion-intro-dismissed", "true");
    }

    set({
      introDismissed: true,
      introPhase: "universe",
      cameraMode: "orbit"
    });
  },
  setReducedMotion: (value) => set({ reducedMotion: value }),
  setIsMobile: (value) => set({ isMobile: value })
}));
