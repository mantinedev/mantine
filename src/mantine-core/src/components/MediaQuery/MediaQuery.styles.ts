import { createStyles, getSizeValue, MantineNumberSize } from '@mantine/styles';

interface MediaQueryStyles {
  smallerThan: MantineNumberSize;
  largerThan: MantineNumberSize;
}

export default createStyles((theme, { smallerThan, largerThan }: MediaQueryStyles) => {
  const queries = {} as any;

  if (smallerThan) {
    queries[
      `@media (min-width: ${getSizeValue({ size: smallerThan, sizes: theme.breakpoints })}px)`
    ] = {
      display: 'none',
    };
  }

  if (largerThan) {
    queries[
      `@media (max-width: ${getSizeValue({ size: largerThan, sizes: theme.breakpoints })}px)`
    ] = {
      display: 'none',
    };
  }

  return {
    media: {
      ...queries,
    },
  };
});
