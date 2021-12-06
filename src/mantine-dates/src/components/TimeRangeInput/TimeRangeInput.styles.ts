import { createStyles, INPUT_SIZES, MantineSize } from '@mantine/core';

import { inputSizes } from '../TimeInput/TimeInput.styles';

interface TimeRangeInputStyles {
  size: MantineSize;
}

export default createStyles((theme, { size }: TimeRangeInputStyles) => ({
  disabled: {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  inputWrapper: {
    display: 'inline-flex',
    alignItems: 'center',
    // -2 for border offset
    height: theme.fn.size({ size, sizes: INPUT_SIZES }) - 2,
  },

  timeField: {
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

  separator: {
    paddingLeft: theme.fn.size({ size, sizes: theme.spacing }) / 2,
    paddingRight: theme.fn.size({ size, sizes: theme.spacing }) / 2,
    lineHeight: 1,
    marginBottom: 3,
  },
}));
