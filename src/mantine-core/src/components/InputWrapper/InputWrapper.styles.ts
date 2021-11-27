import { createStyles, MantineSize } from '@mantine/styles';

interface InputWrapperStyles {
  size: MantineSize;
}

export default createStyles((theme, { size }: InputWrapperStyles) => ({
  root: {
    ...theme.fn.fontStyles(),
    lineHeight: theme.lineHeight,
  },

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

  error: {
    marginTop: theme.spacing.xs / 2,
    wordBreak: 'break-word',
    color: `${theme.colors.red[theme.colorScheme === 'dark' ? 6 : 7]} !important`,
  },

  description: {
    marginTop: -3,
    marginBottom: 7,
    wordBreak: 'break-word',
    color: `${
      theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6]
    } !important`,
    fontSize: `${theme.fn.size({ size, sizes: theme.fontSizes }) - 2}px !important`,
    lineHeight: 1.2,
  },

  required: {
    color: theme.colorScheme === 'dark' ? theme.colors.red[5] : theme.colors.red[7],
  },
}));
