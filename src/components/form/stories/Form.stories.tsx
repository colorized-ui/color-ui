import { ComponentMeta, ComponentStory } from "@storybook/react";
import Form from "../src/Form";

export default {
  title: "@color-ui / forms / form",
  component: Form,
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => <Form {...args} />;

export const ColorForm = Template.bind({});
ColorForm.args = {
  label: "hola",
};
