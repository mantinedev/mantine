import { createStyles, getFontStyles } from '@mantine/styles';

interface NavbarStyles {
  width: number | string;
  height: number | string;
}

export default createStyles((theme, { width, height }: NavbarStyles) => ({
  root: {
    ...getFontStyles(theme),
    width,
    height,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    borderRight: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[2]
    }`,
  },
}));
