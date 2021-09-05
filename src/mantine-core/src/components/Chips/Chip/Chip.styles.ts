import {
  createMemoStyles,
  MantineTheme,
  MantineNumberSize,
  MantineSize,
  getSizeValue,
  getFontStyles,
} from '../../../theme';

export const sizes = {
  xs: 24,
  sm: 28,
  md: 42,
  lg: 50,
  xl: 60,
};

interface ChipStyles {
  theme: MantineTheme;
  radius: MantineNumberSize;
  size: MantineSize;
}

export default createMemoStyles({
  root: ({ theme, radius, size }: ChipStyles) => ({
    ...getFontStyles(theme),
    display: 'inline-flex',
    alignItems: 'center',
    userSelect: 'none',
    backgroundColor: theme.white,
    border: `1px solid ${theme.colors.gray[4]}`,
    borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
    height: getSizeValue({ size, sizes }),
    fontSize: getSizeValue({ size, sizes: theme.fontSizes }),
    lineHeight: 1,
    paddingLeft: 22,
    paddingRight: 22,
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: theme.colors.gray[0],
    },
  }),

  input: {
    display: 'none',
  },
});
