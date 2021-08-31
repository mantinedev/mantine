import { createUseStyles } from 'react-jss';
import { theming } from '@mantine/core';
import banner from './banner.png';

export default createUseStyles(
  (theme) => ({
    wrapper: {
      position: 'relative',
      minHeight: 700,
      backgroundColor: '#080a1d',
    },

    supTitle: {
      fontSize: theme.fontSizes.sm,
      textTransform: 'uppercase',
      fontWeight: 700,
      color: theme.white,
      opacity: 0.8,
      marginBottom: theme.spacing.sm,
    },

    title: {
      color: theme.white,
      fontSize: 44,
      letterSpacing: -1,
      lineHeight: 1.2,
      fontWeight: 800,
    },

    highlight: {
      color: '#69f3fa',
    },

    description: {
      color: '#d7dafa',
      maxWidth: 580,
      marginTop: theme.spacing.md,
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
      width: 800,
      flex: 1,
      backgroundImage: `url(${banner})`,
      backgroundSize: 'auto 100%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right',
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      zIndex: 0,
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
      backgroundColor: '#4a5085',
      color: theme.white,
      textShadow: 'none',
    },

    features: {
      maxWidth: 740,
    },

    featureIcon: {
      backgroundColor: '#303561',
    },

    featureBody: {
      marginTop: theme.spacing.md,
    },

    featureTitle: {
      color: theme.white,
      fontWeight: 500,
      lineHeight: 1,
      marginBottom: 7,
    },

    featureDescription: {
      color: '#d7dafa',
      fontSize: theme.fontSizes.xs,
    },
  }),
  { theming }
);
