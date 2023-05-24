import { createStyles, rem, getSize } from '@mantine/styles';

const sizes = {
  xs: rem(16),
  sm: rem(20),
  md: rem(24),
  lg: rem(30),
  xl: rem(36),
};

export interface InlineInputStylesParams {
  labelPosition: 'left' | 'right';
}

export default createStyles((theme, { labelPosition }: InlineInputStylesParams, { size }) => ({
  root: {},

  body: {
    display: 'flex',

    '&:has(input:disabled) label': {
      color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
    },
  },

  labelWrapper: {
    ...theme.fn.fontStyles(),
    display: 'inline-flex',
    flexDirection: 'column',
    WebkitTapHighlightColor: 'transparent',
    fontSize: size in sizes ? getSize({ size, sizes: theme.fontSizes }) : undefined,
    lineHeight: size in sizes ? getSize({ size, sizes }) : undefined,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    cursor: theme.cursorType,
    order: labelPosition === 'left' ? 1 : 2,
  },

  description: {
    marginTop: `calc(${theme.spacing.xs} / 2)`,
    [labelPosition === 'left' ? 'paddingRight' : 'paddingLeft']: theme.spacing.sm,
  },

  error: {
    marginTop: `calc(${theme.spacing.xs} / 2)`,
    [labelPosition === 'left' ? 'paddingRight' : 'paddingLeft']: theme.spacing.sm,
  },

  label: {
    cursor: theme.cursorType,
    [labelPosition === 'left' ? 'paddingRight' : 'paddingLeft']: theme.spacing.sm,

    '&:disabled, &[data-disabled]': {
      color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
    },
  },
}));
