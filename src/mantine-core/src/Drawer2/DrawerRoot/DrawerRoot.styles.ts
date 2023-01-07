import { createStyles } from '@mantine/styles';

const sizes = {
  xs: 320,
  sm: 380,
  md: 440,
  lg: 620,
  xl: 780,
};

export default createStyles((theme, _params, { size }) => ({
  content: {
    flex: `0 0 ${theme.fn.sizeUnit(theme.fn.size({ size, sizes }))}`,
    maxWidth: '100%',
    height: '100%',
    borderRadius: 0,
    overflowY: 'auto',
  },

  inner: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
}));
