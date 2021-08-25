import { createMemoStyles, getSizeValue, MantineSize, MantineTheme } from '../../../theme';
import { THUMB_SIZES } from '../Thumb/Thumb.styles';

interface HueStyles {
  theme: MantineTheme;
  size: MantineSize;
}

export default createMemoStyles({
  sliderThumb: {},

  slider: ({ theme, size }: HueStyles) => ({
    position: 'relative',
    height: getSizeValue({ size, sizes: THUMB_SIZES }) + 2,
    boxSizing: 'border-box',
    marginLeft: getSizeValue({ size, sizes: THUMB_SIZES }) / 2,
    marginRight: getSizeValue({ size, sizes: THUMB_SIZES }) / 2,
    outline: 0,

    '&:focus $sliderThumb': {
      outline: 'none',
      boxShadow: `0 0 0 1px ${
        theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.white
      }, 0 0 0 3px ${theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 7 : 5]}`,
    },

    '&:focus:not(:focus-visible) $sliderThumb': {
      boxShadow: 'none',
    },
  }),

  sliderOverlay: ({ size }: HueStyles) => ({
    position: 'absolute',
    boxSizing: 'border-box',
    top: 0,
    bottom: 0,
    left: -getSizeValue({ size, sizes: THUMB_SIZES }) / 2 - 1,
    right: -getSizeValue({ size, sizes: THUMB_SIZES }) / 2 - 1,
    borderRadius: 1000,
  }),
});
