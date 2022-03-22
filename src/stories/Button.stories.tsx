import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "../components/Button/Button";

export default {
  title: "@color-ui/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const HelloButton = Template.bind({});
HelloButton.args = {
  label: "Hello Button!",
};

export const Primary = Template.bind({});
Primary.args = {
  label: "as",
  width: "600px",
  height: "40px",
  backgroundColor: "#2b6ca1",
  color: "black",
};
