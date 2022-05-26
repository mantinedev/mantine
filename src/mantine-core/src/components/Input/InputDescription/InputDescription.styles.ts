import { createStyles, MantineSize } from '@mantine/styles';

export interface InputDescriptionStylesParams {
  size: MantineSize;
}

export default createStyles((theme, { size }: InputDescriptionStylesParams) => ({
  description: {
    marginBottom: 7,
    wordBreak: 'break-word',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
    fontSize: theme.fn.size({ size, sizes: theme.fontSizes }) - 2,
    lineHeight: 1.2,
  },
}));
