/**
 * CalloutNode schema — ports references/source-docs/ADR/ADR-001_PROTOCOLO_NATIVO_CALLOUTS_MULTIPLATAFORMA.md
 * section 5 ("Contrato semântico") to real, validated code. This is the
 * SEMANTIC MODEL layer of the ADR-001 pipeline:
 *
 *   AUTHORING (Markdown | Payload CMS | IA | API)
 *     -> NORMALIZATION (this schema + a validator)
 *     -> SEMANTIC MODEL (CalloutNode)
 *     -> RENDERERS (Web | Native | Print)
 *
 * Content NEVER carries color/CSS — only `type` (see registry.ts for how
 * `type` resolves to design tokens).
 */
import { z } from "zod";

export const CALLOUT_TYPES = [
  "info",
  "tip",
  "success",
  "warning",
  "danger",
  "question",
  "example",
  "note",
  "definition",
  "source",
  "cta",
  "accessibility",
] as const;

export const CalloutTypeSchema = z.enum(CALLOUT_TYPES);
export type CalloutType = z.infer<typeof CalloutTypeSchema>;

export const CalloutSeveritySchema = z.enum(["low", "medium", "high", "critical"]);
export const CalloutPrintModeSchema = z.enum(["full", "compact", "hide"]);

/**
 * `body` is intentionally untyped (`z.unknown()`) here — in the real pipeline
 * it is RichContent (Payload Lexical JSON, a Markdown AST/HAST node, or plain
 * React children), which is renderer-specific. Validating its *shape* is the
 * job of whichever renderer/pipeline stage consumes it, not this shared schema.
 */
export const CalloutNodeSchema = z.object({
  id: z.string().optional(),
  type: CalloutTypeSchema,
  title: z.string().optional(),
  // z.unknown() alone accepts `undefined`, which would silently let `body`
  // be omitted — caught by registry.test.ts ("rejects a node missing body").
  // The refine enforces the field's actual presence per ADR-001 §5, while
  // still accepting any RichContent shape (Payload Lexical JSON, a Markdown
  // AST node, or plain React children) since that shape is renderer-specific.
  body: z.unknown().refine((v) => v !== undefined, { message: "body is required" }),
  icon: z.string().optional(),
  severity: CalloutSeveritySchema.optional(),
  collapsible: z.boolean().optional(),
  defaultOpen: z.boolean().optional(),
  href: z.string().optional(),
  source: z.string().optional(),
  analyticsKey: z.string().optional(),
  printMode: CalloutPrintModeSchema.optional(),
});

export type CalloutNode = z.infer<typeof CalloutNodeSchema>;

export function parseCalloutNode(input: unknown): CalloutNode {
  return CalloutNodeSchema.parse(input);
}
