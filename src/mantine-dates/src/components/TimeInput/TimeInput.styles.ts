import { createStyles, INPUT_SIZES, MantineSize } from '@mantine/core';

interface TimeInputStyles {
  size: MantineSize;
}

export default createStyles((theme, { size }: TimeInputStyles) => ({
  timeInput: {},

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
}));
