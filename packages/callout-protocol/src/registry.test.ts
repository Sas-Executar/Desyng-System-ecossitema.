import { describe, expect, it } from "vitest";
import { meetsAA } from "@executar/design-tokens";
import { CALLOUT_TYPES } from "./schema.js";
import { CALLOUT_REGISTRY, resolveCalloutTokens } from "./registry.js";
import { CalloutNodeSchema, parseCalloutNode } from "./schema.js";

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
