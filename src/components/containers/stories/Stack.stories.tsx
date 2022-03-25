import { ComponentMeta, ComponentStory } from "@storybook/react";
import Stack from "../src/Stack";

export default {
  title: "@color-ui / containers / stack",
  component: Stack,
} as ComponentMeta<typeof Stack>;

const Template: ComponentStory<typeof Stack> = (args) => <Stack {...args} />;

export const ColStack = Template.bind({});
ColStack.args = {
  label: "Primary",
};
export const RowStack = Template.bind({});
RowStack.args = {
  label: "Secondary",
};
