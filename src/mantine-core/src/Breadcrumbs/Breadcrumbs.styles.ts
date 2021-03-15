import { createUseStyles } from 'react-jss';
import { MantineTheme } from '@mantine/theme';

export default createUseStyles({
  breadcrumbs: {
    display: 'flex',
  },

  breadcrumb: {
    lineHeight: 1,
    whiteSpace: 'nowrap',
  },

  separator: ({ theme }: { theme: MantineTheme }) => ({
    marginLeft: theme.spacing.xs,
    marginRight: theme.spacing.xs,
    color: theme.colors.gray[7],
    lineHeight: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }),
});
