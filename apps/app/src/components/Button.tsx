import { Pressable, Text, StyleSheet, type PressableProps, type PressableStateCallbackType } from 'react-native'
import { palette, space, radius, fontSize, fontWeight, semanticLight } from '@executar/design-tokens/tokens.native'
import { rnStyle } from '../rnStyle'

/**
 * Native Button — same variant vocabulary as @executar/ui's web Button
 * (design-system/COMPONENT-SPEC.md#button), built on plain React Native
 * primitives.
 *
 * Not using Tamagui's `styled()`/typed-variant API here: it hit the same
 * upstream Expo/react-native-web typing conflict `rnStyle.ts` documents,
 * plus its own additional generic-prop-merging errors (`gap`/`background`/
 * `borderRadius` reported as not existing on the variant's inferred prop
 * type). `tamagui.config.ts` and `TamaguiProvider` (app/_layout.tsx) still
 * stand — this only affects which primitives components render with.
 */
export type ButtonVariant = 'primary' | 'secondary' | 'tertiary'

export interface ButtonProps extends PressableProps {
  variant?: ButtonVariant
  children: string
}

export function Button({ variant = 'primary', style, children, ...rest }: ButtonProps) {
  return (
    <Pressable
      style={rnStyle((state: PressableStateCallbackType) => [
        styles.base,
        variant === 'primary' && styles.primary,
        variant === 'secondary' && styles.secondary,
        variant === 'tertiary' && styles.tertiary,
        state.pressed && variant === 'primary' && { backgroundColor: palette.green['10'] },
        typeof style === 'function' ? style(state) : style,
      ])}
      {...rest}
    >
      <Text
        style={rnStyle([
          styles.label,
          variant === 'primary' && { color: semanticLight.action_primary_text },
          variant !== 'primary' && { color: semanticLight.action_secondary },
        ])}
      >
        {children}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  base: {
    minHeight: 48,
    borderRadius: radius.pill,
    paddingHorizontal: space['6'],
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'transparent',
  },
  primary: {
    backgroundColor: semanticLight.action_primary,
  },
  secondary: {
    backgroundColor: 'transparent',
    borderColor: semanticLight.action_secondary,
  },
  tertiary: {
    backgroundColor: 'transparent',
    paddingHorizontal: space['2'],
    minHeight: undefined,
  },
  label: {
    fontSize: fontSize.button,
    fontWeight: String(fontWeight.button) as '500',
  },
})
