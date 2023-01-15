import { createStyles, rem } from '@mantine/core';

export default createStyles((theme) => ({
  monthThead: {},
  monthRow: {},
  monthTbody: {},

  monthCell: {
    padding: rem(0.5),
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
