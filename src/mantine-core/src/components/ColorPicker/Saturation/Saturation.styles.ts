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

export default createStyles((theme, { size }: SaturationStyles, getRef) => {
  const position = -theme.fn.size({ size, sizes: THUMB_SIZES }) / 2 - 1;
  const saturationThumb = { ref: getRef('saturationThumb') } as const;

  return {
    saturationThumb,

    saturation: {
      boxSizing: 'border-box',
      position: 'relative',
      height: theme.fn.size({ size, sizes: SATURATION_HEIGHTS }),
      borderRadius: theme.radius.sm,
      margin: theme.fn.size({ size, sizes: THUMB_SIZES }) / 2,
      WebkitTapHighlightColor: 'transparent',

      [`&:focus .${saturationThumb.ref}`]: {
        outline: 'none',
        boxShadow: `0 0 0 1px ${
          theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.white
        }, 0 0 0 3px ${theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 7 : 5]}`,
      },

      [`&:focus:not(:focus-visible) .${saturationThumb.ref}`]: {
        boxShadow: 'none',
      },
    },

    saturationOverlay: {
      position: 'absolute',
      boxSizing: 'border-box',
      borderRadius: theme.radius.sm,
      top: position,
      left: position,
      right: position,
      bottom: position,
    },
  };
});
