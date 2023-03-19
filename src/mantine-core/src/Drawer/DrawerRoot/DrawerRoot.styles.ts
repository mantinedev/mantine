import { createStyles, rem, getSize } from '@mantine/styles';

const sizes = {
  xs: rem(320),
  sm: rem(380),
  md: rem(440),
  lg: rem(620),
  xl: rem(780),
};

interface DrawerRootStylesParams {
  position: 'bottom' | 'left' | 'right' | 'top';
}

export default createStyles((theme, { position }: DrawerRootStylesParams, { size }) => ({
  header: {
    zIndex: 1000,
  },

  content: {
    flex:
      position === 'right' || position === 'left' ? `0 0 ${getSize({ size, sizes })}` : '0 0 100%',
    maxWidth: '100%',
    maxHeight: '100%',
    height: position === 'right' || position === 'left' ? '100%' : getSize({ size, sizes }),
    borderRadius: 0,
    overflowY: 'auto',
  },

  inner: {
    display: 'flex',
    justifyContent: position === 'right' ? 'flex-end' : 'flex-start',
    alignItems: position === 'bottom' ? 'flex-end' : 'flex-start',
  },
}));
