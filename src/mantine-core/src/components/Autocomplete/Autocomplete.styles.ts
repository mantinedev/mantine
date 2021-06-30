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
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
    paddingTop: getSizeValue({ size, sizes: theme.spacing }) / 2,
    paddingBottom: getSizeValue({ size, sizes: theme.spacing }) / 2,
  }),

  item: ({ theme, size }: AutocompleteStyles) => ({
    textAlign: 'left',
    width: '100%',
    padding: [
      getSizeValue({ size, sizes: theme.spacing }) / 1.5,
      getSizeValue({ size, sizes: theme.spacing }),
    ],
    fontSize: getSizeValue({ size, sizes: theme.fontSizes }),
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
  }),

  hovered: ({ theme }: AutocompleteStyles) => ({
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[1],
  }),
});
