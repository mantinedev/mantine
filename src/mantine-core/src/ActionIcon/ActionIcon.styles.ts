import { createUseStyles } from 'react-jss';
import { MantineTheme, MantineColor, MantineNumberSize, theming } from '@mantine/theme';

export default createUseStyles(
  (theme: MantineTheme) => ({
    actionIcon: ({ color, radius }: { color: MantineColor; radius: MantineNumberSize }) => ({
      border: '1px solid transparent',
      boxSizing: 'border-box',
      backgroundColor: 'transparent',
      height: 27,
      width: 27,
      borderRadius: typeof radius === 'number' ? radius : theme.radius[radius],
      padding: 0,
      lineHeight: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'color 100ms ease, background-color 100ms ease',
      color: theme.colors.gray[6],
      outline: 0,

      '&:focus': {
        color: theme.colors[color || theme.primaryColor][6],
        borderColor: theme.colors[color || theme.primaryColor][6],
      },

      '&:focus:not(:focus-visible)': {
        color: theme.colors.gray[6],
        borderColor: 'transparent',

        '&:hover': {
          color: theme.colors[color || theme.primaryColor][6],
        },
      },

      '&:hover': {
        backgroundColor: theme.colors[color || theme.primaryColor][0],
        color: theme.colors[color || theme.primaryColor][6],
      },

      '&:active': {
        backgroundColor: theme.colors[color || theme.primaryColor][1],
      },
    }),
  }),
  { theming }
);
