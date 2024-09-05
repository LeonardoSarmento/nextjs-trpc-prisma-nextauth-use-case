/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  semi: true,
  trailingComma: "all",
  singleQuote: true,
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  plugins: ["prettier-plugin-tailwindcss"],
};

export default config;
