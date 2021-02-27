import { createUseStyles } from 'react-jss';
import { MantineTheme, MantineNumberSize, getFontStyles, getSizeValue } from '@mantine/theme';

export default createUseStyles({
  invalid: {},
  placeholder: {},
  withIcon: {},

  wrapper: {
    position: 'relative',
  },

  select: ({ theme, radius }: { radius: MantineNumberSize; theme: MantineTheme }) => ({
    ...getFontStyles(theme),
    appearance: 'none',
    boxSizing: 'border-box',
    fontSize: 14,
    width: '100%',
    height: 36,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
    border: `1px solid ${theme.colors.gray[5]}`,
    transition: 'border-color 100ms ease, box-shadow 100ms ease',
    cursor: 'pointer',

    '&::placeholder': {
      color: theme.colors.gray[5],
    },

    '&:focus': {
      outline: 'none',
      borderColor: theme.colors[theme.primaryColor][5],
      boxShadow: `0 0 4px ${theme.colors.gray[3]}`,
    },

    '&:disabled': {
      backgroundColor: theme.colors.gray[1],
      cursor: 'not-allowed',
    },

    '&$placeholder': {
      color: theme.colors.gray[5],
    },

    '&$invalid': {
      borderColor: theme.colors.red[7],
    },

    '&$withIcon': {
      paddingLeft: 35,
    },
  }),

  icon: ({ theme }: { theme: MantineTheme }) => ({
    pointerEvents: 'none',
    position: 'absolute',
    color: theme.colors.gray[5],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: 10,
    left: 10,
  }),

  chevron: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});
