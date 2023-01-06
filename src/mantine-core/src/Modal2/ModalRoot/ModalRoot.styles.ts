import { createStyles } from '@mantine/styles';

const sizes = {
  xs: 320,
  sm: 380,
  md: 440,
  lg: 620,
  xl: 780,
};

interface ModalRootStylesParams {
  yOffset: number | string;
  xOffset: number | string;
}

export default createStyles((theme, { yOffset }: ModalRootStylesParams, { size }) => ({
  content: {
    flex: `0 0 ${theme.fn.sizeUnit(theme.fn.size({ size, sizes }))}`,
    maxWidth: '100%',
    maxHeight: `calc(100vh - (${theme.fn.sizeUnit(yOffset)} * 2))`,
    overflowY: 'auto',
  },

  inner: {
    paddingTop: yOffset,
    paddingBottom: yOffset,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
}));
