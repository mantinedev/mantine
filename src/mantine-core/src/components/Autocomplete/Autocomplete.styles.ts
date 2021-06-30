import { createMemoStyles, getSizeValue, MantineSize, MantineTheme } from '../../theme';
import { INPUT_SIZES } from '../Input/Input';

interface AutocompleteStyles {
  theme: MantineTheme;
  size: MantineSize;
}

export default createMemoStyles({
  wrapper: {
    position: 'relative',
  },

  dropdown: ({ theme, size }: AutocompleteStyles) => ({
    position: 'absolute',
    top: getSizeValue({ size, sizes: INPUT_SIZES }) + theme.spacing.sm / 2,
    left: 0,
    right: 0,
    backgroundColor: theme.white,
    border: `1px solid ${theme.colors.gray[2]}`,
    paddingTop: getSizeValue({ size, sizes: theme.spacing }) / 2,
    paddingBottom: getSizeValue({ size, sizes: theme.spacing }) / 2,
  }),

  item: ({ theme, size }: AutocompleteStyles) => ({
    textAlign: 'left',
    width: '100%',
    padding: [
      getSizeValue({ size, sizes: theme.spacing }) / 2,
      getSizeValue({ size, sizes: theme.spacing }),
    ],
    fontSize: getSizeValue({ size, sizes: theme.fontSizes }),
  }),

  hovered: ({ theme }: AutocompleteStyles) => ({
    backgroundColor: theme.colors.gray[1],
  }),
});
