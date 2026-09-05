import { describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./Button.js";

describe("Button", () => {
  it("renders its label and responds to click", () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Começar agora</Button>);
    const btn = screen.getByRole("button", { name: "Começar agora" });
    fireEvent.click(btn);
    expect(onClick).toHaveBeenCalledOnce();
  });

  it("defaults to variant=primary, size=md and type=button (never submits a form by accident)", () => {
    render(<Button>Ok</Button>);
    const btn = screen.getByRole("button", { name: "Ok" });
    expect(btn.className).toContain("ex-button--primary");
    expect(btn.className).toContain("ex-button--md");
    expect(btn).toHaveAttribute("type", "button");
  });

  it("loading disables the button, sets aria-busy, and hides children from the click target's text", () => {
    render(<Button loading>Enviar</Button>);
    const btn = screen.getByRole("button");
    expect(btn).toBeDisabled();
    expect(btn).toHaveAttribute("aria-busy", "true");
    expect(btn).not.toHaveTextContent("Enviar");
  });

  it("disabled prevents onClick from firing even without loading", () => {
    const onClick = vi.fn();
    render(
      <Button disabled onClick={onClick}>
        Indisponível
      </Button>
    );
    fireEvent.click(screen.getByRole("button"));
    expect(onClick).not.toHaveBeenCalled();
  });

  it("respects an explicit type override (e.g. type=submit inside a form)", () => {
    render(<Button type="submit">Enviar</Button>);
    expect(screen.getByRole("button")).toHaveAttribute("type", "submit");
  });
});
