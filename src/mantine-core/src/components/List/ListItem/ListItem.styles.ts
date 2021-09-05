import { createMemoStyles, MantineTheme, MantineNumberSize, getSizeValue } from '../../../theme';

interface ListItemStyles {
  theme: MantineTheme;
  spacing: MantineNumberSize;
  center: boolean;
}

export default createMemoStyles({
  item: ({ theme, spacing, center }: ListItemStyles) => ({
    lineHeight: center ? 1 : theme.lineHeight,

    '&:not(:first-of-type)': {
      marginTop: getSizeValue({ size: spacing, sizes: theme.spacing }),
    },
  }),

  itemWrapper: {
    display: 'inline',
  },

  withIcon: ({ center }: ListItemStyles) => ({
    listStyle: 'none',

    '& $itemWrapper': {
      display: 'inline-flex',
      alignItems: center ? 'center' : 'flex-start',
    },
  }),

  itemIcon: ({ theme }) => ({
    display: 'inline-block',
    verticalAlign: 'middle',
    marginRight: theme.spacing.sm,
  }),
});
