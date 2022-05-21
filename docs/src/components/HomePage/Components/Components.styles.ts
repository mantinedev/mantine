import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  root: {
    paddingTop: 100,
    paddingBottom: 100,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
  },

  control: {
    display: 'block',
    width: '100%',
    padding: `${theme.spacing.md}px ${theme.spacing.lg}px`,
    borderRadius: theme.radius.md,
    border: '1px solid transparent',
    position: 'relative',

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[1],
    },

    '&[data-active]': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
      borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3],
      boxShadow: theme.shadows.md,
      zIndex: 1,
    },
  },

  controlTitle: {
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));
