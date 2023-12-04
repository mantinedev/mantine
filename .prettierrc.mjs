/** @type {import("prettier").Config} */
const config = {
  printWidth: 100,
  singleQuote: true,
  trailingComma: 'es5',
  overrides: [
    {
      files: '*.mdx',
      options: {
        printWidth: 70,
      },
    },
  ],
};

export default config;
