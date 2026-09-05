import { View, StyleSheet, type ViewProps } from 'react-native'
import { radius, space, semanticLight } from '@executar/design-tokens/tokens.native'
import { rnStyle } from '../rnStyle'

/** Native Card — design-system/COMPONENT-SPEC.md#card, plain RN View (see Button.tsx / rnStyle.ts for why not Tamagui styled()). */
export function Card({ style, ...rest }: ViewProps) {
  return <View style={rnStyle([styles.card, style])} {...rest} />
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: semanticLight.background_surface,
    borderColor: semanticLight.border_default,
    borderWidth: 1,
    borderRadius: radius.md,
    padding: space['6'],
  },
})
