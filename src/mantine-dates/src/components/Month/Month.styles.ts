import { MantineTheme, getFontStyles, createMemoStyles } from '@mantine/core';

interface MonthStyles {
  theme: MantineTheme;
  fullWidth: boolean;
}

export default createMemoStyles({
  weekday: ({ theme }: MonthStyles) => ({
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[5],
  }),

  root: ({ theme, fullWidth }: MonthStyles) => ({
    ...getFontStyles(theme),
    borderCollapse: 'collapse',
    width: fullWidth ? '100%' : 'auto',
    tableLayout: 'fixed',
  }),

  cell: {
    padding: 0,
    borderTop: '1px solid transparent',
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
