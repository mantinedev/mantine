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
    paddingTop: 200,
    paddingBottom: 180,

    [BREAKPOINT]: {
      paddingBottom: 100,
      paddingTop: 90,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    fontSize: 104,
    lineHeight: 1,
    margin: 0,
    padding: 0,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,

    [BREAKPOINT]: {
      fontSize: 40,
      lineHeight: 1.2,
    },
  },

  highlight: {
    backgroundImage: `linear-gradient(52deg, ${
      theme.colors.blue[theme.colorScheme === 'dark' ? 5 : 7]
    } 3%, ${theme.colors.cyan[theme.colorScheme === 'dark' ? 4 : 5]} 97%)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
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
    fontSize: 22,

    [BREAKPOINT]: {
      height: 54,
      paddingLeft: 18,
      paddingRight: 18,
      flex: 1,
    },
  },

  controlPrimary: {
    border: 0,
    backgroundImage: `linear-gradient(52deg, ${
      theme.colors.blue[theme.colorScheme === 'dark' ? 5 : 7]
    } 3%, ${theme.colors.cyan[theme.colorScheme === 'dark' ? 4 : 5]} 97%)`,
  },

  githubControl: {
    borderWidth: 2,
    borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.dark[9],
    backgroundColor: 'transparent',
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
