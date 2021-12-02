import { createStyles, MantineSize, INPUT_SIZES } from '@mantine/core';

interface DatePickerBaseStyles {
  size: MantineSize;
  invalid: boolean;
}

export default createStyles((theme, { size, invalid }: DatePickerBaseStyles) => ({
  wrapper: {
    ...theme.fn.fontStyles(),
    position: 'relative',
    cursor: 'pointer',
  },

  placeholder: {
    lineHeight: `${theme.fn.size({ size, sizes: INPUT_SIZES }) - 2}px`,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: invalid
      ? theme.colors.red[theme.colorScheme === 'dark' ? 6 : 7]
      : theme.colorScheme === 'dark'
      ? theme.colors.dark[3]
      : theme.colors.gray[5],
  },

  value: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  dropdownWrapper: {
    position: 'relative',
    pointerEvents: 'all',
  },

  input: {
    cursor: 'pointer',
    whiteSpace: 'nowrap',
  },

  freeInput: {
    cursor: 'text',
  },

  dropdown: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2]
    }`,
    padding: `${theme.spacing.md}px ${theme.spacing.xs}px`,
  },

  arrow: {
    borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2],
    background: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
  },
}));
