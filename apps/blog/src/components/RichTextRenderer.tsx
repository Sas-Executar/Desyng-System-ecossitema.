import { RichText, type JSXConvertersFunction } from '@payloadcms/richtext-lexical/react'
import { Callout } from '@executar/ui'
import type { CalloutType } from '@executar/callout-protocol'

/**
 * The whole point of the Callout protocol (references/source-docs/ADR/
 * ADR-001_PROTOCOLO_NATIVO_CALLOUTS_MULTIPLATAFORMA.md): content authored in
 * Payload (apps/admin/src/blocks/Callout.ts) renders here with the exact
 * same @executar/ui <Callout> — and therefore the exact same
 * @executar/callout-protocol token registry — as any other Web renderer.
 * Nothing about appearance is decided in this file.
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

export function RichTextRenderer({ data }: { data: unknown }) {
  return <RichText className="prose" data={data as never} converters={jsxConverters} />
}
