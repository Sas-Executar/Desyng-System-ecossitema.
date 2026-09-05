export interface TokenValue<T = unknown> {
  $type: string;
  $value: T;
  $description?: string;
  $extensions?: { "desyng.source"?: string };
}

export type TokenGroup<T = unknown> = Record<string, TokenValue<T>>;

export interface DesignTokens {
  $description: string;
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
  breakpoint: TokenGroup<string>;
  container: TokenGroup<string>;
  grid: TokenGroup<string | number>;
  motion: {
    duration: TokenGroup<string>;
    easing: TokenGroup<number[]>;
    allowed_properties: string[];
    forbidden_properties: string[];
  };
  zIndex: TokenGroup<number>;
}
