import { createStyles, MantineSize } from '@mantine/styles';

export interface InputLabelStylesParams {
  size: MantineSize;
}

export default createStyles((theme, { size }: InputLabelStylesParams) => ({
  label: {
    display: 'inline-block',
    marginBottom: 4,
    fontSize: theme.fn.size({ size, sizes: theme.fontSizes }),
    fontWeight: 500,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[9],
    wordBreak: 'break-word',
    cursor: 'default',
    WebkitTapHighlightColor: 'transparent',
  },

  required: {
    color: theme.colorScheme === 'dark' ? theme.colors.red[5] : theme.colors.red[7],
  },
}));
