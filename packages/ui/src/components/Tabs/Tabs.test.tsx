import { describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Tabs } from "./Tabs.js";

const items = [
  { value: "overview", label: "Overview" },
  { value: "chart", label: "Chart" },
];

describe("Tabs", () => {
  it("marks the active tab with aria-selected and tabIndex 0, others -1", () => {
    render(<Tabs items={items} value="overview" onChange={() => {}} aria-label="Analytics views" />);
    const overview = screen.getByRole("tab", { name: "Overview" });
    const chart = screen.getByRole("tab", { name: "Chart" });
    expect(overview).toHaveAttribute("aria-selected", "true");
    expect(overview).toHaveAttribute("tabIndex", "0");
    expect(chart).toHaveAttribute("aria-selected", "false");
    expect(chart).toHaveAttribute("tabIndex", "-1");
  });

  it("calls onChange with the clicked tab's value", () => {
    const onChange = vi.fn();
    render(<Tabs items={items} value="overview" onChange={onChange} aria-label="Analytics views" />);
    fireEvent.click(screen.getByRole("tab", { name: "Chart" }));
    expect(onChange).toHaveBeenCalledWith("chart");
  });

  it("exposes an accessible name on the tablist", () => {
    render(<Tabs items={items} value="overview" onChange={() => {}} aria-label="Analytics views" />);
    expect(screen.getByRole("tablist", { name: "Analytics views" })).toBeInTheDocument();
  });
});
