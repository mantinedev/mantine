import { createStyles, MantineSize } from '@mantine/styles';
import { INPUT_SIZES } from '../Input';

export interface PasswordInputStylesParams {
  size: MantineSize;
  rightSectionWidth: number;
}

export default createStyles((theme, { size, rightSectionWidth }: PasswordInputStylesParams) => ({
  visibilityToggle: {},

  input: {
    position: 'relative',
    overflow: 'hidden',
  },

  innerInput: {
    ...theme.fn.fontStyles(),
    backgroundColor: 'transparent',
    border: '1px solid transparent',
    borderLeftWidth: 0,
    borderRightWidth: 0,
    boxSizing: 'border-box',
    position: 'absolute',
    display: 'block',
    width: `calc(100% - ${rightSectionWidth}px)`,
    paddingLeft: theme.fn.size({ size, sizes: INPUT_SIZES }) / 3,
    fontSize: theme.fn.size({ size, sizes: theme.fontSizes }),
    height: theme.fn.size({ size, sizes: INPUT_SIZES }) - 2,
    lineHeight: `${theme.fn.size({ size, sizes: INPUT_SIZES }) - 4}px`,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,

    '&:focus': {
      outline: 0,
    },

    '&:disabled': {
      cursor: 'not-allowed',
    },

    '&::placeholder': {
      opacity: 1,
      userSelect: 'none',
      color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
    },
  },

  invalid: {
    color: theme.fn.variant({ variant: 'filled', color: 'red' }).background,

    '&::placeholder': {
      opacity: 1,
      color: theme.fn.variant({ variant: 'filled', color: 'red' }).background,
    },
  },

  withIcon: {
    paddingLeft: `${theme.fn.size({ size, sizes: INPUT_SIZES })}px !important`,
  },
}));
