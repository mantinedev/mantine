import { createStyles, getSize, rem } from '@mantine/core';
import { sizes } from '../Day/Day.styles';

export default createStyles((theme, _, { size }) => {
  const controlSize = getSize({ size, sizes });
  return {
    calendarHeaderControlIcon: {},

    calendarHeader: {
      display: 'flex',
      maxWidth: `calc(${controlSize} * 7 + ${rem(7)})`,
    },

    calendarHeaderControl: {
      width: controlSize,
      height: controlSize,
      borderRadius: theme.fn.radius(),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      userSelect: 'none',

      ...theme.fn.hover({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
      }),

      '&:active': theme.activeStyles,

      '&[data-disabled]': {
        opacity: 0.2,
        cursor: 'not-allowed',
        ...theme.fn.hover({ backgroundColor: 'transparent' }),

        '&:active': {
          transform: 'none',
        },
      },
    },

    calendarHeaderLevel: {
      height: controlSize,
      borderRadius: theme.fn.radius(),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      userSelect: 'none',
      flex: 1,
      fontSize: getSize({ size, sizes: theme.fontSizes }),
      fontWeight: 500,
      textTransform: 'capitalize',

      ...theme.fn.hover({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
      }),

      '&:active': theme.activeStyles,

      '&[data-static]': {
        cursor: 'default',
        userSelect: 'unset',
        ...theme.fn.hover({ backgroundColor: 'transparent' }),

        '&:active': {
          transform: 'none',
        },
      },
    },
  };
});
