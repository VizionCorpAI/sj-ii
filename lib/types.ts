export type Zone = "core" | "left" | "right";

export type NodeType = "planet" | "star" | "cluster" | "shard";

export type ColorKey = "core" | "left" | "right" | "accent";

export type Vector3Tuple = [number, number, number];

export interface SceneNode {
  id: string;
  label: string;
  zone: Zone;
  type: NodeType;
  position: Vector3Tuple;
  orbitGroup: string;
  colorKey: ColorKey;
  connections: string[];
  panelKey: string;
}

export interface PanelSection {
  heading: string;
  body: string;
}

export interface PanelDatum {
  label: string;
  value: string;
}

export interface PanelLink {
  label: string;
  href: string;
}

export interface PanelCta {
  label: string;
  description: string;
}

export interface PanelContent {
  title: string;
  summary: string;
  sections: PanelSection[];
  media?: PanelDatum[];
  links?: PanelLink[];
  cta: PanelCta;
}

export type IntroPhase = "boot" | "humanoid" | "portal" | "universe";

export type CameraMode = "scripted" | "orbit";

export interface SceneState {
  introPhase: IntroPhase;
  selectedNodeId: string | null;
  hoveredNodeId: string | null;
  cameraMode: CameraMode;
  focusZone: Zone | "all";
  introDismissed: boolean;
  reducedMotion: boolean;
  isMobile: boolean;
}
