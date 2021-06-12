import { createUseStyles } from 'react-jss';
import { theming } from '@mantine/core';

export default createUseStyles(
  (theme) => ({
    title: {
      display: 'inline-block',
      position: 'relative',
      fontFamily: `Dosis, ${theme.fontFamily}`,
      fontSize: 42,
      lineHeight: 1.1,
      margin: 0,
      padding: 0,
      color: theme.white,
      textAlign: 'left',
      marginBottom: theme.spacing.xl * 2.5,
      letterSpacing: 1,
      textShadow: '1px 2px 2px rgba(0, 0, 0, .3)',
      marginLeft: 24,

      '&::before': {
        content: '""',
        position: 'absolute',
        filter: 'drop-shadow(1px 2px 2px rgba(0, 0, 0, .3))',
        top: -14,
        left: -22,
        width: 10,
        height: 10,
        borderLeft: `5px solid ${theme.white}`,
        borderTop: `5px solid ${theme.white}`,
      },

      '&::after': {
        content: '""',
        position: 'absolute',
        filter: 'drop-shadow(1px 2px 2px rgba(0, 0, 0, .3))',
        bottom: -14,
        right: -22,
        width: 10,
        height: 10,
        borderRight: `5px solid ${theme.white}`,
        borderBottom: `5px solid ${theme.white}`,
      },

      '@media (max-width: 600px)': {
        fontSize: 30,
        marginBottom: theme.spacing.xl * 2,
      },
    },
  }),
  { theming }
);
