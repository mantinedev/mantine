import { createStyles, MantineSize } from '@mantine/styles';

interface ThumbStyles {
  size: MantineSize;
}

export const THUMB_SIZES = {
  xs: 8,
  sm: 12,
  md: 16,
  lg: 20,
  xl: 22,
};

export default createStyles((theme, { size }: ThumbStyles) => {
  const _size = theme.fn.size({ size, sizes: THUMB_SIZES });
  return {
    thumb: {
      overflow: 'hidden',
      boxSizing: 'border-box',
      position: 'absolute',
      boxShadow: '0 0 1px rgba(0, 0, 0, .6)',
      border: `2px solid ${theme.white}`,
      backgroundColor: 'transparent',
      width: _size,
      height: _size,
      borderRadius: _size,
    },
  };
});
