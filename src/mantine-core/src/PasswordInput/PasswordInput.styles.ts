import { createStyles, rem } from '@mantine/styles';
import { INPUT_SIZES } from '../Input';

export interface PasswordInputStylesParams {
  rightSectionWidth: number;
}

export default createStyles(
  (theme, { rightSectionWidth }: PasswordInputStylesParams, { size }) => ({
    visibilityToggle: {},

    input: {
      position: 'relative',
      overflow: 'hidden',
    },

    innerInput: {
      ...theme.fn.fontStyles(),
      ...theme.fn.cover(0),
      backgroundColor: 'transparent',
      border: '1px solid transparent',
      borderLeftWidth: 0,
      borderRightWidth: 0,
      boxSizing: 'border-box',
      display: 'block',
      width: `calc(100% - ${rem(rightSectionWidth)})`,
      paddingLeft: `calc(${theme.fn.size({ size, sizes: INPUT_SIZES })}  / 3)`,
      fontSize: theme.fn.size({ size, sizes: theme.fontSizes }),
      height: `calc(${theme.fn.size({ size, sizes: INPUT_SIZES })} - ${rem(2)})`,
      lineHeight: `calc(${theme.fn.size({ size, sizes: INPUT_SIZES })} - ${rem(4)})`,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

      '&:focus': {
        outline: 0,
      },

      '&:disabled': {
        cursor: 'not-allowed',
      },

      '&::placeholder': {
        ...theme.fn.placeholderStyles(),
        opacity: 1,
      },

      '&[data-invalid]': {
        color: theme.fn.variant({ variant: 'filled', color: 'red' }).background,

        '&::placeholder': {
          opacity: 1,
          color: theme.fn.variant({ variant: 'filled', color: 'red' }).background,
        },
      },

      '&[data-with-icon]': {
        paddingLeft: theme.fn.size({ size, sizes: INPUT_SIZES }),
      },
    },
  })
);
