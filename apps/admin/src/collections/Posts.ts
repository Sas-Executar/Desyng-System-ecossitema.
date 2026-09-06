import type { CollectionConfig } from 'payload'
import { lexicalEditor, BlocksFeature } from '@payloadcms/richtext-lexical'
import { CalloutBlock } from '../blocks/Callout'

/**
 * Posts — the Payload-side of the Blog content pipeline (Astro consumes this
 * as a headless CMS, see design-system/00_GOVERNANCE/SOT_RESOLUTION.md #2).
 * Field names/shape mirror the frontmatter schema documented in
 * references/source-docs/astro-blog.md section 5 (category/product/date/
 * readingTime/title/description), adapted to Payload fields.
 */
export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'publishedDate'],
  },
  access: {
    read: () => true,
  },
  versions: { drafts: true },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true, admin: { position: 'sidebar' } },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: ['announcements', 'coding', 'agents', 'work', 'productivity'],
    },
    { name: 'description', type: 'textarea', required: true },
    { name: 'publishedDate', type: 'date', required: true, admin: { position: 'sidebar' } },
    { name: 'readingTime', type: 'number', admin: { position: 'sidebar', description: 'minutos' } },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
        description:
          'Aparece na seção "Nossa Seleção" do blog editorial (Editorial Hybrid v6). Se menos de 3 posts estiverem marcados, o blog completa com os mais recentes.',
      },
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description:
          'Capa vertical do post — usada em tela cheia (100vh) no topo do artigo, e recortada em 3:4 nos cards de "Nossa Seleção" e do carrossel (Editorial Hybrid v6). Envie uma imagem em retrato; imagens horizontais são recortadas pelo centro.',
      },
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [...defaultFeatures, BlocksFeature({ blocks: [CalloutBlock] })],
      }),
    },
  ],
}
