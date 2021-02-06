import { createUseStyles } from 'react-jss';
import { MantineTheme } from '@mantine/types';
import { theming } from '../../theme';

export default createUseStyles(
  (theme: MantineTheme) => ({
    actionIcon: {
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
    },

    muted: {
      '&:hover': { color: theme.colors.gray[7] },
      '&:focus': { color: theme.colors.gray[7], borderColor: theme.colors.blue[2] },
    },

    danger: {
      '&:hover': { backgroundColor: theme.colors.red[0], color: theme.colors.red[7] },
      '&:focus': { color: theme.colors.red[7], borderColor: theme.colors.red[2] },
    },

    warning: {
      '&:hover': { backgroundColor: theme.colors.yellow[0], color: theme.colors.yellow[7] },
      '&:focus': { color: theme.colors.yellow[7], borderColor: theme.colors.yellow[4] },
    },

    success: {
      '&:hover': { backgroundColor: theme.colors.teal[0], color: theme.colors.teal[7] },
      '&:focus': { color: theme.colors.teal[7], borderColor: theme.colors.teal[2] },
    },

    primary: {
      '&:hover': { backgroundColor: theme.colors.blue[0], color: theme.colors.blue[7] },
      '&:focus': { color: theme.colors.blue[7], borderColor: theme.colors.blue[2] },
    },
  }),
  { theming }
);
