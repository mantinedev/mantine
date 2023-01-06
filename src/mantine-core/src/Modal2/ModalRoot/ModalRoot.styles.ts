import { createStyles } from '@mantine/styles';

const sizes = {
  xs: 320,
  sm: 380,
  md: 440,
  lg: 620,
  xl: 780,
};

interface ModalRootStylesParams {
  topOffset: number | string;
}

export default createStyles((theme, { topOffset }: ModalRootStylesParams, { size }) => ({
  content: {
    flex: `0 0 ${theme.fn.sizeUnit(theme.fn.size({ size, sizes }))}`,
    maxWidth: '100%',
  },

  inner: {
    paddingTop: topOffset,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
}));
