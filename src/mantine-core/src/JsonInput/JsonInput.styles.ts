import { createStyles, MantineSize } from '@mantine/styles';

export interface JsonInputStylesParams {
  size: MantineSize;
}

export default createStyles((theme, { size }: JsonInputStylesParams) => ({
  input: {
    fontFamily: theme.fontFamilyMonospace,
    fontSize: theme.fn.size({ size, sizes: theme.fontSizes }) - 2,
  },
}));
