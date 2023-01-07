import { createStyles } from '@mantine/styles';

const sizes = {
  xs: 320,
  sm: 380,
  md: 440,
  lg: 620,
  xl: 780,
};

interface DrawerRootStylesParams {
  position: 'bottom' | 'left' | 'right' | 'top';
}

export default createStyles((theme, { position }: DrawerRootStylesParams, { size }) => ({
  content: {
    flex:
      position === 'right' || position === 'left'
        ? `0 0 ${theme.fn.sizeUnit(theme.fn.size({ size, sizes }))}`
        : '0 0 100%',
    maxWidth: '100%',
    maxHeight: '100%',
    height:
      position === 'right' || position === 'left'
        ? '100%'
        : theme.fn.sizeUnit(theme.fn.size({ size, sizes })),
    borderRadius: 0,
    overflowY: 'auto',
  },

  inner: {
    display: 'flex',
    justifyContent: position === 'right' ? 'flex-end' : 'flex-start',
    alignItems: position === 'bottom' ? 'flex-end' : 'flex-start',
  },
}));
