import { createStyles, rem } from '@mantine/core';

export default createStyles((theme) => ({
  category: {
    marginBottom: `calc(${theme.spacing.xl} * 1.2)`,
  },

  categoryCollapsed: {
    marginBottom: 0,
  },

  header: {
    ...theme.fn.focusStyles(),
    backgroundColor: 'transparent',
    display: 'flex',
    alignItems: 'center',
    width: `calc(100% + ${theme.spacing.md})`,
    color: theme.colorScheme === 'dark' ? theme.white : theme.colors.gray[7],
    height: rem(32),
    border: 0,
    padding: `0 ${theme.spacing.md}`,
    paddingLeft: 0,
    cursor: 'pointer',
  },

  icon: {
    width: rem(15),
    height: rem(15),
    marginRight: theme.spacing.md,
    transform: 'rotate(0deg)',
    transition: 'transform 150ms ease',
  },

  iconCollapsed: {
    transform: 'rotate(-90deg)',
  },

  innerCategory: {
    paddingTop: rem(15),
  },

  innerCategoryIcon: {
    marginRight: rem(10),
    width: rem(14),
    height: rem(14),
  },

  innerCategoryTitle: {
    position: 'relative',
    paddingLeft: rem(23),
    marginLeft: rem(7),
    marginBottom: rem(5),
    borderLeft: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[3]
    }`,
    height: rem(34),
    display: 'flex',
    alignItems: 'center',
    fontSize: theme.fontSizes.xs,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
    borderTopRightRadius: theme.radius.sm,
    borderBottomRightRadius: theme.radius.sm,

    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: rem(-5),
      left: rem(-1),
      height: rem(5),
      width: rem(1),
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[3],
    },
  },

  link: {
    ...theme.fn.focusStyles(),
    WebkitTapHighlightColor: 'transparent',
    borderLeft: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[3]
    }`,
    outline: 0,
    display: 'block',
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
    paddingLeft: rem(23),
    paddingRight: theme.spacing.md,
    marginLeft: rem(7),
    height: rem(34),
    lineHeight: rem(34),
    borderTopRightRadius: theme.radius.sm,
    borderBottomRightRadius: theme.radius.sm,
    fontSize: theme.fontSizes.sm,
    userSelect: 'none',
  },

  linkActive: {
    borderLeftColor: theme.colors.blue[7],
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.fn.rgba(theme.colors.blue[9], 0.45)
        : theme.colors.blue[0],
    color: theme.colorScheme === 'dark' ? theme.colors.blue[1] : theme.colors.blue[8],
    fontWeight: 500,
  },

  title: {
    userSelect: 'none',
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
    paddingTop: rem(4),
    color: theme.colorScheme === 'dark' ? theme.white : theme.colors.gray[7],
    letterSpacing: rem(0.5),
    wordSpacing: 1,
  },
}));
