import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Input from "../components/Input";

export default {
  title: "@color-ui/Input",
  component: Input,
  argTypes: {},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  width: "200px",
  height: "30px",
  placeholder: "",
};
