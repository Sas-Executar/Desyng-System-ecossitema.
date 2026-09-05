import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import { cx } from "../../cx.js";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

/** Non-interactive Badge (design-system/COMPONENT-SPEC.md#badge--categorypill). */
export function Badge({ className, children, ...rest }: BadgeProps) {
  return (
    <span className={cx("ex-badge", className)} {...rest}>
      {children}
    </span>
  );
}

export interface CategoryPillProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  children: ReactNode;
}

/** Interactive filter pill (astro-blog.md architecture, reused with SOT tokens — not its colors). */
export function CategoryPill({ active = false, className, children, type = "button", ...rest }: CategoryPillProps) {
  return (
    <button type={type} className={cx("ex-badge", className)} data-active={active} aria-pressed={active} {...rest}>
      {children}
    </button>
  );
}
