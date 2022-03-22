import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Provider from "../components/Provider";

export default {
  title: "@color-ui/Provider",
  component: Provider,
} as ComponentMeta<typeof Provider>;

const Template: ComponentStory<typeof Provider> = (args) => (
  <Provider {...args} />
);

export const ColorProvider = Template.bind({});
ColorProvider.args = {
  backgroundColor: "ef3",
  width: "100%",
  height: "100%",
};
