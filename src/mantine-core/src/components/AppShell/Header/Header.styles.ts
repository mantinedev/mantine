import { createStyles, getFontStyles, getSizeValue, MantineNumberSize } from '@mantine/styles';

interface HeaderStyles {
  height: number | string;
  padding: MantineNumberSize;
}

export default createStyles((theme, { height, padding }: HeaderStyles) => ({
  root: {
    ...getFontStyles(theme),
    height,
    boxSizing: 'border-box',
    padding: getSizeValue({ size: padding, sizes: theme.spacing }),
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[2]
    }`,
  },
}));
