import { createStyles, MantineNumberSize, CSSObject, MantineTheme } from '@mantine/styles';

export interface MediaQueryStylesParams {
  smallerThan: MantineNumberSize;
  largerThan: MantineNumberSize;
  styles: CSSObject | ((theme: MantineTheme) => CSSObject);
  query: string;
}

export default createStyles(
  (theme, { smallerThan, largerThan, query, styles }: MediaQueryStylesParams) => {
    const media: CSSObject = {};
    const minWidth = theme.fn.size({ size: largerThan, sizes: theme.breakpoints });
    const maxWidth = theme.fn.size({ size: smallerThan, sizes: theme.breakpoints });
    const _styles = typeof styles === 'function' ? styles(theme) : styles;

    if (largerThan !== undefined && smallerThan !== undefined) {
      media[`@media (min-width: ${minWidth}px) and (max-width: ${maxWidth - 1}px)`] = _styles;
    } else {
      if (largerThan !== undefined) {
        media[
          `@media (min-width: ${theme.fn.size({ size: largerThan, sizes: theme.breakpoints })}px)`
        ] = _styles;
      }

      if (smallerThan !== undefined) {
        media[
          `@media (max-width: ${
            theme.fn.size({ size: smallerThan, sizes: theme.breakpoints }) - 1
          }px)`
        ] = _styles;
      }
    }

    if (query) {
      media[`@media ${query}`] = _styles;
    }

    return { media };
  }
);
