import { createUseStyles } from 'react-jss';
import { theming, MantineTheme } from '@mantine/theme';

const BREAKPOINT = 450;

export default createUseStyles(
  (theme: MantineTheme) => ({
    wrapper: {
      display: 'flex',
      alignItems: 'flex-start',

      [`@media (max-width: ${BREAKPOINT}px)`]: {
        flexDirection: 'column',
      },
    },

    badge: {
      fontWeight: 700,
      fontSize: 30,
      lineHeight: 1,
      color: theme.colors.gray[9],
      border: `1px solid ${theme.colors.gray[3]}`,
      padding: [theme.spacing.xs, theme.spacing.md],
      borderRadius: theme.radius.sm,
      marginRight: theme.spacing.xl,

      [`@media (max-width: ${BREAKPOINT}px)`]: {
        display: 'none',
      },
    },
  }),
  { theming }
);
