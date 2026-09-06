/**
 * Seeds sample posts so apps/blog has real content to fetch over the REST
 * API — including the Editorial Hybrid v6 blog (apps/blog's editorial
 * homepage/article pages need `featured` posts with a vertical
 * `featuredImage` for "Nossa Seleção", the carousel, and the article's
 * 100vh cover). Run with `pnpm --filter @executar/admin seed`. Idempotent:
 * each post is skipped individually if its slug already exists.
 */
import 'dotenv/config'
import sharp from 'sharp'
import { getPayload } from 'payload'
import config from './payload.config'

const lexicalParagraph = (text: string) => ({
  type: 'paragraph',
  format: '',
  indent: 0,
  version: 1,
  direction: 'ltr',
  children: [{ type: 'text', format: 0, detail: 0, mode: 'normal', style: '', text, version: 1 }],
})

const lexicalDoc = (paragraphs: string[]) => ({
  root: { type: 'root', format: '', indent: 0, version: 1, direction: 'ltr', children: paragraphs.map(lexicalParagraph) },
})

/**
 * A vertical (3:4) gradient placeholder — no real photography ships in this
 * repo. Editors replace `featuredImage` with real, licensed images later;
 * this only exists so the Editorial Hybrid v6 layout (which requires every
 * cover to be portrait — see apps/admin/src/collections/Posts.ts) has
 * something real to render during development.
 */
async function placeholderCover(hue: number): Promise<Buffer> {
  const w = 900
  const h = 1200
  const svg = `<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="hsl(${hue},70%,20%)" />
        <stop offset="100%" stop-color="hsl(${hue},60%,55%)" />
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#g)" />
  </svg>`
  return sharp(Buffer.from(svg)).png().toBuffer()
}

interface SeedPost {
  slug: string
  title: string
  category: 'announcements' | 'coding' | 'agents' | 'work' | 'productivity'
  description: string
  readingTime: number
  featured: boolean
  coverHue: number
  paragraphs: string[]
  withCallout?: { type: string; title: string; body: string }
}

const POSTS: SeedPost[] = [
  {
    slug: 'bem-vindo-ao-blog-executar',
    title: 'Bem-vindo ao Blog EXECUTAR',
    category: 'announcements',
    description: 'Primeiro post de exemplo, semeado pelo pipeline Payload -> Postgres para validar o handoff de design ponta a ponta.',
    readingTime: 2,
    featured: true,
    coverHue: 46, // yellow-ish, matches the Editorial Hybrid identity
    paragraphs: ['Este post existe para provar que Astro consegue renderizar conteudo vindo do Payload usando os componentes do blog.'],
    withCallout: {
      type: 'tip',
      title: 'Este callout vem do Payload',
      body: 'O bloco Callout usa o mesmo CALLOUT_REGISTRY de @executar/callout-protocol tanto aqui (schema do CMS) quanto no renderer do blog.',
    },
  },
  {
    slug: 'como-agentes-mudam-o-fluxo-de-trabalho',
    title: 'Como agentes mudam o fluxo de trabalho',
    category: 'agents',
    description: 'Um olhar prático sobre onde agentes autônomos realmente economizam tempo — e onde ainda precisam de supervisão.',
    readingTime: 7,
    featured: true,
    coverHue: 205,
    paragraphs: [
      'Agentes autônomos prometem automatizar tarefas inteiras, não só respostas isoladas. Na prática, o ganho real aparece em tarefas repetitivas com critério de sucesso claro.',
      'O erro mais comum é dar autonomia demais cedo demais — o caminho que funciona é expandir o escopo aos poucos, com verificação em cada etapa.',
    ],
  },
  {
    slug: 'produtividade-sem-ruido',
    title: 'Produtividade sem ruído',
    category: 'productivity',
    description: 'Por que menos ferramentas, usadas com mais intenção, costumam bater qualquer stack de produtividade complexa.',
    readingTime: 5,
    featured: true,
    coverHue: 150,
    paragraphs: [
      'Toda ferramenta nova promete organizar o caos, mas a maior parte do caos vem de decisões adiadas, não de falta de sistema.',
      'Um processo simples, seguido de verdade, vence um processo sofisticado que ninguém consegue manter.',
    ],
  },
  {
    slug: 'bastidores-do-nosso-design-system',
    title: 'Bastidores do nosso design system',
    category: 'work',
    description: 'Como decidimos entre dois sistemas visuais concorrentes sem quebrar o que já estava em produção.',
    readingTime: 6,
    featured: false,
    coverHue: 20,
    paragraphs: [
      'Manter dois sistemas de design coexistindo não é indecisão — é reconhecer que produtos diferentes têm públicos e objetivos diferentes.',
      'A parte difícil nunca é escolher a paleta; é garantir que o resto do produto continue funcionando enquanto ela muda.',
    ],
  },
  {
    slug: 'notas-sobre-codigo-legado',
    title: 'Notas sobre código legado',
    category: 'coding',
    description: 'Três hábitos que tornam um código antigo mais fácil de mexer, sem precisar reescrever nada.',
    readingTime: 4,
    featured: false,
    coverHue: 280,
    paragraphs: [
      'Código legado não é sinônimo de código ruim — é só código que sobreviveu tempo suficiente para acumular contexto que ninguém documentou.',
      'Testes de regressão em volta do comportamento atual, antes de qualquer refatoração, evitam a maior parte dos incêndios.',
    ],
  },
]

