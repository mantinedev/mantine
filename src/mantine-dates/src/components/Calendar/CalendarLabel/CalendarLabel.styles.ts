import { createMemoStyles, getFocusStyles, getFontStyles, MantineTheme } from '@mantine/core';

interface CalendarLabelStyles {
  theme: MantineTheme;
}

export default createMemoStyles({
  select: ({ theme }: CalendarLabelStyles) => ({
    ...getFocusStyles(theme),
    ...getFontStyles(theme),
    appearance: 'none',
    padding: 0,
    margin: 0,
    border: 0,
    fontSize: theme.fontSizes.md,
    textAlignLast: 'right',
  }),
});
