import { createStyles } from '@mantine/core';

export default createStyles((theme) => {
  const colors = theme.fn.variant({ variant: 'filled' });
  const lightColors = theme.fn.variant({ variant: 'light' });

  return {
    pickerControl: {
      padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
      fontSize: theme.fontSizes.sm,
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      userSelect: 'none',
      borderRadius: theme.fn.radius(),
      ...theme.fn.hover({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
      }),

      '&:active': theme.activeStyles,

      '&[data-in-range]': {
        backgroundColor: lightColors.background,
        borderRadius: 0,
        ...theme.fn.hover({ backgroundColor: lightColors.hover }),
      },

      '&[data-first-in-range]': {
        borderRadius: 0,
        borderTopLeftRadius: theme.radius.sm,
        borderBottomLeftRadius: theme.radius.sm,
      },

      '&[data-last-in-range]': {
        borderRadius: 0,
        borderTopRightRadius: theme.radius.sm,
        borderBottomRightRadius: theme.radius.sm,
      },

      '&[data-last-in-range][data-first-in-range]': {
        borderRadius: theme.radius.sm,
      },

      '&[data-selected]': {
        color: colors.color,
        backgroundColor: colors.background,
        ...theme.fn.hover({ backgroundColor: colors.hover }),
      },

      '&[data-disabled]': {
        color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[4],
        cursor: 'not-allowed',
        ...theme.fn.hover({ backgroundColor: 'transparent' }),

        '&:active': {
          transform: 'none',
        },
      },
    },
  };
});
