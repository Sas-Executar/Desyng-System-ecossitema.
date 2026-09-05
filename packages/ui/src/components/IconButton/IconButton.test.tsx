import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { IconButton } from "./IconButton.js";

describe("IconButton", () => {
  it("requires and forwards an accessible name via aria-label", () => {
    render(<IconButton icon={<span aria-hidden="true">+</span>} aria-label="Adicionar" />);
    expect(screen.getByRole("button", { name: "Adicionar" })).toBeInTheDocument();
  });
});
