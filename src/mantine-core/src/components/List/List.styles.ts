import { createStyles, getFontStyles, getSizeValue, MantineNumberSize } from '@mantine/tss';

interface ListStyles {
  withPadding: boolean;
  size: MantineNumberSize;
  listStyleType: string;
}

export default createStyles((theme, { withPadding, size, listStyleType }: ListStyles) => ({
  root: {
    ...getFontStyles(theme),
    listStyleType,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    fontSize: getSizeValue({ size, sizes: theme.fontSizes }),
    lineHeight: theme.lineHeight,
    margin: 0,
    paddingLeft: withPadding ? theme.spacing.xl : 0,
    listStylePosition: 'inside',
  },
}));
