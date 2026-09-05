import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "./Tabs.js";

const meta: Meta<typeof Tabs> = { title: "Components/Tabs", component: Tabs };
export default meta;

export const Default: StoryObj = {
  render: () => {
    const [value, setValue] = useState("overview");
    return (
      <Tabs
        aria-label="Analytics views"
        value={value}
        onChange={setValue}
        items={[
          { value: "overview", label: "Overview" },
          { value: "chart", label: "Chart" },
          { value: "raw", label: "Raw data" },
        ]}
      />
    );
  },
};
