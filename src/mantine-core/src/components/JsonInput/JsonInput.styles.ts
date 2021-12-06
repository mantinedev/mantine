import { createStyles, MantineSize } from '@mantine/styles';

interface JsonInputStyles {
  size: MantineSize;
}

export default createStyles((theme, { size }: JsonInputStyles) => ({
  input: {
    fontFamily: theme.fontFamilyMonospace,
    fontSize: theme.fn.size({ size, sizes: theme.fontSizes }) - 2,
  },
}));
