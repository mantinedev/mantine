import { createStyles, MantineColor } from '@mantine/styles';

interface MarkStyles {
  color: MantineColor;
}

export default createStyles((theme, { color }: MarkStyles) => ({
  root: {
    backgroundColor: theme.fn.themeColor(color, theme.colorScheme === 'dark' ? 5 : 2),
    color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : 'inherit',
  },
}));
