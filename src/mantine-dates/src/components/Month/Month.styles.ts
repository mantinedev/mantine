import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  monthThead: {},
  monthRow: {},
  monthTbody: {},

  monthCell: {
    padding: 0.5,
  },

  month: {
    ...theme.fn.fontStyles(),
    borderCollapse: 'collapse',
    tableLayout: 'fixed',

    '& *': {
      boxSizing: 'border-box',
    },
  },
}));
