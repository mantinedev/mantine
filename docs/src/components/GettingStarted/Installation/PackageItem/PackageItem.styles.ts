import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  wrapper: {
    minHeight: 90,
    flex: `0 0 calc(50% - ${theme.spacing.md}px)`,
    margin: theme.spacing.md / 2,

    '@media (max-width: 1000px)': {
      flex: `0 0 calc(100% - ${theme.spacing.md}px)`,
    },
  },
}));
