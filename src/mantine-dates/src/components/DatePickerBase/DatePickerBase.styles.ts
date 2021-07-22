import {
  createMemoStyles,
  getFontStyles,
  getSizeValue,
  MantineTheme,
  MantineSize,
  INPUT_SIZES,
} from '@mantine/core';

interface DatePickerBaseStyles {
  theme: MantineTheme;
  size: MantineSize;
}

export default createMemoStyles({
  wrapper: ({ theme }: DatePickerBaseStyles) => ({
    ...getFontStyles(theme),
    position: 'relative',
  }),

  placeholder: ({ theme, size }: DatePickerBaseStyles) => ({
    lineHeight: `${getSizeValue({ size, sizes: INPUT_SIZES }) - 2}px`,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
  }),

  dropdownWrapper: {
    position: 'relative',
    zIndex: 4,
  },

  dropdown: ({ theme }: DatePickerBaseStyles) => ({
    position: 'absolute',
    left: 0,
    top: theme.spacing.xs,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
    zIndex: 4,
    padding: [theme.spacing.md, theme.spacing.xs],

    '&::before': {
      content: '""',
      position: 'absolute',
      top: -5,
      height: 8,
      width: 8,
      transform: 'rotate(45deg)',
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white,
      borderTop: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
      }`,
      borderLeft: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
      }`,
    },
  }),
});
