import React from "react";
import Form from "../components/Form";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "@color-ui/Form",
  component: Form,
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => <Form {...args} />;

export const PrimaryForm = Template.bind({});
PrimaryForm.args = {
  height: "100px",
  width: "100px",
  backgroundColor: "#efe",
};
