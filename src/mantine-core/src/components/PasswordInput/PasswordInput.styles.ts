import { createStyles, MantineSize } from '@mantine/styles';
import { INPUT_SIZES } from '../Input';

interface PasswordInputStyles {
  size: MantineSize;
  rightSectionWidth: number;
}

export default createStyles((theme, { size, rightSectionWidth }: PasswordInputStyles) => ({
  input: {
    position: 'relative',
    overflow: 'hidden',
  },

  innerInput: {
    ...theme.fn.fontStyles(),
    backgroundColor: 'transparent',
    border: 0,
    boxSizing: 'border-box',
    position: 'absolute',
    display: 'block',
    width: `calc(100% - ${rightSectionWidth}px)`,
    paddingLeft: theme.fn.size({ size, sizes: INPUT_SIZES }) / 3,
    fontSize: theme.fn.size({ size, sizes: theme.fontSizes }),
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

  withIcon: {
    paddingLeft: `${theme.fn.size({ size, sizes: INPUT_SIZES })}px !important`,
  },
}));
