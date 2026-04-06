import type { PanelContent, SceneNode } from "@/lib/types";
import { panelContent } from "./portfolio-panels";

export const sceneNodes: SceneNode[] = [
  {
    id: "iam-vizion",
    label: "IAM VIZION",
    zone: "core",
    type: "planet",
    position: [0, 0.1, 0],
    orbitGroup: "core",
    colorKey: "core",
    connections: ["logic-art", "mission", "collaborate"],
    panelKey: "iam-vizion"
  },
  {
    id: "mission",
    label: "Mission",
    zone: "core",
    type: "planet",
    position: [1.4, 0.9, 0.5],
    orbitGroup: "core",
    colorKey: "core",
    connections: ["iam-vizion", "systems-philosophy"],
    panelKey: "mission"
  },
  {
    id: "systems-philosophy",
    label: "System Philosophy",
    zone: "core",
    type: "planet",
    position: [-1.45, 0.88, 0.3],
    orbitGroup: "core",
    colorKey: "core",
    connections: ["iam-vizion", "architecture", "philosophy"],
    panelKey: "systems-philosophy"
  },
  {
    id: "logic-art",
    label: "Logic + Art",
    zone: "core",
    type: "planet",
    position: [0, -1.3, 0.6],
    orbitGroup: "core",
    colorKey: "accent",
    connections: ["architecture", "creative-direction", "iam-vizion"],
    panelKey: "logic-art"
  },
  {
    id: "collaborate",
    label: "Collaborate",
    zone: "core",
    type: "planet",
    position: [0, 1.8, -0.35],
    orbitGroup: "core",
    colorKey: "accent",
    connections: ["iam-vizion", "projects", "gallery"],
    panelKey: "collaborate"
  },
  {
    id: "architecture",
    label: "Architecture",
    zone: "left",
    type: "planet",
    position: [-4.8, 1.2, 0.3],
    orbitGroup: "left",
    colorKey: "left",
    connections: ["cloud-systems", "devops", "logic-art"],
    panelKey: "architecture"
  },
  {
    id: "cloud-systems",
    label: "Cloud Systems",
    zone: "left",
    type: "planet",
    position: [-5.8, 0.25, -0.35],
    orbitGroup: "left",
    colorKey: "left",
    connections: ["architecture", "networking", "observability"],
    panelKey: "cloud-systems"
  },
  {
    id: "devops",
    label: "DevOps",
    zone: "left",
    type: "planet",
    position: [-4.55, -0.95, 0.6],
    orbitGroup: "left",
    colorKey: "left",
    connections: ["architecture", "automation", "projects"],
    panelKey: "devops"
  },
  {
    id: "automation",
    label: "Automation",
    zone: "left",
    type: "planet",
    position: [-6.75, -0.45, 0.2],
    orbitGroup: "left",
    colorKey: "left",
    connections: ["devops", "projects"],
    panelKey: "automation"
  },
  {
    id: "networking",
    label: "Networking",
    zone: "left",
    type: "planet",
    position: [-6.4, 1.45, 0.15],
    orbitGroup: "left",
    colorKey: "left",
    connections: ["cloud-systems", "security"],
    panelKey: "networking"
  },
  {
    id: "security",
    label: "Security",
    zone: "left",
    type: "planet",
    position: [-7.35, 0.65, -0.15],
    orbitGroup: "left",
    colorKey: "left",
    connections: ["networking", "observability"],
    panelKey: "security"
  },
  {
    id: "observability",
    label: "Observability",
    zone: "left",
    type: "planet",
    position: [-5.75, -1.8, 0.25],
    orbitGroup: "left",
    colorKey: "left",
    connections: ["cloud-systems", "devops", "projects"],
    panelKey: "observability"
  },
  {
    id: "projects",
    label: "Projects",
    zone: "left",
    type: "planet",
    position: [-7.25, -1.45, 0.45],
    orbitGroup: "left",
    colorKey: "accent",
    connections: ["observability", "automation", "collaborate"],
    panelKey: "projects"
  },
  {
    id: "experience-archive",
    label: "Experience Archive",
    zone: "left",
    type: "planet",
    position: [-8.15, -0.2, -0.35],
    orbitGroup: "left",
    colorKey: "left",
    connections: ["projects", "architecture"],
    panelKey: "experience-archive"
  },
  {
    id: "music",
    label: "Music",
    zone: "right",
    type: "planet",
    position: [4.85, 1.2, 0.4],
    orbitGroup: "right",
    colorKey: "right",
    connections: ["visual-art", "creative-direction"],
    panelKey: "music"
  },
  {
    id: "visual-art",
    label: "Visual Art",
    zone: "right",
    type: "planet",
    position: [5.8, 0.18, -0.1],
    orbitGroup: "right",
    colorKey: "right",
    connections: ["music", "gallery", "dream-layer"],
    panelKey: "visual-art"
  },
  {
    id: "philosophy",
    label: "Philosophy",
    zone: "right",
    type: "planet",
    position: [4.35, -0.98, 0.58],
    orbitGroup: "right",
    colorKey: "right",
    connections: ["systems-philosophy", "imagination"],
    panelKey: "philosophy"
  },
  {
    id: "creative-direction",
    label: "Creative Direction",
    zone: "right",
    type: "planet",
    position: [6.65, -0.42, 0.12],
    orbitGroup: "right",
    colorKey: "right",
    connections: ["music", "logic-art", "gallery"],
    panelKey: "creative-direction"
  },
  {
    id: "imagination",
    label: "Imagination",
    zone: "right",
    type: "planet",
    position: [6.2, 1.52, 0.15],
    orbitGroup: "right",
    colorKey: "right",
    connections: ["philosophy", "dream-layer"],
    panelKey: "imagination"
  },
  {
    id: "dream-layer",
    label: "Dream Layer",
    zone: "right",
    type: "planet",
    position: [7.25, 0.58, -0.28],
    orbitGroup: "right",
    colorKey: "right",
    connections: ["imagination", "visual-art"],
    panelKey: "dream-layer"
  },
  {
    id: "gallery",
    label: "Gallery",
    zone: "right",
    type: "planet",
    position: [5.7, -1.78, 0.32],
    orbitGroup: "right",
    colorKey: "accent",
    connections: ["visual-art", "creative-direction", "collaborate"],
    panelKey: "gallery"
  }
];

export const panelIndex: Record<string, PanelContent> = panelContent;
