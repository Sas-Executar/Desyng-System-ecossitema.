import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button.js";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = { args: { variant: "primary", children: "Começar agora" } };
export const Secondary: Story = { args: { variant: "secondary", children: "Ver documentação" } };
export const Tertiary: Story = { args: { variant: "tertiary", children: "Saiba mais" } };
export const Loading: Story = { args: { variant: "primary", loading: true, children: "Enviando" } };
export const Disabled: Story = { args: { variant: "primary", disabled: true, children: "Indisponível" } };

export const HierarchyRule: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <Button variant="primary">Ação primária</Button>
      <Button variant="secondary">Ação secundária</Button>
      <Button variant="tertiary">Cancelar</Button>
    </div>
  ),
  parameters: {
    docs: { description: { story: "Nunca 3 botões com o mesmo peso visual — ADR-SYSTEM.md, 'Estratégia de botões'." } },
  },
};
