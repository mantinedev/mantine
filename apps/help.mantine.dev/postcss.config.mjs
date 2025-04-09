/** @type {import('postcss-load-config').Config} */
export default {
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
