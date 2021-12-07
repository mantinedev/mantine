import { createStyles, getSharedColorScheme } from '@mantine/core';

export default createStyles((theme) => {
  const colors = getSharedColorScheme({ color: theme.primaryColor, theme, variant: 'filled' });
  return {
    yearPicker: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },

    yearPickerControl: {
      flex: '0 0 25%',
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
      height: 46,
      textAlign: 'center',
      borderRadius: theme.radius.sm,
      fontSize: theme.fontSizes.md,

      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
      },
    },

    yearPickerControlActive: {
      backgroundColor: colors.background,
      color: colors.color,

      '&:hover': {
        backgroundColor: colors.hover,
      },
    },
  };
});
