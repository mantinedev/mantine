import { createMemoStyles, MantineTheme } from '../../theme';

interface AutocompleteStyles {
  theme: MantineTheme;
}

export default createMemoStyles({
  wrapper: {},

  dropdown: ({ theme }: AutocompleteStyles) => ({
    backgroundColor: theme.white,
  }),
});
