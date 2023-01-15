import { createStyles, getSize } from '@mantine/styles';

export default createStyles((theme, _params, { size }) => ({
  label: {
    display: 'inline-block',
    fontSize: getSize({ size, sizes: theme.fontSizes }),
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
