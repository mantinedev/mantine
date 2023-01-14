import { createStyles, MantineSize, getSize, rem } from '@mantine/styles';
import { INPUT_SIZES } from '../Input';

interface TagInputStyles {
  size: MantineSize;
  invalid: boolean;
}

export default createStyles((theme, { size, invalid }: TagInputStyles) => ({
  wrapper: {
    position: 'relative',
    cursor: 'text',
  },

  values: {
    minHeight: `calc(${getSize({ size, sizes: INPUT_SIZES })} - ${rem(2)})`,
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginLeft: `calc(-1 * ${theme.spacing.xs} / 2)`,
    paddingTop: `calc(${theme.spacing.xs} / 2 - ${rem(2)})`,
    paddingBottom: `calc(${theme.spacing.xs} / 2 - ${rem(2)})`,
    boxSizing: 'border-box',
    cursor: 'text',
  },

  value: {
    margin: `calc(${theme.spacing.xs} / 2 - ${rem(2)}) calc(${theme.spacing.xs} / 2)`,
  },

  tagInput: {
    width: rem(60),
    backgroundColor: 'transparent',
    border: 0,
    outline: 0,
    fontSize: getSize({ size, sizes: theme.fontSizes }),
    padding: 0,
    margin: `calc(${theme.spacing.xs} / 2)`,
    cursor: 'text',

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

    '&[data-empty]': {
      width: '100%',
    },
  },

  input: {
    cursor: 'text',
  },

  inputWrapper: {
    cursor: 'text',
  },
}));
