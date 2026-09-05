import { TamaguiProvider, Theme } from 'tamagui'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import config from '../tamagui.config'

export default function RootLayout() {
  return (
    <TamaguiProvider config={config} defaultTheme="light">
      <Theme name="light">
        <StatusBar style="auto" />
        <Stack screenOptions={{ headerTitle: 'EXECUTAR' }} />
      </Theme>
    </TamaguiProvider>
  )
}
