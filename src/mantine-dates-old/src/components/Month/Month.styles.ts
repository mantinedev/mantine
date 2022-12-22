import { createStyles } from '@mantine/core';

export interface MonthStylesParams {
  fullWidth: boolean;
}

export default createStyles((theme, { fullWidth }: MonthStylesParams) => ({
  weekday: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[5],
  },

  month: {
    ...theme.fn.fontStyles(),
    borderCollapse: 'collapse',
    width: fullWidth ? '100%' : 'auto',
    tableLayout: 'fixed',
  },

  cell: {
    boxSizing: 'border-box',
    padding: 0,
    borderTop: '1px solid transparent',
  },

  weekdayCell: {
    boxSizing: 'border-box',
    padding: 0,
    fontWeight: 'normal',
    paddingBottom: `calc(${theme.spacing.xs}px / 2)`,
    textAlign: 'center',
    cursor: 'default',
    userSelect: 'none',
  },
}));
