import { forwardRef } from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cx } from "../../cx.js";

export type ButtonVariant = "primary" | "secondary" | "tertiary";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  /** design-system/COMPONENT-SPEC.md#button — never mix 3 same-weight buttons in one screen. */
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Renders a spinner and sets aria-busy; the button stays focusable but inert. */
  loading?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  children: ReactNode;
}

/**
 * Button — design-system/COMPONENT-SPEC.md#button.
 * States: default/hover/focus/active/disabled/loading (CSS handles hover/
 * focus/active via :hover/:focus-visible/:active; disabled/loading are
 * explicit props because they change ARIA semantics, not just paint).
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = "primary", size = "md", loading = false, icon, iconPosition = "right", disabled, className, children, ...rest },
  ref
) {
  return (
    <button
      ref={ref}
      type={rest.type ?? "button"}
      className={cx("ex-button", `ex-button--${variant}`, `ex-button--${size}`, className)}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      data-state={loading ? "loading" : undefined}
      {...rest}
    >
      {loading ? (
        <span aria-hidden="true">●●●</span>
      ) : (
        <>
          {icon && iconPosition === "left" ? icon : null}
          {children}
          {icon && iconPosition === "right" ? icon : null}
        </>
      )}
    </button>
  );
});
