import { createMemoStyles, MantineSize, MantineTheme, getSizeValue } from '../../../theme';
import { THUMB_SIZES } from '../Thumb/Thumb.styles';

interface SaturationStyles {
  theme: MantineTheme;
  size: MantineSize;
}

const SATURATION_HEIGHTS = {
  xs: 100,
  sm: 110,
  md: 120,
  lg: 140,
  xl: 160,
};

export default createMemoStyles({
  saturationThumb: {},

  saturation: ({ theme, size }: SaturationStyles) => ({
    position: 'relative',
    height: getSizeValue({ size, sizes: SATURATION_HEIGHTS }),
    borderRadius: theme.radius.sm,
    margin: getSizeValue({ size, sizes: THUMB_SIZES }) / 2,
    WebkitTapHighlightColor: 'transparent',

    '&:focus $saturationThumb': {
      outline: 'none',
      boxShadow: `0 0 0 1px ${
        theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.white
      }, 0 0 0 3px ${theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 7 : 5]}`,
    },

    '&:focus:not(:focus-visible) $saturationThumb': {
      boxShadow: 'none',
    },
  }),

  saturationOverlay: ({ theme, size }: SaturationStyles) => ({
    position: 'absolute',
    borderRadius: theme.radius.sm,
    top: -getSizeValue({ size, sizes: THUMB_SIZES }) / 2 - 1,
    left: -getSizeValue({ size, sizes: THUMB_SIZES }) / 2 - 1,
    right: -getSizeValue({ size, sizes: THUMB_SIZES }) / 2 - 1,
    bottom: -getSizeValue({ size, sizes: THUMB_SIZES }) / 2 - 1,
  }),
});
