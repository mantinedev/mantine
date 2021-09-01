import { createUseStyles } from 'react-jss';
import { theming } from '@mantine/core';
import banner from './banner.png';

export default createUseStyles(
  (theme) => ({
    wrapper: {
      position: 'relative',
      minHeight: 700,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[1],
    },

    supTitle: {
      fontSize: theme.fontSizes.sm,
      textTransform: 'uppercase',
      fontWeight: 700,
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      opacity: 0.8,
      marginBottom: theme.spacing.sm,
    },

    title: {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      fontSize: 44,
      letterSpacing: -1,
      lineHeight: 1.2,
      fontWeight: 800,
    },

    highlight: {
      color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.cyan[6],
    },

    description: {
      color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[7],
      lineHeight: 1.5,
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

      '@media (max-width: 1310px)': {
        paddingLeft: theme.spacing.xl,
        paddingRight: theme.spacing.xl,
      },
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

      '@media (max-width: 1230px)': {
        display: 'none',
      },
    },

    controls: {
      marginTop: theme.spacing.md,
    },

    control: {
      '@media (max-width: 600px)': {
        flex: 1,
      },
    },

    controlMain: {
      color: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.cyan[6],
      textShadow: 'none',
    },

    controlSecondary: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.white,
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      textShadow: 'none',
    },

    features: {
      maxWidth: 740,
      paddingBottom: theme.spacing.xl,

      '@media (max-width: 755px)': {
        marginTop: [[theme.spacing.xl * 2], '!important'],
      },
    },

    featureIcon: {
      color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.cyan[6],
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.white,
    },

    featureBody: {
      marginTop: theme.spacing.md,
    },

    featureTitle: {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      fontWeight: 500,
      lineHeight: 1,
      marginBottom: 7,
    },

    featureDescription: {
      color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[7],
      fontSize: theme.fontSizes.xs,
      lineHeight: 1.5,
    },
  }),
  { theming }
);
