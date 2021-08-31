import { createUseStyles } from 'react-jss';
import { theming } from '@mantine/core';
import banner from './banner.png';

export default createUseStyles(
  (theme) => ({
    wrapper: {
      position: 'relative',
      minHeight: 700,
      backgroundColor: '#141844',
      display: 'flex',
    },

    title: {
      color: theme.white,
      fontSize: 48,
      letterSpacing: -1,
      fontWeight: 900,
      fontFamily: `Dosis, ${theme.fontFamily}`,
    },

    body: {
      flex: '0 0 800px',
      paddingTop: 140,
      paddingLeft: theme.spacing.xl * 2,
      paddingRight: theme.spacing.xl * 2,
      position: 'relative',
      zIndex: 1,
    },

    image: {
      minHeight: 700,
      flex: 1,
      backgroundImage: `url(${banner})`,
      backgroundSize: '100% auto',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right',
    },
  }),
  { theming }
);
