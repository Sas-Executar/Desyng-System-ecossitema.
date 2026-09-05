/**
 * Headless client for apps/admin (Payload CMS) — see
 * design-system/00_GOVERNANCE/SOT_RESOLUTION.md #2: Astro consumes Payload
 * over plain REST, Payload+Postgres stay the content/admin SOT.
 */
const PAYLOAD_URL = import.meta.env.PAYLOAD_URL ?? 'http://localhost:3000'

export type PostCategory = 'announcements' | 'coding' | 'agents' | 'work' | 'productivity'

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

export async function getPosts(): Promise<Post[]> {
  const data = await payloadFetch<PayloadListResponse<Post>>('/api/posts?sort=-publishedDate&limit=50')
  return data.docs
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const data = await payloadFetch<PayloadListResponse<Post>>(
    `/api/posts?where[slug][equals]=${encodeURIComponent(slug)}&limit=1`
  )
  return data.docs[0] ?? null
}
