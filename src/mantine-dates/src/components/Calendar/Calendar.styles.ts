import { createMemoStyles, MantineTheme } from '@mantine/core';

interface CalendarStyles {
  theme: MantineTheme;
}

export default createMemoStyles({
  root: {},
  header: ({ theme }: CalendarStyles) => ({
    paddingLeft: 12,
    paddingRight: 12,
    marginBottom: theme.spacing.xs,
  }),
});
