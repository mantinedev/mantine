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
  invalid: boolean;
}

export default createMemoStyles({
  wrapper: ({ theme }: DatePickerBaseStyles) => ({
    ...getFontStyles(theme),
    position: 'relative',
    cursor: 'pointer',
  }),

  placeholder: ({ theme, size, invalid }: DatePickerBaseStyles) => ({
    lineHeight: `${getSizeValue({ size, sizes: INPUT_SIZES }) - 2}px`,
    color: invalid
      ? theme.colors.red[theme.colorScheme === 'dark' ? 6 : 7]
      : theme.colorScheme === 'dark'
      ? theme.colors.dark[3]
      : theme.colors.gray[5],
  }),

  dropdownWrapper: {
    position: 'relative',
    pointerEvents: 'all',
  },

  input: {
    cursor: 'pointer',
    whiteSpace: 'nowrap',
  },

  dropdown: ({ theme }: DatePickerBaseStyles) => ({
    position: 'absolute',
    left: 0,
    top: theme.spacing.xs,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2]
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
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
      borderTop: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2]
      }`,
      borderLeft: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2]
      }`,
    },
  }),
});
