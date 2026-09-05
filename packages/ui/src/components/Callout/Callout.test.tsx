import { describe, expect, it } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { CALLOUT_TYPES, resolveCalloutTokens } from "@executar/callout-protocol";
import { Callout } from "./Callout.js";

describe("Callout", () => {
  it.each(CALLOUT_TYPES)("renders %s with role=alert only for warning/danger", (type) => {
    render(<Callout type={type}>corpo</Callout>);
    const expectedRole = resolveCalloutTokens(type).role === "alert" ? "alert" : "note";
    expect(screen.getByRole(expectedRole)).toBeInTheDocument();
  });

  it("renders the title when provided", () => {
    render(
      <Callout type="warning" title="Atenção">
        O relatório contém uma limitação.
      </Callout>
    );
    expect(screen.getByText("Atenção")).toBeInTheDocument();
    expect(screen.getByText(/limitação/)).toBeInTheDocument();
  });

  it("applies the registry's resolved colors as inline CSS custom properties, not hardcoded values", () => {
    const { container } = render(<Callout type="tip">dica</Callout>);
    const root = container.firstElementChild as HTMLElement;
    const resolved = resolveCalloutTokens("tip");
    expect(root.style.getPropertyValue("--ex-callout-background")).toBe(resolved.background);
    expect(root.style.getPropertyValue("--ex-callout-icon-color")).toBe(resolved.iconColor);
  });

  it("collapsible: starts open by default and toggles on trigger click", () => {
    render(
      <Callout type="note" title="Mais informações" collapsible>
        conteúdo escondível
      </Callout>
    );
    expect(screen.getByText("conteúdo escondível")).toBeInTheDocument();
    const trigger = screen.getByRole("button", { name: /Mais informações/ });
    expect(trigger).toHaveAttribute("aria-expanded", "true");

    fireEvent.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByText("conteúdo escondível")).not.toBeInTheDocument();
  });

  it("cta type has no icon (registry declares icon: null) and does not crash", () => {
    const { container } = render(<Callout type="cta">Fazer algo</Callout>);
    expect(container.querySelector("svg")).toBeNull();
  });
});
