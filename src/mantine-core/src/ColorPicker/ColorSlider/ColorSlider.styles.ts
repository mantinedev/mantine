import { createStyles, getStylesRef, rem } from '@mantine/styles';
import { THUMB_SIZES } from '../Thumb/Thumb.styles';

export default createStyles((theme, _params, { size }) => ({
  sliderThumb: {
    ref: getStylesRef('sliderThumb'),
  },

  slider: {
    position: 'relative',
    height: `calc(${theme.fn.size({ size, sizes: THUMB_SIZES })} + ${rem(2)})`,
    boxSizing: 'border-box',
    marginLeft: `calc(${theme.fn.size({ size, sizes: THUMB_SIZES })} / 2)`,
    marginRight: `calc(${theme.fn.size({ size, sizes: THUMB_SIZES })} / 2)`,
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
    left: `calc(${theme.fn.size({ size, sizes: THUMB_SIZES })} * -1 / 2 - ${rem(1)})`,
    right: `calc(${theme.fn.size({ size, sizes: THUMB_SIZES })} * -1 / 2 - ${rem(1)})`,
    borderRadius: 1000,
  },
}));
