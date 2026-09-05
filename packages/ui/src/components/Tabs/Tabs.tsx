import { useId } from "react";
import { cx } from "../../cx.js";

export interface TabItem {
  value: string;
  label: string;
}

export interface TabsProps {
  items: TabItem[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
  "aria-label": string;
}

/**
 * Tabs — design-system/COMPONENT-SPEC.md#tabs. Active state uses an
 * underline indicator + color, never color alone (a11y rule shared with
 * the Callout registry — never depend on color only).
 */
export function Tabs({ items, value, onChange, className, ...rest }: TabsProps) {
  const baseId = useId();
  return (
    <div role="tablist" className={cx("ex-tabs", className)} {...rest}>
      {items.map((item) => {
        const selected = item.value === value;
        return (
          <button
            key={item.value}
            id={`${baseId}-tab-${item.value}`}
            role="tab"
            type="button"
            className="ex-tab"
            aria-selected={selected}
            aria-controls={`${baseId}-panel-${item.value}`}
            tabIndex={selected ? 0 : -1}
            onClick={() => onChange(item.value)}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
