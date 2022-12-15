import { createStyles, MantineNumberSize } from '@mantine/styles';

const sizes = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 30,
  xl: 36,
};

export interface InlineInputStylesParams {
  size: MantineNumberSize;
  labelPosition: 'left' | 'right';
}

export default createStyles((theme, { labelPosition, size }: InlineInputStylesParams) => ({
  root: {},

  body: {
    display: 'inline-flex',
  },

  labelWrapper: {
    ...theme.fn.fontStyles(),
    display: 'inline-flex',
    flexDirection: 'column',
    WebkitTapHighlightColor: 'transparent',
    fontSize: size in sizes ? theme.fn.size({ size, sizes: theme.fontSizes }) : undefined,
    lineHeight: size in sizes ? `${theme.fn.size({ size, sizes })}px` : undefined,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    cursor: theme.cursorType,
    order: labelPosition === 'left' ? 1 : 2,
  },

  description: {
    marginTop: `calc(${theme.spacing.xs}px / 2)`,
    [labelPosition === 'left' ? 'paddingRight' : 'paddingLeft']: theme.spacing.sm,
  },

  error: {
    marginTop: `calc(${theme.spacing.xs}px / 2)`,
    [labelPosition === 'left' ? 'paddingRight' : 'paddingLeft']: theme.spacing.sm,
  },

  label: {
    cursor: theme.cursorType,
    [labelPosition === 'left' ? 'paddingRight' : 'paddingLeft']: theme.spacing.sm,

    '&[data-disabled]': {
      color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
    },
  },
}));
