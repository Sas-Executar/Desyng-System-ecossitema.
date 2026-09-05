/**
 * CALLOUT_REGISTRY — ports references/source-docs/ADR/ADR-001_PROTOCOLO_NATIVO_CALLOUTS_MULTIPLATAFORMA.md
 * section 6 ("Registry de Callouts") + design-system/components/callout-protocol.md
 * (the token-mapping table added during the Fase 1 handoff) to real code.
 *
 * Appearance is NEVER defined by content — only by this registry, which
 * points at @executar/design-tokens. Renderers (Web/Native/Print) read this,
 * never hardcode a hex/class of their own.
 */
import tokensJson from "@executar/design-tokens/design-tokens.json" with { type: "json" };
import type { CalloutType } from "./schema.js";

/**
 * The JSON import above gives TS an exact literal-keyed type (great for
 * catching typos when a caller writes `tokens.color.palette.grene`), but
 * this module resolves palette/semantic paths dynamically at runtime from
 * registry data, so it needs a widened, indexable view of the same object.
 */
const tokens = tokensJson as unknown as {
  color: {
    palette: Record<string, Record<string, { $value: string }>>;
    semantic: Record<string, Record<string, { $value: string }>>;
  };
};

export type CalloutRole = "note" | "alert" | "status" | "action";
export type CalloutTone =
  | "informative"
  | "positive"
  | "success"
  | "warning"
  | "danger"
  | "interactive"
  | "example"
  | "neutral"
  | "action";

/**
 * A token reference is either:
 *  - a [family, step] tuple into color.palette (e.g. ["azure", "2"])
 *  - a dotted path into color.semantic (e.g. "text.primary")
 */
type PaletteRef = readonly [family: string, step: string];
type SemanticRef = `semantic:${string}`;
type TokenRef = PaletteRef | SemanticRef | "solid-fill";

export interface CalloutRegistryEntry {
  /** Lucide icon component name — see design-system/components/callout-protocol.md
   *  for the provenance note: INFERRED from the icon names in ADR-001, not an
   *  explicit library declaration there. `null` for types with no default icon (cta). */
  icon: string | null;
  tone: CalloutTone;
  role: CalloutRole;
  background: TokenRef;
  border: TokenRef | null;
  foreground: TokenRef;
  iconColor: TokenRef;
}

export const CALLOUT_REGISTRY: Record<CalloutType, CalloutRegistryEntry> = {
  info: { icon: "Info", tone: "informative", role: "note", background: ["azure", "2"], border: ["azure", "6"], foreground: "semantic:text.primary", iconColor: ["azure", "9"] },
  tip: { icon: "Lightbulb", tone: "positive", role: "note", background: ["green", "2"], border: ["green", "6"], foreground: "semantic:text.primary", iconColor: ["green", "9"] },
  success: { icon: "CircleCheck", tone: "success", role: "status", background: ["green", "2"], border: ["green", "6"], foreground: "semantic:text.primary", iconColor: ["green", "9"] },
  warning: { icon: "TriangleAlert", tone: "warning", role: "alert", background: ["warning", "2"], border: ["warning", "6"], foreground: "semantic:text.primary", iconColor: ["warning", "9"] },
  danger: { icon: "ShieldAlert", tone: "danger", role: "alert", background: ["error", "2"], border: ["error", "6"], foreground: "semantic:text.primary", iconColor: ["error", "9"] },
  question: { icon: "CircleHelp", tone: "interactive", role: "note", background: ["azure", "2"], border: ["azure", "6"], foreground: "semantic:text.primary", iconColor: ["azure", "9"] },
  example: { icon: "BookOpen", tone: "example", role: "note", background: ["neutral", "2"], border: ["neutral", "6"], foreground: "semantic:text.primary", iconColor: ["neutral", "10"] },
  note: { icon: "FileText", tone: "neutral", role: "note", background: ["neutral", "2"], border: ["neutral", "6"], foreground: "semantic:text.primary", iconColor: ["neutral", "10"] },
  definition: { icon: "FileText", tone: "neutral", role: "note", background: ["neutral", "2"], border: ["neutral", "6"], foreground: "semantic:text.primary", iconColor: ["neutral", "10"] },
  source: { icon: "BookOpen", tone: "neutral", role: "note", background: ["neutral", "2"], border: ["neutral", "6"], foreground: "semantic:text.secondary", iconColor: ["neutral", "9"] },
  cta: { icon: null, tone: "action", role: "action", background: "solid-fill", border: null, foreground: "semantic:text.on_brand", iconColor: "semantic:text.on_brand" },
  accessibility: { icon: "CircleHelp", tone: "informative", role: "note", background: ["azure", "2"], border: ["azure", "6"], foreground: "semantic:text.primary", iconColor: ["azure", "9"] },
};

/** Resolves a TokenRef to an actual hex value using @executar/design-tokens. */
export function resolveTokenRef(ref: TokenRef): string {
  if (ref === "solid-fill") {
    return tokens.color.palette.green["9"].$value;
  }
  if (typeof ref === "string" && ref.startsWith("semantic:")) {
    const [group, name] = ref.slice("semantic:".length).split(".");
    const raw = tokens.color.semantic[group][name].$value;
    if (raw.startsWith("{")) {
      const [, , fam, step] = raw.slice(1, -1).split(".");
      return tokens.color.palette[fam][step].$value;
    }
    return raw;
  }
  const [fam, step] = ref as PaletteRef;
  return tokens.color.palette[fam][step].$value;
}

/** Fully-resolved (hex, not references) tokens for one Callout type — what a renderer actually consumes. */
export function resolveCalloutTokens(type: CalloutType) {
  const entry = CALLOUT_REGISTRY[type];
  return {
    icon: entry.icon,
    role: entry.role,
    tone: entry.tone,
    background: resolveTokenRef(entry.background),
    border: entry.border ? resolveTokenRef(entry.border) : null,
    foreground: resolveTokenRef(entry.foreground),
    iconColor: resolveTokenRef(entry.iconColor),
  };
}
