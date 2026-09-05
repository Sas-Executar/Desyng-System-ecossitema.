import { ScrollView, View, Text, StyleSheet } from 'react-native'
import { space, semanticLight } from '@executar/design-tokens/tokens.native'
import { Button } from '../src/components/Button'
import { Card } from '../src/components/Card'
import { Callout } from '../src/components/Callout'
import { rnStyle } from '../src/rnStyle'

/**
 * Home screen — proves the shared token pipeline reaches native, too:
 * the same @executar/design-tokens values apps/blog consumes as CSS
 * drive this screen's colors via tokens.native (and tamagui.config.ts,
 * wired up in app/_layout.tsx, for the parts of the app that do use
 * Tamagui's own component system going forward).
 */
export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={rnStyle(styles.content)}>
      <Text style={rnStyle(styles.h1)}>EXECUTAR</Text>
      <Text style={rnStyle(styles.subtitle)}>
        App mobile — mesmos tokens de @executar/design-tokens, mesma API de componentes de @executar/ui.
      </Text>

      <View style={rnStyle(styles.stack)}>
        <Button variant="primary">Ação primária</Button>
        <Button variant="secondary">Ação secundária</Button>
        <Button variant="tertiary">Cancelar</Button>
      </View>

      <Card style={rnStyle(styles.card)}>
        <Text style={rnStyle(styles.cardTitle)}>Card de exemplo</Text>
        <Text style={rnStyle(styles.subtitle)}>Mesma superfície/borda/radius do Card web.</Text>
      </Card>

      <Callout type="tip" title="Mesmo registry do Callout">
        O componente nativo resolve os mesmos tokens que o Callout web, via @executar/callout-protocol.
      </Callout>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  content: {
    padding: space['6'],
    gap: space['4'],
    backgroundColor: semanticLight.background_canvas,
  },
  h1: {
    fontSize: 32,
    fontWeight: '600',
    color: semanticLight.text_primary,
  },
  subtitle: {
    color: semanticLight.text_secondary,
  },
  stack: {
    gap: space['3'],
  },
  card: {
    gap: space['1'],
  },
  cardTitle: {
    fontWeight: '600',
    color: semanticLight.text_primary,
  },
})
