import { createStyles } from '@mantine/styles';

interface CardSectionStyles {
  padding: string | number;
  withBorder: boolean;
}

export default createStyles((theme, { padding, withBorder }: CardSectionStyles) => ({
  cardSection: {
    display: 'block',
    marginLeft: -1 * theme.fn.size({ size: padding, sizes: theme.spacing }),
    marginRight: -1 * theme.fn.size({ size: padding, sizes: theme.spacing }),
    borderTop: withBorder && `1px solid ${theme.colors.gray[3]}`,
    borderBottom: withBorder && `1px solid ${theme.colors.gray[3]}`,

    '& + &': {
      borderTop: 0,
    },

    '&[data-first]': {
      marginTop: -1 * theme.fn.size({ size: padding, sizes: theme.spacing }),
      borderTop: 0,
      borderBottom: withBorder && `1px solid ${theme.colors.gray[3]}`,
    },

    '&[data-last]': {
      marginBottom: -1 * theme.fn.size({ size: padding, sizes: theme.spacing }),
      borderBottom: 0,
    },
  },
}));
