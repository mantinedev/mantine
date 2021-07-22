import {
  MantineTheme,
  getFontStyles,
  getThemeColor,
  createMemoStyles,
  MantineNumberSize,
  getSizeValue,
} from '../../../theme';

interface MenuButtonStyles {
  theme: MantineTheme;
  radius: MantineNumberSize;
  color: string;
}

export default createMemoStyles({
  hovered: {},

  root: ({ theme, color, radius }: MenuButtonStyles) => ({
    ...getFontStyles(theme),
    WebkitTapHighlightColor: 'transparent',
    fontSize: theme.fontSizes.sm,
    border: 0,
    backgroundColor: 'transparent',
    outline: 0,
    width: '100%',
    textAlign: 'left',
    display: 'inline-block',
    textDecoration: 'none',
    boxSizing: 'border-box',
    padding: [theme.spacing.xs, theme.spacing.sm],
    cursor: 'pointer',
    borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
    color: color
      ? getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 5 : 7 })
      : theme.colorScheme === 'dark'
      ? theme.colors.dark[0]
      : theme.black,

    '&:disabled': {
      color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
      cursor: 'not-allowed',
    },

    '&$hovered:not(:disabled), &:not(:disabled):hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],

      '&:not(:disabled):active': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[1],
      },
    },
  }),

  inner: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  },

  body: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },

  icon: ({ theme }: MenuButtonStyles) => ({
    marginRight: theme.spacing.xs,

    '& *': {
      display: 'block',
    },
  }),

  label: {
    lineHeight: 1,
  },
});
