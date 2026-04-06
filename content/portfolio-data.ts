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
    position: [-4.35, 2.35, -0.2],
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
    position: [-5.85, 1.35, -0.9],
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
    position: [-4.9, 0.2, 0.9],
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
    position: [-6.45, 0.1, 0.55],
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
    position: [-7.05, 1.85, -0.15],
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
    position: [-7.75, 0.95, -0.6],
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
    position: [-5.9, -1.15, 0.45],
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
    position: [-7.4, -1.95, 0.7],
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
    position: [-8.8, -0.75, -1.1],
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
    position: [4.2, 2.15, 0.38],
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
    position: [5.45, 1.15, -0.35],
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
    position: [4.7, -0.2, 0.95],
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
    position: [6.5, 0.45, 0.15],
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
    position: [6.65, 1.95, -0.05],
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
    position: [7.75, 0.85, -0.95],
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
    position: [5.95, -1.95, 0.55],
    orbitGroup: "right",
    colorKey: "accent",
    connections: ["visual-art", "creative-direction", "collaborate"],
    panelKey: "gallery"
  }
];

export const panelIndex: Record<string, PanelContent> = panelContent;
