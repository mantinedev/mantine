import { createStyles, rem, em } from '@mantine/core';

export default createStyles((theme) => ({
  title: {
    display: 'inline-block',
    position: 'relative',
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    fontSize: rem(42),
    lineHeight: 1.1,
    margin: 0,
    padding: 0,
    textAlign: 'left',
    marginBottom: `calc(${theme.spacing.xl} * 2)`,
    letterSpacing: 1,
    marginLeft: rem(22),
    textTransform: 'uppercase',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,

    [theme.fn.smallerThan('sm')]: {
      marginBottom: theme.spacing.md,
    },

    '&::before, &::after': {
      content: '""',
      position: 'absolute',
      width: rem(10),
      height: rem(10),
    },

    '&::before': {
      top: rem(-14),
      left: rem(-22),
      borderLeft: `${rem(5)} solid transparent`,
      borderTop: `${rem(5)} solid transparent`,
    },

    '&::after': {
      bottom: rem(-14),
      right: rem(-22),
      borderRight: `${rem(5)} solid transparent`,
      borderBottom: `${rem(5)} solid transparent`,
    },

    [`@media (max-width: ${em(600)})`]: {
      fontSize: rem(28),
      marginLeft: 0,

      '&::before, &::after': {
        display: 'none',
      },
    },
  },

  white: {
    color: theme.white,
    textShadow: `${rem(1)} ${rem(2)} ${rem(2)} rgba(0, 0, 0, .3)`,

    '&::before, &::after': {
      filter: `drop-shadow(${rem(1)} ${rem(2)} ${rem(2)} rgba(0, 0, 0, .3))`,
      borderColor: theme.white,
    },
  },

  default: {
    '&::before, &::after': {
      borderColor: 'inherit',
    },
  },
}));
