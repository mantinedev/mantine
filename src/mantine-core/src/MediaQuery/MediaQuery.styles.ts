import {
  createStyles,
  MantineNumberSize,
  CSSObject,
  MantineTheme,
  rem,
  getBreakpointValue,
  getSize,
} from '@mantine/styles';

export interface MediaQueryStylesParams {
  smallerThan: MantineNumberSize;
  largerThan: MantineNumberSize;
  styles: CSSObject | ((theme: MantineTheme) => CSSObject);
  query: string;
}

export default createStyles(
  (theme, { smallerThan, largerThan, query, styles }: MediaQueryStylesParams) => {
    const media: CSSObject = {};
    const minWidth = getSize({ size: largerThan, sizes: theme.breakpoints });
    const maxWidth = getSize({ size: smallerThan, sizes: theme.breakpoints });
    const _styles = typeof styles === 'function' ? styles(theme) : styles;

    if (largerThan !== undefined && smallerThan !== undefined) {
      media[
        `@media (min-width: ${rem(minWidth)}) and (max-width: ${rem(
          getBreakpointValue(maxWidth) - 1
        )})`
      ] = _styles;
    } else {
      if (largerThan !== undefined) {
        media[`@media (min-width: ${getSize({ size: largerThan, sizes: theme.breakpoints })})`] =
          _styles;
      }

      if (smallerThan !== undefined) {
        media[
          `@media (max-width: ${rem(
            getBreakpointValue(getSize({ size: smallerThan, sizes: theme.breakpoints })) - 1
          )})`
        ] = _styles;
      }
    }

    if (query) {
      media[`@media ${query}`] = _styles;
    }

    return { media };
  }
);
