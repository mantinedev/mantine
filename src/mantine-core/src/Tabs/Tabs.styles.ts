import { createUseStyles } from 'react-jss';
import { MantineTheme } from '@mantine/theme';

export default createUseStyles({
  tabs: ({ theme }: { theme: MantineTheme }) => ({
    display: 'flex',
    borderBottom: `2px solid ${theme.colors.gray[3]}`,
  }),

  body: ({ theme }: { theme: MantineTheme }) => ({
    paddingTop: theme.spacing.sm,
  }),
});
