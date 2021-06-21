import { MantineTheme, getFontStyles, createMemoStyles } from '@mantine/core';

interface MonthStyles {
  theme: MantineTheme;
}

export default createMemoStyles({
  weekday: {},

  root: ({ theme }: MonthStyles) => ({
    ...getFontStyles(theme),
    borderCollapse: 'collapse',
    width: '100%',
    tableLayout: 'fixed',

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
