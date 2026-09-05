import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card.js";

const meta: Meta<typeof Card> = { title: "Components/Card", component: Card, parameters: { layout: "centered" } };
export default meta;
type Story = StoryObj<typeof Card>;

export const Static: Story = {
  args: { children: <div style={{ width: 280 }}>Card estático (div)</div> },
};
export const InteractiveLink: Story = {
  args: { href: "#", children: <div style={{ width: 280 }}>Card clicável (PostCard) — hover eleva</div> },
};
