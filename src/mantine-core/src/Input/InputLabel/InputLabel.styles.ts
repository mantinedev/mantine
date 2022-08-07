import { createStyles, MantineSize } from '@mantine/styles';

export interface InputLabelStylesParams {
  size: MantineSize;
}

export default createStyles((theme, { size }: InputLabelStylesParams) => ({
  label: {
    display: 'inline-block',
    fontSize: theme.fn.size({ size, sizes: theme.fontSizes }),
    fontWeight: 500,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[9],
    wordBreak: 'break-word',
    cursor: 'default',
    WebkitTapHighlightColor: 'transparent',
  },

  required: {
    color: theme.fn.variant({ variant: 'filled', color: 'red' }).background,
  },
}));
