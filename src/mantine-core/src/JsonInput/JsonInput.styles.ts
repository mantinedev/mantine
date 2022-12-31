import { createStyles } from '@mantine/styles';

export default createStyles((theme, _params, { size }) => ({
  input: {
    fontFamily: theme.fontFamilyMonospace,
    fontSize: theme.fn.size({ size, sizes: theme.fontSizes }) - 2,
  },
}));
