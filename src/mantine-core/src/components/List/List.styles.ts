import { createStyles, MantineNumberSize } from '@mantine/styles';

interface ListStyles {
  withPadding: boolean;
  size: MantineNumberSize;
  listStyleType: string;
}

export default createStyles((theme, { withPadding, size, listStyleType }: ListStyles) => ({
  root: {
    ...theme.fn.fontStyles(),
    listStyleType,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    fontSize: theme.fn.size({ size, sizes: theme.fontSizes }),
    lineHeight: theme.lineHeight,
    margin: 0,
    paddingLeft: withPadding ? theme.spacing.xl : 0,
    listStylePosition: 'inside',
  },
}));
