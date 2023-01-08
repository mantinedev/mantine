import { createStyles, rem } from '@mantine/styles';

export default createStyles((theme, _params, { size }) => ({
  input: {
    fontFamily: theme.fontFamilyMonospace,
    fontSize: `calc(${theme.fn.size({ size, sizes: theme.fontSizes })} - ${rem(2)})`,
  },
}));
