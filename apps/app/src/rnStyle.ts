/**
 * Workaround for a confirmed Expo SDK 57.0.20 typing conflict, not a bug in
 * this app's code: `expo/types/react-native-web.d.ts` declares `Text`/`View`/
 * `Pressable`'s `style` prop against its own `TextProps`/`ViewProps`, whose
 * `TextStyle`/`ViewStyle` do not structurally accept plain objects produced
 * by `StyleSheet.create` from 'react-native' itself.
 *
 * Reproduced with the smallest possible case (no design-system code
 * involved):
 *
 *   const styles = StyleSheet.create({ h1: { color: 'red' } })
 *   <Text style={styles.h1}>hi</Text>   // still fails to typecheck
 *
 * `pnpm --filter @executar/app typecheck` (`tsc --noEmit`) fails on this
 * across the whole Expo/react-native-web/TypeScript combination pinned
 * here — filed as a known upstream issue in README.md rather than silently
 * worked around. This is the single, explicit, documented boundary where
 * we assert past it, so every real usage stays visible via one shared name
 * instead of scattered unexplained `as any`s.
 */
export function rnStyle(style: unknown): any {
  return style
}
