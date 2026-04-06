import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import {
  BoxGeometry,
  CapsuleGeometry,
  Color,
  Group,
  IcosahedronGeometry,
  Matrix4,
  Mesh,
  MeshPhysicalMaterial,
  MeshStandardMaterial,
  OctahedronGeometry,
  Scene,
  SphereGeometry,
  TorusGeometry
} from "three";
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter.js";

const outputPath = resolve(process.cwd(), "public/models/sentinel.glb");

if (typeof globalThis.FileReader === "undefined") {
  globalThis.FileReader = class FileReader {
    constructor() {
      this.onloadend = null;
      this.result = null;
    }

    async readAsArrayBuffer(blob) {
      this.result = await blob.arrayBuffer();
      this.onloadend?.();
    }

    async readAsDataURL(blob) {
      const buffer = Buffer.from(await blob.arrayBuffer());
      this.result = `data:${blob.type || "application/octet-stream"};base64,${buffer.toString("base64")}`;
      this.onloadend?.();
    }
  };
}

async function main() {
  const scene = new Scene();
  const root = new Group();
  root.name = "SentinelRoot";
  scene.add(root);

  const crimsonMetal = new MeshStandardMaterial({
    color: new Color("#8e2034"),
    emissive: new Color("#3d0a16"),
    emissiveIntensity: 0.28,
    metalness: 0.82,
    roughness: 0.2
  });

  const darkCrimson = new MeshStandardMaterial({
    color: new Color("#651628"),
    emissive: new Color("#25060f"),
    emissiveIntensity: 0.2,
    metalness: 0.8,
    roughness: 0.24
  });

  const goldMetal = new MeshStandardMaterial({
    color: new Color("#c59445"),
    emissive: new Color("#5f3910"),
    emissiveIntensity: 0.18,
    metalness: 0.92,
    roughness: 0.14
  });

  const crystalMaterial = new MeshPhysicalMaterial({
    color: new Color("#ffd46c"),
    emissive: new Color("#ffcf5d"),
    emissiveIntensity: 1.4,
    metalness: 0,
    roughness: 0.04,
    transmission: 0.95,
    thickness: 1,
    ior: 1.2,
    clearcoat: 1
  });

  const softLight = new MeshPhysicalMaterial({
    color: new Color("#fff0c0"),
    emissive: new Color("#ffe3a1"),
    emissiveIntensity: 0.2,
    metalness: 0.04,
    roughness: 0.12,
    transparent: true,
    opacity: 0.78
  });

  addMesh(root, new IcosahedronGeometry(1, 3), crimsonMetal, {
    position: [0, -0.44, -0.12],
    rotation: [0.08, 0, 0],
    scale: [2.85, 1.38, 1.52]
  });
  addMesh(root, new CapsuleGeometry(0.72, 1.72, 14, 28), crimsonMetal, {
    position: [0, 0.82, 0.02],
    rotation: [0.14, 0, 0],
    scale: [1.28, 0.9, 0.6]
  });
  addMesh(root, new SphereGeometry(1, 28, 28), goldMetal, {
    position: [0, 0.48, 0.52],
    rotation: [0.54, 0, 0],
    scale: [0.92, 0.38, 0.2]
  });
  addMesh(root, new CapsuleGeometry(0.48, 1.56, 12, 20), darkCrimson, {
    position: [-1.62, 0.86, -0.12],
    rotation: [0.2, 0.08, -0.88],
    scale: [0.66, 1.32, 0.74]
  });
  addMesh(root, new CapsuleGeometry(0.48, 1.56, 12, 20), darkCrimson, {
    position: [1.62, 0.86, -0.12],
    rotation: [0.2, -0.08, 0.88],
    scale: [0.66, 1.32, 0.74]
  });
  addMesh(root, new BoxGeometry(1, 1, 1), goldMetal, {
    position: [-1.02, 0.08, -0.02],
    rotation: [0.24, 0.12, -0.18],
    scale: [0.34, 1.28, 0.34]
  });
  addMesh(root, new BoxGeometry(1, 1, 1), goldMetal, {
    position: [1.02, 0.08, -0.02],
    rotation: [0.24, -0.12, 0.18],
    scale: [0.34, 1.28, 0.34]
  });

  addMesh(root, new IcosahedronGeometry(0.92, 3), crimsonMetal, {
    position: [0, 2.58, -0.04],
    rotation: [0.04, 0, 0],
    scale: [0.9, 1.18, 0.82]
  });
  addMesh(root, new OctahedronGeometry(0.88, 2), crimsonMetal, {
    position: [0, 2.58, 0.02],
    rotation: [0.08, 0, 0],
    scale: [1.08, 1.24, 0.72]
  });
  addMesh(root, new CylinderBoxGeometry(), goldMetal, {
    position: [0, 2.18, 0.18],
    rotation: [0.3, 0, 0],
    scale: [0.66, 0.4, 0.3]
  });
  addMesh(root, new BoxGeometry(1, 1, 1), darkCrimson, {
    position: [0, 2.46, 0.54],
    rotation: [0.22, 0, 0],
    scale: [0.34, 0.9, 0.24]
  });
  addMesh(root, new BoxGeometry(1, 1, 1), goldMetal, {
    position: [0, 2.72, 0.56],
    rotation: [0.18, 0, 0],
    scale: [0.82, 0.18, 0.16]
  });
  addMesh(root, new BoxGeometry(1.16, 1, 1), softLight, {
    position: [0, 2.26, 0.7],
    rotation: [0.4, 0, 0],
    scale: [0.52, 0.16, 0.08]
  });
  addMesh(root, new BoxGeometry(1.28, 1, 1), goldMetal, {
    position: [0, 2.02, 0.68],
    rotation: [0.36, 0, 0],
    scale: [0.34, 0.18, 0.06]
  });

  addMesh(root, new BoxGeometry(1, 1, 1), goldMetal, {
    position: [-0.34, 2.38, 0.48],
    rotation: [0.18, -0.14, -0.18],
    scale: [0.16, 0.46, 0.16]
  });
  addMesh(root, new BoxGeometry(1, 1, 1), goldMetal, {
    position: [0.34, 2.38, 0.48],
    rotation: [0.18, 0.14, 0.18],
    scale: [0.16, 0.46, 0.16]
  });
  addMesh(root, new BoxGeometry(1, 1, 1), darkCrimson, {
    position: [-0.42, 2.84, 0.24],
    rotation: [0.16, -0.1, -0.36],
    scale: [0.24, 0.5, 0.18]
  });
  addMesh(root, new BoxGeometry(1, 1, 1), darkCrimson, {
    position: [0.42, 2.84, 0.24],
    rotation: [0.16, 0.1, 0.36],
    scale: [0.24, 0.5, 0.18]
  });
  addMesh(root, new BoxGeometry(1, 1, 1), goldMetal, {
    position: [0, 2.92, 0.48],
    rotation: [0.2, 0, 0],
    scale: [0.24, 0.68, 0.14]
  });
  addMesh(root, new BoxGeometry(1.18, 1, 1), goldMetal, {
    position: [0, 3.06, 0.34],
    rotation: [0.16, 0, 0],
    scale: [0.34, 0.18, 0.08]
  });
  addMesh(root, new BoxGeometry(1, 1, 1), softLight, {
    position: [-0.26, 2.84, 0.72],
    rotation: [0.3, 0.18, -0.2],
    scale: [0.08, 0.18, 0.08]
  });
  addMesh(root, new BoxGeometry(1, 1, 1), softLight, {
    position: [0.26, 2.84, 0.72],
    rotation: [0.3, -0.18, 0.2],
    scale: [0.08, 0.18, 0.08]
  });

  const crystal = addMesh(root, new OctahedronGeometry(0.24, 0), crystalMaterial, {
    name: "MindCrystal",
    position: [0, 3.08, 0.94],
    rotation: [0.08, 0.24, 0.18]
  });
  addMesh(root, new OctahedronGeometry(0.26, 0), softLight, {
    position: [0, 3.08, 0.94],
    rotation: [0.08, 0.24, 0.18],
    scale: [1.44, 1.44, 1.44]
  });

  addMesh(root, new SphereGeometry(1, 20, 20), darkCrimson, {
    position: [0, 3.34, -0.02],
    rotation: [0.06, 0, 0],
    scale: [0.58, 0.3, 0.5]
  });
  addMesh(root, new BoxGeometry(1, 1, 1), darkCrimson, {
    position: [-0.62, 2.74, 0.42],
    rotation: [0.2, -0.18, -0.32],
    scale: [0.26, 0.7, 0.16]
  });
  addMesh(root, new BoxGeometry(1, 1, 1), darkCrimson, {
    position: [0.62, 2.74, 0.42],
    rotation: [0.2, 0.18, 0.32],
    scale: [0.26, 0.7, 0.16]
  });
  addMesh(root, new BoxGeometry(1, 1, 1), goldMetal, {
    position: [-0.44, 2.42, 0.82],
    rotation: [0.3, -0.16, -0.18],
    scale: [0.18, 0.44, 0.12]
  });
  addMesh(root, new BoxGeometry(1, 1, 1), goldMetal, {
    position: [0.44, 2.42, 0.82],
    rotation: [0.3, 0.16, 0.18],
    scale: [0.18, 0.44, 0.12]
  });

  addMesh(root, new CylinderBoxGeometry(), goldMetal, {
    position: [0, 1.58, -0.18],
    rotation: [0.04, 0, 0],
    scale: [1.36, 0.32, 0.66]
  });
  addMesh(root, new OctahedronGeometry(0.74, 1), darkCrimson, {
    position: [-1.36, 1.34, -0.2],
    rotation: [0.14, 0.1, -0.88],
    scale: [0.92, 0.64, 0.78]
  });
  addMesh(root, new OctahedronGeometry(0.74, 1), darkCrimson, {
    position: [1.36, 1.34, -0.2],
    rotation: [0.14, -0.1, 0.88],
    scale: [0.92, 0.64, 0.78]
  });

  addMesh(root, new CapsuleGeometry(1, 1, 10, 16), softLight, {
    position: [0, 1.42, 0.16],
    rotation: [0.12, 0, 0],
    scale: [0.08, 4.35, 0.08]
  });
  addMesh(root, new CapsuleGeometry(1, 1, 8, 14), softLight.clone(), {
    position: [-0.58, 1.3, 0.22],
    rotation: [0.18, 0.04, -0.54],
    scale: [0.07, 2.5, 0.07]
  });
  addMesh(root, new CapsuleGeometry(1, 1, 8, 14), softLight.clone(), {
    position: [0.58, 1.28, 0.18],
    rotation: [0.16, -0.04, 0.52],
    scale: [0.07, 2.55, 0.07]
  });

  crystal.updateWorldMatrix(true, false);
  root.updateMatrixWorld(true);

  const exporter = new GLTFExporter();
  const glb = await exporter.parseAsync(scene, {
    binary: true,
    onlyVisible: false
  });

  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, Buffer.from(glb));
  console.log(`Wrote ${outputPath}`);
}

function addMesh(parent, geometry, material, config) {
  const mesh = new Mesh(geometry, material);
  if (config.name) {
    mesh.name = config.name;
  }
  if (config.position) {
    mesh.position.set(...config.position);
  }
  if (config.rotation) {
    mesh.rotation.set(...config.rotation);
  }
  if (config.scale) {
    mesh.scale.set(...config.scale);
  }
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  mesh.updateMatrixWorld();
  parent.add(mesh);
  return mesh;
}

function CylinderBoxGeometry() {
  const geometry = new BoxGeometry(1, 1, 1);
  const matrix = new Matrix4().makeRotationX(Math.PI / 4);
  geometry.applyMatrix4(matrix);
  return geometry;
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
