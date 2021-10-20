import { createStyles, getSizeValue, MantineSize } from '@mantine/styles';

interface JsonInputStyles {
  size: MantineSize;
}

export default createStyles((theme, { size }: JsonInputStyles) => ({
  input: {
    fontFamily: theme.fontFamilyMonospace,
    fontSize: getSizeValue({ size, sizes: theme.fontSizes }) - 2,
  },
}));
