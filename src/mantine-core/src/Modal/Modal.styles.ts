import { createUseStyles } from 'react-jss';
import { theming, MantineTheme } from '@mantine/theme';

export default createUseStyles(
  (theme: MantineTheme) => ({
    inState: {
      '& $overlay': {
        opacity: 1,
      },

      '& $modal': {
        transform: 'translateY(0) scaleY(1)',
      },
    },

    outState: {
      '& $overlay': {
        opacity: 0,
      },

      '& $modal': {
        transform: 'translateY(-200px) scaleY(0)',
      },
    },

    overlay: {
      transitionProperty: 'opacity',
      transitionTimingFunction: 'cubic-bezier(.11,1.07,.71,.89)',
      transitionDuration: ({
        transitionDuration,
        reduceMotion,
      }: {
        transitionDuration: number;
        reduceMotion: boolean;
      }) => (reduceMotion ? 1 : transitionDuration),
    },

    wrapper: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },

    inner: {
      position: 'absolute',
      zIndex: 1,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflowY: 'auto',
      padding: [theme.spacing.xl * 2, theme.spacing.md],
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',

      '@media (max-width: 755px)': {
        padding: theme.spacing.sm,
      },
    },

    title: {
      marginRight: theme.spacing.md,
    },

    modal: {
      padding: theme.spacing.lg,
      transformOrigin: 'top',
      transitionProperty: 'transform',
      transitionDuration: ({
        transitionDuration,
        reduceMotion,
      }: {
        transitionDuration: number;
        reduceMotion: boolean;
      }) => (reduceMotion ? 1 : transitionDuration),
    },

    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },

    body: {
      marginTop: theme.spacing.md,
    },
  }),
  { theming }
);
