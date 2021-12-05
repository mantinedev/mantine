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

    '&:hover': {
      backgroundColor: theme.colors.gray[0],
    },
  },
}));
