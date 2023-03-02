import { createStyles, getSize, MantineSize } from '@mantine/styles';
import { INPUT_SIZES } from '../Input';

interface TagInputStyles {
  size: MantineSize;
  invalid: boolean;
  inputFieldPosition: InputFieldPosition;
}

export type InputFieldPosition = 'inside' | 'top' | 'bottom';

export const RIGHT_SECTION_WIDTH = {
  xs: 24,
  sm: 30,
  md: 34,
  lg: 44,
  xl: 54,
};

export default createStyles(
  (theme, { size, invalid, inputFieldPosition }: TagInputStyles) => ({
    wrapper: {
      position: 'relative',
    },

    values: {
      minHeight: getSize({ size, sizes: INPUT_SIZES }),
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      marginLeft: `calc(${-theme.spacing.xs}px / 2)`,
      paddingTop: `calc(${theme.spacing.xs}px / 2 - 2px)`,
      paddingBottom: `calc(${theme.spacing.xs}px / 2 - 2px)`,
      boxSizing: 'border-box',
      width: '100%',
    },

    value: {
      margin: `calc(${theme.spacing.xs}px / 2 - 2px) calc(${theme.spacing.xs}px / 2)`,
    },

    tagInput: {
      flex: 1,
      width: 60,
      minWidth: inputFieldPosition !== 'inside' ? '90%' : 'auto',
      backgroundColor: 'transparent',
      border: 0,
      outline: 0,
      fontSize: getSize({ size, sizes: theme.fontSizes }),
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
  })
);
