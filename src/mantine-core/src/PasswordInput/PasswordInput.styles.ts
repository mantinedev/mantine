import { createStyles, rem, getSize } from '@mantine/styles';
import { INPUT_SIZES } from '../Input';

export interface PasswordInputStylesParams {
  rightSectionWidth: number | string;
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
      border: `${rem(1)} solid transparent`,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      boxSizing: 'border-box',
      display: 'block',
      width: `calc(100% - ${rem(rightSectionWidth)})`,
      paddingLeft: `calc(${getSize({ size, sizes: INPUT_SIZES })}  / 3)`,
      fontSize: getSize({ size, sizes: theme.fontSizes }),
      height: `calc(${getSize({ size, sizes: INPUT_SIZES })} - ${rem(2)})`,
      lineHeight: `calc(${getSize({ size, sizes: INPUT_SIZES })} - ${rem(4)})`,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

      '&::-ms-reveal, &::-ms-clear': {
        display: 'none',
      },

      '&:focus': {
        outline: 0,
      },

      '&:disabled': {
        cursor: 'not-allowed',
        pointerEvents: 'none',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[1],
        color: theme.colors.dark[2],
        opacity: 0.6,

        '&::placeholder': {
          color: theme.colors.dark[2],
        },
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
        paddingLeft: getSize({ size, sizes: INPUT_SIZES }),
      },
    },
  })
);
