import { createStyles } from '@mantine/styles';

const sizes = {
  xs: 320,
  sm: 380,
  md: 440,
  lg: 620,
  xl: 780,
};

export default createStyles((theme, params, { size }) => ({
  content: {
    width: theme.fn.size({ size, sizes }),
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));
