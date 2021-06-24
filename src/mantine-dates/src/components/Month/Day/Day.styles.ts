import {
  MantineTheme,
  getFontStyles,
  getFocusStyles,
  createMemoStyles,
  MantineSize,
  getSizeValue,
} from '@mantine/core';

interface DayStyles {
  theme: MantineTheme;
  size: MantineSize;
  fullWidth: boolean;
}

const sizes = {
  xs: 34,
  sm: 38,
  md: 46,
  lg: 58,
  xl: 66,
};

export default createMemoStyles({
  weekend: {},
  outside: {},
  selected: {},
  range: {},
  firstInRange: {},
  lastInRange: {},

  day: ({ theme, size, fullWidth }: DayStyles) => ({
    ...getFontStyles(theme),
    ...getFocusStyles(theme),
    position: 'relative',
    WebkitTapHighlightColor: 'transparent',
    backgroundColor: 'transparent',
    width: fullWidth ? '100%' : getSizeValue({ size, sizes }),
    height: getSizeValue({ size, sizes }),
    lineHeight: `${getSizeValue({ size, sizes })}px`,
    fontSize: getSizeValue({ size, sizes: theme.fontSizes }),
    padding: 0,
    borderRadius: theme.radius.sm,
    border: '1px dotted transparent',
    cursor: 'pointer',
    userSelect: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],

    '&:disabled': {
      pointerEvents: 'none',
      color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[4],
    },

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    },

    '&$weekend:not(:disabled)': {
      color: theme.colorScheme === 'dark' ? theme.colors.red[5] : theme.colors.red[7],
    },

    '&$outside': {
      color: `${
        theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[4]
      } !important`,
    },

    '&$range:not(:disabled)': {
      backgroundColor: theme.colors[theme.primaryColor][0],
      borderRadius: 0,
    },

    '&$selected:not(:disabled)': {
      backgroundColor: theme.colors[theme.primaryColor][6],
      color: theme.white,
    },

    '&$firstInRange:not(:disabled)': {
      borderTopLeftRadius: theme.radius.sm,
      borderBottomLeftRadius: theme.radius.sm,
    },

    '&$lastInRange:not(:disabled)': {
      borderTopRightRadius: theme.radius.sm,
      borderBottomRightRadius: theme.radius.sm,
    },
  }),
});
