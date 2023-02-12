const config = {
  "stories": [
    "../src/**/*.mdx"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": {
    "name": "@storybook/react-vite",
  },
  "docs": {
    "docsPage": true
  },
}

export default config