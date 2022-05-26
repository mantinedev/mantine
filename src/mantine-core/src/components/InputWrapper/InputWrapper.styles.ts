import { createStyles, MantineSize } from '@mantine/styles';

export interface InputWrapperStylesParams {
  size: MantineSize;
}

export default createStyles((theme, { size }: InputWrapperStylesParams) => ({
  root: {
    ...theme.fn.fontStyles(),
    lineHeight: theme.lineHeight,
  },

  label: {
    display: 'inline-block',
    marginBottom: 1,
    fontSize: theme.fn.size({ size, sizes: theme.fontSizes }),
    fontWeight: 500,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[9],
    wordBreak: 'break-word',
    cursor: 'default',
    WebkitTapHighlightColor: 'transparent',
  },

  error: {
    marginTop: theme.spacing.xs / 2,
    wordBreak: 'break-word',
    color: theme.fn.variant({ variant: 'filled', color: 'red' }).background,
    fontSize: theme.fn.size({ size, sizes: theme.fontSizes }) - 2,
    lineHeight: 1.2,
  },

  description: {
    marginBottom: 7,
    wordBreak: 'break-word',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
    fontSize: theme.fn.size({ size, sizes: theme.fontSizes }) - 2,
    lineHeight: 1.2,
  },

  required: {
    color: theme.colorScheme === 'dark' ? theme.colors.red[5] : theme.colors.red[7],
  },
}));
