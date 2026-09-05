import type { Block } from 'payload'
import { CALLOUT_TYPES } from '@executar/callout-protocol'

/**
 * CalloutBlock — Lexical block per references/source-docs/ADR/ADR-001_PROTOCOLO_NATIVO_CALLOUTS_MULTIPLATAFORMA.md
 * section 9 ("Payload CMS"). Fields match the ADR exactly: type (select,
 * required), title (text), body (richText, required). `type` options are
 * imported from @executar/callout-protocol's CALLOUT_TYPES — the CMS schema
 * and the runtime schema can never drift apart because they share one source.
 */
export const CalloutBlock: Block = {
  slug: 'callout',
  labels: { singular: 'Callout', plural: 'Callouts' },
  interfaceName: 'CalloutBlock',
  fields: [
    {
      name: 'type',
      type: 'select',
      required: true,
      options: CALLOUT_TYPES.map((value) => ({ label: value, value })),
    },
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'body',
      type: 'richText',
      required: true,
    },
  ],
}
