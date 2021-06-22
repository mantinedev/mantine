import { createMemoStyles, MantineTheme } from '@mantine/core';

interface CalendarStyles {
  theme: MantineTheme;
}

export default createMemoStyles({
  calendar: {},
  control: {},
  header: ({ theme }: CalendarStyles) => ({
    marginBottom: theme.spacing.xs,
  }),
});
