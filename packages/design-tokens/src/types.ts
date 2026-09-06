export interface TokenValue<T = unknown> {
  $type: string;
  $value: T;
  $description?: string;
  $extensions?: { "desyng.source"?: string };
}

export type TokenGroup<T = unknown> = Record<string, TokenValue<T>>;

/**
 * The theme-specific slice of the token tree — everything that differs
 * between "executar-classic" and "modernismo-operacional" (color,
 * typography, geometry, motion). Layout/breakpoint/grid/zIndex are
 * deliberately NOT part of this — see DesignTokens below.
 */
export interface ThemeTokens {
  $description?: string;
  color: {
    palette: Record<string, Record<string, TokenValue<string>>>;
    semantic: Record<string, TokenGroup<string>>;
  };
  font: { family: Record<string, TokenValue<string[]>> };
  fontSize: TokenGroup<string>;
  lineHeight: TokenGroup<string>;
  fontWeight: TokenGroup<number>;
  letterSpacing: TokenGroup<string>;
  typography: TokenGroup<Record<string, string>>;
  space: TokenGroup<string>;
  radius: TokenGroup<string>;
  border: { width: TokenGroup<string> };
  shadow: TokenGroup<string>;
  opacity: TokenGroup<number>;
  motion: {
    duration: TokenGroup<string>;
    easing: TokenGroup<number[]>;
    allowed_properties: string[];
    forbidden_properties: string[];
  };
}

/**
 * DesignTokens extends ThemeTokens: the top-level color/font/fontSize/...
 * fields ARE the "executar-classic" theme (kept at top level, unchanged,
 * for backward compatibility — see design-tokens.json's $description).
 * `themes` holds every OTHER theme in the same ThemeTokens shape, keyed by
 * name; `meta.defaultTheme` says which one build.ts treats as the default
 * (unscoped :root / tokens.native / callout-protocol's default resolution).
 * breakpoint/container/grid/zIndex are intentionally shared across all
 * themes — see design-tokens.json's themes.modernismo-operacional note.
 */
export interface DesignTokens extends ThemeTokens {
  $description: string;
  meta: { defaultTheme: string; themes: string[] };
  themes: Record<string, ThemeTokens>;
  breakpoint: TokenGroup<string>;
  container: TokenGroup<string>;
  grid: TokenGroup<string | number>;
  zIndex: TokenGroup<number>;
}
