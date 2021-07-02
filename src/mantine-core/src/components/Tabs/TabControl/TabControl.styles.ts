import {
  createMemoStyles,
  MantineTheme,
  getFontStyles,
  getFocusStyles,
  getThemeColor,
} from '../../../theme';

interface TabControlStyles {
  theme: MantineTheme;
  reduceMotion: boolean;
  color: string;
}

export default createMemoStyles({
  tabActive: {},
  tabLabel: {},

  root: ({ theme }: TabControlStyles) => ({
    ...getFontStyles(theme),
    ...getFocusStyles(theme),
    WebkitTapHighlightColor: 'transparent',
    boxSizing: 'border-box',
    display: 'block',
    height: 40,
    backgroundColor: 'transparent',
    border: 0,
    padding: [0, theme.spacing.md],
    fontSize: theme.fontSizes.sm,
    cursor: 'pointer',

    '&:disabled': {
      cursor: 'not-allowed',
      color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
    },
  }),

  default: ({ theme, reduceMotion, color }: TabControlStyles) => ({
    transition: reduceMotion ? 'none' : 'border-color 150ms ease, color 150ms ease',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    borderBottom: '2px solid transparent',

    '&$tabActive': {
      color: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 6 : 7 }),
      borderBottomColor: getThemeColor({
        theme,
        color,
        shade: theme.colorScheme === 'dark' ? 6 : 7,
      }),
    },
  }),

  outline: ({ theme }: TabControlStyles) => ({
    borderTopRightRadius: theme.radius.sm,
    borderTopLeftRadius: theme.radius.sm,
    border: '1px solid transparent',
    borderBottom: 0,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],

    '&$tabActive': {
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
      borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
      background: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    },
  }),

  pills: ({ theme, color }: TabControlStyles) => ({
    borderRadius: 1000,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
    fontSize: theme.fontSizes.md,

    '&$tabActive': {
      color: theme.white,
      background: getThemeColor({ theme, color, shade: 7 }),
    },
  }),

  tabInner: {
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: 1,
    height: '100%',
  },

  tabIcon: ({ theme }: TabControlStyles) => ({
    '&:not(:only-child)': {
      marginRight: theme.spacing.xs,
    },

    // this fixes alignment as by default images and svg are inline and will have extra space on the bottom
    '& *': {
      display: 'block',
    },
  }),
});
