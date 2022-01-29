import { createStyles, INPUT_SIZES, MantineSize } from '@mantine/core';

interface TimeRangeInputStyles {
  size: MantineSize;
}

export default createStyles((theme, { size }: TimeRangeInputStyles) => ({
  timeField: {},

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

  separator: {
    paddingLeft: theme.fn.size({ size, sizes: theme.spacing }) / 2,
    paddingRight: theme.fn.size({ size, sizes: theme.spacing }) / 2,
    lineHeight: 1,
  },
}));
