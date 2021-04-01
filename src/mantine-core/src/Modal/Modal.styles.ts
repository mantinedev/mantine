import { createUseStyles } from 'react-jss';
import { MantineTheme } from '@mantine/theme';

export default createUseStyles({
  wrapper: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  inner: ({ theme }: { theme: MantineTheme }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflowY: 'auto',
    padding: [theme.spacing.xl * 2, theme.spacing.md],
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',

    '@media (max-width: 755px)': {
      padding: theme.spacing.sm,
    },
  }),

  title: ({ theme }: { theme: MantineTheme }) => ({
    marginRight: theme.spacing.md,
  }),

  modal: ({ theme }: { theme: MantineTheme }) => ({
    padding: theme.spacing.lg,
    outline: 0,
  }),

  header: ({ theme }: { theme: MantineTheme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.md,
  }),
});
