import type { HTMLAttributes, ReactNode } from "react";
import { cx } from "../../cx.js";

export interface CardProps extends Omit<HTMLAttributes<HTMLElement>, "href"> {
  /** Renders as an <a> and applies the hover elevation — for whole-card-clickable patterns (PostCard). */
  href?: string;
  children: ReactNode;
}

/** Card — design-system/COMPONENT-SPEC.md#card. Surface + 1px border + radius.md, separation by space/border not heavy shadow. */
export function Card({ href, className, children, ...rest }: CardProps) {
  const classes = cx("ex-card", href && "ex-card--interactive", className);
  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}
