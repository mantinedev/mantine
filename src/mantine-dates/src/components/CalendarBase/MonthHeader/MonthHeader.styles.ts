import { createStyles } from '@mantine/core';

const SIZE = 40;

export default createStyles((theme) => ({
  monthHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    align: 'center',
    marginBottom: theme.spacing.sm,
  },

  monthHeaderControl: {
    '&:disabled': {
      opacity: 0,
      cursor: 'default',
    },
  },

  monthHeaderSelect: {
    fontSize: theme.fontSizes.sm,
    display: 'block',
    height: SIZE,
    padding: `0 ${theme.spacing.md}px`,
    borderRadius: theme.radius.sm,
    flex: 1,
    textAlign: 'center',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
    },
  },
}));
