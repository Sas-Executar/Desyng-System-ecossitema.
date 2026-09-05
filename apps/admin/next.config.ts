import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: '/api/media/file/**',
      },
    ],
  },
  webpack: (webpackConfig) => {
    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }

    return webpackConfig
  },
  // The template hardcodes `root: path.resolve(dirname)` (= this app's own
  // folder), which is correct in Payload's single-app template repo but
  // WRONG here: this app lives inside the executar pnpm monorepo, whose
  // lockfile is two levels up. That override caused Turbopack to sandbox
  // itself inside apps/admin/ and fail with "Could not find the Next.js
  // package" when resolving `next` through the pnpm-linked node_modules.
  // Per Next's own turbopack docs (node_modules/next/dist/docs/.../
  // turbopack.md, "Root directory"): omit `root` and let Next auto-detect it
  // from the nearest pnpm-lock.yaml — which is exactly our monorepo root.
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