async function upsertCover(payload: Awaited<ReturnType<typeof getPayload>>, slug: string, hue: number) {
  const alt = `Capa editorial gerada para "${slug}"`
  const existing = await payload.find({ collection: 'media', where: { alt: { equals: alt } }, limit: 1 })
  if (existing.docs.length > 0) return existing.docs[0].id

  const buffer = await placeholderCover(hue)
  const media = await payload.create({
    collection: 'media',
    data: { alt },
    file: { data: buffer, mimetype: 'image/png', name: `${slug}-cover.png`, size: buffer.length },
  })
  return media.id
}

function buildContent(post: SeedPost) {
  const children: { type: string; version: number; [k: string]: unknown }[] = post.paragraphs.map(lexicalParagraph)
  if (post.withCallout) {
    children.push({
      type: 'block',
      format: '',
      version: 2,
      fields: {
        blockType: 'callout',
        type: post.withCallout.type,
        title: post.withCallout.title,
        body: lexicalDoc([post.withCallout.body]),
      },
    })
  }
  return { root: { type: 'root', format: '', indent: 0, version: 1, direction: 'ltr', children } }
}

async function seed() {
  const payload = await getPayload({ config })
  let created = 0
  let patched = 0
  let skipped = 0

  for (const post of POSTS) {
    const existing = await payload.find({ collection: 'posts', where: { slug: { equals: post.slug } }, limit: 1 })
    if (existing.docs.length > 0) {
      const doc = existing.docs[0]
      // Idempotent, but not frozen: a post seeded before the Editorial
      // Hybrid v6 fields existed (featured/featuredImage) gets patched up to
      // date instead of staying permanently without a cover or with stale
      // copy (e.g. the original seed's body text referenced @executar/ui,
      // which this app no longer depends on — see apps/blog/README.md).
      if (!doc.featuredImage) {
        const coverId = await upsertCover(payload, post.slug, post.coverHue)
        await payload.update({
          collection: 'posts',
          id: doc.id,
          data: { featured: post.featured, featuredImage: coverId, description: post.description, content: buildContent(post) as never },
        })
        console.log(`Post "${post.slug}" (id=${doc.id}) existed without a cover — patched featured/featuredImage/content.`)
        patched++
      } else {
        console.log(`Post "${post.slug}" already exists (id=${doc.id}), skipping.`)
        skipped++
      }
      continue
    }

    const coverId = await upsertCover(payload, post.slug, post.coverHue)
    const created_ = await payload.create({
      collection: 'posts',
      data: {
        title: post.title,
        slug: post.slug,
        category: post.category,
        description: post.description,
        publishedDate: new Date().toISOString(),
        readingTime: post.readingTime,
        featured: post.featured,
        featuredImage: coverId,
        content: buildContent(post) as never,
      },
    })
    console.log(`Seeded post id=${created_.id}, slug=${created_.slug}, featured=${post.featured}`)
    created++
  }

  console.log(`Done. ${created} created, ${patched} patched, ${skipped} skipped.`)
  process.exit(0)
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})
