import { createStyles, MantineSize } from '@mantine/core';
import { sizes as DAY_SIZES } from '../Month/Day/Day.styles';

interface YearPickerStyles {
  size: MantineSize;
  fullWidth: boolean;
}

export default createStyles((theme, { size, fullWidth }: YearPickerStyles) => {
  const maxWidth = theme.fn.size({ size, sizes: DAY_SIZES }) * 7;

  return {
    yearPicker: {
      boxSizing: 'border-box',
      display: 'flex',
      gap: theme.spacing.md,
      maxWidth: fullWidth ? '100%' : maxWidth,
    },
  };
});
