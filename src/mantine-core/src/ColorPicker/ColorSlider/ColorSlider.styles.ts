import { createStyles, MantineSize, getStylesRef } from '@mantine/styles';
import { THUMB_SIZES } from '../Thumb/Thumb.styles';

interface ColorSliderStyles {
  size: MantineSize;
}

export default createStyles((theme, { size }: ColorSliderStyles) => ({
  sliderThumb: {
    ref: getStylesRef('sliderThumb'),
  },

  slider: {
    position: 'relative',
    height: theme.fn.size({ size, sizes: THUMB_SIZES }) + 2,
    boxSizing: 'border-box',
    marginLeft: theme.fn.size({ size, sizes: THUMB_SIZES }) / 2,
    marginRight: theme.fn.size({ size, sizes: THUMB_SIZES }) / 2,
    outline: 0,

    [`&:focus .${getStylesRef('sliderThumb')}`]: {
      ...(theme.focusRing === 'always' || theme.focusRing === 'auto'
        ? theme.focusRingStyles.styles(theme)
        : theme.focusRingStyles.resetStyles(theme)),
    },

    [`&:focus:not(:focus-visible) .${getStylesRef('sliderThumb')}`]: {
      ...(theme.focusRing === 'auto' || theme.focusRing === 'never'
        ? theme.focusRingStyles.resetStyles(theme)
        : null),
    },
  },

  sliderOverlay: {
    position: 'absolute',
    boxSizing: 'border-box',
    top: 0,
    bottom: 0,
    left: -theme.fn.size({ size, sizes: THUMB_SIZES }) / 2 - 1,
    right: -theme.fn.size({ size, sizes: THUMB_SIZES }) / 2 - 1,
    borderRadius: 1000,
  },
}));
