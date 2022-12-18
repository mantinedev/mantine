import { createStyles, MantineSize, getStylesRef } from '@mantine/styles';
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

export default createStyles((theme, { size }: SaturationStyles) => ({
  saturationThumb: {
    ref: getStylesRef('saturationThumb'),
  },

  saturation: {
    boxSizing: 'border-box',
    position: 'relative',
    height: theme.fn.size({ size, sizes: SATURATION_HEIGHTS }),
    borderRadius: theme.radius.sm,
    margin: theme.fn.size({ size, sizes: THUMB_SIZES }) / 2,
    WebkitTapHighlightColor: 'transparent',

    [`&:focus .${getStylesRef('saturationThumb')}`]: {
      ...(theme.focusRing === 'always' || theme.focusRing === 'auto'
        ? theme.focusRingStyles.styles(theme)
        : theme.focusRingStyles.resetStyles(theme)),
    },

    [`&:focus:not(:focus-visible) .${getStylesRef('saturationThumb')}`]: {
      ...(theme.focusRing === 'auto' || theme.focusRing === 'never'
        ? theme.focusRingStyles.resetStyles(theme)
        : null),
    },
  },

  saturationOverlay: {
    boxSizing: 'border-box',
    borderRadius: theme.radius.sm,
    ...theme.fn.cover(-theme.fn.size({ size, sizes: THUMB_SIZES }) / 2 - 1),
  },
}));
