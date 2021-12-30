import { createStyles, MantineSize } from '@mantine/core';

export const inputSizes = {
  xs: 20,
  sm: 23,
  md: 25,
  lg: 27,
  xl: 29,
};

interface TimeFieldStyles {
  size: MantineSize;
}

export default createStyles((theme, { size }: TimeFieldStyles) => ({
  timeInput: {
    ...theme.fn.fontStyles(),
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
