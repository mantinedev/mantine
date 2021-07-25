import { createMemoStyles, MantineTheme } from '../../theme';

interface MultiSelectStyles {
  theme: MantineTheme;
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

  dropdown: {},
  nothingFound: {},
});
