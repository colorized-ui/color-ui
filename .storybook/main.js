module.exports = {
  stories: [
    "../package/**/*.stories.mdx",
    "../package/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
    // "@storybook/addon-postcss",
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
};
