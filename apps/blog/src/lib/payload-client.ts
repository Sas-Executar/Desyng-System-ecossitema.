/**
 * Headless client for apps/admin (Payload CMS) — see
 * design-system/00_GOVERNANCE/SOT_RESOLUTION.md #2: Astro consumes Payload
 * over plain REST, Payload+Postgres stay the content/admin SOT.
 */
const PAYLOAD_URL = import.meta.env.PAYLOAD_URL ?? 'http://localhost:3000'

export type PostCategory = 'announcements' | 'coding' | 'agents' | 'work' | 'productivity'

/**
 * Display labels for the real category taxonomy. The Editorial Hybrid v6
 * prototype's nav uses placeholder editorial topics (Ciência/Viagem/Animais/
 * História/Fotografia) that don't correspond to any real content here —
 * this repo's actual Posts.category is a product/dev-blog taxonomy. The nav
 * renders THESE real categories (translated), not the prototype's fictional
 * ones, so every link actually resolves to real posts.
 */
export const CATEGORY_LABELS: Record<PostCategory, string> = {
  announcements: 'Anúncios',
  coding: 'Código',
  agents: 'Agentes',
  work: 'Trabalho',
  productivity: 'Produtividade',
}

/** Mirrors the field shape of apps/admin/src/collections/Posts.ts. `content`
 * is the raw Lexical JSON tree — left untyped here and handled generically
 * by <RichTextRenderer>, rather than duplicating Payload's lexical AST types
 * in a frontend app that has no build-time dependency on apps/admin. */
export interface Post {
  id: number | string
  title: string
  slug: string
  category: PostCategory
  description: string
  publishedDate: string
  readingTime?: number | null
  /** "Nossa Seleção" flag (Editorial Hybrid v6) — see apps/admin/src/collections/Posts.ts. */
  featured?: boolean
  /** Vertical cover — feature-media (100vh) on the article page, 3:4 crop on Selection/Carousel cards. */
  featuredImage?: { url?: string; alt?: string } | null
  content: unknown
}

interface PayloadListResponse<T> {
  docs: T[]
  totalDocs: number
}

async function payloadFetch<T>(path: string): Promise<T> {
  const res = await fetch(`${PAYLOAD_URL}${path}`)
  if (!res.ok) {
    throw new Error(`Payload request failed: ${path} -> ${res.status} ${res.statusText}`)
  }
  return res.json() as Promise<T>
}

/**
 * Payload returns media URLs relative to ITS OWN origin (e.g.
 * `/api/media/file/x.png`). Nothing consumed `featuredImage.url` before
 * Editorial Hybrid v6 (PostCard never rendered an image), so this bug was
 * real but silent: a browser resolves that relative path against the
 * BLOG's origin (localhost:4321), not the admin's (localhost:3000) —
 * 404 every time. Every post's featuredImage.url gets absolutized here,
 * once, right after fetching, so every consumer (FeatureMedia/Selection/
 * Carousel) just works with a real URL.
 */
function absolutizeMedia(post: Post): Post {
  if (post.featuredImage?.url && post.featuredImage.url.startsWith('/')) {
    return { ...post, featuredImage: { ...post.featuredImage, url: `${PAYLOAD_URL}${post.featuredImage.url}` } }
  }
  return post
}

export async function getPosts(): Promise<Post[]> {
  const data = await payloadFetch<PayloadListResponse<Post>>('/api/posts?sort=-publishedDate&limit=50')
  return data.docs.map(absolutizeMedia)
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const data = await payloadFetch<PayloadListResponse<Post>>(
    `/api/posts?where[slug][equals]=${encodeURIComponent(slug)}&limit=1`
  )
  const post = data.docs[0]
  return post ? absolutizeMedia(post) : null
}

/**
 * "Nossa Seleção" (Editorial Hybrid v6): posts flagged `featured` first,
 * topped up with the most recent otherwise-unfeatured posts so the section
 * never renders with fewer than `count` cards just because an editor hasn't
 * flagged enough yet.
 */
export function pickSelection(posts: Post[], count = 3): Post[] {
  const featured = posts.filter((p) => p.featured)
  const rest = posts.filter((p) => !p.featured)
  return [...featured, ...rest].slice(0, count)
}

/** "Explore mais" carousel: most recent posts not already shown in Selection. */
export function pickCarousel(posts: Post[], exclude: Post[], count = 6): Post[] {
  const excludeIds = new Set(exclude.map((p) => p.id))
  return posts.filter((p) => !excludeIds.has(p.id)).slice(0, count)
}
