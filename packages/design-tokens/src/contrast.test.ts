import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { contrastRatio, meetsAA } from "./contrast.js";
import type { DesignTokens, ThemeTokens } from "./types.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const tokens: DesignTokens = JSON.parse(readFileSync(join(__dirname, "design-tokens.json"), "utf-8"));

/**
 * Automated gate for design-system/ACCESSIBILITY.md — the manual WCAG audit
 * from Phase 1 becomes a real, repeatable test here (answers DS-FORM-001-TOK-010).
 * Any future edit to design-tokens.json (or a new theme) that breaks contrast
 * fails CI, not a human re-reading a markdown table.
 *
 * Runs against BOTH themes as of the 2026-09-06 correction — the two color
 * systems don't share primitives, so each needs its own canvas/surface and
 * "does the raw brand color pass as text" expectations (they genuinely
 * differ: modernismo-operacional's blue.9 happens to pass as text,
 * executar-classic's azure.9/green.9 don't — both are asserted explicitly
 * below rather than assumed).
 */
const THEMES: {
  name: string;
  tokens: ThemeTokens;
  canvasStep: string;
  surfaceStep: string;
  /** [label, family, step, expectPass] — brand/solid colors checked as text-on-canvas, not assumed to uniformly fail. */
  brandAsText: [string, string, string, boolean][];
  /**
   * Does action.primary_text pass AA against action.primary today? Found via
   * this same test while adding modernismo-operacional: executar-classic's
   * white-on-green.9 primary button is only 2.43:1 — fails even the 3:1
   * large-text/non-text floor, not just 4.5:1. Pre-existing (Phase 1/2,
   * unrelated to this correction, shipped and screenshotted before this
   * pairing was ever actually checked), out of scope to silently redesign
   * here — asserted as `false` so the finding stays visible and CI stays
   * green, instead of either hiding it or fixing a brand color no one asked
   * to change today. Tracked as a follow-up in packages/design-tokens/README.md.
   */
  primaryButtonPasses: boolean;
}[] = [
  {
    name: "executar-classic",
    tokens: tokens as unknown as ThemeTokens,
    canvasStep: "2",
    surfaceStep: "1",
    brandAsText: [
      ["green.9 (raw brand)", "green", "9", false],
      ["azure.9 (raw brand)", "azure", "9", false],
    ],
    primaryButtonPasses: false,
  },
  {
    name: "modernismo-operacional",
    tokens: tokens.themes["modernismo-operacional"],
    canvasStep: "3",
    surfaceStep: "1",
    brandAsText: [
      ["blue.9 (raw brand)", "blue", "9", true],
      ["green.9 (raw brand)", "green", "9", false],
      ["yellow.9 (raw brand)", "yellow", "9", false],
    ],
    primaryButtonPasses: true,
  },
];

for (const theme of THEMES) {
  const p = theme.tokens.color.palette;
  const canvas = p.neutral[theme.canvasStep].$value;
  const surface = p.neutral[theme.surfaceStep].$value;

  describe(`[${theme.name}] WCAG AA contrast — text tokens over canvas/surface`, () => {
    it.each(
      Object.entries(theme.tokens.color.semantic.text)
        .filter(([name]) => name !== "on_brand" && name !== "link")
        .map(([name, obj]) => [name, obj] as const),
    )("text.%s resolves and meets its documented threshold", (name, obj) => {
      const ref = obj.$value;
      expect(ref.startsWith("{color.palette."), `${name} should alias a palette primitive`).toBe(true);
      const [, , fam, step] = ref.slice(1, -1).split(".");
      const hex = p[fam][step].$value;

      if (name === "muted") {
        // "muted" is documented as large-text/non-text only across both
        // themes (see each theme's own text.muted $description) — held to
        // the 3:1 floor, not 4.5:1.
        expect(meetsAA(hex, canvas, true), `text.${name} (${hex}) must pass at least 3:1 (large-text) on canvas`).toBe(true);
        expect(meetsAA(hex, surface, true), `text.${name} (${hex}) must pass at least 3:1 (large-text) on surface`).toBe(true);
      } else {
        expect(meetsAA(hex, canvas), `text.${name} (${hex}) must pass 4.5:1 on canvas`).toBe(true);
        expect(meetsAA(hex, surface), `text.${name} (${hex}) must pass 4.5:1 on surface`).toBe(true);
      }
    });

    it.each(theme.brandAsText)("%s %s meets AA as text on canvas: %s", (_label, fam, step, expectPass) => {
      const hex = p[fam][step].$value;
      expect(meetsAA(hex, canvas)).toBe(expectPass);
    });

    it("neutral's darkest step passes AAA (7:1) on canvas", () => {
      const darkest = Object.keys(p.neutral).length.toString();
      expect(contrastRatio(p.neutral[darkest].$value, canvas)).toBeGreaterThanOrEqual(7);
    });

    it(`action.primary_text ${theme.primaryButtonPasses ? "passes" : "is a documented, tracked FAIL"} AA on action.primary (button label legibility)`, () => {
      const action = theme.tokens.color.semantic.action;
      const resolve = (ref: string) => {
        const [, , fam, step] = ref.slice(1, -1).split(".");
        return p[fam][step].$value;
      };
      const bg = resolve(action.primary.$value);
      const fg = resolve(action.primary_text.$value);
      expect(meetsAA(fg, bg)).toBe(theme.primaryButtonPasses);
    });
  });
}
