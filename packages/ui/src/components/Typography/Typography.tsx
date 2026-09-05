import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cx } from "../../cx.js";

export type TextRole = "body-lg" | "body" | "body-sm" | "caption" | "label" | "overline" | "mono-data";

export interface TextProps extends HTMLAttributes<HTMLElement> {
  role?: TextRole;
  as?: ElementType;
  children: ReactNode;
}

/** Text — design-system/styles/typography.css .text-* classes, as a component. */
export function Text({ role = "body", as: Component = "p", className, children, ...rest }: TextProps) {
  return (
    <Component className={cx("ex-text", `text-${role}`, className)} {...rest}>
      {children}
    </Component>
  );
}

export type HeadingLevel = 1 | 2 | 3;
export type HeadingRole = "display" | "h1" | "h2" | "h3" | "title" | "subtitle";

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level: HeadingLevel;
  /** Visual scale — defaults to matching the semantic level, but content hierarchy (level) and visual size (role) are allowed to diverge (e.g. an h2 styled as title). */
  role?: HeadingRole;
  children: ReactNode;
}

const LEVEL_TO_ROLE: Record<HeadingLevel, HeadingRole> = { 1: "h1", 2: "h2", 3: "h3" };

/** Heading — never skip a level for visual reasons; use `role` to restyle without breaking the outline. */
export function Heading({ level, role, className, children, ...rest }: HeadingProps) {
  const Component = `h${level}` as ElementType;
  return (
    <Component className={cx("ex-heading", `text-${role ?? LEVEL_TO_ROLE[level]}`, className)} {...rest}>
      {children}
    </Component>
  );
}

export function Divider(props: HTMLAttributes<HTMLHRElement>) {
  return <hr className={cx("ex-divider", props.className)} {...props} />;
}
