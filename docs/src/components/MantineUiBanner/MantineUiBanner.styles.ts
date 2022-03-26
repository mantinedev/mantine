import { createStyles } from '@mantine/core';
import image from './banner.webp';

export default createStyles((theme) => ({
  root: {
    position: 'relative',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
    padding: theme.spacing.xl * 1.5,
    minHeight: 340,
    borderRadius: theme.radius.md,
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center right',
    backgroundSize: 600,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

    [theme.fn.smallerThan('md')]: {
      backgroundImage: 'none',
      minHeight: 'unset',
    },
  },

  content: {
    position: 'relative',
    zIndex: 1,
    maxWidth: 400,
  },

  highlight: {
    color: theme.colors.blue[theme.colorScheme === 'dark' ? 5 : 6],
  },

  title: {
    fontSize: 32,
    fontWeight: 900,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    marginBottom: theme.spacing.sm,
  },

  secondaryControl: {
    border: '1px solid transparent',
  },
}));
