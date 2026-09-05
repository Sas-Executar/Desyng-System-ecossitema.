import tokensJson from "./design-tokens.json" with { type: "json" };
import type { DesignTokens } from "./types.js";

export const tokens: DesignTokens = tokensJson as unknown as DesignTokens;
export default tokens;

export * from "./contrast.js";
export type { DesignTokens, TokenValue, TokenGroup } from "./types.js";
