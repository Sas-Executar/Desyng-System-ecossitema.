import { forwardRef } from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cx } from "../../cx.js";

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  /** Required — an icon-only button must always be announced. design-system/DS-FORM-001-ICO-004. */
  "aria-label": string;
}

/** IconButton — design-system/COMPONENT-SPEC.md#iconbutton. 44x44 min hit area, circular. */
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton(
  { icon, className, type = "button", ...rest },
  ref
) {
  return (
    <button ref={ref} type={type} className={cx("ex-icon-button", className)} {...rest}>
      {icon}
    </button>
  );
});
