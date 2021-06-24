import { createMemoStyles, getSizeValue, MantineTheme, MantineSize } from '@mantine/core';
import { sizes as DAY_SIZES } from '../Month/Day/Day.styles';

interface CalendarStyles {
  theme: MantineTheme;
  fullWidth: boolean;
  size: MantineSize;
}

export default createMemoStyles({
  calendar: ({ fullWidth, size }: CalendarStyles) => ({
    maxWidth: fullWidth ? '100%' : getSizeValue({ size, sizes: DAY_SIZES }) * 7,
  }),
});
