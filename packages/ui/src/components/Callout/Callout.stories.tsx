import type { Meta, StoryObj } from "@storybook/react";
import { CALLOUT_TYPES } from "@executar/callout-protocol";
import { Callout } from "./Callout.js";

const meta: Meta<typeof Callout> = { title: "Components/Callout", component: Callout };
export default meta;
type Story = StoryObj<typeof Callout>;

export const Warning: Story = {
  args: { type: "warning", title: "Atenção", children: "O relatório contém uma limitação que precisa ser considerada." },
};

export const Tip: Story = {
  args: { type: "tip", title: "Como reduzir carga cognitiva", children: "Divida a atividade em unidades menores." },
};

export const Collapsible: Story = {
  args: { type: "note", title: "Mais informações", collapsible: true, defaultOpen: false, children: "Conteúdo adicional escondido por padrão." },
};

export const AllTypes: StoryObj = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 480 }}>
      {CALLOUT_TYPES.map((type) => (
        <Callout key={type} type={type} title={type}>
          Exemplo de callout do tipo "{type}".
        </Callout>
      ))}
    </div>
  ),
};
