import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Badge, CategoryPill } from "./Badge.js";

const meta: Meta<typeof Badge> = { title: "Components/Badge", component: Badge, parameters: { layout: "centered" } };
export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = { args: { children: "Sports" } };

export const CategoryPillFilterRow: StoryObj = {
  render: () => {
    const categories = ["All", "Business", "Entertainment", "Sports", "Health"];
    const [active, setActive] = useState("All");
    return (
      <div style={{ display: "flex", gap: 8 }}>
        {categories.map((c) => (
          <CategoryPill key={c} active={active === c} onClick={() => setActive(c)}>
            {c}
          </CategoryPill>
        ))}
      </div>
    );
  },
};
