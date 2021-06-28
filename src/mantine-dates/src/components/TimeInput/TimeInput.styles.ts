import {
  createMemoStyles,
  MantineTheme,
  INPUT_SIZES,
  MantineSize,
  getSizeValue,
} from '@mantine/core';

interface TimeInputStyles {
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
  controls: ({ size }: TimeInputStyles) => ({
    display: 'flex',
    alignItems: 'center',
    height: getSizeValue({ size, sizes: INPUT_SIZES }),
  }),

  timeInput: ({ theme, size }: TimeInputStyles) => ({
    width: getSizeValue({ size, sizes: inputSizes }),
    textAlign: 'center',
    border: '1px solid transparent',
    fontSize: getSizeValue({ size, sizes: theme.fontSizes }),
    lineHeight: 1,
    outline: 0,
  }),
});
