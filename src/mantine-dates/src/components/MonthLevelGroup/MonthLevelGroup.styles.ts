import { createStyles } from '@mantine/core';

export default createStyles((theme, _, { size }) => ({
  monthLevelGroup: {
    display: 'flex',

    '& [data-month-level]:not(:last-of-type)': {
      marginRight: theme.fn.size({ size, sizes: theme.spacing }),
    },
  },
}));
