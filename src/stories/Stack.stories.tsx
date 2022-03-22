import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Stack from "../components/Containers/Stack";

export default {
  title: "@color-ui/Stack",
  component: Stack,
} as ComponentMeta<typeof Stack>;

const Template: ComponentStory<typeof Stack> = (args) => <Stack {...args} />;

export const ColorStack = Template.bind({});
ColorStack.args = {
  backgroundColor: "#efe",
  width: "500px",
  height: "500px",
};

export const VerticalStack = Template.bind({});
VerticalStack.args = {
  flexDirection: "row",
};

export const HorizontalStack = Template.bind({});
HorizontalStack.args = {
  flexDirection: "column",
};
