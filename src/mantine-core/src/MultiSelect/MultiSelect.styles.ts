import { createStyles, MantineSize } from '@mantine/styles';
import { INPUT_SIZES } from '../Input';

export interface MultiSelectStylesParams {
  size: MantineSize;
  invalid: boolean;
}

export default createStyles((theme, { size, invalid }: MultiSelectStylesParams) => ({
  wrapper: {
    position: 'relative',
  },

  values: {
    minHeight: theme.fn.size({ size, sizes: INPUT_SIZES }) - 2,
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginLeft: `calc(${-theme.spacing.xs}px / 2)`,
    boxSizing: 'border-box',
  },

  value: {
    margin: `calc(${theme.spacing.xs}px / 2 - 2px) calc(${theme.spacing.xs}px / 2)`,
  },

  searchInput: {
    ...theme.fn.fontStyles(),
    flex: 1,
    minWidth: 60,
    backgroundColor: 'transparent',
    border: 0,
    outline: 0,
    fontSize: theme.fn.size({ size, sizes: theme.fontSizes }),
    padding: 0,
    marginLeft: `calc(${theme.spacing.xs}px / 2)`,
    appearance: 'none',
    color: 'inherit',
    lineHeight: `${theme.fn.size({ size, sizes: INPUT_SIZES }) - 2}px`,

    '&::placeholder': {
      opacity: 1,
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
    cursor: 'pointer',

    '&:disabled': {
      cursor: 'not-allowed',
    },
  },
}));
