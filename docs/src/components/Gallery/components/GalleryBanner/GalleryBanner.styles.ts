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

    supTitle: {
      fontSize: theme.fontSizes.sm,
      textTransform: 'uppercase',
      fontWeight: 700,
      color: '#a7adfc',
      marginBottom: theme.spacing.xs / 2,
    },

    title: {
      color: theme.white,
      fontSize: 44,
      letterSpacing: -1,
      fontWeight: 800,
    },

    body: {
      flex: '0 0 700px',
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
      backgroundSize: 'auto 100%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right',
    },

    controls: {
      marginTop: theme.spacing.md,
    },

    controlMain: {
      backgroundColor: theme.white,
      color: '#333980',
      textShadow: 'none',
    },

    controlSecondary: {
      backgroundColor: '#282d69',
      color: theme.white,
      textShadow: 'none',
    },
  }),
  { theming }
);
