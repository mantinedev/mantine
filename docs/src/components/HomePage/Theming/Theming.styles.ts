import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  prism: {
    '& pre': {
      backgroundColor: `${
        theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white
      } !important`,
      borderRadius: theme.radius.md,
      padding: 14,
      paddingTop: 30,
      paddingBottom: 30,
    },

    '& .mantine-ScrollArea-viewport': {
      borderRadius: theme.radius.md,
    },

    '& .mantine-ScrollArea-root': {
      marginTop: theme.spacing.xl,
      borderRadius: theme.radius.md,
      boxShadow: theme.shadows.md,
    },
  },
}));
