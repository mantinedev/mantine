import { createStyles, MantineSize } from '@mantine/core';

interface DayStyles {
  size: MantineSize;
  fullWidth: boolean;
  hideOutsideDates: boolean;
}

export const sizes = {
  xs: 34,
  sm: 38,
  md: 46,
  lg: 58,
  xl: 66,
};

export default createStyles((theme, { size, fullWidth, hideOutsideDates }: DayStyles) => ({
  day: {
    ...theme.fn.fontStyles(),
    ...theme.fn.focusStyles(),
    position: 'relative',
    WebkitTapHighlightColor: 'transparent',
    backgroundColor: 'transparent',
    width: fullWidth ? '100%' : theme.fn.size({ size, sizes }),
    height: theme.fn.size({ size, sizes }),
    lineHeight: `${theme.fn.size({ size, sizes })}px`,
    fontSize: theme.fn.size({ size, sizes: theme.fontSizes }),
    padding: 0,
    borderRadius: theme.radius.sm,
    border: 'none',
    cursor: 'pointer',
    userSelect: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],

    '&:disabled': {
      pointerEvents: 'none',
      color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[4],
    },

    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
    }),

    '&[data-weekend]': {
      color: theme.colorScheme === 'dark' ? theme.colors.red[5] : theme.colors.red[7],
    },

    '&[data-outside]': {
      display: hideOutsideDates ? 'none' : undefined,
      color: `${theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[4]}`,
    },

    '&[data-in-range]': {
      backgroundColor: theme.fn.variant({ variant: 'light' }).background,
      borderRadius: 0,
    },

    '&[data-selected]': {
      backgroundColor: theme.fn.variant({ variant: 'filled' }).background,
      color: theme.white,
    },

    '&[data-first-in-range]': {
      borderTopLeftRadius: theme.radius.sm,
      borderBottomLeftRadius: theme.radius.sm,
    },

    '&[data-last-in-range]': {
      borderTopRightRadius: theme.radius.sm,
      borderBottomRightRadius: theme.radius.sm,
    },
  },
}));
