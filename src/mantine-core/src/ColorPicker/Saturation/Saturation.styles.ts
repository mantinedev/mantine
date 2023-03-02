import { createStyles, getStylesRef, rem, getSize } from '@mantine/styles';
import { THUMB_SIZES } from '../Thumb/Thumb.styles';

const SATURATION_HEIGHTS = {
  xs: rem(100),
  sm: rem(110),
  md: rem(120),
  lg: rem(140),
  xl: rem(160),
};

export default createStyles((theme, _params, { size }) => ({
  saturationThumb: {
    ref: getStylesRef('saturationThumb'),
  },

  saturation: {
    boxSizing: 'border-box',
    position: 'relative',
    height: getSize({ size, sizes: SATURATION_HEIGHTS }),
    borderRadius: theme.radius.sm,
    margin: `calc(${getSize({ size, sizes: THUMB_SIZES })} / 2)`,
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
    ...theme.fn.cover(`calc(${getSize({ size, sizes: THUMB_SIZES })} * -1 / 2 - ${rem(1)})`),
  },
}));
