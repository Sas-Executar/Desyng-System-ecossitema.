import { describe, expect, it } from "vitest";
import { meetsAA } from "@executar/design-tokens";
import { CALLOUT_TYPES } from "./schema.js";
import { CALLOUT_REGISTRY, DEFAULT_THEME, resolveCalloutTokens } from "./registry.js";
import { CalloutNodeSchema, parseCalloutNode } from "./schema.js";

const THEMES = ["executar-classic", "modernismo-operacional"] as const;

describe("CALLOUT_REGISTRY", () => {
  it("has an entry for every CalloutType in the schema — no type left unmapped", () => {
    for (const type of CALLOUT_TYPES) {
      expect(CALLOUT_REGISTRY[type], `missing registry entry for "${type}"`).toBeDefined();
    }
  });

  it.each(CALLOUT_TYPES)("%s resolves every token reference to a real hex color", (type) => {
    const resolved = resolveCalloutTokens(type);
    expect(resolved.background).toMatch(/^#[0-9A-F]{6}$/i);
    expect(resolved.foreground).toMatch(/^#[0-9A-F]{6}$/i);
    expect(resolved.iconColor).toMatch(/^#[0-9A-F]{6}$/i);
    if (resolved.border) expect(resolved.border).toMatch(/^#[0-9A-F]{6}$/i);
  });

  it.each(CALLOUT_TYPES.filter((t) => t !== "cta"))(
    "%s: foreground text passes at least AA large-text contrast against its own background",
    (type) => {
      const { foreground, background } = resolveCalloutTokens(type);
      // Callout bodies can contain body-sized text, but this registry's
      // backgrounds are deliberately very light (palette step 2) precisely so
      // that text.primary/text.secondary (already full-AA per
      // packages/design-tokens/src/contrast.test.ts) clears the bar here too.
      // We assert the relaxed (large-text) bound directly against THIS pair,
      // as a regression guard specific to the callout registry.
      expect(meetsAA(foreground, background, true), `${type}: ${foreground} on ${background}`).toBe(true);
    }
  );

  it("cta uses on_brand foreground over its solid-fill background (not tested against canvas)", () => {
    const { foreground, background } = resolveCalloutTokens("cta");
    expect(foreground.toUpperCase()).toBe("#FFFFFF");
    expect(background).toBeTruthy();
  });
});

/**
 * Two themes exist as of the 2026-09-06 correction (modernismo-operacional
 * is now the default). These lock in the theme parameter itself: every
 * type must resolve cleanly in BOTH themes, "cta" must track whichever
 * theme's own action.primary is (not a hardcoded family), and passing a
 * theme explicitly must actually change the result — a regression here
 * would mean the theme argument silently stopped doing anything.
 */
describe("CALLOUT_REGISTRY — theme-aware resolution", () => {
  it("meta.defaultTheme is modernismo-operacional", () => {
    expect(DEFAULT_THEME).toBe("modernismo-operacional");
  });

  for (const theme of THEMES) {
    it.each(CALLOUT_TYPES)(`%s resolves in the "${theme}" theme`, (type) => {
      const resolved = resolveCalloutTokens(type, theme);
      expect(resolved.background).toMatch(/^#[0-9A-F]{6}$/i);
      expect(resolved.foreground).toMatch(/^#[0-9A-F]{6}$/i);
      expect(resolved.iconColor).toMatch(/^#[0-9A-F]{6}$/i);
    });
  }

  it("the same type resolves to DIFFERENT colors across the two themes (not silently ignoring the theme arg)", () => {
    const classic = resolveCalloutTokens("info", "executar-classic");
    const modop = resolveCalloutTokens("info", "modernismo-operacional");
    expect(classic.iconColor).not.toBe(modop.iconColor);
    expect(classic.background).not.toBe(modop.background);
  });

  it("info/question/accessibility (registry's 'azure' family) resolve via the aliased 'blue' family in modernismo-operacional", () => {
    for (const type of ["info", "question", "accessibility"] as const) {
      const resolved = resolveCalloutTokens(type, "modernismo-operacional");
      expect(resolved.iconColor.toUpperCase()).toBe("#336BB6"); // blue.9
    }
  });

  it("warning (registry's 'warning' family) resolves via the aliased 'yellow' family in modernismo-operacional", () => {
    const resolved = resolveCalloutTokens("warning", "modernismo-operacional");
    expect(resolved.iconColor.toUpperCase()).toBe("#F7DE75"); // yellow.9
  });

  it("cta's solid-fill tracks each theme's own action.primary, not a hardcoded family", () => {
    const classic = resolveCalloutTokens("cta", "executar-classic");
    const modop = resolveCalloutTokens("cta", "modernismo-operacional");
    expect(classic.background.toUpperCase()).toBe("#00BF63"); // executar-classic action.primary = green.9
    expect(modop.background.toUpperCase()).toBe("#336BB6"); // modernismo-operacional action.primary = blue.9
  });

  it("resolveCalloutTokens(type) with no theme arg matches resolveCalloutTokens(type, DEFAULT_THEME)", () => {
    for (const type of CALLOUT_TYPES) {
      expect(resolveCalloutTokens(type)).toEqual(resolveCalloutTokens(type, DEFAULT_THEME));
    }
  });
});

describe("CalloutNodeSchema", () => {
  it("accepts a minimal valid node", () => {
    const node = parseCalloutNode({ type: "warning", body: "texto" });
    expect(node.type).toBe("warning");
  });

  it("rejects an unknown type", () => {
    expect(() => CalloutNodeSchema.parse({ type: "not-a-real-type", body: "x" })).toThrow();
  });

  it("rejects a node missing body", () => {
    expect(() => CalloutNodeSchema.parse({ type: "note" })).toThrow();
  });
});
