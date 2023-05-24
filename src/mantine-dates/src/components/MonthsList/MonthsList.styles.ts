import { createStyles, rem } from '@mantine/core';

export default createStyles(() => ({
  monthsList: {
    borderCollapse: 'collapse',
    borderWidth: 0,
    cursor: 'pointer',
  },

  monthsListCell: {
    padding: 0,

    '&[data-with-spacing]': {
      padding: rem(0.5),
    },
  },

  monthsListRow: {},
}));
