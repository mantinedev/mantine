import { createMemoStyles, getFontStyles, MantineTheme } from '@mantine/core';

interface DatePickerStyles {
  theme: MantineTheme;
}

export default createMemoStyles({
  wrapper: ({ theme }: DatePickerStyles) => ({
    ...getFontStyles(theme),
  }),

  placeholder: ({ theme }: DatePickerStyles) => ({
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
  }),
});
