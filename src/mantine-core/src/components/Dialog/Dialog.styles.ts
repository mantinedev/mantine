import { createMemoStyles, getSizeValue, MantineNumberSize, MantineTheme } from '../../theme';

interface DialogStyles {
  theme: MantineTheme;
  size: MantineNumberSize;
}

const sizes = {
  xs: 160,
  sm: 200,
  md: 340,
  lg: 400,
  xl: 500,
};

export default createMemoStyles({
  root: ({ size }: DialogStyles) => ({
    position: 'relative',
    width: getSizeValue({ size, sizes }),
    maxWidth: '100%',
    minHeight: 50,
  }),

  closeButton: ({ theme }: DialogStyles) => ({
    position: 'absolute',
    top: theme.spacing.xs / 2,
    right: theme.spacing.xs / 2,
  }),
});
