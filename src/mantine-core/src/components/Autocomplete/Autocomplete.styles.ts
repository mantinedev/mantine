import { createMemoStyles, getSizeValue, MantineSize, MantineTheme } from '../../theme';

interface AutocompleteStyles {
  theme: MantineTheme;
  size: MantineSize;
}

export default createMemoStyles({
  wrapper: {
    position: 'relative',
  },

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

  nothingFound: ({ theme, size }: AutocompleteStyles) => ({
    boxSizing: 'border-box',
    color: theme.colors.gray[6],
    paddingTop: getSizeValue({ size, sizes: theme.spacing }) / 2,
    paddingBottom: getSizeValue({ size, sizes: theme.spacing }) / 2,
    textAlign: 'center',
  }),
});
