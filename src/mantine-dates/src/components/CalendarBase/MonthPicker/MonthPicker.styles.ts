import { createStyles, getSharedColorScheme } from '@mantine/core';

export default createStyles((theme) => {
  const colors = getSharedColorScheme({ color: theme.primaryColor, theme, variant: 'filled' });
  return {
    monthPicker: {},

    monthPickerControls: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },

    monthPickerControl: {
      flex: '0 0 33.3333%',
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
      height: 42,
      textAlign: 'center',
      borderRadius: theme.radius.sm,
      fontSize: theme.fontSizes.sm,

      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
      },
    },

    monthPickerControlActive: {
      backgroundColor: colors.background,
      color: colors.color,

      '&:hover': {
        backgroundColor: colors.hover,
      },
    },
  };
});
