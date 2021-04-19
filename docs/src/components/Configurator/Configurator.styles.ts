import { createUseStyles } from 'react-jss';
import { theming, MantineTheme } from '@mantine/theme';

const BREAKPOINT = 885;

export default createUseStyles(
  (theme: MantineTheme) => ({
    configurator: {
      display: 'flex',
      border: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[3]
      }`,
      overflow: 'hidden',
      borderTopLeftRadius: theme.radius.sm,
      borderTopRightRadius: theme.radius.sm,
      borderBottom: 0,

      [`@media (max-width: ${BREAKPOINT}px)`]: {
        flexDirection: 'column',
      },
    },

    noCode: {
      borderRadius: theme.radius.sm,
      borderBottom: `1px solid ${theme.colors.gray[3]}`,
    },

    preview: {
      flex: 1,
      padding: theme.spacing.md,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },

    controls: {
      boxSizing: 'border-box',
      width: 250,
      padding: theme.spacing.md,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],

      [`@media (max-width: ${BREAKPOINT}px)`]: {
        width: '100%',
      },
    },

    code: {
      borderTopRightRadius: 0,
      borderTopLeftRadius: 0,
      marginTop: 0,
    },
  }),
  { theming }
);
