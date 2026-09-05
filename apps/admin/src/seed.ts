/**
 * Seeds one sample post with a Callout block, so apps/blog has something
 * real to fetch over the REST API. Run with `pnpm --filter @executar/admin seed`.
 * Idempotent: skips if a post with the same slug already exists.
 */
import 'dotenv/config'
import { getPayload } from 'payload'
import config from './payload.config'

async function seed() {
  const payload = await getPayload({ config })

  const slug = 'bem-vindo-ao-blog-executar'
  const existing = await payload.find({ collection: 'posts', where: { slug: { equals: slug } }, limit: 1 })
  if (existing.docs.length > 0) {
    console.log(`Post "${slug}" already exists (id=${existing.docs[0].id}), skipping.`)
    process.exit(0)
  }

  const post = await payload.create({
    collection: 'posts',
    data: {
      title: 'Bem-vindo ao Blog EXECUTAR',
      slug,
      category: 'announcements',
      description: 'Primeiro post de exemplo, semeado pelo pipeline Payload -> Postgres para validar o handoff de design ponta a ponta.',
      publishedDate: new Date().toISOString(),
      readingTime: 2,
      content: {
        root: {
          type: 'root',
          format: '',
          indent: 0,
          version: 1,
          direction: 'ltr',
          children: [
            {
              type: 'paragraph',
              format: '',
              indent: 0,
              version: 1,
              direction: 'ltr',
              children: [
                {
                  type: 'text',
                  format: 0,
                  detail: 0,
                  mode: 'normal',
                  style: '',
                  text: 'Este post existe para provar que Astro consegue renderizar conteudo vindo do Payload usando os componentes de @executar/ui.',
                  version: 1,
                },
              ],
            },
            {
              type: 'block',
              format: '',
              version: 2,
              fields: {
                blockType: 'callout',
                type: 'tip',
                title: 'Este callout vem do Payload',
                body: {
                  root: {
                    type: 'root',
                    format: '',
                    indent: 0,
                    version: 1,
                    direction: 'ltr',
                    children: [
                      {
                        type: 'paragraph',
                        format: '',
                        indent: 0,
                        version: 1,
                        direction: 'ltr',
                        children: [
                          {
                            type: 'text',
                            format: 0,
                            detail: 0,
                            mode: 'normal',
                            style: '',
                            text: 'O bloco Callout usa o mesmo CALLOUT_REGISTRY de @executar/callout-protocol tanto aqui (schema do CMS) quanto no renderer Web (apps/blog).',
                            version: 1,
                          },
                        ],
                      },
                    ],
                  },
                },
              },
            },
          ],
        },
      },
    },
  })

  console.log(`Seeded post id=${post.id}, slug=${post.slug}`)
  process.exit(0)
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})
