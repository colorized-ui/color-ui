import { ComponentMeta, ComponentStory } from "@storybook/react";
import Input from "../src/Input";

export default {
  title: "@color-ui / forms /input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const PrimaryInput = Template.bind({});
PrimaryInput.args = {
  label: "Name",
};
