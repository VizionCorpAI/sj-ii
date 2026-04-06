import type { ColorKey } from "./types";
import { colorTokens } from "./color-tokens";

export function getColorByKey(colorKey: ColorKey) {
  switch (colorKey) {
    case "core":
      return colorTokens.core;
    case "left":
      return colorTokens.left;
    case "right":
      return colorTokens.right;
    case "accent":
      return colorTokens.accent;
    default:
      return colorTokens.text;
  }
}
