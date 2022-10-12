import { createStyles } from '@mantine/styles';
import type { ListStylesParams } from '../List.styles';

export default createStyles((theme, { spacing, center }: ListStylesParams, getRef) => ({
  itemWrapper: {
    ref: getRef('itemWrapper'),
    display: 'inline-flex',
    flexDirection: 'column',
    whiteSpace: 'normal',
  },

  item: {
    whiteSpace: 'nowrap',
    lineHeight: center ? 1 : theme.lineHeight,

    '&:not(:first-of-type)': {
      marginTop: theme.fn.size({ size: spacing, sizes: theme.spacing }),
    },
  },

  withIcon: {
    listStyle: 'none',

    [`& .${getRef('itemWrapper')}`]: {
      display: 'inline-flex',
      alignItems: center ? 'center' : 'flex-start',
      flexDirection: 'row',
    },
  },

  itemIcon: {
    display: 'inline-block',
    verticalAlign: 'middle',
    marginRight: theme.spacing.sm,
  },
}));
