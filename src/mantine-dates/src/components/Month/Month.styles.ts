import { createUseStyles } from 'react-jss';
import { MantineTheme, getFontStyles } from '@mantine/core';

export default createUseStyles({
  month: ({ theme }: { theme: MantineTheme }) => ({
    ...getFontStyles(theme),
    borderCollapse: 'collapse',

    '& td': {
      padding: 0,
    },

    '& th': {
      padding: 0,
      fontWeight: 'normal',
      paddingBottom: theme.spacing.xs / 2,
      textAlign: 'center',
      cursor: 'default',
      userSelect: 'none',
    },
  }),
});
