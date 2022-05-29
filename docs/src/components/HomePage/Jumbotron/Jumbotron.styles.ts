import { createStyles } from '@mantine/core';

const BREAKPOINT = '@media (max-width: 960px)';

export default createStyles((theme) => ({
  jumbotron: {
    position: 'relative',
    boxSizing: 'border-box',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
  },

  inner: {
    position: 'relative',
    paddingTop: 220,
    paddingBottom: 180,

    [BREAKPOINT]: {
      paddingBottom: 100,
      paddingTop: 90,
    },
  },

  description: {
    marginTop: theme.spacing.xl * 1.5,
    fontSize: 24,
    maxWidth: 800,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],

    [BREAKPOINT]: {
      fontSize: 18,
    },
  },

  controls: {
    marginTop: theme.spacing.xl * 1.5,

    [BREAKPOINT]: {
      marginTop: theme.spacing.xl,
    },
  },

  control: {
    height: 64,
    paddingLeft: 46,
    paddingRight: 46,
    fontSize: 20,

    [BREAKPOINT]: {
      height: 54,
      paddingLeft: 18,
      paddingRight: 18,
      flex: 1,
    },
  },

  controlPrimary: {
    border: 0,
    fontWeight: 700,
    backgroundImage: `linear-gradient(52deg, ${
      theme.colors.blue[theme.colorScheme === 'dark' ? 5 : 7]
    } 3%, ${theme.colors.cyan[theme.colorScheme === 'dark' ? 4 : 5]} 97%)`,
  },

  githubControl: {
    borderColor: 'transparent',
    backgroundColor: theme.colors.dark[6],
    color: theme.white,
    fontWeight: 700,

    '&:hover': {
      backgroundColor: theme.colors.dark[5],
      color: theme.white,
    },
  },

  feature: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',

    '@media (max-width: 800px)': {
      flexDirection: 'row',
    },
  },

  featureBody: {
    marginTop: theme.spacing.xs,

    '@media (max-width: 800px)': {
      marginTop: 0,
      marginLeft: theme.spacing.lg,
    },
  },

  featureTitle: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  featureIcon: {
    color: theme.white,
    borderRadius: theme.radius.md,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 50,
    height: 50,
    backgroundImage: `linear-gradient(52deg, ${
      theme.colors.blue[theme.colorScheme === 'dark' ? 5 : 7]
    } 3%, ${theme.colors.cyan[theme.colorScheme === 'dark' ? 4 : 5]} 97%)`,

    '& svg': {
      display: 'block',
    },
  },
}));
