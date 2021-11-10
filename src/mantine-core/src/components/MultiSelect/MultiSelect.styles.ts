import { createStyles, MantineSize } from '@mantine/styles';
import { INPUT_SIZES } from '../Input';

interface MultiSelectStyles {
  size: MantineSize;
  invalid: boolean;
}

export default createStyles((theme, { size, invalid }: MultiSelectStyles) => ({
  wrapper: {
    position: 'relative',
  },

  values: {
    minHeight: theme.fn.size({ size, sizes: INPUT_SIZES }) - 2,
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginLeft: -theme.spacing.xs / 2,
    paddingTop: theme.spacing.xs / 2 - 2,
    paddingBottom: theme.spacing.xs / 2 - 2,
    boxSizing: 'border-box',
  },

  value: {
    margin: `${theme.spacing.xs / 2 - 2}px ${theme.spacing.xs / 2}px`,
  },

  searchInput: {
    width: 60,
    backgroundColor: 'transparent',
    border: 0,
    outline: 0,
    fontSize: theme.fn.size({ size, sizes: theme.fontSizes }),
    padding: 0,
    margin: theme.spacing.xs / 2,
    appearance: 'none',
    color: 'inherit',

    '&::placeholder': {
      color: invalid
        ? theme.colors.red[theme.colorScheme === 'dark' ? 6 : 7]
        : theme.colorScheme === 'dark'
        ? theme.colors.dark[3]
        : theme.colors.gray[5],
    },

    '&:disabled': {
      cursor: 'not-allowed',
    },
  },

  searchInputEmpty: {
    width: '100%',
  },

  searchInputInputHidden: {
    width: 0,
    height: 0,
    margin: 0,
    overflow: 'hidden',
  },

  searchInputPointer: {
    cursor: 'pointer',

    '&:disabled': {
      cursor: 'not-allowed',
    },
  },

  input: {
    '&:not(:disabled)': {
      cursor: 'pointer',
    },
  },
}));
