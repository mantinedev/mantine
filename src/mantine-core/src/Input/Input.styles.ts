import { createUseStyles } from 'react-jss';
import { MantineTheme, MantineNumberSize, getFontStyles, getSizeValue } from '@mantine/theme';

export default createUseStyles({
  withIcon: {},
  invalid: {},

  inputWrapper: {
    position: 'relative',
  },

  defaultVariant: ({ theme, radius }: { theme: MantineTheme; radius: MantineNumberSize }) => ({
    '& $input': {
      height: 36,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
      border: `1px solid ${theme.colors.gray[4]}`,
      transition: 'border-color 100ms ease, box-shadow 100ms ease',

      '&:focus': {
        outline: 'none',
        borderColor: theme.colors[theme.primaryColor][6],
        boxShadow: `0 0 4px ${theme.colors.gray[3]}`,
      },
    },

    '& $invalid': {
      borderColor: theme.colors.red[6],
    },

    '& $withIcon': {
      paddingLeft: 35,
    },

    '& $icon': {
      height: 36,
      width: 36,
    },
  }),

  unstyledVariant: {
    '& $input': {
      height: 28,
      border: 0,
      outline: 0,
    },

    '& $icon': {
      height: 28,
      width: 28,
    },

    '& $withIcon': {
      paddingLeft: 34,
    },
  },

  input: ({ theme }: { theme: MantineTheme }) => ({
    ...getFontStyles(theme),
    boxSizing: 'border-box',
    fontSize: 14,
    width: '100%',

    '&:disabled': {
      backgroundColor: theme.colors.gray[1],
      cursor: 'not-allowed',
    },

    '&::placeholder': {
      color: theme.colors.gray[5],
    },

    '&::-webkit-inner-spin-button': {
      appearance: 'none',
    },
  }),

  icon: ({ theme }: { theme: MantineTheme }) => ({
    pointerEvents: 'none',
    position: 'absolute',
    color: theme.colors.gray[5],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }),
});
