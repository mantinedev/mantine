import { createUseStyles } from 'react-jss';
import { MantineTheme, getFontStyles, getFocusStyles } from '@mantine/theme';

export default createUseStyles({
  pane: ({ theme, reduceMotion }: { theme: MantineTheme; reduceMotion: boolean }) => ({
    ...getFontStyles(theme),
    ...getFocusStyles(theme),
    outline: 0,
    backgroundColor: 'transparent',
    border: 0,
    borderBottom: '2px solid transparent',
    marginBottom: -2,
    padding: [theme.spacing.xs, theme.spacing.md],
    fontSize: theme.fontSizes.sm,
    cursor: 'pointer',
    transition: reduceMotion ? 'none' : 'border-color 150ms ease, color 150ms ease',
  }),

  paneActive: ({ theme }: { theme: MantineTheme }) => ({
    color: theme.colors[theme.primaryColor][6],
    borderBottomColor: theme.colors[theme.primaryColor][6],
  }),

  panes: ({ theme }: { theme: MantineTheme }) => ({
    borderBottom: `2px solid ${theme.colors.gray[3]}`,
  }),

  body: ({ theme }: { theme: MantineTheme }) => ({
    paddingTop: theme.spacing.sm,
  }),
});
