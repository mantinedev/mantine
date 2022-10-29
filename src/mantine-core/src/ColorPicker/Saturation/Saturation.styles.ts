import { createStyles, MantineSize } from '@mantine/styles';
import { THUMB_SIZES } from '../Thumb/Thumb.styles';

interface SaturationStyles {
  size: MantineSize;
}

const SATURATION_HEIGHTS = {
  xs: 100,
  sm: 110,
  md: 120,
  lg: 140,
  xl: 160,
};

export default createStyles((theme, { size }: SaturationStyles, getRef) => ({
  saturationThumb: {
    ref: getRef('saturationThumb'),
  },

  saturation: {
    boxSizing: 'border-box',
    position: 'relative',
    height: theme.fn.size({ size, sizes: SATURATION_HEIGHTS }),
    borderRadius: theme.radius.sm,
    margin: theme.fn.size({ size, sizes: THUMB_SIZES }) / 2,
    WebkitTapHighlightColor: 'transparent',

    [`&:focus .${getRef('saturationThumb')}`]: {
      outlineOffset: 2,
      outline:
        theme.focusRing === 'always' || theme.focusRing === 'auto'
          ? `2px solid ${theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 7 : 5]}`
          : 'none',
    },

    [`&:focus:not(:focus-visible) .${getRef('saturationThumb')}`]: {
      outline: theme.focusRing === 'auto' || theme.focusRing === 'never' ? 'none' : undefined,
    },
  },

  saturationOverlay: {
    boxSizing: 'border-box',
    borderRadius: theme.radius.sm,
    ...theme.fn.cover(-theme.fn.size({ size, sizes: THUMB_SIZES }) / 2 - 1),
  },
}));
