import {
  createMemoStyles,
  MantineTheme,
  INPUT_SIZES,
  MantineSize,
  getSizeValue,
} from '@mantine/core';

interface TimeRangeInputStyles {
  theme: MantineTheme;
  size: MantineSize;
}

const inputSizes = {
  xs: 20,
  sm: 23,
  md: 25,
  lg: 27,
  xl: 29,
};

export default createMemoStyles({
  disabled: {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  wrapper: {
    paddingTop: '5px',
  },

  controls: ({ size }: TimeRangeInputStyles) => ({
    display: 'flex',
    alignItems: 'center',
    // -2 for border offset
    height: getSizeValue({ size, sizes: INPUT_SIZES }) - 2,
  }),

  timeInput: ({ theme, size }: TimeRangeInputStyles) => ({
    width: getSizeValue({ size, sizes: inputSizes }),
    appearance: 'none',
    backgroundColor: 'transparent',
    color: 'inherit',
    padding: 0,
    textAlign: 'center',
    border: '1px solid transparent',
    fontSize: getSizeValue({ size, sizes: theme.fontSizes }),
    lineHeight: 1,
    outline: 0,

    '&[disabled]': {
      color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[7],
      cursor: 'not-allowed',
    },
  }),
});
