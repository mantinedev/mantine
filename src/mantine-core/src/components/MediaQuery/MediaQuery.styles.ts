import { createStyles, MantineNumberSize, CSSObject } from '@mantine/styles';

interface MediaQueryStyles {
  smallerThan: MantineNumberSize;
  largerThan: MantineNumberSize;
  styles: CSSObject;
  query: string;
}

export default createStyles(
  (theme, { smallerThan, largerThan, query, styles }: MediaQueryStyles) => {
    const media: CSSObject = {};

    if (smallerThan) {
      media[
        `@media (min-width: ${
          theme.fn.size({ size: smallerThan, sizes: theme.breakpoints }) + 1
        }px)`
      ] = styles;
    }

    if (largerThan) {
      media[
        `@media (max-width: ${theme.fn.size({ size: largerThan, sizes: theme.breakpoints })}px)`
      ] = styles;
    }

    if (query) {
      media[`@media ${query}`] = styles;
    }

    return { media };
  }
);
