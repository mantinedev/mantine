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
    cursor: 'default',
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

  hovered: ({ theme }: MultiSelectStyles) => ({
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[1],
  }),

  dropdown: ({ theme, size }: MultiSelectStyles) => ({
    position: 'absolute',
    zIndex: 1,
    top: theme.spacing.xs / 2,
    left: 0,
    right: 0,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
    paddingTop: getSizeValue({ size, sizes: theme.spacing }) / 2,
    paddingBottom: getSizeValue({ size, sizes: theme.spacing }) / 2,
    overflowY: 'auto',
  }),

  nothingFound: ({ theme, size }: MultiSelectStyles) => ({
    color: theme.colors.gray[6],
    paddingTop: getSizeValue({ size, sizes: theme.spacing }) / 2,
    paddingBottom: getSizeValue({ size, sizes: theme.spacing }) / 2,
    textAlign: 'center',
  }),
});
