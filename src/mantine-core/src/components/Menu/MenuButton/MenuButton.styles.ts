import { MantineTheme, getFontStyles, getThemeColor, createMemoStyles } from '../../../theme';

interface MenuButtonStyles {
  theme: MantineTheme;
  color: string;
}

export default createMemoStyles({
  hovered: {},

  root: ({ theme, color }: MenuButtonStyles) => ({
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
    height: 32,
    boxSizing: 'border-box',
    padding: [0, theme.spacing.sm],
    cursor: 'pointer',
    color: color
      ? getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 4 : 6 })
      : theme.colorScheme === 'dark'
      ? theme.colors.dark[0]
      : theme.colors.gray[9],

    '&:disabled': {
      color: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[5],
      cursor: 'not-allowed',
    },

    '&$hovered:not(:disabled), &:not(:disabled):hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[1],

      '&:not(:disabled):active': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2],
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
