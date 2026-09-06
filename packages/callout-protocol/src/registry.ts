/**
 * CALLOUT_REGISTRY — ports references/source-docs/ADR/ADR-001_PROTOCOLO_NATIVO_CALLOUTS_MULTIPLATAFORMA.md
 * section 6 ("Registry de Callouts") + design-system/components/callout-protocol.md
 * (the token-mapping table added during the Fase 1 handoff) to real code.
 *
 * Appearance is NEVER defined by content — only by this registry, which
 * points at @executar/design-tokens. Renderers (Web/Native/Print) read this,
 * never hardcode a hex/class of their own.
 *
 * Theme-aware since the 2026-09-06 correction (two themes now exist,
 * "modernismo-operacional" is the default — see design-tokens.json's meta).
 * The registry's own PaletteRef tuples (e.g. ["azure", "2"]) are written in
 * executar-classic's family vocabulary; FAMILY_ALIAS translates that to
 * whichever family name the active theme actually uses (e.g. azure -> blue)
 * — the alternative, rewriting the whole registry per theme, would let the
 * two themes' Callouts drift out of sync with each other.
 */
import tokensJson from "@executar/design-tokens/design-tokens.json" with { type: "json" };
import type { CalloutType } from "./schema.js";

/**
 * The JSON import above gives TS an exact literal-keyed type (great for
 * catching typos when a caller writes `tokens.color.palette.grene`), but
 * this module resolves palette/semantic paths dynamically at runtime from
 * registry data, so it needs a widened, indexable view of the same object.
 */
interface ThemeShape {
  color: {
    palette: Record<string, Record<string, { $value: string }>>;
    semantic: Record<string, Record<string, { $value: string }>>;
  };
}
const tokens = tokensJson as unknown as ThemeShape & {
  meta: { defaultTheme: string; themes: string[] };
  themes: Record<string, ThemeShape>;
};

export const DEFAULT_THEME = tokens.meta.defaultTheme;
export type ThemeName = string;

/** "executar-classic" is the top-level object itself (see packages/design-tokens/src/build.ts's same convention); every other theme lives under `themes.<name>`. */
function getTheme(theme: ThemeName): ThemeShape {
  if (theme === "executar-classic") return tokens;
  const t = tokens.themes[theme];
  if (!t) throw new Error(`Unknown theme: ${theme}`);
  return t;
}

/**
 * CALLOUT_REGISTRY's PaletteRef tuples are written in executar-classic's
 * family names. A non-classic theme that doesn't have a family of that
 * exact name (e.g. modernismo-operacional has no "azure" — it has "blue")
 * needs a translation; families with the same name in both themes (green,
 * neutral) don't need an entry.
 */
const FAMILY_ALIAS: Record<ThemeName, Record<string, string>> = {
  "modernismo-operacional": { azure: "blue", warning: "yellow" },
};

function aliasFamily(theme: ThemeName, family: string): string {
  return FAMILY_ALIAS[theme]?.[family] ?? family;
}

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

/** Resolves a TokenRef to an actual hex value using @executar/design-tokens, against a given theme (defaults to meta.defaultTheme). */
export function resolveTokenRef(ref: TokenRef, theme: ThemeName = DEFAULT_THEME): string {
  const themeTokens = getTheme(theme);
  if (ref === "solid-fill") {
    // Was hardcoded to color.palette.green.9 — wrong the moment a second
    // theme's "solid brand action" color isn't green (modernismo-
    // operacional's is blue). Resolve through the semantic action.primary
    // alias instead, same as everything else, so `cta`'s background always
    // matches whatever the active theme calls its primary action color.
    return resolveTokenRef("semantic:action.primary", theme);
  }
  if (typeof ref === "string" && ref.startsWith("semantic:")) {
    const [group, name] = ref.slice("semantic:".length).split(".");
    const raw = themeTokens.color.semantic[group][name].$value;
    if (raw.startsWith("{")) {
      const [, , fam, step] = raw.slice(1, -1).split(".");
      return themeTokens.color.palette[fam][step].$value;
    }
    return raw;
  }
  const [fam, step] = ref as PaletteRef;
  return themeTokens.color.palette[aliasFamily(theme, fam)][step].$value;
}

/** Fully-resolved (hex, not references) tokens for one Callout type — what a renderer actually consumes. Defaults to the design system's current default theme; pass `theme` to render a specific one (e.g. for a theme switcher or a side-by-side preview). */
export function resolveCalloutTokens(type: CalloutType, theme: ThemeName = DEFAULT_THEME) {
  const entry = CALLOUT_REGISTRY[type];
  return {
    icon: entry.icon,
    role: entry.role,
    tone: entry.tone,
    background: resolveTokenRef(entry.background, theme),
    border: entry.border ? resolveTokenRef(entry.border, theme) : null,
    foreground: resolveTokenRef(entry.foreground, theme),
    iconColor: resolveTokenRef(entry.iconColor, theme),
  };
}
