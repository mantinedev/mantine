import { createUseStyles } from 'react-jss';
import { MantineTheme, getFontStyles, getFocusStyles } from '@mantine/core';

export default createUseStyles({
  disableOutsideEvents: {},
  weekend: {},
  outside: {},
  selected: {},

  day: ({ theme }: { theme: MantineTheme }) => ({
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

    '&:hover': {
      backgroundColor: theme.colors.gray[0],
    },

    '&$weekend': {
      color: theme.colors.red[7],
    },

    '&$outside': {
      color: theme.colors.gray[4],

      '&$disableOutsideEvents': {
        pointerEvents: 'none',
      },
    },

    '&$selected': {
      backgroundColor: theme.colors[theme.primaryColor][0],
      color: theme.colors[theme.primaryColor][6],

      '&:hover': {
        backgroundColor: theme.colors[theme.primaryColor][0],
      },
    },
  }),
});
