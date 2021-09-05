import { createMemoStyles, MantineTheme, MantineNumberSize, getSizeValue } from '../../../theme';

interface ListItemStyles {
  theme: MantineTheme;
  spacing: MantineNumberSize;
}

export default createMemoStyles({
  item: ({ theme, spacing }: ListItemStyles) => ({
    '&:not(:first-of-type)': {
      marginTop: getSizeValue({ size: spacing, sizes: theme.spacing }),
    },
  }),

  itemWrapper: {
    display: 'inline',
  },

  withIcon: {
    listStyle: 'none',

    '& $itemWrapper': {
      display: 'inline-flex',
      alignItems: 'flex-start',
    },
  },

  icon: ({ theme }) => ({
    display: 'inline-block',
    verticalAlign: 'middle',
    marginRight: theme.spacing.sm,
  }),
});
