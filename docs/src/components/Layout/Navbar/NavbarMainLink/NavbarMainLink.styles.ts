import { createStyles, MantineTheme, rem } from '@mantine/core';

export default createStyles((theme: MantineTheme) => ({
  mainLink: {
    ...theme.fn.focusStyles(),
    WebkitTapHighlightColor: 'transparent',
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,
    padding: rem(5),
    marginLeft: rem(-5),
    marginRight: rem(-5),
    borderRadius: theme.radius.sm,
    userSelect: 'none',

    '& + &': {
      marginTop: rem(5),
    },
  },

  active: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
  },

  body: {
    marginLeft: theme.spacing.sm,
  },
}));
