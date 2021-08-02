import { createMemoStyles, MantineTheme, getSizeValue, MantineSize } from '../../theme';
import { INPUT_SIZES } from '../Input/Input';

interface MultiSelectStyles {
  theme: MantineTheme;
  size: MantineSize;
  variant: string;
  invalid: boolean;
}

export default createMemoStyles({
  wrapper: {
    position: 'relative',
  },

  values: ({ theme, size }: MultiSelectStyles) => ({
    minHeight: getSizeValue({ size, sizes: INPUT_SIZES }) - 2,
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginLeft: -theme.spacing.xs / 2,
    paddingTop: theme.spacing.xs / 2 - 2,
    paddingBottom: theme.spacing.xs / 2 - 2,
    boxSizing: 'border-box',
  }),

  value: ({ theme }: MultiSelectStyles) => ({
    margin: [theme.spacing.xs / 2 - 2, theme.spacing.xs / 2],
  }),

  searchInput: ({ theme, invalid, size }: MultiSelectStyles) => ({
    width: 60,
    backgroundColor: 'transparent',
    border: 0,
    outline: 0,
    fontSize: getSizeValue({ size, sizes: theme.fontSizes }),
    padding: 0,
    margin: theme.spacing.xs / 2,
    appearance: 'none',
    color: 'inherit',

    '&::placeholder': {
      color: invalid
        ? theme.colors.red[theme.colorScheme === 'dark' ? 6 : 7]
        : theme.colorScheme === 'dark'
        ? theme.colors.dark[2]
        : theme.colors.gray[5],
    },

    '&:disabled': {
      cursor: 'not-allowed',
    },
  }),

  searchInputEmpty: () => ({
    width: '100%',
  }),

  searchInputInputHidden: () => ({
    width: 0,
    height: 0,
    margin: 0,
    overflow: 'hidden',
  }),

  searchInputPointer: {
    cursor: 'pointer',

    '&:disabled': {
      cursor: 'not-allowed',
    },
  },
});
