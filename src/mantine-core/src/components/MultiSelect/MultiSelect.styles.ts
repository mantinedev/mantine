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

  searchInput: {
    width: 180,
  },
});
