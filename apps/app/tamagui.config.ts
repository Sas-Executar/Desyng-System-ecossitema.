import { createTamagui, createTokens, createFont } from 'tamagui'
import { palette, space, radius, fontSize, lineHeight, fontWeight, semanticLight } from '@executar/design-tokens/tokens.native'

/**
 * Maps @executar/design-tokens (the same package apps/blog imports for
 * CSS) into Tamagui's token/theme shape, so the native app and the web
 * app share one source of values instead of two hand-maintained copies.
 */

function flattenPalette() {
  const out: Record<string, string> = {}
  for (const [family, steps] of Object.entries(palette)) {
    for (const [step, hex] of Object.entries(steps)) {
      out[`${family}_${step}`] = hex
    }
  }
  return out
}

const colorTokens = flattenPalette()

const spaceTokens: Record<string, number> = {}
for (const [key, value] of Object.entries(space)) {
  spaceTokens[key.replace('.', '_')] = value
}

const radiusTokens: Record<string, number> = { ...radius }

const tokens = createTokens({
  color: colorTokens,
  space: { ...spaceTokens, true: spaceTokens['2'] ?? 8 },
  size: { ...spaceTokens, true: spaceTokens['2'] ?? 8 },
  radius: { ...radiusTokens, true: radiusTokens.md ?? 8 },
  zIndex: { base: 0, dropdown: 1000, overlay: 1200, modal: 1300, toast: 1400, tooltip: 1500 },
})

const sansFont = createFont({
  family: 'IBM Plex Sans, -apple-system, sans-serif',
  size: Object.fromEntries(Object.entries(fontSize).map(([k, v]) => [k, v])),
  lineHeight: Object.fromEntries(Object.entries(lineHeight).map(([k, v]) => [k, v])),
  weight: Object.fromEntries(Object.entries(fontWeight).map(([k, v]) => [k, String(v)])),
})

/**
 * Only a light theme is built from resolved values (`semanticLight`) —
 * @executar/design-tokens does not yet export a resolved `semanticDark`
 * object (only the CSS side, theme.css's `[data-theme='dark']`, has those
 * aliases). Native dark mode reuses light for now; parity is tracked as
 * follow-up, not silently skipped.
 */
const lightTheme = {
  background: semanticLight.background_canvas,
  backgroundSurface: semanticLight.background_surface,
  color: semanticLight.text_primary,
  colorSecondary: semanticLight.text_secondary,
  colorMuted: semanticLight.text_muted,
  borderColor: semanticLight.border_default,
  primary: semanticLight.action_primary,
  primaryHover: semanticLight.action_primary_hover,
  primaryText: semanticLight.action_primary_text,
  secondary: semanticLight.action_secondary,
  success: semanticLight.state_success,
  successText: semanticLight.state_success_text,
  warning: semanticLight.state_warning,
  warningText: semanticLight.state_warning_text,
  error: semanticLight.state_error,
  errorText: semanticLight.state_error_text,
  info: semanticLight.state_info,
  infoText: semanticLight.state_info_text,
}

export const config = createTamagui({
  tokens,
  fonts: { body: sansFont, heading: sansFont },
  themes: {
    light: lightTheme,
    // TODO(follow-up): real dark theme once semanticDark is exported.
    dark: lightTheme,
  },
})

export type AppConfig = typeof config

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default config
