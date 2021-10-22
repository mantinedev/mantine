import { createStyles, MantineNumberSize, getSizeValue } from '@mantine/styles';

interface AppShellStyles {
  padding: MantineNumberSize;
}

export default createStyles((theme, { padding }: AppShellStyles) => ({
  root: {},

  body: {
    display: 'flex',
  },

  main: {
    flex: 1,
    padding: getSizeValue({ size: padding, sizes: theme.spacing }),
  },
}));
