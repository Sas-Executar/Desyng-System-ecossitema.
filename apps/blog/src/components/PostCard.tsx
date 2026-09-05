import { Card, Text, Heading, Badge } from '@executar/ui'
import type { Post } from '../lib/payload-client'

/**
 * PostCard — specific to the Blog, per design-system/components/
 * component-inventory.md ("PostCard | específico Blog | Não [compartilhado]").
 * Composed entirely from @executar/ui primitives (Card, Badge, Text,
 * Heading) — no styling of its own beyond layout.
 */
export function PostCard({ post }: { post: Post }) {
  return (
    <Card
      href={`/blog/${post.slug}`}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 'var(--space-3)' }}
    >
      {/* alignItems: 'flex-start' matters here: a flex column defaults to
          `align-items: stretch`, which was silently stretching the inline
          Badge <span> to the card's full width — only visible once this
          rendered with real content in the browser, not in an isolated
          Storybook shot with more crowded siblings. */}
      <Badge>{post.category}</Badge>
      <Heading level={3} role="title">
        {post.title}
      </Heading>
      <Text role="body-sm" as="p" style={{ color: 'var(--semantic-text-secondary)' }}>
        {post.description}
      </Text>
      <Text role="caption" as="span" style={{ color: 'var(--semantic-text-secondary)' }}>
        {new Date(post.publishedDate).toLocaleDateString('pt-BR')}
        {post.readingTime ? ` · ${post.readingTime} min de leitura` : ''}
      </Text>
    </Card>
  )
}
