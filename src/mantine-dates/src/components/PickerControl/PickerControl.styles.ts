import { createStyles, getSize, rem } from '@mantine/core';
import { sizes } from '../Day/Day.styles';

export default createStyles((theme, _, { size }) => {
  const colors = theme.fn.variant({ variant: 'filled' });
  const lightColors = theme.fn.variant({ variant: 'light' });

  return {
    pickerControl: {
      fontSize: getSize({ size, sizes: theme.fontSizes }),
      height: getSize({ size, sizes }),
      width: `calc((${getSize({ size, sizes })} * 7) / 3 + ${rem(1.5)})`,
      display: 'flex',
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
