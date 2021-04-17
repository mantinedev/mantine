import { createUseStyles } from 'react-jss';
import { MantineTheme, getThemeColor } from '@mantine/theme';

export default createUseStyles({
  withIcon: {
    paddingLeft: '10px !important',

    '&::before': {
      display: 'none !important',
    },
  },

  notification: ({ color, theme }: { color: string; theme: MantineTheme }) => ({
    boxSizing: 'border-box',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 22,
    paddingRight: 5,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 4,
    border: `1px solid ${theme.colors.gray[2]}`,

    '&::before': {
      content: "''",
      display: 'block',
      position: 'absolute',
      width: 6,
      top: 4,
      bottom: 4,
      left: 4,
      borderRadius: 4,
      backgroundColor: getThemeColor({ theme, color, shade: 5 }),
    },

    '& $icon': {
      backgroundColor: getThemeColor({ theme, color, shade: 5 }),
      color: theme.white,
    },
  }),

  body: {
    flex: 1,
    maxWidth: 'calc(100% - 40px)', // space for close button and margin
    marginRight: 10,
  },

  loader: ({ theme }: { theme: MantineTheme }) => ({
    marginRight: theme.spacing.md,
  }),

  icon: ({ theme }: { theme: MantineTheme }) => ({
    boxSizing: 'border-box',
    marginRight: theme.spacing.md,
    width: 28,
    height: 28,
    borderRadius: 28,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.white,
  }),

  title: {
    lineHeight: 1.4,
    marginBottom: 2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  description: ({ theme }: { theme: MantineTheme }) => ({
    color: theme.colors.gray[6],
    lineHeight: 1.4,
    overflow: 'hidden',
    textOverflow: 'ellipsis',

    '&:only-child': {
      color: theme.colors.gray[9],
    },
  }),
});
