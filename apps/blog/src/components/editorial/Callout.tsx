import type { ReactNode } from 'react'
import { CALLOUT_REGISTRY, type CalloutType } from '@executar/callout-protocol'

export interface CalloutProps {
  type: CalloutType
  title?: string
  children: ReactNode
}

/**
 * Callout — Editorial Hybrid v6's own renderer for @executar/callout-
 * protocol's CalloutNode. The Editorial Hybrid handoff doesn't spec a
 * Callout component at all (it comes from ADR-001, a different track), so
 * this is a deliberate, minimal design built to fit the system's own
 * grammar rather than reusing @executar/ui's: one consistent treatment
 * (soft surface, yellow left border, matching the yellow accent used
 * everywhere else — article h2 rule, pullquote, active drawer link) for
 * every type, no per-type color — Editorial Hybrid has exactly one accent
 * color by design (handoff § Design Tokens: "amarelo... no máximo 1 vez
 * por tela" as an attention color, never a taxonomy of colors per meaning).
 * `type` is still validated against CALLOUT_REGISTRY (the ADR-001 schema/
 * registry stays the single source for which types exist and their
 * alert-vs-note role), just not for color.
 */
export function Callout({ type, title, children }: CalloutProps) {
  const entry = CALLOUT_REGISTRY[type]
  const role = entry.role === 'alert' ? 'alert' : undefined

  return (
    <div className="ex-callout" data-callout-type={type} role={role}>
      {title && <div className="ex-callout__title">{title}</div>}
      <div className="ex-callout__body">{children}</div>
    </div>
  )
}
