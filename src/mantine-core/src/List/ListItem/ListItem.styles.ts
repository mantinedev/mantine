import { createStyles, MantineNumberSize } from '@mantine/styles';

interface ListItemStyles {
  spacing: MantineNumberSize;
  center: boolean;
}

export default createStyles((theme, { spacing, center }: ListItemStyles, getRef) => ({
  itemWrapper: {
    ref: getRef('itemWrapper'),
    display: 'inline',
  },

  item: {
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
    },
  },

  itemIcon: {
    display: 'inline-block',
    verticalAlign: 'middle',
    marginRight: theme.spacing.sm,
  },
}));
