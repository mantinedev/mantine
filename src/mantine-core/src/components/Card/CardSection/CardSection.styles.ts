import { createStyles } from '@mantine/tss';
import { MantineNumberSize, getSizeValue } from '@mantine/theme';

interface CardSectionStyles {
  padding: MantineNumberSize;
}

export default createStyles((theme, { padding }: CardSectionStyles) => ({
  cardSection: {
    marginLeft: -1 * getSizeValue({ size: padding, sizes: theme.spacing }),
    marginRight: -1 * getSizeValue({ size: padding, sizes: theme.spacing }),

    '&:first-child': {
      marginTop: -1 * getSizeValue({ size: padding, sizes: theme.spacing }),
    },

    '&:last-child': {
      marginBottom: -1 * getSizeValue({ size: padding, sizes: theme.spacing }),
    },
  },
}));
