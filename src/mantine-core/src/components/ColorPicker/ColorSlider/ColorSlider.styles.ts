import { createStyles, getSizeValue, MantineSize } from '@mantine/styles';

import { THUMB_SIZES } from '../Thumb/Thumb.styles';

interface ColorSliderStyles {
  size: MantineSize;
}

export default createStyles((theme, { size }: ColorSliderStyles, getRef) => {
  const sliderThumb = { ref: getRef() } as const;

  return {
    sliderThumb,

    slider: {
      position: 'relative',
      height: getSizeValue({ size, sizes: THUMB_SIZES }) + 2,
      boxSizing: 'border-box',
      marginLeft: getSizeValue({ size, sizes: THUMB_SIZES }) / 2,
      marginRight: getSizeValue({ size, sizes: THUMB_SIZES }) / 2,
      outline: 0,

      [`&:focus .${sliderThumb.ref}`]: {
        outline: 'none',
        boxShadow: `0 0 0 1px ${
          theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.white
        }, 0 0 0 3px ${theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 7 : 5]}`,
      },

      [`&:focus:not(:focus-visible) .${sliderThumb.ref}`]: {
        boxShadow: 'none',
      },
    },

    sliderOverlay: {
      position: 'absolute',
      boxSizing: 'border-box',
      top: 0,
      bottom: 0,
      left: -getSizeValue({ size, sizes: THUMB_SIZES }) / 2 - 1,
      right: -getSizeValue({ size, sizes: THUMB_SIZES }) / 2 - 1,
      borderRadius: 1000,
    },
  };
});
