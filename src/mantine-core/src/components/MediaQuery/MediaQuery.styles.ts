import { createStyles, getSizeValue, MantineNumberSize, CSSObject } from '@mantine/styles';

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
        `@media (min-width: ${getSizeValue({ size: smallerThan, sizes: theme.breakpoints })}px)`
      ] = styles;
    }

    if (largerThan) {
      media[
        `@media (max-width: ${getSizeValue({ size: largerThan, sizes: theme.breakpoints })}px)`
      ] = styles;
    }

    if (query) {
      media[`@media ${query}`] = styles;
    }

    return { media };
  }
);
