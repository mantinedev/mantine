import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  weekdaysRow: {},
  weekday: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[5],
    fontWeight: 400,
    fontSize: theme.fontSizes.sm,
    textTransform: 'capitalize',
    paddingBottom: theme.spacing.xs / 2,
  },
}));
