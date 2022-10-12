import { createStyles, MantineSize, INPUT_SIZES } from '@mantine/core';

interface TagInputStyles {
  size: MantineSize;
  invalid: boolean;
}

export const RIGHT_SECTION_WIDTH = {
  xs: 24,
  sm: 30,
  md: 34,
  lg: 44,
  xl: 54,
};

export default createStyles((theme, { size, invalid }: TagInputStyles) => ({
  wrapper: {
    position: 'relative',
  },

  values: {
    minHeight: theme.fn.size({ size, sizes: INPUT_SIZES }) - 2,
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginLeft: `calc(${-theme.spacing.xs}px / 2)`,
    paddingTop: `calc(${theme.spacing.xs}px / 2 - 2px)`,
    paddingBottom: `calc(${theme.spacing.xs}px / 2 - 2px)`,
    boxSizing: 'border-box',
  },

  value: {
    margin: `calc(${theme.spacing.xs}px / 2 - 2px) calc(${theme.spacing.xs}px / 2)`,
  },

  tagInput: {
    width: 60,
    backgroundColor: 'transparent',
    border: 0,
    outline: 0,
    fontSize: theme.fn.size({ size, sizes: theme.fontSizes }),
    padding: 0,
    margin: `calc(${theme.spacing.xs}px / 2)`,
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

  tagInputEmpty: {
    width: '100%',
  },

  tagInputInputHidden: {
    width: 0,
    height: 0,
    margin: 0,
    overflow: 'hidden',
  },

  tagInputPointer: {
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
