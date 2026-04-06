"use client";

import {
  DataTexture,
  LinearMipMapLinearFilter,
  RepeatWrapping,
  RGBAFormat,
  SRGBColorSpace,
  UnsignedByteType
} from "three";

type TextureKind =
  | "humanoid-metal"
  | "gold-metal"
  | "engineered-world"
  | "organic-world"
  | "rocky-asteroid"
  | "core-crystal";

type TextureSet = {
  bump: DataTexture;
  map: DataTexture;
};

const cache = new Map<TextureKind, TextureSet>();

export function getProceduralTextureSet(kind: TextureKind): TextureSet {
  const cached = cache.get(kind);
  if (cached) {
    return cached;
  }

  const created = {
    map: createColorTexture(kind),
    bump: createBumpTexture(kind)
  };

  cache.set(kind, created);
  return created;
}

function createColorTexture(kind: TextureKind) {
  const size = 128;
  const data = new Uint8Array(size * size * 4);

  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      const index = (y * size + x) * 4;
      const u = x / (size - 1);
      const v = y / (size - 1);
      const noise = layeredNoise(u, v, kind);
      const band = Math.sin((u * 11 + v * 7 + noise * 4) * Math.PI);
      const crater = Math.max(0, Math.sin((u * 23 - v * 17 + noise * 3) * Math.PI));

      const [r, g, b] = samplePalette(kind, noise, band, crater);

      data[index] = r;
      data[index + 1] = g;
      data[index + 2] = b;
      data[index + 3] = 255;
    }
  }

  return finalizeTexture(data, size);
}

function createBumpTexture(kind: TextureKind) {
  const size = 128;
  const data = new Uint8Array(size * size * 4);

  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      const index = (y * size + x) * 4;
      const u = x / (size - 1);
      const v = y / (size - 1);
      const noise = layeredNoise(u, v, kind);
      const ridge = Math.abs(Math.sin((u * 16 + v * 12 + noise * 2) * Math.PI));
      const pits = Math.abs(Math.cos((u * 29 - v * 19 + noise * 5) * Math.PI));
      const value = Math.floor(Math.min(255, (noise * 0.55 + ridge * 0.28 + pits * 0.17) * 255));

      data[index] = value;
      data[index + 1] = value;
      data[index + 2] = value;
      data[index + 3] = 255;
    }
  }

  return finalizeTexture(data, size);
}

function finalizeTexture(data: Uint8Array, size: number) {
  const texture = new DataTexture(data, size, size, RGBAFormat, UnsignedByteType);
  texture.colorSpace = SRGBColorSpace;
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.generateMipmaps = true;
  texture.minFilter = LinearMipMapLinearFilter;
  texture.needsUpdate = true;
  return texture;
}

function samplePalette(kind: TextureKind, noise: number, band: number, crater: number) {
  const t = clamp01(noise * 0.72 + band * 0.18 + crater * 0.1);

  switch (kind) {
    case "humanoid-metal":
      return lerpColor([88, 20, 35], [165, 44, 61], t);
    case "gold-metal":
      return lerpColor([116, 76, 18], [226, 190, 103], t);
    case "engineered-world":
      return lerpColor([12, 26, 46], [76, 104, 142], t);
    case "organic-world":
      return lerpColor([116, 48, 37], [245, 152, 98], t);
    case "rocky-asteroid":
      return lerpColor([74, 78, 86], [156, 145, 132], t);
    case "core-crystal":
      return lerpColor([115, 216, 255], [240, 252, 255], t);
    default:
      return [255, 255, 255] as const;
  }
}

function layeredNoise(u: number, v: number, seed: string) {
  const n1 = hashNoise(u * 7.3, v * 7.9, `${seed}-a`);
  const n2 = hashNoise(u * 15.7, v * 14.9, `${seed}-b`);
  const n3 = hashNoise(u * 29.1, v * 27.4, `${seed}-c`);
  return clamp01(n1 * 0.52 + n2 * 0.31 + n3 * 0.17);
}

function hashNoise(x: number, y: number, seed: string) {
  const seedValue = Array.from(seed).reduce((sum, char) => sum + char.charCodeAt(0), 0);
  const value = Math.sin(x * 127.1 + y * 311.7 + seedValue * 0.37) * 43758.5453;
  return value - Math.floor(value);
}

function lerpColor(
  from: readonly [number, number, number],
  to: readonly [number, number, number],
  t: number
) {
  return [
    Math.floor(from[0] + (to[0] - from[0]) * t),
    Math.floor(from[1] + (to[1] - from[1]) * t),
    Math.floor(from[2] + (to[2] - from[2]) * t)
  ] as const;
}

function clamp01(value: number) {
  return Math.max(0, Math.min(1, value));
}
