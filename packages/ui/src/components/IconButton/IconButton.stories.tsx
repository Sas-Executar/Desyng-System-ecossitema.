import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "./IconButton.js";

const meta: Meta<typeof IconButton> = {
  title: "Components/IconButton",
  component: IconButton,
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = { args: { icon: <span aria-hidden="true">+</span>, "aria-label": "Adicionar" } };
export const Disabled: Story = { args: { icon: <span aria-hidden="true">+</span>, "aria-label": "Adicionar", disabled: true } };
