module.exports = {
  plugins: {
    'postcss-flexbugs-fixes': {},
    'postcss-preset-mantine': {},
    'postcss-simple-vars': {
      variables: {
        'mantine-breakpoint-xs': '36em',
        'mantine-breakpoint-sm': '48em',
        'mantine-breakpoint-md': '62em',
        'mantine-breakpoint-lg': '75em',
        'mantine-breakpoint-xl': '88em',
        'docs-navbar-breakpoint': '47.5em',
        'docs-mdx-breakpoint': '67.5em',
      },
    },
  },
};
