import { createStyles, getFontStyles, MantineNumberSize, getSizeValue } from '@mantine/styles';

interface NavbarStyles {
  width: number | string;
  height: number | string;
  padding: MantineNumberSize;
}

export default createStyles((theme, { width, height, padding }: NavbarStyles) => ({
  root: {
    ...getFontStyles(theme),
    width,
    height,
    boxSizing: 'border-box',
    padding: getSizeValue({ size: padding, sizes: theme.spacing }),
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    borderRight: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[2]
    }`,
  },
}));
