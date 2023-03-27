import { createStyles, rem } from '@mantine/core';
import { getGradient } from '../get-gradient';
import banner from './banner.webp';

export default createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    minHeight: rem(580),
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[1],

    [theme.fn.smallerThan('sm')]: {
      minHeight: 'auto',
      paddingBottom: theme.spacing.xl,
    },
  },

  supTitle: {
    fontSize: theme.fontSizes.sm,
    textTransform: 'uppercase',
    fontWeight: 700,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    opacity: 0.8,
    marginBottom: theme.spacing.sm,

    [theme.fn.smallerThan('sm')]: {
      fontSize: theme.fontSizes.xs,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(44),
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(26),
    },
  },

  highlight: {
    color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.cyan[6],
    backgroundImage: getGradient(theme, 'text'),
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },

  description: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[7],
    lineHeight: 1.5,
    maxWidth: rem(580),
    marginTop: theme.spacing.md,
  },

  body: {
    flex: `0 0 ${rem(500)}`,
    paddingTop: rem(140),
    position: 'relative',
    zIndex: 1,

    [theme.fn.smallerThan('sm')]: {
      paddingTop: `calc(${theme.spacing.xl} * 2)`,
    },
  },

  image: {
    minHeight: rem(500),
    width: rem(800),
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
    display: theme.dir === 'rtl' ? 'none' : undefined,

    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  controls: {
    marginTop: theme.spacing.md,
    display: 'flex',
    gap: theme.spacing.md,
    flexWrap: 'wrap',

    '& > *': {
      [theme.fn.smallerThan('sm')]: {
        flex: 1,
      },
    },
  },

  control: {
    backgroundImage: getGradient(theme, 'bg'),
  },
}));
