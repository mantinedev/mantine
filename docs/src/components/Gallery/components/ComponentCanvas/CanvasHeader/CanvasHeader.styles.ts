import { createStyles } from '@mantine/core';

const BREAKPOINT = '@media (max-width: 755px)';

export default createStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    borderTopRightRadius: theme.radius.md,
    borderTopLeftRadius: theme.radius.md,
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [BREAKPOINT]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },

  controls: {
    [BREAKPOINT]: {
      marginTop: 0,
      flexDirection: 'row-reverse',
    },
  },

  controlLabel: {
    marginLeft: theme.spacing.xs,
  },

  action: {
    borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3],
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    },
  },

  actions: {
    [BREAKPOINT]: {
      display: 'none',
    },
  },
}));
