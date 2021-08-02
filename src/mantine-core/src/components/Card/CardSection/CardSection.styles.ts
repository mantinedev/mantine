import { createMemoStyles, MantineNumberSize, MantineTheme, getSizeValue } from '../../../theme';

interface CardSectionStyles {
  theme: MantineTheme;
  padding: MantineNumberSize;
}

export default createMemoStyles({
  cardSection: ({ theme, padding }: CardSectionStyles) => ({
    marginLeft: -1 * getSizeValue({ size: padding, sizes: theme.spacing }),
    marginRight: -1 * getSizeValue({ size: padding, sizes: theme.spacing }),

    '&:first-child': {
      marginTop: -1 * getSizeValue({ size: padding, sizes: theme.spacing }),
    },

    '&:last-child': {
      marginBottom: -1 * getSizeValue({ size: padding, sizes: theme.spacing }),
    },
  }),
});
