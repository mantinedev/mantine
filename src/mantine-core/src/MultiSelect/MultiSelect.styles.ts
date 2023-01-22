import { createStyles, rem, getSize } from '@mantine/styles';
import { INPUT_SIZES } from '../Input';
import { sizes as DEFAULT_VALUE_SIZES } from './DefaultValue/DefaultValue.styles';

export interface MultiSelectStylesParams {
  invalid: boolean;
}

export default createStyles((theme, { invalid }: MultiSelectStylesParams, { size }) => ({
  wrapper: {
    position: 'relative',
  },

  values: {
    minHeight: `calc(${getSize({ size, sizes: INPUT_SIZES })} - ${rem(2)})`,
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginLeft: `calc(-${theme.spacing.xs} / 2)`,
    boxSizing: 'border-box',

    '&[data-clearable]': {
      marginRight: getSize({ size, sizes: INPUT_SIZES }),
    },
  },

  value: {
    margin: `calc(${theme.spacing.xs} / 2 - ${rem(2)}) calc(${theme.spacing.xs} / 2)`,
  },

  searchInput: {
    ...theme.fn.fontStyles(),
    flex: 1,
    minWidth: rem(60),
    backgroundColor: 'transparent',
    border: 0,
    outline: 0,
    fontSize: getSize({ size, sizes: theme.fontSizes }),
    padding: 0,
    marginLeft: `calc(${theme.spacing.xs} / 2)`,
    appearance: 'none',
    color: 'inherit',
    lineHeight: `calc(${getSize({ size, sizes: INPUT_SIZES })} - ${rem(2)})`,
    maxHeight: getSize({ size, sizes: DEFAULT_VALUE_SIZES }),

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
    minWidth: 0,
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
