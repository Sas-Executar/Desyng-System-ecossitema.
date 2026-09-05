import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import node from '@astrojs/node'
import tailwindcss from '@tailwindcss/vite'

// EXECUTAR Blog — Astro + React islands + Tailwind, per
// design-system/00_GOVERNANCE/SOT_RESOLUTION.md #2 (stack decision).
//
// output: 'server' — content lives in Payload (apps/admin), not in this
// app's build. A dynamic route like /blog/[slug] needs either a
// build-time-known path list (getStaticPaths, wrong here — posts are
// created/edited in the CMS after this app is built) or on-demand
// rendering. Confirmed by hitting GetStaticPathsRequired with the default
// 'static' output before adding this.
export default defineConfig({
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
})
