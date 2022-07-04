import { createStyles, MantineSize } from '@mantine/core';

interface MonthPickerStyles {
  size: MantineSize;
}

const sizes = {
  xs: 32,
  sm: 40,
  md: 46,
  lg: 52,
  xl: 56,
};

export default createStyles((theme, { size }: MonthPickerStyles) => {
  const colors = theme.fn.variant({ color: theme.primaryColor, variant: 'filled' });

  return {
    monthPicker: {
      width: '100%',
    },

    monthPickerControls: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },

    monthPickerControl: {
      flex: '0 0 33.3333%',
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
      height: theme.fn.size({ size, sizes }),
      textAlign: 'center',
      borderRadius: theme.radius.sm,
      fontSize: theme.fn.size({ size, sizes: theme.fontSizes }),

      ...theme.fn.hover({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
      }),

      '&:disabled': {
        color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[4],
        cursor: 'not-allowed',

        ...theme.fn.hover({
          backgroundColor: 'transparent',
        }),
      },
    },

    monthPickerControlActive: {
      backgroundColor: colors.background,
      color: colors.color,

      ...theme.fn.hover({
        backgroundColor: colors.hover,
      }),
    },
  };
});
