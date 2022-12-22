import { createStyles } from '@mantine/core';

export default createStyles((theme, _, { size }) => ({
  yearLevelGroup: {
    display: 'flex',

    '& [data-year-level]:not(:last-of-type)': {
      marginRight: theme.fn.size({ size, sizes: theme.spacing }),
    },
  },
}));
