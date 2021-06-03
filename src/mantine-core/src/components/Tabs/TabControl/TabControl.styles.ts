import {
  createMemoStyles,
  MantineTheme,
  getFontStyles,
  getFocusStyles,
  getThemeColor,
} from '../../../theme';

interface TabControlStylesProps {
  theme: MantineTheme;
  reduceMotion: boolean;
  color: string;
}

export default createMemoStyles({
  active: {},
  label: {},

  root: ({ theme }: TabControlStylesProps) => ({
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

  default: ({ theme, reduceMotion, color }: TabControlStylesProps) => ({
    transition: reduceMotion ? 'none' : 'border-color 150ms ease, color 150ms ease',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    borderBottom: '2px solid transparent',

    '&$active': {
      color: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 4 : 6 }),
      borderBottomColor: getThemeColor({
        theme,
        color,
        shade: theme.colorScheme === 'dark' ? 4 : 6,
      }),
    },
  }),

  outline: ({ theme }: TabControlStylesProps) => ({
    borderTopRightRadius: theme.radius.sm,
    borderTopLeftRadius: theme.radius.sm,
    border: '1px solid transparent',
    borderBottom: 0,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],

    '&$active': {
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
      borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
      background: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    },
  }),

  inner: {
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: 1,
    height: 40,
  },

  icon: ({ theme }: TabControlStylesProps) => ({
    '&:not(:only-child)': {
      marginRight: theme.spacing.xs,
    },

    // this fixes alignment as by default images and svg are inline and will have extra space on the bottom
    '& *': {
      display: 'block',
    },
  }),
});
