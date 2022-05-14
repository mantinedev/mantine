import { createStyles, MantineNumberSize } from '@mantine/styles';

interface CardSectionStyles {
  padding: MantineNumberSize;
}

export default createStyles((theme, { padding }: CardSectionStyles) => ({
  cardSection: {
    display: 'block',
    marginLeft: -1 * theme.fn.size({ size: padding, sizes: theme.spacing }),
    marginRight: -1 * theme.fn.size({ size: padding, sizes: theme.spacing }),

    '&[data-first]': {
      marginTop: -1 * theme.fn.size({ size: padding, sizes: theme.spacing }),
    },

    '&[data-last]': {
      marginBottom: -1 * theme.fn.size({ size: padding, sizes: theme.spacing }),
    },
  },
}));
