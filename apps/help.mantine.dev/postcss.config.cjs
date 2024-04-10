module.exports = {
  plugins: {
    'postcss-preset-mantine': {
      autoRem: true,
    },
    'postcss-simple-vars': {
      variables: {
        xs: '36em',
        sm: '48em',
        md: '62em',
        lg: '75em',
        xl: '88em',
      },
    },
  },
};
