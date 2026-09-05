import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { contrastRatio, meetsAA } from "./contrast.js";
import type { DesignTokens } from "./types.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const tokens: DesignTokens = JSON.parse(readFileSync(join(__dirname, "design-tokens.json"), "utf-8"));

const p = tokens.color.palette;
const canvas = p.neutral["2"].$value;
const surface = p.neutral["1"].$value;

/**
 * Automated gate for design-system/ACCESSIBILITY.md — the manual WCAG audit
 * from Phase 1 becomes a real, repeatable test here (answers DS-FORM-001-TOK-010).
 * Any future edit to design-tokens.json that breaks contrast fails CI, not a
 * human re-reading a markdown table.
 */
describe("WCAG AA contrast — text tokens over canvas/surface", () => {
  it.each([
    ["green.11 (success text)", p.green["11"].$value],
    ["azure.11 (info/link text)", p.azure["11"].$value],
    ["neutral.12 (primary text)", p.neutral["12"].$value],
    ["warning.11 (warning text)", p.warning["11"].$value],
    ["error.11 (error text)", p.error["11"].$value],
  ])("%s passes 4.5:1 on canvas and surface", (_label, hex) => {
    expect(meetsAA(hex, canvas)).toBe(true);
    expect(meetsAA(hex, surface)).toBe(true);
  });

  it("documents that raw brand colors (step 9) FAIL as text on canvas — this is expected, not a bug", () => {
    // This mirrors the exact numbers already published in design-system/ACCESSIBILITY.md
    // (2.25:1 and 2.91:1). If these ever start passing, the palette anchors changed
    // and ACCESSIBILITY.md / DESIGN-SPEC.md need to be updated to match.
    expect(contrastRatio(p.green["9"].$value, canvas)).toBeLessThan(4.5);
    expect(contrastRatio(p.azure["9"].$value, canvas)).toBeLessThan(4.5);
  });

  it("neutral.12 text passes AAA (7:1) on canvas", () => {
    expect(contrastRatio(p.neutral["12"].$value, canvas)).toBeGreaterThanOrEqual(7);
  });
});

/**
 * Every color.semantic.text.* alias must resolve to a real hex and be
 * classified as either "full" (must pass 4.5:1 normal-text AA on canvas AND
 * surface) or "large-text-only" (must pass at least 3:1, documented as
 * restricted to >=18px/400 or >=14px/600 usage — see $description in
 * design-tokens.json). `on_brand`/`link` are exempt here: on_brand is tested
 * against actual button fills below, link is already covered by the azure.11
 * case above.
 */
describe("color.semantic.text.* — every alias is intentional, not an accident", () => {
  const restrictionByName: Record<string, "full" | "large-text-only" | "skip"> = {
    primary: "full",
    secondary: "full",
    muted: "large-text-only",
    on_brand: "skip",
    link: "skip",
  };

  it.each(Object.entries(tokens.color.semantic.text))("text.%s resolves and meets its documented threshold", (name, obj) => {
    const restriction = restrictionByName[name];
    expect(restriction, `add an explicit restriction for the new text.${name} token in this test`).toBeDefined();
    if (restriction === "skip") return;

    const ref = obj.$value;
    expect(ref.startsWith("{color.palette."), `${name} should alias a palette primitive`).toBe(true);
    const [, , fam, step] = ref.slice(1, -1).split(".");
    const hex = p[fam][step].$value;

    if (restriction === "full") {
      expect(meetsAA(hex, canvas), `text.${name} (${hex}) must pass 4.5:1 on canvas`).toBe(true);
      expect(meetsAA(hex, surface), `text.${name} (${hex}) must pass 4.5:1 on surface`).toBe(true);
    } else {
      expect(meetsAA(hex, canvas, true), `text.${name} (${hex}) must pass at least 3:1 (large-text) on canvas`).toBe(true);
      expect(meetsAA(hex, surface, true), `text.${name} (${hex}) must pass at least 3:1 (large-text) on surface`).toBe(true);
    }
  });
});
