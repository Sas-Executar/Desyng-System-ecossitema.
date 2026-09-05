import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Card } from "./Card.js";

describe("Card", () => {
  it("renders as a div by default", () => {
    render(<Card>content</Card>);
    expect(screen.getByText("content").tagName).toBe("DIV");
  });

  it("renders as an anchor with the interactive class when href is set", () => {
    render(<Card href="/blog/post">content</Card>);
    const el = screen.getByRole("link", { name: "content" });
    expect(el.tagName).toBe("A");
    expect(el.className).toContain("ex-card--interactive");
    expect(el).toHaveAttribute("href", "/blog/post");
  });
});
