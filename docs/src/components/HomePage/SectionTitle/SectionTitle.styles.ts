import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  title: {
    display: 'inline-block',
    position: 'relative',
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    fontSize: 42,
    lineHeight: 1.1,
    margin: 0,
    padding: 0,
    textAlign: 'left',
    marginBottom: theme.spacing.xl * 2,
    letterSpacing: 1,
    marginLeft: 22,
    textTransform: 'uppercase',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,

    '&::before, &::after': {
      content: '""',
      position: 'absolute',
      width: 10,
      height: 10,
    },

    '&::before': {
      top: -14,
      left: -22,
      borderLeft: '5px solid transparent',
      borderTop: '5px solid transparent',
    },

    '&::after': {
      bottom: -14,
      right: -22,
      borderRight: '5px solid transparent',
      borderBottom: '5px solid transparent',
    },

    '@media (max-width: 600px)': {
      fontSize: 28,
      marginBottom: theme.spacing.xl * 2,
      marginLeft: 0,

      '&::before, &::after': {
        display: 'none',
      },
    },
  },

  white: {
    color: theme.white,
    textShadow: '1px 2px 2px rgba(0, 0, 0, .3)',

    '&::before, &::after': {
      filter: 'drop-shadow(1px 2px 2px rgba(0, 0, 0, .3))',
      borderColor: theme.white,
    },
  },

  default: {
    '&::before, &::after': {
      borderColor: 'inherit',
    },
  },
}));
