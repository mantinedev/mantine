import {
  createStyles,
  MantineNumberSize,
  getSizeValue,
  MANTINE_SIZES,
  MantineSize,
  MantineTheme,
} from '@mantine/styles';

interface ColStyles {
  gutter: MantineNumberSize;
  columns: number;
  grow: boolean;
  offset: number;
  span: number;
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

const getColumnWidth = (colSpan: number, columns: number) => `${100 / (columns / colSpan)}%`;

function getBreakpointsStyles({
  sizes,
  theme,
  columns,
  grow,
}: {
  sizes: Record<MantineSize, number>;
  grow: boolean;
  theme: MantineTheme;
  columns: number;
}) {
  return MANTINE_SIZES.reduce((acc, size) => {
    if (typeof sizes[size] === 'number') {
      acc[`@media (min-width: ${theme.breakpoints[size]}px)`] = {
        flexBasis: getColumnWidth(sizes[size], columns),
        flexShrink: 0,
        maxWidth: grow ? 'unset' : getColumnWidth(sizes[size], columns),
      };
    }
    return acc;
  }, {});
}

export default createStyles(
  (theme, { gutter, grow, offset, columns, span, xs, sm, md, lg, xl }: ColStyles) => ({
    col: {
      boxSizing: 'border-box',
      flexGrow: grow ? 1 : 0,
      padding: getSizeValue({ size: gutter, sizes: theme.spacing }) / 2,
      marginLeft: offset ? `${100 / (columns / offset)}%` : undefined,
      flexBasis: getColumnWidth(span, columns),
      flexShrink: 0,
      maxWidth: grow ? 'unset' : getColumnWidth(span, columns),
      ...getBreakpointsStyles({ sizes: { xs, sm, md, lg, xl }, theme, columns, grow }),
    },
  })
);
