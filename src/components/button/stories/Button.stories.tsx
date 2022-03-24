import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "../src/Button";

export default {
  title: "@color-ui / forms / button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary",
};
export const Secondary = Template.bind({});
Template.args = {
  label: "Secondary",
};
