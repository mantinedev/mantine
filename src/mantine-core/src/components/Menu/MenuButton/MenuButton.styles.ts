import {
  MantineTheme,
  getFontStyles,
  getThemeColor,
  createMemoStyles,
  MantineNumberSize,
  getSizeValue,
  hexToRgba,
  MantineColor,
} from '../../../theme';

interface MenuButtonStyles {
  theme: MantineTheme;
  radius: MantineNumberSize;
  color: MantineColor;
}

export default createMemoStyles({
  item: ({ theme, color, radius }: MenuButtonStyles) => ({
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
  }),

  itemHovered: ({ theme, color }: MenuButtonStyles) => ({
    backgroundColor: color
      ? hexToRgba(
          getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 9 : 0 }),
          theme.colorScheme === 'dark' ? 0.2 : 1
        )
      : theme.colorScheme === 'dark'
      ? hexToRgba(theme.colors.dark[3], 0.35)
      : theme.colors.gray[0],
  }),

  itemInner: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  },

  itemBody: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },

  itemIcon: ({ theme }: MenuButtonStyles) => ({
    marginRight: theme.spacing.xs,

    '& *': {
      display: 'block',
    },
  }),

  itemLabel: {
    lineHeight: 1,
  },
});
