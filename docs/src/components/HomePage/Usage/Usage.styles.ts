import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  wrapper: {
    paddingTop: 120,
    paddingBottom: 60,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  description: {
    lineHeight: 1.6,

    '@media (max-width: 960px)': {
      fontSize: theme.fontSizes.md,
    },
  },

  guide: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[3]
    }`,
    borderRadius: theme.radius.md,
    padding: theme.spacing.xl,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  guideTitle: {
    marginTop: theme.spacing.md,
    fontWeight: 500,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
  },
}));
