import { Badge, Text } from '@executar/ui'
import type { Post } from '../lib/payload-client'

/** MetaBar — específico do Blog (design-system/DESIGN_TO_CODE_MAP.md). */
export function MetaBar({ post }: { post: Post }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
      <Badge>{post.category}</Badge>
      <Text role="label" as="span" style={{ color: 'var(--semantic-text-secondary)', textTransform: 'none' }}>
        {new Date(post.publishedDate).toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' })}
      </Text>
      {post.readingTime ? (
        <Text role="label" as="span" style={{ color: 'var(--semantic-text-secondary)', textTransform: 'none' }}>
          {post.readingTime} min de leitura
        </Text>
      ) : null}
    </div>
  )
}
