import { createStyles, rem, em } from '@mantine/core';

export default createStyles((theme) => ({
  wrapper: {
    '& + &': {
      marginLeft: rem(60),
    },

    [`@media (max-width: ${em(1000)})`]: {
      '& + &': {
        marginLeft: rem(40),
      },
    },
  },

  link: {
    display: 'block',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: rem(3),
    paddingBottom: rem(3),

    '&:hover': {
      textDecoration: 'underline',
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: `calc(${theme.spacing.xs} / 2)`,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
}));
