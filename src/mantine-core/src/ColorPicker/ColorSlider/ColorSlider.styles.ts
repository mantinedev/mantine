import { createStyles, MantineSize } from '@mantine/styles';

import { THUMB_SIZES } from '../Thumb/Thumb.styles';

interface ColorSliderStyles {
  size: MantineSize;
}

export default createStyles((theme, { size }: ColorSliderStyles, getRef) => ({
  sliderThumb: {
    ref: getRef('sliderThumb'),
  },

  slider: {
    position: 'relative',
    height: theme.fn.size({ size, sizes: THUMB_SIZES }) + 2,
    boxSizing: 'border-box',
    marginLeft: theme.fn.size({ size, sizes: THUMB_SIZES }) / 2,
    marginRight: theme.fn.size({ size, sizes: THUMB_SIZES }) / 2,
    outline: 0,

    [`&:focus .${getRef('sliderThumb')}`]: {
      outline: 'none',
      boxShadow:
        theme.focusRing === 'always' || theme.focusRing === 'auto'
          ? `0 0 0 2px ${
              theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.white
            }, 0 0 0 4px ${theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 7 : 5]}`
          : undefined,
    },

    [`&:focus:not(:focus-visible) .${getRef('sliderThumb')}`]: {
      boxShadow: theme.focusRing === 'auto' || theme.focusRing === 'never' ? 'none' : undefined,
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
