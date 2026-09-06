import { RichText, type JSXConvertersFunction } from '@payloadcms/richtext-lexical/react'
import { Callout } from './editorial/Callout'
import type { CalloutType } from '@executar/callout-protocol'

/**
 * The whole point of the Callout protocol (references/source-docs/ADR/
 * ADR-001_PROTOCOLO_NATIVO_CALLOUTS_MULTIPLATAFORMA.md): content authored in
 * Payload (apps/admin/src/blocks/Callout.ts) renders here through the same
 * @executar/callout-protocol registry every Web renderer uses — only the
 * VISUAL rendering is Editorial Hybrid v6's own (src/components/editorial/
 * Callout.tsx), since this app stopped using @executar/ui's component
 * library (see apps/blog/README.md § Editorial Hybrid v6).
 */
type CalloutBlockNode = {
  fields: {
    type: CalloutType
    title?: string | null
    body: unknown
  }
}

const jsxConverters: JSXConvertersFunction = ({ defaultConverters }) => ({
  ...defaultConverters,
  blocks: {
    callout: ({ node }: { node: CalloutBlockNode }) => (
      <Callout type={node.fields.type} title={node.fields.title ?? undefined}>
        <RichText data={node.fields.body as never} converters={jsxConverters} disableContainer />
      </Callout>
    ),
  },
})

/**
 * `className="article"` (not the old design-tokens "prose") — matches
 * .article in editorial-components.css: New York serif body, --read column,
 * yellow-ruled h2, etc. Inline images inserted in the rich text body still
 * render through Payload's default upload converter (not yet restyled to
 * the handoff's .inline-media/.media-box bleed treatment — no seeded post
 * uses an inline image yet to verify a custom converter against; tracked
 * as a follow-up in apps/blog/README.md rather than shipped unverified).
 */
export function RichTextRenderer({ data }: { data: unknown }) {
  return <RichText className="article" data={data as never} converters={jsxConverters} />
}
