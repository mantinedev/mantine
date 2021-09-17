import {
  createMemoStyles,
  MantineTheme,
  getSharedColorScheme,
  MantineNumberSize,
  getSizeValue,
  MantineColor,
  getFocusStyles,
} from '../../theme';

interface PaginationStyles {
  theme: MantineTheme;
  size: MantineNumberSize;
  radius: MantineNumberSize;
  color: MantineColor;
}

const sizes = {
  xs: 22,
  sm: 26,
  md: 32,
  lg: 38,
  xl: 44,
};

export default createMemoStyles({
  item: ({ theme, size, radius }: PaginationStyles) => ({
    ...getFocusStyles(theme),
    cursor: 'pointer',
    userSelect: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 500,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[3]
    }`,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    height: getSizeValue({ size, sizes }),
    width: getSizeValue({ size, sizes }),
    fontSize: getSizeValue({ size, sizes: theme.fontSizes }),
    borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
    lineHeight: 1,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white,

    '&:active:not(:disabled):not($dots)': {
      transform: 'translateY(1px)',
    },

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
      color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
    },
  }),

  active: ({ theme, color }: PaginationStyles) => {
    const colors = getSharedColorScheme({
      color,
      theme,
      variant: 'filled',
    });

    return {
      borderColor: 'transparent',
      color: colors.color,
      backgroundColor: colors.background,
    };
  },

  dots: () => ({
    cursor: 'default',
    borderColor: 'transparent',
    backgroundColor: 'transparent',
  }),
});
