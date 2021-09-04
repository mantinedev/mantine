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
  root: ({ size, theme }: DialogStyles) => ({
    position: 'relative',
    width: getSizeValue({ size, sizes }),
    maxWidth: '100%',
    minHeight: 50,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
  }),

  closeButton: ({ theme }: DialogStyles) => ({
    position: 'absolute',
    top: theme.spacing.md / 2,
    right: theme.spacing.md / 2,
  }),
});
