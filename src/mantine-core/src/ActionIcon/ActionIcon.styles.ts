import { createUseStyles } from 'react-jss';
import { MantineTheme, MantineColor, theming } from '@mantine/theme';

export default createUseStyles(
  (theme: MantineTheme) => ({
    actionIcon: ({ color }: { color: MantineColor }) => ({
      border: '1px solid transparent',
      boxSizing: 'border-box',
      backgroundColor: 'transparent',
      height: 27,
      width: 27,
      borderRadius: 4,
      padding: 0,
      lineHeight: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'color 100ms ease',
      color: theme.colors.gray[6],
      outline: 0,

      '&:hover': {
        backgroundColor: theme.colors[color][0],
        color: theme.colors[color][6],
      },

      '&:focus': {
        color: theme.colors[color][6],
        borderColor: theme.colors[color][6],
      },
    }),
  }),
  { theming }
);
