import { describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Badge, CategoryPill } from "./Badge.js";

describe("Badge", () => {
  it("renders as a non-interactive span", () => {
    render(<Badge>Sports</Badge>);
    expect(screen.getByText("Sports").tagName).toBe("SPAN");
  });
});

describe("CategoryPill", () => {
  it("toggles aria-pressed/data-active based on the active prop", () => {
    const { rerender } = render(<CategoryPill active={false}>Coding</CategoryPill>);
    const btn = screen.getByRole("button", { name: "Coding" });
    expect(btn).toHaveAttribute("aria-pressed", "false");
    expect(btn).toHaveAttribute("data-active", "false");

    rerender(<CategoryPill active>Coding</CategoryPill>);
    expect(btn).toHaveAttribute("aria-pressed", "true");
    expect(btn).toHaveAttribute("data-active", "true");
  });

  it("fires onClick like a normal button", () => {
    const onClick = vi.fn();
    render(
      <CategoryPill active={false} onClick={onClick}>
        All
      </CategoryPill>
    );
    fireEvent.click(screen.getByRole("button", { name: "All" }));
    expect(onClick).toHaveBeenCalledOnce();
  });
});
