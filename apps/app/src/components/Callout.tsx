import type { ReactNode } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { radius, space } from '@executar/design-tokens/tokens.native'
import { resolveCalloutTokens, type CalloutType } from '@executar/callout-protocol'
import { rnStyle } from '../rnStyle'

export interface CalloutProps {
  type: CalloutType
  title?: string
  children: ReactNode
}

/**
 * Native renderer for @executar/callout-protocol's CalloutNode — the
 * React Native counterpart to packages/ui's web <Callout>. Same registry,
 * same resolved colors (see Button.tsx / rnStyle.ts for why plain RN, not
 * Tamagui styled(), renders this). The only real gap vs. web: the icon. Web
 * draws inline SVG (packages/ui/src/components/Callout/icons.tsx); that
 * needs react-native-svg here, not added in this compile-only pass — a
 * colored dot stands in so the per-type color signal isn't silently dropped.
 */
export function Callout({ type, title, children }: CalloutProps) {
  const resolved = resolveCalloutTokens(type)

  return (
    <View
      style={rnStyle([
        styles.container,
        { backgroundColor: resolved.background, borderColor: resolved.border ?? 'transparent' },
      ])}
      accessibilityRole={resolved.role === 'alert' ? 'alert' : 'text'}
    >
      <View style={rnStyle([styles.dot, { backgroundColor: resolved.iconColor }])} />
      <View style={rnStyle(styles.body)}>
        {title ? <Text style={rnStyle([styles.title, { color: resolved.foreground }])}>{title}</Text> : null}
        <Text style={rnStyle({ color: resolved.foreground })}>{children}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: radius.md,
    padding: space['4'],
    gap: space['3'],
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 999,
    marginTop: 6,
  },
  body: {
    flex: 1,
    gap: space['1'],
  },
  title: {
    fontWeight: '600',
  },
})
