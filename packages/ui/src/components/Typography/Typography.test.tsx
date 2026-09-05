import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Text, Heading, Divider } from "./Typography.js";

describe("Text", () => {
  it("renders a <p> by default with the body role class", () => {
    render(<Text>hello</Text>);
    const el = screen.getByText("hello");
    expect(el.tagName).toBe("P");
    expect(el.className).toContain("text-body");
  });

  it("supports polymorphic `as` and custom role", () => {
    render(
      <Text as="span" role="caption">
        meta
      </Text>
    );
    const el = screen.getByText("meta");
    expect(el.tagName).toBe("SPAN");
    expect(el.className).toContain("text-caption");
  });
});

describe("Heading", () => {
  it("renders the correct semantic tag for its level and matching visual role by default", () => {
    render(<Heading level={2}>Título</Heading>);
    const el = screen.getByRole("heading", { level: 2, name: "Título" });
    expect(el.className).toContain("text-h2");
  });

  it("allows the visual role to diverge from the semantic level", () => {
    render(
      <Heading level={2} role="title">
        Subseção
      </Heading>
    );
    const el = screen.getByRole("heading", { level: 2 });
    expect(el.className).toContain("text-title");
  });
});

describe("Divider", () => {
  it("renders an <hr>", () => {
    render(<Divider data-testid="d" />);
    expect(screen.getByTestId("d").tagName).toBe("HR");
  });
});
