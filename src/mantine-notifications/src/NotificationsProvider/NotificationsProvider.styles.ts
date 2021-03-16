import { createUseStyles } from 'react-jss';
import { MantineTheme } from '@mantine/theme';

export default createUseStyles({
  notifications: ({ theme }: { theme: MantineTheme }) => ({
    width: `calc(100% - ${theme.spacing.md * 2}px)`,
    boxSizing: 'border-box',
    position: 'fixed',
    zIndex: 1000,
  }),

  notification: ({ theme }: { theme: MantineTheme }) => ({
    '& + &': {
      marginTop: theme.spacing.sm,
    },
  }),
});
