import { createMemoStyles, MantineTheme, getSizeValue, MantineSize } from '../../theme';

interface MultiSelectStyles {
  theme: MantineTheme;
  size: MantineSize;
}

export default createMemoStyles({
  wrapper: {},

  values: ({ theme }: MultiSelectStyles) => ({
    height: `calc(100% + ${theme.spacing.xs}px)`,
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    margin: -theme.spacing.xs / 2,
  }),

  input: {
    overflow: 'hidden',
  },

  value: ({ theme }: MultiSelectStyles) => ({
    margin: theme.spacing.xs / 2,
  }),

  searchInput: ({ theme }: MultiSelectStyles) => ({
    width: 140,
    backgroundColor: 'transparent',
    border: 0,
    outline: 0,
    fontSize: theme.fontSizes.sm,
    padding: 0,
    margin: 0,
    marginLeft: 5,
    appearance: 'none',
    cursor: 'default',

    '&::placeholder': {
      color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
    },
  }),

  searchInputInputHidden: {
    width: 0,
    height: 0,
    overflow: 'hidden',
  },

  dropdown: {},
  nothingFound: {},

  item: ({ theme, size }: MultiSelectStyles) => ({
    textAlign: 'left',
    width: '100%',
    padding: [
      getSizeValue({ size, sizes: theme.spacing }) / 1.5,
      getSizeValue({ size, sizes: theme.spacing }),
    ],
    fontSize: getSizeValue({ size, sizes: theme.fontSizes }),
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
  }),

  selected: ({ theme }: MultiSelectStyles) => ({
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors[theme.primaryColor][0],
    color: theme.colorScheme === 'dark' ? theme.white : theme.colors[theme.primaryColor][9],
  }),

  hovered: ({ theme }: MultiSelectStyles) => ({
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[1],
  }),
});
