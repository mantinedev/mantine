import { createUseStyles } from 'react-jss';
import { MantineTheme, getFontStyles, getFocusStyles, getThemeColor } from '@mantine/theme';

export default createUseStyles({
  tab: ({ theme, reduceMotion }: { theme: MantineTheme; reduceMotion: boolean }) => ({
    ...getFontStyles(theme),
    ...getFocusStyles(theme),
    boxSizing: 'border-box',
    display: 'block',
    height: 40,
    backgroundColor: 'transparent',
    border: 0,
    borderBottom: '2px solid transparent',
    marginBottom: -2,
    padding: [0, theme.spacing.md],
    fontSize: theme.fontSizes.sm,
    cursor: 'pointer',
    transition: reduceMotion ? 'none' : 'border-color 150ms ease, color 150ms ease',

    '&:disabled': {
      cursor: 'not-allowed',
      color: theme.colors.gray[5],
    },
  }),

  tabActive: ({ theme, color }: { theme: MantineTheme; color: string }) => ({
    color: getThemeColor({ theme, color, shade: 6 }),
    borderBottomColor: getThemeColor({ theme, color, shade: 6 }),
  }),

  tabInner: {
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    lineHeight: 1,
    height: 40,
  },

  tabIcon: ({ theme }: { theme: MantineTheme }) => ({
    '&:not(:only-child)': {
      marginRight: theme.spacing.xs,
    },

    // this fixes alignment as by default images and svg are inline and will have extra space on the bottom
    '& *': {
      display: 'block',
    },
  }),
});
