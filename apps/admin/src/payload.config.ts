import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

// Extensionless relative imports (not `.js`, despite `"module": "esnext"` in
// tsconfig): Turbopack is the default dev bundler in Next 16 and, unlike
// webpack, has no direct equivalent of the template's `extensionAlias`
// remap (`.js` specifier -> resolve a `.ts` file) — see next.config.ts for
// the full story. Bare extensionless imports resolve natively under both
// bundlers, so that's what every internal import in this app uses.
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Posts } from './collections/Posts'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

/**
 * SOT: references/source-docs/ADR/EXECUTAR_ADR_CREATOR_OPERATIONS_OS_V1/ —
 * "SOT = Payload + PostgreSQL". Astro (apps/blog) consumes this as a headless
 * CMS over REST — see design-system/00_GOVERNANCE/SOT_RESOLUTION.md #2.
 */
export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Posts],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [],
})
