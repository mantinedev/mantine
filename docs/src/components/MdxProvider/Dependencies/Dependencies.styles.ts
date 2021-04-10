import { createUseStyles } from 'react-jss';
import { MantineTheme, theming } from '@mantine/theme';

const BREAKPOINT = 500;

export default createUseStyles(
  (theme: MantineTheme) => ({
    dependencies: {
      display: 'flex',
      marginBottom: theme.spacing.md,
      marginTop: theme.spacing.md,

      [`@media (max-width: ${BREAKPOINT}px)`]: {
        flexDirection: 'column',
      },
    },

    dependency: {
      boxSizing: 'border-box',
      border: `1px solid ${theme.colors.gray[3]}`,
      borderRight: 0,
      padding: [theme.spacing.xs, theme.spacing.md],
      textDecoration: 'none',
      flex: '0 0 33.3333333%',

      '&:hover': {
        backgroundColor: theme.colors.gray[0],
      },

      '&:first-of-type': {
        borderTopLeftRadius: theme.radius.sm,
        borderBottomLeftRadius: theme.radius.sm,
      },

      '&:last-of-type': {
        borderTopRightRadius: theme.radius.sm,
        borderBottomRightRadius: theme.radius.sm,
        borderRight: `1px solid ${theme.colors.gray[3]}`,
      },

      [`@media (max-width: ${BREAKPOINT}px)`]: {
        borderRadius: 0,
        borderRight: `1px solid ${theme.colors.gray[3]}`,
        borderTop: 0,

        '&:first-of-type': {
          borderTop: `1px solid ${theme.colors.gray[3]}`,
          borderTopLeftRadius: theme.radius.sm,
          borderTopRightRadius: theme.radius.sm,
          borderBottomLeftRadius: 0,
        },

        '&:last-of-type': {
          borderTopRightRadius: 0,
          borderBottomRightRadius: theme.radius.sm,
          borderBottomLeftRadius: theme.radius.sm,
        },
      },
    },

    dependencyTitle: {
      marginBottom: 7,
    },
  }),
  { theming }
);
