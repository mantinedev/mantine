import { createStyles, keyframes } from '@mantine/core';

const fadeId = keyframes({
  from: { opacity: 0, transform: 'translateY(-20px) scale(0.95) skewX(-2deg)' },
  to: { opacity: 1, transform: 'translateY(0) scale(1) rotate(0)' },
});

export default createStyles((theme) => ({
  root: {
    paddingTop: 100,
    paddingBottom: 100,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
  },

  controls: {
    position: 'relative',
  },

  controlsIndicator: {
    pointerEvents: 'none',
    position: 'absolute',
    left: 0,
    right: 0,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    boxShadow: theme.shadows.md,
    borderRadius: theme.radius.md,
    transition: 'transform 250ms ease',
    zIndex: 2,
  },

  control: {
    width: '100%',
    padding: `${theme.spacing.md}px ${theme.spacing.lg}px`,
    borderRadius: theme.radius.md,
    position: 'relative',
    height: 80,

    '&:hover': theme.fn.hover({
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.fn.rgba(theme.colors.dark[8], 0.5)
          : theme.colors.gray[1],
    }),

    [theme.fn.smallerThan('sm')]: {
      height: 60,
      padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    },
  },

  controlInner: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    zIndex: 3,
  },

  controlTitle: {
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    position: 'relative',
    zIndex: 5,

    [theme.fn.smallerThan('sm')]: {
      fontSize: theme.fontSizes.sm,
    },
  },

  controlDescription: {
    [theme.fn.smallerThan('sm')]: {
      fontSize: theme.fontSizes.xs,
    },
  },

  controlIcon: {
    color: theme.colors.blue[6],
    marginRight: theme.spacing.md,
  },

  demo: {
    paddingLeft: theme.spacing.xl * 2,
    animation: `${fadeId} 300ms ease`,

    [theme.fn.smallerThan('md')]: {
      paddingLeft: 0,
      paddingTop: theme.spacing.xl,
    },
  },
}));
