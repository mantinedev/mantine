import { MantineTheme, getFontStyles, getFocusStyles, createMemoStyles } from '@mantine/core';

interface DayStyles {
  theme: MantineTheme;
}

export default createMemoStyles({
  weekend: {},
  outside: {},
  selected: {},

  day: ({ theme }: DayStyles) => ({
    ...getFontStyles(theme),
    ...getFocusStyles(theme),
    position: 'relative',
    WebkitTapHighlightColor: 'transparent',
    backgroundColor: 'transparent',
    width: '100%',
    height: 34,
    lineHeight: '34px',
    padding: 0,
    borderRadius: theme.radius.sm,
    border: '1px dotted transparent',
    cursor: 'pointer',
    fontSize: theme.fontSizes.sm,
    userSelect: 'none',

    '&:disabled': {
      pointerEvents: 'none',
      color: theme.colors.gray[4],
    },

    '&:hover': {
      backgroundColor: theme.colors.gray[0],
    },

    '&$weekend:not(:disabled)': {
      color: theme.colors.red[7],
    },

    '&$outside': {
      color: `${theme.colors.gray[4]} !important`,
    },

    '&$selected:not(:disabled)': {
      backgroundColor: theme.colors[theme.primaryColor][0],
      color: theme.colors[theme.primaryColor][6],

      '&:hover': {
        backgroundColor: theme.colors[theme.primaryColor][0],
      },
    },
  }),
});
