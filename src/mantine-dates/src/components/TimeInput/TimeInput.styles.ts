import { createStyles, INPUT_SIZES, MantineSize } from '@mantine/core';

interface TimeInputStyles {
  size: MantineSize;
}

export const inputSizes = {
  xs: 20,
  sm: 23,
  md: 25,
  lg: 27,
  xl: 29,
};

export default createStyles((theme, { size }: TimeInputStyles) => ({
  disabled: {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  controls: {
    display: 'flex',
    alignItems: 'center',
    // -2 for border offset
    height: theme.fn.size({ size, sizes: INPUT_SIZES }) - 2,
  },

  timeInput: {
    width: theme.fn.size({ size, sizes: inputSizes }),
    appearance: 'none',
    backgroundColor: 'transparent',
    color: 'inherit',
    padding: 0,
    textAlign: 'center',
    border: '1px solid transparent',
    fontSize: theme.fn.size({ size, sizes: theme.fontSizes }),
    lineHeight: 1,
    outline: 0,

    '&[disabled]': {
      color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[7],
      cursor: 'not-allowed',
    },
  },
}));
