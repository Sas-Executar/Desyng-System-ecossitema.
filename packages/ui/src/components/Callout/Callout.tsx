import { useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { resolveCalloutTokens } from "@executar/callout-protocol";
import type { CalloutType } from "@executar/callout-protocol";
import { cx } from "../../cx.js";
import { CALLOUT_ICONS } from "./icons.js";

export interface CalloutProps {
  type: CalloutType;
  title?: string;
  children: ReactNode;
  collapsible?: boolean;
  defaultOpen?: boolean;
  className?: string;
}

/**
 * Callout — the Web renderer for @executar/callout-protocol's CalloutNode.
 * Appearance comes ENTIRELY from CALLOUT_REGISTRY (via resolveCalloutTokens),
 * never from a prop or hardcoded value here — that's the whole point of the
 * ADR-001 protocol (design-system/components/callout-protocol.md).
 */
export function Callout({ type, title, children, collapsible = false, defaultOpen = true, className }: CalloutProps) {
  const [open, setOpen] = useState(defaultOpen);
  const resolved = resolveCalloutTokens(type);
  const Icon = resolved.icon ? CALLOUT_ICONS[resolved.icon] : null;

  const style: CSSProperties & Record<string, string> = {
    "--ex-callout-background": resolved.background,
    "--ex-callout-border": resolved.border ?? "transparent",
    "--ex-callout-foreground": resolved.foreground,
    "--ex-callout-icon-color": resolved.iconColor,
  };

  const role = resolved.role === "alert" ? "alert" : "note";
  const body = (
    <>
      {title && <div className="ex-callout__title">{title}</div>}
      <div>{children}</div>
    </>
  );

  return (
    <div className={cx("ex-callout", className)} style={style} role={role} data-callout-type={type}>
      {Icon && <Icon className="ex-callout__icon" />}
      <div style={{ flex: 1, minWidth: 0 }}>
        {collapsible ? (
          <>
            <button type="button" className="ex-callout__trigger" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
              {title ?? "Detalhes"}
              <span aria-hidden="true">{open ? "−" : "+"}</span>
            </button>
            {open && <div>{children}</div>}
          </>
        ) : (
          body
        )}
      </div>
    </div>
  );
}
