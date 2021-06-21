import { createMemoStyles, getFontStyles, MantineTheme } from '@mantine/core';

interface DatePickerStyles {
  theme: MantineTheme;
}

export default createMemoStyles({
  wrapper: ({ theme }: DatePickerStyles) => ({
    ...getFontStyles(theme),
    position: 'relative',
  }),

  placeholder: ({ theme }: DatePickerStyles) => ({
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
  }),

  dropdownWrapper: {
    position: 'relative',
  },

  dropdown: ({ theme }: DatePickerStyles) => ({
    position: 'absolute',
    left: 0,
    top: theme.spacing.xs,
    maxWidth: 260,
    border: `1px solid ${theme.colors.gray[2]}`,
    zIndex: 4,
    padding: [theme.spacing.md, theme.spacing.xs],

    '&::before': {
      content: '""',
      position: 'absolute',
      top: -5,
      height: 8,
      width: 8,
      transform: 'rotate(45deg)',
      backgroundColor: theme.white,
      borderTop: `1px solid ${theme.colors.gray[2]}`,
      borderLeft: `1px solid ${theme.colors.gray[2]}`,
    },
  }),
});
