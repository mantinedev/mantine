import { createStyles } from '@mantine/core';

export default createStyles((theme, _, { size }) => ({
  weekdaysRow: {},
  weekday: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[5],
    fontWeight: 400,
    fontSize: theme.fn.size({ size, sizes: theme.fontSizes }),
    textTransform: 'capitalize',
    paddingBottom: theme.fn.size({ size, sizes: theme.spacing }) / 2,
  },
}));
