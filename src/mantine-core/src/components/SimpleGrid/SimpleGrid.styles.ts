import { createMemoStyles, MantineTheme, MantineNumberSize, getSizeValue } from '../../theme';

export interface GridBreakpoint {
  maxWidth: number;
  cols: number;
  spacing?: MantineNumberSize;
}

interface SimpleGridStyles {
  theme: MantineTheme;
  breakpoints: GridBreakpoint[];
  cols: number;
  spacing: MantineNumberSize;
}

export default createMemoStyles({
  grid: ({ theme, spacing }: SimpleGridStyles) => ({
    display: 'flex',
    flexWrap: 'wrap',
    margin: -getSizeValue({ size: spacing, sizes: theme.spacing }),
  }),

  col: ({ theme, spacing, breakpoints }: SimpleGridStyles) => {
    const queries = breakpoints.reduce((acc, query) => {
      const querySpacing = getSizeValue({ size: query.spacing || spacing, sizes: theme.spacing });

      acc[`@media (max-width: ${query.maxWidth}px)`] = {
        margin: querySpacing / 2,
        maxWidth: `calc(${100 / query.cols}% - ${querySpacing}px)`,
      };

      return acc;
    }, {});

    return {
      margin: getSizeValue({ size: spacing, sizes: theme.spacing }) / 2,
      width: '100%',
      maxWidth: `calc(33.333333% - ${theme.spacing.md}px)`,

      ...queries,
    };
  },
});
