import { MantineTheme, getFontStyles, createMemoStyles } from '@mantine/core';

interface MonthStyles {
  theme: MantineTheme;
}

export default createMemoStyles({
  weekday: ({ theme }: MonthStyles) => ({
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[5],
  }),

  root: ({ theme }: MonthStyles) => ({
    ...getFontStyles(theme),
    borderCollapse: 'collapse',
    width: '100%',
    tableLayout: 'fixed',
  }),

  cell: {
    padding: 0,
  },

  weekdayCell: ({ theme }: MonthStyles) => ({
    padding: 0,
    fontWeight: 'normal',
    paddingBottom: theme.spacing.xs / 2,
    textAlign: 'center',
    cursor: 'default',
    userSelect: 'none',
  }),
});
