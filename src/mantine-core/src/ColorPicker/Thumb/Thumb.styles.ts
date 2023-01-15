import { createStyles, rem, getSize } from '@mantine/styles';

export const THUMB_SIZES = {
  xs: rem(8),
  sm: rem(12),
  md: rem(16),
  lg: rem(20),
  xl: rem(22),
};

export default createStyles((theme, _params, { size }) => {
  const _size = getSize({ size, sizes: THUMB_SIZES });
  return {
    thumb: {
      overflow: 'hidden',
      boxSizing: 'border-box',
      position: 'absolute',
      boxShadow: `0 0 ${rem(1)} rgba(0, 0, 0, .6)`,
      border: `${rem(2)} solid ${theme.white}`,
      backgroundColor: 'transparent',
      width: _size,
      height: _size,
      borderRadius: _size,
    },
  };
});
