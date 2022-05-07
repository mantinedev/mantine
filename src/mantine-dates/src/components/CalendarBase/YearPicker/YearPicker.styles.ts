import { createStyles, MantineSize } from '@mantine/core';

interface YearPickerStyles {
  size: MantineSize;
}

const sizes = {
  xs: 32,
  sm: 40,
  md: 46,
  lg: 52,
  xl: 56,
};

export default createStyles((theme, { size }: YearPickerStyles) => {
  const colors = theme.fn.variant({ color: theme.primaryColor, variant: 'filled' });

  return {
    yearPicker: {
      width: '100%',
    },

    yearPickerControls: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },

    yearPickerControl: {
      flex: '0 0 25%',
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

    yearPickerControlActive: {
      backgroundColor: colors.background,
      color: colors.color,

      ...theme.fn.hover({
        backgroundColor: colors.hover,
      }),
    },
  };
});
