import { createUseStyles } from 'react-jss';
import { MantineTheme } from '@mantine/theme';

export default createUseStyles({
  tabs: ({ theme }: { theme: MantineTheme }) => ({
    borderBottom: `2px solid ${theme.colors.gray[3]}`,
  }),

  tabsInner: {
    marginBottom: -2,
  },

  body: ({ theme }: { theme: MantineTheme }) => ({
    paddingTop: theme.spacing.sm,
  }),
});
